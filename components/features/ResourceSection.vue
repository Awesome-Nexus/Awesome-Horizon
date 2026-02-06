<script setup lang="ts">
interface Resource {
  title: string
  url: string
  provider?: string
  author?: string
  type?: string
  desc?: string
  description?: string
  level?: string
  name?: string
}

interface Props {
  id?: string
  title: string
  subtitle?: string
  icon?: string
  iconColor?: string
  resources: Resource[]
  columns?: 2 | 3 | 4 | 5
  showType?: boolean
  showProvider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  columns: 4,
  icon: 'book',
  iconColor: 'blue',
  showType: true,
  showProvider: true
})

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-5'
}

const iconBgClasses: Record<string, string> = {
  blue: 'bg-blue-500/20',
  emerald: 'bg-emerald-500/20',
  purple: 'bg-purple-500/20',
  amber: 'bg-amber-500/20',
  rose: 'bg-rose-500/20',
  cyan: 'bg-cyan-500/20'
}

const iconColorClasses: Record<string, string> = {
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  cyan: 'text-cyan-400'
}
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-20"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center"
        :class="iconBgClasses[iconColor]"
      >
        <Icon
          :name="icon"
          :class="`w-6 h-6 ${iconColorClasses[iconColor] || ''}`"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold text-white">
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="text-gray-400"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>

    <!-- Resources Grid -->
    <div
      class="grid gap-4"
      :class="columnClasses[columns]"
    >
      <ResourceCard
        v-for="resource in resources"
        :key="resource.title || resource.name"
        :title="resource.title || resource.name || ''"
        :url="resource.url"
        :provider="resource.provider || resource.author"
        :description="resource.desc || resource.description"
        :type="showType ? resource.type : undefined"
        :level="showType ? resource.level : undefined"
      />
    </div>
  </section>
</template>
