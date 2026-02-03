<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-teal-950 via-space-900 to-cyan-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-teal-300 ring-1 ring-teal-500/30">
            <Icon name="hash" class="w-6 h-6" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Number Theory
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The study of integers and their properties. From ancient puzzles to modern 
            cryptography, explore the queen of mathematics.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">1,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">Primes</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">Crypto</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Number Theory Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <Icon name="calculator" class="w-10 h-10 mb-4 text-teal-400" />
            <h3 class="mb-2 font-semibold text-white">Elementary Number Theory</h3>
            <p class="text-sm text-slate-400">Divisibility, GCD, primes, congruences, Diophantine equations.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <Icon name="zap" class="w-10 h-10 mb-4 text-teal-400" />
            <h3 class="mb-2 font-semibold text-white">Prime Numbers</h3>
            <p class="text-sm text-slate-400">Distribution, prime theorem, twin primes, Riemann hypothesis.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <Icon name="lock" class="w-10 h-10 mb-4 text-teal-400" />
            <h3 class="mb-2 font-semibold text-white">Modular Arithmetic</h3>
            <p class="text-sm text-slate-400">Congruences, Fermat's theorem, Euler's theorem, RSA cryptography.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('number-theory')

useHead({
  title: 'Number Theory - Primes, Modular Arithmetic | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn number theory with 1,000+ resources. Primes, modular arithmetic, Diophantine equations, and cryptography applications.' 
    }
  ]
})
</script>
