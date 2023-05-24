/* eslint-disable @typescript-eslint/no-explicit-any */
import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";

import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
	bootstrap(_app: any) {},

	register(app: any) {
		app.addMenuLink({
			Component: async () => {
				const component = await import("./pages/App");

				return component;
			},
			icon: PluginIcon,
			intlLabel: {
				defaultMessage: name,
				id: `${pluginId}.plugin.name`,
			},
			permissions: [
				// Uncomment to set the permissions of the plugin here
				// {
				//   action: '', // the action name should be plugin::plugin-name.actionType
				//   subject: null,
				// },
			],
			to: `/plugins/${pluginId}`,
		});
		const plugin = {
			id: pluginId,
			initializer: Initializer,
			isReady: false,
			name,
		};

		app.registerPlugin(plugin);
	},

	async registerTrads(app: any) {
		const { locales } = app;

		const importedTrads = await Promise.all(
			(locales as any[]).map((locale) =>
				import(`./translations/${locale}.json`)
					.then(({ default: data }) => ({
						data: prefixPluginTranslations(data, pluginId),
						locale,
					}))
					.catch(() => ({
						data: {},
						locale,
					})),
			),
		);

		return importedTrads;
	},
};
