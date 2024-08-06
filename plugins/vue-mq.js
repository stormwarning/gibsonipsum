import Vue from 'vue'

import VueMq from 'vue-mq'

Vue.use(VueMq, {
	breakpoints: {
		mobile: 450,
		tablet: 960,
		laptop: 1152,
		desktop: Number.POSITIVE_INFINITY,
	},
	defaultBreakpoint: 'mobile', // Customize this for SSR
})
