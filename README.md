# unplugin-alias

[![NPM version](https://img.shields.io/npm/v/unplugin-alias?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-alias)

## Install

```bash
npm i unplugin-alias
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

Example: [`playground/`](./playground/)

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

```ts
// esbuild.config.js
import { build } from "esbuild"
import Alias from "unplugin-alias/esbuild"

build({
  plugins: [Alias()],
})
```

<br></details>
