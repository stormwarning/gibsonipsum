/** @type {import('eslint').Linter.Config} */
const config = {
	ignorePatterns: ['node_modules', 'dist', '.nuxt'],
	extends: [
		'@zazen',
		'plugin:vue/recommended',
		'plugin:nuxt/recommended',
		'prettier',
	],
	settings: {
		'import-sorting/known-framework': /^vue\/?$/.source,
	},
	rules: {
		/**
		 * This must be included by the vue or nuxt configs.
		 */
		camelcase: 'off',

		/**
		 * Vue components idiomatically default export an object.
		 */
		'import/no-anonymous-default-export': ['error', { allowObject: true }],

		/**
		 * Nuxt includes `vue` and `vuex` and we include those as
		 * peerDependencies so we can ignore them in this rule.
		 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-extraneous-dependencies.md
		 */
		'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],

		/**
		 * Nuxt routing components are ok as single-word names.
		 */
		'vue/multi-word-component-names': [
			'error',
			{ ignores: ['default', 'index'] },
		],
	},
}

module.exports = config
