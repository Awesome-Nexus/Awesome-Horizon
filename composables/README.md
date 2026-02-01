# Composables

This folder contains Vue composables - reusable stateful logic functions.

Composables in this directory are auto-imported by Nuxt and can be used in any Vue component without explicit import.

## Naming Convention

- Use camelCase for composable names
- Prefix with "use" (e.g., `useResources.ts`, `useSearch.ts`)

## Example

```ts
// composables/useResources.ts
export const useResources = () => {
  const resources = ref([])
  const loading = ref(false)
  
  const fetchResources = async (category: string) => {
    loading.value = true
    // Fetch logic here
    loading.value = false
  }
  
  return {
    resources,
    loading,
    fetchResources
  }
}
```

## Usage in Components

```vue
<script setup>
const { resources, loading, fetchResources } = useResources()
</script>
```
