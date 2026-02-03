// Subject metadata registry for all STEAM categories

export interface Subject {
  slug: string
  name: string
  shortName: string
  icon: string
  color: string
  textColor: string
  bgColor: string
  borderColor: string
  glowColor: string
  resources: number
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  topics: string[]
}

export interface Category {
  slug: string
  name: string
  icon: string
  primaryColor: string
  secondaryColor: string
  gradient: string
  subjects: Subject[]
}

// Technology Subjects
export const technologySubjects: Subject[] = [
  {
    slug: 'computer-science',
    name: 'Computer Science',
    shortName: 'CS',
    icon: 'Cpu',

    color: 'blue',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    resources: 3000,
    description: 'Programming fundamentals, algorithms, data structures, software engineering, and computer systems.',
    difficulty: 'All Levels',
    topics: ['Programming', 'Algorithms', 'Data Structures', 'Operating Systems', 'Databases', 'Networks']
  },
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    shortName: 'AI/ML',
    icon: 'Brain',

    color: 'purple',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    resources: 2500,
    description: 'Machine learning, deep learning, neural networks, NLP, computer vision, and generative AI.',
    difficulty: 'Intermediate',
    topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'Generative AI']
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    shortName: 'Security',
    icon: 'Shield',

    color: 'red',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/20',
    resources: 1500,
    description: 'Network security, cryptography, ethical hacking, penetration testing, and security operations.',
    difficulty: 'Intermediate',
    topics: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Penetration Testing', 'Forensics', 'Compliance']
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    shortName: 'Data Science',
    icon: 'BarChart3',

    color: 'emerald',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/20',
    resources: 2000,
    description: 'Data analysis, visualization, statistical modeling, machine learning, and big data technologies.',
    difficulty: 'Intermediate',
    topics: ['Data Analysis', 'Visualization', 'Statistics', 'SQL', 'Python', 'Big Data']
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    shortName: 'Web Dev',
    icon: 'Globe',

    color: 'sky',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    glowColor: 'shadow-sky-500/20',
    resources: 2500,
    description: 'Frontend, backend, full-stack development, frameworks, APIs, and modern web technologies.',
    difficulty: 'Beginner',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'Node.js', 'Databases']
  },
  {
    slug: 'mobile-development',
    name: 'Mobile Development',
    shortName: 'Mobile',
    icon: 'Smartphone',

    color: 'teal',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    glowColor: 'shadow-teal-500/20',
    resources: 1500,
    description: 'iOS, Android, and cross-platform app development with Swift, Kotlin, React Native, and Flutter.',
    difficulty: 'Intermediate',
    topics: ['iOS', 'Android', 'React Native', 'Flutter', 'UI/UX', 'App Stores']
  },
  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    icon: 'Cloud',

    color: 'cyan',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    resources: 1800,
    description: 'AWS, Azure, GCP, serverless architecture, cloud-native development, and DevOps practices.',
    difficulty: 'Intermediate',
    topics: ['AWS', 'Azure', 'GCP', 'Serverless', 'Containers', 'Architecture']
  },
  {
    slug: 'devops',
    name: 'DevOps',
    shortName: 'DevOps',
    icon: 'Settings',

    color: 'orange',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/20',
    resources: 1200,
    description: 'CI/CD, Docker, Kubernetes, infrastructure as code, monitoring, and site reliability engineering.',
    difficulty: 'Advanced',
    topics: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring', 'SRE']
  },
  {
    slug: 'game-development',
    name: 'Game Development',
    shortName: 'Game Dev',
    icon: 'Gamepad2',

    color: 'pink',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    glowColor: 'shadow-pink-500/20',
    resources: 1500,
    description: 'Unity, Unreal Engine, game design, 3D modeling, scripting, and interactive storytelling.',
    difficulty: 'Intermediate',
    topics: ['Unity', 'Unreal', 'Game Design', '3D Modeling', 'C#', 'C++']
  },
  {
    slug: 'blockchain',
    name: 'Blockchain',
    shortName: 'Blockchain',
    icon: 'Link',

    color: 'amber',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    glowColor: 'shadow-amber-500/20',
    resources: 800,
    description: 'Ethereum, Solidity, smart contracts, DeFi, Web3, and distributed ledger technology.',
    difficulty: 'Advanced',
    topics: ['Ethereum', 'Solidity', 'Smart Contracts', 'DeFi', 'Web3', 'Cryptography']
  }
]

