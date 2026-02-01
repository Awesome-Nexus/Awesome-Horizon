<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  badge?: string
  badgePulse?: boolean
  centered?: boolean
  gradient?: 'purple' | 'blue' | 'emerald' | 'mixed'
}

const props = withDefaults(defineProps<Props>(), {
  centered: true,
  gradient: 'purple',
  badgePulse: false
})

const gradientClasses = {
  purple: 'from-primary-900/20 via-space-950 to-blue-900/20',
  blue: 'from-blue-900/20 via-space-950 to-cyan-900/20',
  emerald: 'from-emerald-900/20 via-space-950 to-teal-900/20',
  mixed: 'from-purple-900/20 via-space-950 to-emerald-900/20'
}
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Background Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br"
      :class="gradientClasses[gradient]"
    />

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div
        class="mb-16"
        :class="centered && 'text-center'"
      >
        <!-- Badge -->
        <Badge
          v-if="badge"
          variant="primary"
          class="mb-6"
          :pulse="badgePulse"
        >
          {{ badge }}
        </Badge>

        <!-- Title -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span class="bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {{ title }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          v-if="subtitle"
          class="text-xl text-gray-300 max-w-3xl"
          :class="centered && 'mx-auto'"
        >
          {{ subtitle }}
        </p>

        <!-- Extra content slot -->
        <div
          v-if="$slots.extra"
          class="mt-8"
        >
          <slot name="extra" />
        </div>
      </div>

      <!-- Main content slot -->
      <slot />
    </div>
  </div>
</template>
