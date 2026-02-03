<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-sky-950 via-space-900 to-blue-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sky-300 ring-1 ring-sky-500/30">
            <Icon name="globe" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Web Development
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Build websites and web applications from scratch. Master HTML, CSS, JavaScript, 
            modern frameworks, and full-stack development.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">2,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">Beginner</div>
              <div class="text-xs text-slate-400">Friendly</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">freeCodeCamp</div>
              <div class="text-xs text-slate-400">Top Resource</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-sky-500/20">
              <div class="text-2xl font-bold text-sky-400">MERN/PERN</div>
              <div class="text-xs text-slate-400">Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frontend Path -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Frontend Development</h2>
          <p class="mt-2 text-slate-400">
            What users see and interact with
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="file-code" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">HTML & CSS</h3>
            <p class="text-sm text-slate-400 mb-3">
              The foundation. Structure with HTML, style with CSS. Responsive design, flexbox, grid.
            </p>
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" class="text-sm text-sky-400 hover:underline">
              freeCodeCamp Responsive Design →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="zap" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">JavaScript</h3>
            <p class="text-sm text-slate-400 mb-3">
              Make websites interactive. DOM manipulation, async programming, ES6+ features.
            </p>
            <a href="https://javascript.info/" target="_blank" class="text-sm text-sky-400 hover:underline">
              The Modern JavaScript Tutorial →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="atom" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">React</h3>
            <p class="text-sm text-slate-400 mb-3">
              Most popular frontend framework. Components, hooks, state management.
            </p>
            <a href="https://react.dev/learn" target="_blank" class="text-sm text-sky-400 hover:underline">
              Official React Tutorial →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Backend Path -->
    <section class="relative border-t border-sky-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Backend Development</h2>
          <p class="mt-2 text-slate-400">
            Server-side logic, databases, and APIs
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="server" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Node.js</h3>
            <p class="text-sm text-slate-400">
              JavaScript on the server. Express.js framework for building APIs.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="code" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Python / Django</h3>
            <p class="text-sm text-slate-400">
              Django and Flask for Python backend. Great for data-heavy applications.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20">
            <div class="mb-4"><Icon name="database" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Databases</h3>
            <p class="text-sm text-slate-400">
              PostgreSQL, MongoDB. Data modeling, queries, and optimization.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Resources -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Top Learning Resources</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://www.theodinproject.com/" target="_blank" class="group rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-6 ring-1 ring-sky-500/30 transition-all hover:ring-sky-500/50">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">The Odin Project</h3>
            <p class="text-slate-300">
              Free full-stack curriculum. JavaScript or Ruby on Rails paths. 
              Project-based learning with portfolio building.
            </p>
          </a>
          
          <a href="https://www.freecodecamp.org/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">freeCodeCamp</h3>
            <p class="text-slate-400">
              Comprehensive curriculum from HTML to full-stack. Certifications 
              and thousands of tutorials.
            </p>
          </a>
          
          <a href="https://developer.mozilla.org/en-US/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">MDN Web Docs</h3>
            <p class="text-slate-400">
              The bible of web development. Comprehensive documentation for HTML, 
              CSS, and JavaScript from Mozilla.
            </p>
          </a>
          
          <a href="https://fullstackopen.com/en/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-sky-500/20 transition-all hover:bg-space-800">
            <h3 class="mb-2 text-xl font-semibold text-white group-hover:text-sky-400">Full Stack Open</h3>
            <p class="text-slate-400">
              University of Helsinki's free full-stack course. React, Node.js, 
              GraphQL, TypeScript, and testing.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-sky-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Building Websites Today
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Web development is one of the most accessible tech careers. 
          Start with HTML/CSS, add JavaScript, then pick a framework.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.freecodecamp.org/learn/responsive-web-design/"
            target="_blank"
            class="rounded-lg bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-500"
          >
            Learn HTML & CSS
          </a>
          <a 
            href="https://www.theodinproject.com/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Full Stack Path
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('web-development')

useHead({
  title: 'Web Development - HTML, CSS, JavaScript, React | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Learn web development with 2,500+ resources. freeCodeCamp, The Odin Project, React, Node.js, full-stack tutorials and projects.' 
    }
  ]
})
</script>
