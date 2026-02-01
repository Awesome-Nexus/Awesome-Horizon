<script setup lang="ts">
interface Props {
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Awesome Horizon Logo'
})
</script>

<template>
  <img
    src="/logo.svg"
    :alt="alt"
    class="h-full w-full object-contain"
  >
</template>
