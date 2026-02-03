<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-purple-950 via-space-900 to-indigo-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-purple-300 ring-1 ring-purple-500/30">
            <Icon name="grid" :size="24" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Linear Algebra
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The study of vectors and matrices. Essential for machine learning, graphics, 
            and countless applications across science and engineering.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">Gilbert Strang</div>
              <div class="text-xs text-slate-400">Legendary</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">ML/Graphics</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Linear Algebra Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="arrow-right" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Vectors</h3>
            <p class="text-sm text-slate-400">Vector operations, dot products, cross products, projections.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="square" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Matrices</h3>
            <p class="text-sm text-slate-400">Matrix operations, inverses, determinants, systems of equations.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="hexagon" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Vector Spaces</h3>
            <p class="text-sm text-slate-400">Subspaces, basis, dimension, linear independence.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="zap" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Eigenvalues</h3>
            <p class="text-sm text-slate-400">Eigenvectors, diagonalization, applications in ML and physics.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-purple-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" class="group rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 ring-1 ring-purple-500/30 transition-all hover:ring-purple-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-purple-400">Essence of Linear Algebra</h3>
            <p class="text-slate-300">
              3Blue1Brown's visual series. The best intuitive introduction to linear algebra concepts.
            </p>
          </a>
          
          <a href="https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-purple-400">MIT 18.06 Linear Algebra</h3>
            <p class="text-slate-400">
              Gilbert Strang's legendary course. The definitive linear algebra course used worldwide.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('linear-algebra')

useHead({
  title: 'Linear Algebra - Vectors, Matrices, Eigenvalues | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn linear algebra with 1,500+ resources. 3Blue1Brown, Gilbert Strang MIT course, vectors, matrices, eigenvalues, and applications.' 
    }
  ]
})
</script>
