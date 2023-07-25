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
  - [Versioning \& releasing the project](#versioning--releasing-the-project)
  - [More DX scripts](#more-dx-scripts)
  - [Check and update packages](#check-and-update-packages)
    - [Turbo](#turbo)
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
    - [Strapi](#strapi)
      - [Community](#community)

## Prerequisites

Before you get started, you will need to have the following tools installed on
your machine:

- **[nodejs][1]** (version 12 or later)
- **[corepack][2]** (run `corepack enable`, to enable the `packageManager` mentioned in the `package.json`)
- **[git][5]** (optional, but recommended for version control)

> This repository includes a list of suggested VS Code extensions. It's a good
> idea to use [VS Code][6] and accept its suggestion to install them, as they'll
> help with development.

## Getting Started

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in each of the workspace of the
project. Take a look at the **`.env.example`** file correspondingly.

## Installing the dependencies

After you have set the environmental variables, you can run the project locally
by

```shell
git clone https://github.com/timelessco/strapi-ts-monorepo
cd strapi-ts-monorepo
yarn install
```

This will download and install all the required dependencies for the project.

**Note:** Each projects can be also be executed individually from within the respective folder, but the below commands are used to execute all apps/packages.

## Running the project locally

```bash
yarn dev
```

- For developing strapi app, it provides additional options. [Learn more][16]

## Building the project

To build the project to a production environment, you can use the

```bash
yarn build
```

- For building strapi app, it provides additional options [Learn more][17]

## Deploying the project

- For deploying Strapi app, it gives you many possible deployment options for your project. Find the one
  that suits you on the [deployment section of the documentation][18].

## Versioning & releasing the project

> [changesets][3] is used as release tool

`yarn release`

**Note:** Before running release command, changeset must be created & versioned which is taken care by PR workflow using [changeset-bot][4] in combination with [release-or-version-pr.yml][19]. [Learn more][20]

## More DX scripts

## Check and update packages

`yarn deps:check` - checks for errors in the installed packages

`yarn update` - interactive cli to update the deps

`yarn update:check` - checks for the latest updates

### Turbo

> Check for all the below errors in one command using [turbo][7]

`yarn lint`

> AutoFix all the linting errors in one command using [turbo][7]

`yarn format`

> Clean all temporary files useing [del-cli](https://github.com/sindresorhus/del-cli)

`yarn clean:all`

### Prettier

[prettier][8] is used to format code. It should be applied automatically when
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

([markdownlint-cli2][10]): Checks all Markdown files

> Check the markdown linting errors

`yarn lint:md`

> AutoFix the markdown linting errors

`yarn format:md`

### Check Types

([typescript][11]): Checks all TypeScript files

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

### Strapi

- [Resource center][21] - Strapi resource center.
- [Strapi documentation][22] - Official Strapi
  documentation.
- [Strapi tutorials][23] - List of tutorials made by
  the core team and the community.
- [Strapi blog][22] - Official Strapi blog containing
  articles made by the Strapi team and the community.
- [Changelog][24] - Find out about the Strapi product
  updates, new features and general improvements.

Feel free to check out the
[Strapi GitHub repository][25]. Your feedback and
contributions are welcome!

#### Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community
  including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find
  answers, show your Strapi project and get feedback or just talk with other
  Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of
  awesome things related to Strapi.

[1]: https://github.com/nodejs/node
[2]: https://github.com/nodejs/corepack
[3]: https://github.com/changesets/changesets
[4]: https://github.com/apps/changeset-bot
[5]: https://git-scm.com/
[6]: https://github.com/microsoft/vscode
[7]: https://github.com/vercel/turbo
[8]: https://github.com/prettier/prettier
[9]: https://github.com/gajus/eslint-config-canonical
[10]: https://github.com/DavidAnson/markdownlint-cli2
[11]: https://github.com/microsoft/TypeScript
[12]: https://github.com/webpro/knip
[13]: https://github.com/streetsidesoftware/cspell
[14]: https://github.com/tclindner/npm-package-json-lint
[15]: https://github.com/all-contributors/all-contributors
[16]: https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop
[17]: https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build
[18]: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html
[19]: ./workflows/release-or-version-pr.yml
[20]: https://github.com/changesets/changesets/blob/main/docs/detailed-explanation.md
[21]: https://strapi.io/resource-center
[22]: https://docs.strapi.io
[23]: https://strapi.io/tutorials
[24]: https://strapi.io/changelog
[25]: https://github.com/strapi/strapi
