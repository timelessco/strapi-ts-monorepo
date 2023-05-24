# Development

## Table of Contents

- [Development](#development)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Configuration](#configuration)
  - [Installing the dependencies](#installing-the-dependencies)
  - [Running the project locally](#running-the-project-locally)
  - [Building the project](#building-the-project)
  - [Deploying the project](#deploying-the-project)
  - [More DX scripts](#more-dx-scripts)
    - [Prettier](#prettier)
    - [Eslint](#eslint)
    - [Markdown](#markdown)
    - [Check Types](#check-types)
    - [Check unused dependencies, exports \& types](#check-unused-dependencies-exports--types)
    - [Check Spelling](#check-spelling)
    - [Check package.json](#check-packagejson)
    - [Test](#test)
    - [Contributions](#contributions)
  - [Learn more](#learn-more)
  - [Community](#community)

## Prerequisites

Before you get started, you will need to have the following tools installed on
your machine:

- **[Node.js][1]** (version 12 or later)
- **[pnpm][2]** (version 5 or later) or **[npm][3]** or **[yarn][4]** (version 6
  or later)
- **[Git][5]** (optional, but recommended for version control)

> This repository includes a list of suggested VS Code extensions. It's a good
> idea to use [VS Code][6] and accept its suggestion to install them, as they'll
> help with development.

## Getting Started

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in each of the workspace of the
project.

## Installing the dependencies

After you have set the environmental variables, you can run the project locally
by

```shell
git clone https://github.com/timelessco/strapi-ts-monorepo
cd strapi-ts-monorepo
yarn install
```

This will download and install all the required dependencies for the project.

## Running the project locally

```bash
yarn dev
```

Start your Strapi application with autoReload enabled. [Learn more][16]

## Building the project

Build your admin panel. [Learn more][17]

```bash
yarn build
```

## Deploying the project

Strapi gives you many possible deployment options for your project. Find the one
that suits you on the [deployment section of the documentation][18].

## More DX scripts

> Check for all the below errors in one command using [Turbo Repo][7]

`yarn lint`

> AutoFix all the linting errors in one command using [Turbo Repo][7]

`yarn format`

### Prettier

[Prettier][8] is used to format code. It should be applied automatically when
you save files in VS Code or make a Git commit.

> Check the formatting errors

`yarn lint:prettier`

> AutoFix the formatting errors

`yarn format:prettier`

> This package includes several forms of linting to enforce consistent code
> quality and styling. Each should be shown in VS Code, and can be run manually
> on the command-line:

### Eslint

Extends all the necessary rulesets from [eslint-config-canonical][9] for the
project that lints JavaScript and TypeScript source files

> Check for the linting errors

`yarn lint:eslint`

> AutoFix the linting errors

`yarn format:eslint`

### Markdown

([Markdownlint][10]): Checks all Markdown files

> Check the markdown linting errors

`yarn lint:md`

> AutoFix the markdown linting errors

`yarn format:md`

### Check Types

([TypeScript][11]): Checks all TypeScript files

> Check TypeScript types

`yarn lint:types`

### Check unused dependencies, exports & types

([knip][12]): Checks all unused dependencies, exports & types

> Check the spelling errors

`yarn lint:knip`

### Check Spelling

([cspell][13]): Spell checks across all source files

> Check the spelling errors

`yarn lint:spelling`

> Populate `project-words.txt` with the words that are not in the dictionary &
> fix

`yarn populate:dictionary`

### Check package.json

([npm-package-json-lint][14]): Lints the `package.json` file

> Check the package.json linting errors

`yarn lint:package-json`

### Test

> Run the test suite

`yarn test`

### Contributions

([all-contributors][15]): ✨ Recognize all contributors, not just the ones who
push code ✨

> Add new contributors

`yarn contributors:add`

> Generate the contributors list

`yarn contributors:generate`

## Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi
  documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by
  the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing
  articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product
  updates, new features and general improvements.

Feel free to check out the
[Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and
contributions are welcome!

## Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community
  including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find
  answers, show your Strapi project and get feedback or just talk with other
  Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of
  awesome things related to Strapi.

[1]: https://nodejs.org/en/
[2]: https://pnpm.io/
[3]: https://www.npmjs.com/
[4]: https://yarnpkg.com/
[5]: https://git-scm.com/
[6]: https://code.visualstudio.com
[7]: https://turbo.build/repo
[8]: https://prettier.io
[9]: https://github.com/gajus/eslint-config-canonical
[10]: https://github.com/DavidAnson/markdownlint
[11]: https://www.typescriptlang.org/
[12]: https://github.com/webpro/knip
[13]: https://cspell.org
[14]: https://npmpackagejsonlint.org/
[15]: https://github.com/all-contributors/all-contributors
[16]:
	https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop
[17]:
	https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build
[18]:
	https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html
