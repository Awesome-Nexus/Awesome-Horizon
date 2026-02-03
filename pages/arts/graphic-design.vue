<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-amber-950 via-space-900 to-yellow-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-300 ring-1 ring-amber-500/30">
            <Icon name="pentool" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Graphic Design
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Visual communication through typography, imagery, and layout. Create brands, 
            publications, and digital experiences.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">Illustrator</div>
              <div class="text-xs text-slate-400">Industry Std</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">Figma</div>
              <div class="text-xs text-slate-400">UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Design Fundamentals</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4"><Icon name="type" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Typography</h3>
            <p class="text-sm text-slate-400">Fonts, hierarchy, readability, pairing, and type systems.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4"><Icon name="palette" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Color Theory</h3>
            <p class="text-sm text-slate-400">Color wheels, harmonies, psychology, and accessibility.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4"><Icon name="layout" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Layout</h3>
            <p class="text-sm text-slate-400">Grids, balance, white space, and composition principles.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4"><Icon name="target" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Branding</h3>
            <p class="text-sm text-slate-400">Identity design, logos, brand systems, and guidelines.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('graphic-design')

useHead({
  title: 'Graphic Design - Typography, Branding, Layout | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn graphic design with 1,500+ resources. Typography, color theory, layout, branding, UI/UX, and design principles.' 
    }
  ]
})
</script>
