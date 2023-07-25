import { type Policy } from "@strapi/strapi/lib/core/registries/policies.js";
import { type Middleware } from "@strapi/strapi/lib/middlewares";

import { type ControllersHandler } from "../controllers/types.js";

export type AdminRoutes = {
	routes: Route[];
	type: "admin";
};

export type HandlerConfig = {
	auth?: false | { scope: string[] };
	middlewares?: Array<Middleware | string | { config: object; name: string }>;
	policies?: Array<Policy | string | { config: object; name: string }>;
};

export type Route = {
	config?: HandlerConfig;
	handler: ControllersHandler;
	method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
	path: string;
};

export type ContentApiRoutes = {
	routes: Route[];
	type: "content-api";
};

export type Routes =
	| Route[]
	| {
			admin?: AdminRoutes;
			"content-api"?: ContentApiRoutes;
	  };
