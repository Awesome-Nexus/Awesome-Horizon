<script setup lang="ts">
interface Props {
  lines?: number
  avatar?: boolean
  image?: boolean
}

withDefaults(defineProps<Props>(), {
  lines: 3,
  avatar: false,
  image: false
})
</script>

<template>
  <div class="animate-pulse space-y-4">
    <div v-if="avatar || image" class="flex items-center gap-4">
      <div 
        v-if="avatar"
        class="w-12 h-12 bg-space-700 rounded-full"
      />
      <div v-if="image" class="w-full max-w-xs">
        <div class="h-32 bg-space-700 rounded-lg" />
      </div>
    </div>
    
    <div class="space-y-3">
      <div class="h-4 bg-space-700 rounded w-3/4" />
      <div v-if="lines > 1" class="h-4 bg-space-700 rounded w-full" />
      <div v-if="lines > 2" class="h-4 bg-space-700 rounded w-5/6" />
    </div>
  </div>
</template>
