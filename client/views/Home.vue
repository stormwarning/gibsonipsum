<template>
    <article class="cf ph3 ph5-ns pv5">
        <header class="fn fl-ns w-50-ns pr4-ns">
            <h1 class="mb3 mt0 lh-title">Lorem Gibson</h1>
            <intro></intro>
        </header>
        <ipsum></ipsum>
    </article>
</template>

<script>
    import Ipsum from 'components/Ipsum'
    import Intro from 'components/Intro'

    export default {
        components: {
            Ipsum,
            Intro,
        },
    }
</script>