// Engineering Subjects
export const engineeringSubjects: Subject[] = [
  {
    slug: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical',
    icon: 'Cog',

    color: 'orange',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/20',
    resources: 2000,
    description: 'Thermodynamics, fluid mechanics, solid mechanics, mechanical design, and manufacturing.',
    difficulty: 'Advanced',
    topics: ['Thermodynamics', 'Fluid Mechanics', 'Solid Mechanics', 'Design', 'Manufacturing', 'CAD']
  },
  {
    slug: 'electrical',
    name: 'Electrical Engineering',
    shortName: 'Electrical',
    icon: 'Zap',

    color: 'yellow',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    glowColor: 'shadow-yellow-500/20',
    resources: 2000,
    description: 'Circuit analysis, electronics, power systems, control systems, and signal processing.',
    difficulty: 'Advanced',
    topics: ['Circuits', 'Electronics', 'Power Systems', 'Controls', 'Signals', 'PCB Design']
  },
  {
    slug: 'civil',
    name: 'Civil Engineering',
    shortName: 'Civil',
    icon: 'Building2',

    color: 'stone',
    textColor: 'text-stone-400',
    bgColor: 'bg-stone-500/10',
    borderColor: 'border-stone-500/30',
    glowColor: 'shadow-stone-500/20',
    resources: 1800,
    description: 'Structural engineering, geotechnical, transportation, water resources, and construction.',
    difficulty: 'Advanced',
    topics: ['Structures', 'Geotechnical', 'Transportation', 'Water Resources', 'Construction', 'Materials']
  },
  {
    slug: 'chemical',
    name: 'Chemical Engineering',
    shortName: 'Chemical',
    icon: 'FlaskConical',

    color: 'emerald',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/20',
    resources: 1500,
    description: 'Process design, transport phenomena, reaction engineering, and process control.',
    difficulty: 'Advanced',
    topics: ['Process Design', 'Transport', 'Reactions', 'Control', 'Thermodynamics', 'Materials']
  },
  {
    slug: 'aerospace',
    name: 'Aerospace Engineering',
    shortName: 'Aerospace',
    icon: 'Rocket',

    color: 'sky',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    glowColor: 'shadow-sky-500/20',
    resources: 1200,
    description: 'Aerodynamics, flight mechanics, propulsion, orbital mechanics, and spacecraft design.',
    difficulty: 'Advanced',
    topics: ['Aerodynamics', 'Propulsion', 'Structures', 'Orbit', 'Avionics', 'Materials']
  },
  {
    slug: 'software',
    name: 'Software Engineering',
    shortName: 'Software Eng',
    icon: 'Code2',

    color: 'blue',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    resources: 2500,
    description: 'Software design, architecture, testing, project management, and engineering practices.',
    difficulty: 'Intermediate',
    topics: ['Design Patterns', 'Testing', 'Architecture', 'Agile', 'UML', 'Quality']
  },
  {
    slug: 'biomedical',
    name: 'Biomedical Engineering',
    shortName: 'Biomedical',
    icon: 'HeartPulse',

    color: 'rose',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    glowColor: 'shadow-rose-500/20',
    resources: 1200,
    description: 'Biomechanics, medical imaging, biomaterials, and neural engineering.',
    difficulty: 'Advanced',
    topics: ['Biomechanics', 'Imaging', 'Biomaterials', 'Neural Eng', 'Biosensors', 'Tissue']
  },
  {
    slug: 'industrial',
    name: 'Industrial Engineering',
    shortName: 'Industrial',
    icon: 'Factory',

    color: 'slate',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    glowColor: 'shadow-slate-500/20',
    resources: 1000,
    description: 'Operations research, supply chain, quality engineering, and systems optimization.',
    difficulty: 'Intermediate',
    topics: ['Operations Research', 'Supply Chain', 'Quality', 'Ergonomics', 'Systems', 'Lean']
  },
  {
    slug: 'environmental',
    name: 'Environmental Engineering',
    shortName: 'Environmental',
    icon: 'Leaf',

    color: 'green',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20',
    resources: 1000,
    description: 'Water treatment, air quality, waste management, and sustainability engineering.',
    difficulty: 'Intermediate',
    topics: ['Water Treatment', 'Air Quality', 'Waste', 'Remediation', 'Sustainability', 'Climate']
  },
  {
    slug: 'materials',
    name: 'Materials Science',
    shortName: 'Materials',
    icon: 'Gem',

    color: 'zinc',
    textColor: 'text-zinc-400',
    bgColor: 'bg-zinc-500/10',
    borderColor: 'border-zinc-500/30',
    glowColor: 'shadow-zinc-500/20',
    resources: 1000,
    description: 'Metallurgy, ceramics, polymers, nanomaterials, and material characterization.',
    difficulty: 'Advanced',
    topics: ['Metallurgy', 'Ceramics', 'Polymers', 'Nanomaterials', 'Characterization', 'Properties']
  }
]

