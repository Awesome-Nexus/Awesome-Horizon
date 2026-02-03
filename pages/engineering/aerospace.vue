<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-sky-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sky-300 ring-1 ring-sky-500/30">
            <Icon name="rocket" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Aerospace Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Design aircraft, spacecraft, and related systems. Master aerodynamics, 
            propulsion, structures, and orbital mechanics.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">NASA/AIAA</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">Aero/Space</div>
              <div class="text-xs text-slate-400">Focus</div>
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
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="wind" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Aerodynamics</h3>
            <p class="text-sm text-slate-400">
              Fluid flow around bodies. Lift, drag, compressibility, CFD analysis.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="plane" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Flight Mechanics</h3>
            <p class="text-sm text-slate-400">
              Aircraft performance, stability, control, and handling qualities.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="flame" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Propulsion</h3>
            <p class="text-sm text-slate-400">
              Engines, rockets, turbines. Thermodynamics and performance analysis.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="satellite" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Orbital Mechanics</h3>
            <p class="text-sm text-slate-400">
              Spacecraft trajectories, orbital maneuvers, mission design.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="building2" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Structures</h3>
            <p class="text-sm text-slate-400">
              Lightweight design, fatigue, fracture, composite materials.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="radio" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Avionics</h3>
            <p class="text-sm text-slate-400">
              Flight control systems, navigation, communication systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="relative border-t border-sky-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://ocw.mit.edu/courses/aeronautics-and-astronautics/" target="_blank" class="group rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-6 ring-1 ring-sky-500/30 transition-all hover:ring-sky-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">MIT AeroAstro</h3>
            <p class="text-slate-300">
              MIT's aerospace engineering courses. Aerodynamics, propulsion, 
              structures, and space systems.
            </p>
          </a>
          
          <a href="https://www.nasa.gov/learning-resources/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">NASA Learning Resources</h3>
            <p class="text-slate-400">
              Educational materials from NASA. STEM resources, research, and 
              career information.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('aerospace')

useHead({
  title: 'Aerospace Engineering - Aerodynamics, Propulsion | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn aerospace engineering with 1,200+ resources. Aerodynamics, flight mechanics, propulsion, orbital mechanics, and spacecraft design.' 
    }
  ]
})
</script>
