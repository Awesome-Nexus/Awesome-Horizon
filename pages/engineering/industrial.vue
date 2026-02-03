<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-space-900 to-gray-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-slate-300 ring-1 ring-slate-500/30">
            <Icon name="factory" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Industrial Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Optimize systems, processes, and efficiency. The engineering of better business 
            operations and supply chains.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">1,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">IISE</div>
              <div class="text-xs text-slate-400">Society</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">Lean/Six Sigma</div>
              <div class="text-xs text-slate-400">Methods</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Areas</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="bar-chart-3" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Operations Research</h3>
            <p class="text-sm text-slate-400">Optimization, linear programming, simulation, decision analysis.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="truck" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Supply Chain</h3>
            <p class="text-sm text-slate-400">Logistics, inventory, distribution, demand forecasting.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="check-circle" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Quality Engineering</h3>
            <p class="text-sm text-slate-400">SPC, Six Sigma, quality management, reliability.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="user" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Ergonomics</h3>
            <p class="text-sm text-slate-400">Human factors, workplace design, safety engineering.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="refresh-cw" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Systems Engineering</h3>
            <p class="text-sm text-slate-400">Complex systems design, integration, lifecycle management.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4"><Icon name="zap" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Lean Manufacturing</h3>
            <p class="text-sm text-slate-400">Waste reduction, continuous improvement, JIT production.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('industrial')

useHead({
  title: 'Industrial Engineering - Operations Research, Supply Chain | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn industrial engineering with 1,000+ resources. Operations research, supply chain management, quality engineering, and lean manufacturing.' 
    }
  ]
})
</script>
