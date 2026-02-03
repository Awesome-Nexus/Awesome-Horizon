<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-red-950 via-space-900 to-orange-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-300 ring-1 ring-red-500/30">
            <Icon name="shield" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cybersecurity
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Learn to protect systems, networks, and data from cyber threats. 
            From ethical hacking to security operations, master the skills needed 
            to defend against modern attacks.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">1,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">TryHackMe</div>
              <div class="text-xs text-slate-400">Top Platform</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-red-500/20">
              <div class="text-2xl font-bold text-red-400">OSCP</div>
              <div class="text-xs text-slate-400">Gold Cert</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Platforms -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Learning Platforms</h2>
          <p class="mt-2 text-slate-400">
            Hands-on labs and challenges for practical skills
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <!-- TryHackMe -->
          <a href="https://tryhackme.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 ring-1 ring-red-500/30 transition-all hover:ring-red-500/50">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/20"><Icon name="target" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-red-400">TryHackMe</h3>
                <div class="text-sm text-red-400">#1 Recommended for Beginners</div>
              </div>
            </div>
            <p class="mb-4 text-slate-300">
              Gamified cybersecurity training with virtual rooms and challenges. 
              Guided learning paths from complete beginner to advanced topics.
            </p>
            <ul class="space-y-1 text-sm text-slate-400">
              <li class="flex items-center gap-2"><Icon name="check" class="w-4 h-4 text-green-400" /> Pre-built vulnerable machines</li>
              <li class="flex items-center gap-2"><Icon name="check" class="w-4 h-4 text-green-400" /> Guided walkthroughs</li>
              <li class="flex items-center gap-2"><Icon name="check" class="w-4 h-4 text-green-400" /> Active community</li>
              <li class="flex items-center gap-2"><Icon name="check" class="w-4 h-4 text-green-400" /> Free tier available</li>
            </ul>
          </a>
          
          <!-- Hack The Box -->
          <a href="https://www.hackthebox.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10"><Icon name="package" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-red-400">Hack The Box</h3>
                <div class="text-sm text-slate-500">Advanced Challenges</div>
              </div>
            </div>
            <p class="mb-4 text-slate-400">
              Penetration testing labs with real-world scenarios. More challenging 
              than TryHackMe. Great for preparing for OSCP.
            </p>
            <ul class="space-y-1 text-sm text-slate-400">
              <li>• Active and retired machines</li>
              <li>• Pro labs for enterprise scenarios</li>
              <li>• CTF competitions</li>
              <li>• Certification preparation</li>
            </ul>
          </a>
          
          <!-- Cybrary -->
          <a href="https://www.cybrary.it/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10"><Icon name="shield" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-red-400">Cybrary</h3>
                <div class="text-sm text-slate-500">Video Courses</div>
              </div>
            </div>
            <p class="mb-4 text-slate-400">
              Free and premium video courses for certifications like Security+, 
              CISSP, CEH, and more. Structured learning paths.
            </p>
          </a>
          
          <!-- PentesterLab -->
          <a href="https://pentesterlab.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10"><Icon name="microscope" :size="32" /></div>
              <div>
                <h3 class="text-xl font-semibold text-white group-hover:text-red-400">PentesterLab</h3>
                <div class="text-sm text-slate-500">Web App Security</div>
              </div>
            </div>
            <p class="mb-4 text-slate-400">
              Focused on web application security with hands-on exercises. 
              Excellent for learning bug bounty and web pentesting skills.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="relative border-t border-red-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Industry Certifications</h2>
          <p class="mt-2 text-slate-400">
            Valuable credentials for cybersecurity careers
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <!-- OSCP -->
          <div class="rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 ring-1 ring-red-500/30">
            <div class="mb-3 text-xs font-medium text-red-400">PEN TESTING</div>
            <h3 class="mb-2 text-lg font-semibold text-white">OSCP</h3>
            <p class="mb-3 text-sm text-slate-400">
              Offensive Security Certified Professional. The gold standard for penetration testers. 
              24-hour practical exam.
            </p>
            <a href="https://www.offensive-security.com/pwk-oscp/" target="_blank" class="text-sm text-red-400 hover:underline">
              Learn More →
            </a>
          </div>
          
          <!-- Security+ -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-3 text-xs font-medium text-slate-400">ENTRY LEVEL</div>
            <h3 class="mb-2 text-lg font-semibold text-white">CompTIA Security+</h3>
            <p class="mb-3 text-sm text-slate-400">
              Foundational certification covering network security, compliance, threats, 
              and vulnerabilities. Great first cert.
            </p>
            <a href="https://www.comptia.org/certifications/security" target="_blank" class="text-sm text-slate-400 hover:text-white">
              Learn More →
            </a>
          </div>
          
          <!-- CISSP -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-3 text-xs font-medium text-slate-400">SENIOR LEVEL</div>
            <h3 class="mb-2 text-lg font-semibold text-white">CISSP</h3>
            <p class="mb-3 text-sm text-slate-400">
              Certified Information Systems Security Professional. Management-focused. 
              Requires 5 years experience.
            </p>
            <a href="https://www.isc2.org/Certifications/CISSP" target="_blank" class="text-sm text-slate-400 hover:text-white">
              Learn More →
            </a>
          </div>
          
          <!-- CEH -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-3 text-xs font-medium text-slate-400">PEN TESTING</div>
            <h3 class="mb-2 text-lg font-semibold text-white">CEH</h3>
            <p class="mb-3 text-sm text-slate-400">
              Certified Ethical Hacker. Multiple-choice exam on hacking tools and techniques. 
              Good for DoD compliance.
            </p>
          </div>
          
          <!-- eJPT -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-3 text-xs font-medium text-slate-400">ENTRY LEVEL</div>
            <h3 class="mb-2 text-lg font-semibold text-white">eJPT</h3>
            <p class="mb-3 text-sm text-slate-400">
              eLearnSecurity Junior Penetration Tester. Free training, affordable exam. 
              Great first hands-on cert.
            </p>
          </div>
          
          <!-- GPEN -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-slate-700">
            <div class="mb-3 text-xs font-medium text-slate-400">ADVANCED</div>
            <h3 class="mb-2 text-lg font-semibold text-white">GIAC GPEN</h3>
            <p class="mb-3 text-sm text-slate-400">
              Global Information Assurance Certification. Highly respected, 
              open-book exam, expensive but valuable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Domains -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Security Domains</h2>
          <p class="mt-2 text-slate-400">
            Different specializations in cybersecurity
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="target" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Penetration Testing</h3>
            <p class="text-sm text-slate-400 mb-3">
              Ethical hacking to find vulnerabilities. Web apps, networks, and systems.
            </p>
            <div class="text-xs text-slate-500">Tools: Burp Suite, Metasploit, Nmap</div>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="search" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">SOC Analyst</h3>
            <p class="text-sm text-slate-400 mb-3">
              Security operations center work. Monitoring, detection, and incident response.
            </p>
            <div class="text-xs text-slate-500">Tools: Splunk, ELK, Wireshark</div>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="building" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Security Engineering</h3>
            <p class="text-sm text-slate-400 mb-3">
              Building secure systems, architecture review, and security controls.
            </p>
            <div class="text-xs text-slate-500">Focus: Cloud, DevSecOps, Infrastructure</div>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="dollar-sign" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Bug Bounty</h3>
            <p class="text-sm text-slate-400 mb-3">
              Finding vulnerabilities in real companies and getting paid. HackerOne, Bugcrowd.
            </p>
            <div class="text-xs text-slate-500">Platforms: HackerOne, Bugcrowd, Intigriti</div>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="smartphone" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mobile Security</h3>
            <p class="text-sm text-slate-400 mb-3">
              iOS and Android application security testing and reverse engineering.
            </p>
            <div class="text-xs text-slate-500">Tools: Frida, MobSF, Objection</div>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <div class="mb-4"><Icon name="cloud" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Cloud Security</h3>
            <p class="text-sm text-slate-400 mb-3">
              AWS, Azure, and GCP security. Misconfigurations and cloud-native threats.
            </p>
            <div class="text-xs text-slate-500">Certs: CCSP, AWS Security Specialty</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-red-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Your Cybersecurity Journey
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Begin with TryHackMe's beginner path, get Security+, then work toward 
          OSCP. The field needs skilled defenders.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://tryhackme.com/"
            target="_blank"
            class="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-500"
          >
            Start on TryHackMe
          </a>
          <a 
            href="https://www.hackthebox.com/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Try Hack The Box
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('cybersecurity')

useHead({
  title: 'Cybersecurity - Ethical Hacking, Security Certifications | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn cybersecurity with 1,500+ resources. TryHackMe, Hack The Box, OSCP prep, Security+, CISSP, penetration testing, and SOC analyst training.' 
    }
  ]
})
</script>
