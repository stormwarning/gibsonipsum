<template>
    <article class="">
        <header class="relative mv5">
            <figure class="absolute absolute--fill z-0 ma0 cover o-50" style="background-image:url(/gibson-glitch.png)"></figure>
            <div class="relative">
                <h1 class="mb3 mt7 white lh-title f-headline">Gibson Ipsum</h1>
                <intro></intro>
                <!--<span class="dib mr4 mr5-ns">By @stormwarning</span>-->
            </div>
        </header>
        <aside class="controls">—</aside>
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
