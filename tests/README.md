# Tests

This folder contains all test files for the Awesome Horizon project.

## Structure

```
tests/
├── components/       # Component tests
│   └── ui/
│       └── Button.test.ts
├── composables/      # Composable tests
│   └── useSEO.test.ts
├── utils/            # Utility function tests
│   └── formatters.test.ts
└── README.md         # This file
```

## Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Writing Tests

### Component Tests

```ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '~/components/MyComponent.vue'

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.text()).toContain('Expected text')
  })
})
```

### Composable Tests

```ts
import { describe, it, expect } from 'vitest'
import { useMyComposable } from '~/composables/useMyComposable'

describe('useMyComposable', () => {
  it('returns expected data', () => {
    const result = useMyComposable()
    expect(result.value).toBeDefined()
  })
})
```

### Utility Tests

```ts
import { describe, it, expect } from 'vitest'
import { myUtility } from '~/utils/myUtility'

describe('myUtility', () => {
  it('handles expected input', () => {
    expect(myUtility('input')).toBe('output')
  })
})
```

## Best Practices

1. **Test behavior, not implementation** - Focus on what the code does, not how it does it
2. **Use descriptive test names** - The test name should explain what is being tested
3. **Keep tests isolated** - Each test should be independent of others
4. **Mock external dependencies** - Use mocks for APIs, composables, etc.
5. **Test edge cases** - Include tests for error conditions and boundary values
