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

const emojiMap: Record<string, string> = {
  physics: '⚛️',
  chemistry: '🧪',
  biology: '🧬',
  'earth-science': '🌍',
  astronomy: '🔭',
  psychology: '🧠',
  environmental: '🌱',
  mathematics: '📐',
  'computer-science': '💻',
  engineering: '⚙️',
  arts: '🎨',
  technology: '💻'
}

const emoji = computed(() => emojiMap[props.id] || '📚')
</script>

<template>
  <NuxtLink
    :to="url"
    class="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 transition-all hover:scale-105"
    :class="`hover:border-${color}-500`"
  >
    <div class="flex items-center justify-between mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        :class="`bg-${color}-500/20`"
      >
        {{ emoji }}
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
