# 🎨 Subject Colors & Design Guide

## Category Color Schemes

### Science (Blue/Purple)
```css
--science-primary: #6366f1;      /* Indigo 500 */
--science-secondary: #8b5cf6;    /* Violet 500 */
--science-accent: #06b6d4;       /* Cyan 500 */
--science-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
--science-glow: rgba(99, 102, 241, 0.3);
```

### Technology (Cyan/Blue)
```css
--technology-primary: #06b6d4;   /* Cyan 500 */
--technology-secondary: #3b82f6; /* Blue 500 */
--technology-accent: #14b8a6;    /* Teal 500 */
--technology-gradient: linear-gradient(135deg, #06b6d4, #3b82f6);
--technology-glow: rgba(6, 182, 212, 0.3);
```

### Engineering (Orange/Amber)
```css
--engineering-primary: #f59e0b;  /* Amber 500 */
--engineering-secondary: #ea580c;/* Orange 600 */
--engineering-accent: #dc2626;   /* Red 600 */
--engineering-gradient: linear-gradient(135deg, #f59e0b, #ea580c);
--engineering-glow: rgba(245, 158, 11, 0.3);
```

### Arts (Pink/Rose)
```css
--arts-primary: #ec4899;         /* Pink 500 */
--arts-secondary: #f43f5e;       /* Rose 500 */
--arts-accent: #d946ef;          /* Fuchsia 500 */
--arts-gradient: linear-gradient(135deg, #ec4899, #f43f5e);
--arts-glow: rgba(236, 72, 153, 0.3);
```

### Mathematics (Indigo/Violet)
```css
--mathematics-primary: #6366f1;  /* Indigo 500 */
--mathematics-secondary: #8b5cf6;/* Violet 500 */
--mathematics-accent: #a855f7;   /* Purple 500 */
--mathematics-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
--mathematics-glow: rgba(99, 102, 241, 0.3);
```

## Individual Subject Colors

### Technology Subjects
| Subject | Color | Tailwind Class | Hex |
|---------|-------|----------------|-----|
| Computer Science | Blue | `blue-500` | #3b82f6 |
| AI/ML | Purple | `purple-500` | #a855f7 |
| Cybersecurity | Red | `red-500` | #ef4444 |
| Data Science | Emerald | `emerald-500` | #10b981 |
| Web Development | Sky | `sky-500` | #0ea5e9 |
| Mobile Development | Teal | `teal-500` | #14b8a6 |
| Cloud Computing | Cyan | `cyan-500` | #06b6d4 |
| DevOps | Orange | `orange-500` | #f97316 |
| Game Development | Pink | `pink-500` | #ec4899 |
| Blockchain | Amber | `amber-500` | #f59e0b |

### Engineering Subjects
| Subject | Color | Tailwind Class | Hex |
|---------|-------|----------------|-----|
| Mechanical | Orange | `orange-500` | #f97316 |
| Electrical | Yellow | `yellow-500` | #eab308 |
| Civil | Stone | `stone-500` | #78716c |
| Chemical | Emerald | `emerald-500` | #10b981 |
| Aerospace | Sky | `sky-500` | #0ea5e9 |
| Software | Blue | `blue-500` | #3b82f6 |
| Biomedical | Rose | `rose-500` | #f43f5e |
| Industrial | Slate | `slate-500` | #64748b |
| Environmental | Green | `green-500` | #22c55e |
| Materials | Zinc | `zinc-500` | #71717a |

### Arts Subjects
| Subject | Color | Tailwind Class | Hex |
|---------|-------|----------------|-----|
| Visual Arts | Pink | `pink-500` | #ec4899 |
| Digital Art | Fuchsia | `fuchsia-500` | #d946ef |
| Art History | Rose | `rose-500` | #f43f5e |
| Music | Purple | `purple-500` | #a855f7 |
| Performing Arts | Violet | `violet-500` | #8b5cf6 |
| Film & Media | Red | `red-500` | #ef4444 |
| Photography | Orange | `orange-500` | #f97316 |
| Graphic Design | Amber | `amber-500` | #f59e0b |
| Architecture | Cyan | `cyan-500` | #06b6d4 |
| Fashion Design | Indigo | `indigo-500` | #6366f1 |

