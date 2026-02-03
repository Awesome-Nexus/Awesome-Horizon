<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-sky-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sky-300 ring-1 ring-sky-500/30">
            <Icon name="sigma" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Applied Mathematics
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Mathematics in action. Modeling, optimization, and solving real-world 
            problems across science, engineering, and industry.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">SIAM</div>
              <div class="text-xs text-slate-400">Society</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">Real World</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Applied Math Areas</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="barchart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mathematical Modeling</h3>
            <p class="text-sm text-slate-400">Formulating problems, validation, simulation, prediction.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="target" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Optimization</h3>
            <p class="text-sm text-slate-400">Linear, nonlinear, convex, integer programming.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="calculator" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Operations Research</h3>
            <p class="text-sm text-slate-400">Network flows, scheduling, supply chain, game theory.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="dollarSign" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Financial Mathematics</h3>
            <p class="text-sm text-slate-400">Options pricing, risk management, stochastic calculus.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="dna" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mathematical Biology</h3>
            <p class="text-sm text-slate-400">Population dynamics, epidemiology, systems biology.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="settings" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Engineering Math</h3>
            <p class="text-sm text-slate-400">Signal processing, control theory, numerical methods.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('applied-mathematics')

useHead({
  title: 'Applied Mathematics - Modeling, Optimization | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn applied mathematics with 1,500+ resources. Mathematical modeling, optimization, operations research, financial math, and engineering applications.' 
    }
  ]
})
</script>
