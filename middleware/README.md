# Middleware

This folder contains route middleware for navigation guards.

Middleware in this directory are auto-registered by Nuxt.

## Naming Convention

- Use kebab-case for middleware names
- Middleware can be: anonymous, named, or global

## Types

### Named Middleware
```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // Return navigateTo('/login') if not authenticated
})
```

Usage:
```vue
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
```

### Global Middleware
```ts
// middleware/global-middleware.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // Runs on every route change
})
```

## Parameters

- `to`: Route location being navigated to
- `from`: Route location being navigated from

## Return Values

- `navigateTo('/path')` - Redirect to another route
- `abortNavigation()` - Stop navigation
- `abortNavigation(error)` - Stop with error
