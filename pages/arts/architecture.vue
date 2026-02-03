<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-space-900 to-teal-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-500/30">
            <Icon name="building" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Architecture
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Design buildings and spaces that shape human experience. Balance aesthetics, 
            function, and structural integrity.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">AutoCAD/Revit</div>
              <div class="text-xs text-slate-400">Tools</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Sustainable</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Architecture Disciplines</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="ruler" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Architectural Design</h3>
            <p class="text-sm text-slate-400">Concept development, form, space, and design process.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="scroll" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">History & Theory</h3>
            <p class="text-sm text-slate-400">Architectural movements, critical theory, and precedent studies.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="leaf" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Sustainable Design</h3>
            <p class="text-sm text-slate-400">Green building, LEED, passive design, and environmental impact.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="building2" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Urban Design</h3>
            <p class="text-sm text-slate-400">City planning, public spaces, urbanism, and regional design.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="home" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Interior Architecture</h3>
            <p class="text-sm text-slate-400">Interior spaces, human factors, materials, and lighting.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="trees" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Landscape</h3>
            <p class="text-sm text-slate-400">Site design, planting, grading, and outdoor environments.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('architecture')

useHead({
  title: 'Architecture - Design, History, Sustainability | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn architecture with 1,500+ resources. Architectural design, history, sustainable design, urban planning, and interior architecture.' 
    }
  ]
})
</script>
