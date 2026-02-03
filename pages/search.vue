<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

// SEO
useSEO({
  title: 'Search 140,000+ STEAM Learning Resources',
  description: 'Search through 140,000+ curated resources across 47 subjects. Find textbooks, courses, tutorials, and more for Science, Technology, Engineering, Arts, and Mathematics.',
  type: 'website'
})

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Search', url: '/search' }
])

// Search state
const searchQuery = ref('')
const isSearching = ref(false)
const results = ref<any[]>([])

// Debounced search
const performSearch = useDebounceFn(async (query: string) => {
  if (!query.trim() || query.length < 2) {
    results.value = []
    isSearching.value = false
    return
  }

  isSearching.value = true
  
  try {
    // Search in content collection
    const contentResults = await queryCollection('content')
      .where('title', 'LIKE', `%${query}%`)
      .orWhere('description', 'LIKE', `%${query}%`)
      .limit(20)
      .all()
    
    results.value = contentResults
  } catch (error) {
    console.error('Search error:', error)
    results.value = []
  } finally {
    isSearching.value = false
  }
}, 300)

// Watch for query changes
watch(searchQuery, (newQuery) => {
  performSearch(newQuery)
})

// Popular searches
const popularSearches = [
  'Computer Science',
  'Calculus',
  'Physics',
  'AI & Machine Learning',
  'Mechanical Engineering',
  'Web Development',
  'MIT OCW',
  '3Blue1Brown',
  'Khan Academy',
  'Linear Algebra'
]

// Subject quick links for all 47 subjects
const subjectQuickLinks = [
  // Technology
  { name: 'CS', icon: 'cpu', slug: 'technology/computer-science' },
  { name: 'AI/ML', icon: 'brain', slug: 'technology/artificial-intelligence' },
  { name: 'Cyber', icon: 'shield', slug: 'technology/cybersecurity' },
  { name: 'Web Dev', icon: 'globe', slug: 'technology/web-development' },
  // Engineering
  { name: 'Mech', icon: 'cog', slug: 'engineering/mechanical' },
  { name: 'Elec', icon: 'zap', slug: 'engineering/electrical' },
  { name: 'Civil', icon: 'building2', slug: 'engineering/civil' },
  // Arts
  { name: 'Art', icon: 'palette', slug: 'arts/visual-arts' },
  { name: 'Music', icon: 'music', slug: 'arts/music' },
  { name: 'Design', icon: 'pentool', slug: 'arts/graphic-design' },
  // Math
  { name: 'Calc', icon: 'trendingup', slug: 'mathematics/calculus' },
  { name: 'LA', icon: 'grid3x3', slug: 'mathematics/linear-algebra' },
  { name: 'Stats', icon: 'piechart', slug: 'mathematics/statistics-probability' },
  // Science
  { name: 'Physics', icon: 'atom', slug: 'physics' },
  { name: 'Chem', icon: 'flask', slug: 'chemistry' },
  { name: 'Bio', icon: 'dna', slug: 'biology' },
]

// Categories for filtering
const categories = [
  { name: 'All', value: 'all' },
  { name: 'Physics', value: 'physics' },
  { name: 'Chemistry', value: 'chemistry' },
  { name: 'Biology', value: 'biology' },
  { name: 'Mathematics', value: 'mathematics' },
  { name: 'Technology', value: 'technology' },
  { name: 'Engineering', value: 'engineering' },
  { name: 'Arts', value: 'arts' }
]

const selectedCategory = ref('all')

