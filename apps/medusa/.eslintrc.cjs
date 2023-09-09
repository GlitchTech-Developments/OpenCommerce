module.exports = {
	root: true,
	extends: ["@open-commerce/eslint-config/base"],
	rules: {
		"prefer-rest-params": "off",
	},
	ignorePatterns: [
		"node_modules",
		"dist",
		"uploads",
		"build",
		"**/*.spec.ts",
	],
};