// Arts Subjects
export const artsSubjects: Subject[] = [
  {
    slug: 'visual-arts',
    name: 'Visual Arts',
    shortName: 'Visual Arts',
    icon: 'Palette',

    color: 'pink',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    glowColor: 'shadow-pink-500/20',
    resources: 1500,
    description: 'Drawing, painting, sculpture, printmaking, and mixed media techniques.',
    difficulty: 'Beginner',
    topics: ['Drawing', 'Painting', 'Sculpture', 'Printmaking', 'Mixed Media', 'Techniques']
  },
  {
    slug: 'digital-art',
    name: 'Digital Art',
    shortName: 'Digital Art',
    icon: 'Monitor',

    color: 'fuchsia',
    textColor: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-500/10',
    borderColor: 'border-fuchsia-500/30',
    glowColor: 'shadow-fuchsia-500/20',
    resources: 2000,
    description: 'Digital illustration, concept art, 3D modeling, motion graphics, and UI/UX design.',
    difficulty: 'Intermediate',
    topics: ['Illustration', 'Concept Art', '3D Modeling', 'Motion Graphics', 'UI/UX', 'Procreate']
  },
  {
    slug: 'art-history',
    name: 'Art History',
    shortName: 'Art History',
    icon: 'Landmark',

    color: 'rose',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    glowColor: 'shadow-rose-500/20',
    resources: 1800,
    description: 'Art movements, historical periods, cultural contexts, and critical analysis.',
    difficulty: 'All Levels',
    topics: ['Ancient Art', 'Renaissance', 'Modern Art', 'Contemporary', 'Non-Western', 'Criticism']
  },
  {
    slug: 'music',
    name: 'Music',
    shortName: 'Music',
    icon: 'Music',

    color: 'purple',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    resources: 1500,
    description: 'Music theory, history, composition, production, and instrumental training.',
    difficulty: 'All Levels',
    topics: ['Theory', 'History', 'Composition', 'Production', 'Instruments', 'Ear Training']
  },
  {
    slug: 'performing-arts',
    name: 'Performing Arts',
    shortName: 'Performing',
    icon: 'Drama',

    color: 'violet',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    glowColor: 'shadow-violet-500/20',
    resources: 1200,
    description: 'Theater, acting, dance, opera, musical theater, and stagecraft.',
    difficulty: 'All Levels',
    topics: ['Acting', 'Dance', 'Theater', 'Directing', 'Stagecraft', 'Musical Theater']
  },
  {
    slug: 'film-media',
    name: 'Film & Media',
    shortName: 'Film',
    icon: 'Film',

    color: 'red',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/20',
    resources: 1500,
    description: 'Filmmaking, screenwriting, cinematography, editing, and media studies.',
    difficulty: 'Intermediate',
    topics: ['Screenwriting', 'Cinematography', 'Editing', 'Directing', 'Sound', 'Documentary']
  },
  {
    slug: 'photography',
    name: 'Photography',
    shortName: 'Photography',
    icon: 'Camera',

    color: 'orange',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/20',
    resources: 1200,
    description: 'Digital and film photography, composition, lighting, and post-processing.',
    difficulty: 'Beginner',
    topics: ['Composition', 'Lighting', 'Portraits', 'Landscape', 'Post-Processing', 'Film']
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    shortName: 'Design',
    icon: 'PenTool',

    color: 'amber',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    glowColor: 'shadow-amber-500/20',
    resources: 1500,
    description: 'Visual identity, typography, layout, branding, and digital design.',
    difficulty: 'Intermediate',
    topics: ['Typography', 'Layout', 'Branding', 'Color Theory', 'Illustrator', 'Figma']
  },
  {
    slug: 'architecture',
    name: 'Architecture',
    shortName: 'Architecture',
    icon: 'Building',

    color: 'cyan',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    resources: 1500,
    description: 'Architectural design, history, sustainable design, and urban planning.',
    difficulty: 'Advanced',
    topics: ['Design', 'History', 'Sustainability', 'Urban Planning', 'CAD', 'BIM']
  },
  {
    slug: 'fashion-design',
    name: 'Fashion Design',
    shortName: 'Fashion',
    icon: 'Shirt',

    color: 'indigo',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'shadow-indigo-500/20',
    resources: 800,
    description: 'Fashion illustration, pattern making, textiles, and fashion business.',
    difficulty: 'Intermediate',
    topics: ['Illustration', 'Pattern Making', 'Textiles', 'Sewing', 'Trends', 'Business']
  }
]

