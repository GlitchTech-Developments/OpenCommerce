import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
	// Banner can be usefull if full library is client components on RSC (React Server Components)
	// banner: {
	// 	js: "'use client'",
	// },

	name: "@open-commerce/ui-lib",
	entry: [
		"./src/index.tsx", // add your entrypoint here

		"./src/styles/tailwind.css", // add tailwind CSS directives file
	],
	dts: {
		entry: ["./src/index.tsx"], // only generate .d.ts which i mention in entry section
	},
	format: ["esm", "cjs"],
	external: ["react", "react-dom", "react/jsx-runtime"],
	minify: true,
	sourcemap: true,
	...options,
}));
