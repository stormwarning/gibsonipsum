<template>
    <aside class="controls pa4 ph6-ns mb7-ns">
        <form>
            <fieldset class="ba b--transparent pa0 mh0">
                <input
                    v-model="paragraphs"
                    class="input-reset w3 pa2 ba"
                    type="number"
                    min="1"
                />
                <input
                    v-model="sentences"
                    class="input-reset w3 pa2 ba"
                    type="number"
                    min="1"
                />
                <input v-model="nihongo" type="checkbox" />
            </fieldset>
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
</style>
