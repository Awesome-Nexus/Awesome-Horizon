<script setup lang="ts">
interface Props {
  variant?: 'default' | 'hover' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  bordered?: boolean
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  bordered: true
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

const variantClasses = {
  default: 'bg-space-900/50',
  hover: 'bg-space-900/50 hover:bg-space-800/50 hover:-translate-y-1 hover:shadow-xl',
  interactive: 'bg-space-900/50 hover:bg-space-800 hover:border-primary-500/50 hover:-translate-y-1 hover:shadow-xl cursor-pointer'
}

const classes = computed(() => [
  'rounded-2xl transition-all duration-300',
  props.bordered && 'border border-space-800',
  paddingClasses[props.padding],
  variantClasses[props.variant]
])

const isExternal = computed(() => props.href?.startsWith('http') ?? false)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </a>

  <div
    v-else
    :class="classes"
  >
    <slot />
  </div>
</template>
