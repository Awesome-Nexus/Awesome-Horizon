<script setup lang="ts">
interface Props {
  count?: number
  columns?: 1 | 2 | 3 | 4
}

withDefaults(defineProps<Props>(), {
  count: 4,
  columns: 2
})

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
}
</script>

<template>
  <div :class="['grid gap-4', gridCols[columns]]">
    <div 
      v-for="i in count" 
      :key="i"
      class="bg-space-800/50 rounded-xl p-4 border border-space-700"
    >
      <div class="animate-pulse space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-space-700 rounded-lg" />
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-space-700 rounded w-3/4" />
            <div class="h-3 bg-space-700 rounded w-1/2" />
          </div>
        </div>
        <div class="space-y-2">
          <div class="h-3 bg-space-700 rounded" />
          <div class="h-3 bg-space-700 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
</template>
