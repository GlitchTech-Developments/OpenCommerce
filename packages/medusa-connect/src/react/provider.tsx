import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { Config } from "@medusajs/medusa-js";

const queryClient = new QueryClient();

const Provider = ({
	children,
	config,
}: {
	children: React.ReactNode;
	config: Config;
}) => {
	return (
		<MedusaProvider
			queryClientProviderProps={{ client: queryClient }}
			{...config}
		>
			{children}
		</MedusaProvider>
	);
};

export default Provider;
