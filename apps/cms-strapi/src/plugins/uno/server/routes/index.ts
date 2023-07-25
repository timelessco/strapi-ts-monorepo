import { adminRoutes } from "./adminRoutes/index.js";
import { contentApiRoutes } from "./contentApiRoutes/index.js";
import { type Routes } from "./types.js";

export default {
	admin: adminRoutes,
	"content-api": contentApiRoutes,
} satisfies Routes;
