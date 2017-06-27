<template>
  <span class="f6 ttu tracked gray">A {{ adjective }} placeholder text generator.</span>
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
        ...mapActions([
            'findAdjective',
        ]),
    },
}
</script>
