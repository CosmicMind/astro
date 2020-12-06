/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import path from 'path'

import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import pug from 'rollup-plugin-pug'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

import {
  sourcemap,
  plugins,
  minimize,
  server,
  aliasConfig,
  tsConfig,
  vueConfig,
} from '../rollup'

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
        file: path.resolve(__dirname, 'dist/public/app.esm.mjs'),
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
        file: path.resolve(__dirname, 'dist/server/server.esm.mjs'),
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
