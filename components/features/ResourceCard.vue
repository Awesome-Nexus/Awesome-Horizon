<script setup lang="ts">
interface Props {
  title: string
  url: string
  provider?: string
  description?: string
  type?: string
  level?: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  external: true
})

const typeColors: Record<string, string> = {
  'Free Course': 'emerald',
  'Video': 'red',
  'Simulation': 'cyan',
  'Textbook': 'blue',
  'Tutorial': 'purple',
  'AP Course': 'amber',
  'IB Course': 'amber',
  'Practice': 'orange',
  'Reference': 'gray'
}

const color = computed(() => typeColors[props.type || ''] || 'gray')
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary-500/50 transition-all hover:scale-[1.02]"
  >
    <div class="flex items-start justify-between mb-2">
      <Badge
        v-if="type"
        :variant="color as any"
        size="sm"
      >
        {{ type }}
      </Badge>
      <span
        v-if="level"
        class="text-xs text-gray-500"
      >
        {{ level }}
      </span>
    </div>

    <h4 class="font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
      {{ title }}
    </h4>

    <p
      v-if="provider"
      class="text-sm text-gray-400"
    >
      {{ provider }}
    </p>

    <p
      v-if="description"
      class="text-xs text-gray-500 mt-1"
    >
      {{ description }}
    </p>
  </a>
</template>
