# 🤝 Contributing to Awesome Horizon

<div align="center">

![Contributing Banner](https://via.placeholder.com/1000x200/6366f1/ffffff?text=Join+Our+Community)

**Thank you for considering contributing to Awesome Horizon!** 🎉

Together, we're building the ultimate educational resource platform for learners worldwide.

[![Contributors](https://img.shields.io/github/contributors/Awesome-Nexus/Awesome-Horizon?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon/pulls)

</div>

---

## 📑 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Style Guidelines](#-style-guidelines)
- [Commit Messages](#-commit-messages)
- [Pull Request Process](#-pull-request-process)

---

## 🛡️ Code of Conduct

This project and everyone participating in it is governed by our [**Code of Conduct**](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## 💡 How Can I Contribute?

<table>
<tr>
<td align="center" width="25%">
<img src="https://em-content.zobj.net/thumbs/120/apple/354/lady-beetle_1f41e.png" width="64" alt="Bug">
<h3>🐛 Report Bugs</h3>
Found a bug? Help us squash it!
</td>
<td align="center" width="25%">
<img src="https://em-content.zobj.net/thumbs/120/apple/354/books_1f4da.png" width="64" alt="Resources">
<h3>📚 Add Resources</h3>
Share quality educational materials
</td>
<td align="center" width="25%">
<img src="https://em-content.zobj.net/thumbs/120/apple/354/sparkles_2728.png" width="64" alt="Features">
<h3>✨ Suggest Features</h3>
Have an idea? We'd love to hear it!
</td>
<td align="center" width="25%">
<img src="https://em-content.zobj.net/thumbs/120/apple/354/memo_1f4dd.png" width="64" alt="Docs">
<h3>📝 Improve Docs</h3>
Help make our docs better
</td>
</tr>
</table>

### 🐛 Reporting Bugs

Before creating bug reports, please **check existing issues** to avoid duplicates.

**When creating a bug report, include:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. macOS, Windows, Linux]
 - Browser: [e.g. Chrome, Safari]
 - Node Version: [e.g. 18.0.0]
 - Project Version: [e.g. 1.0.0]
```

### ✨ Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When creating an enhancement suggestion:**

- 🎯 Use a clear and descriptive title
- 📝 Provide a detailed description of the suggested enhancement
- 💡 Explain why this enhancement would be useful
- 🎨 Include mockups or examples if applicable

### 📚 Adding Educational Resources

1. Navigate to the appropriate content file in `/content`
2. Follow the existing format
3. Ensure the resource is:
   - ✅ High quality and accurate
   - ✅ Freely accessible (or clearly marked if paid)
   - ✅ Currently maintained/updated
   - ✅ Relevant to the category

---

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
