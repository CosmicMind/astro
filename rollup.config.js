/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import path from 'path'

import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import pug from 'rollup-plugin-pug'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

const isProd = 'development' === typeof process.env.CM_ENV
const sourcemap = !isProd
const plugins = isProd ? [ terser ] : []
const minimize = isProd
const server = isProd ? 'prod' : 'dev'

/**
 * The `/^\$(.+)$/` pattern matches the dynamic imports from the `$1/index` (../) directory.
 * In the `tsconfig.json` file, there is a corresponding entry in the `paths`
 * list.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const libFinder = { 
  find: /^\$\/(.+)$/, 
  replacement: path.resolve(__dirname, '../$1') 
}

/**
 * The `/^#(.+)$/` pattern matches the dynamic imports from the `./$1` (root) directory.
 * In the `tsconfig.json` file, there is a corresponding entry in the `paths`
 * list.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const rootFinder = { 
  find: /^#\/(.+)$/, 
  replacement: path.resolve(__dirname, '$1'),
}

/**
 * The `/^@(.+)$/` pattern matches the dynamic imports from the `src/$1` directory.
 * In the `tsconfig.json` file, there is a corresponding entry in the `paths`
 * list.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const srcFinder = { 
  find: /^@\/(.+)$/, 
  replacement: path.resolve(__dirname, 'src/$1'),
}

/**
 * The `vue` pattern matches the `Vue.js` library imports.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const vueFinder = { 
  find: 'vue', 
  replacement: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-browser.js'),
}

/**
 * The `aliasConfig` block is the default configuration used for the
 * `alias` plugin.
 * @property {Array<string>} resolve Files included in the search and replace of matched entries.
 * @property {Array<{find: string|RegExp, replacement: string}} entries Find and replace patterns.
 */
 const aliasConfig = {
  resolve: [
    '.json',
    '.mjs', 
    '.js', 
    '.vue',
    '.scss'
  ],
  entries: [
    libFinder,
    rootFinder,
    srcFinder,
    vueFinder
  ],
}

/**
 * The `tsConfig` block is the default configuration used for the
 * `typescript` plugin.
 * @property {boolean} clean Cleans the cached build files before compilation.
 * @property {number} verbosity Details level of the output logs.
 * @property {string} tsconfig Location of the local `tsconfig` file.
 * @property {boolean} useTsconfigDeclarationDir Respect the tsconfig declaration directory.
 */
const tsConfig = {
  clean: true,
  verbosity: 1,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  useTsconfigDeclarationDir: true,
}

/**
 * The `vueConfig` block is the default configuration used for the `vue` plugin.
 */
const vueConfig = {}

/**
 * External libraries that are avoided in the build process by `rollup`.
 */
const external = [
  'dotenv',
  'cluster', 
  'os',
  'http',
  'koa',
  '@koa/router',
  'koa-views',
  'koa-static',
  'ava',
  'grapheme-splitter',
  'd3'
]

export default [
  {
    input: 'tests/index.ts',
    output: [
      {
        name: 'tests',
        file: path.resolve(__dirname, 'dist/tests/tests.esm.mjs'),
        format: 'es',
        sourcemap,
        plugins,
      }
    ],
    plugins: [
      alias(aliasConfig),
      json(),
      typescript(tsConfig)
    ],
    external,
    watch: {
      include: [ 
        path.resolve(__dirname, 'tests/**')
      ],
      exclude: path.resolve(__dirname, 'node_modules/**'),
    },
  },

  {
    input: 'lib/index.scss',
    output: {
      file: path.resolve(__dirname, 'dist/public/lib.css'),
    },
    plugins: [
      alias(aliasConfig),
      postcss({
        extract: true,
        minimize,
        use: [
          ['sass', {
            includePaths: [ path.resolve(__dirname, '../composition/lib/style') ],
          }]
        ],
      })
    ]
  },

  {
    input: 'app/main.ts',
    output: [
      {
        name: 'app',
        file: path.resolve(__dirname, 'dist/public/app.esm.js'),
        format: 'es',
        sourcemap,
        plugins,
      },
    ],
    plugins: [
      alias(aliasConfig),
      vue(vueConfig),
      json(),
      pug(),
      postcss({
        extract: path.resolve(__dirname, 'dist/public/app.css'),
        minimize,
        use: [
          ['sass', {
            includePaths: [ path.resolve(__dirname, '../composition/lib/style') ],
          }]
        ],
      }),
      typescript(tsConfig)
    ],
    external,
    watch: {
      include: [ 
        path.resolve(__dirname, 'src/**'),
        path.resolve(__dirname, 'app/**')
      ],
      exclude: path.resolve(__dirname, 'node_modules/**'),
    },
  },

  {
    input: 'server/server.ts',
    output: [
      {
        name: server,
        file: path.resolve(__dirname, 'dist/server/dev.esm.mjs'),
        format: 'es',
        sourcemap,
        plugins,
      },
    ],
    plugins: [
      alias(aliasConfig),
      json(),
      typescript(tsConfig)
    ],
    external,
    watch: {
      include: [ 
        path.resolve(__dirname, 'server/**')
      ],
      exclude: path.resolve(__dirname, 'node_modules/**'),
    },
  }
]
