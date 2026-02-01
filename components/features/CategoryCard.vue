<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  title: string
  description: string
  to: string
  icon: Component
  colorClass: string
  textColorClass: string
  borderColorClass: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative flex flex-col items-center p-6 bg-space-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-space-800 overflow-hidden h-full hover:bg-space-800"
    :class="borderColorClass"
  >
    <!-- Title Above Icon -->
    <div class="w-full text-center mb-6">
      <h3
        class="text-xl font-bold text-white group-hover:text-current transition-colors"
        :class="textColorClass"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Icon Area -->
    <div class="flex items-center justify-center relative flex-1">
      <!-- Blob Background -->
      <div
        :class="[
          'absolute w-32 h-32 rounded-full blur-2xl opacity-20 transition-transform group-hover:scale-110',
          colorClass
        ]"
      />

      <!-- Icon -->
      <component
        :is="icon"
        :class="[
          'relative h-20 w-20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 drop-shadow-lg',
          textColorClass
        ]"
        stroke-width="1.5"
      />
    </div>
  </NuxtLink>
</template>
