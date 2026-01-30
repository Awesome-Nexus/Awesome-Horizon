<script setup lang="ts">
useHead({
  title: 'Technology - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master technology from K-12 to professional with 3000+ curated resources. Computer Science, AI/ML, Web Development, Data Science, Cybersecurity, Cloud, DevOps.' }
  ]
})

const featuredResources = [
  { title: 'freeCodeCamp', author: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', desc: 'Free coding certifications' },
  { title: 'The Odin Project', author: 'Odin', url: 'https://www.theodinproject.com/', desc: 'Full stack web development' },
  { title: 'CS50 Harvard', author: 'Harvard', url: 'https://cs50.harvard.edu/', desc: 'Introduction to Computer Science' },
  { title: 'Fast.ai', author: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical deep learning' },
  { title: 'Kaggle Learn', author: 'Kaggle', url: 'https://www.kaggle.com/learn', desc: 'Data science courses' },
  { title: 'MIT OpenCourseWare CS', author: 'MIT', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/', desc: 'Complete CS curriculum' }
]

const quickLinks = [
  { name: 'Programming', url: '#programming', count: 300 },
  { name: 'Web Development', url: '#webdev', count: 250 },
  { name: 'AI/ML', url: '#aiml', count: 200 },
  { name: 'Data Science', url: '#datascience', count: 150 },
  { name: 'Cybersecurity', url: '#security', count: 100 },
  { name: 'Cloud/DevOps', url: '#cloud', count: 120 }
]

const programmingResources = [
  { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', provider: 'freeCodeCamp', type: 'Free' },
  { title: 'Codecademy', url: 'https://www.codecademy.com/', provider: 'Codecademy', type: 'Freemium' },
  { title: 'LeetCode', url: 'https://leetcode.com/', provider: 'LeetCode', type: 'Practice' },
  { title: 'HackerRank', url: 'https://www.hackerrank.com/', provider: 'HackerRank', type: 'Practice' },
  { title: 'Exercism', url: 'https://exercism.org/', provider: 'Exercism', type: 'Free' },
  { title: 'Codewars', url: 'https://www.codewars.com/', provider: 'Codewars', type: 'Gamified' },
  { title: 'The Odin Project', url: 'https://www.theodinproject.com/', provider: 'Odin', type: 'Free' },
  { title: 'App Academy Open', url: 'https://www.appacademy.io/course/app-academy-open', provider: 'App Academy', type: 'Free' }
]

const webdevResources = [
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', desc: 'Mozilla documentation' },
  { name: 'W3Schools', url: 'https://www.w3schools.com/', desc: 'Web tutorials' },
  { name: 'CSS-Tricks', url: 'https://css-tricks.com/', desc: 'CSS techniques' },
  { name: 'JavaScript.info', url: 'https://javascript.info/', desc: 'Modern JS tutorial' },
  { name: 'Frontend Masters', url: 'https://frontendmasters.com/', desc: 'Advanced courses' },
  { name: 'Full Stack Open', url: 'https://fullstackopen.com/', desc: 'Modern web dev' }
]

const aimlResources = [
  { name: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical deep learning' },
  { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/', desc: 'Andrew Ng courses' },
  { name: 'TensorFlow', url: 'https://www.tensorflow.org/', desc: 'ML framework' },
  { name: 'PyTorch', url: 'https://pytorch.org/', desc: 'Deep learning framework' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/', desc: 'Data competitions' },
  { name: 'Papers With Code', url: 'https://paperswithcode.com/', desc: 'ML papers + code' }
]

const datascienceResources = [
  { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', desc: 'Free courses' },
  { name: 'DataCamp', url: 'https://www.datacamp.com/', desc: 'Data science courses' },
  { name: 'DataQuest', url: 'https://www.dataquest.io/', desc: 'Learn data skills' },
  { name: 'Towards Data Science', url: 'https://towardsdatascience.com/', desc: 'Medium publication' },
  { name: 'Analytics Vidhya', url: 'https://www.analyticsvidhya.com/', desc: 'DS community' }
]

const cloudResources = [
  { name: 'AWS Training', url: 'https://aws.amazon.com/training/', desc: 'Amazon Web Services' },
  { name: 'Google Cloud Skills', url: 'https://www.cloudskillsboost.google/', desc: 'GCP training' },
  { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/', desc: 'Azure docs' },
  { name: 'Docker Docs', url: 'https://docs.docker.com/', desc: 'Containerization' },
  { name: 'Kubernetes.io', url: 'https://kubernetes.io/docs/', desc: 'K8s docs' },
  { name: 'Terraform Learn', url: 'https://developer.hashicorp.com/terraform/tutorials', desc: 'IaC' }
]

const securityResources = [
  { name: 'Cybrary', url: 'https://www.cybrary.it/', desc: 'Free cybersecurity' },
  { name: 'TryHackMe', url: 'https://tryhackme.com/', desc: 'Hands-on security' },
  { name: 'Hack The Box', url: 'https://www.hackthebox.com/', desc: 'Penetration testing' },
  { name: 'OWASP', url: 'https://owasp.org/', desc: 'Web security' },
  { name: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', desc: 'Web app security' }
]

const githubRepos = [
  { name: 'awesome-courses', url: 'https://github.com/prakhar1989/awesome-courses', desc: 'CS courses' },
  { name: 'computer-science', url: 'https://github.com/ossu/computer-science', desc: 'OSSU CS degree' },
  { name: 'coding-interview-university', url: 'https://github.com/jwasham/coding-interview-university', desc: 'Interview prep' },
  { name: 'developer-roadmap', url: 'https://github.com/kamranahmedse/developer-roadmap', desc: 'Career paths' },
  { name: 'system-design-primer', url: 'https://github.com/donnemartin/system-design-primer', desc: 'System design' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-cyan-300">3000+ Global Technology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master technology from K-12 to professional with 3000+ curated resources. CS, AI/ML, Web Dev, Data Science, Cybersecurity, Cloud, DevOps.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-cyan-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in featuredResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-cyan-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Programming -->
      <section id="programming" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Programming & CS</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in programmingResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Web Dev -->
      <section id="webdev" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Web Development</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in webdevResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- AI/ML -->
      <section id="aiml" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">AI & Machine Learning</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in aimlResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Data Science -->
      <section id="datascience" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Data Science</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in datascienceResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Cloud/DevOps -->
      <section id="cloud" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Cloud & DevOps</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in cloudResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-orange-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Cybersecurity -->
      <section id="security" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Cybersecurity</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in securityResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-red-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- GitHub Repos -->
      <section id="github" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Essential GitHub Repositories</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in githubRepos" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-500 transition-all">
            <h4 class="font-semibold text-white group-hover:text-gray-300">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
