import { type KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			project: ["scripts/**/*.{ts,tsx}", ".changeset/**/*.{js,cjs}"],
			ignore: [".yarn"],
			ignoreBinaries: ["turbo", "husky", "is-ci"],
		},
		"apps/cms-strapi": {
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
				"strapi-plugin-uno",
				"webpack",
			],
			ignoreBinaries: ["strapi"],
		},
		"apps/cms-strapi/src/plugins/uno": {
			project: ["admin/**/*.{ts,tsx}!", "server/**/*.ts!"],
			entry: [
				"admin/src/index.ts!",
				"server/{index,register,bootstrap,destroy}.ts!",
			],
		},
	},
};

export default config;
