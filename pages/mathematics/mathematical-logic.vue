<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-space-900 to-gray-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-slate-300 ring-1 ring-slate-500/30">
            <Icon name="brain" class="w-6 h-6" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mathematical Logic
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The foundations of mathematical reasoning. Formal logic, proof theory, 
            and the limits of computation.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">Foundations</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-slate-500/20">
              <div class="text-2xl font-bold text-slate-400">CS/Philosophy</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Logic Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <Icon name="check" class="w-10 h-10 mb-4 text-slate-400" />
            <h3 class="mb-2 font-semibold text-white">Propositional Logic</h3>
            <p class="text-sm text-slate-400">Truth tables, connectives, tautologies, normal forms.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <div class="mb-4 text-3xl">∀∃</div>
            <h3 class="mb-2 font-semibold text-white">Predicate Logic</h3>
            <p class="text-sm text-slate-400">Quantifiers, predicates, relations, first-order logic.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <Icon name="book" class="w-10 h-10 mb-4 text-slate-400" />
            <h3 class="mb-2 font-semibold text-white">Proof Theory</h3>
            <p class="text-sm text-slate-400">Natural deduction, sequent calculus, proof systems.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <Icon name="building2" class="w-10 h-10 mb-4 text-slate-400" />
            <h3 class="mb-2 font-semibold text-white">Model Theory</h3>
            <p class="text-sm text-slate-400">Structures, satisfaction, completeness, compactness.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <Icon name="package" class="w-10 h-10 mb-4 text-slate-400" />
            <h3 class="mb-2 font-semibold text-white">Set Theory</h3>
            <p class="text-sm text-slate-400">ZFC axioms, ordinals, cardinals, foundations of math.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-500/20">
            <Icon name="cpu" class="w-10 h-10 mb-4 text-slate-400" />
            <h3 class="mb-2 font-semibold text-white">Computability</h3>
            <p class="text-sm text-slate-400">Turing machines, decidability, complexity, incompleteness.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('mathematical-logic')

useHead({
  title: 'Mathematical Logic - Proof Theory, Computability | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn mathematical logic with 800+ resources. Propositional logic, predicate logic, proof theory, set theory, and computability theory.' 
    }
  ]
})
</script>
