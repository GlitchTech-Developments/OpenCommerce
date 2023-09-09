export const clientNavigation = (path: string) => {
	if (typeof window !== "undefined") {
		window.location.assign(path);
	} else {
		console.debug(
			"attempting to use client navigate on server, which is not supported"
		);
	}
};
