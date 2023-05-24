import { type Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
	index(context) {
		context.body = strapi
			.plugin("uno")
			.service("myService")
			.getWelcomeMessage();
	},
});
