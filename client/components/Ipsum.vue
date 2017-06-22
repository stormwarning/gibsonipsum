<template>
    <article class="ipsum">
        <p v-for="p in ipsum">{{ p }}</p>
    </article>
</template>

<script>
import { mapState } from 'vuex'


export default {
    data () {
        return {
            words: [],
            ipsum: ['Generating filler text...']
        }
    },
    created () {
        this.fetchWords()
        console.log('created words: ', this.words)
        this.$nextTick(function () {
            this.buildIpsum()
            console.log('next tick words: ', this.words)
        })
    },
    // computed: {
    //     ...mapState({
    //         ipsum,
    //         isLoadingComplete: state => state.isLoadingComplete
    //     })
    // },
    methods: {
        fetchWords () {
            const dataURL = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85'
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

                this.words = data.items
            })
        },
        buildIpsum: function () {
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

            // console.log('gen ps: ', numParagraphs)

            for (var i = 0; i < numSentences; i++) {
                p += this.generateSentence()
            }

            return p
        },
        generateSentence () {
            let words = this.words
            let sentenceLength = Math.floor(Math.random() * 10) + 7
            let s = ''

            // console.log('state: ', state.words)

            if (words.length) {
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
            }

            return s
        },
    },
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
