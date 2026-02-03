<template>
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex flex-wrap items-center gap-2 text-sm">
      <li>
        <NuxtLink 
          to="/" 
          class="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <Home class="h-4 w-4" />
          <span class="hidden sm:inline">Home</span>
        </NuxtLink>
      </li>
      
      <li class="text-slate-600">
        <ChevronRight class="h-4 w-4" />
      </li>
      
      <li v-if="category">
        <NuxtLink 
          :to="`/${category.slug}`"
          class="text-slate-400 hover:text-white transition-colors"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
      
      <li v-if="category && subject" class="text-slate-600">
        <ChevronRight class="h-4 w-4" />
      </li>
      
      <li v-if="subject" class="text-white font-medium">
        {{ subject.name }}
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { Home, ChevronRight } from 'lucide-vue-next'
import type { Category, Subject } from '~/data/subjects'

defineProps<{
  category?: Category
  subject?: Subject
}>()
</script>
