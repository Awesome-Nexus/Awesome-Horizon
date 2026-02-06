/**
 * Analytics composable for tracking page views and events
 */

type AnalyticsProvider = 'umami' | 'ga' | 'none'

interface AnalyticsConfig {
  provider: AnalyticsProvider
  websiteId?: string
  apiEndpoint?: string
}

interface EventOptions {
  name: string
  data?: Record<string, string | number | boolean>
  url?: string
  websiteId?: string
}

let analyticsConfig: AnalyticsConfig = {
  provider: 'none'
}

export const initAnalytics = (config: AnalyticsConfig) => {
  analyticsConfig = config
}

export const useAnalytics = () => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  const websiteId = analyticsConfig.websiteId || config.public.umamiWebsiteId as string || undefined

  const trackPageView = async (url?: string, referrer?: string) => {
    if (analyticsConfig.provider === 'none') return

    const pageUrl = url || `${window.location.origin}${route.path}`
    const pageReferrer = referrer || document.referrer

    if (analyticsConfig.provider === 'umami' && websiteId) {
      await trackUmami(pageUrl, pageReferrer, websiteId)
    } else if (analyticsConfig.provider === 'ga') {
      trackGA('page_view', { page_path: route.path })
    }
  }

  const trackEvent = async (options: EventOptions) => {
    if (analyticsConfig.provider === 'none') return

    const eventUrl = options.url || `${window.location.origin}${route.path}`
    const eventWebsiteId = options.websiteId || websiteId

    if (analyticsConfig.provider === 'umami' && eventWebsiteId) {
      await trackUmamiEvent(eventUrl, options.name, options.data, eventWebsiteId)
    } else if (analyticsConfig.provider === 'ga') {
      trackGA('event', {
        event_category: options.name,
        event_label: JSON.stringify(options.data || {})
      })
    }
  }

  return {
    trackPageView,
    trackEvent
  }
}

async function trackUmami(url: string, referrer: string, websiteId: string) {
  const endpoint = analyticsConfig.apiEndpoint || 'https://api.umami.is/collect'
  
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': navigator.userAgent
      },
      body: JSON.stringify({
        websiteId,
        url,
        referrer,
        hostname: window.location.hostname,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        timestamp: Date.now()
      })
    })
  } catch (error) {
    console.warn('Analytics tracking failed:', error)
  }
}

async function trackUmamiEvent(url: string, eventName: string, eventData?: Record<string, string | number | boolean>, websiteId?: string) {
  const endpoint = analyticsConfig.apiEndpoint || 'https://api.umami.is/collect'
  
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': navigator.userAgent
      },
      body: JSON.stringify({
        websiteId,
        url,
        eventType: 'custom_event',
        eventName,
        eventData
      })
    })
  } catch (error) {
    console.warn('Event tracking failed:', error)
  }
}

function trackGA(action: string, params: Record<string, any>) {
  if (typeof window === 'undefined') return
  
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('event', action, params)
  }
}

export const usePageTracking = () => {
  const { trackPageView } = useAnalytics()
  const route = useRoute()

  watch(() => route.path, () => {
    trackPageView()
  }, { immediate: true })
}
