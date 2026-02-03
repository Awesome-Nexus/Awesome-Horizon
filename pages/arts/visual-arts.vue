<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-pink-950 via-space-900 to-rose-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-pink-300 ring-1 ring-pink-500/30">
            <Icon name="palette" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Visual Arts
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Learn to draw and paint. Master fundamentals, explore techniques, and develop 
            your unique artistic voice through traditional media.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Beginner</div>
              <div class="text-xs text-slate-400">Friendly</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Drawabox</div>
              <div class="text-xs text-slate-400">Top Resource</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Free</div>
              <div class="text-xs text-slate-400">Core Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drawing Fundamentals -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Drawing Fundamentals</h2>
          <p class="mt-2 text-slate-400">
            Build a strong foundation in drawing
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://drawabox.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-6 ring-1 ring-pink-500/30 transition-all hover:ring-pink-500/50">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/20"><Icon name="package" :size="28" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-pink-400">Drawabox</h3>
                <div class="text-sm text-pink-400">Free Drawing Course</div>
              </div>
            </div>
            <p class="text-slate-300">
              Completely free drawing course focusing on fundamentals. Starts from 
              absolute basics. Emphasizes constructive drawing and 3D form understanding.
            </p>
          </a>
          
          <a href="https://www.proko.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10"><Icon name="pencil" :size="28" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-pink-400">Proko</h3>
                <div class="text-sm text-slate-500">Figure Drawing</div>
              </div>
            </div>
            <p class="text-slate-400">
              High-quality figure drawing and anatomy courses. Stan Prokopenko's 
              teaching style is engaging and informative. Free and premium content.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Painting -->
    <section class="relative border-t border-pink-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Painting</h2>
          <p class="mt-2 text-slate-400">
            Oils, acrylics, watercolors, and gouache
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <div class="mb-4"><Icon name="palette" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Oil Painting</h3>
            <p class="text-sm text-slate-400">
              Traditional medium with rich colors. Slow drying allows for blending.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <div class="mb-4"><Icon name="droplets" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Watercolor</h3>
            <p class="text-sm text-slate-400">
              Transparent, flowing medium. Great for sketches and illustrations.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <div class="mb-4"><Icon name="paintbrush" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Acrylics</h3>
            <p class="text-sm text-slate-400">
              Versatile, fast-drying. Can mimic oils or watercolors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Drawing Today
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          You don't need talent to start - you need practice. Drawabox is the best 
          free resource for building fundamental skills.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://drawabox.com/"
            target="_blank"
            class="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-500"
          >
            Start Drawabox
          </a>
          <a 
            href="https://www.proko.com/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Explore Proko
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('visual-arts')

useHead({
  title: 'Visual Arts - Drawing, Painting, Techniques | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn visual arts with 1,500+ resources. Drawing fundamentals, painting techniques, figure drawing, anatomy, and artistic development.' 
    }
  ]
})
</script>
