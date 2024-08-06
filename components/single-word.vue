<template>
	<abbr v-if="isAcronym" class="c2sc" :title="wordDef">{{
		formattedWord
	}}</abbr>
	<i
		v-else-if="isJapanese"
		class="nowrap fs-normal"
		lang="jp"
		:title="wordText"
		>{{ formattedWord }}</i
	>
	<span v-else>{{ formattedWord }}</span>
</template>

<script>
import { mapGetters } from 'vuex'

import TextScramble from '~/utils/scramble.js'

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
	},

	data() {
		return {
			wordText: this.word.fields.word,
			wordDef: this.word.fields.def,
			isAcronym:
				this.word.fields.tags && this.word.fields.tags.includes('acronym'),
			isJapanese:
				this.word.fields.def &&
				this.word.fields.tags &&
				this.word.fields.tags.includes('foreign'),
		}
	},

	computed: {
		...mapGetters({
			shouldTranslate: 'getNihongo',
		}),

		formattedWord() {
			return this.startsSentence
				? this.wordText.charAt(0).toUpperCase() + this.wordText.slice(1)
				: this.wordText
		},
	},

	watch: {
		shouldTranslate() {
			if (this.isJapanese) {
				if (this.shouldTranslate) {
					this.scrambler.setText(this.wordDef)
				} else {
					this.scrambler.setText(this.formattedWord)
				}
			}
		},
	},

	mounted() {
		this.scrambler = new TextScramble(this.$el)
	},
}
</script>
