/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createRoutes
 */

import KoaRouter from '@koa/router'
const router = new KoaRouter()

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

export function createRoutes(app: any) {
  app.use(router.routes()).use(router.allowedMethods())

  router.get('/',
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

  router.get('/projects/:projectId',
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

  router.get('/spaces/:spaceId',
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