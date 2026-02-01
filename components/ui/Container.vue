<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl'
})

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none'
}

const classes = computed(() => [
  'mx-auto px-4 sm:px-6 lg:px-8',
  sizeClasses[props.size],
  props.class
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
