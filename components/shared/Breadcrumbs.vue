<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  to?: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  homeTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  homeTo: '/'
})

// Generate JSON-LD structured data
const jsonLd = computed(() => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://awesome-horizon.vercel.app'
      },
      ...props.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.href || (item.to ? `https://awesome-horizon.vercel.app${item.to}` : undefined)
      }))
    ]
  }
  return JSON.stringify(structuredData)
})

// Add structured data to head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: jsonLd
    }
  ]
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
    <!-- Home -->
    <NuxtLink
      :to="homeTo"
      class="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="sr-only">Home</span>
    </NuxtLink>

    <!-- Separator -->
    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>

    <!-- Items -->
    <template v-for="(item, index) in items" :key="index">
      <!-- Link -->
      <NuxtLink
        v-if="item.to && index < items.length - 1"
        :to="item.to"
        class="text-gray-400 hover:text-white transition-colors"
      >
        {{ item.name }}
      </NuxtLink>

      <!-- External Link -->
      <a
        v-else-if="item.href && index < items.length - 1"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-white transition-colors"
      >
        {{ item.name }}
      </a>

      <!-- Current Page -->
      <span
        v-else
        class="text-white font-medium"
        aria-current="page"
      >
        {{ item.name }}
      </span>

      <!-- Separator -->
      <svg
        v-if="index < items.length - 1"
        class="w-4 h-4 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </template>
  </nav>
</template>
