<template>
    <main class="h-100 ph2 pb6 ml5 ph0-ns pv6-ns ml0-ns code">
        <p
            v-for="(paragraph, pIdx) in paragraphContent"
            :key="pIdx"
            class="f6 measure-wide mt4 mt0-ns center"
        >
            <template v-for="(sentence, sIdx) in paragraph">
                <word
                    v-for="(word, wIdx) in sentence"
                    :key="`${sIdx} ${wIdx}`"
                    :word="word"
                    :starts-sentence="wIdx === 0"
                    :ends-sentence="wIdx === sentence.length - 1"
                ></word>
            </template>
        </p>
        <!-- <p
            v-for="p in ipsum"
            :key="p"
            class="f6 measure-wide mt4 mt0-ns center"
            v-html="p"
        ></p> -->
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Word from '~/components/Word'

export default {
    components: {
        Word,
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            wordlist: 'getWordList',
            paragraphCount: 'getParagraphs',
            paragraphLength: 'getSentences',
        }),
        ipsum() {
            return this.buildIpsum()
        },
        paragraphContent() {
            let theLipsum = []

            for (var q = 0; q < this.paragraphCount; q++) {
                theLipsum.push(this.buildParagraphs())
            }

            return theLipsum
        },
    },
    methods: {
        ...mapActions(['fetchWords']),
        buildIpsum() {
            let numParagraphs = this.$store.state.paragraphs
            let theLipsum = []

            for (var q = 0; q < numParagraphs; q++) {
                theLipsum.push(this.generateParagraph())
            }

            return theLipsum
        },
        buildParagraphs() {
            let numSentences =
                Math.floor(Math.random() * (this.paragraphLength - 1 + 1)) + 1
            let theParagraph = []

            for (var i = 0; i < numSentences; i++) {
                theParagraph.push(this.buildSentence())
            }

            return theParagraph
        },
        buildSentence() {
            let words = this.wordlist
            let sentenceLength = Math.floor(Math.random() * 10) + 7
            let theSentence = []

            if (words.length) {
                for (var i = 0; i < sentenceLength; i++) {
                    const w = Math.floor(Math.random() * words.length)
                    let wordObj = words[w]

                    theSentence.push(wordObj)
                }
            }

            return theSentence
        },
        generateParagraph() {
            let numSentences =
                Math.floor(
                    Math.random() * (this.$store.state.sentences - 1 + 1),
                ) + 1
            let p = ''

            for (var i = 0; i < numSentences; i++) {
                p += this.generateSentence()
            }

            return p
        },
        generateSentence() {
            let words = this.wordlist
            let sentenceLength = Math.floor(Math.random() * 10) + 7
            let s = ''

            if (words.length) {
                for (var i = 0; i <= sentenceLength; i++) {
                    const w = Math.floor(Math.random() * words.length)
                    let wordObj = words[w]
                    let word = wordObj.fields.word

                    if (
                        wordObj.fields.tags &&
                        wordObj.fields.tags.includes('acronym')
                    ) {
                        word = `<abbr class="c2sc" title="${
                            wordObj.fields.def
                        }">${wordObj.fields.word}</abbr>`
                    }

                    if (i === 0) {
                        // Capitalise the first word.
                        s += word.charAt(0).toUpperCase() + word.slice(1) + ' '
                    } else if (i === sentenceLength) {
                        // Put a period & space after the last word.
                        s += word + '. '
                    } else {
                        // Testing output. Re-enable once controls are added.
                        // if (wordObj.fields.tags && wordObj.fields.tags.includes('foreign')) {
                        //     word = `<i class="nowrap fs-normal" lang="jp" title="${wordObj.fields.word}">${wordObj.fields.def}</i>`
                        // }

                        // Add a space between words.
                        s += word + ' '
                    }
                }
            }

            return s
        },
    },
    mounted() {
        this.fetchWords()
    },
}
</script>
