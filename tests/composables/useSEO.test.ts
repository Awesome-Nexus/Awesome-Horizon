import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useSEO, useBreadcrumbSchema, useOrganizationSchema } from '~/composables/useSEO'

// Mock useHead
vi.mock('#app', () => ({
  useHead: vi.fn(),
  useRoute: () => ({ path: '/test' }),
  useRuntimeConfig: () => ({})
}))

describe('useSEO', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('sets basic meta tags', () => {
    const { useHead } = vi.mocked(await import('#app'))
    
    useSEO({
      title: 'Test Page',
      description: 'Test description'
    })

    expect(useHead).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Test Page'
    }))
  })

  it('includes Open Graph meta tags', () => {
    const { useHead } = vi.mocked(await import('#app'))
    
    useSEO({
      title: 'Test',
      description: 'Description',
      type: 'article'
    })

    const call = useHead.mock.calls[0][0]
    const meta = call.meta || []
    
    expect(meta.some((m: any) => m.property === 'og:title')).toBe(true)
    expect(meta.some((m: any) => m.property === 'og:description')).toBe(true)
    expect(meta.some((m: any) => m.property === 'og:type')).toBe(true)
  })
})

describe('useBreadcrumbSchema', () => {
  it('generates correct breadcrumb schema', () => {
    const { useHead } = vi.mocked(await import('#app'))
    
    useBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Science', url: '/science' },
      { name: 'Physics', url: '/physics' }
    ])

    const call = useHead.mock.calls[0][0]
    const script = call.script?.[0]
    
    expect(script).toBeDefined()
    expect(script.type).toBe('application/ld+json')
    
    const data = JSON.parse(script.innerHTML)
    expect(data['@type']).toBe('BreadcrumbList')
    expect(data.itemListElement).toHaveLength(3)
    expect(data.itemListElement[0].position).toBe(1)
    expect(data.itemListElement[0].name).toBe('Home')
  })
})

describe('useOrganizationSchema', () => {
  it('generates organization schema', () => {
    const { useHead } = vi.mocked(await import('#app'))
    
    useOrganizationSchema()

    const call = useHead.mock.calls[0][0]
    const script = call.script?.[0]
    
    expect(script).toBeDefined()
    
    const data = JSON.parse(script.innerHTML)
    expect(data['@type']).toBe('Organization')
    expect(data.name).toBe('Awesome Horizon')
  })
})
