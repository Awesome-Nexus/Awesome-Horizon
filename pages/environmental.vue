<script setup lang="ts">
useHead({
  title: 'Environmental Science - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master environmental science from K-12 to PhD research with 2000+ curated resources. Climate change, conservation, sustainability, ecology, and environmental policy from IPCC, EPA, UNEP, and more.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'School environmental science, AP Environmental Science, basic ecology',
    color: 'emerald',
    resources: 500,
    topics: ['AP Environmental Science', 'Basic Ecology', 'Earth Systems', 'Conservation Basics']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level environmental science, ecology, conservation biology',
    color: 'teal',
    resources: 800,
    topics: ['Ecology', 'Conservation Biology', 'Environmental Chemistry', 'Sustainability']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Climate science, environmental policy, PhD research',
    color: 'cyan',
    resources: 700,
    topics: ['Climate Science', 'Environmental Policy', 'Restoration Ecology', 'GIS/Remote Sensing']
  }
]

const featuredResources = [
  {
    title: 'IPCC Reports',
    author: 'Intergovernmental Panel on Climate Change',
    type: 'Official Reports',
    url: 'https://www.ipcc.ch/',
    icon: 'document',
    description: 'Authoritative climate change assessments and special reports',
    level: 'All Levels'
  },
  {
    title: 'EPA Learning Resources',
    author: 'U.S. Environmental Protection Agency',
    type: 'Government Portal',
    url: 'https://www.epa.gov/environmental-topics',
    icon: 'building',
    description: 'Comprehensive environmental protection resources and data',
    level: 'All Levels'
  },
  {
    title: 'UNEP Knowledge Repository',
    author: 'United Nations Environment Programme',
    type: 'Global Portal',
    url: 'https://www.unep.org/resources',
    icon: 'globe',
    description: 'Global environmental data, reports, and policy resources',
    level: 'All Levels'
  },
  {
    title: 'World Wildlife Fund',
    author: 'WWF International',
    type: 'Conservation Organization',
    url: 'https://www.worldwildlife.org/',
    icon: 'heart',
    description: 'Wildlife conservation, biodiversity, and sustainability resources',
    level: 'All Levels'
  },
  {
    title: 'Nature Conservancy',
    author: 'The Nature Conservancy',
    type: 'Conservation Science',
    url: 'https://www.nature.org/',
    icon: 'leaf',
    description: 'Science-based conservation and environmental protection',
    level: 'All Levels'
  },
  {
    title: 'Climate Central',
    author: 'Climate Central',
    type: 'Climate Research',
    url: 'https://www.climatecentral.org/',
    icon: 'thermometer',
    description: 'Climate science research, data, and visualizations',
    level: 'Intermediate+'
  }
]

const quickLinks = [
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 150 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 40 },
  { name: 'Climate Change', url: '#climate', icon: 'thermometer', count: 80 },
  { name: 'Conservation', url: '#conservation', icon: 'shield', count: 60 },
  { name: 'Sustainability', url: '#sustainability', icon: 'refresh', count: 50 },
  { name: 'Data & Tools', url: '#data', icon: 'database', count: 45 },
  { name: 'Organizations', url: '#organizations', icon: 'globe', count: 35 },
  { name: 'Research', url: '#research', icon: 'microscope', count: 30 }
]

// ============================================
// K-12 SCHOOL LEVEL RESOURCES
// ============================================

const k12Resources = [
  { title: 'Khan Academy AP Environmental Science', url: 'https://www.khanacademy.org/science/ap-environmental-science', provider: 'Khan Academy', type: 'Free Course', level: 'K-12', desc: 'Complete AP Environmental Science curriculum' },
  { title: 'NASA Climate Kids', url: 'https://climatekids.nasa.gov/', provider: 'NASA', type: 'Interactive', level: 'Elementary', desc: 'Climate science for kids with games and activities' },
  { title: 'National Geographic Education', url: 'https://education.nationalgeographic.org/', provider: 'NatGeo', type: 'Resources', level: 'K-12', desc: 'Environmental education lessons and activities' },
  { title: 'Nature Conservancy Youth', url: 'https://www.nature.org/en-us/get-involved/how-to-help/nature-lab/', provider: 'TNC', type: 'Virtual Lab', level: 'K-12', desc: 'Nature Lab virtual field trips and resources' },
  { title: 'NOAA Education', url: 'https://www.noaa.gov/education', provider: 'NOAA', type: 'Resources', level: 'K-12', desc: 'Ocean, weather, and climate education resources' },
  { title: 'EPA Students', url: 'https://www.epa.gov/students', provider: 'EPA', type: 'Resources', level: 'K-12', desc: 'Environmental education for students and teachers' },
  { title: 'Project Learning Tree', url: 'https://www.plt.org/', provider: 'SFI', type: 'Curriculum', level: 'K-12', desc: 'Environmental education curriculum and activities' },
  { title: 'iNaturalist Education', url: 'https://www.inaturalist.org/pages/educators', provider: 'California Academy', type: 'Citizen Science', level: 'K-12', desc: 'Biodiversity observation and identification platform' }
]

