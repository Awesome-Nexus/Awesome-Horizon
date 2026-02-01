<script setup lang="ts">
interface Props {
  value: string | number
  label: string
  color?: 'primary' | 'emerald' | 'amber' | 'rose' | 'blue' | 'purple'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary'
})

const colorClasses = {
  primary: 'text-primary-400 border-primary-500/30 bg-primary-500/10',
  emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  amber: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  rose: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
  blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  purple: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
}
</script>

<template>
  <div
    class="text-center p-4 backdrop-blur-sm rounded-xl border"
    :class="colorClasses[color]"
  >
    <div
      v-if="icon"
      class="text-2xl mb-2"
    >
      {{ icon }}
    </div>
    <div class="text-2xl md:text-3xl font-bold">
      {{ value }}
    </div>
    <div class="text-sm opacity-80">
      {{ label }}
    </div>
  </div>
</template>
