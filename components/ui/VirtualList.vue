<script setup lang="ts">
interface Props {
  items: any[]
  itemHeight: number
  overscan?: number
}

const props = withDefaults(defineProps<Props>(), {
  overscan: 5
})

const containerRef = ref<HTMLElement>()
const scrollTop = ref(0)
const containerHeight = ref(0)

// Calculate visible range
const startIndex = computed(() => {
  return Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - props.overscan)
})

const endIndex = computed(() => {
  if (!containerHeight.value) return props.items.length
  return Math.min(
    props.items.length,
    Math.ceil((scrollTop.value + containerHeight.value) / props.itemHeight) + props.overscan
  )
})

const visibleItems = computed(() => {
  return props.items.slice(startIndex.value, endIndex.value).map((item, index) => ({
    ...item,
    _index: startIndex.value + index
  }))
})

const totalHeight = computed(() => props.items.length * props.itemHeight)
const offsetY = computed(() => startIndex.value * props.itemHeight)

// Handle scroll
const handleScroll = () => {
  if (!containerRef.value) return
  scrollTop.value = containerRef.value.scrollTop
}

// Update container height
onMounted(() => {
  if (!containerRef.value) return
  const resizeObserver = new ResizeObserver((entries) => {
    containerHeight.value = entries[0].contentRect.height
  })
  resizeObserver.observe(containerRef.value)
  containerHeight.value = containerRef.value.clientHeight
})
</script>

<template>
  <div
    ref="containerRef"
    class="overflow-auto"
    @scroll="handleScroll"
  >
    <div :style="{ height: `${totalHeight}px`, position: 'relative' }">
      <div
        :style="{ transform: `translateY(${offsetY}px)` }"
      >
        <div
          v-for="item in visibleItems"
          :key="item._index"
          :style="{ height: `${itemHeight}px` }"
        >
          <slot
            :item="item"
            :index="item._index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
