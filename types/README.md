# Types

This folder contains TypeScript type definitions.

Types in this directory are auto-imported by Nuxt when declared in a `.d.ts` file.

## Naming Convention

- Use PascalCase for type names
- Use `.d.ts` for global type declarations
- Use `.ts` for exportable types

## Example

```ts
// types/resources.ts
export interface Resource {
  id: string
  title: string
  url: string
  description: string
  category: ResourceCategory
  level: 'beginner' | 'intermediate' | 'advanced'
}

export type ResourceCategory = 
  | 'physics' 
  | 'chemistry' 
  | 'biology' 
  | 'mathematics'
  | 'computer-science'
  | 'engineering'
  | 'arts'

export interface Subject {
  id: string
  name: string
  icon: string
  color: string
  resourceCount: number
}
```

## Usage

```vue
<script setup lang="ts">
const resource: Resource = {
  id: '1',
  title: 'MIT OCW Physics',
  // ...
}
</script>
```
