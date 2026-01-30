<script setup lang="ts">
useHead({
  title: 'Arts - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master arts from K-12 to professional with 2000+ curated resources. Visual arts, digital art, music, design, art history, and creative tools.' }
  ]
})

const featuredResources = [
  { title: 'Khan Academy Arts', author: 'Khan Academy', url: 'https://www.khanacademy.org/humanities/art-history', desc: 'Art history and appreciation' },
  { title: 'Google Arts & Culture', author: 'Google', url: 'https://artsandculture.google.com/', desc: 'Virtual museum tours' },
  { title: 'Metropolitan Museum', author: 'Met', url: 'https://www.metmuseum.org/art/collection', desc: 'Open access collection' },
  { title: 'Smarthistory', author: 'Khan Academy', url: 'https://smarthistory.org/', desc: 'Art history essays' },
  { title: 'Adobe Creative Cloud', author: 'Adobe', url: 'https://www.adobe.com/creativecloud.html', desc: 'Professional design tools' },
  { title: 'Figma', author: 'Figma', url: 'https://www.figma.com/', desc: 'Collaborative design' }
]

const quickLinks = [
  { name: 'Art History', url: '#history', count: 150 },
  { name: 'Visual Arts', url: '#visual', count: 120 },
  { name: 'Digital Art', url: '#digital', count: 100 },
  { name: 'Music', url: '#music', count: 80 },
  { name: 'Design', url: '#design', count: 90 },
  { name: 'Tools', url: '#tools', count: 70 }
]

const artHistoryResources = [
  { title: 'Khan Academy Art History', url: 'https://www.khanacademy.org/humanities/art-history', provider: 'Khan Academy', type: 'Free Course' },
  { title: 'Smarthistory', url: 'https://smarthistory.org/', provider: 'Khan Academy', type: 'Essays' },
  { title: 'Heilbrunn Timeline', url: 'https://www.metmuseum.org/toah/', provider: 'Met Museum', type: 'Timeline' },
  { title: 'Art History Project', url: 'https://www.arthistoryproject.com/', provider: 'AH Project', type: 'Encyclopedia' },
  { title: 'Web Gallery of Art', url: 'https://www.wga.hu/', provider: 'WGA', type: 'Museum' },
  { title: 'WikiArt', url: 'https://www.wikiart.org/', provider: 'WikiArt', type: 'Encyclopedia' }
]

const visualArtsResources = [
  { name: 'Drawabox', url: 'https://drawabox.com/', desc: 'Drawing fundamentals' },
  { name: 'Proko', url: 'https://www.proko.com/', desc: 'Figure drawing' },
  { name: 'New Masters Academy', url: 'https://www.nma.art/', desc: 'Art education' },
  { name: 'Schoolism', url: 'https://www.schoolism.com/', desc: 'Digital art' },
  { name: 'Ctrl+Paint', url: 'https://www.ctrlpaint.com/', desc: 'Digital painting' }
]

const digitalArtResources = [
  { name: 'Blender', url: 'https://www.blender.org/', desc: '3D creation suite' },
  { name: 'Krita', url: 'https://krita.org/', desc: 'Digital painting' },
  { name: 'GIMP', url: 'https://www.gimp.org/', desc: 'Image editor' },
  { name: 'Inkscape', url: 'https://inkscape.org/', desc: 'Vector graphics' },
  { name: 'Photopea', url: 'https://www.photopea.com/', desc: 'Free Photoshop' }
]

const musicResources = [
  { name: 'Teoría', url: 'https://www.teoria.com/', desc: 'Music theory' },
  { name: 'Musictheory.net', url: 'https://www.musictheory.net/', desc: 'Lessons and exercises' },
  { name: 'Open Music Theory', url: 'https://openmusictheory.github.io/', desc: 'Open textbook' },
  { name: 'IMSLP', url: 'https://imslp.org/', desc: 'Free sheet music' },
  { name: 'Synthesizer Academy', url: 'https://synthesizeracademy.com/', desc: 'Synthesis' }
]

const designResources = [
  { name: 'Figma', url: 'https://www.figma.com/', desc: 'UI/UX design' },
  { name: 'Canva', url: 'https://www.canva.com/', desc: 'Graphic design' },
  { name: 'Dribbble', url: 'https://dribbble.com/', desc: 'Design inspiration' },
  { name: 'Behance', url: 'https://www.behance.net/', desc: 'Creative portfolio' },
  { name: 'Design Principles', url: 'https://principles.design/', desc: 'Design principles' }
]

const museumResources = [
  { name: 'Google Arts', url: 'https://artsandculture.google.com/', desc: 'Virtual museums' },
  { name: 'Louvre', url: 'https://www.louvre.fr/en', desc: 'Paris museum' },
  { name: 'British Museum', url: 'https://www.britishmuseum.org/', desc: 'London museum' },
  { name: 'MoMA', url: 'https://www.moma.org/', desc: 'Modern art' },
  { name: 'Rijksmuseum', url: 'https://www.rijksmuseum.nl/', desc: 'Dutch art' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-space-950 to-rose-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30 mb-6">
            <span class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-pink-300">2000+ Global Arts Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Arts
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master arts from K-12 to professional with 2000+ curated resources. Visual arts, digital art, music, design, art history, and creative tools.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-pink-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-pink-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-pink-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Art History -->
      <section id="history" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Art History</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in artHistoryResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-pink-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Visual Arts -->
      <section id="visual" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Visual Arts & Drawing</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in visualArtsResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-rose-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Digital Art -->
      <section id="digital" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Digital Art Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in digitalArtResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Music -->
      <section id="music" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Music & Theory</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in musicResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Design -->
      <section id="design" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Design</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in designResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Museums -->
      <section id="museums" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Virtual Museums</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in museumResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ r.name }}</h4>
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
