<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-green-950 via-space-900 to-emerald-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-300 ring-1 ring-green-500/30">
            <Icon name="leaf" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Environmental Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Protect the environment and public health. Design solutions for water treatment, 
            air quality, waste management, and sustainability.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">1,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">AEESP</div>
              <div class="text-xs text-slate-400">Academy</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-green-500/20">
              <div class="text-2xl font-bold text-green-400">Sustainability</div>
              <div class="text-xs text-slate-400">Focus</div>
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
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="droplets" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Water Treatment</h3>
            <p class="text-sm text-slate-400">Drinking water, wastewater, stormwater, water quality.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="wind" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Air Quality</h3>
            <p class="text-sm text-slate-400">Pollution control, emissions, atmospheric dispersion.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="recycle" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Waste Management</h3>
            <p class="text-sm text-slate-400">Solid waste, hazardous waste, recycling, landfills.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="sprout" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Remediation</h3>
            <p class="text-sm text-slate-400">Site cleanup, contaminated soil/groundwater treatment.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="globe" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Sustainability</h3>
            <p class="text-sm text-slate-400">Green design, renewable energy, lifecycle assessment.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4"><Icon name="thermometer" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Climate Engineering</h3>
            <p class="text-sm text-slate-400">Climate adaptation, carbon capture, mitigation strategies.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('environmental')

useHead({
  title: 'Environmental Engineering - Water, Air Quality, Sustainability | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn environmental engineering with 1,000+ resources. Water treatment, air quality, waste management, remediation, and sustainability.' 
    }
  ]
})
</script>
