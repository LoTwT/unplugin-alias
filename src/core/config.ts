import process from "node:process"

import { resolve } from "node:path"
import { getTsconfig } from "get-tsconfig"
import { type Options } from "../types"
import { type TSConfigPaths } from "./types"

export const getTSConfigPaths = (options: Options) => {
  const { configFile, cwd = process.cwd() } = options

  const configFilePath = resolve(cwd, configFile ?? "tsconfig.json")

  const configResult = getTsconfig(configFilePath)

  if (!configResult) {
    throw new Error(`❌ Can't find tsconfig file at ${configFilePath}`)
  }

  const paths: TSConfigPaths = configResult.config.compilerOptions?.paths ?? {}

  return paths
}
