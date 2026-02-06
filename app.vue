<script setup lang="ts">
import { initAnalytics, usePageTracking } from '~/composables/useAnalytics'

const config = useRuntimeConfig()

const { public: { umamiWebsiteId, analyticsProvider } } = config

const provider = (analyticsProvider as string) || 'none'
const websiteId = (umamiWebsiteId as string) || undefined

onMounted(() => {
  if (websiteId && websiteId !== 'your-umami-website-id') {
    initAnalytics({
      provider: provider as 'umami' | 'ga' | 'none',
      websiteId
    })
  }
})

usePageTracking()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
