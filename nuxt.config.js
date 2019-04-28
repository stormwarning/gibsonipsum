import { version } from './package.json'

const SITE_TITLE = 'Gibson Ipsum'
const SITE_DESCRIPTION = 'A cyberpunk placeholder text generator.'

function getVersion() {
    let string = JSON.stringify(version) || ''
    return string.replace(/"/g, '')
}

export default {
    mode: 'universal',

    /**
      Headers of the page
     */
    head: {
        htmlAttrs: { class: 'bg-light-gray' },
        title: SITE_TITLE,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                meta: 'description',
                content: SITE_DESCRIPTION,
            },

            { name: 'apple-mobile-web-app-title', content: SITE_TITLE },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: SITE_TITLE },
            {
                name: 'twitter:description',
                content: SITE_DESCRIPTION,
            },
            { name: 'twitter:creator', content: '@stormwarning' },
            {
                name: 'twitter:image:src',
                content: 'https://gibsonipsum.now.sh/icon-1024.png',
            },

            { property: 'og:title', content: SITE_TITLE },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://gibsonipsum.now.sh/' },
            {
                property: 'og:image',
                content: 'https://gibsonipsum.now.sh/icon-1024.png',
            },
            {
                property: 'og:description',
                content: SITE_DESCRIPTION,
            },
            { property: 'og:site_name', content: SITE_TITLE },
        ],
        link: [
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#16191b',
            },
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
            },

            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
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

    plugins: [],

    modules: [
        ['@nuxtjs/google-analytics', { ua: 'UA-58836125-3' }],
        ['@nuxtjs/markdownit', { preset: 'commonmark', typographer: true }],
        '@nuxtjs/pwa',
    ],

    manifest: {
        name: SITE_TITLE,
    },
}
