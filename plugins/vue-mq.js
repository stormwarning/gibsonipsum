import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 960,
        laptop: 1152,
        desktop: Infinity,
    },
    defaultBreakpoint: 'mobile', // customize this for SSR
})
