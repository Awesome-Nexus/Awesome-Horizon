<script setup lang="ts">
interface Props {
  id?: string
  title?: string
  subtitle?: string
  centered?: boolean
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section
    :id="id"
    class="py-12"
    :class="class"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div
        v-if="title || subtitle"
        class="mb-8"
        :class="centered && 'text-center'"
      >
        <h2
          v-if="title"
          class="text-3xl font-bold text-white mb-2"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="text-gray-400"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Content -->
      <slot />
    </div>
  </section>
</template>
