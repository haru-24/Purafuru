export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@5.0.2/css/swiper.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/earlyaccess/nicomoji.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/googleIcon.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/swiper.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    path: '@/components/',
    pathPrefix: false,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/dotenv'],

  axios: {
    baseURL: 'http://localhost:8000/',
    browserBaseURL: 'http://localhost:8000/',
  },

  auth: {
    // localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'access_token',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: false,
          user: { url: '/users/login', method: 'get', propertyName: false },
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-awesome-swiper'],
  },
}
