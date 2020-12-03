/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import views from 'koa-views'
import koaStatic from 'koa-static'
import Koa from 'koa'

export function createApp(env: any): any {
  const app: any = new Koa()

  app.use(koaStatic('dist/app', true ? {} : {
    maxage: 1209600,
  }))

  app.use(views('app/html', { extension: 'pug' }))

  return app
}