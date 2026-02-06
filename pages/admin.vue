<script setup lang="ts">
useHead({
  title: 'Admin Dashboard - Awesome Horizon'
})

const { user } = useAuth()

const stats = ref({
  totalResources: 1423,
  totalUsers: 892,
  totalCategories: 47,
  monthlyViews: 45231
})

const recentResources = ref([
  { id: '1', title: 'MIT OpenCourseWare', category: 'technology', addedAt: '2024-02-01', status: 'approved' },
  { id: '2', title: 'Khan Academy', category: 'science', addedAt: '2024-02-02', status: 'approved' },
  { id: '3', title: '3Blue1Brown', category: 'mathematics', addedAt: '2024-02-03', status: 'pending' },
  { id: '4', title: 'freeCodeCamp', category: 'technology', addedAt: '2024-02-04', status: 'approved' },
  { id: '5', title: 'PhET Simulations', category: 'science', addedAt: '2024-02-05', status: 'pending' }
])

const recentUsers = ref([
  { id: '1', name: 'John Doe', email: 'john@example.com', joinedAt: '2024-02-01', role: 'user' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', joinedAt: '2024-02-02', role: 'admin' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', joinedAt: '2024-02-03', role: 'user' }
])

const activityLog = ref([
  { id: '1', action: 'Resource added', details: 'MIT OpenCourseWare added to technology', timestamp: '2024-02-06 10:30' },
  { id: '2', action: 'User registered', details: 'john@example.com joined', timestamp: '2024-02-06 10:15' },
  { id: '3', action: 'Resource approved', details: 'Khan Academy approved', timestamp: '2024-02-06 09:45' },
  { id: '4', action: 'Settings updated', details: 'Cache settings modified', timestamp: '2024-02-06 09:00' }
])

const activeTab = ref('overview')
</script>