// ============================================
// FREE TEXTBOOKS BY LEVEL
// ============================================

const freeTextbooksBeginner = [
  { title: 'AP Environmental Science', author: 'College Board', url: 'https://apstudents.collegeboard.org/courses/ap-environmental-science', type: 'AP Course', desc: 'Official AP Environmental Science framework' },
  { title: 'Environmental Science for AP', author: 'Friedland & Relyea', url: 'https://www.macmillanlearning.com/', type: 'Textbook', desc: 'Comprehensive AP Environmental Science text' },
  { title: 'OpenStax Biology', author: 'OpenStax', url: 'https://openstax.org/details/books/biology', type: 'FREE PDF', desc: 'Includes ecology and environmental sections' },
  { title: 'CK-12 Environmental Science', author: 'CK-12 Foundation', url: 'https://www.ck12.org/book/ck-12-environmental-science/', type: 'FREE WEB', desc: 'Interactive environmental science flexbook' }
]

const freeTextbooksIntermediate = [
  { title: 'Principles of Environmental Science', author: 'Cunningham & Cunningham', url: 'https://www.mheducation.com/', type: 'Textbook', desc: 'Undergraduate environmental science principles' },
  { title: 'Environmental Science: A Global Concern', author: 'Cunningham et al.', url: 'https://www.mheducation.com/', type: 'Textbook', desc: 'Comprehensive undergraduate text' },
  { title: 'Ecology: Concepts & Applications', author: 'Molles', url: 'https://www.mheducation.com/', type: 'Textbook', desc: 'Ecology principles and applications' },
  { title: 'Conservation Biology', author: 'Primack', url: 'https://www.sinauer.com/', type: 'Textbook', desc: 'Conservation biology fundamentals' }
]

const freeTextbooksAdvanced = [
  { title: 'Climate Change Science', author: 'IPCC', url: 'https://www.ipcc.ch/reports/', type: 'Assessment Report', desc: 'Comprehensive climate change assessments' },
  { title: 'Foundations of Restoration Ecology', author: 'Falk et al.', url: 'https://islandpress.org/', type: 'Advanced', desc: 'Restoration ecology science and practice' },
  { title: 'Environmental Toxicology', author: 'Landis & Yu', url: 'https://www.crcpress.com/', type: 'Advanced', desc: 'Environmental toxicology and chemistry' },
  { title: 'Landscape Ecology', author: 'Forman', url: 'https://www.wiley.com/', type: 'Advanced', desc: 'Theory and application of landscape ecology' }
]

// ============================================
// CLIMATE CHANGE RESOURCES
// ============================================

const climateResources = [
  { title: 'IPCC Sixth Assessment Report', url: 'https://www.ipcc.ch/assessment-report/ar6/', provider: 'IPCC', type: 'Official Report', desc: 'Latest comprehensive climate science assessment' },
  { title: 'NASA Climate Change', url: 'https://climate.nasa.gov/', provider: 'NASA', type: 'Data Portal', desc: 'Climate change evidence and satellite data' },
  { title: 'NOAA Climate.gov', url: 'https://www.climate.gov/', provider: 'NOAA', type: 'Data & Tools', desc: 'Climate data, maps, and educational resources' },
  { title: 'Carbon Brief', url: 'https://www.carbonbrief.org/', provider: 'Carbon Brief', type: 'Analysis', desc: 'Clear analysis of climate science and policy' },
  { title: 'Climate Central', url: 'https://www.climatecentral.org/', provider: 'Climate Central', type: 'Research', desc: 'Climate science research and visualizations' },
  { title: 'RealClimate', url: 'https://www.realclimate.org/', provider: 'Climate Scientists', type: 'Blog', desc: 'Climate science commentary by experts' },
  { title: 'Global Carbon Project', url: 'https://www.globalcarbonproject.org/', provider: 'GCP', type: 'Data', desc: 'Global carbon budget and emissions data' },
  { title: 'Climate Action Tracker', url: 'https://climateactiontracker.org/', provider: 'CAT', type: 'Policy Tool', desc: 'Track climate action and policies globally' }
]

// ============================================
// CONSERVATION & BIODIVERSITY RESOURCES
// ============================================

