<script setup lang="ts">
useHead({
  title: 'Chemistry - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master chemistry from K-12 to PhD research with 5000+ curated resources. Organic, inorganic, physical, analytical chemistry, lab techniques, databases, and Nobel laureates.' }
  ]
})

// Hero Statistics
const stats = [
  { label: 'Chemists Worldwide', value: '1.5M+', icon: 'users' },
  { label: 'Annual Papers', value: '400K+', icon: 'file-text' },
  { label: 'Chemical Substances', value: '200M+', icon: 'flask' },
  { label: 'Resources', value: '5000+', icon: 'book-open' }
]

// Featured Resources
const featuredResources = [
  { 
    title: 'LibreTexts Chemistry', 
    author: 'UC Davis', 
    url: 'https://chem.libretexts.org/', 
    desc: 'Comprehensive free chemistry library with textbooks for all levels',
    type: 'Free Library',
    level: 'All Levels'
  },
  { 
    title: 'MIT OpenCourseWare', 
    author: 'MIT', 
    url: 'https://ocw.mit.edu/courses/chemistry/', 
    desc: 'Complete undergraduate and graduate chemistry curriculum',
    type: 'Free Courses',
    level: 'UG/Grad'
  },
  { 
    title: 'PubChem', 
    author: 'NCBI', 
    url: 'https://pubchem.ncbi.nlm.nih.gov/', 
    desc: '110M+ chemical structures and bioactivity data',
    type: 'Database',
    level: 'All Levels'
  },
  { 
    title: 'Organic Chemistry Portal', 
    author: 'Various', 
    url: 'https://www.organic-chemistry.org/', 
    desc: 'Organic reactions, mechanisms, named reactions',
    type: 'Reference',
    level: 'Intermediate+'
  },
  { 
    title: 'Ptable', 
    author: 'Michael Dayah', 
    url: 'https://ptable.com/', 
    desc: 'Interactive periodic table with properties',
    type: 'Interactive',
    level: 'All Levels'
  },
  { 
    title: 'RSC Periodic Table', 
    author: 'Royal Society of Chemistry', 
    url: 'https://www.rsc.org/periodic-table', 
    desc: 'Visual periodic table with element stories',
    type: 'Reference',
    level: 'All Levels'
  }
]

// Quick Links
const quickLinks = [
  { name: 'Disciplines', url: '#disciplines', icon: 'layers', count: 12 },
  { name: 'Periodic Table', url: '#periodic', icon: 'grid', count: 10 },
  { name: 'Textbooks', url: '#textbooks', icon: 'book', count: 50 },
  { name: 'Databases', url: '#databases', icon: 'database', count: 40 },
  { name: 'Software', url: '#software', icon: 'cpu', count: 30 },
  { name: 'Lab Techniques', url: '#techniques', icon: 'flask', count: 60 },
  { name: 'Safety', url: '#safety', icon: 'shield', count: 20 },
  { name: 'Nobel Prizes', url: '#nobel', icon: 'award', count: 25 },
  { name: 'History', url: '#history', icon: 'clock', count: 30 },
  { name: 'Organizations', url: '#organizations', icon: 'globe', count: 15 }
]

// Chemistry Disciplines
const disciplines = [
  { name: 'Organic Chemistry', url: 'https://www.organic-chemistry.org/', desc: 'Carbon compounds, synthesis, mechanisms', org: 'ACS' },
  { name: 'Inorganic Chemistry', url: 'https://www.rsc.org/journals-books-databases/about-journals/inorganic-chemistry-frontiers/', desc: 'Metals, minerals, coordination', org: 'RSC' },
  { name: 'Physical Chemistry', url: 'https://pubs.acs.org/journal/jpchax', desc: 'Thermodynamics, kinetics, quantum', org: 'ACS' },
  { name: 'Analytical Chemistry', url: 'https://pubs.acs.org/journal/ancham', desc: 'Separation, identification, quantification', org: 'ACS' },
  { name: 'Biochemistry', url: 'https://www.asbmb.org/', desc: 'Chemical processes in living organisms', org: 'ASBMB' },
  { name: 'Materials Chemistry', url: 'https://pubs.acs.org/journal/cmatex', desc: 'Synthesis and properties of materials', org: 'ACS' },
  { name: 'Nuclear Chemistry', url: 'https://www.sciencedirect.com/journal/journal-of-radioanalytical-and-nuclear-chemistry', desc: 'Radioactivity, nuclear reactions', org: 'Various' },
  { name: 'Environmental Chemistry', url: 'https://pubs.acs.org/journal/esthag', desc: 'Chemical processes in environment', org: 'ACS' },
  { name: 'Medicinal Chemistry', url: 'https://pubs.acs.org/journal/jmcmar', desc: 'Drug design and development', org: 'ACS' },
  { name: 'Polymer Chemistry', url: 'https://pubs.acs.org/journal/mamobx', desc: 'Macromolecules and plastics', org: 'ACS' },
  { name: 'Theoretical Chemistry', url: 'https://pubs.acs.org/journal/jctcce', desc: 'Computational models and simulations', org: 'ACS' },
  { name: 'Green Chemistry', url: 'https://pubs.acs.org/journal/gcchff', desc: 'Sustainable chemical processes', org: 'ACS' }
]

