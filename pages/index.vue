<script setup lang="ts">
import { FlaskConical, Cpu, Wrench, Palette, Sigma } from 'lucide-vue-next'
import CategoryCard from '~/components/CategoryCard.vue'

const categories = [
  {
    title: 'Science',
    description: 'Explore the fundamental laws of nature, from biology to physics.',
    to: '/science',
    icon: FlaskConical,
    colorClass: 'bg-purple-500/20 text-purple-300',
    textColorClass: 'text-purple-300'
  },
  {
    title: 'Technology',
    description: 'Innovations shaping our digital future: AI, Web Dev, and more.',
    to: '/technology',
    icon: Cpu,
    colorClass: 'bg-emerald-500/20 text-emerald-300',
    textColorClass: 'text-emerald-300'
  },
  {
    title: 'Engineering',
    description: 'Building the world around us. Civil, Mechanical, and Electrical.',
    to: '/engineering',
    icon: Wrench,
    colorClass: 'bg-amber-500/20 text-amber-300',
    textColorClass: 'text-amber-300'
  },
  {
    title: 'Arts',
    description: 'Creativity meets technique. Design, Music, and Visual Arts.',
    to: '/arts',
    icon: Palette,
    colorClass: 'bg-rose-500/20 text-rose-300',
    textColorClass: 'text-rose-300'
  },
  {
    title: 'Mathematics',
    description: 'The language of the universe. Algebra, Calculus, and Logic.',
    to: '/mathematics',
    icon: Sigma,
    colorClass: 'bg-sky-500/20 text-sky-300',
    textColorClass: 'text-sky-300'
  }
]
</script>

<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center space-y-6 pt-12 pb-8 relative">
      <div class="absolute inset-0 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
        <span class="text-white animate-fade-in">
          Unlock Your Potential
        </span>
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
        A curated collection of the best learning resources for the modern creator.
        Dive into Science, Tech, and more.
      </p>
    </section>

    <!-- Categories Grid -->
    <section>
      <h2 class="text-2xl font-bold mb-8 text-center text-space-100">Explore by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <CategoryCard 
          v-for="category in categories" 
          :key="category.title"
          v-bind="category"
        />
      </div>
    </section>
  </div>
</template>