// Clear search
const clearSearch = () => {
  searchQuery.value = ''
  results.value = []
}
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <Container size="lg" class="py-16">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <NuxtLink to="/" class="hover:text-white transition-colors">
          Home
        </NuxtLink>
        <Icon name="arrow-right" class="w-4 h-4" />
        <span class="text-white">Search</span>
      </nav>

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Search 140,000+ Resources
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Search across 47 subjects including Computer Science, Engineering, Arts, and Mathematics
        </p>
      </div>

      <!-- Search Input -->
      <div class="max-w-2xl mx-auto mb-8">
        <div class="relative">
          <Icon 
            name="search" 
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for resources, courses, textbooks..."
            class="w-full pl-12 pr-12 py-4 bg-space-900 border border-space-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          >
          <button
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <Icon name="close" class="w-5 h-5" />
          </button>
        </div>

        <!-- Popular Searches -->
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <span class="text-sm text-gray-500">Popular:</span>
          <button
            v-for="term in popularSearches"
            :key="term"
            @click="searchQuery = term"
            class="px-3 py-1 text-sm bg-space-800 hover:bg-space-700 text-gray-300 hover:text-white rounded-full transition-colors"
          >
            {{ term }}
          </button>
        </div>

        <!-- Quick Subject Links -->
        <div class="mt-6 pt-6 border-t border-space-800">
          <p class="text-sm text-gray-500 mb-3">Jump to subject:</p>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              v-for="subject in subjectQuickLinks"
              :key="subject.slug"
              :to="`/${subject.slug}`"
              class="flex items-center gap-1.5 px-3 py-1.5 bg-space-800 hover:bg-space-700 border border-space-700 hover:border-primary-500/30 rounded-lg transition-colors"
            >
              <Icon :name="subject.icon" class="w-4 h-4 text-gray-400" />
              <span class="text-sm text-gray-300">{{ subject.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="selectedCategory = category.value"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all"
          :class="selectedCategory === category.value 
            ? 'bg-primary-500 text-white' 
            : 'bg-space-800 text-gray-400 hover:bg-space-700 hover:text-white'"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Results -->
      <div class="max-w-4xl mx-auto">
        <!-- Loading State -->
        <div v-if="isSearching" class="text-center py-12">
          <LoadingSpinner size="lg" />
          <p class="text-gray-400 mt-4">Searching...</p>
        </div>

        <!-- Empty State - No Query -->
        <div v-else-if="!searchQuery" class="text-center py-16">
          <div class="w-24 h-24 bg-space-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="search" class="w-12 h-12 text-gray-500" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            Start Searching
          </h3>
          <p class="text-gray-400">
            Type at least 2 characters to search through our resources
          </p>
        </div>

        <!-- Empty State - No Results -->
        <div v-else-if="searchQuery.length >= 2 && results.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-space-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="close" class="w-12 h-12 text-gray-500" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            No Results Found
          </h3>
          <p class="text-gray-400 mb-4">
            We couldn't find any resources matching "{{ searchQuery }}"
          </p>
          <Button @click="clearSearch" variant="secondary">
            Clear Search
          </Button>
        </div>

        <!-- Results List -->
        <div v-else-if="results.length > 0" class="space-y-4">
          <div class="flex items-center justify-between mb-6">
            <p class="text-gray-400">
              Found {{ results.length }} result{{ results.length !== 1 ? 's' : '' }} for "{{ searchQuery }}"
            </p>
          </div>

          <div class="grid gap-4">
            <Card
              v-for="result in results"
              :key="result._path"
              variant="hover"
              :to="result._path"
              class="flex items-start gap-4"
            >
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <Badge 
                    v-if="result.category" 
                    :variant="getCategoryColor(result.category) as any"
                    size="sm"
                  >
                    {{ result.category }}
                  </Badge>
                </div>
                <h3 class="text-lg font-semibold text-white mb-1">
                  {{ result.title }}
                </h3>
                <p class="text-gray-400 text-sm">
                  {{ result.description }}
                </p>
              </div>
              <Icon name="arrow-right" class="w-5 h-5 text-gray-500 flex-shrink-0" />
            </Card>
          </div>
        </div>
      </div>

      <!-- Browse by Category -->
      <div v-if="!searchQuery || results.length === 0" class="mt-16">
        <h2 class="text-2xl font-bold text-white text-center mb-8">
          Browse 47 Subjects
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card
            to="/science"
            variant="interactive"
            class="text-center p-6"
          >
            <Icon name="microscope" class="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <h3 class="font-semibold text-white">Science</h3>
            <p class="text-xs text-gray-500 mt-1">7 subjects</p>
          </Card>
          <Card
            to="/technology"
            variant="interactive"
            class="text-center p-6"
          >
            <Icon name="cpu" class="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <h3 class="font-semibold text-white">Technology</h3>
            <p class="text-xs text-gray-500 mt-1">10 subjects</p>
          </Card>
          <Card
            to="/engineering"
            variant="interactive"
            class="text-center p-6"
          >
            <Icon name="cog" class="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <h3 class="font-semibold text-white">Engineering</h3>
            <p class="text-xs text-gray-500 mt-1">10 subjects</p>
          </Card>
          <Card
            to="/arts"
            variant="interactive"
            class="text-center p-6"
          >
            <Icon name="palette" class="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <h3 class="font-semibold text-white">Arts</h3>
            <p class="text-xs text-gray-500 mt-1">10 subjects</p>
          </Card>
          <Card
            to="/mathematics"
            variant="interactive"
            class="text-center p-6"
          >
            <Icon name="triangle" class="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <h3 class="font-semibold text-white">Mathematics</h3>
            <p class="text-xs text-gray-500 mt-1">10 subjects</p>
          </Card>
        </div>

        <!-- Featured Subjects -->
        <div class="mt-12">
          <h3 class="text-lg font-semibold text-white text-center mb-6">Featured Subjects</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <NuxtLink to="/technology/computer-science" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-blue-500/50 rounded-lg transition-all text-center">
              <Icon name="cpu" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">Computer Science</div>
            </NuxtLink>
            <NuxtLink to="/technology/artificial-intelligence" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-purple-500/50 rounded-lg transition-all text-center">
              <Icon name="brain" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">AI & ML</div>
            </NuxtLink>
            <NuxtLink to="/mathematics/calculus" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-violet-500/50 rounded-lg transition-all text-center">
              <Icon name="trendingup" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">Calculus</div>
            </NuxtLink>
            <NuxtLink to="/mathematics/linear-algebra" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-purple-500/50 rounded-lg transition-all text-center">
              <Icon name="grid3x3" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">Linear Algebra</div>
            </NuxtLink>
            <NuxtLink to="/engineering/mechanical" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-orange-500/50 rounded-lg transition-all text-center">
              <Icon name="cog" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">Mechanical</div>
            </NuxtLink>
            <NuxtLink to="/arts/visual-arts" class="p-4 bg-space-800/50 hover:bg-space-800 border border-space-700 hover:border-pink-500/50 rounded-lg transition-all text-center">
              <Icon name="palette" class="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div class="text-sm text-white">Visual Arts</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
