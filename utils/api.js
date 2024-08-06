import localforage from 'localforage'

const ENDPOINT = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries'
const TOKEN = 'f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'

localforage.config({
	name: 'Gibson Ipsum',
	storeName: 'gibsonipsum',
	description: 'Store array of words for offline use.',
})

/**
 * @typedef {Object} WordObject
 * @property {{ plural: string, tags: string[], type: string, word: string }} fields
 */

function* fetchAllWords({ url, nextSkip }) {
	let shouldFetch = true

	// Loop forever, yielding the results of the ajax call.
	while (true) {
		yield fetch(url)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log('RESPONSE', resp)
				let { items, skip, total } = resp

				if (items && items.length > 0) {
					/**
					 * Set the endpoint URL and boolean flag for the
					 * next time this generator runs.
					 */
					nextSkip = skip + 100
					url = `${ENDPOINT}?access_token=${TOKEN}&skip=${nextSkip}`
					shouldFetch = skip + items.length < total

					return { words: items, shouldFetch }
				}

				return null
			})
	}
}

/**
 * @typedef {Object} FetchWordsOptions
 * @property {WordObject[]} wordlist
 * @property {Generator<Promise<{ words: WordObject[], shouldFetch: boolean}>, void, unknown>} fetch
 * @property {Function} onComplete
 */
/**
 *
 * @param {FetchWordsOptions} options
 */
export async function fetchWords(options) {
	/**
	 * Initialize the array where we store the words (only called the
	 * first time through this function).
	 */
	if (!options.wordlist) {
		options.wordlist = []
	}

	/**
	 * Make the initial call to get the generator, specifying the url
	 * to get the first page of data.
	 */
	if (!options.fetch) {
		options.fetch = await fetchAllWords({
			url: `${ENDPOINT}?access_token=${TOKEN}`,
			nextSkip: 0,
		})
	}

	let { fetch, wordlist, onComplete } = options
	let next = await fetch.next()

	/**
	 * Get the result of the most recent ajax call from the
	 * generator function.
	 * @type {{ words: WordObject[], shouldFetch: boolean }}
	 */
	let { words, shouldFetch } = next.value

	/**
	 * Append words to main list and either call this function
	 * again, or the callback function.
	 */
	if (words) wordlist = [...wordlist, ...words]
	if (shouldFetch) fetchWords({ fetch, wordlist, onComplete })

	onComplete(wordlist)
}

export async function retrieveWords() {
	return localforage.getItem('words')
}

/**
 * @param {Record<string, unknown>[]} wordsArray
 */
export async function storeWords(wordsArray) {
	await localforage.setItem('words', wordsArray)
	// .then((value) => value)
	// .catch((error) => {
	// 	console.log('There was an error storing the words.', error)
	// })
}
