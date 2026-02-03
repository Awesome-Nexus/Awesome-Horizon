<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-orange-950 via-space-900 to-amber-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-300 ring-1 ring-orange-500/30">
            <Icon name="camera" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Photography
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Capture moments and tell stories through images. Master camera techniques, 
            composition, lighting, and post-processing.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">Beginner</div>
              <div class="text-xs text-slate-400">Friendly</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">Lightroom</div>
              <div class="text-xs text-slate-400">Editing</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">DSLR/Mirrorless</div>
              <div class="text-xs text-slate-400">Cameras</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Photography Fundamentals</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="grid-3x3" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Composition</h3>
            <p class="text-sm text-slate-400">Rule of thirds, leading lines, framing, and visual balance.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="lightbulb" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Lighting</h3>
            <p class="text-sm text-slate-400">Natural light, artificial light, flash, and modifiers.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="settings" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Camera Settings</h3>
            <p class="text-sm text-slate-400">Exposure triangle: aperture, shutter speed, ISO.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="palette" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Post-Processing</h3>
            <p class="text-sm text-slate-400">Lightroom, Photoshop, color grading, and retouching.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-orange-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://photographylife.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 ring-1 ring-orange-500/30 transition-all hover:ring-orange-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">Photography Life</h3>
            <p class="text-slate-300">
              In-depth tutorials, gear reviews, and photography techniques for all levels.
            </p>
          </a>
          
          <a href="https://www.lightroomkillertips.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">Lightroom Killer Tips</h3>
            <p class="text-slate-400">
              Post-processing tutorials specifically for Adobe Lightroom users.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('photography')

useHead({
  title: 'Photography - Composition, Lighting, Editing | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn photography with 1,200+ resources. Camera techniques, composition, lighting, post-processing with Lightroom and Photoshop.' 
    }
  ]
})
</script>
