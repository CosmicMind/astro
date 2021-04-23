/// Copyright © 2020, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

/**
 * @module createRoutes
 */

 import KoaRouter from '@koa/router'
 const router = new KoaRouter()
 
 const style = [
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
 
 const script = [
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
 
     const property = {
       'og:title': options.title,
       // 'og:site_name': options.siteName,
       // 'og:url': options.url,
       // 'og:description': options.description,
       // 'og:image': options.image,
     
       // 'twitter:image': options.image,
       // 'twitter:title': options.title,
       // 'twitter:description': options.description,
     }
 
     let metaOutput = ''
     for (const [ k, v ] of Object.entries(meta)) { 
       metaOutput += `<meta name='${k}' content='${v}'>\n`
     }
 
     let propertyOutput = ''
     for (const [ k, v ] of Object.entries(property)) { 
       propertyOutput += `<meta property='${k}' content='${v}'>\n`
     }
 
     let styleOutput = ''
     for (const x of style) { 
       styleOutput += `<link rel='${x.rel}' type='${x.type}' media='${x.media}' href='${x.href}' />\n`
     }
 
     let scriptOutput = ''
     for (const x of script) { 
       scriptOutput += `<script type='${x.type}', src='${x.src}', defer='${x.defer}'></script>\n`
     }
 
 
 
     ctx.body = `<!DOCTYPE html>
                 <html>
                   <head>
                     ${metaOutput}
                     ${propertyOutput}
                     <meta charset='utf-8'>
                     <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'>
                     <title>Page Title</title>
                     <link rel='icon' type='image/png' href='/favicon.png' />
                     <link rel='shortcut icon' type='image/png' href='/favicon.png' />
                     <link rel='apple-touch-icon' type='image/png' href='/favicon.png' />
                     ${styleOutput}
                   </head>
                   <body id='mount'>
                   ${scriptOutput}
                   </body>
                 </html>`
   })
 }