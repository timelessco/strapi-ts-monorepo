import { type Configuration } from "webpack";

export default (config: Configuration) => ({
	...config,
	output: { ...config?.output, hashFunction: "sha256" },
});
