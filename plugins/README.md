# Plugins

This folder contains Nuxt plugins for extending the application.

Plugins in this directory are auto-registered by Nuxt based on their filename.

## Naming Convention

- Use descriptive names (e.g., `vueuse.client.ts`, `analytics.ts`)
- Add `.client` suffix for client-only plugins
- Add `.server` suffix for server-only plugins

## Example

```ts
// plugins/scroll-behavior.client.ts
export default defineNuxtPlugin(() => {
  // Client-only scroll behavior enhancement
  window.addEventListener('scroll', () => {
    // Scroll logic
  })
})
```

## Plugin Structure

```ts
export default defineNuxtPlugin((nuxtApp) => {
  // Plugin logic
  nuxtApp.provide('helper', () => 'helpful!')
})
```

## Usage

```vue
<script setup>
const { $helper } = useNuxtApp()
</script>
```
