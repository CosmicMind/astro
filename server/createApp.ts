/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createApp
 */

import dotenv from 'dotenv'
dotenv.config()

import Koa from 'koa'
import KeyGrip from 'keygrip'
import koaViews from 'koa-views'
import KoaStatic from 'koa-static'
import KoaBody from 'koa-body'

import keygrip from '^/keygrip.json'

export function createApp(env: any): any {
  const app: any = new Koa()
  app.proxy = process.env.NODE_PROXY
  app.keys = new KeyGrip(keygrip.keys, keygrip.hash)
  
  app.use(KoaBody())

  app.use(KoaStatic(env.assets, true ? {} : {
    maxage: 1209600,
  }))

  app.use(KoaStatic(env.public, true ? {} : {
    maxage: 1209600,
  }))

  app.use(koaViews(env.views, { extension: 'html' }))

  return app
}