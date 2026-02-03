<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-red-950 via-space-900 to-orange-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-300 ring-1 ring-red-500/30">
            <Icon name="film" :size="24" />
            <span class="text-sm font-medium">Arts</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Film & Media
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Learn filmmaking, screenwriting, editing, and visual storytelling. 
            From indie shorts to documentary features.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">DaVinci/Premiere</div>
              <div class="text-xs text-slate-400">Editing</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">Screenwriting</div>
              <div class="text-xs text-slate-400">Writing</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Filmmaking Disciplines</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="file-text" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Screenwriting</h3>
            <p class="text-sm text-slate-400">Story structure, dialogue, formatting with Final Draft or Celtx.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="video" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Cinematography</h3>
            <p class="text-sm text-slate-400">Camera operation, lighting, lenses, composition, and movement.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="scissors" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Editing</h3>
            <p class="text-sm text-slate-400">Assembly, pacing, color correction, sound design, and delivery.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="clapperboard" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Directing</h3>
            <p class="text-sm text-slate-400">Working with actors, visual storytelling, shot lists, and vision.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="music" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Sound Design</h3>
            <p class="text-sm text-slate-400">Dialogue recording, foley, sound effects, mixing, and scoring.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="newspaper" :size="28" /></div>
            <h3 class="mb-2 font-semibold text-white">Documentary</h3>
            <p class="text-sm text-slate-400">Non-fiction storytelling, interviews, archival research, ethics.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('arts')
const subjectInfo = getSubjectBySlug('film-media')

useHead({
  title: 'Film & Media - Filmmaking, Screenwriting, Editing | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn filmmaking with 1,500+ resources. Screenwriting, cinematography, editing, directing, sound design, and documentary production.' 
    }
  ]
})
</script>
