<template>
    <article class="relative min-vh-100">
        <header
            class="relative fixed-ns flex flex-column justify-between ph2 ml5 w-50-ns vh-100-ns ph0-ns ml0-ns"
        >
            <figure
                class="absolute absolute--fill z-0 ma0 cover o-50 mh6-ns mv5-ns"
                style="background-image:url(/gibson-glitch.png);"
            ></figure>
            <div class="relative pl5-ns">
                <h1 class="mb3 mt6 white lh-solid f-headline-ns tr">
                    Gibson Ipsum
                </h1>
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
