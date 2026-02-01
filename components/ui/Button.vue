<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  external?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  external: false,
  disabled: false,
  loading: false,
  icon: false
})

const variantClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-primary-500/25',
  secondary: 'bg-space-800 hover:bg-space-700 text-white border border-space-700',
  outline: 'bg-transparent border border-space-700 hover:border-primary-500/50 text-gray-300 hover:text-white',
  ghost: 'bg-transparent hover:bg-space-800 text-gray-400 hover:text-white'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg'
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200',
  'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-space-950',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
  !props.disabled && !props.loading && 'hover:scale-105',
  props.loading && 'cursor-wait',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.icon && 'p-2'
])

const isExternal = computed(() => props.external || (props.href?.startsWith('http') ?? false))
</script>

<template>
  <!-- Internal Nuxt Link -->
  <NuxtLink
    v-if="to && !isExternal"
    :to="to"
    :class="classes"
  >
    <LoadingSpinner v-if="loading" class="w-4 h-4" />
    <slot />
  </NuxtLink>

  <!-- External Link -->
  <a
    v-else-if="href || (to && isExternal)"
    :href="href || to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <LoadingSpinner v-if="loading" class="w-4 h-4" />
    <slot />
    <svg
      v-if="isExternal && !icon"
      class="w-4 h-4 opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>

  <!-- Button -->
  <button
    v-else
    :disabled="disabled || loading"
    :class="classes"
  >
    <LoadingSpinner v-if="loading" class="w-4 h-4" />
    <slot />
  </button>
</template>
