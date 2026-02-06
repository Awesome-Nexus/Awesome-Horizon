export default defineEventHandler(async (event) => {
  const checks = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    uptime: process.uptime(),
    checks: {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage()
    }
  }

  const memoryUsage = checks.checks.memory
  const MB = 1024 * 1024

  const healthInfo = {
    status: 'healthy',
    timestamp: checks.timestamp,
    service: 'awesome-horizon-api',
    version: checks.version,
    metrics: {
      uptime_seconds: Math.floor(checks.uptime),
      memory_heap_used_mb: Math.round(memoryUsage.heapUsed / MB),
      memory_heap_total_mb: Math.round(memoryUsage.heapTotal / MB),
      memory_rss_mb: Math.round(memoryUsage.rss / MB),
      cpu_user_seconds: Math.round(checks.checks.cpu.user / 1000000)
    },
    dependencies: {
      database: { status: 'unknown', latency_ms: null },
      cache: { status: 'healthy', latency_ms: 0 },
      storage: { status: 'healthy', size_mb: 0 }
    }
  }

  setResponseStatus(event, 200)
  setHeader(event, 'Content-Type', 'application/health+json')
  setHeader(event, 'Cache-Control', 'no-cache')

  return healthInfo
})
