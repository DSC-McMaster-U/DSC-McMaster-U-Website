# DSC-McMaster-U-Website

## Table of Contents

- [Installation](#Installation)
- [Development](#Development)
  - [Git Branching Model](#Git-Branching-Model)
  - [Development Workflow](#Development-Workflow)
- [Contributing](#Contributing)
  - [Commit Etiquette](#Commit-Etiquette)
  - [Pull Request Checklist & Etiquette](#Pull-Request-Checklist-&-Etiquette)
  - [Contributing](#Contributing)

## Installation

To start working on the site, you should clone the repo to your local computer

```bash
git clone https://github.com/DSC-McMaster-U/DSC-McMaster-U-Website.git
```

Navigate to the root directory and install the site dependencies:

```bash
install npm
```

The site uses the [Gatsby](https://www.gatsbyjs.com/) React framework. To build and serve the site locally, you will need to install Gatsby CLI as shown below:

```bash
npm install -g gatsby-cli
```

Note that gatsby-cli should be installed globally. For more information, see the
[official Gatsby CLI docs](https://www.gatsbyjs.com/docs/gatsby-cli/).

## Development

This section will outline the general development workflow as well as how to correctly start developing features for the site.

### Git Branching Model

Before starting development, it is important to understand the GitHub workflow for this repository. The `master` branch represents the official history and should always be deployable. As such, development **does not** take place on this branch. The source code of HEAD always reflects a production-ready state.

Instead, the `development` branch is used for development. In this branch, the source code of HEAD always reflects a state with the latest delivered development changes for the next release.

Feature branches are branched from `development` and created by team members to aid parallel development. It is in these branches most development will take place. It is important to note that these branches **must** be branched off from `development` and merged back to `development`.

### Development Workflow

To start developing a feature, checkout `development` and branch off a new feature branch.

```bash
git checkout development
git branch feature-[myfeature]
git checkout feature-[myfeature]
```

Once you've successfully made a feature branch, you can start developing. Run the script below to start the dev server for testing.

```bash
npm run develop
```

## Contributing

This section outlines how to properly contribute your work to the repository.

### Commit Etiquette

While developing on a feature branch, try to keep commits frequent and avoid committing large chunks of unrelated changes. Each commit should have a purpose that is briefly explained in the commit message. Commit messages should talk about **what** changed, and **why**. **Not how** – how is the diff, and you don’t need to repeat it.

### Pull Request Checklist & Etiquette

When developing a feature, it is encouraged that you create a `draft` pull request right after the first commit. This will let you easily track your progress, and more importantly allows you to get early feedback from team members. More visibility is always better for the team.

Before marking a PR ready for review, please ensure you've completed the following steps:

#### 1. Run a clean production build

`gatsby develop` command doesn’t perform some of the production build steps that the `gatsby build` command does, nor does it run in the same environment. By not testing a clean production build, you run the risk of exposing upstream branches to _build time_ errors. To avoid this, run the following npm commands

```bash
npm run clean
npm run build
```

#### 2. Format your code

The prettier code formatter is used to help keep the repository clean and legible. Please run the following npm command to auto-format your repo

```bash
npm run format
```

If you have the prettier VS code extension installed you can ignore this step since your code should be auto-formatted every time you save.

#### 3. Merge in `development` branch changes

This is something that should be done throughout the development process to keep up to date with upstream changes and to squash any merge conflicts quickly. It also needs to be done before submitting your PR to resolve the forked history.

```bash
git checkout development
git pull
git checkout feature-[myfeature]
git merge development
```

#### 4. Describe the request

Including a useful description for your pr is helpful to guide the reviewer through the code as much as possible; highlighting related files and grouping them into concepts or problems that are being solved or implemented.

Once you have completed your changes and completed everything on the checklist it's time to put your PR up for review!
