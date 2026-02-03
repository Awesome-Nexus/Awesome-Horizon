<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-space-900 to-blue-950 pb-20 pt-32">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div class="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cyan-400/5 blur-2xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-500/30">
            <Icon name="cpu" :size="24" class="text-cyan-400" />
            <span class="text-sm font-medium">STEAM Category</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
            Master the digital world with comprehensive resources across computer science, 
            artificial intelligence, cybersecurity, and more. From your first line of code to 
            advanced system architecture.
          </p>
          
          <!-- Stats -->
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">10</div>
              <div class="text-sm text-slate-400">Subjects</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">18,300+</div>
              <div class="text-sm text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">195+</div>
              <div class="text-sm text-slate-400">Countries</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">All Levels</div>
              <div class="text-sm text-slate-400">Beginner to Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Grid -->
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white">Explore Technology Subjects</h2>
          <p class="mt-4 text-slate-400">
            Choose your path and start learning today
          </p>
        </div>
        
        <SubjectGrid 
          :subjects="subjects" 
          category-slug="technology"
          :columns="3"
        />
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="relative border-t border-cyan-500/10 bg-space-900/30 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-white">Featured Resources</h2>
          <p class="mt-4 text-slate-400">
            Top-rated platforms and courses across technology
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- freeCodeCamp -->
          <a 
            href="https://www.freecodecamp.org/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20 transition-all hover:bg-space-800 hover:ring-cyan-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Icon name="code2" :size="24" class="text-cyan-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400">
              freeCodeCamp
            </h3>
            <p class="text-sm text-slate-400">
              Free coding curriculum with certifications in web development, data science, and more.
            </p>
          </a>
          
          <!-- CS50 -->
          <a 
            href="https://cs50.harvard.edu/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20 transition-all hover:bg-space-800 hover:ring-cyan-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Icon name="graduation-cap" :size="24" class="text-cyan-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400">
              CS50
            </h3>
            <p class="text-sm text-slate-400">
              Harvard's Introduction to Computer Science - the gold standard in CS education.
            </p>
          </a>
          
          <!-- The Odin Project -->
          <a 
            href="https://www.theodinproject.com/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20 transition-all hover:bg-space-800 hover:ring-cyan-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Icon name="globe" :size="24" class="text-cyan-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400">
              The Odin Project
            </h3>
            <p class="text-sm text-slate-400">
              Full-stack web development curriculum with hands-on projects.
            </p>
          </a>
          
          <!-- Fast.ai -->
          <a 
            href="https://www.fast.ai/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800 hover:ring-purple-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
              <Icon name="brain" :size="24" class="text-purple-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-purple-400">
              Fast.ai
            </h3>
            <p class="text-sm text-slate-400">
              Practical deep learning for coders - making neural nets uncool again.
            </p>
          </a>
          
          <!-- TryHackMe -->
          <a 
            href="https://tryhackme.com/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20 transition-all hover:bg-space-800 hover:ring-red-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
              <Icon name="shield" :size="24" class="text-red-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-red-400">
              TryHackMe
            </h3>
            <p class="text-sm text-slate-400">
              Hands-on cybersecurity training with virtual labs and challenges.
            </p>
          </a>
          
          <!-- Kaggle -->
          <a 
            href="https://www.kaggle.com/"
            target="_blank"
            class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-emerald-500/20 transition-all hover:bg-space-800 hover:ring-emerald-500/40"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <Icon name="bar-chart-3" :size="24" class="text-emerald-400" />
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white group-hover:text-emerald-400">
              Kaggle
            </h3>
            <p class="text-sm text-slate-400">
              Data science competitions, datasets, and collaborative notebooks.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Learning Paths -->
    <section class="relative py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white">Learning Paths</h2>
          <p class="mt-4 text-slate-400">
            Structured roadmaps to take you from beginner to professional
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4"><Icon name="code2" :size="28" class="text-blue-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white">Full-Stack Developer</h3>
            <p class="mb-4 text-sm text-slate-400">
              HTML/CSS → JavaScript → React/Node.js → Databases → DevOps
            </p>
            <NuxtLink 
              to="/technology/web-development"
              class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Start Learning <ArrowRight class="ml-1 h-4 w-4" />
            </NuxtLink>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="brain" :size="28" class="text-purple-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white">AI/ML Engineer</h3>
            <p class="mb-4 text-sm text-slate-400">
              Python → Math Foundations → ML Algorithms → Deep Learning → MLOps
            </p>
            <NuxtLink 
              to="/technology/artificial-intelligence"
              class="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              Start Learning <ArrowRight class="ml-1 h-4 w-4" />
            </NuxtLink>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="shield" :size="28" class="text-red-400" /></div>
            <h3 class="mb-2 text-lg font-semibold text-white">Cybersecurity Analyst</h3>
            <p class="mb-4 text-sm text-slate-400">
              Networking Basics → Security Fundamentals → Ethical Hacking → Certifications
            </p>
            <NuxtLink 
              to="/technology/cybersecurity"
              class="inline-flex items-center text-sm font-medium text-red-400 hover:text-red-300"
            >
              Start Learning <ArrowRight class="ml-1 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Reach -->
    <section class="relative border-t border-cyan-500/10 bg-space-900/30 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="mb-6 text-3xl font-bold text-white">
              Global Technology Education
            </h2>
            <p class="mb-6 text-slate-400">
              Technology education should be accessible to everyone, everywhere. Our curated 
              resources span 195+ countries and include content in multiple languages, 
              from free MOOCs to university courses.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-slate-300">
                <Globe class="h-5 w-5 text-cyan-400" />
                Resources from MIT, Stanford, and top universities
              </li>
              <li class="flex items-center gap-3 text-slate-300">
                <Users class="h-5 w-5 text-cyan-400" />
                Community-driven learning platforms
              </li>
              <li class="flex items-center gap-3 text-slate-300">
                <Award class="h-5 w-5 text-cyan-400" />
                Industry-recognized certifications
              </li>
              <li class="flex items-center gap-3 text-slate-300">
                <Code class="h-5 w-5 text-cyan-400" />
                Hands-on projects and portfolios
              </li>
            </ul>
          </div>
          
          <div class="relative">
            <div class="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 ring-1 ring-cyan-500/30">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-400">MIT OCW</div>
                  <div class="text-sm text-slate-400">Free courses</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-400">Stanford</div>
                  <div class="text-sm text-slate-400">Online</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-400">Google</div>
                  <div class="text-sm text-slate-400">Certificates</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-400">AWS</div>
                  <div class="text-sm text-slate-400">Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Ready to Start Your Tech Journey?
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Choose a subject above and dive into the world of technology. 
          Whether you're a complete beginner or looking to advance your career, 
          we have resources for you.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/technology/computer-science"
            class="rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-500"
          >
            Start with Computer Science
          </NuxtLink>
          <NuxtLink 
            to="/technology/web-development"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Learn Web Development
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Globe, Users, Award, Code } from 'lucide-vue-next'
import { technologySubjects, getCategoryBySlug } from '~/data/subjects'

const subjects = technologySubjects
const categoryInfo = getCategoryBySlug('technology')

// SEO
useHead({
  title: 'Technology - Computer Science, AI, Cybersecurity & More | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Master technology with 18,300+ free resources across computer science, AI, cybersecurity, web development, data science, and more. Curated for all skill levels.' 
    }
  ]
})
</script>
