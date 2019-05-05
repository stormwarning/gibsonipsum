<template>
    <span>{{ wordText }}</span>
</template>

<script>
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
        return {
            shouldTranslate: this.$store.state.nihongo,
        }
    },

    computed: {
        wordText() {
            let text = this.word.fields.word

            if (this.startsSentence) {
                text = text.charAt(0).toUpperCase() + text.slice(1) + ' '
            } else if (this.endsSentence) {
                text = text + '. '
            } else {
                if (
                    this.shouldTranslate &&
                    this.word.fields.tags &&
                    this.word.fields.tags.includes('foreign')
                ) {
                    text = `<i class="nowrap fs-normal" lang="jp" title="${
                        this.word.fields.word
                    }">${this.word.fields.def}</i>`
                }
                text = text + ' '
            }

            return text
        },
    },
}
</script>
