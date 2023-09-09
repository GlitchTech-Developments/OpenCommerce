module.exports = {
	plugins: {
		tailwindcss: {
			config: "./tailwind.config.cjs",
		},
		autoprefixer: {},
		cssnano: {
			preset: [
				"advanced",
				{
					discardComments: { removeAll: true },
				},
			],
		},
	},
};
