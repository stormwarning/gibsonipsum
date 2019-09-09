<template>
    <aside class="controls">
        <form class="controls-form pa4">
            <label class="paragraph-field tr">
                <div class="f6 fw5 tracked lh-title ttu o-80">
                    Paragraphs
                </div>
                <numeric-input
                    v-model="paragraphs"
                    :min="1"
                    :max="8"
                    @update="(value) => (paragraphs = value)"
                />
            </label>
            <label class="length-field tr">
                <div class="f6 fw5 tracked lh-title ttu o-80">
                    Length
                </div>
                <numeric-input
                    v-model="sentences"
                    :min="2"
                    :max="10"
                    @update="(value) => (sentences = value)"
                />
            </label>
            <label class="nihongo-field tr">
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

import NumericInput from './NumericInput'

export default {
    components: {
        NumericInput,
    },

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

    @media (min-width: 60em) {
        position: absolute;
        right: 0;
        bottom: 8.75vw;
        grid-area: header;
        background-color: transparent;
    }
}

.controls-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (min-width: 60em) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0.5rem;
        padding: 3rem;
    }
}

.nihongo-field {
    @media (min-width: 60em) {
        margin-top: 2.5rem;
    }
}
</style>
