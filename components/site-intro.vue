<template>
	<div class="the-intro dn db-l mt4 mt3-l f6 lh-copy ttu tracked white-50 pb2">
		A {{ adjective }} placeholder text generator.
		<br />
		By
		<a class="link white-70 hover-gibson pa1 br1" href="http://tidaltheory.co/">
			@stormwarning
		</a>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			wordlist: 'getWordList',
			adjective: 'getAdjective',
		}),
	},
	methods: {
		...mapActions(['findAdjective']),
	},
}
</script>

<style lang="postcss" scoped>
.the-intro {
	max-inline-size: 18rem;
}
</style>
