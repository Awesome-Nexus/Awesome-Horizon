<script setup lang="ts">
interface Props {
  title: string
  description?: string
  url?: string
  hashtags?: string[]
  via?: string
  size?: 'sm' | 'md' | 'lg'
  showLabels?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showLabels: true
})

const config = useRuntimeConfig()
const route = useRoute()

const shareUrl = computed(() => props.url || `${config.public.siteUrl}${route.path}`)
const encodedUrl = computed(() => encodeURIComponent(shareUrl.value))
const encodedTitle = computed(() => encodeURIComponent(props.title))
const encodedDescription = computed(() => encodeURIComponent(props.description || ''))

const shareLinks = computed(() => [
  {
    name: 'Twitter',
    icon: 'Twitter',
    color: 'bg-sky-500 hover:bg-sky-600',
    url: `https://twitter.com/intent/tweet?text=${encodedTitle.value}&url=${encodedUrl.value}${props.hashtags?.length ? `&hashtags=${props.hashtags.join(',')}` : ''}${props.via ? `&via=${props.via}` : ''}`,
    label: 'Share on Twitter'
  },
  {
    name: 'Facebook',
    icon: 'Facebook',
    color: 'bg-blue-600 hover:bg-blue-700',
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
    label: 'Share on Facebook'
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    color: 'bg-blue-700 hover:bg-blue-800',
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`,
    label: 'Share on LinkedIn'
  },
  {
    name: 'Reddit',
    icon: 'Reddit',
    color: 'bg-orange-500 hover:bg-orange-600',
    url: `https://reddit.com/submit?url=${encodedUrl.value}&title=${encodedTitle.value}`,
    label: 'Share on Reddit'
  },
  {
    name: 'WhatsApp',
    icon: 'MessageCircle',
    color: 'bg-green-500 hover:bg-green-600',
    url: `https://wa.me/?text=${encodedTitle.value}%20${encodedUrl.value}`,
    label: 'Share on WhatsApp'
  },
  {
    name: 'Email',
    icon: 'Mail',
    color: 'bg-gray-600 hover:bg-gray-700',
    url: `mailto:?subject=${encodedTitle.value}&body=${encodedDescription.value}%0A%0A${encodedUrl.value}`,
    label: 'Share via Email'
  }
])

const sizeClasses = {
  sm: 'p-2 gap-1 text-xs',
  md: 'p-3 gap-2 text-sm',
  lg: 'p-4 gap-3 text-base'
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2" role="list" :aria-label="`Share: ${title}`">
    <a
      v-for="link in shareLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.label"
      class="inline-flex items-center justify-center rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-space-900 focus:ring-primary-500"
      :class="[link.color, sizeClasses[size]]"
    >
      <Icon :name="link.icon" :class="iconSizes[size]" />
      <span v-if="showLabels && size !== 'sm'" class="font-medium">{{ link.name }}</span>
    </a>

    <button
      @click="copyToClipboard"
      class="inline-flex items-center justify-center rounded-lg bg-space-700 hover:bg-space-600 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-space-900 focus:ring-primary-500"
      :class="sizeClasses[size]"
      aria-label="Copy link to clipboard"
    >
      <Icon :name="size === 'sm' ? 'link' : 'link'" :class="iconSizes[size]" />
      <span v-if="showLabels && size !== 'sm'" class="font-medium">Copy</span>
    </button>
  </div>
</template>
