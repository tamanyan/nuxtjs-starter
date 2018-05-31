require('dotenv').config();

module.exports = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost:3000',
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5000/api',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'super_chance_questionnaire',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static Web Site for Super Chance Campaign' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#EE1C23' },
  /*
  ** pulgins configuration
  */
  plugins: [
    { src: '~plugins/vue-i18n.js', ssr: false },
    { src: '~plugins/vue-font-awesome.js', ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'Super Chance Questionnaire',
    lang: 'th'
  }
}
