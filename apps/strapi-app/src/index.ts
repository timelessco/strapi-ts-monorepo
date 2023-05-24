export default {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register() {},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	bootstrap({ strapi }) {
		strapi.log.info(
			`[app] Database Engine: ${strapi.config.get(
				"database.connection.client",
			)}`,
		);
	},
};
