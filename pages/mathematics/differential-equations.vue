<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-green-950 via-space-900 to-emerald-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-300 ring-1 ring-green-500/30">
            <Icon name="waves" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Differential Equations
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Equations involving derivatives. Essential for physics, engineering, and modeling 
            real-world phenomena.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">1,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">ODE/PDE</div>
              <div class="text-xs text-slate-400">Equations</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">Physics/Eng</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Differential Equations Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="piechart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Ordinary (ODEs)</h3>
            <p class="text-sm text-slate-400">First order, second order, systems, Laplace transforms.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="waves" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Partial (PDEs)</h3>
            <p class="text-sm text-slate-400">Heat, wave, Laplace equations, separation of variables.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="monitor" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Numerical Methods</h3>
            <p class="text-sm text-slate-400">Euler, Runge-Kutta, finite difference methods.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="refresh" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Dynamical Systems</h3>
            <p class="text-sm text-slate-400">Phase portraits, stability, bifurcations, limit cycles.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="loader" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Chaos Theory</h3>
            <p class="text-sm text-slate-400">Nonlinear dynamics, sensitive dependence, strange attractors.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="atom" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mathematical Physics</h3>
            <p class="text-sm text-slate-400">Applications in mechanics, electromagnetism, quantum.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('differential-equations')

useHead({
  title: 'Differential Equations - ODEs, PDEs, Dynamical Systems | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn differential equations with 1,000+ resources. ODEs, PDEs, numerical methods, dynamical systems, chaos theory, and applications.' 
    }
  ]
})
</script>
