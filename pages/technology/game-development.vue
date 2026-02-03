<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-pink-950 via-space-900 to-purple-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-pink-300 ring-1 ring-pink-500/30">
            <Icon name="gamepad" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Game Development
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Create interactive experiences and video games. Learn Unity, Unreal Engine, 
            game design principles, and the art of interactive storytelling.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">Unity/Unreal</div>
              <div class="text-xs text-slate-400">Engines</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-pink-500/20">
              <div class="text-2xl font-bold text-pink-400">C#/C++</div>
              <div class="text-xs text-slate-400">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Engines -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Game Engines</h2>
          <p class="mt-2 text-slate-400">
            The tools that power modern game development
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <!-- Unity -->
          <div class="rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 ring-1 ring-pink-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="circle" :size="32" />
              <h3 class="text-xl font-semibold text-white">Unity</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Most popular game engine. Great for 2D and 3D games. C# scripting. 
              Excellent for beginners and mobile games.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://learn.unity.com/" target="_blank" class="text-pink-400 hover:underline">Unity Learn</a> (Free courses)</li>
              <li>• <a href="https://docs.unity3d.com/Manual/index.html" target="_blank" class="text-pink-400 hover:underline">Documentation</a></li>
            </ul>
          </div>
          
          <!-- Unreal -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="square" :size="32" />
              <h3 class="text-xl font-semibold text-white">Unreal Engine</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Industry standard for AAA games. Stunning graphics. Blueprint visual 
              scripting or C++. Free to use.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://dev.epicgames.com/community/learning" target="_blank" class="text-pink-400 hover:underline">Unreal Learning</a></li>
              <li>• <a href="https://docs.unrealengine.com/" target="_blank" class="text-pink-400 hover:underline">Documentation</a></li>
            </ul>
          </div>
          
          <!-- Godot -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="circle-dot" :size="32" />
              <h3 class="text-xl font-semibold text-white">Godot</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Open source and completely free. Lightweight, GDScript (Python-like) 
              or C#. Great for indie developers.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://docs.godotengine.org/" target="_blank" class="text-pink-400 hover:underline">Godot Docs</a></li>
              <li>• <a href="https://gdquest.com/" target="_blank" class="text-pink-400 hover:underline">GDQuest Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Design -->
    <section class="relative border-t border-pink-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Game Design Resources</h2>
          <p class="mt-2 text-slate-400">
            Theory and practice of creating engaging games
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <h3 class="mb-2 text-lg font-semibold text-white">Books</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong class="text-slate-300">The Art of Game Design</strong> - Jesse Schell</li>
              <li>• <strong class="text-slate-300">Rules of Play</strong> - Katie Salen & Eric Zimmerman</li>
              <li>• <strong class="text-slate-300">Game Programming Patterns</strong> - Robert Nystrom (Free)</li>
            </ul>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-pink-500/20">
            <h3 class="mb-2 text-lg font-semibold text-white">Communities</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://itch.io/" target="_blank" class="text-pink-400 hover:underline">itch.io</a> - Indie game platform</li>
              <li>• <a href="https://www.reddit.com/r/gamedev/" target="_blank" class="text-pink-400 hover:underline">r/gamedev</a> - Game dev community</li>
              <li>• <a href="https://ldjam.com/" target="_blank" class="text-pink-400 hover:underline">Ludum Dare</a> - Game jams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Making Games
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Begin with Unity or Godot for easier learning. Create small projects, 
          join game jams, and build your portfolio.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://learn.unity.com/"
            target="_blank"
            class="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-500"
          >
            Unity Learn
          </a>
          <a 
            href="https://godotengine.org/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Try Godot
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('game-development')

useHead({
  title: 'Game Development - Unity, Unreal Engine, Godot | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn game development with 1,500+ resources. Unity, Unreal Engine, Godot, game design, C#, C++, and indie game development.' 
    }
  ]
})
</script>
