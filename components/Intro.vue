<template>
    <div class="mt4 mt3-ns f6 lh-copy ttu tracked white-50">
        A {{ adjective }} placeholder text generator.
        <br />
        By
        <a class="link white-70 hover-gibson" href="http://tidaltheory.co/">
            @stormwarning
        </a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
