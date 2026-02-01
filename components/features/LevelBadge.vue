<script setup lang="ts">
interface Props {
  level: 'beginner' | 'intermediate' | 'advanced' | 'research'
  count?: string | number
}

const props = defineProps<Props>()

const levelConfig = {
  beginner: {
    color: 'emerald',
    label: 'Beginner',
    icon: '🌱'
  },
  intermediate: {
    color: 'purple',
    label: 'Intermediate',
    icon: '🎯'
  },
  advanced: {
    color: 'rose',
    label: 'Advanced',
    icon: '🚀'
  },
  research: {
    color: 'blue',
    label: 'Research',
    icon: '🔬'
  }
}

const config = computed(() => levelConfig[props.level])
</script>

<template>
  <div class="text-center">
    <div
      class="text-3xl font-bold"
      :class="`text-${config.color}-400`"
    >
      {{ count }}
    </div>
    <div class="text-sm text-gray-400 flex items-center justify-center gap-1">
      <span>{{ config.icon }}</span>
      <span>{{ config.label }}</span>
    </div>
  </div>
</template>