// Mathematics Subjects
export const mathematicsSubjects: Subject[] = [
  {
    slug: 'algebra',
    name: 'Algebra',
    shortName: 'Algebra',
    icon: 'Variable',

    color: 'indigo',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'shadow-indigo-500/20',
    resources: 1500,
    description: 'Elementary to advanced algebra, equations, functions, and abstract algebra.',
    difficulty: 'Beginner',
    topics: ['Elementary', 'Linear', 'Abstract', 'Group Theory', 'Ring Theory', 'Field Theory']
  },
  {
    slug: 'calculus',
    name: 'Calculus',
    shortName: 'Calculus',
    icon: 'TrendingUp',

    color: 'violet',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    glowColor: 'shadow-violet-500/20',
    resources: 2000,
    description: 'Differential, integral, multivariable calculus, and real analysis.',
    difficulty: 'Intermediate',
    topics: ['Derivatives', 'Integrals', 'Multivariable', 'Vector', 'Real Analysis', 'Complex']
  },
  {
    slug: 'linear-algebra',
    name: 'Linear Algebra',
    shortName: 'Linear Algebra',
    icon: 'Grid3X3',
    color: 'purple',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    resources: 1500,
    description: 'Vectors, matrices, vector spaces, eigenvalues, and linear transformations.',
    difficulty: 'Intermediate',
    topics: ['Vectors', 'Matrices', 'Vector Spaces', 'Eigenvalues', 'Transformations', 'Numerical']
  },
  {
    slug: 'statistics-probability',
    name: 'Statistics & Probability',
    shortName: 'Statistics',
    icon: 'PieChart',

    color: 'blue',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    resources: 1800,
    description: 'Descriptive and inferential statistics, probability theory, and statistical modeling.',
    difficulty: 'Intermediate',
    topics: ['Descriptive', 'Inferential', 'Probability', 'Regression', 'Bayesian', 'Experimental']
  },
  {
    slug: 'discrete-mathematics',
    name: 'Discrete Mathematics',
    shortName: 'Discrete Math',
    icon: 'Binary',

    color: 'cyan',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    resources: 1200,
    description: 'Logic, set theory, combinatorics, graph theory, and discrete structures.',
    difficulty: 'Intermediate',
    topics: ['Logic', 'Set Theory', 'Combinatorics', 'Graph Theory', 'Boolean', 'Algorithms']
  },
  {
    slug: 'number-theory',
    name: 'Number Theory',
    shortName: 'Number Theory',
    icon: 'Hash',

    color: 'teal',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    glowColor: 'shadow-teal-500/20',
    resources: 1000,
    description: 'Prime numbers, modular arithmetic, Diophantine equations, and cryptography.',
    difficulty: 'Advanced',
    topics: ['Primes', 'Modular', 'Diophantine', 'Cryptography', 'Analytic', 'Algebraic']
  },
  {
    slug: 'geometry-topology',
    name: 'Geometry & Topology',
    shortName: 'Geometry',
    icon: 'Hexagon',

    color: 'emerald',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/20',
    resources: 1200,
    description: 'Euclidean and non-Euclidean geometry, differential geometry, and topology.',
    difficulty: 'Advanced',
    topics: ['Euclidean', 'Non-Euclidean', 'Differential', 'Algebraic', 'Topology', 'Manifolds']
  },
  {
    slug: 'differential-equations',
    name: 'Differential Equations',
    shortName: 'Diff Eq',
    icon: 'Waves',

    color: 'green',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20',
    resources: 1000,
    description: 'ODEs, PDEs, numerical methods, dynamical systems, and chaos theory.',
    difficulty: 'Advanced',
    topics: ['ODEs', 'PDEs', 'Numerical', 'Dynamical', 'Chaos', 'Applications']
  },
  {
    slug: 'mathematical-logic',
    name: 'Mathematical Logic',
    shortName: 'Logic',
    icon: 'BrainCircuit',

    color: 'slate',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    glowColor: 'shadow-slate-500/20',
    resources: 800,
    description: 'Propositional logic, predicate logic, proof theory, and computability.',
    difficulty: 'Advanced',
    topics: ['Propositional', 'Predicate', 'Proof Theory', 'Model Theory', 'Set Theory', 'Computability']
  },
  {
    slug: 'applied-mathematics',
    name: 'Applied Mathematics',
    shortName: 'Applied Math',
    icon: 'Calculator',

    color: 'sky',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    glowColor: 'shadow-sky-500/20',
    resources: 1500,
    description: 'Mathematical modeling, optimization, operations research, and applications.',
    difficulty: 'Advanced',
    topics: ['Modeling', 'Optimization', 'Operations Research', 'Financial', 'Biology', 'Engineering']
  }
]

