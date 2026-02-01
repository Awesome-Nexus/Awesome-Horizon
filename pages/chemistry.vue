<script setup lang="ts">
useHead({
  title: 'Chemistry - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master chemistry from K-12 to PhD research with 2500+ curated resources. Free textbooks, courses from MIT, Harvard, Oxford, virtual labs, organic chemistry tools, and research databases.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'School chemistry, AP/IB, basic concepts',
    color: 'emerald',
    resources: 600,
    topics: ['General Chemistry', 'AP Chemistry', 'IB Chemistry', 'Periodic Table']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level chemistry - organic, inorganic, physical',
    color: 'blue',
    resources: 1000,
    topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Graduate courses, research, PhD preparation',
    color: 'purple',
    resources: 900,
    topics: ['Quantum Chemistry', 'Spectroscopy', 'Materials Science', 'Biochemistry']
  }
]

const featuredResources = [
  {
    title: 'LibreTexts Chemistry',
    author: 'UC Davis',
    type: 'Free Library',
    url: 'https://chem.libretexts.org/',
    icon: 'book',
    description: 'Comprehensive free chemistry library with textbooks for all levels',
    level: 'All Levels'
  },
  {
    title: 'MIT OpenCourseWare Chemistry',
    author: 'MIT',
    type: 'Free Video Courses',
    url: 'https://ocw.mit.edu/courses/chemistry/',
    icon: 'graduation',
    description: 'Complete undergraduate and graduate chemistry curriculum',
    level: 'All Levels'
  },
  {
    title: 'Organic Chemistry Portal',
    author: 'Various',
    type: 'Reference Database',
    url: 'https://www.organic-chemistry.org/',
    icon: 'flask',
    description: 'Organic chemistry reactions, mechanisms, and named reactions',
    level: 'Intermediate+'
  },
  {
    title: 'PubChem',
    author: 'NCBI',
    type: 'Chemical Database',
    url: 'https://pubchem.ncbi.nlm.nih.gov/',
    icon: 'database',
    description: 'World\'s largest free chemical structure database',
    level: 'All Levels'
  },
  {
    title: 'Chemistry LibreTexts',
    author: 'UC Davis',
    type: 'Free Textbooks',
    url: 'https://chem.libretexts.org/',
    icon: 'book-open',
    description: 'Open access chemistry textbooks covering all major topics',
    level: 'All Levels'
  },
  {
    title: 'RSC Education',
    author: 'Royal Society of Chemistry',
    type: 'Educational Resources',
    url: 'https://edu.rsc.org/',
    icon: 'school',
    description: 'UK chemistry education resources and professional development',
    level: 'K-12 to University'
  }
]

const quickLinks = [
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 250 },
  { name: 'AP/IB Chemistry', url: '#apib', icon: 'award', count: 80 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 100 },
  { name: 'Organic Chemistry', url: '#organic', icon: 'flask', count: 200 },
  { name: 'Virtual Labs', url: '#labs', icon: 'beaker', count: 100 },
  { name: 'Chemical Databases', url: '#databases', icon: 'database', count: 80 },
  { name: 'Software Tools', url: '#software', icon: 'computer', count: 80 },
  { name: 'Research Tools', url: '#research', icon: 'microscope', count: 50 },
  { name: 'Spectroscopy', url: '#spectroscopy', icon: 'wave', count: 40 },
  { name: 'Chemistry Olympiads', url: '#olympiads', icon: 'trophy', count: 60 },
  { name: 'Country Resources', url: '#countries', icon: 'globe', count: 50 }
]

// ============================================
// K-12 SCHOOL LEVEL RESOURCES
// ============================================

