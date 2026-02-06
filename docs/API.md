# Awesome Horizon API Documentation

## Base URL

```
Production: https://awesome-horizon.vercel.app
Development: http://localhost:3310
```

## Endpoints

### GET /api/resources

Get paginated list of educational resources.

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
|-----------|------|---------|---------|-------------|
| `page` | number | No | 1 | Page number |
| `limit` | number | No | 20 | Items per page |
| `category` | string | No | - | Filter by category |
| `subject` | string | No | - | Filter by subject |

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "url": "string",
      "category": "string",
      "subject": "string",
      "type": "string",
      "level": "string"
    }
  ],
  "meta": {
    "total": 1000,
    "page": 1,
    "limit": 20,
    "totalPages": 50
  }
}
```

### GET /sitemap.xml

Get XML sitemap of all pages.

**Response:** `application/xml`

### GET /robots.txt

Get robots.txt configuration.

**Response:** `text/plain`

## Rate Limiting

- **Limit:** 100 requests per minute
- **Headers:**
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Remaining requests
  - `Retry-After`: Seconds until reset (on 429)

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

## Categories

- `science` - Physics, Chemistry, Biology, Astronomy
- `technology` - Computer Science, AI, Web Development
- `engineering` - Mechanical, Electrical, Civil
- `arts` - Visual Arts, Music, Design
- `mathematics` - Algebra, Calculus, Statistics

## Content Types

- `course` - Online courses
- `textbook` - Free textbooks
- `video` - Video tutorials
- `tutorial` - Step-by-step guides
- `platform` - Learning platforms
- `simulation` - Interactive simulations

## Response Time

Average response time: < 100ms

Cache TTL: 5 minutes
