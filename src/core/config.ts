import process from "node:process"

import { resolve } from "node:path"
import { getTsconfig } from "get-tsconfig"
import { type Options } from "../types"
import { type TSConfigPaths } from "./types"

export const getTSConfigPaths = (options: Options) => {
  const { configFile, cwd = process.cwd() } = options

  const configFilePath = resolve(cwd, configFile ?? "tsconfig.json")

  let configResult = getTsconfig(configFilePath)

  let times = 0

  if (!configResult) {
    times = configFilePath.endsWith("tsconfig.json") ? 1 : 2
  }

  while (times > 0 && !configResult) {
    if (times === 2) {
      configResult = getTsconfig(resolve(cwd, "tsconfig.json"))
    }

    if (times === 1) {
      configResult = getTsconfig(resolve(cwd, "jsconfig.json"))
    }

    times -= 1
  }

  if (!configResult) {
    throw new Error(`❌ Can't find tsconfig file at ${configFilePath}`)
  }

  const paths: TSConfigPaths = configResult.config.compilerOptions?.paths ?? {}

  return paths
}
