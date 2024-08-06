import { version } from './package.json'

const SITE_TITLE = 'Gibson Ipsum'
const SITE_DESCRIPTION = 'A cyberpunk placeholder text generator.'

function getVersion() {
	let string = JSON.stringify(version) || ''
	return string.replaceAll('"', '')
}

export default {
	mode: 'universal',

	/**
      Headers of the page
     */
	head: {
		htmlAttrs: { class: 'bg-light-gray' },
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		meta: [],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#2cccff',
			},
			{
				rel: 'stylesheet',
				href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
			},
		],
	},

	/**
      Global CSS
     */
	css: ['~assets/css/main.css'],

	env: {
		VERSION: getVersion(),
	},

	build: {
		postcss: {
			plugins: {
				// https://github.com/jonathantneal/postcss-advanced-variables#features
				'postcss-advanced-variables': {},

				// https://preset-env.cssdb.org/features
				'postcss-preset-env': {
					stage: 0,
				},
			},
		},
	},

	plugins: ['~/plugins/vue-mq'],

	modules: [
		['@nuxtjs/google-analytics', { ua: 'UA-58836125-3' }],
		// ['@nuxtjs/markdownit', { preset: 'commonmark', typographer: true }],
		'@nuxtjs/pwa',
	],

	manifest: {
		name: SITE_TITLE,
		short_name: SITE_TITLE,
	},

	meta: {
		theme_color: '#16191b',
		ogHost: 'https://gibsonipsum.now.sh',
		twitterCard: 'summary',
		twitterCreator: '@stormwarning',
	},
}
