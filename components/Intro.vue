<template>
    <div class="the-intro dn db-l mt4 mt3-l f6 lh-copy ttu tracked white-50">
        A {{ adjective }} placeholder text generator.
        <br />
        By
        <a class="link white-70 hover-gibson" href="http://tidaltheory.co/">
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
    max-width: 18rem;
}
</style>
