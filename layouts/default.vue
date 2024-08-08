<template>
	<main id="app" class="app-container pl5">
		<nav
			class="the-nav fixed z-5 flex flex-column justify-between items-center w3 vh-100 pv3 bg-black-40"
		>
			<div class="flex flex-column items-center">
				<a class="link white hover-gibson dib w2 h2 pa2 br1" href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
					>
						<path
							d="M9 .577l4.928 2.846a2 2 0 0 1 1 1.732v1.057a.8.8 0 0 1-1.2.692l-7.631-4.42a.8.8 0 0 1 0-1.386L7 .578a2 2 0 0 1 2 0zm4.928 12L9 15.424a2 2 0 0 1-2 0l-4.928-2.845a2 2 0 0 1-1-1.733v-5.69a2 2 0 0 1 1-1.732l.627-.362a2 2 0 0 1 2.001 0l9.23 5.337a2 2 0 0 1 .998 1.73v.717a2 2 0 0 1-1 1.732z"
						/>
					</svg>
				</a>
				<button
					v-if="displayControlsToggle"
					class="controls-button link white hover-gibson dib w2 h2 pa2 br1 pointer"
					@click="setControlsVisible(!controlsVisible)"
				>
					<svg
						v-if="controlsVisible"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path d="M13 3L3 13M3 3l10 10" />
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path
							d="M2.667 14V9.333M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.333M13.333 8V2M.667 9.333h4M6 5.333h4M11.333 10.667h4"
						/>
					</svg>
				</button>
			</div>
			<footer class="nav-footer flex flex-column items-center bg-black-40">
				<a
					class="link white hover-gibson dib w2 h2 pa2 br1"
					href="https://github.com/stormwarning/gibsonipsum"
					title="GitHub"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path
							d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"
						/>
					</svg>
				</a>
				<a
					class="link white hover-gibson dib w2 h2 pa2 br1 mt2"
					href="https://bsky.app/profile/tidaltheory.io"
					title="Bluesky"
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path
							d="M8 7.32365C7.36607 6.13482 5.63976 3.91931 4.03468 2.82665C2.49711 1.77994 1.91054 1.9613 1.52601 2.12885C1.08093 2.32278 1 2.98169 1 3.36936C1 3.75703 1.2204 6.5477 1.36416 7.01352C1.83917 8.55267 3.53012 9.07276 5.08738 8.90585C5.16698 8.89445 5.24772 8.88395 5.32946 8.8742C5.24927 8.88657 5.1685 8.89715 5.08738 8.90585C2.80524 9.23176 0.778481 10.0337 3.43671 12.8874C6.36076 15.8067 7.44408 12.2614 8 10.4638C8.55592 12.2614 9.19622 15.6789 12.5109 12.8874C15 10.4638 13.1948 9.23187 10.9126 8.90592C10.8315 8.89722 10.7507 8.88668 10.6705 8.87431C10.7523 8.88402 10.833 8.89456 10.9126 8.90592C12.4699 9.07287 14.1608 8.55275 14.6358 7.01363C14.7796 6.54781 15 3.75713 15 3.36946C15 2.98179 14.9191 2.32288 14.474 2.12894C14.0895 1.96139 13.5029 1.78003 11.9653 2.82675C10.3602 3.91941 8.63393 6.13482 8 7.32365Z"
						/>
					</svg>
				</a>
			</footer>
		</nav>
		<nuxt></nuxt>
	</main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			displayControlsToggle: true,
		}
	},

	computed: {
		...mapGetters({
			controlsVisible: 'getControlsVisible',
		}),
	},

	mounted() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
	},

	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},

	methods: {
		...mapMutations(['setControlsVisible']),

		onResize(_event) {
			this.displayControlsToggle =
				this.$mq === 'mobile' || this.$mq === 'tablet'

			if (this.$mq === 'mobile' || this.$mq === 'tablet') {
				this.setControlsVisible(false)
			}
		},
	},
}
</script>

<style>
.app-container {
	min-block-size: 100vb;

	@media (min-width: 60em) {
		padding-inline-start: var(--site-gutter);
	}
}

.the-nav {
	inset-inline-start: 0;

	@media (min-width: 60em) {
		inline-size: var(--site-gutter);
	}
}

abbr[title] {
	text-decoration: none;
}

/**
  1. Line up button icon with labels in control component.
 */
.controls-button {
	margin-block-start: 7.5rem; /* [1] */
	appearance: none;
	background-color: transparent;
	border: 0;
}
</style>
