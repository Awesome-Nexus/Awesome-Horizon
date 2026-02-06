<script setup lang="ts">
import { categories, getCategoryBySlug, type Category } from '~/data/subjects'

const route = useRoute()
const categorySlug = route.params.category as string

const category = getCategoryBySlug(categorySlug)

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found'
  })
}

useSEO({
  title: `${category.name} - ${category.name} Learning Resources | Awesome Horizon`,
  description: `Explore ${category.name} subjects with thousands of curated resources. ${category.subjects.length} subjects covering topics like ${category.subjects.slice(0, 3).map(s => s.name).join(', ')}.`,
  type: 'website'
})

const colorClasses: Record<string, { bg: string; text: string; ring: string; gradient: string }> = {
  science: { bg: 'bg-violet-500/10', text: 'text-violet-400', ring: 'ring-violet-500/20', gradient: 'from-violet-950 via-purple-950 to-violet-950' },
  technology: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', ring: 'ring-cyan-500/20', gradient: 'from-cyan-950 via-blue-950 to-cyan-950' },
  engineering: { bg: 'bg-orange-500/10', text: 'text-orange-400', ring: 'ring-orange-500/20', gradient: 'from-orange-950 via-amber-950 to-orange-950' },
  arts: { bg: 'bg-pink-500/10', text: 'text-pink-400', ring: 'ring-pink-500/20', gradient: 'from-pink-950 via-rose-950 to-pink-950' },
  mathematics: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', ring: 'ring-indigo-500/20', gradient: 'from-indigo-950 via-violet-950 to-indigo-950' }
}

const colors = colorClasses[categorySlug] || colorClasses.science

const stats = computed(() => [
  { value: category.subjects.length, label: 'Subjects' },
  { value: category.subjects.reduce((acc, s) => acc + s.resources, 0).toLocaleString(), label: 'Resources' },
  { value: 'All Levels', label: 'Difficulty' },
  { value: 'Free', label: 'Access' }
])
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section 
      class="relative overflow-hidden bg-gradient-to-br pb-20 pt-32"
      :class="colors.gradient"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div 
          class="absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl opacity-20"
          :class="colors.bg.replace('/10', '/30')"
        />
        <div 
          class="absolute -left-40 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-20"
          :class="colors.bg.replace('/10', '/20')"
        />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8" aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Home</NuxtLink>
            </li>
            <li class="text-gray-600">/</li>
            <li class="text-white font-medium" aria-current="page">{{ category.name }}</li>
          </ol>
        </nav>
          
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-opacity-30" :class="[colors.bg, colors.text, colors.ring]">
            <Icon :name="category.icon" :size="24" />
            <span class="text-sm font-medium">STEAM Category</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ category.name }}
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            {{ category.name === 'Science' ? 'Explore the natural world through physics, chemistry, biology, and beyond.' :
               category.name === 'Technology' ? 'Master programming, AI, data science, and modern computing.' :
               category.name === 'Engineering' ? 'Learn mechanical, electrical, civil, and aerospace engineering.' :
               category.name === 'Arts' ? 'Express creativity through visual arts, music, design, and performance.' :
               'Discover mathematics from algebra to calculus and beyond.' }}
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div 
              v-for="stat in stats" 
              :key="stat.label"
              class="rounded-2xl bg-space-800/50 p-4 ring-1"
              :class="colors.ring"
            >
              <div class="text-2xl font-bold" :class="colors.text">{{ stat.value }}</div>
              <div class="text-xs text-slate-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Grid -->
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white">Explore {{ category.name }} Subjects</h2>
          <p class="mt-4 text-slate-400">
            Find your perfect learning path
          </p>
        </div>
        
        <SubjectGrid 
          :subjects="category.subjects" 
          :category-slug="categorySlug"
          :columns="3"
        />
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t py-20" :class="colors.ring.split(' ')[0].replace('/20', '/10')">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Learning {{ category.name }} Today
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Thousands of free resources await you. Begin your journey now.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            :to="`/${categorySlug}/${category.subjects[0]?.slug}`"
            class="rounded-lg px-6 py-3 font-medium text-white transition-colors"
            :class="colors.bg.replace('/10', '/60')"
          >
            Start with {{ category.subjects[0]?.name }}
          </NuxtLink>
          <NuxtLink 
            :to="`/${categorySlug}`"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Browse All
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
