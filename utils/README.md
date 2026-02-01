# Utils

This folder contains utility functions - pure helper functions without side effects.

Utilities in this directory are auto-imported by Nuxt and can be used anywhere without explicit import.

## Naming Convention

- Use camelCase for utility names
- Keep functions pure when possible

## Example

```ts
// utils/formatters.ts
export const formatResourceCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k+`
  }
  return `${count}+`
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
}
```

## Usage

```vue
<script setup>
const formatted = formatResourceCount(15000) // "15.0k+"
</script>
```
