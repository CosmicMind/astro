/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createRoutes
 */

import koaRouter from '@koa/router'
const router = new koaRouter()

import { UserService } from '$/aurora'

const styles = [
  {
    rel: 'stylesheet', 
    type: 'text/css', 
    media: 'all', 
    href: 'https://use.typekit.net/doc6thr.css',
  },
  {
    rel: 'stylesheet', 
    type: 'text/css', 
    media: 'all', 
    href: '/lib.css',
  },
  {
    rel: 'stylesheet', 
    type: 'text/css', 
    media: 'all', 
    href: '/app.css',
  }
]

const scripts = [
  {
    type: 'application/javascript',
    src: 'https://kit.fontawesome.com/8758c0b6e6.js',
    defer: true,
  },
  {
    type: 'module',
    src: '/app.js',
    defer: true,
  }
]

const meta = {
  author: 'CosmicMind, Inc.',
  copyright: 'CosmicMind, Inc.',
  keywords: '',
  description: '',

  robots: 'noindex, nofollow',
  googlebot: 'noindex, nofollow, noarchive',
}

const fetchUser = async (ctx: any, next: any) => {
  await UserService.user({ cookie: ctx.headers.cookie })
                   .then((response: any) => {
                     console.log('User', response)
                     return response
                   })
                   .catch((e: any) => { console.log('ERROR', e) })

  await next()
}

export function createRoutes(app: any) {
  app.use(router.routes()).use(router.allowedMethods())

  router.get('/',
  fetchUser,
  async (ctx: any) => {
    const options = { title: 'Dashboard' }
    
    await ctx.render('base', {
      meta,
      styles,
      scripts,
      title: options.title,
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