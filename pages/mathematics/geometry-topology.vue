<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-space-900 to-green-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300 ring-1 ring-emerald-500/30">
            <Icon name="hexagon" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Geometry & Topology
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Study shapes, spaces, and their properties. From classical geometry to 
            modern topology and manifolds.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Euclidean/Non-E</div>
              <div class="text-xs text-slate-400">Geometry</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Manifolds</div>
              <div class="text-xs text-slate-400">Topology</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Geometry & Topology Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="hexagon" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Euclidean Geometry</h3>
            <p class="text-sm text-slate-400">Classical geometry, constructions, theorems, proofs.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="globe" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Non-Euclidean</h3>
            <p class="text-sm text-slate-400">Hyperbolic, elliptic, spherical geometry.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="refresh" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Differential Geometry</h3>
            <p class="text-sm text-slate-400">Curves, surfaces, curvature, geodesics.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="network" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Topology</h3>
            <p class="text-sm text-slate-400">Point-set topology, continuity, connectedness.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="sigma" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Algebraic Topology</h3>
            <p class="text-sm text-slate-400">Homotopy, homology, fundamental groups.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="circle" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Manifolds</h3>
            <p class="text-sm text-slate-400">Differentiable manifolds, tangent spaces, tensors.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('geometry-topology')

useHead({
  title: 'Geometry & Topology - Euclidean, Differential, Manifolds | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn geometry and topology with 1,200+ resources. Euclidean geometry, differential geometry, algebraic topology, and manifolds.' 
    }
  ]
})
</script>
