import localforage from 'localforage'

const ENDPOINT = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries'
const TOKEN = 'f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'

localforage.config({
    name: 'Gibson Ipsum',
    storeName: 'gibsonipsum',
    description: 'Store array of words for offline use.',
})

function* fetchAllWords({ url, nextSkip }) {
    let shouldFetch = true

    // Loop forever, yielding the results of the ajax call.
    while (true) {
        yield fetch(url)
            .then((resp) => resp.json())
            .then((resp) => {
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
                } else {
                    return null
                }
            })
    }
}

export async function fetchWords(opts) {
    /**
     * Initialize the array where we store the words (only called the
     * first time through this function).
     */
    if (!opts.hasOwnProperty('wordlist')) {
        opts.wordlist = []
    }

    /**
     * Make the initial call to get the generator, specifying the url
     * to get the first page of data.
     */
    if (!opts.hasOwnProperty('fetch')) {
        opts.fetch = await fetchAllWords({
            url: `${ENDPOINT}?access_token=${TOKEN}`,
            nextSkip: 0,
        })
    }

    let { fetch, wordlist, onComplete } = opts
    let next = fetch.next()

    /**
     * Get the result of the most recent ajax call from the
     * generator function.
     */
    next.value.then(({ words, shouldFetch }) => {
        /**
         * Append words to main list and either call this function
         * again, or the callback function.
         */
        if (words) {
            wordlist = wordlist.concat(words)
            shouldFetch
                ? fetchWords({ fetch, wordlist, onComplete })
                : onComplete(wordlist)
        } else {
            onComplete(wordlist)
        }
    })
}

export const retrieveWords = () => {
    return localforage.getItem('words').then((res) => {
        return res
    })
}

export const storeWords = (wordsArray) => {
    return localforage
        .setItem('words', wordsArray)
        .then((value) => {
            return value
        })
        .catch((err) => {
            console.log('There was an error storing the words.', err)
        })
}
