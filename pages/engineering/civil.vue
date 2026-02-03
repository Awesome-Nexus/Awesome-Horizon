<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-stone-950 via-space-900 to-slate-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-stone-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-stone-500/10 px-4 py-2 text-stone-300 ring-1 ring-stone-500/30">
            <Icon name="building2" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Civil Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Design, build, and maintain infrastructure. From bridges and buildings to 
            water systems and transportation networks, shape the world we live in.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-stone-500/20">
              <div class="text-2xl font-bold text-stone-400">1,800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-stone-500/20">
              <div class="text-2xl font-bold text-stone-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-stone-500/20">
              <div class="text-2xl font-bold text-stone-400">AutoCAD/Civil3D</div>
              <div class="text-xs text-slate-400">Tools</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-stone-500/20">
              <div class="text-2xl font-bold text-stone-400">ASCE</div>
              <div class="text-xs text-slate-400">Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Areas -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Areas</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="building" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Structural Engineering</h3>
            <p class="text-sm text-slate-400">
              Design buildings, bridges, and towers. Analysis, design codes, safety.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="globe" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Geotechnical Engineering</h3>
            <p class="text-sm text-slate-400">
              Soil mechanics, foundations, earth structures, slope stability.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="car" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Transportation</h3>
            <p class="text-sm text-slate-400">
              Highways, traffic engineering, public transit, airport design.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="droplets" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Water Resources</h3>
            <p class="text-sm text-slate-400">
              Hydrology, hydraulics, water supply, flood control, irrigation.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="factory" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Construction Management</h3>
            <p class="text-sm text-slate-400">
              Project planning, cost estimation, scheduling, safety.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20">
            <div class="mb-4"><Icon name="waves" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Environmental</h3>
            <p class="text-sm text-slate-400">
              Water treatment, wastewater, pollution control, sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="relative border-t border-stone-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://ocw.mit.edu/courses/civil-and-environmental-engineering/" target="_blank" class="group rounded-xl bg-gradient-to-br from-stone-500/10 to-slate-500/10 p-6 ring-1 ring-stone-500/30 transition-all hover:ring-stone-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-stone-400">MIT OCW Civil Engineering</h3>
            <p class="text-slate-300">
              Structural mechanics, geotechnical engineering, transportation, and 
              environmental engineering courses from MIT.
            </p>
          </a>
          
          <a href="https://www.engineeringtoolbox.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-stone-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-stone-400">Engineering Toolbox</h3>
            <p class="text-slate-400">
              Reference resources, formulas, and calculators for civil engineers.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Build the World's Infrastructure
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Civil engineers create the built environment. From skyscrapers to clean water systems, 
          your work impacts millions.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://ocw.mit.edu/courses/1-050-engineering-mechanics-i-fall-2007/"
            target="_blank"
            class="rounded-lg bg-stone-600 px-6 py-3 font-medium text-white transition-colors hover:bg-stone-500"
          >
            MIT Mechanics Course
          </a>
          <a 
            href="https://www.asce.org/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            ASCE Resources
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('civil')

useHead({
  title: 'Civil Engineering - Structures, Transportation, Water | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn civil engineering with 1,800+ resources. Structural engineering, geotechnical, transportation, water resources, and construction.' 
    }
  ]
})
</script>
