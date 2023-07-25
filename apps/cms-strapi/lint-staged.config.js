const ESLint = require("eslint").ESLint;

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint();
	const isIgnored = await Promise.all(
		files.map((file) => {
			return eslint.isPathIgnored(file);
		}),
	);
	const filteredFiles = files.filter((_, index) => {
		return !isIgnored[index];
	});

	return filteredFiles.join(" ");
};

const rules = {
	"**/*.{json,yml,yaml,toml,js,jsx,cjs,mjs,ts,tsx,all-contributorsrc,code-workspace}":
		async (files) => {
			const filesToLint = await removeIgnoredFiles(files);

			return [
				`yarn eslint --max-warnings 0 --ignore-path ../../.gitignore --cache --report-unused-disable-directives --color --fix ${filesToLint}`,
			];
		},
	"**/*.{ts,tsx,d.ts,cts,d.cts,mts,d.mts}": () => {
		return "yarn lint:types";
	},
};

module.exports = rules;
