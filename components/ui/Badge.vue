<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md'
  pulse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'sm',
  pulse: false
})

const variantClasses = {
  default: 'bg-space-800 text-gray-300',
  primary: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  danger: 'bg-red-500/20 text-red-400 border-red-500/30',
  info: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm'
}

const classes = computed(() => [
  'inline-flex items-center gap-1.5 rounded-full border font-medium',
  sizeClasses[props.size],
  variantClasses[props.variant]
])
</script>

<template>
  <span :class="classes">
    <span
      v-if="pulse"
      class="w-1.5 h-1.5 rounded-full animate-pulse"
      :class="{
        'bg-primary-400': variant === 'primary',
        'bg-emerald-400': variant === 'success',
        'bg-amber-400': variant === 'warning',
        'bg-red-400': variant === 'danger',
        'bg-blue-400': variant === 'info',
        'bg-gray-400': variant === 'default'
      }"
    />
    <slot />
  </span>
</template>
