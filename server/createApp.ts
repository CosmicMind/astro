/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createApp
 */

import Koa from 'koa'
import KeyGrip from 'keygrip'
import koaViews from 'koa-views'
import koaStatic from 'koa-static'

import keygrip from '^/keygrip.json'

// import { cookies } from '$/aurora'

export function createApp(env: any): any {
  const app: any = new Koa()
  app.keys = new KeyGrip(keygrip.keys, keygrip.hash)

  // app.use(cookies)

  app.use(koaStatic(env.assets, true ? {} : {
    maxage: 1209600,
  }))

  app.use(koaStatic(env.public, true ? {} : {
    maxage: 1209600,
  }))

  app.use(koaViews(env.views, { extension: 'pug' }))

  return app
}