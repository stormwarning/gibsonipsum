const url =
    'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'
let words = []

function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest()

        req.open('GET', url, true)
        req.addEventListener('load', function() {
            if (req.status < 400) {
                resolve(req.responseText)
            } else {
                reject(new Error('Request failed: ' + req.statusText))
            }
        })
        req.addEventListener('error', function() {
            reject(new Error('Network error'))
        })
        req.send(null)
    })
}

function collectWords(data) {
    let wordlist = []
    let skip = 0
    let total = 0
    let max = 0

    console.log('data: ', data)
    wordlist = data.items
    max = data.total
    console.log('words: ', wordlist)

    while (total < max) {
        total = total + data.items.length
        wordlist[wordlist.length] = data.items
        skip = skip + data.limit

        // @TODO: Repeatable callback.
        //
        // if (total > max) {
        //   data = this.getWords(url + '&skip=' + skip)
        // }
    }

    words = wordlist
}

// function getWords (url) {
//   var data = get(url).then(JSON.parse)

//   data.then(collectWords)

//   return data
// }

const getWords = fetch(url)

getWords
    .then((data) => data.json())
    .then((data) => {
        collectWords(data)
    })

// var data = this.getWords(url);
export default words
