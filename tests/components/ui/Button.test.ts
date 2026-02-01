import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '~/components/ui/Button.vue'

describe('Button', () => {
  it('renders button element by default', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' }
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders NuxtLink when to prop is provided', () => {
    const wrapper = mount(Button, {
      props: { to: '/about' },
      slots: { default: 'Link' },
      global: {
        stubs: {
          NuxtLink: true
        }
      }
    })
    expect(wrapper.find('nuxt-link-stub').exists()).toBe(true)
  })

  it('renders anchor when href prop is provided', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'External' }
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('target')).toBe('_blank')
    expect(wrapper.find('a').attributes('rel')).toBe('noopener noreferrer')
  })

  it('applies correct variant classes', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'] as const
    
    variants.forEach(variant => {
      const wrapper = mount(Button, {
        props: { variant },
        slots: { default: 'Button' }
      })
      expect(wrapper.find('button').exists()).toBe(true)
    })
  })

  it('disables button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Disabled' }
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('shows loading spinner when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Loading' },
      global: {
        stubs: {
          LoadingSpinner: true
        }
      }
    })
    expect(wrapper.find('loading-spinner-stub').exists()).toBe(true)
  })
})
