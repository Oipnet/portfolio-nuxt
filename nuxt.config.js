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
      '@nuxtjs/dotenv',
      '@nuxtjs/axios',
      '@nuxtjs/pwa',
      [
        'nuxt-fontawesome', {
          imports: [
            {
              set: '@fortawesome/free-solid-svg-icons',
              icons: ['fas']
            },
            {
              set:'@fortawesome/free-brands-svg-icons',
              icons: ['fab']
            }
          ]
        }
      ]
    ],
    plugins: [
      '~/plugins/socket.io.js'
    ],
    devModules: [
      '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.css'
    },
    build: {
      vendor: [
        'socket.io-client',
        '@fortawesome/fontawesome',
        '@fortawesome/fontawesome-free-solid',
        '@fortawesome/fontawesome-free-brands'
      ],
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