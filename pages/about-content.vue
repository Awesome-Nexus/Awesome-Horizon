<script setup lang="ts">
// Fetch content from content/about.md
const { data: page } = await useAsyncData('about', () => 
  queryCollection('content').path('/about').first()
)

// Set SEO
useSEO({
  title: page.value?.title || 'About',
  description: page.value?.description || 'Learn about Awesome Horizon',
  type: 'article'
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' }
])
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <Container size="lg" class="py-16">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <NuxtLink to="/" class="hover:text-white transition-colors">
          Home
        </NuxtLink>
        <Icon name="arrow-right" class="w-4 h-4" />
        <span class="text-white">About</span>
      </nav>

      <!-- Content -->
      <article class="prose-custom">
        <ContentRenderer
          v-if="page"
          :value="page"
        />
        <div v-else class="text-center py-16">
          <LoadingSpinner />
          <p class="text-gray-400 mt-4">Loading content...</p>
        </div>
      </article>
    </Container>
  </div>
</template>
