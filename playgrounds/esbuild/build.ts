import { build } from "esbuild"
import Alias from "unplugin-alias/esbuild"

build({
  entryPoints: ["index.ts"],
  outfile: "dist/index.js",
  tsconfig: "tsconfig.json",
  bundle: true,
  plugins: [Alias()],
})
