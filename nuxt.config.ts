import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: 'zh-Hant',
    // lazy: true,
    strategy: 'prefix_except_default',
    langDir: './locales/',
    locales: [
      {
        code: 'zh-Hant',
        name: '繁體中文',
        file: 'zh-Hant.json',
        iso: 'zh-HK'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        iso: 'en-US'
      },
      {
        code: 'vi',
        name: 'Tiếng Việt',
        file: 'vi.json',
        iso: 'vi-VN'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root'
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KCIS',
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      meta: [
        { name: 'description', content: 'KCIS 企业形象网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})