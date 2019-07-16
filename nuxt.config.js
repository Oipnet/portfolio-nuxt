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
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: []
    },
    modules: [
        '@nuxtjs/axios'
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
            tailwindcss: './tailwind.config.js'
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}