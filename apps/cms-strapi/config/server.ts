export default ({ env }) => {
	return {
		host: env("HOST", "0.0.0.0"),
		port: env.int("PORT", 1_337),
		app: {
			keys: env.array("APP_KEYS"),
		},
		webhooks: {
			populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
		},
	};
};
