<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-fuchsia-950 via-space-900 to-purple-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-2 text-fuchsia-300 ring-1 ring-fuchsia-500/30">
            <Icon name="monitor" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digital Art
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Create art using digital tools. From digital painting and illustration 
            to 3D modeling and concept art.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-fuchsia-500/20">
              <div class="text-2xl font-bold text-fuchsia-400">2,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-fuchsia-500/20">
              <div class="text-2xl font-bold text-fuchsia-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-fuchsia-500/20">
              <div class="text-2xl font-bold text-fuchsia-400">Photoshop</div>
              <div class="text-xs text-slate-400">Industry Std</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-fuchsia-500/20">
              <div class="text-2xl font-bold text-fuchsia-400">2D/3D</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Digital Art Software</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-fuchsia-500/20">
            <div class="mb-4"><Icon name="palette" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Photoshop</h3>
            <p class="text-sm text-slate-400">Industry standard for digital painting and photo manipulation.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-fuchsia-500/20">
            <div class="mb-4"><Icon name="apple" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Procreate</h3>
            <p class="text-sm text-slate-400">Powerful iPad app for digital illustration. One-time purchase.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-fuchsia-500/20">
            <div class="mb-4"><Icon name="paintbrush" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Clip Studio Paint</h3>
            <p class="text-sm text-slate-400">Popular for manga, comics, and illustration. Affordable.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-fuchsia-500/20">
            <div class="mb-4"><Icon name="box" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Blender</h3>
            <p class="text-sm text-slate-400">Free 3D modeling, sculpting, and animation software.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-fuchsia-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.ctrlpaint.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-6 ring-1 ring-fuchsia-500/30 transition-all hover:ring-fuchsia-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-fuchsia-400">Ctrl+Paint</h3>
            <p class="text-slate-300">
              Free digital painting library. Fundamentals to advanced techniques. 
              Perfect for beginners transitioning from traditional to digital.
            </p>
          </a>
          
          <a href="https://www.artstation.com/learning" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-fuchsia-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-fuchsia-400">ArtStation Learning</h3>
            <p class="text-slate-400">
              Free tutorials from industry professionals. Concept art, 3D, and illustration.
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
const subjectInfo = getSubjectBySlug('digital-art')

useHead({
  title: 'Digital Art - Illustration, Concept Art, 3D | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn digital art with 2,000+ resources. Digital painting, illustration, concept art, 3D modeling, Photoshop, Procreate, and Blender.' 
    }
  ]
})
</script>