### Mathematics Subjects
| Subject | Color | Tailwind Class | Hex |
|---------|-------|----------------|-----|
| Algebra | Indigo | `indigo-500` | #6366f1 |
| Calculus | Violet | `violet-500` | #8b5cf6 |
| Linear Algebra | Purple | `purple-500` | #a855f7 |
| Statistics | Blue | `blue-500` | #3b82f6 |
| Discrete Math | Cyan | `cyan-500` | #06b6d4 |
| Number Theory | Teal | `teal-500` | #14b8a6 |
| Geometry | Emerald | `emerald-500` | #10b981 |
| Differential Eq | Green | `green-500` | #22c55e |
| Logic | Slate | `slate-500` | #64748b |
| Applied Math | Sky | `sky-500` | #0ea5e9 |

## Usage Examples

### Vue Component
```vue
<template>
  <div :class="subjectCardClass">
    <Icon :class="iconClass" />
    <h3>{{ subject.name }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  subject: Object,
  category: String
})

const subjectCardClass = computed(() => {
  return `bg-${getSubjectColor(props.subject.slug)}-500/10 border-${getSubjectColor(props.subject.slug)}-500/30 hover:border-${getSubjectColor(props.subject.slug)}-500`
})

const iconClass = computed(() => {
  return `text-${getSubjectColor(props.subject.slug)}-400`
})
</script>
```

### Tailwind Classes
```html
<!-- Subject Card -->
<div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
  <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
  
  <div class="relative p-6">
    <div class="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
      <span class="text-2xl">💻</span>
    </div>
    <h3 class="text-xl font-semibold text-white mb-2">Computer Science</h3>
    <p class="text-slate-400 text-sm">Programming fundamentals, algorithms...</p>
    <div class="mt-4 flex items-center gap-2">
      <span class="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">3,000+ Resources</span>
    </div>
  </div>
</div>
```

## Icon System

### Subject Icons
```javascript
const subjectIcons = {
  // Technology
  'computer-science': '💻',
  'artificial-intelligence': '🤖',
  'cybersecurity': '🔒',
  'data-science': '📊',
  'web-development': '🌐',
  'mobile-development': '📱',
  'cloud-computing': '☁️',
  'devops': '⚙️',
  'game-development': '🎮',
  'blockchain': '⛓️',
  
  // Engineering
  'mechanical': '⚙️',
  'electrical': '⚡',
  'civil': '🏗️',
  'chemical': '⚗️',
  'aerospace': '🚀',
  'software': '💻',
  'biomedical': '🏥',
  'industrial': '🏭',
  'environmental': '🌱',
  'materials': '🔬',
  
  // Arts
  'visual-arts': '🎨',
  'digital-art': '🖥️',
  'art-history': '🏛️',
  'music': '🎵',
  'performing-arts': '🎭',
  'film-media': '🎬',
  'photography': '📷',
  'graphic-design': '✏️',
  'architecture': '🏛️',
  'fashion-design': '👗',
  
  // Mathematics
  'algebra': '📐',
  'calculus': '📈',
  'linear-algebra': '📊',
  'statistics': '📉',
  'discrete-mathematics': '🔢',
  'number-theory': '#️⃣',
  'geometry': '📏',
  'differential-equations': '∿',
  'logic': '🧩',
  'applied-mathematics': '📐'
}
```

## Animation Guidelines

### Hover Effects
```css
/* Card hover - lift and glow */
.subject-card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.subject-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -10px rgba(6, 182, 212, 0.3);
}

/* Border glow */
.subject-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, transparent, var(--glow-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}
.subject-card:hover::before {
  opacity: 1;
}
```

### Scroll Animations
```javascript
// Intersection Observer for scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, { threshold: 0.1 })
```

```css
.animate-in {
  animation: fadeSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Responsive Breakpoints

```css
/* Subject Grid */
.subject-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;        /* Mobile */
}

@media (min-width: 640px) {
  .subject-grid {
    grid-template-columns: repeat(2, 1fr);  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .subject-grid {
    grid-template-columns: repeat(3, 1fr);  /* Desktop */
  }
}

@media (min-width: 1280px) {
  .subject-grid {
    grid-template-columns: repeat(4, 1fr);  /* Large Desktop */
  }
}
```

## Accessibility

### Color Contrast Requirements
- All text must meet WCAG 4.5:1 ratio for normal text
- Large text (18pt+) must meet 3:1 ratio
- Interactive elements must have visible focus states

### Focus States
```css
.subject-card:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .subject-card {
    transition: none;
  }
  .animate-in {
    animation: none;
    opacity: 1;
  }
}
```

