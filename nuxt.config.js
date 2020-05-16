const siteName = 'Nuxt.js + Prismic.io Starter'

export default {
  mode: 'universal',

  env: {
    siteName
  },

  head: {
    titleTemplate: `%s | ${siteName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Prismic.io Starter' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap' },
    ],
  },

  loading: { color: '#fff' },

  css: [
    'normalize.css',
    '@/assets/scss/base.scss',
  ],

  plugins: [
    '@/plugins/filters',
  ],

  buildModules: [
    '@nuxtjs/style-resources',
  ],

  modules: [
    '@nuxtjs/prismic',
    // Note: https://prismic.io/docs/vuejs/getting-started/prismic-nuxt
    '@/modules/static',
    '@/modules/crawler',
  ],

  prismic: {
    // TODO: endpointの内容を変更すること
    endpoint: 'https://repository-name.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
    ],
  },

  build: {
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },
  },

  generate: {
    fallback: '404.html',
  },
}
