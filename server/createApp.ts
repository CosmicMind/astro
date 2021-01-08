/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createApp
 */

import dotenv from 'dotenv'
dotenv.config()

import Koa from 'koa'
import KeyGrip from 'keygrip'
import koaViews from 'koa-views'
import koaStatic from 'koa-static'

import keygrip from '^/keygrip.json'

import { 
  cleanse,
  cookies,
} from '$/aurora'

export function createApp(env: any): any {
  const app: any = new Koa()
  app.proxy = process.env.DE_PROXY
  app.keys = new KeyGrip(keygrip.keys, keygrip.hash)
  
  app.use(cleanse)
  app.use(cookies)

  app.use(koaStatic(env.assets, true ? {} : {
    maxage: 1209600,
  }))

  app.use(koaStatic(env.public, true ? {} : {
    maxage: 1209600,
  }))

  app.use(koaViews(env.views, { extension: 'pug' }))

  return app
}