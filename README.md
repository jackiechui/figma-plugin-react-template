# Figma Plugin React Template

This template has everything you need to build a Figma plugin with React components.

Featuring:

- Simple React + TSX + SCSS + Webpack setup
- Pre-installed [Figma Plugin UI Components](https://alexandrtovmach.github.io/react-figma-plugin-ds/)
- Message handler to simplify communication between the plugin code and UI
- Example to demonstrate how to use UI components with the message handler.

The main plugin code is in `src/code.ts`. The React-based UI code is in `src/ui.tsx`. SCSS/CSS stylesheet is in `src/ui.scss`.

These are compiled to files in `dist/`, which are what Figma will use to run
your plugin.

Installation:

```
$ npm install
or
$ yarn
```

Develop with hot-reloading:

```
$ npm dev
or
$ yarn dev
```

Production build:

```
$ npm build
or
$ yarn build
```
