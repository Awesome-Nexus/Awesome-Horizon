<script setup lang="ts">
import type { SubjectPageData, SubjectSection } from '~/composables/useSubjectPage'

interface Props {
  title: string
  description: string
  resourceCount: string
  gradient?: 'purple' | 'blue' | 'emerald' | 'mixed'
  levels: Array<{
    id: string
    title: string
    subtitle: string
    resources: number | string
    color: string
  }>
  quickLinks?: Array<{
    name: string
    url: string
    count: number
  }>
  backLink?: {
    to: string
    text: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  gradient: 'purple',
  backLink: () => ({ to: '/', text: 'Back to Categories' })
})

const gradientClasses = {
  purple: 'from-purple-900/20 via-space-950 to-blue-900/20',
  blue: 'from-blue-900/20 via-space-950 to-cyan-900/20',
  emerald: 'from-emerald-900/20 via-space-950 to-teal-900/20',
  mixed: 'from-primary-900/20 via-space-950 to-blue-900/20'
}
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br"
        :class="gradientClasses[gradient]"
      />

      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <!-- Back Link -->
        <NuxtLink
          v-if="backLink"
          :to="backLink.to"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {{ backLink.text }}
        </NuxtLink>

        <!-- Title Section -->
        <div class="text-center mb-16">
          <Badge
            variant="primary"
            class="mb-6"
            pulse
          >
            {{ resourceCount }} Global Resources
          </Badge>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {{ title }}
            </span>
          </h1>

          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {{ description }}
          </p>

          <!-- Level Stats -->
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div
              v-for="level in levels"
              :key="level.id"
              class="text-center"
            >
              <div
                class="text-3xl font-bold"
                :class="`text-${level.color}-400`"
              >
                {{ level.resources }}
              </div>
              <div class="text-sm text-gray-400">
                {{ level.title }}
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div
          v-if="quickLinks?.length"
          class="flex flex-wrap justify-center gap-3 mb-16"
        >
          <a
            v-for="link in quickLinks"
            :key="link.name"
            :href="link.url"
            class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-primary-500/50 transition-all"
          >
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-primary-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      <slot />
    </div>
  </div>
</template>
