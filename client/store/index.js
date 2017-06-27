import Vue from 'vue'
import Vuex from 'vuex'


let wordlist = []
let skip = 0

function getAllWords (endpoint, callback) {
  const getWords = fetch(endpoint)

  getWords
    .then(data => data.json())
    .then((data) => {
      for (const i in data.items) {
        wordlist.push(data.items[i])
      }

      // Pages are always 100 items or less.
      if (data.items.length < 100) {
        callback(wordlist)
      } else {
        skip = skip + 100
        getAllWords(endpoint + '&skip=' + skip, callback)
      }
    })
}

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

    getAllWords(dataURL, (wordlist) => {
      commit('setWordList', wordlist)

      let filteredWords = wordlist.filter((word) => {
        return word.fields.type === 'adjective' && word.fields.tags.includes('compound')
      })
      let w = Math.floor(Math.random() * filteredWords.length)
      let adjective = filteredWords[w].fields.word

      commit('setAdjective', adjective)
    })
  },
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
