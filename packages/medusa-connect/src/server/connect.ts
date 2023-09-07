import Medusa, { Config } from "@medusajs/medusa-js";

export const getConnection = (config: Config) => {
	return new Medusa(
		config
			? config
			: {
					maxRetries: parseInt(
						process.env.MEDUSAJS_MAXRETRIES ?? "3"
					),
					baseUrl:
						process.env.MEDUSAJS_BASEURL ?? "http://localhost:7001",
					apiKey: process.env.MEDUSAJS_APIKEY ?? undefined,
					publishableApiKey:
						process.env.MEDUSAJS_PUBLISHABLE_APIKEY ?? undefined,
			  }
	);
};
