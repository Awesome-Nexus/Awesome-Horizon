<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-violet-950 via-space-900 to-purple-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-violet-300 ring-1 ring-violet-500/30">
            <Icon name="drama" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Performing Arts
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Theater, dance, opera, and musical theater. Master the art of live performance 
            and storytelling through movement and voice.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">Theater/Dance</div>
              <div class="text-xs text-slate-400">Focus</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-violet-500/20">
              <div class="text-2xl font-bold text-violet-400">Acting</div>
              <div class="text-xs text-slate-400">Techniques</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Performing Arts Disciplines</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="drama" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Acting</h3>
            <p class="text-sm text-slate-400">Character development, voice, movement, and audition techniques.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="person-standing" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Dance</h3>
            <p class="text-sm text-slate-400">Ballet, contemporary, jazz, hip-hop, and choreography.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="tent" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Theater</h3>
            <p class="text-sm text-slate-400">Directing, stage management, set design, lighting, and production.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="music" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Musical Theater</h3>
            <p class="text-sm text-slate-400">Triple threat training: acting, singing, and dancing together.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="mic" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Opera</h3>
            <p class="text-sm text-slate-400">Classical vocal technique, languages, and dramatic presentation.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-violet-500/20">
            <div class="mb-4"><Icon name="palette" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Stagecraft</h3>
            <p class="text-sm text-slate-400">Technical theater: sets, costumes, lighting, sound, and props.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('performing-arts')

useHead({
  title: 'Performing Arts - Theater, Dance, Acting | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn performing arts with 1,200+ resources. Acting, theater, dance, musical theater, opera, stagecraft, and performance techniques.' 
    }
  ]
})
</script>
