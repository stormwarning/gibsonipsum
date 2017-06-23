import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const dataURL = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'

const state = {
  paragraphs: 3,
  sentences: 5,
  l33t: false,
  nihongo: false,
  words: [],
}

const getters = {
  getParagraphs: state => {
    return state.paragraphs
  },
  getWordList: state => state.words,
  getIpsum: state => state.ipsum,
}

const mutations = {
  setWordList (state, wordData) {
    state.words = wordData
  },

}

const actions = {
  fetchWords ({ commit }) {
    const getWords = fetch(dataURL)

    getWords
      .then(data => data.json())
      .then((data) => {
        let max = 0
        let skip = 0
        let total = 0
        let wordlist = []

        // wordlist = data.items
        max = data.total
        console.log(typeof data, data)

        // for (const i in data.items) {
        //   wordlist.push(data.items[i])
        // }

        // while (total < max) {
        //   total = total + data.items.length
        //   // Infinite loop here!?
        //   wordlist[wordlist.length] = data.items
        //   skip = skip + data.limit

        //   // @TODO: Repeatable callback.
        //   //
        //   // if (total > max) {
        //   //   data = this.getWords(url + '&skip=' + skip)
        //   // }
        // }

        console.log('words is: ', typeof wordlist)

        commit('setWordList', data.items)
      })
  },

  generateSentence ({ state }) {
    let words = state.words
    let sentenceLength = Math.floor(Math.random() * 10) + 7
    let s = ''

    console.log('state: ', state.words)

    // if (words.length) {
      for (var i = 0; i <= sentenceLength; i++) {
        const w = Math.floor(Math.random() * words.length)
        console.log('rand word:', words[w])
        const word = words[w].fields.word

        if (i === 0) {
          // Capitalise the first word.
          s += word.charAt(0).toUpperCase() + word.slice(1) + ' '
        } else if (i === sentenceLength) {
          // Put a period & space after the last word.
          s += word + '. '
        } else {
          // Add a space between words.
          s += word + ' '
        }
      }
    // }

    return s
  },

  generateParagraph ({ state, dispatch }) {
    let numParagraphs = state.paragraphs
    let p = ''

    console.log('gen ps: ', numParagraphs)

    for (var i = 0; i < numParagraphs; i++) {
      p += dispatch('generateSentence')
    }

    return p
  },

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
