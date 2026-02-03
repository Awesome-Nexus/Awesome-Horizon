<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-rose-950 via-space-900 to-pink-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-2 text-rose-300 ring-1 ring-rose-500/30">
            <Icon name="heartpulse" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Biomedical Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Apply engineering principles to medicine and biology. Design medical devices, 
            imaging systems, and advance healthcare technology.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">BMES</div>
              <div class="text-xs text-slate-400">Society</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-rose-500/20">
              <div class="text-2xl font-bold text-rose-400">MedTech</div>
              <div class="text-xs text-slate-400">Industry</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Areas</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="bone" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Biomechanics</h3>
            <p class="text-sm text-slate-400">Mechanics of biological systems, prosthetics, orthopedics.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="camera" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Medical Imaging</h3>
            <p class="text-sm text-slate-400">MRI, CT, ultrasound, image processing and reconstruction.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="dna" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Biomaterials</h3>
            <p class="text-sm text-slate-400">Implant materials, tissue engineering, biocompatibility.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="brain" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Neural Engineering</h3>
            <p class="text-sm text-slate-400">Brain-machine interfaces, neuroprosthetics, neural signals.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="bar-chart-3" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Biosensors</h3>
            <p class="text-sm text-slate-400">Diagnostic devices, wearables, lab-on-a-chip technology.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-rose-500/20">
            <div class="mb-4"><Icon name="microscope" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Tissue Engineering</h3>
            <p class="text-sm text-slate-400">Artificial organs, regenerative medicine, scaffolds.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('biomedical')

useHead({
  title: 'Biomedical Engineering - Medical Devices, Biomechanics | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn biomedical engineering with 1,200+ resources. Biomechanics, medical imaging, biomaterials, neural engineering, and tissue engineering.' 
    }
  ]
})
</script>
