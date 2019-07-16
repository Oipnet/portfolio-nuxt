const { resolve } = require('path')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/portfolio-nuxt/'
    }
  } : {}

export default {
    ...routerBase,
    mode: 'universal',
    modern: true,
    srcDir: resolve(__dirname),
    head: {
        title: process.env.npm_package_name || '',
        meta: [
          { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: []
    },
    icon: {
        iconFileName: 'favicon.png'
    },
    manifest: {
        name: 'Oipnet Portfolio',
        lang: 'fr'
    },
    meta: {
        viewport: 'width=device-width, initial-scale=1',
        charset: 'utf-8'
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    devModules: [
      '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.css'
    },
    build: {
        postcss: {
            plugins: {
            tailwindcss: './config/tailwind.config.js'
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}