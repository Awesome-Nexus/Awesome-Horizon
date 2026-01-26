// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['ts', 'js', 'css', 'json', 'bash', 'vue', 'python', 'md']
        }
      }
    }
  },
  app: {
    head: {
      title: 'Awesome Horizon',
      meta: [
        { name: 'description', content: 'Curated learning resources for the modern era.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
