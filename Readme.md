# Qiankun demo app

Qiankun based Micro Frontend app

## 📖 Documentation

[qiankun](https://qiankun.umijs.org/)

## Infrastructure

- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
- [Lerna](https://lerna.js.org/)
- [Nx](https://nx.dev/) TODO

## 💿 Getting started

The `packages` folder contains 

- a set of Micro Frontends
- a shell app `main` where the Micro Frontends are registered and mounted

```shell
$ git clone git@github.com:kristianmandrup/qiankun-demo.git my-app
$ cd my-app
```

Install dependencies

```shell
$ yarn install
```

Run yarn script `packages:install` to install each micro frontend (dependencies)

```shell
$ yarn packages:install
```

Run yarn script `packages:start` to start the shell app and each of the micro frontends

```shell
$ yarn packages:start
```

Visit `http://localhost:7099`

![](./examples/example.gif)

## Application structure

- `packages/main` the main shell app that registers and mounts the MFEs
- `packages/react16` react 16 MFE
- `packages/vue` Vue MFE

### Main app

The `index.html` contains a `<main>` element which acts as the app container. It references and loads the `index.js` script file which mounts the main app and Micro frontend apps

```html
<main id="container"></main>
<script src="./index.js"></script>
```

In `index.js` the Micro FE apps are registered

```js
registerMicroApps([
  {
    name: 'react16',
    entry: '//localhost:7100',
    render,
    activeRule: genActiveRule('/react16'),
  },
  // ...
])
```

Installing and starting the Shell and Micro FE apps

The `examples:install` script runs `install:*` for each script present with an `install:` prefix, all in parallel The `examples:start` script runs `start:*` for each script present with a `start:` prefix, all in parallel

```json
  "scripts": {
    "examples:install": "npm-run-all --serial build install:*",
    "examples:start": "npm-run-all --parallel start:*",

    "install:main": "cd examples/main && yarn",
    "start:main": "cd examples/main && yarn start",

    "install:react16": "cd examples/react16 && yarn",
    "start:react16": "cd examples/react16 && yarn start",
  }
```

To add more MFE apps use `create-single-spa` CLI:

Install the CLI locally:

`yarn add create-single-spa`

Run the CLI locally from `/packages` folder

`npx create-single-spa`

Follow instructions.
