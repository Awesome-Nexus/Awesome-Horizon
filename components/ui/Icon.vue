<script setup lang="ts">
import { 
  FlaskConical, 
  Cpu, 
  Wrench, 
  Palette, 
  Sigma,
  Atom,
  Microscope,
  Brain,
  Globe,
  Star,
  Leaf,
  Github,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Menu,
  X,
  Search,
  BookOpen,
  Video,
  Calculator,
  Code,
  GraduationCap,
  Trophy,
  Medal,
  Database,
  type LucideIcon
} from 'lucide-vue-next'

interface Props {
  name: keyof typeof icons
  size?: number | string
  class?: string
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2
})

const icons = {
  flask: FlaskConical,
  cpu: Cpu,
  wrench: Wrench,
  palette: Palette,
  sigma: Sigma,
  atom: Atom,
  microscope: Microscope,
  brain: Brain,
  globe: Globe,
  star: Star,
  leaf: Leaf,
  github: Github,
  external: ExternalLink,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'chevron-down': ChevronDown,
  menu: Menu,
  close: X,
  search: Search,
  book: BookOpen,
  video: Video,
  calculator: Calculator,
  code: Code,
  graduation: GraduationCap,
  trophy: Trophy,
  medal: Medal,
  database: Database
}

const iconComponent = computed(() => icons[props.name] || Globe)
</script>

<template>
  <component
    :is="iconComponent"
    :size="size"
    :stroke-width="strokeWidth"
    :class="class"
  />
</template>
