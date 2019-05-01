<template>
    <span class="f6 lh-copy ttu tracked white-50">
        A {{ adjective }} placeholder text generator.
        <br />
        By
        <a class="link white-70 hover-gibson" href="http://tidaltheory.co/">
            @stormwarning
        </a>
    </span>
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
