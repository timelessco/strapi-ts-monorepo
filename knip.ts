import { type KnipConfig } from "knip";

const config: KnipConfig = {
	project: ["src/**/*.{ts,tsx}!"],
	entry: ["src/**/*.{ts,tsx}!", "release-it/**/*"],
	ignoreDependencies: ["@strapi/plugin-i18n", "pg", "webpack"],
	ignoreBinaries: ["strapi"],
};

export default config;