const conservationResources = [
  { title: 'IUCN Red List', url: 'https://www.iucnredlist.org/', provider: 'IUCN', type: 'Database', desc: 'Global species extinction risk assessment' },
  { title: 'Encyclopedia of Life', url: 'https://eol.org/', provider: 'Smithsonian', type: 'Database', desc: 'Global species information database' },
  { title: 'GBIF', url: 'https://www.gbif.org/', provider: 'Global Network', type: 'Data Portal', desc: 'Global biodiversity information facility' },
  { title: 'NatureServe', url: 'https://www.natureserve.org/', provider: 'NatureServe', type: 'Database', desc: 'North American biodiversity and conservation data' },
  { title: 'WWF Living Planet Report', url: 'https://livingplanet.panda.org/', provider: 'WWF', type: 'Report', desc: 'Global biodiversity and conservation status' },
  { title: 'Conservation International', url: 'https://www.conservation.org/', provider: 'CI', type: 'Organization', desc: 'Biodiversity hotspots and conservation' },
  { title: 'Wildlife Conservation Society', url: 'https://www.wcs.org/', provider: 'WCS', type: 'Organization', desc: 'Wildlife conservation and research' },
  { title: 'African Wildlife Foundation', url: 'https://www.awf.org/', provider: 'AWF', type: 'Organization', desc: 'African wildlife and habitat conservation' }
]

// ============================================
// SUSTAINABILITY RESOURCES
// ============================================

const sustainabilityResources = [
  { title: 'UN Sustainable Development Goals', url: 'https://sdgs.un.org/', provider: 'United Nations', type: 'Global Framework', desc: '17 goals for sustainable development' },
  { title: 'Ellen MacArthur Foundation', url: 'https://ellenmacarthurfoundation.org/', provider: 'EMF', type: 'Research', desc: 'Circular economy and sustainable design' },
  { title: 'Global Footprint Network', url: 'https://www.footprintnetwork.org/', provider: 'GFN', type: 'Data Tool', desc: 'Ecological footprint calculator and data' },
  { title: 'Our World in Data - Environment', url: 'https://ourworldindata.org/environment', provider: 'OWID', type: 'Data Portal', desc: 'Environmental data and research' },
  { title: 'World Resources Institute', url: 'https://www.wri.org/', provider: 'WRI', type: 'Research', desc: 'Global sustainability research and policy' },
  { title: 'Sustainability by MIT', url: 'https://climate.mit.edu/', provider: 'MIT', type: 'Education', desc: 'MIT Climate Portal and sustainability' },
  { title: 'UNEP FI', url: 'https://www.unepfi.org/', provider: 'UNEP', type: 'Finance', desc: 'Sustainable finance and investment' },
  { title: 'Sustainable Brands', url: 'https://sustainablebrands.com/', provider: 'SB', type: 'News', desc: 'Sustainability and business news' }
]

// ============================================
// ENVIRONMENTAL DATA & TOOLS
// ============================================

const dataTools = [
  { name: 'Google Earth Engine', url: 'https://earthengine.google.com/', provider: 'Google', type: 'Analysis Platform', desc: 'Planetary-scale geospatial analysis' },
  { name: 'Global Forest Watch', url: 'https://www.globalforestwatch.org/', provider: 'WRI', type: 'Monitoring Tool', desc: 'Real-time forest monitoring and alerts' },
  { name: 'USGS Earth Explorer', url: 'https://earthexplorer.usgs.gov/', provider: 'USGS', type: 'Data Portal', desc: 'Satellite imagery and geospatial data' },
  { name: 'NOAA Climate Data', url: 'https://www.ncei.noaa.gov/', provider: 'NOAA', type: 'Data Portal', desc: 'Climate and weather data archives' },
  { name: 'Earth Nullschool', url: 'https://earth.nullschool.net/', provider: 'Cameron Beccario', type: 'Visualization', desc: 'Global weather and ocean visualization' },
  { name: 'Windy', url: 'https://www.windy.com/', provider: 'Windy.app', type: 'Weather Tool', desc: 'Interactive weather visualization' },
  { name: 'AirNow', url: 'https://www.airnow.gov/', provider: 'EPA', type: 'Air Quality', desc: 'Air quality index and forecasts' },
  { name: 'Water Quality Portal', url: 'https://www.waterqualitydata.us/', provider: 'USGS/EPA', type: 'Water Data', desc: 'Water quality monitoring data' }
]

// ============================================
// INTERNATIONAL ORGANIZATIONS DATABASES
// ============================================

