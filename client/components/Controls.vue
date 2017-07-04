<template>
    <aside class="controls relative z-1 ph6 mb7">
        <form>
            <fieldset class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Paragraph Settings</legend>
                <input class="input-reset w3 pa2 ba" type="number" min="1" v-model="paragraphs">
                <input class="input-reset w3 pa2 ba" type="number" min="1" v-model="sentences">
            </fieldset>
        </form>
    </aside>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
    computed: {
        paragraphs: {
            get () { return this.$store.state.paragraphs },
            set (value) {
                this.$store.commit('setParagraphs', value)
            }
        },
        sentences: {
            get () { return this.$store.state.sentences },
            set (value) {
                this.$store.commit('setSentences', value)
            }
        },
    },

    methods: {
        ...mapMutations([
            'setParagraphs',
            'setSentences',
        ])
    }
}
</script>

<style>

</style>
