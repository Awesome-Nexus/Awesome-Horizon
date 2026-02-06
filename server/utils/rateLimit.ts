const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 60 * 1000
const MAX_REQUESTS = 100

export const rateLimit = (event: any) => {
  const ip = getHeader(event, 'x-forwarded-for') || 
             getHeader(event, 'x-real-ip') || 
             'unknown'

  const now = Date.now()
  const existing = rateLimitMap.get(ip)

  if (!existing || now > existing.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS
    })
    return { allowed: true, remaining: MAX_REQUESTS - 1 }
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetTime - now) / 1000)
    }
  }

  existing.count++
  return { allowed: true, remaining: MAX_REQUESTS - existing.count }
}

export const checkRateLimit = (event: any) => {
  const result = rateLimit(event)

  if (!result.allowed) {
    setHeader(event, 'Retry-After', result.retryAfter)
    setHeader(event, 'X-RateLimit-Limit', MAX_REQUESTS)
    setHeader(event, 'X-RateLimit-Remaining', 0)
    
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests',
      message: `Rate limit exceeded. Please retry after ${result.retryAfter} seconds.`
    })
  }

  setHeader(event, 'X-RateLimit-Limit', MAX_REQUESTS)
  setHeader(event, 'X-RateLimit-Remaining', result.remaining)
}

export const useRateLimit = () => {
  return {
    check: checkRateLimit,
    getStatus: (event: any) => rateLimit(event)
  }
}
