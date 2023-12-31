# unplugin-alias

[![NPM version](https://img.shields.io/npm/v/unplugin-alias?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-alias)

This unplugin helps you to setup alias for your bundler automatically by loading your `tsconfig.json` with its `compilerOptions.paths` field.

And if you use some other runtime, such as JITI, you can use the function `mapPathToAlias` to setup manually.

## Install

```bash
pnpm i unplugin-alias
```

## Usage

```ts
export interface Options {
  configFile?: string
  cwd?: string
}
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Alias from "unplugin-alias/vite"

export default defineConfig({
  plugins: [
    Alias({
      /* options */
    }),
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Alias from "unplugin-alias/rollup"

export default {
  plugins: [
    Alias({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require("unplugin-alias/webpack")({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require("unplugin-alias/rspack")({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      "unplugin-alias/nuxt",
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-alias/webpack")({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

Esbuild supports alias out-of-box, so you don't need this plugin.

<br></details>
