<template>
  <div class="grid gap-6" :class="gridClass">
    <SubjectHubCard
      v-for="subject in subjects"
      :key="subject.slug"
      :name="subject.name"
      :short-name="subject.shortName"
      :description="subject.description"
      :resource-count="subject.resources"
      :url="`/${categorySlug}/${subject.slug}`"
      :icon="subject.icon"
      :color="subject.color"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Subject } from '~/data/subjects'

const props = defineProps<{
  subjects: Subject[]
  categorySlug: string
  columns?: 1 | 2 | 3 | 4
}>()

const gridClass = computed(() => {
  const cols = props.columns || 3
  return {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }[cols]
})
</script>
