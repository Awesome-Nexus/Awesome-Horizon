<template>
  <div class="min-h-screen bg-space-950">
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-950 via-space-900 to-indigo-950 pb-16 pt-32">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-blue-300 ring-1 ring-blue-500/30">
            <Icon name="trendingup" class="w-6 h-6" />
            <span class="text-sm font-medium">Mathematics</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Statistics & Probability
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            The science of data and uncertainty. Essential for data science, research, 
            and making informed decisions in an uncertain world.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">1,800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">All Levels</div>
              <div class="text-xs text-slate-400">Welcome</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">StatQuest</div>
              <div class="text-xs text-slate-400">Top Channel</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
              <div class="text-2xl font-bold text-blue-400">Data Science</div>
              <div class="text-xs text-slate-400">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Statistics Topics</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <Icon name="bar-chart-3" class="w-10 h-10 mb-4 text-blue-400" />
            <h3 class="mb-2 font-semibold text-white">Descriptive Statistics</h3>
            <p class="text-sm text-slate-400">Mean, median, mode, standard deviation, distributions, visualization.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <Icon name="eye" class="w-10 h-10 mb-4 text-blue-400" />
            <h3 class="mb-2 font-semibold text-white">Inferential Statistics</h3>
            <p class="text-sm text-slate-400">Hypothesis testing, confidence intervals, p-values, significance.</p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <Icon name="dices" class="w-10 h-10 mb-4 text-blue-400" />
            <h3 class="mb-2 font-semibold text-white">Probability Theory</h3>
            <p class="text-sm text-slate-400">Random variables, distributions, expectation, conditional probability.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative border-t border-blue-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.youtube.com/@statquest" target="_blank" class="group rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 ring-1 ring-blue-500/30 transition-all hover:ring-blue-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-blue-400">StatQuest</h3>
            <p class="text-slate-300">
              Josh Starmer's channel with clear, simple explanations of statistics and machine learning concepts.
            </p>
          </a>
          
          <a href="https://www.khanacademy.org/math/statistics-probability" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-blue-400">Khan Academy Statistics</h3>
            <p class="text-slate-400">
              Comprehensive free statistics and probability courses with practice exercises.
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('mathematics')
const subjectInfo = getSubjectBySlug('statistics-probability')

useHead({
  title: 'Statistics & Probability - Data Analysis, Inference | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn statistics and probability with 1,800+ resources. StatQuest, Khan Academy, descriptive stats, inference, hypothesis testing, and distributions.' 
    }
  ]
})
</script>
