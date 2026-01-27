# Contributing to Awesome Horizon

Thank you for considering contributing to Awesome Horizon! This document provides guidelines and instructions for contributing to the project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/Awesome-Nexus/Awesome-Horizon/issues) to avoid duplicates.

When creating a bug report, include:

- **Clear Title**: Use a descriptive title that summarizes the issue
- **Description**: Provide a clear description of the problem
- **Steps to Reproduce**: List the exact steps to reproduce the issue
- **Expected Behavior**: Describe what you expected to happen
- **Actual Behavior**: Describe what actually happened
- **Screenshots**: Include screenshots if applicable
- **Environment**: Specify your OS, browser, Node version, etc.

**Bug Report Template:**

```markdown
**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Navigate to '...'
2. Click on '...'
3. Scroll to '...'
4. Observe error

**Expected Behavior**
Description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain the problem.

**Environment:**
- OS: [e.g., macOS 13.0, Windows 11, Ubuntu 22.04]
- Browser: [e.g., Chrome 120, Firefox 121, Safari 17]
- Node Version: [e.g., 18.19.0]
- Package Manager: [e.g., npm 10.2.0]
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a Clear Title**: Be specific about what you're suggesting
- **Provide Details**: Explain the enhancement in detail
- **Explain Benefits**: Describe why this would be useful
- **Include Examples**: Provide mockups, code examples, or references
- **Consider Scope**: Ensure the suggestion aligns with project goals

### Adding Educational Resources

To add educational resources:

1. Navigate to the appropriate content file in `/content/`
2. Follow the existing format and structure
3. Ensure the resource meets quality criteria:
   - High quality and accurate content
   - Freely accessible (or clearly marked if paid)
   - Actively maintained and up-to-date
   - Relevant to the category
   - Appropriate for target audience

### Improving Documentation

Documentation improvements are always welcome:

- Fix typos and grammatical errors
- Clarify confusing sections
- Add missing information
- Improve code examples
- Update outdated content

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm, pnpm, yarn, or bun
- **Git**: For version control
- **Code Editor**: VS Code recommended with extensions:
  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/Awesome-Horizon.git
cd Awesome-Horizon
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/Awesome-Nexus/Awesome-Horizon.git
```

4. Install dependencies:

```bash
npm install
```

5. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

---

## Development Workflow

### 1. Setup Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3310 in your browser
```

### 2. Make Changes

- Write clean, maintainable code
- Follow existing code style and patterns
- Add comments for complex logic
- Update documentation as needed
- Write or update tests if applicable

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Build for production to catch build errors
npm run build

# Test production build locally
npm run preview
```

### 4. Commit Your Changes

Follow the [Commit Guidelines](#commit-guidelines) below.

### 5. Keep Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your branch
git merge upstream/main
```

### 6. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
```

---

## Coding Standards

### JavaScript/TypeScript

- Use ES6+ features
- Prefer `const` and `let` over `var`
- Use template literals for string interpolation
- Use arrow functions where appropriate
- Follow functional programming principles when possible
- Use meaningful variable and function names

### Vue Components

- Use Vue 3 Composition API with `<script setup>` syntax
- Keep components small and focused (Single Responsibility Principle)
- Use TypeScript for type safety
- Use meaningful component and prop names
- Follow Vue 3 style guide and best practices
- Use computed properties for derived state
- Implement proper prop validation

### Styling

- Use Tailwind CSS utility classes primarily
- Keep custom CSS minimal
- Use Tailwind configuration for theme customization
- Follow mobile-first responsive design approach
- Ensure accessibility (proper color contrast, focus states)

### File Naming Conventions

- **Components**: PascalCase (e.g., `CategoryCard.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Pages**: kebab-case (e.g., `about-us.vue`)
- **Content**: kebab-case (e.g., `getting-started.md`)

---

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Usage |
|:-----|:------|
| **feat** | New feature |
| **fix** | Bug fix |
| **docs** | Documentation changes |
| **style** | Code style changes (formatting, missing semicolons, etc.) |
| **refactor** | Code refactoring without functionality changes |
| **perf** | Performance improvements |
| **test** | Adding or updating tests |
| **build** | Build system or external dependency changes |
| **ci** | CI/CD configuration changes |
| **chore** | Other changes that don't modify src or test files |

### Examples

```bash
# Feature addition
git commit -m "feat(science): add quantum physics resources"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu toggle issue"

# Documentation update
git commit -m "docs(readme): update installation instructions"

# Refactoring
git commit -m "refactor(components): simplify CategoryCard component"
```

### Detailed Commit Message

```
feat(auth): implement user authentication system

Add JWT-based authentication with the following features:
- Login and logout functionality
- Protected routes
- Token refresh mechanism
- User session management

Closes #123
```

---

## Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tests added/updated if applicable
- [ ] All tests pass
- [ ] Build succeeds

### Pull Request Template

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## Testing
Describe the testing performed:
- [ ] Tested locally
- [ ] Tested in multiple browsers
- [ ] Tested on mobile devices
- [ ] Added unit tests
- [ ] Added integration tests

## Screenshots
If applicable, add screenshots demonstrating the changes.

## Related Issues
Closes #(issue number)
Related to #(issue number)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Build succeeds
```

### Review Process

1. Maintainers will review your pull request
2. Address any requested changes
3. Once approved, maintainers will merge your PR
4. Your contribution will be included in the next release

---

## Community

### Getting Help

- **GitHub Discussions**: Ask questions and discuss ideas
- **GitHub Issues**: Report bugs and request features
- **Discord**: Join our community (coming soon)

### Recognition

All contributors are recognized in our project. Your contributions will be listed in:

- GitHub contributors page
- Release notes
- Project acknowledgments

---

## Questions?

If you have questions not covered in this guide, please:

1. Check existing documentation
2. Search closed issues for similar questions
3. Open a new discussion on GitHub
4. Contact project maintainers

---

<div align="center">

**Thank you for contributing to Awesome Horizon!**

Together, we're making education accessible to everyone.

<a href="https://github.com/Awesome-Nexus/Awesome-Horizon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Awesome-Nexus/Awesome-Horizon" alt="Contributors" />
</a>

</div>

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
