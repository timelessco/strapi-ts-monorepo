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
	"import/no-useless-path-segments": "off",
};

/**
 * @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config}
 */
module.exports = {
	root: true,
	ignorePatterns: [
		// no ignore
		"!**/.*",
		//  Node.js
		".npmrc",
		".nvmrc",
		// Lock files
		"package-lock.json",
		"yarn.lock",
		"pnpm-lock.yaml",
		// Auto generated typescript files from strapi
		"*.md",
		"types/generated/*.d.ts",
		// Extras(if any)
	],
	overrides: [
		{
			files: ["*.js", "*.cjs"],
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
			},
			overrides: [
				{
					files: ["*.js"],
					extends: ["canonical/module"],
				},
			],
		},
		{
			files: ["./*.ts", "./types/*.ts"],
			excludedFiles: ["setup-package.ts"],
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
			files: ["setup-package.ts"],
			extends: [
				"canonical",
				"canonical/node",
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
			files: ["admin/**/*.{ts,tsx}", "server/**/*.ts", "utils/**/*.ts"],
			extends: [
				"canonical",
				"canonical/browser",
				"canonical/module",
				"canonical/typescript",
				"canonical/typescript-type-checking",
				"canonical/zod",
				"canonical/regexp",
				"prettier",
			],
			parserOptions: {
				project: "./tsconfig.json",
			},
			rules: {
				...commonNodeIgnoredRules,
				...commonTypescriptIgnoredRules,
			},
			overrides: [
				{
					files: ["*.ts"],
					extends: ["canonical/jsdoc"],
					settings: {
						jsdoc: {
							mode: "typescript",
						},
					},
				},
				{
					files: ["*.tsx", "use*.ts"],
					extends: ["canonical/react", "canonical/jsx-a11y"],
					parserOptions: {
						ecmaFeatures: {
							jsx: true,
						},
					},
					rules: {
						// To support dynamic import
						"promise/prefer-await-to-then": "off",
						"@typescript-eslint/promise-function-async": "off",
						// Other react rules
						"react/hook-use-state": "off",
						"react/jsx-indent": ["error", "tab"],
						"react/jsx-indent-props": ["error", "tab"],
						"react/forbid-component-props": "off",
						"react/prop-types": "off",
						"react/jsx-handler-names": "off",
						"react/jsx-curly-newline": "off",
					},
				},
			],
		},
		{
			files: ["*.json", ".all-contributorsrc"],
			excludedFiles: [".vscode/**/*.json"],
			parser: "jsonc-eslint-parser",
			extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
		},
	],
};
