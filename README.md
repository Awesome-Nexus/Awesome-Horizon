<div align="center">

# Awesome Horizon

**A curated educational resource platform for STEAM learning**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82.svg)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

[View Demo](#) • [Documentation](#) • [Report Issue](https://github.com/Awesome-Nexus/Awesome-Horizon/issues) • [Request Feature](https://github.com/Awesome-Nexus/Awesome-Horizon/issues/new)

</div>

## About

Awesome Horizon is an open-source platform that curates high-quality learning resources across Science, Technology, Engineering, Arts, and Mathematics (STEAM). Built with modern web technologies to provide an exceptional learning experience.

## Quick Start

```bash
# Clone repository
git clone https://github.com/Awesome-Nexus/Awesome-Horizon.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3310`

## Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| [Nuxt 3](https://nuxt.com/) | Framework |
| [Vue 3](https://vuejs.org/) | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [TypeScript](https://www.typescriptlang.org/) | Language |
| [Nuxt Content](https://content.nuxt.com/) | Content Management |

</div>

## Categories

<table>
<tr>
<td width="20%" align="center">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 16v-4M12 8h.01"/>
</svg>
<br><strong>Science</strong>
<br><sub>Physics • Chemistry • Biology</sub>
</td>
<td width="20%" align="center">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
  <rect x="2" y="3" width="20" height="14" rx="2"/>
  <line x1="8" y1="21" x2="16" y2="21"/>
  <line x1="12" y1="17" x2="12" y2="21"/>
</svg>
<br><strong>Technology</strong>
<br><sub>Programming • AI • Web Dev</sub>
</td>
<td width="20%" align="center">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2">
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>
<br><strong>Engineering</strong>
<br><sub>Civil • Mechanical • Electrical</sub>
</td>
<td width="20%" align="center">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2">
  <circle cx="12" cy="13" r="8"/>
  <path d="M12 9v4M12 17h.01"/>
</svg>
<br><strong>Arts</strong>
<br><sub>Design • Music • Visual</sub>
</td>
<td width="20%" align="center">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2">
  <path d="M12 2v20M2 12h20"/>
  <circle cx="12" cy="12" r="4"/>
</svg>
<br><strong>Mathematics</strong>
<br><sub>Algebra • Calculus • Statistics</sub>
</td>
</tr>
</table>

## Project Structure

```
awesome-horizon/
├── components/          # Vue components
├── content/             # Educational content (Markdown)
├── pages/               # Application pages
├── layouts/             # Layout templates
├── public/              # Static assets
├── server/              # Server-side code
└── nuxt.config.ts       # Configuration
```

## Contributing

We welcome contributions! Here's how you can help:

<table>
<tr>
<td align="center" width="25%">
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
</svg>
<br><strong>Add Resources</strong>
</td>
<td align="center" width="25%">
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="5" y="2" width="14" height="20" rx="2"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</svg>
<br><strong>Fix Bugs</strong>
</td>
<td align="center" width="25%">
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
</svg>
<br><strong>Suggest Ideas</strong>
</td>
<td align="center" width="25%">
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
</svg>
<br><strong>Write Docs</strong>
</td>
</tr>
</table>

**Steps to Contribute:**
1. Fork the repository
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Development

```bash
# Development
npm run dev              # Start dev server at localhost:3310

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Quality
npm run lint             # Run linter
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/Awesome-Nexus/Awesome-Horizon/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Awesome-Nexus/Awesome-Horizon/discussions)

## Acknowledgments

Built with [Nuxt](https://nuxt.com/), [Vue](https://vuejs.org/), and [Tailwind CSS](https://tailwindcss.com/). Thank you to all [contributors](https://github.com/Awesome-Nexus/Awesome-Horizon/graphs/contributors).

---

<div align="center">

**Made with dedication by educators, for learners**

[⭐ Star us on GitHub](https://github.com/Awesome-Nexus/Awesome-Horizon)

</div>
