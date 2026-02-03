<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-amber-950 via-space-900 to-yellow-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-300 ring-1 ring-amber-500/30">
            <Icon name="link" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Blockchain
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Learn distributed ledger technology, smart contracts, and Web3 development. 
            Build decentralized applications on Ethereum and other chains.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">800+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">Advanced</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">Ethereum</div>
              <div class="text-xs text-slate-400">Primary Chain</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-amber-500/20">
              <div class="text-2xl font-bold text-amber-400">Solidity</div>
              <div class="text-xs text-slate-400">Language</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Resources -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Blockchain Development</h2>
          <p class="mt-2 text-slate-400">
            Resources for learning Web3 and smart contract development
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-6 ring-1 ring-amber-500/30">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="book" :size="32" />
              <h3 class="text-xl font-semibold text-white">CryptoZombies</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Interactive Solidity tutorial. Learn to build Ethereum DApps by making 
              a zombie game. Perfect for beginners.
            </p>
            <a href="https://cryptozombies.io/" target="_blank" class="text-sm text-amber-400 hover:underline">
              Start Learning →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="book-open" :size="32" />
              <h3 class="text-xl font-semibold text-white">OpenZeppelin</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Standard for secure smart contract development. Libraries, docs, and 
              security best practices.
            </p>
            <a href="https://docs.openzeppelin.com/" target="_blank" class="text-sm text-amber-400 hover:underline">
              Documentation →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="wrench" :size="32" />
              <h3 class="text-xl font-semibold text-white">Hardhat</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Ethereum development environment. Compile, test, and deploy smart contracts.
            </p>
            <a href="https://hardhat.org/tutorial" target="_blank" class="text-sm text-amber-400 hover:underline">
              Tutorial →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-amber-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="globe" :size="32" />
              <h3 class="text-xl font-semibold text-white">Ethereum.org</h3>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Official Ethereum developer resources. Documentation, tutorials, and guides.
            </p>
            <a href="https://ethereum.org/en/developers/" target="_blank" class="text-sm text-amber-400 hover:underline">
              Developer Portal →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-amber-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Enter the World of Web3
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Start with CryptoZombies to learn Solidity basics. Understand blockchain 
          fundamentals before diving into smart contract development.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://cryptozombies.io/"
            target="_blank"
            class="rounded-lg bg-amber-600 px-6 py-3 font-medium text-white transition-colors hover:bg-amber-500"
          >
            Try CryptoZombies
          </a>
          <a 
            href="https://ethereum.org/en/developers/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Ethereum Developers
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('blockchain')

useHead({
  title: 'Blockchain - Ethereum, Solidity, Web3 | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn blockchain development with 800+ resources. Ethereum, Solidity smart contracts, Web3.js, DeFi, and decentralized applications.' 
    }
  ]
})
</script>
