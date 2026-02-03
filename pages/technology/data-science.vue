<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-space-900 to-teal-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300 ring-1 ring-emerald-500/30">
            <Icon name="barchart" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Data Science
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Extract insights from data through analysis, visualization, and machine learning. 
            From SQL queries to predictive models, master the data pipeline.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">2,000+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Kaggle</div>
              <div class="text-xs text-slate-400">Top Platform</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-emerald-500/20">
              <div class="text-2xl font-bold text-emerald-400">Python/R</div>
              <div class="text-xs text-slate-400">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Skills -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Core Skills Path</h2>
          <p class="mt-2 text-slate-400">
            The essential data science skill stack
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="database" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">SQL</h3>
            <p class="text-sm text-slate-400">
              Query and manipulate databases. Essential skill for any data role.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="code" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Python</h3>
            <p class="text-sm text-slate-400">
              Pandas, NumPy for data manipulation. Primary language of data science.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <Icon name="bar-chart-3" class="w-10 h-10 mb-4 text-emerald-400" />
            <h3 class="mb-2 font-semibold text-white">Statistics</h3>
            <p class="text-sm text-slate-400">
              Descriptive and inferential statistics. Hypothesis testing, distributions.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20">
            <div class="mb-4"><Icon name="trending-up" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Machine Learning</h3>
            <p class="text-sm text-slate-400">
              Predictive modeling with scikit-learn. Regression, classification, clustering.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Platforms -->
    <section class="relative border-t border-emerald-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Best Learning Platforms</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <!-- Kaggle -->
          <a href="https://www.kaggle.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6 ring-1 ring-emerald-500/30 transition-all hover:ring-emerald-500/50">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20"><Icon name="trophy" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-emerald-400">Kaggle</h3>
                <div class="text-sm text-emerald-400">#1 Data Science Community</div>
              </div>
            </div>
            <p class="text-slate-300">
              Competitions, datasets, notebooks, and courses. The go-to platform for 
              practicing data science. Start with Learn courses, then enter competitions.
            </p>
          </a>
          
          <!-- DataCamp -->
          <a href="https://www.datacamp.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10"><Icon name="book" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-emerald-400">DataCamp</h3>
                <div class="text-sm text-slate-500">Interactive Courses</div>
              </div>
            </div>
            <p class="text-slate-400">
              Interactive coding courses for Python, SQL, R, and machine learning. 
              Learn by doing in the browser.
            </p>
          </a>
          
          <!-- Mode Analytics -->
          <a href="https://mode.com/sql-tutorial/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10"><Icon name="database" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-emerald-400">Mode Analytics</h3>
                <div class="text-sm text-slate-500">SQL Tutorial</div>
              </div>
            </div>
            <p class="text-slate-400">
              Best free SQL tutorial with real datasets. From basics to advanced analytics.
            </p>
          </a>
          
          <!-- Google's DA Cert -->
          <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10"><Icon name="bar-chart-3" class="w-8 h-8 text-emerald-400" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-emerald-400">Google Data Analytics</h3>
                <div class="text-sm text-slate-500">Professional Certificate</div>
              </div>
            </div>
            <p class="text-slate-400">
              Coursera's comprehensive data analytics certificate. R, SQL, Tableau, 
              and professional skills.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Analyzing Data Today
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Begin with SQL on Mode Analytics, then move to Python and Kaggle. 
          Build a portfolio of projects.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://mode.com/sql-tutorial/"
            target="_blank"
            class="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Learn SQL Free
          </a>
          <a 
            href="https://www.kaggle.com/learn"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Kaggle Learn
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('data-science')

useHead({
  title: 'Data Science - Python, SQL, Analytics & ML | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn data science with 2,000+ resources. Kaggle, DataCamp, SQL tutorials, Python for data analysis, statistics, and machine learning fundamentals.' 
    }
  ]
})
</script>
