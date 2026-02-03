<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-space-900 to-green-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300 ring-1 ring-emerald-500/30">
            <Icon name="flask" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Chemical Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Transform raw materials into valuable products. Design chemical processes 
            for energy, pharmaceuticals, food, and materials industries.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Process Design</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">AIChE</div>
              <div class="text-xs text-slate-400">Society</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Areas -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Areas</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="flask" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Process Design</h3>
            <p class="text-sm text-slate-400">
              Equipment sizing, flow diagrams, P&IDs, safety considerations.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="waves" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Transport Phenomena</h3>
            <p class="text-sm text-slate-400">
              Fluid flow, heat transfer, mass transfer. Foundation of chemical engineering.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="zap" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Reaction Engineering</h3>
            <p class="text-sm text-slate-400">
              Kinetics, reactor design, catalysis, reaction mechanisms.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="sliders-horizontal" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Process Control</h3>
            <p class="text-sm text-slate-400">
              Instrumentation, control systems, automation, optimization.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="dna" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Bioprocess Engineering</h3>
            <p class="text-sm text-slate-400">
              Fermentation, enzyme technology, pharmaceutical production.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="leaf" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Sustainability</h3>
            <p class="text-sm text-slate-400">
              Green engineering, environmental impact, lifecycle analysis.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="relative border-t border-emerald-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://learncheme.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 ring-1 ring-emerald-500/30 transition-all hover:ring-emerald-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-emerald-400">LearnChemE</h3>
            <p class="text-slate-300">
              University of Colorado's video lessons on chemical engineering topics. 
              Thermodynamics, fluids, heat transfer, and separations.
            </p>
          </a>
          
          <a href="https://www.aiche.org/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-emerald-400">AIChE</h3>
            <p class="text-slate-400">
              American Institute of Chemical Engineers. Resources, publications, and 
              professional development.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('chemical')

useHead({
  title: 'Chemical Engineering - Process Design, Transport | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn chemical engineering with 1,500+ resources. Process design, transport phenomena, reaction engineering, thermodynamics, and separations.' 
    }
  ]
})
</script>
