# DSC-McMaster-U-Website

Welcome to the DSC McMasterU Website project repository :wave:

## Table of Contents

- [General Info](#General-Info)
- [Contribution](#Contributing-to-This-Project)
- [Installation](#Installation)

## General Info

Below is a quick overview of the technologies utilized for the website. It is advisable to have a basic understanding of these technologies (at least the first 3) before making code contributions to this project. Each tool has well maintained documentation which is encouraged everyone explores.

- [React](https://reactjs.org/) - A declarative, component-based JavaScript library for building web applications
- [Gatsby](https://www.gatsbyjs.com/) - A React-based, static site generator
- [Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework
- [Firebase](https://firebase.google.com/products/hosting) - Fast and secure web hosting

If you are interested in our teams branching model, this [blog post](https://nvie.com/posts/a-successful-git-branching-model/) by Vincent Driessen does a great job of explaining gitflow.

## Contributing to This Project

Anyone and everyone in the DSC McMaster U Chapter is welcome to contribute to this project. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

- [Bug reports](CONTRIBUTING.md#bugs)
- [Feature requests](CONTRIBUTING.md#features)
- [Pull requests](CONTRIBUTING.md#pull-requests)

## Installation

To start working on the site locally you must correctly setup your git environment. To do this, please follow the instructions outlined in the [guidelines for contributing](CONTRIBUTING.md) document. Once you have successfully forked, cloned, and configured your repository follow the steps below to deploy the site locally.

1. Navigate to the root directory and install the site dependencies:

```bash
install npm
```

2. As previously stated, The site uses the [Gatsby](https://www.gatsbyjs.com/) React framework. To build and serve the site locally, you will need to install Gatsby CLI as shown below:

```bash
npm install -g gatsby-cli
```

Note that gatsby-cli should be installed globally. For more information, see the
[official Gatsby CLI docs](https://www.gatsbyjs.com/docs/gatsby-cli/).

3. You are now ready to launch the development environment by running the following npm command;

```bash
npm run develop
```

4. You can also launch the production environment by running the following npm commands;

```bash
npm run build
npm run serve
```