// Science Subjects (existing)
export const scienceSubjects: Subject[] = [
  {
    slug: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    icon: 'Atom',

    color: 'violet',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    glowColor: 'shadow-violet-500/20',
    resources: 15000,
    description: 'Mechanics, electromagnetism, thermodynamics, quantum physics, and relativity.',
    difficulty: 'All Levels',
    topics: ['Mechanics', 'E&M', 'Thermodynamics', 'Quantum', 'Relativity', 'Optics']
  },
  {
    slug: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    icon: 'FlaskConical',

    color: 'emerald',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/20',
    resources: 12000,
    description: 'Organic, inorganic, physical chemistry, biochemistry, and analytical methods.',
    difficulty: 'All Levels',
    topics: ['Organic', 'Inorganic', 'Physical', 'Biochemistry', 'Analytical', 'Materials']
  },
  {
    slug: 'biology',
    name: 'Biology',
    shortName: 'Biology',
    icon: 'Dna',

    color: 'green',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20',
    resources: 15000,
    description: 'Molecular biology, genetics, ecology, evolution, and physiology.',
    difficulty: 'All Levels',
    topics: ['Molecular', 'Genetics', 'Ecology', 'Evolution', 'Physiology', 'Cell Biology']
  },
  {
    slug: 'earth-science',
    name: 'Earth Science',
    shortName: 'Earth Science',
    icon: 'Mountain',

    color: 'amber',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    glowColor: 'shadow-amber-500/20',
    resources: 8000,
    description: 'Geology, meteorology, oceanography, and Earth systems.',
    difficulty: 'All Levels',
    topics: ['Geology', 'Meteorology', 'Oceanography', 'Climate', 'Rocks', 'Plate Tectonics']
  },
  {
    slug: 'astronomy',
    name: 'Astronomy',
    shortName: 'Astronomy',
    icon: 'Telescope',

    color: 'indigo',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'shadow-indigo-500/20',
    resources: 10000,
    description: 'Observational astronomy, astrophysics, cosmology, and planetary science.',
    difficulty: 'All Levels',
    topics: ['Observational', 'Astrophysics', 'Cosmology', 'Planets', 'Stars', 'Galaxies']
  },
  {
    slug: 'psychology',
    name: 'Psychology',
    shortName: 'Psychology',
    icon: 'Brain',

    color: 'pink',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    glowColor: 'shadow-pink-500/20',
    resources: 10000,
    description: 'Cognitive, behavioral, developmental, social, and clinical psychology.',
    difficulty: 'All Levels',
    topics: ['Cognitive', 'Behavioral', 'Developmental', 'Social', 'Clinical', 'Neuropsychology']
  },
  {
    slug: 'environmental',
    name: 'Environmental Science',
    shortName: 'Environmental',
    icon: 'Trees',

    color: 'teal',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    glowColor: 'shadow-teal-500/20',
    resources: 8000,
    description: 'Ecology, conservation, climate science, and sustainability.',
    difficulty: 'All Levels',
    topics: ['Ecology', 'Conservation', 'Climate', 'Sustainability', 'Biodiversity', 'Pollution']
  }
]

