import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  paragraphs: 3,
  sentences: 5,
  l33t: false,
  nihongo: false,
  words: [],
  randomAdjective: 'cyberpunk',
}

const getters = {
  getParagraphs: state => state.paragraphs,
  getWordList: state => state.words,
  getAdjective: state => state.randomAdjective,
}

const mutations = {
  setWordList (state, wordData) {
    state.words = wordData
  },
  setAdjective (state, adjective) {
    state.randomAdjective = adjective
  },
}

const actions = {
  fetchWords ({ state, commit }) {
    let dataURL = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'

    const getWords = fetch(dataURL)

    getWords
      .then(data => data.json())
      .then((data) => {
        let totalWords = data.total
        let skip = 0
        let wordlist = state.words
        let collectedWords = wordlist.length > 0 ? wordlist.length : 0

        console.log('totalWords:', totalWords)
        console.log('items:', data.items.length)

        for (const i in data.items) {
          wordlist.push(data.items[i])
        }

        while (collectedWords < totalWords) {
          collectedWords = collectedWords + wordlist.length
          console.log('collectedWords:', collectedWords)
          skip = skip + collectedWords
          console.log('skip:', skip)

          // @TODO: Repeatable callback.
          // if (total > max) {
          //   data = this.getWords(dataURL + '&skip=' + skip)
          // }
        }

        commit('setWordList', wordlist)

        let filteredWords = wordlist.filter((word) => {
          return word.fields.type === 'adjective'
        })
        let w = Math.floor(Math.random() * filteredWords.length)
        let adjective = filteredWords[w].fields.word

        commit('setAdjective', adjective)
      })
  },
  findAdjective ({ state, commit }) {
    let words = state.words
    let filteredWords = words.filter((word) => {
      return word.fields.type === 'adjective'
    })
    let w = Math.floor(Math.random() * filteredWords.length)
    let adjective = filteredWords[w].fields.word

    commit('setAdjective', adjective)
    // return adjective
  },
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
