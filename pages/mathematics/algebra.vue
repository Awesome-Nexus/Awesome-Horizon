<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-300 ring-1 ring-indigo-500/30">
            <Icon name="variable" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Algebra
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The foundation of mathematics. From solving equations to abstract algebra, 
            master the language of mathematical relationships.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">Beginner</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">Khan Academy</div>
              <div class="text-xs text-slate-400">Top Resource</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">Free</div>
              <div class="text-xs text-slate-400">Core Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Algebra Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="barchart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Elementary Algebra</h3>
            <p class="text-sm text-slate-400">Variables, equations, inequalities, functions, and graphing.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="trendingup" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Linear Algebra</h3>
            <p class="text-sm text-slate-400">Vectors, matrices, systems of equations, vector spaces.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="refresh" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Abstract Algebra</h3>
            <p class="text-sm text-slate-400">Groups, rings, fields, and algebraic structures.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-indigo-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.khanacademy.org/math/algebra" target="_blank" class="group rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-6 ring-1 ring-indigo-500/30 transition-all hover:ring-indigo-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-indigo-400">Khan Academy Algebra</h3>
            <p class="text-slate-300">
              Comprehensive free algebra courses from pre-algebra to college algebra. 
              Video lessons, practice exercises, and progress tracking.
            </p>
          </a>
          
          <a href="https://www.purplemath.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-indigo-400">Purplemath</h3>
            <p class="text-slate-400">
              Practical algebra lessons with clear explanations. Great for 
              high school and early college students.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('algebra')

useHead({
  title: 'Algebra - Elementary to Abstract | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn algebra with 1,500+ resources. Elementary algebra, linear algebra, abstract algebra, equations, and functions.' 
    }
  ]
})
</script>
