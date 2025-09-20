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
    '@nuxtjs/sitemap',
    '@nuxtjs/seo'
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
        iso: 'zh-TW',
        isCatchallLocale: true
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
    baseUrl: 'https://kcis.com',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieSecure: true
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KCIS - 專業工程與建築顧問服務',
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      meta: [
        { name: 'description', content: 'KCIS 工程顧問 | 越南專業工程監造與顧問服務，提供廠房建設、機電監理、法規合規與專案管理，協助台資與中資企業在越南推動工業工程專案' },
        { name: 'keywords', content: '工程顧問,建築設計,專案管理,成本控管,施工監造,越南,台資企業,工業工程' },
        { property: 'og:title', content: 'KCIS - 專業工程與建築顧問服務' },
        { property: 'og:description', content: 'KCIS 工程顧問 | 越南專業工程監造與顧問服務，提供廠房建設、機電監理、法規合規與專案管理，協助台資與中資企業在越南推動工業工程專案' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://kcis.com' },
        { property: 'og:image', content: 'https://kcis.com/logo-share.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'KCIS - 專業工程與建築顧問服務' },
        { name: 'twitter:description', content: 'KCIS 工程顧問 | 越南專業工程監造與顧問服務' },
        { name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://kcis.com' }
      ]
    }
  },
  
  // 禁用 SPA loading template (hydration 前的加载屏幕)
  // spaLoadingTemplate: false
})