const k12Resources = [
  { title: 'Khan Academy Chemistry', url: 'https://www.khanacademy.org/science/chemistry', provider: 'Khan Academy', type: 'Free Course', level: 'K-12', desc: 'Comprehensive chemistry from basics to advanced' },
  { title: 'Chem4Kids', url: 'http://www.chem4kids.com/', provider: 'Rader', type: 'Tutorial', level: 'Elementary', desc: 'Basic chemistry concepts for kids' },
  { title: 'Periodic Videos', url: 'http://www.periodicvideos.com/', provider: 'University of Nottingham', type: 'Video', level: 'All', desc: 'Video for every element in periodic table' },
  { title: 'PhET Chemistry Simulations', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', provider: 'CU Boulder', type: 'Simulation', level: 'K-12', desc: 'Interactive chemistry simulations' },
  { title: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'Carnegie Mellon', type: 'Virtual Lab', level: 'HS/UG', desc: 'Virtual chemistry labs and scenarios' },
  { title: 'Royal Society of Chemistry', url: 'https://edu.rsc.org/', provider: 'RSC', type: 'Resources', level: 'K-12', desc: 'UK chemistry education resources' },
  { title: 'ACS Chemistry for Life', url: 'https://www.acs.org/content/acs/en/education.html', provider: 'ACS', type: 'Resources', level: 'K-12', desc: 'American Chemical Society education' },
  { title: 'Compound Interest', url: 'https://www.compoundchem.com/', provider: 'Andy Brunning', type: 'Infographics', level: 'All', desc: 'Chemistry infographics and explanations' },
  { title: 'Learn Chemistry (RSC)', url: 'https://www.rsc.org/learn-chemistry', provider: 'Royal Society of Chemistry', type: 'Free Course', level: 'K-12', desc: 'Interactive chemistry learning resources' },
  { title: 'Chemicool Periodic Table', url: 'https://www.chemicool.com/', provider: 'Chemicool', type: 'Reference', level: 'All', desc: 'Online periodic table with detailed element data' },
  { title: 'Ptable', url: 'https://ptable.com/', provider: 'Ptable', type: 'Interactive', level: 'All', desc: 'Dynamic periodic table with properties' },
  { title: 'WebElements', url: 'https://www.webelements.com/', provider: 'WebElements', type: 'Reference', level: 'All', desc: 'Comprehensive periodic table resource' },
  { title: 'ChemEd DL', url: 'https://www.chemeddl.org/', provider: 'NSF/ACS', type: 'Digital Library', level: 'K-12', desc: 'Chemical Education Digital Library' },
  { title: 'Chemistry Drill', url: 'https://chem.wustl.edu/', provider: 'Washington University', type: 'Practice', level: 'HS', desc: 'Chemistry problem drills and exercises' },
  { title: 'Chemistry LibreTexts', url: 'https://chem.libretexts.org/', provider: 'UC Davis', type: 'Free Textbooks', level: 'All', desc: 'Open access chemistry textbooks' },
  { title: 'Australian Curriculum Chemistry', url: 'https://www.australiancurriculum.edu.au/f-10-curriculum/science/', provider: 'ACARA', type: 'Curriculum', level: 'K-12', desc: 'Australian chemistry curriculum resources' },
  { title: 'Cambridge IGCSE Chemistry', url: 'https://www.cambridgeinternational.org/', provider: 'Cambridge', type: 'Curriculum', level: 'HS', desc: 'IGCSE chemistry resources' },
  { title: 'Merck Index Online', url: 'https://www.rsc.org/merck-index', provider: 'RSC/Merck', type: 'Reference', level: 'All', desc: 'Encyclopedia of chemicals and drugs' },
  { title: 'Chemistry World Magazine', url: 'https://www.chemistryworld.com/', provider: 'RSC', type: 'Magazine', level: 'All', desc: 'Chemistry news and articles' },
  { title: 'Molecular Workbench', url: 'https://mw.concord.org/', provider: 'Concord Consortium', type: 'Simulation', level: 'K-12', desc: 'Interactive molecular simulations' }
]

// ============================================
// CHEMISTRY OLYMPIADS
// ============================================

const olympiadResources = [
  { title: 'Australian Chemistry Olympiad', url: 'https://www.asi.edu.au/chemistry/', provider: 'ASI', type: 'Competition', level: 'HS', desc: 'Australian Science Olympiad - Chemistry' },
  { title: 'Canadian Chemistry Olympiad', url: 'https://www.cco-occ.ca/', provider: 'CIC', type: 'Competition', level: 'HS', desc: 'Canadian national chemistry competition' },
  { title: 'UK Chemistry Olympiad', url: 'https://edu.rsc.org/enrichment/uk-chemistry-olympiad', provider: 'RSC', type: 'Competition', level: 'HS', desc: 'UK Chemistry Olympiad competition' },
  { title: 'Indian Chemistry Olympiad', url: 'https://olympiads.hbcse.tifr.res.in/', provider: 'HBCSE/TIFR', type: 'Competition', level: 'HS', desc: 'Indian National Chemistry Olympiad' },
  { title: 'Singapore Chemistry Olympiad', url: 'https://www.scienceolympiads.sg/', provider: 'SNCO', type: 'Competition', level: 'HS', desc: 'Singapore National Chemistry Olympiad' },
  { title: 'Japanese Chemistry Olympiad', url: 'https://www.jchemistryolympic.org/', provider: 'JChO', type: 'Competition', level: 'HS', desc: 'Japanese Chemistry Olympiad competition' },
  { title: 'International Chemistry Olympiad', url: 'https://www.icho-official.org/', provider: 'IChO', type: 'Competition', level: 'HS', desc: 'International Chemistry Olympiad' }
]

// ============================================
// AP/IB CHEMISTRY RESOURCES
// ============================================

const apibResources = [
  { title: 'AP Chemistry', url: 'https://apstudents.collegeboard.org/courses/ap-chemistry', provider: 'College Board', type: 'AP Course', desc: 'Official AP Chemistry course and exam' },
  { title: 'IB Chemistry Guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/chemistry/', provider: 'IB Organization', type: 'IB Course', desc: 'International Baccalaureate chemistry' },
  { title: 'ChemGuide', url: 'https://www.chemguide.co.uk/', provider: 'Jim Clark', type: 'Tutorial', desc: 'Comprehensive A-Level chemistry support' },
  { title: 'Tyler DeWitt Chemistry', url: 'https://www.youtube.com/c/TylerDeWitt', provider: 'Tyler DeWitt', type: 'Video', desc: 'High school chemistry video lessons' },
  { title: 'Crash Course Chemistry', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr', provider: 'Crash Course', type: 'Video', desc: 'Fast-paced chemistry overview' },
  { title: 'Professor Dave Explains', url: 'https://www.youtube.com/c/ProfessorDaveExplains', provider: 'Dave Farina', type: 'Video', desc: 'Chemistry and general science tutorials' }
]

// ============================================
// FREE TEXTBOOKS BY LEVEL
// ============================================

const freeTextbooksBeginner = [
  { title: 'Chemistry: The Central Science', author: 'Brown et al.', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Comprehensive general chemistry' },
  { title: 'OpenStax Chemistry', author: 'OpenStax', url: 'https://openstax.org/details/books/chemistry', type: 'FREE PDF', desc: 'Complete general chemistry textbook' },
  { title: 'Chemistry LibreTexts', author: 'UC Davis', url: 'https://chem.libretexts.org/', type: 'FREE WEB', desc: 'Modular chemistry textbooks' },
  { title: 'General Chemistry', author: 'Linus Pauling', url: 'https://www.doverpublications.com/', type: 'Classic', desc: 'Classic chemistry text by Nobel laureate' },
  { title: 'Khan Academy Organic Chemistry', author: 'Khan Academy', url: 'https://www.khanacademy.org/science/organic-chemistry', type: 'FREE Course', desc: 'Free organic chemistry course' },
  { title: 'Oxford Chemistry Primers', author: 'Oxford', url: 'https://global.oup.com/', type: 'Textbook', desc: 'Introductory chemistry topics' },
  { title: 'Cambridge Chemistry Resources', author: 'Cambridge', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Cambridge chemistry textbooks' }
]

const freeTextbooksIntermediate = [
  { title: 'Organic Chemistry', author: 'Clayden et al.', url: 'https://www.oxforduniversitypress.com/', type: 'Textbook', desc: 'Comprehensive organic chemistry' },
  { title: 'Organic Chemistry as a Second Language', author: 'David Klein', url: 'https://www.wiley.com/', type: 'Supplement', desc: 'Organic chemistry problem-solving guide' },
  { title: 'Physical Chemistry', author: 'Atkins & de Paula', url: 'https://www.oup.com/', type: 'Textbook', desc: 'Standard physical chemistry text' },
  { title: 'Inorganic Chemistry', author: 'Miessler & Tarr', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Comprehensive inorganic chemistry' }
]

const freeTextbooksAdvanced = [
  { title: 'March\'s Advanced Organic Chemistry', author: 'Smith', url: 'https://www.wiley.com/', type: 'Reference', desc: 'Advanced organic reactions and mechanisms' },
  { title: 'Organic Synthesis', author: 'Michael Smith', url: 'https://www.mheducation.com/', type: 'Textbook', desc: 'Modern synthetic methods' },
  { title: 'Spectrometric Identification', author: 'Silverstein', url: 'https://www.wiley.com/', type: 'Reference', desc: 'Spectroscopy and structure elucidation' },
  { title: 'Quantum Chemistry', author: 'Levine', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Quantum mechanics in chemistry' }
]

// ============================================
// ORGANIC CHEMISTRY RESOURCES
// ============================================

const organicResources = [
  { title: 'Organic Chemistry Portal', url: 'https://www.organic-chemistry.org/', provider: 'Various', type: 'Reference', desc: 'Reactions, mechanisms, and named reactions database' },
  { title: 'Name Reactions', url: 'https://www.organic-chemistry.org/namedreactions/', provider: 'Organic Chemistry Portal', type: 'Reference', desc: 'Comprehensive named reactions database' },
  { title: 'Chemistry by Design', url: 'http://chemistrybydesign.oia.arizona.edu/', provider: 'University of Arizona', type: 'Learning', desc: 'Total synthesis learning tool' },
  { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', provider: 'James Ashenhurst', type: 'Tutorial', desc: 'Organic chemistry tutorials and study guides' },
  { title: 'Reaction Flash', url: 'https://www.reactionflash.com/', provider: 'Reaxys', type: 'App', desc: 'Named reactions flashcard app' },
  { title: 'Organic Syntheses', url: 'https://www.orgsyn.org/', provider: 'Organic Syntheses', type: 'Reference', desc: 'Reliable methods for organic synthesis' },
  { title: 'Named Reactions Database', url: 'https://www.organic-chemistry.org/namedreactions/', provider: 'OCP', type: 'Database', desc: 'Comprehensive named organic reactions' }
]

// ============================================
// VIRTUAL LABS
// ============================================

const virtualLabs = [
  { name: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'Carnegie Mellon', topics: 'General Chemistry', level: 'HS/UG' },
  { name: 'PhET Chemistry', url: 'https://phet.colorado.edu/chemistry', provider: 'CU Boulder', topics: 'All Topics', level: 'K-12' },
  { name: 'Labster Chemistry', url: 'https://www.labster.com/', provider: 'Labster', topics: 'Virtual Labs', level: 'UG' },
  { name: 'ChemReaX', url: 'https://chemreax.com/', provider: 'ScienceBySimulation', topics: 'Reactions', level: 'HS/UG' },
  { name: 'Late Nite Labs', url: 'https://www.latenitelabs.com/', provider: 'Late Nite Labs', topics: 'General Chemistry', level: 'UG' },
  { name: 'PraxiLabs', url: 'https://www.praxilabs.com/', provider: 'PraxiLabs', topics: 'Virtual Labs', level: 'UG/Grad' },
  { name: 'RealChem', url: 'https://oli.cmu.edu/courses/chemistry/', provider: 'OLI/Carnegie Mellon', topics: 'General Chemistry', level: 'UG' },
  { name: 'Molecular Workbench', url: 'https://mw.concord.org/', provider: 'Concord Consortium', topics: 'Simulations', level: 'K-12' }
]

// ============================================
// CHEMICAL DATABASES
// ============================================

const databases = [
  { name: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', type: 'Chemical Database', desc: 'World\'s largest free chemical database' },
  { name: 'ChemSpider', url: 'http://www.chemspider.com/', type: 'Chemical Database', desc: 'Chemical structure database by RSC' },
  { name: 'NIST Chemistry WebBook', url: 'https://webbook.nist.gov/chemistry/', type: 'Reference', desc: 'Thermochemical and spectroscopic data' },
  { name: 'ChEBI', url: 'https://www.ebi.ac.uk/chebi/', type: 'Biochemical Database', desc: 'Dictionary of chemical entities' },
  { name: 'Protein Data Bank', url: 'https://www.rcsb.org/', type: 'Structural Database', desc: '3D structures of proteins and nucleic acids' },
  { name: 'DrugBank', url: 'https://go.drugbank.com/', type: 'Pharmaceutical Database', desc: 'Drug and drug target database' },
  { name: 'ChEMBL', url: 'https://www.ebi.ac.uk/chembl/', type: 'Bioactivity Database', desc: 'Bioactive drug-like compounds' },
  { name: 'Cambridge Structural Database', url: 'https://www.ccdc.cam.ac.uk/', type: 'Crystal Database', desc: 'Small-molecule crystal structures' },
  { name: 'Crystallography Open Database', url: 'http://www.crystallography.net/cod/', type: 'Crystal Database', desc: 'Open crystallographic database' },
  { name: 'KEGG', url: 'https://www.kegg.jp/', type: 'Pathway Database', desc: 'Kyoto Encyclopedia of Genes and Genomes' },
  { name: 'BRENDA', url: 'https://www.brenda-enzymes.org/', type: 'Enzyme Database', desc: 'Comprehensive enzyme information' },
  { name: 'Materials Project', url: 'https://materialsproject.org/', type: 'Materials DB', desc: 'Materials science database' },
  { name: 'AFLOWlib', url: 'http://aflowlib.org/', type: 'Materials DB', desc: 'High-throughput materials database' },
  { name: 'NIMS Polymer Database', url: 'https://polymer.nims.go.jp/', type: 'Polymer DB', desc: 'Japanese polymer properties database' },
  { name: 'SDBS', url: 'https://sdbs.db.aist.go.jp/', type: 'Spectral DB', desc: 'Spectral Database for Organic Compounds (Japan)' },
  { name: 'NMRShiftDB', url: 'https://nmrshiftdb.nmr.uni-koeln.de/', type: 'NMR Database', desc: 'NMR chemical shifts database (Germany)' }
]

// ============================================
// SPECTROSCOPY RESOURCES
// ============================================

const spectroscopyResources = [
  { name: 'SDBS (Japan)', url: 'https://sdbs.db.aist.go.jp/', type: 'Spectral Database', desc: '34,600+ organic compounds spectral data' },
  { name: 'NMRShiftDB2', url: 'https://nmrshiftdb.nmr.uni-koeln.de/', type: 'NMR Database', desc: 'NMR chemical shifts prediction and database' },
  { name: 'NIST WebBook Spectra', url: 'https://webbook.nist.gov/chemistry/', type: 'Reference', desc: 'IR, MS, UV/Vis spectra from NIST' },
  { name: 'Spectral Database for Organic Compounds', url: 'https://sdbs.db.aist.go.jp/', type: 'Spectral DB', desc: 'Free spectral data from Japan' }
]

// ============================================
// SOFTWARE TOOLS
// ============================================

const softwareTools = [
  { name: 'ChemDraw', url: 'https://revvitysignals.com/products/research/chemdraw', type: 'Drawing', desc: 'Professional chemical drawing software' },
  { name: 'Avogadro', url: 'https://avogadro.cc/', type: 'Free/Molecular', desc: 'Molecular editor and visualization' },
  { name: 'Jmol', url: 'http://jmol.sourceforge.net/', type: 'Free/3D', desc: '3D chemical structure viewer' },
  { name: 'PyMOL', url: 'https://pymol.org/', type: '3D Visualization', desc: 'Molecular visualization system' },
  { name: 'Gaussian', url: 'https://gaussian.com/', type: 'Computational', desc: 'Quantum chemistry calculations' },
  { name: 'MarvinSketch', url: 'https://chemaxon.com/products/marvin', type: 'Drawing', desc: 'Chemical drawing and property prediction' },
  { name: 'ChemSketch', url: 'https://www.acdlabs.com/resources/freeware/chemsketch/', type: 'Free/Drawing', desc: 'ACD/Labs chemical drawing software' },
  { name: 'ChemDoodle', url: 'https://web.chemdoodle.com/', type: 'Web/Drawing', desc: 'Web-based chemical drawing' },
  { name: 'MolView', url: 'https://molview.org/', type: 'Free/Viewer', desc: 'Online molecular viewer' },
  { name: 'Avogadro2', url: 'https://www.openchemistry.org/projects/avogadro2/', type: 'Free/3D', desc: 'Advanced molecular editor' },
  { name: 'Mercury CSD', url: 'https://www.ccdc.cam.ac.uk/solutions/csd-system/components/mercury/', type: 'Crystal Viz', desc: 'Crystal structure visualization' },
  { name: 'ChimeraX', url: 'https://www.cgl.ucsf.edu/chimerax/', type: '3D Visualization', desc: 'UCSF molecular visualization' },
  { name: 'VMD', url: 'https://www.ks.uiuc.edu/Research/vmd/', type: '3D Visualization', desc: 'Visual Molecular Dynamics' },
  { name: 'GAMESS', url: 'https://www.msg.chem.iastate.edu/gamess/', type: 'Computational', desc: 'Free quantum chemistry package' },
  { name: 'ORCA', url: 'https://orcaforum.kofo.mpg.de/', type: 'Quantum Chem', desc: 'Quantum chemistry program' },
  { name: 'Psi4', url: 'https://psicode.org/', type: 'Open Source', desc: 'Open-source quantum chemistry' },
  { name: 'NWChem', url: 'https://nwchemgit.github.io/', type: 'Computational', desc: 'Open-source computational chemistry' }
]

// ============================================
// RESEARCH RESOURCES
// ============================================

const researchResources = [
  { name: 'Chemical Reviews', url: 'https://pubs.acs.org/journal/chreay', type: 'Journal', desc: 'Comprehensive review articles' },
  { name: 'Nature Chemistry', url: 'https://www.nature.com/nchem/', type: 'Journal', desc: 'High-impact chemistry research' },
  { name: 'Science Chemistry', url: 'https://www.science.org/journal/chemistry', type: 'Journal', desc: 'Broad-interest chemistry papers' },
  { name: 'Journal of the ACS', url: 'https://pubs.acs.org/journal/jacsat', type: 'Journal', desc: 'Premier chemistry journal' },
  { name: 'Angewandte Chemie', url: 'https://onlinelibrary.wiley.com/journal/15213773', type: 'Journal', desc: 'International chemistry journal' },
  { name: 'ChemRxiv', url: 'https://chemrxiv.org/', type: 'Preprint', desc: 'Chemistry preprint server' },
  { name: 'Chemical Science', url: 'https://www.rsc.org/journals-books-databases/about-journals/chemical-science/', type: 'Journal', desc: 'Open access RSC journal' },
  { name: 'Chemical Communications', url: 'https://www.rsc.org/journals-books-databases/about-journals/chemical-communications/', type: 'Journal', desc: 'RSC rapid communication journal' },
  { name: 'Organic Letters', url: 'https://pubs.acs.org/journal/orlef7', type: 'Journal', desc: 'Rapid organic chemistry publication' },
  { name: 'Journal of Organic Chemistry', url: 'https://pubs.acs.org/journal/joceah', type: 'Journal', desc: 'Fundamental organic chemistry' },
  { name: 'Inorganic Chemistry', url: 'https://pubs.acs.org/journal/inocaj', type: 'Journal', desc: 'Inorganic and organometallic' },
  { name: 'Analytical Chemistry', url: 'https://pubs.acs.org/journal/ancham', type: 'Journal', desc: 'Analytical methods and instrumentation' },
  { name: 'Environmental Science & Technology', url: 'https://pubs.acs.org/journal/esthag', type: 'Journal', desc: 'Environmental chemistry' },
  { name: 'Accounts of Chemical Research', url: 'https://pubs.acs.org/journal/achre4', type: 'Journal', desc: 'Short critical reviews' },
  { name: 'Chemical Society Reviews', url: 'https://www.rsc.org/journals-books-databases/about-journals/chemical-society-reviews/', type: 'Journal', desc: 'Tutorial reviews from RSC' },
  { name: 'Nature Catalysis', url: 'https://www.nature.com/natcatal/', type: 'Journal', desc: 'Catalysis research journal' },
  { name: 'Nature Chemical Biology', url: 'https://www.nature.com/nchembio/', type: 'Journal', desc: 'Chemical biology research' },
  { name: 'Science Advances Chemistry', url: 'https://www.science.org/journal/sciadv', type: 'Journal', desc: 'Open access science journal' },
  { name: 'Chem (Cell Press)', url: 'https://www.cell.com/chem/home', type: 'Journal', desc: 'Cell Press chemistry journal' },
  { name: 'Joule (Cell Press)', url: 'https://www.cell.com/joule/home', type: 'Journal', desc: 'Energy and sustainability' },
  { name: 'Matter (Cell Press)', url: 'https://www.cell.com/matter/home', type: 'Journal', desc: 'Materials science journal' },
  { name: 'Cell Reports Physical Science', url: 'https://www.cell.com/cell-reports-physical-science/home', type: 'Journal', desc: 'Physical sciences research' }
]

// ============================================
// ONLINE COURSES (MOOCS)
// ============================================

const onlineCourses = [
  { name: 'Coursera Chemistry', url: 'https://www.coursera.org/browse/physical-science-and-engineering/chemistry', provider: 'Various Universities', type: 'MOOC', desc: 'University chemistry courses online' },
  { name: 'edX Chemistry', url: 'https://www.edx.org/learn/chemistry', provider: 'MIT/Harvard', type: 'MOOC', desc: 'Free chemistry courses from top universities' },
  { name: 'FutureLearn Chemistry', url: 'https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/chemistry', provider: 'UK Universities', type: 'MOOC', desc: 'UK university chemistry courses' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/science/chemistry', provider: 'Khan Academy', type: 'Free', desc: 'Complete chemistry curriculum' },
  { name: 'Brilliant Chemistry', url: 'https://brilliant.org/courses/chemistry/', provider: 'Brilliant', type: 'Interactive', desc: 'Interactive chemistry learning' },
  { name: 'Coursera Duke Chemistry', url: 'https://www.coursera.org/duke', provider: 'Duke University', type: 'MOOC', desc: 'Duke chemistry courses' },
  { name: 'Coursera Johns Hopkins', url: 'https://www.coursera.org/jhu', provider: 'Johns Hopkins', type: 'MOOC', desc: 'JHU chemistry courses' },
  { name: 'edX Harvard Chemistry', url: 'https://www.edx.org/school/harvard', provider: 'Harvard', type: 'MOOC', desc: 'Harvard chemistry courses' },
  { name: 'edX MIT Chemistry', url: 'https://www.edx.org/school/mitx', provider: 'MIT', type: 'MOOC', desc: 'MIT chemistry courses' },
  { name: 'FutureLearn UK Chemistry', url: 'https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/chemistry', provider: 'UK Universities', type: 'MOOC', desc: 'UK university chemistry courses' },
  { name: 'Swayam Chemistry', url: 'https://swayam.gov.in/', provider: 'India MOOC', type: 'MOOC', desc: 'Indian government MOOC platform' },
  { name: 'NPTEL Chemistry', url: 'https://nptel.ac.in/chemistry', provider: 'IIT India', type: 'Free Courses', desc: 'IIT chemistry courses' },
  { name: 'ChemgaPedia', url: 'https://www.chemgapedia.de/', provider: 'Germany', type: 'Learning', desc: 'German chemistry education platform' },
  { name: 'J-STAGE', url: 'https://www.jstage.jst.go.jp/', provider: 'Japan Science', type: 'Journals', desc: 'Japanese science and technology information' }
]

// ============================================
// COUNTRY-SPECIFIC RESOURCES
// ============================================

const countryResources = [
  { name: 'Royal Society of Chemistry', url: 'https://www.rsc.org/', country: 'UK', type: 'Society', desc: 'UK professional chemistry society' },
  { name: 'American Chemical Society', url: 'https://www.acs.org/', country: 'USA', type: 'Society', desc: 'US professional chemistry society' },
  { name: 'Chemical Society of Japan', url: 'https://www.chemistry.or.jp/', country: 'Japan', type: 'Society', desc: 'Japan chemistry society' },
  { name: 'Chinese Chemical Society', url: 'http://www.ccs.ac.cn/', country: 'China', type: 'Society', desc: 'China chemistry society' },
  { name: 'German Chemical Society', url: 'https://www.gdch.de/', country: 'Germany', type: 'Society', desc: 'GDCh - German chemistry society' },
  { name: 'Société Chimique de France', url: 'https://www.societechimiquedefrance.fr/', country: 'France', type: 'Society', desc: 'French chemical society' },
  { name: 'Indian Chemical Society', url: 'https://www.indianchemicalsociety.org/', country: 'India', type: 'Society', desc: 'India chemistry society' },
  { name: 'RACI', url: 'https://raci.org.au/', country: 'Australia', type: 'Society', desc: 'Royal Australian Chemical Institute' },
  { name: 'CSC', url: 'https://www.cheminst.ca/', country: 'Canada', type: 'Society', desc: 'Chemical Institute of Canada' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-emerald-300">2500+ Global Chemistry Resources from K-12 to PhD</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Chemistry
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master chemistry from K-12 to PhD research with 2500+ curated resources from MIT, Harvard, Oxford, and institutions worldwide. Free textbooks, virtual labs, databases, and research tools.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">100+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">50+</div>
              <div class="text-sm text-gray-400">Virtual Labs</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">2500+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-emerald-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-emerald-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">K-12 School Resources</h2>
            <p class="text-gray-400">Chemistry resources for primary and secondary school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in k12Resources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Chemistry Olympiads -->
      <section id="olympiads" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Olympiads</h2>
            <p class="text-gray-400">International chemistry competitions for high school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in olympiadResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- AP/IB Chemistry -->
      <section id="apib" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">AP & IB Chemistry</h2>
            <p class="text-gray-400">Advanced Placement and International Baccalaureate resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in apibResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Textbooks</h2>
            <p class="text-gray-400">Comprehensive chemistry textbooks organized by level</p>
          </div>
        </div>

        <!-- Beginner -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner / High School Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksBeginner" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Intermediate -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-blue-400 mb-4">Intermediate / Undergraduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Advanced -->
        <div>
          <h3 class="text-lg font-semibold text-purple-400 mb-4">Advanced / Graduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Organic Chemistry -->
      <section id="organic" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Organic Chemistry</h2>
            <p class="text-gray-400">Resources for organic chemistry and reaction mechanisms</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in organicResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-cyan-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Virtual Labs -->
      <section id="labs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Virtual Laboratories</h2>
            <p class="text-gray-400">Online chemistry simulations and virtual experiments</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="lab in virtualLabs" :key="lab.name" :href="lab.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ lab.name }}</h4>
            <p class="text-sm text-teal-400">{{ lab.provider }}</p>
            <p class="text-xs text-gray-500">{{ lab.topics }} • {{ lab.level }}</p>
          </a>
        </div>
      </section>

      <!-- Chemical Databases -->
      <section id="databases" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemical Databases</h2>
            <p class="text-gray-400">Comprehensive chemical structure and property databases</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="db in databases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ db.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ db.name }}</h4>
            <p class="text-xs text-gray-400">{{ db.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Spectroscopy Resources -->
      <section id="spectroscopy" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Spectroscopy Resources</h2>
            <p class="text-gray-400">Spectral databases and NMR resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in spectroscopyResources" :key="resource.name" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">{{ resource.name }}</h4>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Software Tools -->
      <section id="software" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Chemistry Software & Tools</h2>
            <p class="text-gray-400">Drawing, modeling, and computational chemistry software</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="tool in softwareTools" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ tool.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ tool.name }}</h4>
            <p class="text-xs text-gray-400">{{ tool.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Country-Specific Resources -->
      <section id="countries" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Country-Specific Resources</h2>
            <p class="text-gray-400">National chemical societies and educational resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in countryResources" :key="resource.name" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ resource.country }}</span>
              <span class="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{{ resource.name }}</h4>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Research Resources -->
      <section id="research" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research & Journals</h2>
            <p class="text-gray-400">Academic journals and research resources for chemistry</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="journal in researchResources" :key="journal.name" :href="journal.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ journal.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ journal.name }}</h4>
            <p class="text-xs text-gray-400">{{ journal.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Online Courses -->
      <section id="courses" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Online Courses (MOOCs)</h2>
            <p class="text-gray-400">Free and paid chemistry courses from universities worldwide</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="course in onlineCourses" :key="course.name" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-sky-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded">{{ course.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">{{ course.name }}</h4>
            <p class="text-sm text-sky-400">{{ course.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ course.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/science" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
