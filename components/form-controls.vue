<template>
	<aside class="controls">
		<form class="controls-form pa4">
			<label class="paragraph-field tr">
				<div class="f6 fw5 tracked lh-title ttu o-80">Paragraphs</div>
				<numeric-input
					v-model="paragraphs"
					:min="1"
					:max="8"
					@update="(value) => (paragraphs = value)"
				/>
			</label>
			<label class="length-field tr">
				<div class="f6 fw5 tracked lh-title ttu o-80">Length</div>
				<numeric-input
					v-model="sentences"
					:min="2"
					:max="10"
					@update="(value) => (sentences = value)"
				/>
			</label>
			<label class="nihongo-field tr">
				<div class="f6 fw5 tracked lh-title ttu o-80">Japanese</div>
				<div class="relative mt2 checkbox">
					<input
						v-model="nihongo"
						class="absolute checkbox-input"
						type="checkbox"
					/>
					<div class="dib na1 br1 checkbox-control" />
				</div>
			</label>
		</form>
	</aside>
</template>

<script>
import { mapMutations } from 'vuex'

import NumericInput from './numeric-input.vue'

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
	background-color: rgb(226 230 232 / 5%);

	@media (min-width: 60em) {
		position: absolute;
		inset-block-end: 8.75vi;
		inset-inline-end: 0;
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
		margin-block-start: 2.5rem;
	}
}

.checkbox {
	position: relative;
	inset-block-start: -1px;
}

.checkbox-control {
	&::before {
		display: block;
		inline-size: 1rem;
		block-size: 1rem;
		margin: 0.25rem;
		content: '';
		background-color: rgb(255 255 255 / 20%);
	}
}

.checkbox-input {
	inline-size: 1px;
	block-size: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;

	&:checked {
		& ~ .checkbox-control::before {
			background-color: #fff;
		}
	}

	&:focus {
		& ~ .checkbox-control {
			box-shadow: 0 0 0 2px var(--blue);
		}
	}

	&:active {
		& ~ .checkbox-control::before {
			background-color: rgb(255 255 255 / 60%);
		}
	}
}
</style>
