<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-purple-950 via-space-900 to-violet-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-purple-300 ring-1 ring-purple-500/30">
            <Icon name="music" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Music
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Learn music theory, history, composition, and production. From your first notes 
            to advanced performance and creation.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">MusicTheory.net</div>
              <div class="text-xs text-slate-400">Top Resource</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">Free</div>
              <div class="text-xs text-slate-400">Core Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Music Theory & Fundamentals</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.musictheory.net/" target="_blank" class="group rounded-xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6 ring-1 ring-purple-500/30 transition-all hover:ring-purple-500/50">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20"><Icon name="music-2" :size="28" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-purple-400">MusicTheory.net</h3>
                <div class="text-sm text-purple-400">#1 Theory Resource</div>
              </div>
            </div>
            <p class="text-slate-300">
              Comprehensive free music theory lessons. Interactive exercises, 
              calculators, and clear explanations. Essential for all musicians.
            </p>
          </a>
          
          <a href="https://www.coursera.org/learn/music-theory" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-purple-400">Berklee Music Theory</h3>
            <p class="text-slate-400">
              Coursera course from Berklee College of Music. Professional-level 
              instruction for beginners.
            </p>
          </a>
        </div>
      </div>
    </section>

    <section class="relative border-t border-purple-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Music Production</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="piano" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Ableton Live</h3>
            <p class="text-sm text-slate-400">Popular DAW for electronic music and live performance.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="sliders" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">FL Studio</h3>
            <p class="text-sm text-slate-400">Beginner-friendly DAW with lifetime free updates.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="sliders-horizontal" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Logic Pro</h3>
            <p class="text-sm text-slate-400">Apple's professional DAW. Great value for Mac users.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('music')

useHead({
  title: 'Music - Theory, History, Production, Instruments | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn music with 1,500+ resources. Music theory, ear training, history, composition, production, and instrument tutorials.' 
    }
  ]
})
</script>
