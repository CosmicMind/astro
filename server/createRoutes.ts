/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import koaRouter from '@koa/router'
const router = new koaRouter()

export function createRoutes(env: any, app: any) {
  app.use(router.routes()).use(router.allowedMethods())

  router.get('/',
  async (ctx: any) => {
    const options = { title: 'App' }

    await ctx.render('base', {
      styles: [
        'https://use.typekit.net/doc6thr.css',
        'lib.esm.css',
        'app.esm.css'
      ],
      scripts: [
        'app.esm.js'
      ],

      title: options.title,
      
      meta: {
        author: 'CosmicMind, Inc.',
        copyright: 'CosmicMind, Inc.',
        keywords: '',
        description: '',
      
        robots: 'noindex, nofollow',
        googlebot: 'noindex, nofollow, noarchive',
      },
      
      properties: {
        'og:title': options.title,
        // 'og:site_name': options.siteName,
        // 'og:url': options.url,
        // 'og:description': options.description,
        // 'og:image': options.image,

        // 'twitter:image': options.image,
        // 'twitter:title': options.title,
        // 'twitter:description': options.description,
      },
    })
  })
}