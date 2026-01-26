<script setup lang="ts">
import { FlaskConical, Cpu, Wrench, Palette, Sigma } from 'lucide-vue-next'

const categories = [
  {
    title: 'Science',
    description: 'Explore the fundamental laws of nature, from biology to physics.',
    to: '/science',
    icon: FlaskConical,
    colorClass: 'bg-purple-500/20 text-purple-300',
    textColorClass: 'text-purple-300',
    count: '450+ resources'
  },
  {
    title: 'Technology',
    description: 'Innovations shaping our digital future: AI, Web Dev, and more.',
    to: '/technology',
    icon: Cpu,
    colorClass: 'bg-emerald-500/20 text-emerald-300',
    textColorClass: 'text-emerald-300',
    count: '40+ resources'
  },
  {
    title: 'Engineering',
    description: 'Building the world around us. Civil, Mechanical, and Electrical.',
    to: '/engineering',
    icon: Wrench,
    colorClass: 'bg-amber-500/20 text-amber-300',
    textColorClass: 'text-amber-300',
    count: '30+ resources'
  },
  {
    title: 'Arts',
    description: 'Creativity meets technique. Design, Music, and Visual Arts.',
    to: '/arts',
    icon: Palette,
    colorClass: 'bg-rose-500/20 text-rose-300',
    textColorClass: 'text-rose-300',
    count: '25+ resources'
  },
  {
    title: 'Mathematics',
    description: 'The language of the universe. Algebra, Calculus, and Logic.',
    to: '/mathematics',
    icon: Sigma,
    colorClass: 'bg-sky-500/20 text-sky-300',
    textColorClass: 'text-sky-300',
    count: '60+ resources'
  }
]
</script>

<template>
  <div class="space-y-12">
    <!-- Header -->
    <div class="text-center space-y-6 py-12">
      <h1 class="text-4xl md:text-6xl font-bold text-white">
        Explore All Categories
      </h1>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Dive deep into our curated collection of learning resources across Science, Technology, Engineering, Arts, and Mathematics.
      </p>
    </div>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="category in categories" 
        :key="category.title"
        class="group relative flex flex-col p-8 bg-space-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-space-800 overflow-hidden hover:border-primary-500/50 hover:bg-space-800"
      >
        <NuxtLink :to="category.to" class="absolute inset-0 z-10"></NuxtLink>
        
        <!-- Icon -->
        <div class="flex items-center justify-center mb-6">
          <div :class="['relative p-4 rounded-2xl', category.colorClass]">
            <component :is="category.icon" :class="['h-12 w-12', category.textColorClass]" stroke-width="1.5" />
          </div>
        </div>
        
        <!-- Content -->
        <div class="text-center space-y-4">
          <h3 class="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
            {{ category.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ category.description }}
          </p>
          <div class="text-sm text-primary-400 font-medium">
            {{ category.count }}
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center py-12 space-y-6">
      <h2 class="text-3xl font-bold text-white">Ready to Start Learning?</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Each category contains carefully curated resources from top universities, educational platforms, and industry experts.
      </p>
      <NuxtLink 
        to="/" 
        class="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>