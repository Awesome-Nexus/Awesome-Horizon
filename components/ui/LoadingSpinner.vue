<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  centered: true
})

const sizeClasses = {
  sm: 'w-6 h-6 border-2',
  md: 'w-12 h-12 border-4',
  lg: 'w-16 h-16 border-4'
}

const dotSizeClasses = {
  sm: 'w-1 h-1',
  md: 'w-2 h-2',
  lg: 'w-3 h-3'
}
</script>

<template>
  <div
    :class="[
      'flex items-center justify-center',
      centered && 'p-8'
    ]"
  >
    <div class="relative">
      <!-- Outer ring -->
      <div
        :class="[
          'border-space-700 rounded-full animate-spin border-t-primary-500',
          sizeClasses[size]
        ]"
      />
      <!-- Inner dot -->
      <div
        :class="[
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 rounded-full animate-pulse',
          dotSizeClasses[size]
        ]"
      />
    </div>
  </div>
</template>
