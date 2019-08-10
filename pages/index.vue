<template>
    <article class="the-body relative min-vh-100 overflow-hidden">
        <header
            class="the-header relative fixed-ns flex flex-column justify-between ml5 w-50-ns vh-100-ns ph0-ns ml0-ns"
        >
            <figure
                class="bg-image dn db-ns absolute absolute--fill z-0 ma0 cover o-50 mh6-ns mv5-ns"
                style="background-image: url(/gibson-glitch.png);"
            ></figure>
            <div class="relative pl5-ns">
                <h1 class="mv0 nr2 white lh-solid f-72 f-6-ns tracked-tight tr">
                    Gibson<br />— Ipsum
                </h1>
                <span class="version-tag absolute db f6">——{{ version }}</span>
                <intro></intro>
            </div>
        </header>
        <transition-height>
            <controls v-if="controlsVisible" class="ml5 ml0-ns"></controls>
        </transition-height>
        <transition name="fade" mode="out-in">
            <ipsum v-if="wordsLoaded" class="main-content"></ipsum>
            <main
                v-else
                class="main-content h-100 ph3 pb6 ml5 ph0-ns pv6-ns ml0-ns code"
            >
                <p class="f6 measure-wide mt4 mt0-ns center"
                    >The sky above the port was the color of television, tuned
                    to a dead channel...</p
                >
            </main>
        </transition>
    </article>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Ipsum from '~/components/Ipsum'
import Intro from '~/components/Intro'
import Controls from '~/components/Controls'
import TransitionHeight from '~/components/TransitionHeight'

export default {
    components: {
        Ipsum,
        Intro,
        Controls,
        TransitionHeight,
    },

    computed: {
        ...mapState({
            version: (state) => state.version,
        }),
        ...mapGetters({
            wordsLoaded: 'getWordsLoaded',
            controlsVisible: 'getControlsVisible',
        }),
    },

    mounted() {
        this.fetchWords()
    },

    methods: {
        ...mapActions(['fetchWords']),
    },
}
</script>

<style lang="postcss" scoped>
.the-body {
    @media (min-width: 480px) {
        display: grid;
        grid-area: article;

        /* grid-template-rows: 1fr 1fr; */
        grid-template-areas: 'header main';
        grid-template-columns: 1fr 1fr;

        /* grid-column-start: n-start; */
    }
}

.the-header {
    background-color: var(--bg);
    background-blend-mode: lighten;

    @media (min-width: 480px) {
        grid-row-start: header-start;
        grid-row-end: controls-end;
        grid-column: header;
    }

    @media (min-width: 60em) {
        padding: 5rem;
    }
}

.bg-image {
    background-color: var(--bg);
    background-blend-mode: luminosity;
    mix-blend-mode: lighten;
}

.version-tag {
    top: 1.5rem;
}

.main-content {
    margin-top: 6rem;
    line-height: 2;

    @media (min-width: 480px) {
        grid-area: main;
    }

    & > :last-child {
        margin-bottom: 0;
    }
}
</style>
