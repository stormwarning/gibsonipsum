<script>
/**
 * @see https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
 */
export default {
    name: `TransitionExpand`,
    functional: true,
    render(createElement, context) {
        let data = {
            props: {
                name: `expand`,
            },
            on: {
                afterEnter(element) {
                    element.style.height = `auto`
                },
                enter(element) {
                    let { width } = getComputedStyle(element)

                    element.style.width = width
                    element.style.position = `absolute`
                    element.style.visibility = `hidden`
                    element.style.height = `auto`

                    let { height } = getComputedStyle(element)

                    element.style.width = null
                    element.style.position = null
                    element.style.visibility = null
                    element.style.height = 0

                    /**
                     * Force a repaint to make sure theanimation is
                     * triggered correctly.
                     */
                    // eslint-disable-next-line no-unused-expressions
                    getComputedStyle(element).height

                    setTimeout(() => {
                        element.style.height = height
                    })
                },
                leave(element) {
                    let { height } = getComputedStyle(element)

                    element.style.height = height

                    /**
                     * Force a repaint to make sure theanimation is
                     * triggered correctly.
                     */
                    // eslint-disable-next-line no-unused-expressions
                    getComputedStyle(element).height

                    setTimeout(() => {
                        element.style.height = 0
                    })
                },
            },
        }

        return createElement(`transition`, data, context.children)
    },
}
</script>

<style scoped>
* {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
    overflow: hidden;
    transition: 1000ms ease-in-out;
    transition-property: height, opacity;
}

.expand-enter,
.expand-leave-to {
    height: 0;
    opacity: 0;
}
</style>
