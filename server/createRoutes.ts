/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createRoutes
 */

import koaRouter from '@koa/router'
const router = new koaRouter()

export function createRoutes(env: any, app: any) {
  app.use(router.routes()).use(router.allowedMethods())

  router.get('/',
  async (ctx: any) => {
    const options = { title: 'Composition' }
    await ctx.render('base', {
      styles: [
        'https://use.typekit.net/doc6thr.css',
        'lib.css',
        'app.css'
      ],
      scripts: [
        'https://kit.fontawesome.com/8758c0b6e6.js',
        'app.js'
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