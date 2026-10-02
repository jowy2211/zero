import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/fonts', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      // Override with NUXT_PUBLIC_SITE_URL at build time.
      siteUrl: 'https://example.com',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f4f2ee' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  fonts: {
    families: [
      { name: 'Archivo Black', provider: 'google', weights: [400], display: 'swap', preload: true },
      { name: 'Space Mono', provider: 'google', weights: [400, 700], display: 'swap', preload: true },
    ],
  },

  icon: {
    // Bundle only the icons used in the app: no runtime requests to the Iconify API.
    provider: 'none',
    clientBundle: {
      scan: true,
      sizeLimitKb: 0,
      // Icons referenced from app/data/profile.ts are dynamic, so list them explicitly.
      icons: [
        'simple-icons:github', 'simple-icons:linkedin', 'simple-icons:x',
        'simple-icons:react', 'simple-icons:typescript', 'simple-icons:nodedotjs',
        'simple-icons:tailwindcss', 'simple-icons:mongodb', 'simple-icons:git',
        'lucide:mail',
      ],
    },
    mode: 'svg',
  },

  features: { inlineStyles: true },

  routeRules: {
    '/': { prerender: true },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: { routes: ['/', '/sitemap.xml', '/robots.txt'], crawlLinks: false },
  },
})
