<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-500/30">
            <Icon name="binary" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discrete Mathematics
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The mathematics of discrete structures. Essential for computer science, 
            logic, and algorithm design.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">CS Focus</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Algorithms</div>
              <div class="text-xs text-slate-400">Relevance</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Discrete Math Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="braincircuit" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Logic</h3>
            <p class="text-sm text-slate-400">Propositional logic, predicates, proofs, boolean algebra.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="container" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Set Theory</h3>
            <p class="text-sm text-slate-400">Sets, relations, functions, cardinality, operations.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="binary" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Combinatorics</h3>
            <p class="text-sm text-slate-400">Counting, permutations, combinations, pigeonhole principle.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="network" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Graph Theory</h3>
            <p class="text-sm text-slate-400">Trees, graphs, networks, paths, connectivity, coloring.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="lock" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Number Theory</h3>
            <p class="text-sm text-slate-400">Modular arithmetic, primes, divisibility, cryptography basics.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="settings" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Algorithms</h3>
            <p class="text-sm text-slate-400">Complexity, recursion, sorting, searching techniques.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('discrete-mathematics')

useHead({
  title: 'Discrete Mathematics - Logic, Graph Theory, Combinatorics | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn discrete mathematics with 1,200+ resources. Logic, set theory, combinatorics, graph theory, number theory, and algorithms.' 
    }
  ]
})
</script>
