<template>
    <main class="fn fl-ns w-50-ns">
        <p class="lh-copy measure mt4 mt0-ns"
            v-for="p in ipsum"
            v-bind:key="p">
            {{ p }}
        </p>
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    data () {
        return {


        }
    },
    computed: {
        ...mapGetters({
            wordlist: 'getWordList',
        }),
        ipsum() {
            return this.buildIpsum()
        }
    },
    methods: {
        ...mapActions([
            'fetchWords',
        ]),
        buildIpsum () {
            let numParagraphs = this.$store.state.paragraphs
            let theLipsum = []

            for (var q = 0; q < numParagraphs; q++) {
                theLipsum.push(this.generateParagraph())
            }

            return theLipsum
        },
        generateParagraph () {
            let numSentences = Math.floor(Math.random() * (this.$store.state.sentences - 1 + 1)) + 1
            let p = ''

            for (var i = 0; i < numSentences; i++) {
                p += this.generateSentence()
            }

            return p
        },
        generateSentence () {
            let words = this.wordlist
            let sentenceLength = Math.floor(Math.random() * 10) + 7
            let s = ''

            if (words.length) {
                for (var i = 0; i <= sentenceLength; i++) {
                    const w = Math.floor(Math.random() * words.length)
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
            }

            return s
        },
    },
    mounted() {
        this.fetchWords()
    },
}
</script>
