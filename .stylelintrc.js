/** @type {import('stylelint').Config} */
const config = {
	extends: ['@zazen/stylelint-config'],
	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'mixin'] }],
	},
}

export default config
