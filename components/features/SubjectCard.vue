<script setup lang="ts">
interface Props {
  id: string
  name: string
  description: string
  icon: string
  color: string
  resources: string
  url: string
}

const props = defineProps<Props>()

// Icon mapping for different subject IDs
const iconMap: Record<string, string> = {
  // Science
  physics: 'atom',
  chemistry: 'flask',
  biology: 'dna',
  'earth-science': 'globe',
  astronomy: 'telescope',
  psychology: 'brain',
  environmental: 'leaf',
  // Technology
  'computer-science': 'cpu',
  'artificial-intelligence': 'brain',
  cybersecurity: 'shield',
  'data-science': 'barchart',
  'web-development': 'globe',
  'mobile-development': 'smartphone',
  'cloud-computing': 'cloud',
  devops: 'settings',
  'game-development': 'gamepad',
  blockchain: 'link',
  // Engineering
  mechanical: 'cog',
  electrical: 'zap',
  civil: 'building2',
  chemical: 'flask',
  aerospace: 'rocket',
  software: 'code2',
  biomedical: 'heartpulse',
  industrial: 'factory',
  'materials-science': 'gem',
  // Arts
  'visual-arts': 'palette',
  'digital-art': 'monitor',
  'art-history': 'landmark',
  music: 'music',
  'performing-arts': 'drama',
  'film-media': 'film',
  photography: 'camera',
  'graphic-design': 'pentool',
  architecture: 'building',
  'fashion-design': 'shirt',
  // Mathematics
  algebra: 'variable',
  calculus: 'trendingup',
  'linear-algebra': 'grid3x3',
  'statistics-probability': 'piechart',
  'discrete-mathematics': 'binary',
  'number-theory': 'hash',
  'geometry-topology': 'hexagon',
  'differential-equations': 'waves',
  'mathematical-logic': 'braincircuit',
  'applied-mathematics': 'calculator',
  // Categories
  science: 'flask',
  technology: 'cpu',
  engineering: 'cog',
  arts: 'palette',
  mathematics: 'sigma'
}

const iconName = computed(() => iconMap[props.id] || props.icon || 'book')
</script>

<template>
  <NuxtLink
    :to="url"
    class="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 transition-all hover:scale-105"
    :class="`hover:border-${color}-500`"
  >
    <div class="flex items-center justify-between mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center"
        :class="`bg-${color}-500/20`"
      >
        <Icon :name="iconName" :size="24" :class="`text-${color}-400`" />
      </div>
      <span
        class="text-xs px-2 py-1 rounded-full"
        :class="`bg-${color}-500/20 text-${color}-400`"
      >
        {{ resources }}
      </span>
    </div>

    <h3
      class="text-xl font-bold text-white group-hover:transition-colors"
      :class="`group-hover:text-${color}-400`"
    >
      {{ name }}
    </h3>

    <p class="text-sm text-gray-400 mt-2">
      {{ description }}
    </p>
  </NuxtLink>
</template>
