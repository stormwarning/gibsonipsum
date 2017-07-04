<template>
    <article class="relative vh-100">
        <header class="fixed flex flex-column justify-between w-50 vh-100">
            <figure class="absolute absolute--fill z-0 ma0 cover o-50 mh6 mv5" style="background-image:url(/gibson-glitch.png)"></figure>
            <div class="relative pl5">
                <h1 class="mb3 mt6 white lh-solid f-headline tr">Gibson Ipsum</h1>
                <intro></intro>
                <!--<span class="dib mr4 mr5-ns">By @stormwarning</span>-->
            </div>
            <controls></controls>
        </header>
        <ipsum></ipsum>
    </article>
</template>

<script>
    import Ipsum from 'components/Ipsum'
    import Intro from 'components/Intro'
    import Controls from 'components/Controls'

    export default {
        components: {
            Ipsum,
            Intro,
            Controls,
        },
    }
</script>
