<template>
	<article class="the-body relative w-100 min-vh-100 overflow-hidden">
		<header
			class="the-header relative fixed-l flex flex-column justify-between w-50-l vh-100-l ph0-l ml0-l"
		>
			<figure
				class="bg-image dn db-l absolute absolute--fill z-0 ma0 o-50 mh6-l mv5-l"
			>
				<img src="/gibson-glitch.png" alt="" />
			</figure>
			<div class="masthead relative overflow-hidden-ns">
				<h1 class="mv0 nr2 white lh-solid f-72 f-6-l tracked-tight tr">
					Gibson<br />— Ipsum
				</h1>
				<span class="version-tag absolute db f6 lh-copy o-40"
					>——{{ version }}</span
				>
				<intro></intro>
			</div>
			<transition-height>
				<controls v-if="controlsVisible" class=""></controls>
			</transition-height>
		</header>
		<transition name="fade" mode="out-in">
			<ipsum v-if="wordsLoaded" class="main-content"></ipsum>
			<main v-else class="main-content h-100 ph3 pb6 ph0-l pv6-l ml0-l code">
				<p class="f6 measure-wide mt4 mt0-l center">
					The sky above the port was the color of television, tuned to a dead
					channel...
				</p>
			</main>
		</transition>
	</article>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Controls from '~/components/form-controls.vue'
import Ipsum from '~/components/lorem-ipsum.vue'
import Intro from '~/components/site-intro.vue'
import TransitionHeight from '~/components/transition-height.vue'

export default {
	components: {
		Controls,
		Intro,
		Ipsum,
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
		this.getWords()
	},

	methods: {
		...mapActions(['getWords']),
	},
}
</script>

<style lang="postcss" scoped>
.the-body {
	@media (min-width: 60em) {
		display: grid;
		grid-area: article;
		grid-template-areas: 'header main';
		grid-template-columns: 1fr 1fr;
	}
}

.the-header {
	background-color: var(--bg);
	background-blend-mode: lighten;

	@media (min-width: 60em) {
		grid-row: header-start / controls-end;
		grid-column: header;
	}
}

.bg-image {
	background-color: var(--bg);
	mix-blend-mode: lighten;

	& img {
		inline-size: 100%;
		max-inline-size: none;
		block-size: 100%;
		object-fit: cover;
		mix-blend-mode: luminosity;
	}

	@media (min-width: 60em) {
		margin: var(--site-gutter);
		margin-inline-start: 0;
	}
}

.masthead {
	& h1 {
		@media (min-width: 72em) {
			font-size: 96px;
		}
	}

	@media (min-width: 60em) {
		padding-inline-start: 2rem;
		margin-block-start: 8.75vi;
	}
}

.version-tag {
	inset-block-start: 1.5rem;

	@media (min-width: 60em) {
		inset-block-start: 0;
	}
}

.main-content {
	margin-block-start: 6rem;
	line-height: 2;

	& > :last-child {
		margin-block-end: 0;
	}

	@media (min-width: 60em) {
		grid-area: main;
		margin: var(--site-gutter);
	}
}
</style>