<template>
  <div class="min-h-screen bg-space-950 text-space-100">
    <header class="bg-space-900 border-b border-space-800 px-6 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Admin Dashboard</h1>
        <div class="flex items-center gap-4">
          <span class="text-gray-400">Welcome, {{ user?.name || 'Admin' }}</span>
          <NuxtLink to="/" class="px-4 py-2 bg-space-800 hover:bg-space-700 rounded-lg text-sm">
            View Site
          </NuxtLink>
        </div>
      </div>
    </header>

    <div class="flex">
      <aside class="w-64 border-r border-space-800 min-h-screen p-4">
        <nav class="space-y-2">
          <button
            v-for="tab in ['overview', 'resources', 'users', 'analytics', 'settings']"
            :key="tab"
            @click="activeTab = tab"
            class="w-full text-left px-4 py-2 rounded-lg capitalize transition-colors"
            :class="activeTab === tab ? 'bg-primary-500/20 text-primary-400' : 'hover:bg-space-800 text-gray-400'"
          >
            {{ tab }}
          </button>
        </nav>
      </aside>

      <main class="flex-1 p-6">
        <div v-if="activeTab === 'overview'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <div class="text-gray-400 text-sm mb-2">Total Resources</div>
              <div class="text-3xl font-bold text-white">{{ stats.totalResources.toLocaleString() }}</div>
            </div>
            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <div class="text-gray-400 text-sm mb-2">Total Users</div>
              <div class="text-3xl font-bold text-white">{{ stats.totalUsers.toLocaleString() }}</div>
            </div>
            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <div class="text-gray-400 text-sm mb-2">Categories</div>
              <div class="text-3xl font-bold text-white">{{ stats.totalCategories }}</div>
            </div>
            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <div class="text-gray-400 text-sm mb-2">Monthly Views</div>
              <div class="text-3xl font-bold text-white">{{ stats.monthlyViews.toLocaleString() }}</div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <h2 class="text-xl font-bold mb-4">Recent Resources</h2>
              <div class="space-y-3">
                <div v-for="resource in recentResources" :key="resource.id" class="flex items-center justify-between py-2 border-b border-space-800">
                  <div>
                    <div class="font-medium">{{ resource.title }}</div>
                    <div class="text-sm text-gray-500">{{ resource.category }}</div>
                  </div>
                  <span
                    class="px-2 py-1 rounded text-xs"
                    :class="resource.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'"
                  >
                    {{ resource.status }}
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-space-900 rounded-xl p-6 border border-space-800">
              <h2 class="text-xl font-bold mb-4">Activity Log</h2>
              <div class="space-y-3">
                <div v-for="activity in activityLog" :key="activity.id" class="flex items-start gap-3 py-2 border-b border-space-800">
                  <div class="w-2 h-2 mt-2 rounded-full bg-primary-500"></div>
                  <div>
                    <div class="font-medium">{{ activity.action }}</div>
                    <div class="text-sm text-gray-500">{{ activity.details }}</div>
                    <div class="text-xs text-gray-600">{{ activity.timestamp }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'resources'" class="bg-space-900 rounded-xl p-6 border border-space-800">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold">Manage Resources</h2>
            <button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-sm font-medium">
              Add Resource
            </button>
          </div>
          <table class="w-full">
            <thead>
              <tr class="text-left text-gray-400 text-sm border-b border-space-800">
                <th class="pb-3">Title</th>
                <th class="pb-3">Category</th>
                <th class="pb-3">Added</th>
                <th class="pb-3">Status</th>
                <th class="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="resource in recentResources" :key="resource.id" class="border-b border-space-800">
                <td class="py-3 font-medium">{{ resource.title }}</td>
                <td class="py-3 text-gray-400">{{ resource.category }}</td>
                <td class="py-3 text-gray-400">{{ resource.addedAt }}</td>
                <td class="py-3">
                  <span
                    class="px-2 py-1 rounded text-xs"
                    :class="resource.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'"
                  >
                    {{ resource.status }}
                  </span>
                </td>
                <td class="py-3">
                  <div class="flex gap-2">
                    <button class="text-primary-400 hover:text-primary-300 text-sm">Edit</button>
                    <button class="text-red-400 hover:text-red-300 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="activeTab === 'users'" class="bg-space-900 rounded-xl p-6 border border-space-800">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold">Manage Users</h2>
            <button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-sm font-medium">
              Add User
            </button>
          </div>
          <table class="w-full">
            <thead>
              <tr class="text-left text-gray-400 text-sm border-b border-space-800">
                <th class="pb-3">Name</th>
                <th class="pb-3">Email</th>
                <th class="pb-3">Joined</th>
                <th class="pb-3">Role</th>
                <th class="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in recentUsers" :key="u.id" class="border-b border-space-800">
                <td class="py-3 font-medium">{{ u.name }}</td>
                <td class="py-3 text-gray-400">{{ u.email }}</td>
                <td class="py-3 text-gray-400">{{ u.joinedAt }}</td>
                <td class="py-3">
                  <span
                    class="px-2 py-1 rounded text-xs"
                    :class="u.role === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'"
                  >
                    {{ u.role }}
                  </span>
                </td>
                <td class="py-3">
                  <div class="flex gap-2">
                    <button class="text-primary-400 hover:text-primary-300 text-sm">Edit</button>
                    <button class="text-red-400 hover:text-red-300 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="activeTab === 'analytics'" class="bg-space-900 rounded-xl p-6 border border-space-800">
          <h2 class="text-xl font-bold mb-6">Analytics</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-space-800 rounded-lg p-4">
              <div class="text-gray-400 text-sm mb-2">Page Views</div>
              <div class="text-2xl font-bold">45.2K</div>
              <div class="text-green-400 text-sm">+12% from last month</div>
            </div>
            <div class="bg-space-800 rounded-lg p-4">
              <div class="text-gray-400 text-sm mb-2">Unique Visitors</div>
              <div class="text-2xl font-bold">12.8K</div>
              <div class="text-green-400 text-sm">+8% from last month</div>
            </div>
            <div class="bg-space-800 rounded-lg p-4">
              <div class="text-gray-400 text-sm mb-2">Avg. Session</div>
              <div class="text-2xl font-bold">4m 32s</div>
              <div class="text-yellow-400 text-sm">-2% from last month</div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'settings'" class="bg-space-900 rounded-xl p-6 border border-space-800">
          <h2 class="text-xl font-bold mb-6">Settings</h2>
          <div class="space-y-6 max-w-2xl">
            <div>
              <label class="block text-gray-400 text-sm mb-2">Site Name</label>
              <input type="text" value="Awesome Horizon" class="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-lg focus:outline-none focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-2">Site URL</label>
              <input type="url" value="https://awesome-horizon.vercel.app" class="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-lg focus:outline-none focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-2">Maintenance Mode</label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 rounded bg-space-800 border-space-700" />
                <span>Enable maintenance mode</span>
              </label>
            </div>
            <button class="px-6 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
