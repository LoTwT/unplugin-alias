import { resolve } from "node:path"
import { type Alias, type TSConfigPaths } from "./types"

const presetSuffix = "/*"

export const mapPathToAlias = (
  paths: TSConfigPaths,
  suffix = presetSuffix,
): Alias => {
  const alias: Alias = {}

  Object.entries(paths).forEach(([rawPlaceholder, rawPlaceholderPaths]) => {
    const p = rawPlaceholderPaths[0]

    if (!p) return

    const placeholder = removeSuffix(rawPlaceholder, suffix)
    const placeholderPath = removeSuffix(p, suffix)

    alias[placeholder] = resolveFilePath(placeholderPath)
  })

  return alias
}

export const removeSuffix = (s: string, suffix: string) =>
  s.endsWith(suffix) ? s.slice(0, Math.max(0, s.length - suffix.length)) : s

export const resolveFilePath = (filePath: string) => resolve(filePath)
