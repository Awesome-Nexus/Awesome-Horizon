<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-space-900 to-neutral-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-zinc-500/10 px-4 py-2 text-zinc-300 ring-1 ring-zinc-500/30">
            <Icon name="gem" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Materials Science
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Study the properties and applications of materials. From metals to nanomaterials, 
            discover the science behind modern materials.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-zinc-500/20">
              <div class="text-2xl font-bold text-zinc-400">1,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-zinc-500/20">
              <div class="text-2xl font-bold text-zinc-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-zinc-500/20">
              <div class="text-2xl font-bold text-zinc-400">MRS</div>
              <div class="text-xs text-slate-400">Society</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-zinc-500/20">
              <div class="text-2xl font-bold text-zinc-400">Nano</div>
              <div class="text-xs text-slate-400">Specialty</div>
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
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="cog" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Metallurgy</h3>
            <p class="text-sm text-slate-400">Metals and alloys, phase diagrams, heat treatment.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="flask-conical" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Ceramics</h3>
            <p class="text-sm text-slate-400">Traditional and advanced ceramics, glass, refractories.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="beaker" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Polymers</h3>
            <p class="text-sm text-slate-400">Plastics, elastomers, composites, polymer processing.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="atom" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Nanomaterials</h3>
            <p class="text-sm text-slate-400">Carbon nanotubes, graphene, quantum dots, nanotech.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="search" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Characterization</h3>
            <p class="text-sm text-slate-400">Microscopy, spectroscopy, XRD, mechanical testing.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-zinc-500/20">
            <div class="mb-4"><Icon name="bar-chart-3" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Computational Materials</h3>
            <p class="text-sm text-slate-400">DFT, molecular dynamics, materials informatics.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('materials')

useHead({
  title: 'Materials Science - Metallurgy, Ceramics, Nanomaterials | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn materials science with 1,000+ resources. Metallurgy, ceramics, polymers, nanomaterials, characterization, and computational materials.' 
    }
  ]
})
</script>
