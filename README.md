<div align="center">
	<h1 align="center"><a aria-label="Strapi TS Monorepo" href="https://github.com/timelessco/strapi-ts-monorepo">Strapi TS Monorepo</a></h1>
	<p align="center">StrapiCMS-focused monorepo concepts, tips and strategies.</p>
</div>

<p align="center">
  <a aria-label="Build" href="https://github.com/timelessco/strapi-ts-monorepo/actions?query=workflow%3ACI">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/timelessco/strapi-ts-monorepo/main?label=CI&logo=github&style=flat-square">
  </a>
	<a href="https://github.com/timelessco/strapi-ts-monorepo/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
	</a>
  <a aria-label="License" href="https://github.com/timelessco/strapi-ts-monorepo/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/timelessco/strapi-ts-monorepo?style=flat-quare&labelColor=000000" />
  </a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
	<a href="#contributors" target="_blank">
		<!-- prettier-ignore-start -->
		<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
		<img alt="All Contributors: 3" src="https://img.shields.io/badge/all_contributors-3-21bb42.svg" />
		<!-- ALL-CONTRIBUTORS-BADGE:END -->
		<!-- prettier-ignore-end -->
	</a>
</p>

**Benefits of Monorepo:**

- Offers a view on pipeline like dx, ci/cd & release
- Share common packages, api types & etc across projects
- Share common configurations, tools, scripts & etc across projects
- Developer tools like linting, formatting, spellchecking & etc are shared across projects

## Introduction

This monorepo project features a comprehensive Command Line Interface (CLI) & editor tools that lets you get started with your projects in seconds.

- Share common packages, api types & etc across projects
- Share common configurations, tools, scripts & etc across projects
- Developer tools like linting, formatting, spellchecking & etc are shared across projects
- Offers a way to automate them on pipeline like dx, ci/cd & release

## Structure

```txt
.
└── apps
   	└── cms-strapi (strapi cms)
				└── src
						└── plugins
								└── uno (strapi plugin)

```

## Apps

- [apps/cms-strapi](./apps/cms-strapi): Strapi CMS, Typescript [README](./apps/cms-strapi/README.md) | [CHANGELOG](./apps/cms-strapi/CHANGELOG.md)

## CMS Strapi Plugin

- [apps/cms-strapi/src/plugins/uno](./apps/cms-strapi/src/plugins/uno): Strapi plugin, Typescript [README](./apps/cms-strapi/src/plugins/uno/README.md) | [CHANGELOG](./apps/cms-strapi/src/plugins/uno/CHANGELOG.md)

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then
[`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md). Thanks! 💖

## Tools Overview

- [strapi](https://github.com/strapi/strapi)
- [pg](https://www.postgresql.org/)
- [typescript](https://github.com/microsoft/TypeScript)
- [yarn](https://github.com/yarnpkg/berry)
- [husky](https://github.com/typicode/husky)
- [changesets](https://github.com/changesets/changesets)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
- [knip](https://github.com/webpro/knip)
- [cspell](https://github.com/streetsidesoftware/cspell)
- [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint)
- [lint-staged](https://github.com/okonet/lint-staged)
- [gacp](https://github.com/vivaxy/gacp)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [all-contributors](https://github.com/all-contributors/all-contributors)
- [taze](https://github.com/antfu/taze)

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://navinmoorthy.me/"><img src="https://avatars.githubusercontent.com/u/39694575?v=4?s=100" width="100px;" alt="Navin Moorthy"/><br /><sub><b>Navin Moorthy</b></sub></a><br /><a href="https://github.com/timelessco/strapi-ts-monorepo/commits?author=navin-moorthy" title="Code">💻</a> <a href="#a11y-navin-moorthy" title="Accessibility">️️️️♿️</a> <a href="https://github.com/timelessco/strapi-ts-monorepo/commits?author=navin-moorthy" title="Documentation">📖</a> <a href="#design-navin-moorthy" title="Design">🎨</a> <a href="#ideas-navin-moorthy" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-navin-moorthy" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/timelessco"><img src="https://avatars.githubusercontent.com/u/259798?v=4?s=100" width="100px;" alt="Sébastien Vanvelthem"/><br /><sub><b>Sébastien Vanvelthem</b></sub></a><br /><a href="#tool-timelessco" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

<sub> 💙 This package is based on
[@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s
[template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package)
and [@timelessco](https://github.com/timelessco)'s
[strapi-ts-monorepo](https://github.com/timelessco/strapi-ts-monorepo)<sub>
