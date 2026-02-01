# Server

This folder contains Nitro server routes, API endpoints, and middleware.

Nuxt uses Nitro as its server engine for full-stack capabilities.

## Structure

```
server/
├── api/        # API routes (auto-prefixed with /api)
├── routes/     # Custom server routes
├── middleware/ # Server middleware
└── plugins/    # Nitro plugins
```

## API Routes

```ts
// server/api/resources.get.ts
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  return {
    resources: [
      { id: 1, title: 'MIT OCW' },
      // ...
    ]
  }
})
```

Access at: `/api/resources`

## Server Routes

```ts
// server/routes/rss.xml.ts
export default defineEventHandler(async (event) => {
  const feed = generateRSSFeed()
  
  event.node.res.setHeader('Content-Type', 'application/rss+xml')
  return feed
})
```

Access at: `/rss.xml`

## Server Middleware

```ts
// server/middleware/logger.ts
export default defineEventHandler((event) => {
  console.log(`${event.node.req.method}: ${event.node.req.url}`)
})
```
