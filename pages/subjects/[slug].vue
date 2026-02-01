<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Try to fetch content from content/subjects/{slug}.md
const { data: page } = await useAsyncData(`subject-${slug}`, () => 
  queryCollection('content').path(`/subjects/${slug}`).first()
)

// If no content found, use default subject page
if (!page.value) {
  console.warn(`No content found for subject: ${slug}`)
}

// Set SEO
useSEO({
  title: page.value?.title || toTitleCase(slug),
  description: page.value?.description || `Learn ${slug} with curated resources`,
  type: 'article'
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Subjects', url: '/science' },
  { name: toTitleCase(slug), url: `/subjects/${slug}` }
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
        <NuxtLink to="/science" class="hover:text-white transition-colors">
          Science
        </NuxtLink>
        <Icon name="arrow-right" class="w-4 h-4" />
        <span class="text-white">{{ toTitleCase(slug) }}</span>
      </nav>

      <!-- Content -->
      <article class="prose-custom">
        <ContentRenderer
          v-if="page"
          :value="page"
        />
        <div v-else class="text-center py-16">
          <div class="text-6xl mb-4">📚</div>
          <h1 class="text-3xl font-bold text-white mb-4">
            {{ toTitleCase(slug) }} Resources
          </h1>
          <p class="text-gray-400 mb-8">
            Detailed content for {{ slug }} is being prepared.
          </p>
          <p class="text-gray-500">
            Check back soon for comprehensive {{ slug }} learning materials.
          </p>
          <Button to="/science" variant="primary" class="mt-8">
            Browse All Science Subjects
          </Button>
        </div>
      </article>
    </Container>
  </div>
</template>
