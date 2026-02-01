// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  // Site configuration for SEO
  site: {
    url: 'https://awesome-horizon.vercel.app',
    name: 'Awesome Horizon',
    description: 'Curated educational resources for Science, Technology, Engineering, Arts, and Mathematics',
    defaultLocale: 'en'
  },

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
      templateParams: {
        separator: '|',
        siteName: 'Awesome Horizon'
      },
      titleTemplate: '%s %separator %siteName',
      defaultTitle: 'Awesome Horizon',
      meta: [
        // Primary Meta Tags
        { name: 'description', content: 'Discover 18,500+ curated educational resources for Science, Technology, Engineering, Arts, and Mathematics. Free, high-quality learning materials for students and educators worldwide.' },
        { name: 'keywords', content: 'education, STEAM, science, technology, engineering, arts, mathematics, learning resources, free education, online courses, textbooks, tutorials' },
        { name: 'author', content: 'Awesome Horizon Contributors' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:site_name', content: 'Awesome Horizon' },
        { property: 'og:title', content: 'Awesome Horizon - Curated STEAM Learning Resources' },
        { property: 'og:description', content: 'Discover 18,500+ curated educational resources for Science, Technology, Engineering, Arts, and Mathematics. Free learning materials for all levels.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://awesome-horizon.vercel.app' },
        { property: 'og:image', content: 'https://awesome-horizon.vercel.app/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@AwesomeHorizon' },
        { name: 'twitter:creator', content: '@AwesomeHorizon' },
        { name: 'twitter:title', content: 'Awesome Horizon - Curated STEAM Learning Resources' },
        { name: 'twitter:description', content: 'Discover 18,500+ curated educational resources for STEAM education. Free for students and educators worldwide.' },
        { name: 'twitter:image', content: 'https://awesome-horizon.vercel.app/og-image.png' },
        
        // Viewport & PWA
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'theme-color', content: '#0f172a' },
        { name: 'msapplication-TileColor', content: '#0f172a' },
        
        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Awesome Horizon' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#a855f7' },
        
        // PWA
        { rel: 'manifest', href: '/manifest.json' },
        
        // Preconnect for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        
        // Canonical
        { rel: 'canonical', href: 'https://awesome-horizon.vercel.app' }
      ],
      script: [
        // Service Worker Registration
        {
          innerHTML: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then((registration) => {
                    console.log('SW registered:', registration.scope)
                  })
                  .catch((err) => {
                    console.log('SW registration failed:', err)
                  })
              })
            }
          `
        },
        // Organization structured data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Awesome Horizon',
            description: 'Curated educational resources for STEAM education',
            url: 'https://awesome-horizon.vercel.app',
            logo: 'https://awesome-horizon.vercel.app/logo.png',
            sameAs: [
              'https://github.com/Awesome-Nexus/Awesome-Horizon'
            ]
          })
        },
        // Website structured data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Awesome Horizon',
            url: 'https://awesome-horizon.vercel.app',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://awesome-horizon.vercel.app/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }
      ],
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      bodyAttrs: {
        class: 'bg-space-950 text-space-100 antialiased'
      }
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
        '/about',
        '/sitemap.xml',
        '/robots.txt'
      ],
      crawlLinks: true
    },
    routeRules: {
      // Cache static assets
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'cache-control': 'public, max-age=2592000' } }
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: 'https://awesome-horizon.vercel.app',
      siteName: 'Awesome Horizon',
      siteDescription: 'Curated educational resources for STEAM education'
    }
  }
})
