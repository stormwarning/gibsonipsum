<template>
    <div class="page">
        <ipsum></ipsum>
        <counter></counter>
        <p>To get started, edit files in <code>./client</code> and save.</p>
    </div>
</template>

<script>
    import Counter from 'components/Counter'
    import Ipsum from 'components/Ipsum'

    export default {
        components: {
            Counter,
            Ipsum,
        },
        // mounted() {
        //     this.$store.dispatch('fetchWords')
        // },
    }
</script>
