<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-teal-950 via-space-900 to-cyan-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-teal-300 ring-1 ring-teal-500/30">
            <Icon name="smartphone" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mobile Development
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Build apps for iOS and Android. Native development with Swift and Kotlin, 
            or cross-platform with React Native and Flutter.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">iOS/Android</div>
              <div class="text-xs text-slate-400">Platforms</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-teal-500/20">
              <div class="text-2xl font-bold text-teal-400">Cross-Platform</div>
              <div class="text-xs text-slate-400">Options</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- iOS Development -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">iOS Development</h2>
          <p class="mt-2 text-slate-400">
            Build apps for iPhone and iPad
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="smartphone" :size="32" />
              <h3 class="text-xl font-semibold text-white">Swift</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Apple's modern programming language. Type-safe, fast, and expressive.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://docs.swift.org/swift-book/" target="_blank" class="text-teal-400 hover:underline">The Swift Programming Language</a></li>
              <li>• <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" class="text-teal-400 hover:underline">SwiftUI Tutorials</a></li>
            </ul>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="smartphone" class="w-8 h-8" />
              <h3 class="text-xl font-semibold text-white">SwiftUI</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Modern declarative UI framework. Build interfaces across all Apple platforms.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://developer.apple.com/documentation/swiftui" target="_blank" class="text-teal-400 hover:underline">Official Documentation</a></li>
              <li>• <a href="https://www.hackingwithswift.com/100/swiftui" target="_blank" class="text-teal-400 hover:underline">100 Days of SwiftUI</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Android Development -->
    <section class="relative border-t border-teal-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Android Development</h2>
          <p class="mt-2 text-slate-400">
            Build apps for Android devices
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="smartphone" :size="32" />
              <h3 class="text-xl font-semibold text-white">Kotlin</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Modern language for Android. Concise, safe, and interoperable with Java.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://kotlinlang.org/docs/home.html" target="_blank" class="text-teal-400 hover:underline">Kotlin Documentation</a></li>
              <li>• <a href="https://developer.android.com/courses/android-basics-compose/course" target="_blank" class="text-teal-400 hover:underline">Android Basics with Compose</a></li>
            </ul>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-teal-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="palette" :size="32" />
              <h3 class="text-xl font-semibold text-white">Jetpack Compose</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Modern toolkit for building native UI. Declarative approach similar to SwiftUI.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://developer.android.com/jetpack/compose/documentation" target="_blank" class="text-teal-400 hover:underline">Compose Documentation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-Platform -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Cross-Platform Development</h2>
          <p class="mt-2 text-slate-400">
            One codebase for both iOS and Android
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 ring-1 ring-teal-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="heart" :size="32" />
              <h3 class="text-xl font-semibold text-white">React Native</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              JavaScript framework using React. Large ecosystem, near-native performance.
            </p>
            <a href="https://reactnative.dev/docs/getting-started" target="_blank" class="text-sm text-teal-400 hover:underline">
              Get Started →
            </a>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 ring-1 ring-teal-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="flutter" :size="32" />
              <h3 class="text-xl font-semibold text-white">Flutter</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Google's Dart framework. Fast, beautiful apps with single codebase.
            </p>
            <a href="https://docs.flutter.dev/" target="_blank" class="text-sm text-teal-400 hover:underline">
              Documentation →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-teal-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Build Your First Mobile App
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Choose native for best performance, or cross-platform for faster development. 
          Both paths lead to great careers.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://developer.apple.com/tutorials/swiftui"
            target="_blank"
            class="rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-500"
          >
            iOS SwiftUI
          </a>
          <a 
            href="https://developer.android.com/courses/android-basics-compose/course"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Android Compose
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('mobile-development')

useHead({
  title: 'Mobile Development - iOS, Android, React Native | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn mobile development with 1,500+ resources. iOS Swift, Android Kotlin, React Native, Flutter, and cross-platform development.' 
    }
  ]
})
</script>
