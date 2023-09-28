import { createUnplugin } from "unplugin"
import { type UnpluginFactory } from "unplugin"
import { type Options } from "./types"
import { getTSConfigPaths, mapPathToAlias } from "./core"

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
  options = {},
) => {
  const tsconfigPaths = getTSConfigPaths(options)
  const alias = mapPathToAlias(tsconfigPaths)

  return {
    name: "unplugin-alias",

    vite: {
      config: (viteConfig) => {
        viteConfig.resolve = viteConfig.resolve ?? {}

        viteConfig.resolve.alias = {
          ...alias,
          ...viteConfig.resolve.alias,
        }

        return viteConfig
      },
    },

    rollup: {
      // update rollup resolve alias
      resolveId(source, importer) {
        if (importer && source in alias) {
          return alias[source]
        }
      },

      options: async (rollupOptions) => {
        let plugins = rollupOptions.plugins

        if (!plugins) {
          plugins = []
        }

        if (!Array.isArray(plugins)) {
          plugins = [plugins]
        }

        const rollupAlias = (await import("@rollup/plugin-alias")).default

        plugins.push(
          rollupAlias({
            entries: Object.entries(alias).map(([find, replacement]) => ({
              find,
              replacement,
            })),
          }),
        )

        rollupOptions.plugins = plugins
      },
    },

    webpack: (compiler) => {
      compiler.options.resolve = compiler.options.resolve ?? {}

      compiler.options.resolve.alias = {
        ...alias,
        ...compiler.options.resolve.alias,
      }
    },

    rspack: (compiler) => {
      compiler.options.resolve = compiler.options.resolve ?? {}

      compiler.options.resolve.alias = {
        ...alias,
        ...compiler.options.resolve.alias,
      }
    },

    esbuild: {
      setup: (esbuildConfig) => {
        esbuildConfig.initialOptions.alias = {
          ...alias,
          ...esbuildConfig.initialOptions.alias,
        }
      },
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
