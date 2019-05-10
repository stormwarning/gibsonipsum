<template>
    <span v-html="wordText"></span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        word: {
            type: Object,
            default: null,
        },

        startsSentence: {
            type: Boolean,
            default: false,
        },

        endsSentence: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {}
    },

    computed: {
        ...mapGetters({
            shouldTranslate: 'getNihongo',
        }),

        wordText() {
            let text = this.word.fields.word

            if (this.startsSentence) {
                text = text.charAt(0).toUpperCase() + text.slice(1)
            }

            if (
                this.word.fields.tags &&
                this.word.fields.tags.includes('acronym')
            ) {
                text = `<abbr class="c2sc" title="${this.word.fields.def}">${
                    this.word.fields.word
                }</abbr>`
            }

            if (
                this.shouldTranslate &&
                this.word.fields.tags &&
                this.word.fields.tags.includes('foreign')
            ) {
                text = `<i class="nowrap fs-normal" lang="jp" title="${
                    this.word.fields.word
                }">${this.word.fields.def}</i>`
            }

            if (this.endsSentence) {
                text = `${text}.`
            }

            return `${text} `
        },
    },
}
</script>
