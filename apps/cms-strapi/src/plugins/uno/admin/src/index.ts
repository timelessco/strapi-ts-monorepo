import { prefixPluginTranslations } from "@strapi/helper-plugin";

import { type StrapiTyped } from "../../types/strapiTyped.js";
import { PLUGIN_ID, PLUGIN_NAME } from "../../utils/constants.js";
import { Initializer } from "./components/Initializer.js";
import { PluginIcon } from "./components/Pluginicon.js";

export default {
	register(app) {
		app?.addMenuLink?.({
			to: `/plugins/${PLUGIN_ID}`,
			icon: PluginIcon,
			intlLabel: {
				id: `${PLUGIN_ID}.plugin.name`,
				defaultMessage: PLUGIN_NAME,
			},
			// @ts-expect-error - Higher order function type issue
			Component: async () => {
				const component = await import("./pages/App/index.js");

				return component;
			},
			permissions: [
				// Uncomment to set the permissions of the plugin here
				// {
				//   action: '', // the action name should be plugin::plugin-name.actionType
				//   subject: null,
				// },
			],
		});
		const plugin = {
			id: PLUGIN_ID,
			initializer: Initializer,
			isReady: false,
			name: PLUGIN_NAME,
		};

		app.registerPlugin(plugin);
	},

	bootstrap() {},

	async registerTrads(app) {
		const { locales } = app;

		const importedTrads = await Promise.all(
			locales.map(async (locale) => {
				try {
					const { default: data } = await import(
						`./translations/${locale}.json`
					);
					return {
						data: prefixPluginTranslations(data, PLUGIN_ID),
						locale,
					};
				} catch {
					return {
						data: {},
						locale,
					};
				}
			}),
		);

		return importedTrads;
	},
} satisfies StrapiTyped["Admin"];
