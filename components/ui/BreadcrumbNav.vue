<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  showHome?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showHome: true
})

const route = useRoute()
const { t } = useI18n()

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const crumbs: { name: string; path: string; current: boolean }[] = []

  if (props.showHome) {
    crumbs.push({
      name: t('home'),
      path: '/',
      current: paths.length === 0
    })
  }

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const isLast = index === paths.length - 1

    const nameMap: Record<string, string> = {
      science: t('science'),
      technology: t('technology'),
      engineering: t('engineering'),
      arts: t('arts'),
      mathematics: t('mathematics')
    }

    crumbs.push({
      name: nameMap[path] || path.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      path: currentPath,
      current: isLast
    })
  })

  return crumbs
})

const sizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base'
}
</script>

<template>
  <nav 
    class="flex items-center gap-2"
    :aria-label="`Breadcrumb navigation showing ${breadcrumbs.length} levels`"
  >
    <ol class="flex items-center gap-1" :class="sizeClasses[size]">
      <li 
        v-for="(crumb, index) in breadcrumbs" 
        :key="crumb.path"
        class="flex items-center gap-1"
      >
        <NuxtLink
          v-if="!crumb.current"
          :to="crumb.path"
          class="text-gray-400 hover:text-white transition-colors"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span 
          v-else 
          class="text-gray-300 font-medium"
          aria-current="page"
        >
          {{ crumb.name }}
        </span>

        <Icon 
          v-if="index < breadcrumbs.length - 1"
          name="chevron-right" 
          class="text-gray-600" 
          :size="size === 'sm' ? 12 : size === 'md' ? 14 : 16"
        />
      </li>
    </ol>
  </nav>
</template>
