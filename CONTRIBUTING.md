# Contributing to Awesome Horizon

First off, thank you for considering contributing to Awesome Horizon! It's people like you that make this project great.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/Awesome-Horizon.git
   cd Awesome-Horizon
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots, etc.)
- **Describe the behavior you observed and what you expected**
- **Include your environment details** (OS, Node version, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **Include mockups or examples if applicable**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

### Pull Requests

1. Follow the [Development Workflow](#development-workflow)
2. Follow the [Style Guidelines](#style-guidelines)
3. Write meaningful commit messages
4. Update documentation as needed
5. Add tests if applicable
6. Ensure all tests pass

## Development Workflow

1. **Setup**: Install dependencies and ensure the project runs locally
   ```bash
   npm install
   npm run dev
   ```

2. **Make Changes**: Implement your feature or fix
   - Write clean, maintainable code
   - Follow existing code style
   - Add comments for complex logic

3. **Test**: Verify your changes work as expected
   ```bash
   npm run build
   ```

4. **Commit**: Commit your changes with a clear message
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push**: Push to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Pull Request**: Open a PR against the main repository

## Style Guidelines

### JavaScript/TypeScript Style

- Use ES6+ features
- Use `const` and `let` instead of `var`
- Use template literals for string interpolation
- Use arrow functions where appropriate
- Follow Vue 3 Composition API patterns

### Vue Component Guidelines

- Use `<script setup>` syntax
- Use TypeScript for type safety
- Keep components small and focused
- Use meaningful component and prop names
- Follow Vue 3 best practices

### CSS/Tailwind Guidelines

- Use Tailwind utility classes primarily
- Keep custom CSS minimal
- Use Tailwind config for theme customization
- Follow mobile-first responsive design

### File Naming

- Components: PascalCase (e.g., `MyComponent.vue`)
- Utilities/Composables: camelCase (e.g., `useMyComposable.ts`)
- Pages: kebab-case (e.g., `my-page.vue`)

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```
feat(auth): add user authentication

Implement JWT-based authentication system with login and logout functionality.

Closes #123
```

```
fix(navigation): resolve mobile menu toggle issue

The mobile navigation menu wasn't closing when clicking outside.
Added click-outside directive to handle this case.
```

## Pull Request Process

1. **Update Documentation**: Ensure README, CHANGELOG, and other docs are updated
2. **Update Dependencies**: Add any new dependencies to package.json
3. **Test Thoroughly**: Ensure all functionality works as expected
4. **Write Clear Description**: Explain what changes were made and why
5. **Link Issues**: Reference any related issues
6. **Request Review**: Tag maintainers for review
7. **Address Feedback**: Make requested changes promptly
8. **Squash Commits**: Consider squashing commits before merge

### PR Title Format

Use the same format as commit messages:
```
feat: add dark mode toggle
fix: resolve navigation bug
docs: update installation guide
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Screenshots (if applicable)
Add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests (if applicable)
- [ ] All tests pass
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎉
