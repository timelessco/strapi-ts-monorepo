const commonIgnoredRules = {
	"no-console": "off",
	"no-warning-comments": "off",
	"no-param-reassign": "off",
	"import/no-named-as-default": "off",
	"import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
	"import/no-extraneous-dependencies": "off",
	"node/callback-return": "off",
	"func-style": "off",
	"simple-import-sort/imports": "off",
	"unicorn/no-array-reduce": "off",
	"canonical/sort-keys": "off",
	"canonical/import-specifier-newline": "off",
	"canonical/destructuring-property-newline": "off",
	"canonical/filename-match-exported": "off",
	"canonical/filename-match-regex": "off",
	"canonical/id-match": "off",
	"canonical/export-specifier-newline": "off",
	"zod/require-strict": "off",
};

const commonTypescriptIgnoredRules = {
	"@typescript-eslint/no-use-before-define": "off",
	"@typescript-eslint/no-unused-vars": [
		"warn",
		{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
	],
	"@typescript-eslint/naming-convention": ["off"],
};

const commonNodeIgnoredRules = {
	...commonIgnoredRules,
	"node/no-process-env": "off",
};

/**
 * @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config}
 */
module.exports = {
	root: true,
	ignorePatterns: [
		// no ignore
		"!**/.*",
		"!monorepo.code-workspace",
		//  Node.js
		".npmrc",
		".nvmrc",
		// Lock files
		"package-lock.json",
		"yarn.lock",
		"pnpm-lock.yaml",
		// Auto generated typescript files from strapi
		"*.md",
		// Extras(if any)
		"apps/**/*",
		"packages/**/*",
	],
	overrides: [
		{
			files: ["./*.js", "./*.cjs", "./.changeset/*.cjs"],
			extends: [
				"canonical",
				"canonical/node",
				"canonical/regexp",
				"canonical/jsdoc",
				"canonical/zod",
				"prettier",
			],
			settings: {
				jsdoc: {
					mode: "typescript",
				},
			},
			rules: {
				...commonNodeIgnoredRules,
				"import/extensions": [
					"error",
					"always",
					{
						ignorePackages: true,
					},
				],
			},
			overrides: [
				{
					files: ["*.js"],
					extends: ["canonical/module"],
				},
			],
		},
		{
			files: ["./*.ts", "./scripts/*.ts"],
			extends: [
				"canonical",
				"canonical/node",
				"canonical/module",
				"canonical/typescript",
				"canonical/typescript-type-checking",
				"canonical/jsdoc",
				"canonical/regexp",
				"canonical/zod",
				"prettier",
			],
			parserOptions: {
				project: "./tsconfig.json",
			},
			settings: {
				jsdoc: {
					mode: "typescript",
				},
			},
			rules: {
				...commonNodeIgnoredRules,
				...commonTypescriptIgnoredRules,
			},
		},
		{
			files: ["*.json", ".all-contributorsrc", ".prettierrc"],
			excludedFiles: [".vscode/**/*.json"],
			parser: "jsonc-eslint-parser",
			extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
		},
		{
			files: ["*.jsonc", ".vscode/**", "monorepo.code-workspace"],
			parser: "jsonc-eslint-parser",
			extends: ["plugin:jsonc/recommended-with-jsonc", "plugin:jsonc/prettier"],
		},
		{
			files: ["*.yaml", "*.yml"],
			parser: "yaml-eslint-parser",
			extends: ["plugin:yml/standard", "plugin:yml/prettier"],
		},
		{
			files: ["*.toml"],
			parser: "toml-eslint-parser",
			extends: ["plugin:toml/standard"],
		},
	],
};
