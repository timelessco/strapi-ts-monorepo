// eslint-disable-next-line import/no-extraneous-dependencies
import { type Configuration } from "webpack";

export default (config: Configuration) => {
	return { ...config, output: { ...config?.output, hashFunction: "sha256" } };
};