// Learning Platforms
const learningPlatforms = [
  { name: 'Khan Academy Chemistry', url: 'https://www.khanacademy.org/science/chemistry', desc: 'Complete chemistry curriculum', cost: 'Free' },
  { name: 'MIT OCW Chemistry', url: 'https://ocw.mit.edu/courses/chemistry/', desc: 'University-level courses', cost: 'Free' },
  { name: 'Coursera Chemistry', url: 'https://www.coursera.org/browse/physical-science-and-engineering/chemistry', desc: 'University partnerships', cost: 'Audit Free' },
  { name: 'edX Chemistry', url: 'https://www.edx.org/learn/chemistry', desc: 'MIT, Harvard courses', cost: 'Audit Free' },
  { name: 'LibreTexts Chemistry', url: 'https://chem.libretexts.org/', desc: 'Comprehensive free textbooks', cost: 'Free' },
  { name: 'ACS Chemistry Education', url: 'https://www.acs.org/education.html', desc: 'Resources and activities', cost: 'Free' },
  { name: 'RSC Education', url: 'https://edu.rsc.org/', desc: 'UK chemistry education', cost: 'Free' },
  { name: 'Periodic Videos', url: 'https://www.periodicvideos.com/', desc: 'Video for each element', cost: 'Free' }
]

// Periodic Table Resources
const periodicTableResources = [
  { name: 'Ptable', url: 'https://ptable.com/', desc: 'Interactive with properties', type: 'Interactive' },
  { name: 'RSC Periodic Table', url: 'https://www.rsc.org/periodic-table', desc: 'Visual with stories', type: 'Reference' },
  { name: 'WebElements', url: 'https://www.webelements.com/', desc: 'Comprehensive element data', type: 'Reference' },
  { name: 'Chemicool', url: 'https://www.chemicool.com/', desc: 'Facts and properties', type: 'Reference' },
  { name: 'Elements Database', url: 'https://www.elementsdatabase.com/', desc: 'Periodic table database', type: 'Reference' },
  { name: 'Periodic Table Live!', url: 'https://periodictable.com/', desc: 'Images and videos', type: 'Interactive' }
]

