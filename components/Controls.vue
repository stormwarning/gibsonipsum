<template>
    <aside class="controls mb7-ns">
        <form class="pa4 ph6-ns">
            <label class="tr">
                <div class="f6 fw5 tracked lh-title ttu o-80">
                    Paragraphs
                </div>
                <input
                    v-model="paragraphs"
                    class="input-reset w3 pa0 bn bg-transparent mono f4 fw5 lh-copy white tr"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                />
            </label>
            <label class="tr">
                <div class="f6 fw5 tracked lh-title ttu o-80">
                    Length
                </div>
                <input
                    v-model="sentences"
                    class="input-reset w3 pa0 bn bg-transparent mono f4 fw5 lh-copy white tr"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                />
            </label>
            <label class="tr">
                <div class="f6 fw5 tracked lh-title ttu o-80">
                    Japanese
                </div>
                <input v-model="nihongo" type="checkbox" />
            </label>
        </form>
    </aside>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        paragraphs: {
            get() {
                return this.$store.state.paragraphs
            },
            set(value) {
                this.$store.commit('setParagraphs', value)
            },
        },
        sentences: {
            get() {
                return this.$store.state.sentences
            },
            set(value) {
                this.$store.commit('setSentences', value)
            },
        },
        nihongo: {
            get() {
                return this.$store.state.nihongo
            },
            set(value) {
                this.$store.commit('setNihongo', value)
            },
        },
    },

    methods: {
        ...mapMutations(['setParagraphs', 'setSentences', 'setNihongo']),
    },
}
</script>

<style lang="postcss">
.controls {
    background-color: rgba(226, 230, 232, 0.05);
}

/* @todo Don't use this layout for wide display. */
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
}
</style>
