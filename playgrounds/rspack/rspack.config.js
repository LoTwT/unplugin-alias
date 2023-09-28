const Alias = require("unplugin-alias/rspack")

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  plugins: [Alias.default()],
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
}