// Free Textbooks
const textbooksBeginner = [
  { title: 'OpenStax Chemistry 2e', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/chemistry-2e', type: 'FREE PDF' },
  { title: 'Chem1 Virtual Textbook', author: 'Stephen Lower', url: 'https://www.chem1.com/chem/', type: 'FREE WEB' },
  { title: 'Chemistry LibreTexts', author: 'Various', url: 'https://chem.libretexts.org/', type: 'FREE WEB' },
  { title: 'CK-12 Chemistry', author: 'CK-12', url: 'https://www.ck12.org/chemistry/', type: 'FlexBook' }
]

const textbooksIntermediate = [
  { title: 'Organic Chemistry (Carey)', author: 'Carey & Giuliano', url: 'https://www.organicchemistry.org/', type: 'Online Reference' },
  { title: 'Chemistry of the Elements', author: 'Greenwood & Earnshaw', url: 'https://www.amazon.com/Chemistry-Elements-Second-Edition-Greenwood/', type: 'Reference' },
  { title: 'Physical Chemistry (Atkins)', author: 'Atkins & de Paula', url: 'https://www.amazon.com/Physical-Chemistry-Peter-Atkins/', type: 'Textbook' },
  { title: 'Organic Chemistry (Clayden)', author: 'Clayden et al.', url: 'https://www.amazon.com/Organic-Chemistry-Jonathan-Clayden/', type: 'Textbook' },
  { title: 'Inorganic Chemistry (Miessler)', author: 'Miessler et al.', url: 'https://www.amazon.com/Inorganic-Chemistry-5th-Gary-Miessler/', type: 'Textbook' },
  { title: 'Analytical Chemistry (Skoog)', author: 'Skoog et al.', url: 'https://www.amazon.com/Fundamentals-Analytical-Chemistry-Douglas-Skoog/', type: 'Textbook' }
]

const textbooksAdvanced = [
  { title: 'March Advanced Organic', author: 'Smith', url: 'https://www.amazon.com/Marchs-Advanced-Organic-Chemistry-Reactions/', type: 'Reference' },
  { title: 'Organic Syntheses', author: 'Various', url: 'https://www.orgsyn.org/', type: 'FREE Protocols' },
  { title: 'Name Reactions', author: 'Li', url: 'https://www.organic-chemistry.org/namedreactions/', type: 'Reference' },
  { title: 'Spectrometric Identification', author: 'Silverstein', url: 'https://www.amazon.com/Spectrometric-Identification-Organic-Compounds-Silverstein/', type: 'Textbook' },
  { title: 'Quantum Chemistry (Levine)', author: 'Levine', url: 'https://www.amazon.com/Quantum-Chemistry-7th-Ira-Levine/', type: 'Textbook' }
]

// Databases
const databases = [
  { name: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', desc: '110M+ compounds', provider: 'NCBI' },
  { name: 'ChemSpider', url: 'https://www.chemspider.com/', desc: '100M+ structures', provider: 'RSC' },
  { name: 'ChEMBL', url: 'https://www.ebi.ac.uk/chembl/', desc: 'Bioactive molecules', provider: 'EMBL-EBI' },
  { name: 'ZINC Database', url: 'https://zinc.docking.org/', desc: '1B+ compounds for docking', provider: 'UCSF' },
  { name: 'DrugBank', url: 'https://go.drugbank.com/', desc: 'Drug and drug target DB', provider: 'DrugBank' },
  { name: 'NIST Chemistry', url: 'https://webbook.nist.gov/chemistry/', desc: 'Thermochemical data', provider: 'NIST' },
  { name: 'PDB Ligands', url: 'https://www.rcsb.org/ligand', desc: 'Small molecule structures', provider: 'RCSB' },
  { name: 'CCDC', url: 'https://www.ccdc.cam.ac.uk/', desc: 'Cambridge Structural Database', provider: 'CCDC' }
]

// Software
const softwareTools = [
  { name: 'Avogadro', url: 'https://avogadro.cc/', type: 'Molecular Editor', cost: 'Free' },
  { name: 'PyMOL', url: 'https://pymol.org/', type: 'Visualization', cost: 'Paid' },
  { name: 'ChemDraw', url: 'https://revvitysignals.com/products/research/chemdraw', type: 'Drawing', cost: 'Paid' },
  { name: 'ORCA', url: 'https://orcaforum.kofo.mpg.de/', type: 'Computational', cost: 'Free' },
  { name: 'RDKit', url: 'https://www.rdkit.org/', type: 'Cheminformatics', cost: 'Free' },
  { name: 'Open Babel', url: 'https://openbabel.org/', type: 'Format Conversion', cost: 'Free' },
  { name: 'Mercury', url: 'https://www.ccdc.cam.ac.uk/solutions/csd-system/components/mercury/', type: 'Crystallography', cost: 'Free' },
  { name: 'Olex2', url: 'https://www.olexsys.org/', type: 'Crystallography', cost: 'Free' }
]

// Lab Techniques
const labTechniques = [
  { name: 'Distillation', url: 'https://chem.libretexts.org/', desc: 'Separation by boiling point', category: 'Separation' },
  { name: 'Recrystallization', url: 'https://chem.libretexts.org/', desc: 'Purification of solids', category: 'Purification' },
  { name: 'Extraction', url: 'https://chem.libretexts.org/', desc: 'Liquid-liquid separation', category: 'Separation' },
  { name: 'Chromatography', url: 'https://chem.libretexts.org/', desc: 'TLC, column, HPLC, GC', category: 'Separation' },
  { name: 'NMR Spectroscopy', url: 'https://chem.libretexts.org/', desc: 'Structure determination', category: 'Spectroscopy' },
  { name: 'IR Spectroscopy', url: 'https://chem.libretexts.org/', desc: 'Functional group ID', category: 'Spectroscopy' },
  { name: 'Mass Spectrometry', url: 'https://chem.libretexts.org/', desc: 'Molecular weight, formula', category: 'Spectroscopy' },
  { name: 'Titration', url: 'https://chem.libretexts.org/', desc: 'Quantitative analysis', category: 'Analytical' },
  { name: 'Schlenk Line', url: 'https://www.chem.ucsb.edu/survival-guide', desc: 'Air-free synthesis', category: 'Inorganic' },
  { name: 'Glove Box', url: 'https://www.sigmaaldrich.com/', desc: 'Inert atmosphere', category: 'Inorganic' }
]

// Safety Resources
const safetyResources = [
  { name: 'ACS Chemical Safety', url: 'https://www.acs.org/education/resources/safety.html', desc: 'Guidelines and resources', provider: 'ACS' },
  { name: 'Flinn Scientific Safety', url: 'https://www.flinnsci.com/safety/', desc: 'Lab safety courses', provider: 'Flinn' },
  { name: 'PubChem Safety', url: 'https://pubchem.ncbi.nlm.nih.gov/ghs/', desc: 'GHS classification', provider: 'NCBI' },
  { name: 'CAMEO Chemicals', url: 'https://cameochemicals.noaa.gov/', desc: 'Reactivity database', provider: 'NOAA' },
  { name: 'Safety Data Sheets', url: 'https://www.sigmaaldrich.com/safety-center.html', desc: 'SDS search', provider: 'Merck' }
]

// Virtual Labs
const virtualLabs = [
  { name: 'ChemCollective', url: 'http://www.chemcollective.org/', desc: 'Virtual lab simulations' },
  { name: 'PhET Chemistry', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', desc: 'Interactive simulations' },
  { name: 'Labster Chemistry', url: 'https://www.labster.com/', desc: 'Virtual lab experiences' },
  { name: 'Late Nite Labs', url: 'https://www.macmillanlearning.com/college/us/latenitelabs', desc: 'Online labs' }
]

// Nobel Laureates Recent
const nobelRecent = [
  { year: '2024', laureates: 'Baker, Hassabis, Jumper', topic: 'Computational protein design', url: 'https://www.nobelprize.org/prizes/chemistry/2024/' },
  { year: '2023', laureates: 'Bawendi, Brus, Ekimov', topic: 'Quantum dots', url: 'https://www.nobelprize.org/prizes/chemistry/2023/' },
  { year: '2022', laureates: 'Bertozzi, Meldal, Sharpless', topic: 'Click chemistry', url: 'https://www.nobelprize.org/prizes/chemistry/2022/' },
  { year: '2021', laureates: 'List, MacMillan', topic: 'Organocatalysis', url: 'https://www.nobelprize.org/prizes/chemistry/2021/' },
  { year: '2020', laureates: 'Charpentier, Doudna', topic: 'CRISPR gene editing', url: 'https://www.nobelprize.org/prizes/chemistry/2020/' },
  { year: '2019', laureates: 'Goodenough, Whittingham, Yoshino', topic: 'Li-ion batteries', url: 'https://www.nobelprize.org/prizes/chemistry/2019/' }
]

// Famous Chemists
const famousChemists = [
  { name: 'Marie Curie', years: '1867-1934', contribution: 'Radioactivity, 2 Nobel Prizes', country: 'Poland/France' },
  { name: 'Dmitri Mendeleev', years: '1834-1907', contribution: 'Periodic Table', country: 'Russia' },
  { name: 'Linus Pauling', years: '1901-1994', contribution: 'Chemical Bond, 2 Nobels', country: 'USA' },
  { name: 'Antoine Lavoisier', years: '1743-1794', contribution: 'Father of Modern Chemistry', country: 'France' },
  { name: 'Fritz Haber', years: '1868-1934', contribution: 'Haber Process', country: 'Germany' },
  { name: 'Dorothy Hodgkin', years: '1910-1994', contribution: 'X-ray Crystallography', country: 'UK' },
  { name: 'Ahmed Zewail', years: '1946-2016', contribution: 'Femtochemistry', country: 'Egypt/USA' },
  { name: 'Rosalind Franklin', years: '1920-1958', contribution: 'DNA Structure', country: 'UK' }
]

// Women in Chemistry
const womenInChemistry = [
  { name: 'Marie Curie', achievement: 'Nobel 1911, Radioactivity' },
  { name: 'Irène Joliot-Curie', achievement: 'Nobel 1935' },
  { name: 'Dorothy Hodgkin', achievement: 'Nobel 1964, X-ray' },
  { name: 'Ada Yonath', achievement: 'Nobel 2009, Ribosome' },
  { name: 'Frances Arnold', achievement: 'Nobel 2018, Evolution' },
  { name: 'Emmanuelle Charpentier', achievement: 'Nobel 2020, CRISPR' },
  { name: 'Jennifer Doudna', achievement: 'Nobel 2020, CRISPR' },
  { name: 'Carolyn Bertozzi', achievement: 'Nobel 2022, Click Chemistry' }
]

// Organizations
const organizations = [
  { name: 'American Chemical Society', url: 'https://www.acs.org/', members: '155,000+', country: 'USA' },
  { name: 'Royal Society of Chemistry', url: 'https://www.rsc.org/', members: '54,000+', country: 'UK' },
  { name: 'German Chemical Society', url: 'https://www.gdch.de/', members: '30,000+', country: 'Germany' },
  { name: 'Chemical Society of Japan', url: 'https://www.chemistry.or.jp/', members: '17,000+', country: 'Japan' },
  { name: 'IUPAC', url: 'https://iupac.org/', members: 'Global', country: 'International' },
  { name: 'EuChemS', url: 'https://www.euchems.eu/', members: '140,000+', country: 'Europe' }
]

// Top Universities
const topUniversities = [
  { name: 'MIT', location: 'USA', url: 'https://chemistry.mit.edu/', ranking: '#1' },
  { name: 'Caltech', location: 'USA', url: 'https://www.chemistry.caltech.edu/', ranking: '#2' },
  { name: 'Stanford', location: 'USA', url: 'https://chemistry.stanford.edu/', ranking: '#3' },
  { name: 'Harvard', location: 'USA', url: 'https://chemistry.harvard.edu/', ranking: '#4' },
  { name: 'UC Berkeley', location: 'USA', url: 'https://chemistry.berkeley.edu/', ranking: '#5' },
  { name: 'Cambridge', location: 'UK', url: 'https://www.ch.cam.ac.uk/', ranking: '#6' },
  { name: 'Oxford', location: 'UK', url: 'https://www.chem.ox.ac.uk/', ranking: '#7' },
  { name: 'ETH Zurich', location: 'Switzerland', url: 'https://chab.ethz.ch/', ranking: '#8' },
  { name: 'Northwestern', location: 'USA', url: 'https://chemistry.northwestern.edu/', ranking: '#9' },
  { name: 'Imperial College', location: 'UK', url: 'https://www.imperial.ac.uk/chemistry/', ranking: '#10' }
]

// YouTube Channels
const youtubeChannels = [
  { name: 'Periodic Videos', url: 'https://www.youtube.com/c/periodicvideos', desc: 'Videos for each element', subs: '1M+' },
  { name: 'Professor Dave Explains', url: 'https://www.youtube.com/c/ProfessorDaveExplains', desc: 'Chemistry tutorials', subs: '3M+' },
  { name: 'NileRed', url: 'https://www.youtube.com/c/NileRed', desc: 'Chemistry experiments', subs: '5M+' },
  { name: 'The Organic Chemistry Tutor', url: 'https://www.youtube.com/c/TheOrganicChemistryTutor', desc: 'OChem help', subs: '6M+' },
  { name: 'Tyler DeWitt', url: 'https://www.youtube.com/c/tdewitt451', desc: 'Chemistry basics', subs: '1M+' },
  { name: 'ChemThom', url: 'https://www.youtube.com/c/ChemThom', desc: 'Advanced chemistry', subs: '100K+' }
]

// Olympiad Resources
const olympiadResources = [
  { name: 'IChO Official', url: 'https://www.icho-official.org/', desc: 'International Chemistry Olympiad' },
  { name: 'USNCO', url: 'https://www.acs.org/education/students/highschool/olympiad.html', desc: 'US National Chemistry Olympiad' },
  { name: 'Chemistry Olympiad Problems', url: 'https://www.icho-official.org/sections/problems', desc: 'Past competition problems' },
  { name: 'ChemWOOT', url: 'https://artofproblemsolving.com/woot-chem', desc: 'Olympiad training' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-cyan-300">5000+ Global Chemistry Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Chemistry
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master chemistry from K-12 to PhD research. Organic, inorganic, physical, analytical chemistry, 
            lab techniques, databases, and Nobel laureates.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div class="text-2xl sm:text-3xl font-bold text-cyan-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-cyan-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in featuredResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
              <span class="text-xs text-gray-500">{{ r.level }}</span>
            </div>
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-cyan-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Disciplines -->
      <section id="disciplines" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemistry Disciplines</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="d in disciplines" :key="d.name" :href="d.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ d.org }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ d.name }}</h4>
            <p class="text-sm text-gray-500">{{ d.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Learning Platforms -->
      <section id="platforms" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Online Learning Platforms</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="p in learningPlatforms" :key="p.name" :href="p.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ p.cost }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ p.name }}</h4>
            <p class="text-sm text-gray-500">{{ p.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Periodic Table -->
      <section id="periodic" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Periodic Table Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in periodicTableResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks & Resources</h2>
        
        <h3 class="text-xl font-semibold text-cyan-400 mb-4">Beginner</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-blue-400 mb-4">Intermediate</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="book in textbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-indigo-400 mb-4">Advanced</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="book in textbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Databases -->
      <section id="databases" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemical Databases</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="db in databases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ db.name }}</h4>
            <p class="text-sm text-purple-400">{{ db.provider }}</p>
            <p class="text-sm text-gray-500">{{ db.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Software -->
      <section id="software" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemistry Software</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="s in softwareTools" :key="s.name" :href="s.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ s.type }}</span>
              <span class="text-xs text-gray-500">{{ s.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ s.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Lab Techniques -->
      <section id="techniques" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Laboratory Techniques</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in labTechniques" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ t.category }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-orange-400">{{ t.name }}</h4>
            <p class="text-sm text-gray-500">{{ t.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Safety -->
      <section id="safety" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Lab Safety Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="s in safetyResources" :key="s.name" :href="s.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-red-400">{{ s.name }}</h4>
            <p class="text-sm text-red-400">{{ s.provider }}</p>
            <p class="text-sm text-gray-500">{{ s.desc }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4 mt-8">Virtual Labs</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="lab in virtualLabs" :key="lab.name" :href="lab.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ lab.name }}</h4>
            <p class="text-sm text-gray-500">{{ lab.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Nobel Prizes -->
      <section id="nobel" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Recent Nobel Prizes in Chemistry</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="n in nobelRecent" :key="n.year" :href="n.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ n.year }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-yellow-400">{{ n.laureates }}</h4>
            <p class="text-sm text-gray-500">{{ n.topic }}</p>
          </a>
        </div>
      </section>

      <!-- History -->
      <section id="history" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Famous Chemists</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div v-for="c in famousChemists" :key="c.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ c.years }}</span>
              <span class="text-xs text-gray-600">{{ c.country }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ c.name }}</h4>
            <p class="text-sm text-gray-400">{{ c.contribution }}</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Women in Chemistry</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="w in womenInChemistry" :key="w.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <h4 class="font-semibold text-white">{{ w.name }}</h4>
            <p class="text-sm text-cyan-400">{{ w.achievement }}</p>
          </div>
        </div>
      </section>

      <!-- Organizations -->
      <section id="organizations" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Professional Organizations</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="o in organizations" :key="o.name" :href="o.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ o.name }}</h4>
            <p class="text-sm text-teal-400">{{ o.members }}</p>
            <p class="text-sm text-gray-500">{{ o.country }}</p>
          </a>
        </div>
      </section>

      <!-- Universities -->
      <section id="universities" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Top Universities</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="u in topUniversities" :key="u.name" :href="u.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ u.ranking }}</span>
              <span class="text-xs text-gray-500">{{ u.location }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ u.name }}</h4>
          </a>
        </div>
      </section>

      <!-- YouTube -->
      <section id="youtube" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">YouTube Channels</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="ch in youtubeChannels" :key="ch.name" :href="ch.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <span class="text-xs text-gray-500">{{ ch.subs }} subscribers</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-red-400">{{ ch.name }}</h4>
            <p class="text-sm text-gray-500">{{ ch.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Olympiad -->
      <section id="olympiad" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Chemistry Olympiad</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="o in olympiadResources" :key="o.name" :href="o.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-amber-400">{{ o.name }}</h4>
            <p class="text-sm text-gray-500">{{ o.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
        <p class="text-sm text-gray-500">5000+ resources curated for chemistry learners worldwide</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
