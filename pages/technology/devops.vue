<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-orange-950 via-space-900 to-red-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-300 ring-1 ring-orange-500/30">
            <Icon name="settings" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DevOps
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Bridge development and operations. Master CI/CD, Docker, Kubernetes, 
            Infrastructure as Code, and site reliability engineering.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">1,200+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">K8s/Docker</div>
              <div class="text-xs text-slate-400">Key Tools</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-orange-500/20">
              <div class="text-2xl font-bold text-orange-400">SRE</div>
              <div class="text-xs text-slate-400">Practices</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DevOps Roadmap -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">DevOps Skills</h2>
          <p class="mt-2 text-slate-400">
            Essential tools and practices for modern infrastructure
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="container" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Docker</h3>
            <p class="text-sm text-slate-400">
              Containerization platform. Package apps with dependencies for consistent deployment.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="cloud-cog" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Kubernetes</h3>
            <p class="text-sm text-slate-400">
              Container orchestration. Scale, manage, and deploy containerized applications.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="refresh-cw" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">CI/CD</h3>
            <p class="text-sm text-slate-400">
              GitHub Actions, GitLab CI, Jenkins. Automate builds, tests, and deployments.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="hammer" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Terraform</h3>
            <p class="text-sm text-slate-400">
              Infrastructure as Code. Provision cloud resources with declarative configuration.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="barchart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Monitoring</h3>
            <p class="text-sm text-slate-400">
              Prometheus, Grafana, Datadog. Observability and alerting for production systems.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-4"><Icon name="cloud" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Cloud Platforms</h3>
            <p class="text-sm text-slate-400">
              AWS, Azure, GCP. Compute, storage, networking, and managed services.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="relative border-t border-orange-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.katacoda.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 ring-1 ring-orange-500/30 transition-all hover:ring-orange-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">Katacoda</h3>
            <p class="text-slate-300">
              Interactive learning platform for Docker, Kubernetes, and cloud technologies. 
              Learn in real environments from your browser.
            </p>
          </a>
          
          <a href="https://kubernetes.io/docs/tutorials/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-orange-400">Kubernetes Docs</h3>
            <p class="text-slate-400">
              Official tutorials and documentation. Learn Kubernetes from the creators.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Your DevOps Journey
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Learn Linux, then Docker, then Kubernetes. Followed by CI/CD and Infrastructure as Code.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.docker.com/101-tutorial/"
            target="_blank"
            class="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-500"
          >
            Docker 101
          </a>
          <a 
            href="https://kubernetes.io/docs/tutorials/kubernetes-basics/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Kubernetes Basics
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('devops')

useHead({
  title: 'DevOps - Docker, Kubernetes, CI/CD | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn DevOps with 1,200+ resources. Docker, Kubernetes, CI/CD pipelines, Terraform, monitoring, and site reliability engineering.' 
    }
  ]
})
</script>
