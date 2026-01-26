<script setup lang="ts">
import { type Component } from 'vue'

defineProps<{
  title: string
  description: string
  to: string
  icon: Component
  colorClass: string
  textColorClass: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="group relative flex flex-col items-start p-6 bg-space-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-space-800 overflow-hidden h-full hover:border-primary-500/50 hover:bg-space-800">
    <!-- Content Top -->
    <div class="z-10 w-full">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ title }}</h3>
      <!-- Optional: Keep description if needed, or hide it to match the clean look -->
      <!-- <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ description }}</p> -->
    </div>

    <!-- Illustration Area (Placeholder for generated images) -->
    <div class="mt-auto w-full flex items-center justify-center pt-6 relative">
       <!-- Blob Background -->
       <div :class="['absolute w-32 h-32 rounded-full blur-2xl opacity-20 transition-transform group-hover:scale-110', colorClass]"></div>
       
       <!-- Icon/Image -->
       <component :is="icon" :class="['relative h-24 w-24 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 drop-shadow-lg', textColorClass]" stroke-width="1.5" />
    </div>
  </NuxtLink>
</template>
