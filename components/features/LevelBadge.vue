<script setup lang="ts">
import { Sprout, Target, Rocket, Microscope } from 'lucide-vue-next'

interface Props {
  level: 'beginner' | 'intermediate' | 'advanced' | 'research'
  count?: string | number
}

const props = defineProps<Props>()

const levelConfig = {
  beginner: {
    color: 'emerald',
    label: 'Beginner',
    icon: Sprout
  },
  intermediate: {
    color: 'purple',
    label: 'Intermediate',
    icon: Target
  },
  advanced: {
    color: 'rose',
    label: 'Advanced',
    icon: Rocket
  },
  research: {
    color: 'blue',
    label: 'Research',
    icon: Microscope
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
      <component :is="config.icon" class="w-4 h-4" />
      <span>{{ config.label }}</span>
    </div>
  </div>
</template>
