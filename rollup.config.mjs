// rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginBabel from "@rollup/plugin-babel";

import rollupTypescript from "@rollup/plugin-typescript";
import rollupPluginTerser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  strictDeprecations: true,
  output: [
    {
      file: "./dist/index.umd.js",
      name: "index",
      format: "umd",
    },
    {
      file: "./dist/index.es.js",
      name: "index",
      format: "es",
    },
  ],
  cache: false,
  watch: {
    exclude: "node_modules/**",
    include: "src/**",
  },
  external: ["axios"],
  plugins: [
    rollupTypescript({
      tsconfig: "./tsconfig.json",
    }),
    rollupPluginTerser(),
    rollupPluginBabel({
      babelHelpers: "runtime",
      include: "src/**",
      exclude: "node_modules",
      plugins: ["@babel/plugin-transform-runtime"],
      extensions: ["js", "ts"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "defaults",
          },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react",
      ],
    }),
    nodeResolve({
      modulesOnly: true,
      moduleDirectories: ["node_modules"],
      extensions: ["js", "ts"],
    }),
    rollupPluginCommonjs({
      extensions: [".js", ".ts"],
      include: ["src/**/*.ts"],
      exclude: "node_modules/*",
      transformMixedEsModules: true,
      strictRequires: true,
    }),
  ],
};
