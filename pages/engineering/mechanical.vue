<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-orange-950 via-space-900 to-red-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-300 ring-1 ring-orange-500/30">
            <Icon name="cog" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mechanical Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The broadest engineering discipline. Design, analyze, and manufacture mechanical systems 
            from micro-scale devices to spacecraft. Master thermodynamics, fluid mechanics, 
            materials, and mechanical design.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">2,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">CAD/FEA</div>
              <div class="text-xs text-slate-400">Key Tools</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">ASME</div>
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
          <p class="mt-2 text-slate-400">
            Fundamental domains within mechanical engineering
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="thermometer" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Thermodynamics</h3>
            <p class="text-sm text-slate-400">
              Heat, work, energy, and entropy. Power cycles, refrigeration, and heat transfer.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="wind" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Fluid Mechanics</h3>
            <p class="text-sm text-slate-400">
              Fluid statics and dynamics. Aerodynamics, hydraulics, and CFD.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="building2" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Solid Mechanics</h3>
            <p class="text-sm text-slate-400">
              Stress, strain, deformation. Mechanics of materials and structural analysis.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="cog" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mechanical Design</h3>
            <p class="text-sm text-slate-400">
              Machine elements, mechanisms, CAD, and design for manufacturing.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="factory" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Manufacturing</h3>
            <p class="text-sm text-slate-400">
              Machining, forming, casting, additive manufacturing, and quality control.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="bot" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mechatronics</h3>
            <p class="text-sm text-slate-400">
              Integration of mechanical, electrical, and software systems. Control systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Resources -->
    <section class="relative border-t border-orange-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://ocw.mit.edu/courses/mechanical-engineering/" target="_blank" class="group rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 ring-1 ring-orange-500/30 transition-all hover:ring-orange-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">MIT OCW Mechanical Engineering</h3>
            <p class="text-slate-300">
              Complete MIT mechanical engineering courses. Thermodynamics, fluids, 
              solid mechanics, and design. Lecture notes, assignments, and exams.
            </p>
          </a>
          
          <a href="https://www.learnmech.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">Learn Mechanical</h3>
            <p class="text-slate-400">
              Engineering tutorials, notes, and resources for mechanical engineering students.
            </p>
          </a>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <h3 class="mb-3 text-lg font-semibold text-white">Essential Textbooks</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong class="text-slate-300">Shigley's Mechanical Engineering Design</strong></li>
              <li>• <strong class="text-slate-300">Fundamentals of Thermodynamics</strong> (Sonntag/Borgnakke)</li>
              <li>• <strong class="text-slate-300">Fluid Mechanics</strong> (White)</li>
              <li>• <strong class="text-slate-300">Mechanics of Materials</strong> (Beer & Johnston)</li>
            </ul>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <h3 class="mb-3 text-lg font-semibold text-white">Software Tools</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong class="text-slate-300">SolidWorks</strong> - CAD design</li>
              <li>• <strong class="text-slate-300">ANSYS</strong> - FEA simulation</li>
              <li>• <strong class="text-slate-300">MATLAB</strong> - Numerical computing</li>
              <li>• <strong class="text-slate-300">Fusion 360</strong> - CAD/CAM (free for students)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Build the Physical World
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Mechanical engineering offers endless opportunities from automotive and aerospace 
          to robotics and energy systems.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://ocw.mit.edu/courses/2-00aj-exploring-sea-space-and-earth-fundamentals-of-engineering-design-spring-2009/"
            target="_blank"
            class="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-500"
          >
            MIT Design Course
          </a>
          <a 
            href="https://www.autodesk.com/products/fusion-360/students-teachers-educators"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Fusion 360 Free
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('mechanical')

useHead({
  title: 'Mechanical Engineering - Thermodynamics, Design, CAD | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn mechanical engineering with 2,000+ resources. Thermodynamics, fluid mechanics, CAD, FEA, manufacturing, and design.' 
    }
  ]
})
</script>
