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

        max = data.total

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

        commit('setWordList', data.items)
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
