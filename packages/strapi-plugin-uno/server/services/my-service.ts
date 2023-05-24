import { type Strapi } from "@strapi/strapi";

export default ({ _strapi }: { _strapi: Strapi }) => ({
	getWelcomeMessage() {
		return "Welcome to Strapi 🚀";
	},
});
