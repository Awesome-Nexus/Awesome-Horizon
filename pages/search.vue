<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

// SEO
useSEO({
  title: 'Search Resources',
  description: 'Search through 15,000+ curated STEAM learning resources. Find textbooks, courses, simulations, and more.',
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
  'Physics',
  'Chemistry',
  'Calculus',
  'Programming',
  'MIT OCW',
  'Khan Academy'
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
          Search Resources
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Search through 15,000+ curated STEAM learning resources
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

      <!-- Browse Categories -->
      <div v-if="!searchQuery || results.length === 0" class="mt-16">
        <h2 class="text-2xl font-bold text-white text-center mb-8">
          Browse by Category
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            v-for="category in categories.slice(1)"
            :key="category.value"
            :to="`/${category.value}`"
            variant="interactive"
            class="text-center p-6"
          >
            <div class="text-3xl mb-3">
              {{ 
                category.value === 'physics' ? '⚛️' :
                category.value === 'chemistry' ? '🧪' :
                category.value === 'biology' ? '🧬' :
                category.value === 'mathematics' ? '📐' :
                category.value === 'technology' ? '💻' :
                category.value === 'engineering' ? '⚙️' :
                category.value === 'arts' ? '🎨' : '📚'
              }}
            </div>
            <h3 class="font-semibold text-white">{{ category.name }}</h3>
          </Card>
        </div>
      </div>
    </Container>
  </div>
</template>