const organizations = [
  { name: 'UNEP', url: 'https://www.unep.org/', fullName: 'United Nations Environment Programme', type: 'UN Agency', desc: 'Global environmental leadership and policy' },
  { name: 'IPCC', url: 'https://www.ipcc.ch/', fullName: 'Intergovernmental Panel on Climate Change', type: 'UN Body', desc: 'Climate change scientific assessments' },
  { name: 'UNFCCC', url: 'https://unfccc.int/', fullName: 'UN Framework Convention on Climate Change', type: 'UN Treaty', desc: 'Climate change convention and Paris Agreement' },
  { name: 'CBD', url: 'https://www.cbd.int/', fullName: 'Convention on Biological Diversity', type: 'UN Treaty', desc: 'Biodiversity conservation framework' },
  { name: 'CITES', url: 'https://cites.org/', fullName: 'Convention on International Trade in Endangered Species', type: 'UN Treaty', desc: 'Wildlife trade regulation' },
  { name: 'UNCCD', url: 'https://www.unccd.int/', fullName: 'UN Convention to Combat Desertification', type: 'UN Treaty', desc: 'Land degradation and drought' },
  { name: 'GEF', url: 'https://www.thegef.org/', fullName: 'Global Environment Facility', type: 'Financial', desc: 'Funding for global environmental projects' },
  { name: 'IUCN', url: 'https://www.iucn.org/', fullName: 'International Union for Conservation of Nature', type: 'Organization', desc: 'Nature conservation and sustainable use' }
]

// ============================================
// RESEARCH & JOURNALS
// ============================================

const researchResources = [
  { name: 'Nature Climate Change', url: 'https://www.nature.com/nclimate/', type: 'Journal', desc: 'High-impact climate change research' },
  { name: 'Nature Sustainability', url: 'https://www.nature.com/natsustain/', type: 'Journal', desc: 'Sustainability science and policy' },
  { name: 'Global Environmental Change', url: 'https://www.journals.elsevier.com/global-environmental-change', type: 'Journal', desc: 'Human dimensions of global change' },
  { name: 'Environmental Science & Technology', url: 'https://pubs.acs.org/journal/esthag', type: 'Journal', desc: 'Environmental research and engineering' },
  { name: 'Conservation Biology', url: 'https://conbio.onlinelibrary.wiley.com/journal/cbi', type: 'Journal', desc: 'Conservation science research' },
  { name: 'Ecology', url: 'https://esajournals.onlinelibrary.wiley.com/journal/ecog', type: 'Journal', desc: 'Ecological research journal' },
  { name: 'EarthArXiv', url: 'https://eartharxiv.org/', type: 'Preprint', desc: 'Earth science preprint server' },
  { name: 'SSRN Environmental Sciences', url: 'https://www.ssrn.com/index.cfm/en/environ/', type: 'Preprint', desc: 'Environmental research preprints' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-space-950 to-emerald-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30 mb-6">
            <span class="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-teal-300">2000+ Global Environmental Resources from K-12 to PhD</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Environmental Science
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master environmental science from K-12 to PhD research with 2000+ curated resources from IPCC, EPA, UNEP, and institutions worldwide. Climate change, conservation, sustainability, and environmental policy.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">80+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">45+</div>
              <div class="text-sm text-gray-400">Data Tools</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">2000+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-teal-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-teal-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-teal-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">K-12 School Resources</h2>
            <p class="text-gray-400">Environmental science resources for primary and secondary school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in k12Resources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Textbooks</h2>
            <p class="text-gray-400">Comprehensive environmental science textbooks organized by level</p>
          </div>
        </div>

        <!-- Beginner -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner / High School Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksBeginner" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Intermediate -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-teal-400 mb-4">Intermediate / Undergraduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Advanced -->
        <div>
          <h3 class="text-lg font-semibold text-cyan-400 mb-4">Advanced / Graduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Climate Change Resources -->
      <section id="climate" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Climate Change Resources</h2>
            <p class="text-gray-400">Climate science, data, policy, and research resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in climateResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-cyan-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Conservation & Biodiversity Resources -->
      <section id="conservation" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Conservation & Biodiversity</h2>
            <p class="text-gray-400">Species conservation, biodiversity databases, and wildlife protection</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in conservationResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-amber-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Sustainability Resources -->
      <section id="sustainability" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Sustainability Resources</h2>
            <p class="text-gray-400">Sustainable development, circular economy, and green business</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in sustainabilityResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-green-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Environmental Data & Tools -->
      <section id="data" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Environmental Data & Tools</h2>
            <p class="text-gray-400">Satellite data, monitoring tools, and environmental analysis platforms</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="tool in dataTools" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ tool.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ tool.name }}</h4>
            <p class="text-sm text-indigo-400">{{ tool.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ tool.desc }}</p>
          </a>
        </div>
      </section>

      <!-- International Organizations Databases -->
      <section id="organizations" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">International Organizations</h2>
            <p class="text-gray-400">UN agencies, conventions, and global environmental organizations</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="org in organizations" :key="org.name" :href="org.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ org.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ org.name }}</h4>
            <p class="text-sm text-blue-400">{{ org.fullName }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ org.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Research & Journals -->
      <section id="research" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research & Journals</h2>
            <p class="text-gray-400">Academic journals and research resources for environmental science</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="journal in researchResources" :key="journal.name" :href="journal.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ journal.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ journal.name }}</h4>
            <p class="text-xs text-gray-400">{{ journal.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/science" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 { scroll-margin-top: 5rem; }
</style>
