<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-yellow-950 via-space-900 to-amber-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-yellow-300 ring-1 ring-yellow-500/30">
            <Icon name="zap" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Electrical Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Study, design, and application of electrical systems. From microelectronics 
            to power grids, master circuits, signals, and electromagnetic systems.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
              <div class="text-2xl font-bold text-yellow-400">2,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
              <div class="text-2xl font-bold text-yellow-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
              <div class="text-2xl font-bold text-yellow-400">Circuits/PCB</div>
              <div class="text-xs text-slate-400">Key Tools</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
              <div class="text-2xl font-bold text-yellow-400">IEEE</div>
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
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="zap" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Circuit Analysis</h3>
            <p class="text-sm text-slate-400">
              DC/AC circuits, network theorems, transient analysis, and frequency response.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="plug" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Electronics</h3>
            <p class="text-sm text-slate-400">
              Semiconductors, diodes, transistors, amplifiers, and digital logic.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="factory" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Power Systems</h3>
            <p class="text-sm text-slate-400">
              Generation, transmission, distribution. Motors, generators, transformers.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="sliders-horizontal" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Control Systems</h3>
            <p class="text-sm text-slate-400">
              Feedback, stability, PID control. Classical and modern control theory.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="radio" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Signal Processing</h3>
            <p class="text-sm text-slate-400">
              Analog and digital signals, filters, Fourier analysis, communications.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20">
            <div class="mb-4"><Icon name="cpu" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Microelectronics</h3>
            <p class="text-sm text-slate-400">
              VLSI design, IC fabrication, embedded systems, and FPGA.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="relative border-t border-yellow-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.allaboutcircuits.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 p-6 ring-1 ring-yellow-500/30 transition-all hover:ring-yellow-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-yellow-400">All About Circuits</h3>
            <p class="text-slate-300">
              Comprehensive free electrical engineering textbook. Covers everything from 
              basic circuits to advanced electronics.
            </p>
          </a>
          
          <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-yellow-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-yellow-400">MIT OCW Electrical Engineering</h3>
            <p class="text-slate-400">
              MIT's electrical engineering courses. Circuits, signals, electronics, and more.
            </p>
          </a>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <h3 class="mb-3 text-lg font-semibold text-white">Essential Textbooks</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong class="text-slate-300">Fundamentals of Electric Circuits</strong> (Alexander)</li>
              <li>• <strong class="text-slate-300">Microelectronic Circuits</strong> (Sedra & Smith)</li>
              <li>• <strong class="text-slate-300">Signals and Systems</strong> (Oppenheim)</li>
              <li>• <strong class="text-slate-300">Power System Analysis</strong> (Grainger)</li>
            </ul>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <h3 class="mb-3 text-lg font-semibold text-white">Software Tools</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong class="text-slate-300">LTspice</strong> - Circuit simulation (free)</li>
              <li>• <strong class="text-slate-300">KiCad</strong> - PCB design (free)</li>
              <li>• <strong class="text-slate-300">MATLAB</strong> - Signal processing</li>
              <li>• <strong class="text-slate-300">Proteus</strong> - Circuit simulation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Power the Future
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Electrical engineers design everything from microchips to power grids. 
          The foundation of modern technology.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.allaboutcircuits.com/textbook/"
            target="_blank"
            class="rounded-lg bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-500"
          >
            Free EE Textbook
          </a>
          <a 
            href="https://www.kicad.org/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            KiCad PCB Design
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('electrical')

useHead({
  title: 'Electrical Engineering - Circuits, Electronics, Power | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn electrical engineering with 2,000+ resources. Circuit analysis, electronics, power systems, control systems, and signal processing.' 
    }
  ]
})
</script>
