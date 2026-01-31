<div align="center">

# 🤝 Contributing to Awesome Horizon

**Thank you for considering contributing to Awesome Horizon!**

*Together, we're making education accessible to everyone worldwide* 🌍

[![Contributors](https://img.shields.io/github/contributors/Awesome-Nexus/Awesome-Horizon?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon/graphs/contributors)
[![Pull Requests](https://img.shields.io/github/issues-pr/Awesome-Nexus/Awesome-Horizon?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon/pulls)
[![Issues](https://img.shields.io/github/issues/Awesome-Nexus/Awesome-Horizon?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon/issues)

</div>

---

## 📋 Table of Contents

- [🤝 Code of Conduct](#-code-of-conduct)
- [🚀 How Can I Contribute?](#-how-can-i-contribute)
- [⚡ Getting Started](#-getting-started)
- [🔄 Development Workflow](#-development-workflow)
- [📏 Coding Standards](#-coding-standards)
- [💬 Commit Guidelines](#-commit-guidelines)
- [🔀 Pull Request Process](#-pull-request-process)
- [👥 Community](#-community)

---

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our [**Code of Conduct**](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## 🚀 How Can I Contribute?

<div align="center">

<table>
<tr>
<td align="center" width="25%">
<img src="https://via.placeholder.com/80x80/EF4444/ffffff?text=🐛" alt="Bug Reports" width="60"/>
<h3>🐛 Bug Reports</h3>
<p>Help us identify and fix issues</p>
</td>
<td align="center" width="25%">
<img src="https://via.placeholder.com/80x80/10B981/ffffff?text=✨" alt="Feature Requests" width="60"/>
<h3>✨ Feature Requests</h3>
<p>Suggest new features and improvements</p>
</td>
<td align="center" width="25%">
<img src="https://via.placeholder.com/80x80/8B5CF6/ffffff?text=📚" alt="Educational Content" width="60"/>
<h3>📚 Educational Content</h3>
<p>Add high-quality learning resources</p>
</td>
<td align="center" width="25%">
<img src="https://via.placeholder.com/80x80/F59E0B/ffffff?text=📝" alt="Documentation" width="60"/>
<h3>📝 Documentation</h3>
<p>Improve guides and documentation</p>
</td>
</tr>
</table>

</div>

### 🐛 Reporting Bugs

Before creating bug reports, please check [**existing issues**](https://github.com/Awesome-Nexus/Awesome-Horizon/issues) to avoid duplicates.

#### 📝 Bug Report Template

```markdown
## 🐛 Bug Description
A clear and concise description of what the bug is.

## 🔄 Steps to Reproduce
1. Navigate to '...'
2. Click on '...'
3. Scroll to '...'
4. Observe error

## ✅ Expected Behavior
Description of what you expected to happen.

## ❌ Actual Behavior
Description of what actually happened.

## 📸 Screenshots
If applicable, add screenshots to help explain the problem.

## 🖥️ Environment
- **OS**: [e.g., macOS 13.0, Windows 11, Ubuntu 22.04]
- **Browser**: [e.g., Chrome 120, Firefox 121, Safari 17]
- **Node Version**: [e.g., 18.19.0]
- **Package Manager**: [e.g., npm 10.2.0]

## 📋 Additional Context
Add any other context about the problem here.
```

### ✨ Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **🎯 Use a Clear Title**: Be specific about what you're suggesting
- **📝 Provide Details**: Explain the enhancement in detail
- **💡 Explain Benefits**: Describe why this would be useful
- **🖼️ Include Examples**: Provide mockups, code examples, or references
- **🎯 Consider Scope**: Ensure the suggestion aligns with project goals

### 📚 Adding Educational Resources

To add educational resources:

1. Navigate to the appropriate content file in `/content/`
2. Follow the existing format and structure
3. Ensure the resource meets quality criteria:
   - ✅ High quality and accurate content
   - ✅ Freely accessible (or clearly marked if paid)
   - ✅ Actively maintained and up-to-date
   - ✅ Relevant to the category
   - ✅ Appropriate for target audience

---

## ⚡ Getting Started

### 🔧 Prerequisites

<div align="center">

| Requirement | Version | Purpose |
|:------------|:--------|:--------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | 18.0.0+ | Runtime environment |
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | Latest | Version control |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) | Latest | Recommended editor |

</div>

#### 🔌 Recommended VS Code Extensions

- **Vue Language Features (Volar)** - Vue 3 support
- **TypeScript Vue Plugin (Volar)** - TypeScript integration
- **Tailwind CSS IntelliSense** - CSS utility suggestions
- **ESLint** - Code linting
- **Prettier** - Code formatting

### 🍴 Fork and Clone

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork locally
git clone https://github.com/YOUR_USERNAME/Awesome-Horizon.git
cd Awesome-Horizon

# 3. Add upstream remote
git remote add upstream https://github.com/Awesome-Nexus/Awesome-Horizon.git

# 4. Install dependencies
npm install

# 5. Create a feature branch
git checkout -b feature/your-feature-name
```

---

## 🔄 Development Workflow

### 1. 🛠️ Setup Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3310 in your browser
```

### 2. ✏️ Make Changes

- Write clean, maintainable code
- Follow existing code style and patterns
- Add comments for complex logic
- Update documentation as needed
- Write or update tests if applicable

### 3. 🧪 Test Your Changes

```bash
# Run linter
npm run lint

# Type checking
npm run type-check

# Build for production to catch build errors
npm run build

# Test production build locally
npm run preview
```

### 4. 💾 Commit Your Changes

Follow the [**Commit Guidelines**](#-commit-guidelines) below.

### 5. 🔄 Keep Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your branch
git merge upstream/main
```

### 6. 📤 Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
```

---

## 📏 Coding Standards

### 🟨 JavaScript/TypeScript

<div align="center">

| ✅ Do | ❌ Don't |
|:------|:---------|
| Use ES6+ features | Use `var` declarations |
| Use `const` and `let` | Use outdated syntax |
| Use template literals | Use string concatenation |
| Use arrow functions appropriately | Ignore TypeScript errors |
| Use meaningful names | Use single-letter variables |

</div>

### 🟢 Vue Components

- ✅ Use Vue 3 Composition API with `<script setup>` syntax
- ✅ Keep components small and focused (Single Responsibility Principle)
- ✅ Use TypeScript for type safety
- ✅ Use meaningful component and prop names
- ✅ Follow Vue 3 style guide and best practices
- ✅ Use computed properties for derived state
- ✅ Implement proper prop validation

### 🎨 Styling

- ✅ Use Tailwind CSS utility classes primarily
- ✅ Keep custom CSS minimal
- ✅ Use Tailwind configuration for theme customization
- ✅ Follow mobile-first responsive design approach
- ✅ Ensure accessibility (proper color contrast, focus states)

### 📁 File Naming Conventions

<div align="center">

| File Type | Convention | Example |
|:----------|:-----------|:--------|
| **Components** | PascalCase | `CategoryCard.vue` |
| **Composables** | camelCase with `use` prefix | `useAuth.ts` |
| **Utilities** | camelCase | `formatDate.ts` |
| **Pages** | kebab-case | `about-us.vue` |
| **Content** | kebab-case | `getting-started.md` |

</div>

---

## 💬 Commit Guidelines

We follow the [**Conventional Commits**](https://www.conventionalcommits.org/) specification.

### 📝 Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 🏷️ Types

<div align="center">

| Type | Usage | Example |
|:-----|:------|:--------|
| **feat** | New feature | `feat(science): add quantum physics resources` |
| **fix** | Bug fix | `fix(navigation): resolve mobile menu toggle issue` |
| **docs** | Documentation changes | `docs(readme): update installation instructions` |
| **style** | Code style changes | `style(components): fix indentation` |
| **refactor** | Code refactoring | `refactor(components): simplify CategoryCard` |
| **perf** | Performance improvements | `perf(images): optimize loading` |
| **test** | Adding or updating tests | `test(utils): add formatDate tests` |
| **build** | Build system changes | `build(deps): update dependencies` |
| **ci** | CI/CD configuration | `ci(github): add automated testing` |
| **chore** | Other changes | `chore(cleanup): remove unused files` |

</div>

### 📋 Detailed Commit Message Example

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

## 🔀 Pull Request Process

### ✅ Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tests added/updated if applicable
- [ ] All tests pass
- [ ] Build succeeds

### 📝 Pull Request Template

```markdown
## 📝 Description
Brief description of the changes made.

## 🔄 Type of Change
- [ ] 🐛 Bug fix (non-breaking change fixing an issue)
- [ ] ✨ New feature (non-breaking change adding functionality)
- [ ] 💥 Breaking change (fix or feature causing existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🔧 Code refactoring
- [ ] ⚡ Performance improvement

## 🧪 Testing
Describe the testing performed:
- [ ] Tested locally
- [ ] Tested in multiple browsers
- [ ] Tested on mobile devices
- [ ] Added unit tests
- [ ] Added integration tests

## 📸 Screenshots
If applicable, add screenshots demonstrating the changes.

## 🔗 Related Issues
Closes #(issue number)
Related to #(issue number)

## ✅ Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Build succeeds
```

### 🔍 Review Process

1. **👀 Review**: Maintainers will review your pull request
2. **🔄 Iterate**: Address any requested changes
3. **✅ Approval**: Once approved, maintainers will merge your PR
4. **🎉 Release**: Your contribution will be included in the next release

---

## 👥 Community

### 🆘 Getting Help

<div align="center">

| Platform | Purpose |
|:--------:|:--------|
| 💬 [**GitHub Discussions**](https://github.com/Awesome-Nexus/Awesome-Horizon/discussions) | Ask questions and discuss ideas |
| 🐛 [**GitHub Issues**](https://github.com/Awesome-Nexus/Awesome-Horizon/issues) | Report bugs and request features |
| 📧 [**Email**](mailto:support@awesome-horizon.dev) | Direct support |

</div>

### 🏆 Recognition

All contributors are recognized in our project. Your contributions will be listed in:

- 📊 GitHub contributors page
- 📋 Release notes
- 🙏 Project acknowledgments
- 🌟 Hall of Fame (coming soon)

---

## ❓ Questions?

If you have questions not covered in this guide, please:

1. 📖 Check existing documentation
2. 🔍 Search closed issues for similar questions
3. 💬 Open a new discussion on GitHub
4. 📧 Contact project maintainers

---

<div align="center">

**🎉 Thank you for contributing to Awesome Horizon! 🎉**

*Together, we're making education accessible to everyone.*

<a href="https://github.com/Awesome-Nexus/Awesome-Horizon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Awesome-Nexus/Awesome-Horizon" alt="Contributors" />
</a>

---

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/Awesome-Nexus/Awesome-Horizon)
[![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)](https://opensource.org/)

</div>
