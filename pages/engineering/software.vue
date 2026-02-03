<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-950 via-space-900 to-indigo-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-blue-300 ring-1 ring-blue-500/30">
            <Icon name="code2" :size="24" />
            <span class="text-sm font-medium">Engineering</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Software Engineering
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Apply engineering principles to software development. Design patterns, 
            architecture, testing, and project management for building reliable systems.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">2,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">Design/Testing</div>
              <div class="text-xs text-slate-400">Focus Areas</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">IEEE-CS</div>
              <div class="text-xs text-slate-400">Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Topics -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Software Engineering Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="building2" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Design Patterns</h3>
            <p class="text-sm text-slate-400">
              Reusable solutions to common problems. GoF patterns, architectural patterns.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="ruler" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Software Architecture</h3>
            <p class="text-sm text-slate-400">
              System design, microservices, monoliths, event-driven architecture.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="check-circle" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Testing & QA</h3>
            <p class="text-sm text-slate-400">
              Unit tests, integration tests, TDD, QA processes, test automation.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="clipboard-list" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Project Management</h3>
            <p class="text-sm text-slate-400">
              Agile, Scrum, estimation, planning, risk management.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="refresh-cw" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">DevOps & CI/CD</h3>
            <p class="text-sm text-slate-400">
              Continuous integration, deployment pipelines, infrastructure as code.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="sparkles" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Code Quality</h3>
            <p class="text-sm text-slate-400">
              Clean code, refactoring, code reviews, static analysis.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Essential Books -->
    <section class="relative border-t border-blue-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Essential Books</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Code Quality</div>
            <h3 class="mb-2 font-semibold text-white">Clean Code</h3>
            <p class="text-sm text-slate-400">Robert C. Martin - The bible of writing maintainable code.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Refactoring</div>
            <h3 class="mb-2 font-semibold text-white">Refactoring</h3>
            <p class="text-sm text-slate-400">Martin Fowler - Improving the design of existing code.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Design Patterns</div>
            <h3 class="mb-2 font-semibold text-white">Design Patterns (GoF)</h3>
            <p class="text-sm text-slate-400">Gang of Four - Classic patterns for object-oriented design.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Architecture</div>
            <h3 class="mb-2 font-semibold text-white">Clean Architecture</h3>
            <p class="text-sm text-slate-400">Robert C. Martin - Software structure and design.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Domain Design</div>
            <h3 class="mb-2 font-semibold text-white">Domain-Driven Design</h3>
            <p class="text-sm text-slate-400">Eric Evans - Tackling complexity in software.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-2 text-xs text-slate-500">Philosophy</div>
            <h3 class="mb-2 font-semibold text-white">The Mythical Man-Month</h3>
            <p class="text-sm text-slate-400">Fred Brooks - Classic essays on software engineering.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Engineer Better Software
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Software engineering is about more than coding. Learn to design systems 
          that are reliable, maintainable, and scalable.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://refactoring.guru/"
            target="_blank"
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            Refactoring Guru
          </a>
          <a 
            href="https://martinfowler.com/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Martin Fowler's Blog
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('engineering')
const subjectInfo = getSubjectBySlug('software')

useHead({
  title: 'Software Engineering - Design Patterns, Architecture | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn software engineering with 2,500+ resources. Design patterns, clean code, software architecture, testing, and project management.' 
    }
  ]
})
</script>
