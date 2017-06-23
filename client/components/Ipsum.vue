<template>
    <article class="ipsum">
        <!--<p v-for="p in ipsum">{{ p }}</p>-->
        {{ ipsum }}
    </article>
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
            return this.generateParagraph()
        }
    },
    methods: {
        ...mapActions([
            'fetchWords',
        ]),
        buildIpsum () {
            const paragraphs = this.$store.state.paragraphs
            // let theLipsum = []

            for (var q = 0; q < paragraphs; q++) {
                // Generate paragraph objects and add to output array.
                // const paragraphLength = Math.floor(Math.random() * (this.$store.state.sentences - 1 + 1)) + 1
                this.ipsum.push(this.generateParagraph())
            }
        },
        generateParagraph () {
            let numSentences = this.$store.state.sentences
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

    // computed: {
    //     ...mapState({
    //         ipsum,
    //         isLoadingComplete: state => state.isLoadingComplete
    //     })
    // },


    // },
    // computed: {
    //     ipsum() {
    //         const paragraphs = this.$store.state.paragraphs
    //         let theLipsum = []

    //         for (var q = 0; q < paragraphs; q++) {
    //             // Generate paragraph objects and add to output array.
    //             // const paragraphLength = Math.floor(Math.random() * (this.$store.state.sentences - 1 + 1)) + 1
    //             theLipsum.push(this.$store.dispatch('generateParagraph'))
    //         }

    //         return theLipsum
    //     }
    // }
}
</script>
