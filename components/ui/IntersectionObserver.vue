<script setup lang="ts">
interface Props {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.1,
  once: true
})

const emit = defineEmits<{
  visible: []
  hidden: []
}>()

const targetRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  if (!targetRef.value) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          emit('visible')
          if (props.once) {
            observer.unobserve(entry.target)
          }
        } else if (!props.once) {
          isVisible.value = false
          emit('hidden')
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )
  
  observer.observe(targetRef.value)
  
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div ref="targetRef">
    <slot :is-visible="isVisible" />
  </div>
</template>
