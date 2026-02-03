<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-500/30">
            <Icon name="cloud" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cloud Computing
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Master AWS, Azure, and Google Cloud. Learn serverless architecture, 
            containerization, and cloud-native development.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">1,800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">AWS/Azure/GCP</div>
              <div class="text-xs text-slate-400">Platforms</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-cyan-500/20">
              <div class="text-2xl font-bold text-cyan-400">Serverless</div>
              <div class="text-xs text-slate-400">Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud Providers -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Major Cloud Platforms</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <!-- AWS -->
          <div class="rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 ring-1 ring-orange-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="cloud" :size="32" />
              <h3 class="text-xl font-semibold text-white">AWS</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Amazon Web Services - Market leader. EC2, S3, Lambda, and 200+ services.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://aws.amazon.com/training/" target="_blank" class="text-orange-400 hover:underline">AWS Free Training</a></li>
              <li>• <a href="https://aws.amazon.com/certification/" target="_blank" class="text-orange-400 hover:underline">AWS Certifications</a></li>
              <li>• <a href="https://aws Skill Builder" target="_blank" class="text-orange-400 hover:underline">Skill Builder</a></li>
            </ul>
          </div>
          
          <!-- Azure -->
          <div class="rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 ring-1 ring-blue-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="cloud" :size="32" />
              <h3 class="text-xl font-semibold text-white">Microsoft Azure</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Strong enterprise integration. Great for .NET and Windows workloads.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://learn.microsoft.com/en-us/training/azure/" target="_blank" class="text-blue-400 hover:underline">Microsoft Learn</a></li>
              <li>• <a href="https://azure.microsoft.com/en-us/free/" target="_blank" class="text-blue-400 hover:underline">Free Tier</a></li>
              <li>• <a href="https://docs.microsoft.com/en-us/certifications/azure/" target="_blank" class="text-blue-400 hover:underline">Azure Certs</a></li>
            </ul>
          </div>
          
          <!-- GCP -->
          <div class="rounded-xl bg-gradient-to-br from-red-500/10 to-yellow-500/10 p-6 ring-1 ring-red-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="cloud" :size="32" />
              <h3 class="text-xl font-semibold text-white">Google Cloud</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Strong data and ML services. Kubernetes originators.
            </p>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <a href="https://cloud.google.com/training" target="_blank" class="text-red-400 hover:underline">Google Cloud Training</a></li>
              <li>• <a href="https://cloud.google.com/free" target="_blank" class="text-red-400 hover:underline">Free Tier</a></li>
              <li>• <a href="https://cloud.google.com/certification" target="_blank" class="text-red-400 hover:underline">Certifications</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Concepts -->
    <section class="relative border-t border-cyan-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Key Cloud Concepts</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="monitor" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Compute</h3>
            <p class="text-sm text-slate-400">
              VMs (EC2), containers, serverless functions (Lambda).
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="save" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Storage</h3>
            <p class="text-sm text-slate-400">
              Object storage (S3), block storage, databases, CDN.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="globe" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Networking</h3>
            <p class="text-sm text-slate-400">
              VPCs, subnets, load balancers, DNS, CDNs.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-cyan-500/20">
            <div class="mb-4"><Icon name="shield" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Security</h3>
            <p class="text-sm text-slate-400">
              IAM, encryption, security groups, compliance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Your Cloud Journey
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          All major clouds offer free tiers. Start with AWS (largest market share) 
          or the platform your company uses.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://aws.amazon.com/free/"
            target="_blank"
            class="rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-500"
          >
            AWS Free Tier
          </a>
          <a 
            href="https://azure.microsoft.com/en-us/free/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Azure Free
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('cloud-computing')

useHead({
  title: 'Cloud Computing - AWS, Azure, Google Cloud | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn cloud computing with 1,800+ resources. AWS, Azure, Google Cloud training, certifications, serverless, and cloud architecture.' 
    }
  ]
})
</script>
