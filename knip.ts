import { type KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			entry: "release-it/**/*",
			ignoreBinaries: ["turbo"],
		},
		"apps/strapi-app": {
			entry: "src/index.ts!",
			project: ["src/**/*.{ts,tsx}!"],
			ignore: [
				"src/admin/**/*",
				"src/api/**/{controllers,services,routes}/**/*",
			],
			ignoreDependencies: [
				"pg",
				"@strapi/strapi",
				"@strapi/plugin-i18n",
				"strapi-plugin-sync-shows",
				"webpack",
			],
			ignoreBinaries: ["strapi"],
		},
		"packages/strapi-plugin-sync-shows": {
			entry: [
				"admin/src/index.tsx!",
				"server/{index,register,bootstrap,destroy}.ts!",
			],
			project: ["admin/**/*.{ts,tsx}!", "server/**/*.ts!"],
			ignore: ["**/getTrad.ts"],
			ignoreDependencies: ["@strapi/design-system", "prop-types"],
		},
	},
};

export default config;
