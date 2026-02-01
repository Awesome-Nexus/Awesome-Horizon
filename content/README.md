# Content

This folder contains Markdown content files used by Nuxt Content module.

## Structure

```
content/
├── README.md                    # This file
├── about.md                     # About page content
├── science.md                   # Science category overview
├── technology.md                # Technology category overview
├── engineering.md               # Engineering category overview
├── arts.md                      # Arts category overview
├── mathematics.md               # Mathematics category overview
├── subjects/                    # Detailed subject resources
│   ├── physics-master.md
│   ├── physics-curriculum.md
│   ├── physics-comprehensive-resources.md
│   ├── chemistry-master.md
│   ├── biology-master.md
│   └── computer-science-master.md
└── resources/                   # Additional resource collections
```

## Frontmatter

All content files support YAML frontmatter:

```yaml
---
title: Page Title
description: Page description for SEO
category: subject-category
tags: ['tag1', 'tag2']
date: 2026-01-31
---
```

## Using Content in Pages

### Option 1: ContentDoc Component
```vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

### Option 2: queryContent Composable
```vue
<script setup>
const { data } = await useAsyncData('content', () => 
  queryContent('/science').findOne()
)
</script>

<template>
  <ContentRenderer :value="data" />
</template>
```

### Option 3: ContentList
```vue
<template>
  <ContentList path="/subjects" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
  </ContentList>
</template>
```

## Writing Content

- Use Markdown for formatting
- Frontmatter for metadata
- Supports MDC (Markdown Components) syntax
- Code blocks with syntax highlighting
