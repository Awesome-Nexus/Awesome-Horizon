<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-space-900 to-purple-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-300 ring-1 ring-indigo-500/30">
            <Icon name="shirt" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fashion Design
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Create clothing and accessories. From concept to runway, learn design, 
            construction, and the business of fashion.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">Illustration</div>
              <div class="text-xs text-slate-400">Skills</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-indigo-500/20">
              <div class="text-2xl font-bold text-indigo-400">Sewing</div>
              <div class="text-xs text-slate-400">Techniques</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Fashion Design Skills</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="pencil" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Illustration</h3>
            <p class="text-sm text-slate-400">Sketching, croquis, rendering fabrics, and technical flats.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="ruler" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Pattern Making</h3>
            <p class="text-sm text-slate-400">Drafting, draping, grading, and pattern manipulation.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="scissors" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Textiles</h3>
            <p class="text-sm text-slate-400">Fabrics, fibers, weaving, printing, and surface design.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-indigo-500/20">
            <div class="mb-4"><Icon name="needle" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Sewing</h3>
            <p class="text-sm text-slate-400">Construction techniques, finishes, and garment assembly.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('fashion-design')

useHead({
  title: 'Fashion Design - Illustration, Pattern Making, Sewing | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn fashion design with 800+ resources. Fashion illustration, pattern making, textiles, sewing, and the fashion industry.' 
    }
  ]
})
</script>
