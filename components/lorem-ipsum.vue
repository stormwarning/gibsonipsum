<template>
	<main class="h-100 ph3 pb6 ph0-l pv6-l ml0-l mono">
		<p
			v-for="(paragraph, pIdx) in paragraphs"
			:key="pIdx"
			class="f6 measure-wide mt4 mt0-ns center"
		>
			<template v-for="(sentence, sIdx) in paragraph">
				<template v-for="(word, wIdx) in sentence">
					<word
						:key="`${sIdx} ${wIdx}`"
						:word="word"
						:starts-sentence="wIdx === 0"
					/>{{ wIdx === sentence.length - 1 ? '. ' : ' ' }}
				</template>
			</template>
		</p>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'

import Word from '~/components/single-word.vue'

export default {
	components: {
		Word,
	},

	data() {
		return {}
	},

	computed: {
		...mapGetters({
			wordlist: 'getWordList',
			paragraphCount: 'getParagraphs',
			paragraphLength: 'getSentences',
		}),

		paragraphs() {
			let paragraphs = []

			for (let q = 0; q < this.paragraphCount; q++) {
				paragraphs.push(this.buildParagraph(this.paragraphLength))
			}

			return paragraphs
		},
	},

	methods: {
		buildParagraph(pLength) {
			let numberSentences = Math.max(2, Math.floor(Math.random() * pLength + 1))
			let theParagraph = []

			for (let index = 0; index < numberSentences; index++) {
				theParagraph.push(this.buildSentence())
			}

			return theParagraph
		},

		buildSentence() {
			let words = this.wordlist
			let sentenceLength = Math.floor(Math.random() * 10 + 6)
			let theSentence = []

			if (words.length > 0) {
				for (let index = 0; index < sentenceLength; index++) {
					let w = Math.floor(Math.random() * words.length)
					let wordObject = words[w]

					theSentence.push(wordObject)
				}
			}

			return theSentence
		},
	},
}
</script>
