/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import path from 'path'

import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import pug from 'rollup-plugin-pug'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import {
  sourcemap,
  plugins,
  minimize,
  server,
  aliasConfig,
  tsConfig,
  vueConfig,
  foundationESMLibrary,
  auroraESMLibrary,
  compositionESMLibrary,
  compositionStyleDirectory,
} from '../rollup'

/**
 * External libraries that are avoided in the build process by `rollup`.
 */
const external = [
  'dotenv',
  'cluster', 
  'os',
  'http',
  'keygrip',
  'koa',
  '@koa/router',
  'koa-views',
  'koa-static',
  'koa-body',
  'ava'
]

export default [
  {
    input: 'tests/index.ts',
    output: [
      {
        name: 'tests',
        file: path.resolve(__dirname, 'build/tests/tests.esm.mjs'),
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
        path.resolve(__dirname, 'src/**'),
        path.resolve(__dirname, 'tests/**')
      ],
    },
  },

  {
    input: 'lib/scss/index.scss',
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
            includePaths: [ compositionStyleDirectory ],
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
        file: path.resolve(__dirname, 'dist/public/app.js'),
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
            includePaths: [ compositionStyleDirectory ],
          }]
        ],
      }),
      typescript(tsConfig),
      resolve({ preferBuiltins: false }),
      commonjs()
    ],
    external,
    watch: {
      include: [ 
        foundationESMLibrary,
        auroraESMLibrary,
        compositionESMLibrary,
        path.resolve(__dirname, 'src/**'),
        path.resolve(__dirname, 'app/**')
      ],
    },
  },

  {
    input: 'server/server.ts',
    output: [
      {
        name: server,
        file: path.resolve(__dirname, 'dist/server/server.esm.js'),
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
        foundationESMLibrary,
        auroraESMLibrary,
        compositionESMLibrary,
        path.resolve(__dirname, 'src/**'),
        path.resolve(__dirname, 'server/**')
      ],
    },
  }
]
