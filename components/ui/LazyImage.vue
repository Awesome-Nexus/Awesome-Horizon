<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  placeholder?: string
  lazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  lazy: true
})

const loaded = ref(false)
const error = ref(false)

const handleLoad = () => {
  loaded.value = true
}

const handleError = () => {
  error.value = true
  loaded.value = true
}
</script>

<template>
  <div
    class="relative overflow-hidden bg-space-800"
    :style="{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }"
  >
    <!-- Placeholder -->
    <div
      v-if="!loaded"
      class="absolute inset-0 flex items-center justify-center"
    >
      <div class="w-full h-full bg-space-700 animate-pulse" />
    </div>

    <!-- Error state -->
    <div
      v-if="error"
      class="absolute inset-0 flex items-center justify-center text-gray-500"
    >
      <span class="text-sm">Failed to load image</span>
    </div>

    <!-- Image -->
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
      @load="handleLoad"
      @error="handleError"
    >
  </div>
</template>
