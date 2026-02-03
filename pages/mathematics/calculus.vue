<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-violet-950 via-space-900 to-purple-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-violet-300 ring-1 ring-violet-500/30">
            <Icon name="trendingup" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Calculus
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The mathematics of change. Master derivatives, integrals, limits, and infinite series 
            that form the foundation of modern science and engineering.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">2,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">3Blue1Brown</div>
              <div class="text-xs text-slate-400">Top Channel</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">MIT OCW</div>
              <div class="text-xs text-slate-400">Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Calculus Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="piechart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Differential Calculus</h3>
            <p class="text-sm text-slate-400">Derivatives, rates of change, optimization, related rates.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="trendingup" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Integral Calculus</h3>
            <p class="text-sm text-slate-400">Integrals, areas, volumes, accumulation, Fundamental Theorem.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="refresh" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Multivariable</h3>
            <p class="text-sm text-slate-400">Partial derivatives, multiple integrals, vector fields.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-violet-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Best Calculus Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.3blue1brown.com/topics/calculus" target="_blank" class="group rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-6 ring-1 ring-violet-500/30 transition-all hover:ring-violet-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-violet-400">Essence of Calculus (3Blue1Brown)</h3>
            <p class="text-slate-300">
              Beautiful visual explanations of calculus concepts. The best introduction 
              to understanding what calculus really means.
            </p>
          </a>
          
          <a href="https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-violet-400">MIT 18.01 Single Variable Calculus</h3>
            <p class="text-slate-400">
              MIT's complete calculus course with lecture videos, notes, and problem sets. 
              The gold standard for calculus education.
            </p>
          </a>
          
          <a href="https://tutorial.math.lamar.edu/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-violet-400">Paul's Online Math Notes</h3>
            <p class="text-slate-400">
              Comprehensive notes and practice problems for calculus and differential equations. 
              Written by a professor at Lamar University.
            </p>
          </a>
          
          <a href="https://www.khanacademy.org/math/calculus-1" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-violet-400">Khan Academy Calculus</h3>
            <p class="text-slate-400">
              Free comprehensive calculus courses with practice exercises and videos. 
              Great for self-paced learning.
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
const subjectInfo = getSubjectBySlug('calculus')

useHead({
  title: 'Calculus - Differential, Integral, Multivariable | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn calculus with 2,000+ resources. 3Blue1Brown, MIT OCW, derivatives, integrals, multivariable calculus, and differential equations.' 
    }
  ]
})
</script>
