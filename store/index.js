import { getWords } from '../utils/api'

export const state = () => ({
    version: process.env.VERSION,
    paragraphs: 3,
    sentences: 5,
    l33t: false,
    nihongo: false,
    words: [],
    wordsLoaded: false,
    randomAdjective: 'cyberpunk',
    controlsVisible: true,
})

export const getters = {
    getParagraphs: (state) => state.paragraphs,
    getSentences: (state) => state.sentences,
    getWordList: (state) => state.words,
    getWordsLoaded: (state) => state.wordsLoaded,
    getAdjective: (state) => state.randomAdjective,
    getNihongo: (state) => state.nihongo,
    getControlsVisible: (state) => state.controlsVisible,
}

export const mutations = {
    setParagraphs(state, number) {
        state.paragraphs = number
    },
    setSentences(state, number) {
        state.sentences = number
    },
    setWordList(state, wordData) {
        state.words = wordData
    },
    setWordsLoaded(state, boolean) {
        state.wordsLoaded = boolean
    },
    setAdjective(state, adjective) {
        state.randomAdjective = adjective
    },
    setNihongo(state, nihongo) {
        state.nihongo = nihongo
    },
    setControlsVisible(state, boolean) {
        state.controlsVisible = boolean
    },
}

export const actions = {
    fetchWords({ state, commit }) {
        getWords({
            onComplete: (wordlist) => {
                commit('setWordList', wordlist)
                commit('setWordsLoaded', true)

                let filteredWords = wordlist.filter((word) => {
                    return (
                        word.fields.type === 'adjective' &&
                        word.fields.tags.includes('compound')
                    )
                })
                let w = Math.floor(Math.random() * filteredWords.length)
                let adjective = filteredWords[w].fields.word

                commit('setAdjective', adjective)
            },
        })
    },
}
