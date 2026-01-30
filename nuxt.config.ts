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
      title: 'Awesome Horizon - Curated STEAM Learning Resources',
      meta: [
        { name: 'description', content: 'Discover curated educational resources for Science, Technology, Engineering, Arts, and Mathematics. Free, high-quality learning materials for students and educators.' },
        { name: 'keywords', content: 'education, STEAM, science, technology, engineering, arts, mathematics, learning resources, free education' },
        { name: 'author', content: 'Awesome Horizon' },
        { property: 'og:title', content: 'Awesome Horizon - Curated STEAM Learning Resources' },
        { property: 'og:description', content: 'Discover curated educational resources for Science, Technology, Engineering, Arts, and Mathematics.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=6' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg?v=6' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg?v=6' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/science',
        '/physics',
        '/chemistry',
        '/biology',
        '/mathematics',
        '/technology',
        '/engineering',
        '/arts',
        '/about'
      ]
    }
  }
})
