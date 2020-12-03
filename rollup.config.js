/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import path from 'path'

import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import pug from 'rollup-plugin-pug'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

/**
 * The `/^\$(.+)$/` pattern matches the dynamic imports from the `$1/index` (../) directory.
 * In the `tsconfig.json` file, there is a corresponding entry in the `paths`
 * list.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const libFinder = { 
  find: /^\$\/(.+)$/, 
  replacement: path.resolve(__dirname, '../$1/dist/lib/lib.esm.js') 
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
  replacement: path.resolve(__dirname, '$1') 
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
  replacement: path.resolve(__dirname, 'src/$1') 
}

/**
 * The `vue` pattern matches the `Vue.js` library imports.
 * @property {string|RegExp} find The alias pattern to match.
 * @property {string} replacement The replacement value.
 */
const vueFinder = { 
  find: 'vue', 
  replacement: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-browser.js') 
}

/**
 * The `aliasConfig` block is the default configuration used for the
 * `alias` plugin.
 * @property {Array<string>} resolve Files included in the search and replace of matched entries.
 * @property {Array<{find: string|RegExp, replacement: string}} entries Find and replace patterns.
 */
const aliasConfig = {
  resolve: [ 
    '.js', 
    '.ts',
    '.scss',
    '.vue'
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
        file: `dist/tests/tests.esm.mjs`,
        format: 'es',
        sourcemap: true,
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
        'tests/**'
      ],
      exclude: 'node_modules/**'
    },
  },

  {
    input: 'app/style/lib.scss',
    output: {
      file: 'dist/app/lib.esm.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      })
    ]
  },

  {
    input: 'app/main.ts',
    output: [
      {
        name: 'app',
        file: 'dist/app/app.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        name: 'app',
        file: 'dist/app/app.min.esm.js',
        format: 'es',
        sourcemap: false,
        plugins: [
          terser()
        ],
      },
    ],
    plugins: [
      alias(aliasConfig),
      vue(vueConfig),
      json(),
      pug(),
      postcss({
        extract: 'app.esm.css',
        minimize: true,
      }),
      typescript(tsConfig)
    ],
    external,
    watch: {
      include: [ 
        'src/**',
        'app/**'
      ],
      exclude: 'node_modules/**'
    },
  },

  {
    input: 'server/web.ts',
    output: [
      {
        name: 'web',
        file: `dist/server/web.esm.mjs`,
        format: 'es',
        sourcemap: true,
      },
      {
        name: 'web',
        file: `dist/server/web.min.esm.mjs`,
        format: 'es',
        sourcemap: false,
        plugins: [
          terser()
        ],
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
        'server/**'
      ],
      exclude: 'node_modules/**'
    },
  }
]
