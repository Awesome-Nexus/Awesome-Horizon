# Components

This folder contains all Vue components organized by category.

## Structure

```
components/
├── ui/           # Base UI components (buttons, cards, badges)
├── features/     # Feature-specific components (CategoryCard, ResourceCard)
├── shared/       # Shared/app-wide components (AppLogo, Navigation)
└── README.md     # This file
```

## Naming Conventions

- **PascalCase** for component names (e.g., `Button.vue`, `CategoryCard.vue`)
- Components are auto-imported by Nuxt - no manual imports needed

## Component Categories

### UI Components (`ui/`)
Low-level, reusable UI primitives:
- `Button.vue` - Button with variants (primary, secondary, outline, ghost)
- `Card.vue` - Card container with hover effects
- `Badge.vue` - Status badges with color variants
- `Section.vue` - Page section wrapper
- `Container.vue` - Max-width container
- `LoadingSpinner.vue` - Loading indicator
- `Icon.vue` - Icon component using Lucide icons

### Feature Components (`features/`)
Domain-specific components:
- `CategoryCard.vue` - STEAM category display card
- `ResourceCard.vue` - Resource link card
- `SubjectCard.vue` - Subject area card
- `LevelBadge.vue` - Learning level indicator
- `StatCard.vue` - Statistics display card
- `HeroSection.vue` - Hero section layout

### Shared Components (`shared/`)
App-wide shared components:
- `AppLogo.vue` - Application logo

## Usage Example

```vue
<template>
  <Container size="xl">
    <Section title="Resources" subtitle="Browse our collection">
      <div class="grid gap-4">
        <ResourceCard
          v-for="resource in resources"
          :key="resource.id"
          :title="resource.title"
          :url="resource.url"
          :type="resource.type"
        />
      </div>
    </Section>
  </Container>
</template>
```

## Props Patterns

### With Defaults
```ts
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})
```

### Required Props
```ts
interface Props {
  title: string
  url: string
}

defineProps<Props>()
```

## Style Patterns

- Use Tailwind CSS utility classes
- Follow the project's color system (space-*, primary-*)
- Use computed classes for conditional styling
- Keep styles scoped when component-specific
