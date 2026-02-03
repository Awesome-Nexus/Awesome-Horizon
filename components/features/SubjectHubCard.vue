<template>
  <NuxtLink
    :to="url"
    class="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
    :class="[bgColor, borderColor]"
  >
    <!-- Glow effect on hover -->
    <div 
      class="absolute -inset-1 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
      :class="glowColor"
    />
    
    <!-- Border gradient on hover -->
    <div 
      class="absolute inset-0 rounded-xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :class="borderColor.replace('/30', '')"
    />
    
    <div class="relative p-6">
      <!-- Icon -->
      <div 
        class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
        :class="[bgColor.replace('/10', '/20'), textColor]"
      >
        <component 
          v-if="iconComponent" 
          :is="iconComponent" 
          class="h-6 w-6"
        />
      </div>
      
      <!-- Content -->
      <h3 class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-white">
        {{ name }}
      </h3>
      
      <p class="mb-4 text-sm text-slate-400 line-clamp-2">
        {{ description }}
      </p>
      
      <!-- Resource count -->
      <div class="flex items-center justify-between">
        <span 
          class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
          :class="[bgColor.replace('/10', '/20'), textColor]"
        >
          <BookOpen class="h-3.5 w-3.5" />
          {{ formattedResourceCount }}
        </span>
        
        <ArrowRight 
          class="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" 
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, ArrowRight } from 'lucide-vue-next'

const props = defineProps<{
  name: string
  description: string
  resourceCount: number | string
  url: string
  icon?: string
  color?: string
}>()

// Color mappings
const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500'
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500'
  },
  red: {
    text: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    glow: 'shadow-red-500'
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500'
  },
  sky: {
    text: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
    glow: 'shadow-sky-500'
  },
  teal: {
    text: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-500'
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500'
  },
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    glow: 'shadow-orange-500'
  },
  pink: {
    text: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500'
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500'
  },
  yellow: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    glow: 'shadow-yellow-500'
  },
  stone: {
    text: 'text-stone-400',
    bg: 'bg-stone-500/10',
    border: 'border-stone-500/30',
    glow: 'shadow-stone-500'
  },
  slate: {
    text: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    glow: 'shadow-slate-500'
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    glow: 'shadow-green-500'
  },
  zinc: {
    text: 'text-zinc-400',
    bg: 'bg-zinc-500/10',
    border: 'border-zinc-500/30',
    glow: 'shadow-zinc-500'
  },
  fuchsia: {
    text: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500/10',
    border: 'border-fuchsia-500/30',
    glow: 'shadow-fuchsia-500'
  },
  violet: {
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500'
  },
  indigo: {
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    glow: 'shadow-indigo-500'
  },
  rose: {
    text: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    glow: 'shadow-rose-500'
  }
}

const colors = computed(() => colorMap[props.color || 'blue'])
const textColor = computed(() => colors.value?.text || 'text-blue-400')
const bgColor = computed(() => colors.value?.bg || 'bg-blue-500/10')
const borderColor = computed(() => colors.value?.border || 'border-blue-500/30')
const glowColor = computed(() => colors.value?.glow || 'shadow-blue-500')

const formattedResourceCount = computed(() => {
  if (typeof props.resourceCount === 'string') return props.resourceCount
  if (props.resourceCount >= 1000) {
    return `${(props.resourceCount / 1000).toFixed(1)}k+ Resources`
  }
  return `${props.resourceCount}+ Resources`
})

// Dynamic icon component loading
const iconComponent = computed(() => {
  // Icons are passed as string names, will be rendered by parent
  return null
})
</script>
