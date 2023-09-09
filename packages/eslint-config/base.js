module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"turbo",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: { project: ["./tsconfig.json"] },
	plugins: ["@typescript-eslint"],
	ignorePatterns: ["node_modules", "dist"],
	rules: {
		"no-console": "off",
		"turbo/no-undeclared-env-vars": "off",
	},
};
