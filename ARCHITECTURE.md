# Awesome Horizon - Architecture Documentation

## Overview

Awesome Horizon is a Nuxt 3-based educational resource platform providing curated STEAM (Science, Technology, Engineering, Arts, Mathematics) learning materials.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Nuxt 3 (Vue 3) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Nuxt Content (MDC) |
| Icons | Lucide Vue |
| Testing | Vitest + Vue Test Utils |
| Deployment | Vercel |

## Project Structure

```
Awesome-Horizon/
├── .nuxt/                    # Nuxt build output
├── .output/                  # Production build
├── assets/                   # Static assets (CSS, fonts)
├── components/               # Vue components
│   ├── features/            # Feature-specific components
│   ├── shared/              # Shared/app-wide components
│   └── ui/                  # Base UI components
├── composables/             # Vue composables
├── content/                 # Markdown content
│   └── subjects/           # Subject-specific content
├── docs/                    # Project documentation
├── layouts/                 # Nuxt layouts
├── middleware/              # Route middleware
├── pages/                   # Application pages
├── plugins/                 # Nuxt plugins
├── public/                  # Static public files
├── resources/               # Resource markdown files
├── server/                  # Nitro server
│   ├── api/                # API routes
│   └── routes/             # Custom routes
├── tests/                   # Test files
├── types/                   # TypeScript types
└── utils/                   # Utility functions
```

## Architecture Decisions

### Component Architecture

Components are organized in three tiers:

1. **UI Components** (`components/ui/`)
   - Low-level, reusable primitives
   - Examples: Button, Card, Badge, Section
   - No business logic, purely presentational

2. **Feature Components** (`components/features/`)
   - Domain-specific components
   - Examples: ResourceCard, SubjectCard, HeroSection
   - May contain business logic specific to features

3. **Shared Components** (`components/shared/`)
   - App-wide shared components
   - Examples: AppLogo, Navigation
   - Used across multiple pages/features

### Composables Pattern

Composables follow Vue 3 best practices:

```ts
// Example: useResources.ts
export const useResources = (options: UseResourcesOptions = {}) => {
  const resources = ref<Resource[]>([])
  const loading = ref(false)
  
  const fetchResources = async () => {
    // Implementation
  }
  
  return {
    resources: readonly(resources),
    loading: readonly(readonly),
    fetchResources
  }
}
```

Key principles:
- Return readonly refs to prevent external mutations
- Use explicit return types for better IDE support
- Handle loading and error states consistently

### Content Management

Content is managed through:

1. **Nuxt Content** (`content/` folder)
   - Markdown files with frontmatter
   - Dynamic rendering with ContentDoc
   - Query with `queryCollection()`

2. **Static Resources** (`resources/` folder)
   - Reference material markdown files
   - Not rendered as pages

### State Management

No global state management library is used. State is managed through:

- Composables for shared state
- Props/Events for component communication
- URL state for page-specific filters

### Routing

Routes are file-based following Nuxt conventions:

```
pages/
├── index.vue              # /
├── about.vue              # /about
├── science.vue            # /science
├── physics.vue            # /physics
├── subjects/
│   └── [slug].vue         # /subjects/:slug
└── ...
```

### SEO Strategy

SEO is handled through:

1. **Meta Tags** - `useSEO()` composable
2. **Structured Data** - JSON-LD schemas
3. **Sitemap** - Auto-generated at `/sitemap.xml`
4. **Robots.txt** - Auto-generated at `/robots.txt`

### Performance Optimizations

1. **Lazy Loading**
   - Images with LazyImage component
   - Routes with dynamic imports
   - Components with IntersectionObserver

2. **Caching**
   - Static assets cached for 1 year
   - Service Worker for offline support
   - Nitro route rules for optimal caching

3. **Code Splitting**
   - Automatic by Nuxt/Vite
   - Component-level splitting

### Testing Strategy

```
tests/
├── components/             # Component tests
├── composables/           # Composable tests
└── utils/                 # Utility tests
```

- **Unit Tests**: Vitest for utilities and composables
- **Component Tests**: Vue Test Utils for components
- **E2E Tests**: (Future) Playwright for critical paths

## Data Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Content   │────▶│   Pages     │────▶│ Components  │
│   (MD)      │     │   (Vue)     │     │   (Vue)     │
└─────────────┘     └─────────────┘     └─────────────┘
                            │                   │
                            ▼                   ▼
                     ┌─────────────┐     ┌─────────────┐
                     │ Composables │     │    Utils    │
                     │  (Logic)    │     │  (Helpers)  │
                     └─────────────┘     └─────────────┘
```

## Key Files

### Configuration

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Nuxt configuration |
| `tailwind.config.ts` | Tailwind CSS theme |
| `vitest.config.ts` | Test configuration |
| `tsconfig.json` | TypeScript settings |

### Entry Points

| File | Purpose |
|------|---------|
| `app.vue` | Root Vue component |
| `layouts/default.vue` | Default layout |
| `pages/index.vue` | Home page |

### Composables

| Composable | Purpose |
|------------|---------|
| `useSEO.ts` | SEO meta management |
| `useResources.ts` | Resource data fetching |
| `useNavigation.ts` | Navigation state |
| `useSubjectPage.ts` | Subject page configuration |

## Deployment

### Environment Variables

```env
# Production
NUXT_SITE_URL=https://awesome-horizon.vercel.app
NUXT_SITE_NAME=Awesome Horizon
```

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output: .output/
```

### Vercel Configuration

See `vercel.json` for deployment settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output/public",
  "framework": "nuxtjs"
}
```

## Development Workflow

### Getting Started

```bash
# Clone repository
git clone https://github.com/Awesome-Nexus/Awesome-Horizon.git
cd Awesome-Horizon

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test
```

### Adding New Features

1. **New Component**
   ```
   components/[category]/ComponentName.vue
   ```

2. **New Page**
   ```
   pages/page-name.vue
   ```

3. **New Composable**
   ```
   composables/useFeatureName.ts
   ```

4. **New Content**
   ```
   content/path/to/content.md
   ```

## Best Practices

### Code Style

- Use TypeScript for all new code
- Follow Vue 3 Composition API patterns
- Use PascalCase for components
- Use camelCase for composables (prefix with `use`)
- Use kebab-case for files

### Performance

- Lazy load heavy components
- Use NuxtImg for images
- Implement virtual scrolling for long lists
- Cache API responses appropriately

### Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation
- Maintain color contrast ratios

### Security

- Sanitize user inputs
- Use CSP headers
- Validate API responses
- Keep dependencies updated

## Troubleshooting

### Build Issues

```bash
# Clean build cache
rm -rf .nuxt .output
npm run build
```

### Content Not Loading

1. Check file location in `content/`
2. Verify frontmatter format
3. Run `npm run postinstall`

### Component Not Found

1. Check component name (PascalCase)
2. Verify location in `components/`
3. Check for auto-import issues

## Contributing

See `docs/CONTRIBUTING.md` for contribution guidelines.

## License

MIT License - See `LICENSE` file
