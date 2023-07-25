import { type AdminRoutes } from "../types.js";

export const adminRoutes = {
	type: "admin",
	routes: [
		{
			method: "GET",
			path: "/uno",
			handler: "uno.index",
			config: {
				policies: ["admin::isAuthenticatedAdmin"],
			},
		},
	],
} satisfies AdminRoutes;
