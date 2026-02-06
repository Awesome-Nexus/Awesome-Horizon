export type Locale = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'pt' | 'ar'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  pt: 'Português',
  ar: 'العربية'
}

const translations: Record<string, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    subjects: 'Subjects',
    science: 'Science',
    technology: 'Technology',
    engineering: 'Engineering',
    arts: 'Arts',
    mathematics: 'Mathematics',
    search: 'Search',
    learnMore: 'Learn More',
    loading: 'Loading...',
    pageNotFound: 'Page Not Found',
    goHome: 'Go Home',
    share: 'Share',
    copy: 'Copy',
    copied: 'Copied!'
  },
  es: {
    home: 'Inicio',
    about: 'Acerca',
    subjects: 'Temas',
    science: 'Ciencia',
    technology: 'Tecnología',
    engineering: 'Ingeniería',
    arts: 'Artes',
    mathematics: 'Matemáticas',
    search: 'Buscar',
    learnMore: 'Saber Más',
    loading: 'Cargando...',
    pageNotFound: 'Página No Encontrada',
    goHome: 'Ir al Inicio',
    share: 'Compartir',
    copy: 'Copiar',
    copied: '¡Copiado!'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    subjects: 'Sujets',
    science: 'Sciences',
    technology: 'Technologie',
    engineering: 'Ingénierie',
    arts: 'Arts',
    mathematics: 'Mathématiques',
    search: 'Rechercher',
    learnMore: 'En Savoir Plus',
    loading: 'Chargement...',
    pageNotFound: 'Page Non Trouvée',
    goHome: 'Retour à l\'Accueil',
    share: 'Partager',
    copy: 'Copier',
    copied: 'Copié!'
  },
  de: {
    home: 'Startseite',
    about: 'Über',
    subjects: 'Themen',
    science: 'Wissenschaft',
    technology: 'Technologie',
    engineering: 'Ingenieurwesen',
    arts: 'Künste',
    mathematics: 'Mathematik',
    search: 'Suchen',
    learnMore: 'Mehr Erfahren',
    loading: 'Laden...',
    pageNotFound: 'Seite Nicht Gefunden',
    goHome: 'Zur Startseite',
    share: 'Teilen',
    copy: 'Kopieren',
    copied: 'Kopiert!'
  },
  zh: {
    home: '首页',
    about: '关于',
    subjects: '主题',
    science: '科学',
    technology: '技术',
    engineering: '工程',
    arts: '艺术',
    mathematics: '数学',
    search: '搜索',
    learnMore: '了解更多',
    loading: '加载中...',
    pageNotFound: '页面未找到',
    goHome: '返回首页',
    share: '分享',
    copy: '复制',
    copied: '已复制!'
  },
  ja: {
    home: 'ホーム',
    about: '概要',
    subjects: '科目',
    science: '科学',
    technology: 'テクノロジー',
    engineering: '工学',
    arts: '芸術',
    mathematics: '数学',
    search: '検索',
    learnMore: '詳細を見る',
    loading: '読み込み中...',
    pageNotFound: 'ページが見つかりません',
    goHome: 'ホームに戻る',
    share: '共有',
    copy: 'コピー',
    copied: 'コピーしました!'
  },
  pt: {
    home: 'Início',
    about: 'Sobre',
    subjects: 'Assuntos',
    science: 'Ciência',
    technology: 'Tecnologia',
    engineering: 'Engenharia',
    arts: 'Artes',
    mathematics: 'Matemática',
    search: 'Buscar',
    learnMore: 'Saiba Mais',
    loading: 'Carregando...',
    pageNotFound: 'Página Não Encontrada',
    goHome: 'Ir para Início',
    share: 'Compartilhar',
    copy: 'Copiar',
    copied: 'Copiado!'
  },
  ar: {
    home: 'الرئيسية',
    about: 'حول',
    subjects: 'المواضيع',
    science: 'العلوم',
    technology: 'التكنولوجيا',
    engineering: 'الهندسة',
    arts: 'الفنون',
    mathematics: 'الرياضيات',
    search: 'بحث',
    learnMore: 'اعرف المزيد',
    loading: 'جاري التحميل...',
    pageNotFound: 'الصفحة غير موجودة',
    goHome: 'العودة للرئيسية',
    share: 'مشاركة',
    copy: 'نسخ',
    copied: 'تم النسخ!'
  }
}

export const useI18n = () => {
  const localeCookie = useCookie<Locale>('locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365
  })
  
  const locale = useState<Locale>('locale', () => localeCookie.value || 'en')

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    localeCookie.value = newLocale
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale
    }
  }

  const t = (key: string) => {
    const localeTranslations = translations[locale.value]
    return localeTranslations[key] || translations.en[key] || key
  }

  return {
    locale: readonly(locale),
    setLocale,
    t,
    translations
  }
}