// All categories
export const categories: Category[] = [
  {
    slug: 'science',
    name: 'Science',
    icon: 'FlaskConical',
    primaryColor: 'violet',
    secondaryColor: 'purple',
    gradient: 'from-violet-500 to-purple-500',
    subjects: scienceSubjects
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: 'Cpu',

    primaryColor: 'cyan',
    secondaryColor: 'blue',
    gradient: 'from-cyan-500 to-blue-500',
    subjects: technologySubjects
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    icon: 'Cog',

    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradient: 'from-orange-500 to-amber-500',
    subjects: engineeringSubjects
  },
  {
    slug: 'arts',
    name: 'Arts',
    icon: 'Palette',

    primaryColor: 'pink',
    secondaryColor: 'rose',
    gradient: 'from-pink-500 to-rose-500',
    subjects: artsSubjects
  },
  {
    slug: 'mathematics',
    name: 'Mathematics',
    icon: 'SquareFunction',

    primaryColor: 'indigo',
    secondaryColor: 'violet',
    gradient: 'from-indigo-500 to-violet-500',
    subjects: mathematicsSubjects
  }
]

// Helper functions
export function getSubjectBySlug(slug: string): Subject | undefined {
  const allSubjects = [
    ...scienceSubjects,
    ...technologySubjects,
    ...engineeringSubjects,
    ...artsSubjects,
    ...mathematicsSubjects
  ]
  return allSubjects.find(s => s.slug === slug)
}

export function getSubjectsByCategory(categorySlug: string): Subject[] {
  const category = categories.find(c => c.slug === categorySlug)
  return category?.subjects || []
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export const totalSubjects = 47
export const totalResources = 139500
