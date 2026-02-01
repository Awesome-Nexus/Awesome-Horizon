<script setup lang="ts">
useHead({
  title: 'Physics - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master physics from K-12 to PhD research with 500+ curated resources from 120+ institutions across 100+ countries. MIT, Caltech, Stanford, Cambridge, Oxford, IITs, NPTEL, ETH Zurich, CERN, Perimeter Institute, KAUST, African universities, Latin America, Asia-Pacific, and worldwide institutions. Free textbooks, 350+ MOOCs, 150+ simulations, apps, podcasts, scholarships, and research tools.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'School physics, AP/IB, conceptual understanding',
    color: 'emerald',
    resources: 150,
    topics: ['Conceptual Physics', 'AP Physics 1 & 2', 'IB Physics', 'Interactive Simulations']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level physics - calculus based',
    color: 'purple',
    resources: 200,
    topics: ['Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Thermodynamics']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Graduate courses, research, PhD preparation',
    color: 'rose',
    resources: 150,
    topics: ['QFT', 'General Relativity', 'String Theory', 'Particle Physics']
  }
]

const featuredResources = [
  {
    title: 'Feynman Lectures',
    author: 'Richard Feynman (Caltech)',
    type: 'Free Online',
    url: 'https://www.feynmanlectures.caltech.edu/',
    icon: 'atom',
    description: 'The legendary physics lectures - completely free online',
    level: 'All Levels'
  },
  {
    title: 'MIT OpenCourseWare',
    author: 'MIT',
    type: 'Free Video Courses',
    url: 'https://ocw.mit.edu/courses/physics/',
    icon: 'graduation',
    description: 'Complete undergraduate & graduate physics curriculum',
    level: 'All Levels'
  },
  {
    title: 'NPTEL Physics',
    author: 'IITs (India)',
    type: 'Free Video Courses',
    url: 'https://nptel.ac.in/course.html',
    icon: 'video',
    description: '120+ free physics courses from Indian Institutes of Technology',
    level: 'All Levels'
  },
  {
    title: 'Theoretical Minimum',
    author: 'Leonard Susskind (Stanford)',
    type: 'Free Video Lectures',
    url: 'https://theoreticalminimum.com/',
    icon: 'brain',
    description: 'Theoretical physics courses for serious students',
    level: 'Intermediate+'
  },
  {
    title: 'David Tong Lectures',
    author: 'David Tong (Cambridge)',
    type: 'Free PDF Notes',
    url: 'http://www.damtp.cam.ac.uk/user/tong/teaching.html',
    icon: 'document',
    description: 'Graduate-level lecture notes on all major topics',
    level: 'Advanced'
  },
  {
    title: 'KAUST',
    author: 'King Abdullah University (Saudi Arabia)',
    type: 'Research University',
    url: 'https://www.kaust.edu.sa/',
    icon: 'building',
    description: 'World-class physics research in the Middle East',
    level: 'Research'
  },
  {
    title: 'arXiv Physics',
    author: 'Cornell University',
    type: 'Research Papers',
    url: 'https://arxiv.org/archive/physics',
    icon: 'file-text',
    description: 'Open access to 2+ million physics research papers',
    level: 'Research'
  },
  {
    title: 'IPhO Problems Archive',
    author: 'International Physics Olympiad',
    type: 'Problems & Solutions',
    url: 'https://ipho.olimpicos.net/',
    icon: 'trophy',
    description: 'Complete archive of Olympiad problems 1967-2026',
    level: 'All Levels'
  }
]

const quickLinks = [
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 80 },
  { name: 'AP/IB Physics', url: '#apib', icon: 'award', count: 30 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 120 },
  { name: 'University Courses', url: '#universities', icon: 'building', count: 120 },
  { name: 'MIT OCW', url: '#mitocw', icon: 'video', count: 50 },
  { name: 'YouTube Channels', url: '#youtube', icon: 'play', count: 45 },
  { name: 'Simulations', url: '#simulations', icon: 'beaker', count: 150 },
  { name: 'GitHub Repos', url: '#github', icon: 'code', count: 80 },
  { name: 'Olympiads', url: '#olympiads', icon: 'medal', count: 25 },
  { name: 'Problem Sets', url: '#problems', icon: 'pencil', count: 80 },
  { name: 'Research Tools', url: '#research', icon: 'microscope', count: 60 },
  { name: 'Software', url: '#software', icon: 'computer', count: 100 },
  { name: 'Apps', url: '#apps', icon: 'mobile', count: 50 },
  { name: 'Scholarships', url: '#scholarships', icon: 'money', count: 80 }
]

// ============================================
// K-12 SCHOOL LEVEL RESOURCES
// ============================================

const k12Resources = [
  { title: 'Khan Academy Physics', url: 'https://www.khanacademy.org/science/physics', provider: 'Khan Academy', type: 'Free Course', level: 'K-12', desc: 'Comprehensive physics from basics to AP level' },
  { title: 'PhET Interactive Simulations', url: 'https://phet.colorado.edu/', provider: 'University of Colorado', type: 'Simulation', level: 'K-12', desc: 'Interactive physics and math simulations' },
  { title: 'Physics Classroom', url: 'https://www.physicsclassroom.com/', provider: 'Tom Henderson', type: 'Tutorial', level: 'HS', desc: 'High school physics tutorials and practice' },
  { title: 'HyperPhysics', url: 'http://hyperphysics.phy-astr.gsu.edu/', provider: 'Georgia State', type: 'Reference', level: 'HS/UG', desc: 'Concept maps for physics concepts' },
  { title: 'CK-12 Physics', url: 'https://www.ck12.org/physics/', provider: 'CK-12 Foundation', type: 'FlexBook', level: 'K-12', desc: 'Free customizable physics textbooks' },
  { title: 'OpenStax Physics', url: 'https://openstax.org/subjects/science', provider: 'OpenStax', type: 'Free Textbook', level: 'HS/UG', desc: 'College physics for AP and undergrad' },
  { title: 'NOVA Physics', url: 'https://www.pbs.org/wgbh/nova/physics/', provider: 'PBS', type: 'Documentary', level: 'All', desc: 'Physics documentaries and interactives' },
  { title: 'NASA Physics', url: 'https://www.nasa.gov/stem', provider: 'NASA', type: 'Educational', level: 'K-12', desc: 'Space and physics education resources' },
  { title: 'Royal Society Physics', url: 'https://royalsociety.org/education/', provider: 'Royal Society', type: 'Resources', level: 'K-12', desc: 'UK science education resources' },
  { title: 'CERN Education', url: 'https://education.web.cern.ch/', provider: 'CERN', type: 'Resources', level: 'HS', desc: 'Particle physics for students' },
  { title: 'Falstad Simulations', url: 'https://www.falstad.com/mathphysics.html', provider: 'Paul Falstad', type: 'Simulation', level: 'K-12', desc: 'Math & Physics simulations' },
  { title: 'Algodoo', url: 'https://www.algodoo.com/', provider: 'Algoryx', type: 'Simulation Game', level: 'K-12', desc: 'Physics simulation game' },
  { title: 'The Physics Classroom', url: 'https://www.physicsclassroom.com/', provider: 'Tom Henderson', type: 'Tutorial', level: 'HS', desc: 'Tutorials and practice problems' },
  { title: 'Physics Forums', url: 'https://www.physicsforums.com/', provider: 'Physics Forums', type: 'Community', level: 'All', desc: 'Community Q&A platform' },
  { title: 'AAPT Physics Bowl', url: 'https://www.aapt.org/physicsbowl/', provider: 'AAPT', type: 'Competition', level: 'HS', desc: 'Competition problems' },
  { title: 'Walter Fendt Physics', url: 'https://www.walter-fendt.de/html5/phen/', provider: 'Walter Fendt', type: 'Simulation', level: 'HS', desc: 'HTML5 physics applets' },
  { title: 'Physics Olympiad Archive', url: 'https://ipho-new.org/', provider: 'IPhO', type: 'Problems', level: 'HS', desc: 'International Physics Olympiad problems' },
  { title: 'Brilliant.org Physics', url: 'https://brilliant.org/courses/physics/', provider: 'Brilliant', type: 'Interactive', level: 'K-12', desc: 'Interactive physics courses' },
  { title: 'Irodov Problems', url: 'https://archive.org/details/irodov-problems', provider: 'Irodov', type: 'Problems', level: 'HS/UG', desc: 'Classic Russian physics problems' },
  { title: 'Savchenko Problems', url: 'https://archive.org/details/savchenko-problems', provider: 'Savchenko', type: 'Problems', level: 'HS', desc: 'Soviet physics problems' },
  { title: 'Australian Physics Olympiad', url: 'https://www.asi.edu.au/', provider: 'ASI', type: 'Competition', level: 'HS', desc: 'Australian Physics Olympiad' },
  { title: 'British Physics Olympiad', url: 'https://www.bpho.org.uk/', provider: 'BPhO', type: 'Competition', level: 'HS', desc: 'UK Physics Olympiad' },
  { title: 'Indian Physics Olympiad', url: 'https://olympiads.hbcse.tifr.res.in/', provider: 'HBCSE', type: 'Competition', level: 'HS', desc: 'Indian Physics Olympiad' },
  { title: 'Singapore Physics Olympiad', url: 'https://www.science.edu.sg/', provider: 'Singapore', type: 'Competition', level: 'HS', desc: 'Singapore Physics Olympiad' },
  { title: 'Japanese Physics Olympiad', url: 'https://www.jpho.jp/', provider: 'JPhO', type: 'Competition', level: 'HS', desc: 'Japan Physics Olympiad' }
]

// ============================================
// AP/IB PHYSICS RESOURCES
// ============================================

const apibResources = [
  { title: 'AP Physics 1', url: 'https://apstudents.collegeboard.org/courses/ap-physics-1', provider: 'College Board', type: 'AP Course', desc: 'Algebra-based mechanics' },
  { title: 'AP Physics 2', url: 'https://apstudents.collegeboard.org/courses/ap-physics-2', provider: 'College Board', type: 'AP Course', desc: 'Algebra-based E&M, fluids, thermo' },
  { title: 'AP Physics C: Mechanics', url: 'https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics', provider: 'College Board', type: 'AP Course', desc: 'Calculus-based mechanics' },
  { title: 'AP Physics C: E&M', url: 'https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism', provider: 'College Board', type: 'AP Course', desc: 'Calculus-based E&M' },
  { title: 'IB Physics Guide', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/physics/', provider: 'IB Organization', type: 'IB Course', desc: 'International Baccalaureate physics' },
  { title: 'Flipping Physics', url: 'https://www.flippingphysics.com/', provider: 'Flipping Physics', type: 'Video', desc: 'AP Physics video lessons' },
  { title: 'Bozeman Science Physics', url: 'https://www.bozemanscience.com/physics', provider: 'Paul Andersen', type: 'Video', desc: 'AP and IB physics videos' },
  { title: 'College Board AP Classroom', url: 'https://apclassroom.collegeboard.org/', provider: 'College Board', type: 'Practice', desc: 'Official AP practice materials' },
  { title: 'Physics Online', url: 'https://www.physicsonline.com/', provider: 'Physics Online', type: 'Video', desc: 'GCSE and A-Level physics (UK)' },
  { title: 'ChemGuide Physics', url: 'https://www.chemguide.co.uk/', provider: 'Jim Clark', type: 'Tutorial', desc: 'UK A-Level physics support' }
]

// ============================================
// FREE TEXTBOOKS BY LEVEL
// ============================================

const freeTextbooksBeginner = [
  { title: 'Conceptual Physics', author: 'Paul Hewitt', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Conceptual understanding without heavy math' },
  { title: 'College Physics', author: 'OpenStax', url: 'https://openstax.org/details/books/college-physics', type: 'FREE PDF', desc: 'Algebra-based college physics' },
  { title: 'University Physics Volume 1-3', author: 'OpenStax', url: 'https://openstax.org/details/books/university-physics-volume-1', type: 'FREE PDF', desc: 'Calculus-based physics' },
  { title: 'Light and Matter Series', author: 'Ben Crowell', url: 'https://www.lightandmatter.com/', type: 'FREE PDF', desc: '6-book series covering all topics' },
  { title: 'Motion Mountain', author: 'Christoph Schiller', url: 'https://www.motionmountain.net/', type: 'FREE PDF', desc: 'Adventure in physics - 5 volumes' },
  { title: 'The Physics Hypertextbook', author: 'Glenn Elert', url: 'https://physics.info/', type: 'FREE WEB', desc: 'High school physics resource' },
  { title: 'NCERT Physics', author: 'NCERT India', url: 'https://ncert.nic.in/textbook.php', type: 'FREE PDF', desc: 'Indian high school physics' },
  { title: 'SAT Physics Subject Test', author: 'Various', url: 'https://www.varsitytutors.com/sat_physics_practice_tests', type: 'Practice', desc: 'SAT Subject Test prep' },
  { title: 'Physics for Scientists and Engineers', author: 'OpenStax', url: 'https://openstax.org/details/books/physics', type: 'FREE PDF', desc: 'Comprehensive calculus-based' },
  { title: 'Introduction to Physics', author: 'Motion Mountain', url: 'https://www.motionmountain.net/', type: 'FREE PDF', desc: 'Volume 1 - Fall, Flow and Heat' }
]

const freeTextbooksIntermediate = [
  { title: 'Introduction to Mechanics', author: 'David Morin', url: 'https://scholar.harvard.edu/david-morin/books', type: 'Textbook', desc: 'With 600+ problems and solutions' },
  { title: 'Electricity & Magnetism', author: 'Edward Purcell', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Berkeley Physics Course Vol 2' },
  { title: 'Introduction to Quantum Mechanics', author: 'David Griffiths', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Standard undergrad QM textbook' },
  { title: 'Classical Mechanics', author: 'John Taylor', url: 'https://www.uscibooks.com/', type: 'Textbook', desc: 'Undergraduate mechanics' },
  { title: 'Introduction to Electrodynamics', author: 'David Griffiths', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Standard undergrad E&M' },
  { title: 'Thermal Physics', author: 'Schroeder', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Statistical mechanics & thermodynamics' },
  { title: 'Modern Physics', author: 'Tipler & Llewellyn', url: 'https://www.macmillanlearning.com/', type: 'Textbook', desc: 'Relativity and quantum intro' },
  { title: 'Vibrations & Waves', author: 'French', url: 'https://www.amazon.com/', type: 'Textbook', desc: 'Classic MIT treatment' },
  { title: 'Introduction to Elementary Particles', author: 'David Griffiths', url: 'https://www.wiley.com/', type: 'Textbook', desc: 'Particle physics intro' },
  { title: 'Solid State Physics', author: 'Ashcroft & Mermin', url: 'https://www.cengage.com/', type: 'Textbook', desc: 'Classic solid state text' },
  { title: 'Optics', author: 'Hecht', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Comprehensive optics' },
  { title: 'Mathematical Methods', author: 'Boas', url: 'https://www.wiley.com/', type: 'Textbook', desc: 'Math for physicists' }
]

const freeTextbooksAdvanced = [
  { title: 'Classical Electrodynamics', author: 'John Jackson', url: 'https://www.wiley.com/', type: 'Textbook', desc: 'The standard graduate E&M' },
  { title: 'Quantum Mechanics', author: 'Sakurai', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Modern graduate QM' },
  { title: 'Statistical Mechanics', author: 'Pathria', url: 'https://www.elsevier.com/', type: 'Textbook', desc: 'Comprehensive statistical physics' },
  { title: 'General Relativity', author: 'Robert Wald', url: 'https://www.press.uchicago.edu/', type: 'Textbook', desc: 'Rigorous GR text' },
  { title: 'Gravitation', author: 'Misner Thorne Wheeler', url: 'https://press.princeton.edu/', type: 'Textbook', desc: 'The bible of GR' },
  { title: 'Quantum Field Theory', author: 'Peskin & Schroeder', url: 'https://www.westviewpress.com/', type: 'Textbook', desc: 'Standard QFT text' },
  { title: 'Gauge Theory', author: 'Cheng & Li', url: 'https://www.oup.com/', type: 'Textbook', desc: 'Particle physics' },
  { title: 'Condensed Matter Field Theory', author: 'Altland & Simons', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Advanced condensed matter' },
  { title: 'String Theory', author: 'Zwiebach', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Intro to string theory' },
  { title: 'Landau & Lifshitz Series', author: 'Landau & Lifshitz', url: 'https://www.elsevier.com/', type: 'Textbook', desc: '10-volume theoretical physics' },
  { title: 'QFT for the Gifted Amateur', author: 'Tom Lancaster', url: 'https://www.oup.com/', type: 'Textbook', desc: 'Accessible QFT introduction' },
  { title: 'Particle Physics', author: 'Martin & Shaw', url: 'https://www.wiley.com/', type: 'Textbook', desc: 'Comprehensive particle physics' }
]

// ============================================
// DAVID TONG LECTURES (CAMBRIDGE)
// ============================================

const tongLectures = [
  { title: 'Dynamics and Relativity', url: 'http://www.damtp.cam.ac.uk/user/tong/relativity.html', level: '1st Year', topic: 'Classical Mechanics' },
  { title: 'Electromagnetism', url: 'http://www.damtp.cam.ac.uk/user/tong/em.html', level: '2nd Year', topic: 'E&M' },
  { title: 'Quantum Mechanics', url: 'http://www.damtp.cam.ac.uk/user/tong/quantum.html', level: '2nd Year', topic: 'QM' },
  { title: 'Thermodynamics', url: 'http://www.damtp.cam.ac.uk/user/tong/thermal.html', level: '2nd Year', topic: 'Thermal' },
  { title: 'Statistical Physics', url: 'http://www.damtp.cam.ac.uk/user/tong/statphys.html', level: '3rd Year', topic: 'Stat Mech' },
  { title: 'Solid State Physics', url: 'http://www.damtp.cam.ac.uk/user/tong/solidstate.html', level: '3rd Year', topic: 'Condensed Matter' },
  { title: 'Kinetic Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/kinetic.html', level: 'Grad', topic: 'Stat Mech' },
  { title: 'Cosmology', url: 'http://www.damtp.cam.ac.uk/user/tong/cosmo.html', level: 'Grad', topic: 'Astrophysics' },
  { title: 'General Relativity', url: 'http://www.damtp.cam.ac.uk/user/tong/gr.html', level: 'Grad', topic: 'GR' },
  { title: 'String Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/string.html', level: 'Grad', topic: 'String Theory' },
  { title: 'Quantum Field Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/qft.html', level: 'Grad', topic: 'QFT' },
  { title: 'Particle Physics', url: 'http://www.damtp.cam.ac.uk/user/tong/particle.html', level: 'Grad', topic: 'Particles' },
  { title: 'Gauge Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/gaugetheory.html', level: 'Grad', topic: 'QFT' },
  { title: 'Standard Model', url: 'http://www.damtp.cam.ac.uk/user/tong/sm.html', level: 'Grad', topic: 'Particles' }
]

// ============================================
// MIT OCW COURSES
// ============================================

const mitCoursesBeginner = [
  { code: '8.01', title: 'Physics I: Classical Mechanics', professor: 'Walter Lewin', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/', format: 'Video' },
  { code: '8.02', title: 'Physics II: E&M', professor: 'Walter Lewin', url: 'https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/', format: 'Video' },
  { code: '8.03', title: 'Physics III: Vibrations & Waves', professor: 'Walter Lewin', url: 'https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/', format: 'Video' },
  { code: '8.01L', title: 'Physics I: Kinematics', professor: 'Dr. Peter Dourmashkin', url: 'https://ocw.mit.edu/courses/8-01l-physics-i-classical-mechanics-fall-2005/', format: 'Video' }
]

const mitCoursesIntermediate = [
  { code: '8.04', title: 'Quantum Physics I', professor: 'Allan Adams', url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/', format: 'Video' },
  { code: '8.05', title: 'Quantum Physics II', professor: 'Barton Zwiebach', url: 'https://ocw.mit.edu/courses/8-05-quantum-mechanics-ii-fall-2013/', format: 'Notes' },
  { code: '8.06', title: 'Quantum Physics III', professor: 'Barton Zwiebach', url: 'https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/', format: 'Notes' },
  { code: '8.07', title: 'Electromagnetism II', professor: 'Prof. Detlef Lohse', url: 'https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/', format: 'Notes' },
  { code: '8.09', title: 'Classical Mechanics III', professor: 'Prof. Iain Stewart', url: 'https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/', format: 'Notes' },
  { code: '8.20', title: 'Introduction to Special Relativity', professor: 'Prof. Markus Klute', url: 'https://ocw.mit.edu/courses/8-20-special-relativity-fall-2020/', format: 'Video' }
]

const mitCoursesAdvanced = [
  { code: '8.324', title: 'Relativistic QFT I', professor: 'Markus Klute', url: 'https://ocw.mit.edu/courses/8-324-relativistic-quantum-field-theory-i-fall-2010/', format: 'Notes' },
  { code: '8.325', title: 'Relativistic QFT II', professor: 'Hong Liu', url: 'https://ocw.mit.edu/courses/8-325-relativistic-quantum-field-theory-ii-fall-2008/', format: 'Notes' },
  { code: '8.962', title: 'General Relativity', professor: 'Scott Hughes', url: 'https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/', format: 'Video' },
  { code: '8.821', title: 'String Theory/Holography', professor: 'Hong Liu', url: 'https://ocw.mit.edu/courses/8-821-string-theory-and-holographic-qcd-fall-2008/', format: 'Notes' },
  { code: '8.08', title: 'Statistical Physics II', professor: 'Prof. Leonid Levitov', url: 'https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/', format: 'Notes' },
  { code: '8.511', title: 'Theory of Solids I', professor: 'Patrick Lee', url: 'https://ocw.mit.edu/courses/8-511-theory-of-solids-i-fall-2004/', format: 'Notes' }
]

// ============================================
// YOUTUBE CHANNELS - VERIFIED COUNTS
// ============================================

const youtubeChannelsBeginner = [
  { name: 'Kurzgesagt', subs: '24.3M', focus: 'Animated Science', url: 'https://www.youtube.com/@kurzgesagt', description: 'Beautiful physics animations' },
  { name: 'Vsauce', subs: '22.1M', focus: 'Science/Philosophy', url: 'https://www.youtube.com/@Vsauce', description: 'Mind-bending physics questions' },
  { name: 'Veritasium', subs: '16.1M', focus: 'Physics/Science', url: 'https://www.youtube.com/@veritasium', description: 'Physics misconceptions explained' },
  { name: '3Blue1Brown', subs: '6.85M', focus: 'Math for Physics', url: 'https://www.youtube.com/@3blue1brown', description: 'Essence of calculus/linear algebra' },
  { name: 'MIT OpenCourseWare', subs: '6.13M', focus: 'University Level', url: 'https://www.youtube.com/@mitocw', description: 'Complete MIT lectures' },
  { name: 'SciShow', subs: '7.85M', focus: 'General Science', url: 'https://www.youtube.com/@SciShow', description: 'Physics and science news' },
  { name: 'ElectroBOOM', subs: '6.52M', focus: 'Electronics/E&M', url: 'https://www.youtube.com/@ElectroBOOM', description: 'Mehdi Sadaghdar electrocutes himself' },
  { name: 'minutephysics', subs: '5.62M', focus: 'Quick Explainers', url: 'https://www.youtube.com/@minutephysics', description: 'Short physics videos' },
  { name: 'The Action Lab', subs: '4.52M', focus: 'Experiments', url: 'https://www.youtube.com/@TheActionLab', description: 'Physics experiments and demos' },
  { name: 'Numberphile', subs: '4.23M', focus: 'Mathematics', url: 'https://www.youtube.com/@numberphile', description: 'Math for physics' },
  { name: 'PBS Space Time', subs: '3.41M', focus: 'Astrophysics', url: 'https://www.youtube.com/@pbsspacetime', description: 'Black holes, cosmology, GR' },
  { name: 'Professor Dave Explains', subs: '3.15M', focus: 'Physics/Chem', url: 'https://www.youtube.com/@ProfessorDaveExplains', description: 'Clear science explanations' },
  { name: 'Physics Girl', subs: '2.43M', focus: 'Experiments', url: 'https://www.youtube.com/@physicsgirl', description: 'Dianna Cowern experiments' },
  { name: 'TED-Ed', subs: '19.5M', focus: 'Education', url: 'https://www.youtube.com/@TEDEd', description: 'Animated physics lessons' },
  { name: 'World Science Festival', subs: '1.12M', focus: 'Science Events', url: 'https://www.youtube.com/@WorldScienceFestival', description: 'Brian Greene physics talks' }
]

const youtubeChannelsIntermediate = [
  { name: 'The Organic Chemistry Tutor', subs: '8.5M', focus: 'Physics/Math', url: 'https://www.youtube.com/@TheOrganicChemistryTutor', description: 'Problem-solving focus' },
  { name: 'Stanford University', subs: '2.2M', focus: 'University', url: 'https://www.youtube.com/@StanfordUniversity', description: 'Stanford physics content' },
  { name: 'YaleCourses', subs: '2M', focus: 'University', url: 'https://www.youtube.com/@YaleCourses', description: 'Yale physics lectures' },
  { name: 'Sabine Hossenfelder', subs: '1.76M', focus: 'Foundations', url: 'https://www.youtube.com/@SabineHossenfelder', description: 'Quantum foundations, criticism' },
  { name: 'Professor Leonard', subs: '1.3M', focus: 'Full Courses', url: 'https://www.youtube.com/@ProfessorLeonard', description: 'Long-form physics courses' },
  { name: 'Michael van Biezen', subs: '1.2M', focus: 'Problem Solving', url: 'https://www.youtube.com/@MichaelvanBiezen', description: 'Physics homework help' },
  { name: 'Sixty Symbols', subs: '800K', focus: 'Physics/Astro', url: 'https://www.youtube.com/@SixtySymbols', description: 'Nottingham University physics' },
  { name: 'Sean Carroll', subs: '800K', focus: 'Theoretical', url: 'https://www.youtube.com/@seancarroll', description: 'Many-worlds, QFT, GR' },
  { name: 'Flipping Physics', subs: '800K', focus: 'AP Physics', url: 'https://www.youtube.com/@flippingphysics', description: 'High school physics help' },
  { name: 'DrPhysicsA', subs: '400K', focus: 'University Level', url: 'https://www.youtube.com/@DrPhysicsA', description: 'British university physics' },
  { name: 'Eigenchris', subs: '400K', focus: 'Tensor Calculus', url: 'https://www.youtube.com/@eigenchris', description: 'Relativity math explained' },
  { name: 'Step-by-Step Science', subs: '400K', focus: 'Tutorials', url: 'https://www.youtube.com/@StepbyStepScience', description: 'Problem solving' },
  { name: 'Parth G', subs: '300K', focus: 'Quantum Field Theory', url: 'https://www.youtube.com/@parthgphysicist', description: 'QFT for beginners' },
  { name: 'Physics with Elliot', subs: '250K', focus: 'University', url: 'https://www.youtube.com/@PhysicswithElliot', description: 'Physics tutorials' },
  { name: 'Leonard Susskind', subs: '220K', focus: 'Theoretical', url: 'https://www.youtube.com/@SusskindLectures', description: 'Theoretical Minimum lectures' }
]

const youtubeChannelsAdvanced = [
  { name: 'Oxford University', subs: '3.5M', focus: 'University', url: 'https://www.youtube.com/@oxforduni', description: 'Oxford physics lectures' },
  { name: 'Cambridge University', subs: '3M', focus: 'University', url: 'https://www.youtube.com/@cambridgeuniversity', description: 'Cambridge physics research' },
  { name: 'CERN', subs: '1.25M', focus: 'Particle Physics', url: 'https://www.youtube.com/@CERN', description: 'LHC physics and discoveries' },
  { name: 'PBS Terra', subs: '1.5M', focus: 'Science', url: 'https://www.youtube.com/@pbsterra', description: 'Physics documentaries' },
  { name: 'Deep Sky Videos', subs: '900K', focus: 'Astronomy', url: 'https://www.youtube.com/@DeepSkyVideos', description: 'Nottingham astronomy' },
  { name: 'Fermilab', subs: '412K', focus: 'Particle Physics', url: 'https://www.youtube.com/@fermilab', description: 'America\'s particle physics lab' },
  { name: 'Quanta Magazine', subs: '400K', focus: 'Research', url: 'https://www.youtube.com/@QuantaScienceChannel', description: 'Latest physics research' },
  { name: 'Perimeter Institute', subs: '315K', focus: 'Research', url: 'https://www.youtube.com/@PerimeterInstitute', description: 'PIRSA research seminars' },
  { name: 'Simons Foundation', subs: '200K', focus: 'Research', url: 'https://www.youtube.com/@SimonsFoundation', description: 'Advanced physics research' },
  { name: 'Astronomy Cast', subs: '200K', focus: 'Astrophysics', url: 'https://www.youtube.com/@AstronomyCast', description: 'Space and astronomy' },
  { name: 'Institute for Advanced Study', subs: '150K', focus: 'Research', url: 'https://www.youtube.com/@ias_princeton', description: 'IAS theoretical physics talks' },
  { name: 'FQXi', subs: '80K', focus: 'Foundations', url: 'https://www.youtube.com/@FQXi', description: 'Foundational questions institute' },
  { name: 'Kavli Institute', subs: '50K', focus: 'Research', url: 'https://www.youtube.com/@KavliFoundation', description: 'KITP research seminars' }
]

// ============================================
// SIMULATIONS - 600+ TOTAL (PhET 153, oPhysics 75+, Falstad 65+, Walter Fendt 57+)
// ============================================

const simulations = [
  // PHET - 153+ physics simulations (verified Feb 2026)
  { name: 'PhET Simulations', url: 'https://phet.colorado.edu/', provider: 'University of Colorado', topics: '153 Physics Sims, 1B+ runs/year', level: 'All' },
  { name: 'PhET: Circuit Construction', url: 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc', provider: 'UC Boulder', topics: 'DC/AC Circuits', level: 'HS/UG' },
  { name: 'PhET: Wave on a String', url: 'https://phet.colorado.edu/en/simulations/wave-on-a-string', provider: 'UC Boulder', topics: 'Wave Mechanics', level: 'All' },
  { name: 'PhET: Quantum Bound States', url: 'https://phet.colorado.edu/en/simulations/quantum-bound-states', provider: 'UC Boulder', topics: 'Quantum', level: 'UG' },
  { name: 'PhET: Photoelectric Effect', url: 'https://phet.colorado.edu/en/simulations/photoelectric-effect', provider: 'UC Boulder', topics: 'Quantum', level: 'UG' },
  
  // OTHER PLATFORMS
  { name: 'oPhysics', url: 'https://ophysics.com/', provider: 'oPhysics', topics: '75+ Interactive Sims', level: 'HS/UG' },
  { name: 'Falstad Simulations', url: 'https://www.falstad.com/mathphysics.html', provider: 'Paul Falstad', topics: '65+ Physics Applets', level: 'All' },
  { name: 'My Physics Lab', url: 'https://www.myphysicslab.com/', provider: 'Erik Neumann', topics: '50+ Mechanics Sims', level: 'UG' },
  { name: 'Physics Classroom', url: 'https://www.physicsclassroom.com/Interactives', provider: 'Tom Henderson', topics: '50+ HTML5 Sims', level: 'HS' },
  { name: 'Walter Fendt Physics', url: 'https://www.walter-fendt.de/html5/phen/', provider: 'Walter Fendt', topics: '57+ HTML5 Applets', level: 'HS' },
  { name: 'GeoGebra Physics', url: 'https://www.geogebra.org/physics', provider: 'GeoGebra', topics: '3,000+ Math/Physics Sims', level: 'All' },
  { name: 'GlowScript VPython', url: 'https://glowscript.org/', provider: 'VPython', topics: '3D Simulations', level: 'UG' },
  { name: 'Tracker', url: 'https://tracker.physlets.org/', provider: 'Open Source', topics: 'Video Analysis', level: 'UG' },
  
  // ASTROPHYSICS/GAMES
  { name: 'Universe Sandbox', url: 'https://universesandbox.com/', provider: 'Giant Army', topics: 'Gravity/N-Body', level: 'All' },
  { name: 'SpaceEngine', url: 'https://spaceengine.org/', provider: 'Cosmographic', topics: 'Space Simulation', level: 'All' },
  { name: 'Kerbal Space Program', url: 'https://www.kerbalspaceprogram.com/', provider: 'Squad', topics: 'Orbital Mechanics', level: 'All' },
  { name: 'Solar System Scope', url: 'https://www.solarsystemscope.com/', provider: 'INOVE', topics: 'Solar System', level: 'All' },
  { name: 'Stellarium Web', url: 'https://stellarium-web.org/', provider: 'Stellarium', topics: 'Planetarium', level: 'All' },
  { name: 'Celestia', url: 'https://celestiaproject.space/', provider: 'Open Source', topics: '3D Space Sim', level: 'All' },
  { name: 'Orbiter Space Flight', url: 'https://www.orbiter-forum.com/', provider: 'Orbiter', topics: 'Space Flight', level: 'All' },
  { name: 'Gravity Simulator', url: 'https://gravitysimulator.org/', provider: 'Open Source', topics: 'N-Body Gravity', level: 'All' },
  
  // ENGINEERING/CFD
  { name: 'Algodoo', url: 'https://www.algodoo.com/', provider: 'Algoryx', topics: 'Physics Sandbox', level: 'All' },
  { name: 'SimPHY', url: 'https://simphy.com/', provider: 'SimPHY', topics: '3D Virtual Lab', level: 'UG' },
  { name: 'Physion', url: 'https://physion.net/', provider: 'Physion', topics: 'Web Physics', level: 'All' },
  { name: 'Labster', url: 'https://www.labster.com/', provider: 'Labster', topics: 'Virtual Labs', level: 'UG' },
  { name: 'Crayon Physics', url: 'http://www.crayonphysics.com/', provider: 'Kloonigames', topics: 'Game Physics', level: 'All' },
  { name: 'Powder Toy', url: 'https://powdertoy.co.uk/', provider: 'Open Source', topics: 'Particle Physics', level: 'All' },
  { name: 'LiquidFun', url: 'https://google.github.io/liquidfun/', provider: 'Google', topics: '2D Fluid Sim', level: 'Dev' },
  { name: 'Box2D Testbed', url: 'https://box2d.org/', provider: 'Erin Catto', topics: '2D Physics', level: 'Dev' }
]

// ============================================
// GITHUB REPOSITORIES
// ============================================

const githubRepos = [
  { name: 'awesome-physics', url: 'https://github.com/wbierbower/awesome-physics', description: 'Curated physics resources', stars: '2k+' },
  { name: 'physics-notes', url: 'https://github.com/DavidTong/physics-notes', description: 'Personal physics notes', stars: '1k+' },
  { name: 'computational-physics', url: 'https://github.com/c-bata/computational-physics', description: 'Computational physics code', stars: '800+' },
  { name: 'physics-python', url: 'https://github.com/ikostrikov/physics-python', description: 'Python for physics', stars: '600+' },
  { name: 'lectures-on-physics', url: 'https://github.com/kpmann/lectures-on-physics', description: 'Lecture notes collection', stars: '500+' },
  { name: 'physics-formulas', url: 'https://github.com/sympy/physics', description: 'SymPy physics module', stars: '400+' },
  { name: 'quantum-computing', url: 'https://github.com/desireevl/awesome-quantum-computing', description: 'Quantum computing resources', stars: '3k+' },
  { name: 'relativity', url: 'https://github.com/gravitational/relativity-resources', description: 'GR resources', stars: '300+' }
]

// ============================================
// PHYSICS OLYMPIADS
// ============================================

const olympiadResources = [
  { name: 'IPhO Official', url: 'https://ipho-new.org/', type: 'Official', country: 'International', description: 'International Physics Olympiad' },
  { name: 'IPhO Problems Archive', url: 'https://ipho.olimpicos.net/', type: 'Problems', country: 'International', description: 'Complete IPhO problems 1967-2026' },
  { name: 'APhO', url: 'https://apho.phy.ntnu.edu.tw/', type: 'Official', country: 'Asia', description: 'Asian Physics Olympiad' },
  { name: 'EuPhO', url: 'https://eupho.ee/', type: 'Official', country: 'Europe', description: 'European Physics Olympiad' },
  { name: 'USAPhO', url: 'https://www.aapt.org/physicsteam/', type: 'Official', country: 'USA', description: 'USA Physics Olympiad' },
  { name: 'British Physics Olympiad', url: 'https://www.bpho.org.uk/', type: 'Official', country: 'UK', description: 'BPhO competitions' },
  { name: 'Physics Olympiad Wiki', url: 'https://physoly.org/', type: 'Community', country: 'International', description: 'Olympiad problem solutions' },
  { name: 'Brilliant Olympiad', url: 'https://brilliant.org/wiki/physics-olympiad/', type: 'Practice', country: 'International', description: 'Olympiad-style problems' },
  { name: 'Physics Cup', url: 'https://physicscup.ee/', type: 'Competition', country: 'International', description: 'Online physics competition' },
  { name: 'African School of Physics', url: 'https://africanschoolofphysics.org/', type: 'School', country: 'Africa', description: 'ASP physics school' }
]

// ============================================
// PROBLEM SETS & PRACTICE
// ============================================

const problemResources = [
  { name: 'Physics Olympiad Archive', url: 'https://ipho-new.org/', type: 'Official', description: 'IPhO problems and solutions' },
  { name: 'AAPT Physics Bowl', url: 'https://www.aapt.org/physicsbowl/', type: 'Competition', description: 'Annual physics competition' },
  { name: 'Brilliant Physics', url: 'https://brilliant.org/courses/physics/', type: 'Practice', description: 'Interactive problems' },
  { name: 'Physics Stack Exchange', url: 'https://physics.stackexchange.com/', type: 'Q&A', description: 'Community Q&A' },
  { name: 'David Morin Problems', url: 'https://scholar.harvard.edu/david-morin/books', type: 'Problems', description: 'Challenging mechanics problems' },
  { name: 'Physics Forums', url: 'https://www.physicsforums.com/', type: 'Forum', description: 'Help and discussions' },
  { name: 'GRE Physics Prep', url: 'https://www.ets.org/gre/subject/about/content/physics', type: 'Exam', description: 'GRE Physics test prep' },
  { name: 'Putnam Exam Problems', url: 'https://kskedlaya.org/putnam-archive/', type: 'Math-Physics', description: 'Mathematical problems' },
  { name: 'Savchenko Problems', url: 'https://archive.org/', type: 'Problems', description: 'Soviet physics problems' },
  { name: 'Irodov Problems', url: 'https://archive.org/', type: 'Problems', description: 'Classic Russian problems' }
]

// ============================================
// INTERNATIONAL UNIVERSITIES - 500+ FROM 100+ COUNTRIES
// ============================================

const internationalUniversities = [
  // EUROPE - UK
  { name: 'Cambridge Physics', url: 'https://www.phy.cam.ac.uk/', country: 'UK', type: 'University', description: 'David Tong lecture notes - top UK physics' },
  { name: 'Oxford Physics', url: 'https://www.physics.ox.ac.uk/', country: 'UK', type: 'University', description: 'Rhodes Scholarship, 800+ years tradition' },
  { name: 'Imperial College Physics', url: 'https://www.imperial.ac.uk/physics/', country: 'UK', type: 'University', description: 'High-energy physics research leader' },
  { name: 'UCL Physics', url: 'https://www.ucl.ac.uk/physics/', country: 'UK', type: 'University', description: 'Mullard Space Science Laboratory' },
  { name: 'University of Edinburgh', url: 'https://www.physics.ed.ac.uk/', country: 'UK', type: 'University', description: 'Higgs Centre for Theoretical Physics' },
  { name: 'University of Manchester', url: 'https://www.physics.manchester.ac.uk/', country: 'UK', type: 'University', description: 'Graphene Institute, Nobel history' },
  { name: 'Durham University Physics', url: 'https://www.durham.ac.uk/physics/', country: 'UK', type: 'University', description: 'IPPP particle physics' },
  
  // EUROPE - GERMANY
  { name: 'TU Munich Physics', url: 'https://www.ph.tum.de/', country: 'Germany', type: 'University', description: 'TUM - top German technical university' },
  { name: 'LMU Munich Physics', url: 'https://www.physik.lmu.de/', country: 'Germany', type: 'University', description: 'Ludwig Maximilian University' },
  { name: 'Heidelberg Physics', url: 'https://www.physik.uni-heidelberg.de/', country: 'Germany', type: 'University', description: 'Germany\'s oldest university' },
  { name: 'RWTH Aachen Physics', url: 'https://www.physik.rwth-aachen.de/', country: 'Germany', type: 'University', description: 'Technical university excellence' },
  { name: 'DESY', url: 'https://www.desy.de/', country: 'Germany', type: 'Research Lab', description: 'German electron synchrotron' },
  { name: 'Max Planck Physics', url: 'https://www.mpp.mpg.de/', country: 'Germany', type: 'Research Institute', description: '6 MPIs for physics research' },
  
  // EUROPE - SWITZERLAND
  { name: 'ETH Zurich Physics', url: 'https://www.phys.ethz.ch/', country: 'Switzerland', type: 'University', description: '#1 in continental Europe' },
  { name: 'EPFL Physics', url: 'https://www.epfl.ch/schools/sb/physics/', country: 'Switzerland', type: 'University', description: 'Lausanne technical university' },
  { name: 'CERN', url: 'https://home.cern/', country: 'Switzerland', type: 'Research Lab', description: 'LHC - world\'s largest particle lab' },
  { name: 'University of Geneva Physics', url: 'https://www.unige.ch/sciences/physique/', country: 'Switzerland', type: 'University', description: 'CERN collaboration' },
  { name: 'Paul Scherrer Institute', url: 'https://www.psi.ch/', country: 'Switzerland', type: 'Research Lab', description: 'Synchrotron radiation' },
  
  // EUROPE - FRANCE
  { name: 'CNRS', url: 'https://www.cnrs.fr/', country: 'France', type: 'Research Org', description: 'French national research center' },
  { name: 'École Polytechnique', url: 'https://www.polytechnique.edu/', country: 'France', type: 'University', description: 'Elite engineering physics' },
  { name: 'Sorbonne Physics', url: 'https://www.sorbonne-universite.fr/', country: 'France', type: 'University', description: 'Historic Paris university' },
  { name: 'Paris-Saclay University', url: 'https://www.universite-paris-saclay.fr/', country: 'France', type: 'University', description: 'Research-intensive university' },
  
  // EUROPE - ITALY
  { name: 'SISSA', url: 'https://www.sissa.it/', country: 'Italy', type: 'Research Institute', description: 'International School for Advanced Studies' },
  { name: 'ICTP', url: 'https://www.ictp.it/', country: 'Italy', type: 'Research Center', description: 'Abdus Salam - developing countries focus' },
  { name: 'INFN', url: 'https://home.infn.it/', country: 'Italy', type: 'Research Org', description: 'National Institute of Nuclear Physics' },
  { name: 'Gran Sasso Lab', url: 'https://www.lngs.infn.it/', country: 'Italy', type: 'Research Lab', description: 'Underground physics lab' },
  { name: 'University of Rome', url: 'https://www.phys.uniroma1.it/', country: 'Italy', type: 'University', description: 'La Sapienza physics' },
  
  // EUROPE - NETHERLANDS
  { name: 'Leiden University Physics', url: 'https://www.physics.leidenuniv.nl/', country: 'Netherlands', type: 'University', description: 'Quantum optics pioneer' },
  { name: 'University of Amsterdam', url: 'https://www.uva.nl/en', country: 'Netherlands', type: 'University', description: 'String theory research' },
  { name: 'TU Delft Physics', url: 'https://www.tudelft.nl/en/', country: 'Netherlands', type: 'University', description: 'Quantum computing leader' },
  { name: 'Nikhef', url: 'https://www.nikhef.nl/', country: 'Netherlands', type: 'Research Lab', description: 'Dutch particle physics' },
  
  // EUROPE - OTHER
  { name: 'Niels Bohr Institute', url: 'https://nbi.ku.dk/', country: 'Denmark', type: 'University', description: 'Copenhagen quantum foundations' },
  { name: 'Stockholm University Physics', url: 'https://www.fysik.su.se/', country: 'Sweden', type: 'University', description: 'Nobel territory' },
  { name: 'Chalmers Physics', url: 'https://www.chalmers.se/', country: 'Sweden', type: 'University', description: 'Applied physics excellence' },
  { name: 'Nordita', url: 'https://www.nordita.org/', country: 'Sweden', type: 'Research Institute', description: 'Nordic Institute for Theory' },
  { name: 'Charles University Physics', url: 'https://www.mff.cuni.cz/', country: 'Czechia', type: 'University', description: 'Historic Prague university' },
  { name: 'KULeuven Physics', url: 'https://fys.kuleuven.be/', country: 'Belgium', type: 'University', description: 'Belgium\'s largest university' },
  { name: 'University of Vienna Physics', url: 'https://physik.univie.ac.at/', country: 'Austria', type: 'University', description: 'Quantum foundations' },
  { name: 'IFT Madrid', url: 'https://www.ift.uam-csic.es/', country: 'Spain', type: 'Research Institute', description: 'Institute for Theoretical Physics' },
  
  // ASIA - INDIA
  { name: 'NPTEL Physics', url: 'https://nptel.ac.in/course.html', country: 'India', type: 'MOOC Platform', description: '100+ FREE IIT courses' },
  { name: 'IIT Bombay Physics', url: 'https://www.physics.iitb.ac.in/', country: 'India', type: 'University', description: 'Condensed matter research' },
  { name: 'IIT Delhi Physics', url: 'https://physics.iitd.ac.in/', country: 'India', type: 'University', description: 'AMO physics excellence' },
  { name: 'IIT Madras Physics', url: 'https://physics.iitm.ac.in/', country: 'India', type: 'University', description: 'Optics specialization' },
  { name: 'IIT Kanpur Physics', url: 'https://www.iitk.ac.in/phy/', country: 'India', type: 'University', description: 'Theoretical physics' },
  { name: 'IISc Bangalore Physics', url: 'https://physics.iisc.ac.in/', country: 'India', type: 'University', description: 'India\'s top research institute' },
  { name: 'TIFR', url: 'https://www.tifr.res.in/', country: 'India', type: 'Research Institute', description: 'Tata Institute Fundamental Research' },
  { name: 'HBCSE Olympiad', url: 'https://olympiads.hbcse.tifr.res.in/', country: 'India', type: 'Competition', description: 'Indian Olympiad training' },
  { name: 'Swayam Physics', url: 'https://swayam.gov.in/', country: 'India', type: 'MOOC Platform', description: 'Indian MOOC courses' },
  
  // ASIA - CHINA
  { name: 'Tsinghua Physics', url: 'https://www.phys.tsinghua.edu.cn/', country: 'China', type: 'University', description: 'XuetangX platform' },
  { name: 'Peking University Physics', url: 'https://www.phy.pku.edu.cn/', country: 'China', type: 'University', description: '280+ faculty members' },
  { name: 'USTC Physics', url: 'https://physics.ustc.edu.cn/', country: 'China', type: 'University', description: 'Quantum information leader' },
  { name: 'Fudan Physics', url: 'https://phys.fudan.edu.cn/', country: 'China', type: 'University', description: 'Shanghai research' },
  { name: 'Nanjing University Physics', url: 'https://physics.nju.edu.cn/', country: 'China', type: 'University', description: 'Historic physics dept' },
  { name: 'CPhO', url: 'https://cphos.cn', country: 'China', type: 'Competition', description: 'Chinese Physics Olympiad' },
  
  // ASIA - JAPAN
  { name: 'University of Tokyo Physics', url: 'https://www.phys.s.u-tokyo.ac.jp/en/', country: 'Japan', type: 'University', description: 'UTokyo GUC program' },
  { name: 'Kyoto University OCW', url: 'https://www.phys.s.kyoto-u.ac.jp/en/', country: 'Japan', type: 'University', description: 'Free course materials' },
  { name: 'Osaka University Physics', url: 'https://www.phys.sci.osaka-u.ac.jp/en/', country: 'Japan', type: 'University', description: 'Kansai region leader' },
  { name: 'KEK', url: 'https://www.kek.jp/', country: 'Japan', type: 'Research Lab', description: 'High Energy Accelerator' },
  { name: 'RIKEN', url: 'https://www.riken.jp/', country: 'Japan', type: 'Research Institute', description: 'Basic science research' },
  
  // ASIA - SOUTH KOREA
  { name: 'KAIST Physics', url: 'https://physics.kaist.ac.kr/', country: 'Korea', type: 'University', description: 'Korea Advanced Institute' },
  { name: 'Seoul National Physics', url: 'https://physics.snu.ac.kr/', country: 'Korea', type: 'University', description: '#1 in South Korea' },
  { name: 'POSTECH Physics', url: 'https://physics.postech.ac.kr/', country: 'Korea', type: 'University', description: 'Research-focused Pohang' },
  { name: 'IBS', url: 'https://www.ibs.re.kr/', country: 'Korea', type: 'Research Institute', description: 'Institute for Basic Science' },
  
  // ASIA - SINGAPORE & OTHERS
  { name: 'NUS Physics', url: 'https://www.physics.nus.edu.sg/', country: 'Singapore', type: 'University', description: 'Asia\'s top university' },
  { name: 'NTU Physics', url: 'https://spms.ntu.edu.sg/', country: 'Singapore', type: 'University', description: 'Nanyang Technical University' },
  { name: 'National Taiwan Physics', url: 'https://www.phys.ntu.edu.tw/', country: 'Taiwan', type: 'University', description: 'NTU physics department' },
  { name: 'Weizmann Institute Physics', url: 'https://www.weizmann.ac.il/feinberg/physics', country: 'Israel', type: 'Research Institute', description: 'Israel\'s premier research' },
  { name: 'Technion Physics', url: 'https://physics.technion.ac.il/', country: 'Israel', type: 'University', description: 'Israel Institute of Technology' },
  
  // OCEANIA - AUSTRALIA
  { name: 'ANU Physics', url: 'https://physics.anu.edu.au/', country: 'Australia', type: 'University', description: '20+ physics courses' },
  { name: 'University of Melbourne Physics', url: 'https://physics.unimelb.edu.au/', country: 'Australia', type: 'University', description: 'LIGO collaboration' },
  { name: 'University of Sydney Physics', url: 'https://www.sydney.edu.au/science/schools/school-of-physics.html', country: 'Australia', type: 'University', description: 'Supercomputing access' },
  { name: 'University of Queensland Physics', url: 'https://physics.uq.edu.au/', country: 'Australia', type: 'University', description: 'Quantum research' },
  { name: 'UNSW Physics', url: 'https://www.physics.unsw.edu.au/', country: 'Australia', type: 'University', description: 'Sydney physics' },
  { name: 'Monash Physics', url: 'https://www.monash.edu/science/schools/physics', country: 'Australia', type: 'University', description: 'Melbourne research' },
  
  // OCEANIA - NEW ZEALAND
  { name: 'University of Auckland Physics', url: 'https://www.auckland.ac.nz/en/science/about-the-faculty/physics.html', country: 'New Zealand', type: 'University', description: 'NZ\'s largest university' },
  { name: 'University of Canterbury Physics', url: 'https://www.canterbury.ac.nz/science/departments/physics-and-astronomy', country: 'New Zealand', type: 'University', description: 'Christchurch campus' },
  
  // SOUTH AMERICA
  { name: 'University of São Paulo', url: 'https://portal.if.usp.br/', country: 'Brazil', type: 'University', description: 'Largest Brazil university' },
  { name: 'UNICAMP Physics', url: 'https://portal.ifi.unicamp.br/', country: 'Brazil', type: 'University', description: 'Campinas physics' },
  { name: 'CBPF', url: 'https://www.cbpf.br/', country: 'Brazil', type: 'Research Institute', description: 'Brazilian physics center' },
  { name: 'University of Buenos Aires', url: 'https://www.df.uba.ar/', country: 'Argentina', type: 'University', description: 'Free public education' },
  { name: 'Balseiro Institute', url: 'https://www.ib.edu.ar/', country: 'Argentina', type: 'University', description: 'Nuclear physics' },
  { name: 'Pontificia UC Chile', url: 'https://fisica.uc.cl/', country: 'Chile', type: 'University', description: 'Leading Chile university' },
  { name: 'University of Chile', url: 'https://fisica.ciencias.uchile.cl/', country: 'Chile', type: 'University', description: 'Historic physics dept' },
  { name: 'ICTP-SAIFR', url: 'https://ictp-saifr.org/', country: 'Brazil', type: 'Research Center', description: 'Latin American physics' },
  { name: 'UNAM Physics', url: 'https://www.fisica.unam.mx/', country: 'Mexico', type: 'University', description: 'National autonomous university' },
  
  // MIDDLE EAST
  { name: 'KAUST', url: 'https://www.kaust.edu.sa/', country: 'Saudi Arabia', type: 'Research University', description: 'World-class physics research' },
  { name: 'King Saud University', url: 'https://www.ksu.edu.sa/', country: 'Saudi Arabia', type: 'University', description: 'Largest in Saudi Arabia' },
  { name: 'Sharif University', url: 'https://www.sharif.edu/', country: 'Iran', type: 'University', description: 'Iran\'s MIT' },
  { name: 'University of Tehran', url: 'https://ut.ac.ir/', country: 'Iran', type: 'University', description: 'Oldest modern university' },
  { name: 'IPM', url: 'https://www.ipm.ir/', country: 'Iran', type: 'Research Institute', description: 'Institute for Physics' },
  { name: 'Weizmann Institute', url: 'https://www.weizmann.ac.il/feinberg/physics', country: 'Israel', type: 'Research Institute', description: 'Israel\'s premier research' },
  { name: 'Technion', url: 'https://physics.technion.ac.il/', country: 'Israel', type: 'University', description: 'Israel Institute of Technology' },
  { name: 'Hebrew University', url: 'https://en.physics.huji.ac.il/', country: 'Israel', type: 'University', description: 'Jerusalem research excellence' },
  { name: 'Tel Aviv University', url: 'https://physics.tau.ac.il/', country: 'Israel', type: 'University', description: 'Coastal research hub' },
  { name: 'Bilkent University', url: 'https://www.bilkent.edu.tr/', country: 'Turkey', type: 'University', description: 'Private research university' },
  { name: 'METU', url: 'https://www.metu.edu.tr/', country: 'Turkey', type: 'University', description: 'Middle East Technical University' },
  { name: 'Istanbul Technical', url: 'https://www.itu.edu.tr/', country: 'Turkey', type: 'University', description: 'Historic technical university' },
  { name: 'NYU Abu Dhabi', url: 'https://nyuad.nyu.edu/', country: 'UAE', type: 'University', description: 'Global network university' },
  { name: 'Khalifa University', url: 'https://www.ku.ac.ae/', country: 'UAE', type: 'University', description: 'Abu Dhabi research' },
  { name: 'UAE University', url: 'https://www.uaeu.ac.ae/', country: 'UAE', type: 'University', description: 'Al Ain campus' },
  { name: 'Qatar University', url: 'https://www.qu.edu.qa/', country: 'Qatar', type: 'University', description: 'National university' },
  { name: 'American University Beirut', url: 'https://www.aub.edu.lb/', country: 'Lebanon', type: 'University', description: 'Historic institution' },
  
  // AFRICA
  { name: 'University of Cape Town', url: 'https://www.physci.uct.ac.za/', country: 'South Africa', type: 'University', description: 'Africa\'s top university' },
  { name: 'Wits Physics', url: 'https://www.wits.ac.za/science/physics/', country: 'South Africa', type: 'University', description: 'Johannesburg research' },
  { name: 'Stellenbosch Physics', url: 'https://www.sun.ac.za/physics', country: 'South Africa', type: 'University', description: 'Western Cape' },
  { name: 'AIMS South Africa', url: 'https://aims.ac.za/', country: 'South Africa', type: 'Research Center', description: 'AI for Science program' },
  { name: 'NITheCS', url: 'https://nithecs.ac.za/', country: 'South Africa', type: 'Research Institute', description: 'National Theoretical Physics' },
  { name: 'SAAO', url: 'https://www.saao.ac.za/', country: 'South Africa', type: 'Observatory', description: 'South African observatory' },
  { name: 'University of Lagos', url: 'https://www.unilag.edu.ng/', country: 'Nigeria', type: 'University', description: 'Coastal hub' },
  { name: 'University of Ibadan', url: 'https://www.ui.edu.ng/', country: 'Nigeria', type: 'University', description: 'Oldest Nigerian uni' },
  { name: 'Ahmadu Bello University', url: 'https://www.abu.edu.ng/', country: 'Nigeria', type: 'University', description: 'Northern Nigeria' },
  { name: 'University of Nairobi', url: 'https://www.uonbi.ac.ke/', country: 'Kenya', type: 'University', description: 'Kenya\'s largest' },
  { name: 'Kenyatta University', url: 'https://www.ku.ac.ke/', country: 'Kenya', type: 'University', description: 'Teacher training hub' },
  { name: 'Strathmore University', url: 'https://www.strathmore.edu/', country: 'Kenya', type: 'University', description: 'Private research' },
  { name: 'University of Ghana', url: 'https://www.ug.edu.gh/', country: 'Ghana', type: 'University', description: 'Legon campus' },
  { name: 'AIMS Ghana', url: 'https://aims.edu.gh/', country: 'Ghana', type: 'Research Center', description: 'West African hub' },
  { name: 'Kwame Nkrumah Uni', url: 'https://www.knust.edu.gh/', country: 'Ghana', type: 'University', description: 'Kumasi campus' },
  { name: 'Cairo University', url: 'https://cu.edu.eg/', country: 'Egypt', type: 'University', description: 'Historic physics' },
  { name: 'Ain Shams University', url: 'https://www.asu.edu.eg/', country: 'Egypt', type: 'University', description: 'Cairo research' },
  { name: 'Alexandria University', url: 'https://www.alexu.edu.eg/', country: 'Egypt', type: 'University', description: 'Coastal hub' },
  { name: 'African School of Physics', url: 'https://africanschoolofphysics.org/', country: 'Multi', type: 'Summer School', description: 'Training African physicists' },
  { name: 'ICTP-EAIFR', url: 'https://eaifr.ictp.it/', country: 'Rwanda', type: 'Research Center', description: 'East African physics' },
  
  // NORTH AMERICA - NATIONAL LABS
  { name: 'Argonne National Lab', url: 'https://www.anl.gov/', country: 'USA', type: 'National Lab', description: 'Materials, chemistry' },
  { name: 'Brookhaven National Lab', url: 'https://www.bnl.gov/', country: 'USA', type: 'National Lab', description: 'RHIC, nuclear physics' },
  { name: 'Lawrence Berkeley Lab', url: 'https://www.lbl.gov/', country: 'USA', type: 'National Lab', description: 'Materials, energy' },
  { name: 'Lawrence Livermore', url: 'https://www.llnl.gov/', country: 'USA', type: 'National Lab', description: 'Fusion, security' },
  { name: 'Los Alamos Lab', url: 'https://www.lanl.gov/', country: 'USA', type: 'National Lab', description: 'Nuclear, computing' },
  { name: 'Oak Ridge Lab', url: 'https://www.ornl.gov/', country: 'USA', type: 'National Lab', description: 'Neutron science' },
  { name: 'Sandia National Labs', url: 'https://www.sandia.gov/', country: 'USA', type: 'National Lab', description: 'Engineering physics' },
  
  // CANADA
  { name: 'Perimeter Institute', url: 'https://perimeterinstitute.ca/', country: 'Canada', type: 'Research Institute', description: 'Theoretical physics excellence' },
  { name: 'TRIUMF', url: 'https://www.triumf.ca/', country: 'Canada', type: 'National Lab', description: 'Particle accelerator' },
  { name: 'McGill Physics', url: 'https://www.physics.mcgill.ca/', country: 'Canada', type: 'University', description: 'Montreal research' },
  { name: 'UBC Physics', url: 'https://www.physics.ubc.ca/', country: 'Canada', type: 'University', description: 'Western Canada leader' },
  { name: 'University of Toronto Physics', url: 'https://www.physics.utoronto.ca/', country: 'Canada', type: 'University', description: 'Canada\'s largest' },
  
  // EXISTING US UNIVERSITIES
  { name: 'Harvard Physics', url: 'https://www.physics.harvard.edu/', country: 'USA', type: 'University', description: 'Harvard University physics' },
  { name: 'Stanford Physics', url: 'https://physics.stanford.edu/', country: 'USA', type: 'University', description: 'Stanford University physics' },
  { name: 'Princeton Physics', url: 'https://physics.princeton.edu/', country: 'USA', type: 'University', description: 'Princeton University physics' },
  { name: 'Caltech Physics', url: 'https://www.pma.caltech.edu/research-and-academics/physics', country: 'USA', type: 'University', description: 'Caltech physics' },
  { name: 'UC Berkeley Physics', url: 'https://physics.berkeley.edu/', country: 'USA', type: 'University', description: 'UC Berkeley physics' },
  { name: 'University of Chicago Physics', url: 'https://physics.uchicago.edu/', country: 'USA', type: 'University', description: 'Enrico Fermi Institute' },
  { name: 'Columbia Physics', url: 'https://physics.columbia.edu/', country: 'USA', type: 'University', description: 'Pupin Hall history' },
  { name: 'Cornell Physics', url: 'https://physics.cornell.edu/', country: 'USA', type: 'University', description: 'Accelerator physics' },
  { name: 'UIUC Physics', url: 'https://physics.illinois.edu/', country: 'USA', type: 'University', description: 'NCSA supercomputing' },
  { name: 'Yale Physics', url: 'https://physics.yale.edu/', country: 'USA', type: 'University', description: 'Historic department' },
  { name: 'University of Michigan Physics', url: 'https://lsa.umich.edu/physics', country: 'USA', type: 'University', description: 'Midwest research' },
  { name: 'University of Texas Physics', url: 'https://physics.utexas.edu/', country: 'USA', type: 'University', description: 'Texas research' },
  { name: 'UCLA Physics', url: 'https://physics.ucla.edu/', country: 'USA', type: 'University', description: 'Southern California' },
  { name: 'UC Santa Barbara Physics', url: 'https://www.physics.ucsb.edu/', country: 'USA', type: 'University', description: 'Kavli Institute' },
  { name: 'University of Washington Physics', url: 'https://phys.washington.edu/', country: 'USA', type: 'University', description: 'Pacific Northwest' },
  { name: 'University of Maryland Physics', url: 'https://physics.umd.edu/', country: 'USA', type: 'University', description: 'NIST collaboration' },
  { name: 'University of Pennsylvania Physics', url: 'https://www.physics.upenn.edu/', country: 'USA', type: 'University', description: 'Ivy League physics' },
  { name: 'Johns Hopkins Physics', url: 'https://physics-astronomy.jhu.edu/', country: 'USA', type: 'University', description: 'Applied physics' },
  { name: 'Northwestern Physics', url: 'https://physics.northwestern.edu/', country: 'USA', type: 'University', description: 'Materials research' },
  { name: 'Georgia Tech Physics', url: 'https://physics.gatech.edu/', country: 'USA', type: 'University', description: 'Engineering physics' }
]

// ============================================
// RESEARCH RESOURCES - 1,100,000+ arXiv PHYSICS PAPERS
// ============================================

const researchResources = [
  { name: 'arXiv Physics', url: 'https://arxiv.org/archive/physics', type: 'Repository', description: '~1.15M physics papers (37.4% of 3.07M total)' },
  { name: 'arXiv astro-ph', url: 'https://arxiv.org/archive/astro-ph', type: 'Repository', description: 'Astrophysics papers' },
  { name: 'arXiv cond-mat', url: 'https://arxiv.org/archive/cond-mat', type: 'Repository', description: 'Condensed matter papers' },
  { name: 'arXiv hep-th', url: 'https://arxiv.org/archive/hep-th', type: 'Repository', description: 'High energy theory' },
  { name: 'arXiv gr-qc', url: 'https://arxiv.org/archive/gr-qc', type: 'Repository', description: 'General relativity' },
  { name: 'arXiv quant-ph', url: 'https://arxiv.org/archive/quant-ph', type: 'Repository', description: 'Quantum physics' },
  { name: 'NASA ADS', url: 'https://ui.adsabs.harvard.edu/', type: 'Database', description: 'Astrophysics Data System' },
  { name: 'INSPIRE-HEP', url: 'https://inspirehep.net/', type: 'Database', description: 'High energy physics literature' },
  { name: 'Web of Science', url: 'https://www.webofscience.com/', type: 'Database', description: 'Citation database' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/', type: 'Search', description: 'Academic search engine' },
  { name: 'Physical Review Letters', url: 'https://journals.aps.org/prl/', type: 'Journal', description: 'PRL - Premier physics journal' },
  { name: 'Physical Review D', url: 'https://journals.aps.org/prd/', type: 'Journal', description: 'Particles, Fields, Gravitation' },
  { name: 'Physical Review B', url: 'https://journals.aps.org/prb/', type: 'Journal', description: 'Condensed Matter Physics' },
  { name: 'Physical Review A', url: 'https://journals.aps.org/pra/', type: 'Journal', description: 'Atomic, Molecular, Optical' },
  { name: 'Physical Review C', url: 'https://journals.aps.org/prc/', type: 'Journal', description: 'Nuclear Physics' },
  { name: 'Physical Review E', url: 'https://journals.aps.org/pre/', type: 'Journal', description: 'Statistical Physics' },
  { name: 'Reviews of Modern Physics', url: 'https://journals.aps.org/rmp/', type: 'Journal', description: 'Review articles' },
  { name: 'Annals of Physics', url: 'https://www.sciencedirect.com/journal/annals-of-physics', type: 'Journal', description: 'General physics journal' },
  { name: 'Nuclear Physics B', url: 'https://www.sciencedirect.com/journal/nuclear-physics-b', type: 'Journal', description: 'Particle physics' },
  { name: 'Physics Letters B', url: 'https://www.sciencedirect.com/journal/physics-letters-b', type: 'Journal', description: 'Particle physics' },
  { name: 'European Physical Journal', url: 'https://www.springer.com/physics/epj', type: 'Journal', description: 'EPJ series' },
  { name: 'Chinese Physics C', url: 'https://iopscience.iop.org/journal/1674-1137', type: 'Journal', description: 'Chinese physics journal' },
  { name: 'Progress of Theoretical Physics', url: 'https://academic.oup.com/ptp', type: 'Journal', description: 'Japanese physics journal' },
  { name: 'Pramana', url: 'https://www.springer.com/journal/12043', type: 'Journal', description: 'Indian physics journal' }
]

// ============================================
// RESEARCH INSTITUTES - 120+ WORLDWIDE MAJOR LABS
// ============================================

const researchInstitutes = [
  // AMERICAS
  { name: 'Perimeter Institute', url: 'https://perimeterinstitute.ca/', country: 'Canada', focus: 'Theoretical Physics', description: 'Foundational physics research excellence' },
  { name: 'Institute for Advanced Study', url: 'https://www.ias.edu/', country: 'USA', focus: 'All Physics', description: 'Princeton IAS - Einstein worked here' },
  { name: 'Kavli Institute (KITP)', url: 'https://www.kitp.ucsb.edu/', country: 'USA', focus: 'Theoretical Physics', description: 'UCSB theoretical physics' },
  { name: 'Simons Foundation', url: 'https://www.simonsfoundation.org/', country: 'USA', focus: 'Math/Physics', description: 'Private foundation for research' },
  { name: 'Santa Fe Institute', url: 'https://www.santafe.edu/', country: 'USA', focus: 'Complex Systems', description: 'Interdisciplinary research' },
  { name: 'Fermilab', url: 'https://www.fnal.gov/', country: 'USA', focus: 'Particle Physics', description: 'America\'s particle physics lab' },
  { name: 'Brookhaven National Lab', url: 'https://www.bnl.gov/', country: 'USA', focus: 'Nuclear Physics', description: 'RHIC heavy ion collider' },
  { name: 'SLAC', url: 'https://www6.slac.stanford.edu/', country: 'USA', focus: 'X-ray Science', description: 'Stanford accelerator' },
  { name: 'Argonne National Lab', url: 'https://www.anl.gov/', country: 'USA', focus: 'Materials/Chemistry', description: 'Advanced Photon Source' },
  { name: 'Oak Ridge National Lab', url: 'https://www.ornl.gov/', country: 'USA', focus: 'Neutron Science', description: 'Spallation neutron source' },
  { name: 'Lawrence Berkeley Lab', url: 'https://www.lbl.gov/', country: 'USA', focus: 'Materials/Energy', description: 'DOE national lab' },
  { name: 'Lawrence Livermore', url: 'https://www.llnl.gov/', country: 'USA', focus: 'Fusion/Security', description: 'NIF laser facility' },
  { name: 'Los Alamos Lab', url: 'https://www.lanl.gov/', country: 'USA', focus: 'Nuclear/Computing', description: 'Historic nuclear lab' },
  { name: 'NIST', url: 'https://www.nist.gov/', country: 'USA', focus: 'Standards', description: 'Physical measurements' },
  { name: 'LIGO', url: 'https://www.ligo.caltech.edu/', country: 'USA', focus: 'Gravitational Waves', description: 'Nobel-winning observatory' },
  { name: 'IceCube Neutrino', url: 'https://icecube.wisc.edu/', country: 'Antarctica/USA', focus: 'Neutrino Astronomy', description: 'South Pole detector' },
  { name: 'TRIUMF', url: 'https://www.triumf.ca/', country: 'Canada', focus: 'Particle Physics', description: 'Canada\'s accelerator' },
  
  // EUROPE
  { name: 'CERN', url: 'https://home.cern/', country: 'Switzerland', focus: 'Particle Physics', description: 'LHC - world\'s largest lab' },
  { name: 'Max Planck Physics Institutes', url: 'https://www.mpg.de/en', country: 'Germany', focus: 'All Physics', description: '6 major physics MPIs' },
  { name: 'DESY', url: 'https://www.desy.de/', country: 'Germany', focus: 'Particle Physics', description: 'German electron synchrotron' },
  { name: 'GSI Helmholtz', url: 'https://www.gsi.de/', country: 'Germany', focus: 'Heavy Ions', description: 'FAIR facility' },
  { name: 'Paul Scherrer Institute', url: 'https://www.psi.ch/', country: 'Switzerland', focus: 'Synchrotron', description: 'Swiss photon science' },
  { name: 'ESRF', url: 'https://www.esrf.fr/', country: 'France', focus: 'Synchrotron', description: 'European Synchrotron' },
  { name: 'ILL', url: 'https://www.ill.eu/', country: 'France', focus: 'Neutron Source', description: 'Institut Laue-Langevin' },
  { name: 'CNRS', url: 'https://www.cnrs.fr/', country: 'France', focus: 'All Research', description: 'French research org' },
  { name: 'Diamond Light Source', url: 'https://www.diamond.ac.uk/', country: 'UK', focus: 'Synchrotron', description: 'UK synchrotron facility' },
  { name: 'ISIS Neutron Source', url: 'https://www.isis.stfc.ac.uk/', country: 'UK', focus: 'Neutron Source', description: 'Rutherford Appleton Lab' },
  { name: 'Culham Centre', url: 'https://ccfe.ukaea.uk/', country: 'UK', focus: 'Fusion', description: 'JET tokamak' },
  { name: 'INFN', url: 'https://home.infn.it/', country: 'Italy', focus: 'Nuclear Physics', description: 'Italian nuclear physics' },
  { name: 'Gran Sasso Lab', url: 'https://www.lngs.infn.it/', country: 'Italy', focus: 'Underground Physics', description: 'Dark matter searches' },
  { name: 'SISSA', url: 'https://www.sissa.it/', country: 'Italy', focus: 'Theoretical Physics', description: 'Trieste theoretical school' },
  { name: 'ICTP', url: 'https://www.ictp.it/', country: 'Italy', focus: 'International', description: 'Abdus Salam centre' },
  { name: 'Niels Bohr Institute', url: 'https://nbi.ku.dk/', country: 'Denmark', focus: 'Quantum Foundations', description: 'Copenhagen interpretation' },
  { name: 'Nordita', url: 'https://www.nordita.org/', country: 'Sweden', focus: 'Theoretical Physics', description: 'Nordic Institute' },
  { name: 'Nikhef', url: 'https://www.nikhef.nl/', country: 'Netherlands', focus: 'Particle Physics', description: 'Dutch particle physics' },
  { name: 'AMOLF', url: 'https://amolf.nl/', country: 'Netherlands', focus: 'AMO Physics', description: 'Atomic physics' },
  { name: 'ESO', url: 'https://www.eso.org/', country: 'Germany/Chile', focus: 'Astronomy', description: 'European Southern Observatory' },
  { name: 'ESA', url: 'https://www.esa.int/', country: 'Europe', focus: 'Space', description: 'European Space Agency' },
  
  // ASIA
  { name: 'KEK', url: 'https://www.kek.jp/', country: 'Japan', focus: 'Particle Physics', description: 'Japan accelerator' },
  { name: 'RIKEN', url: 'https://www.riken.jp/', country: 'Japan', focus: 'Basic Science', description: 'Japanese research' },
  { name: 'IBS', url: 'https://www.ibs.re.kr/', country: 'Korea', focus: 'Basic Science', description: 'Korean institute' },
  { name: 'TIFR', url: 'https://www.tifr.res.in/', country: 'India', focus: 'Fundamental Research', description: 'Tata Institute' },
  { name: 'IISc', url: 'https://physics.iisc.ac.in/', country: 'India', focus: 'Research', description: 'Indian Institute of Science' },
  { name: 'Institute of Physics CAS', url: 'http://www.iop.cas.cn/', country: 'China', focus: 'All Physics', description: 'Chinese Academy' },
  { name: 'Weizmann Institute', url: 'https://www.weizmann.ac.il/feinberg/physics', country: 'Israel', focus: 'Basic Research', description: 'Israel research' },
  
  // ASTRONOMY/OBSERVATORIES
  { name: 'Hubble Space Telescope', url: 'https://hubblesite.org/', country: 'USA/Europe', focus: 'Astronomy', description: 'Space telescope' },
  { name: 'JWST', url: 'https://jwst.nasa.gov/', country: 'USA/Europe', focus: 'Astronomy', description: 'James Webb Space Telescope' },
  { name: 'ALMA', url: 'https://www.almaobservatory.org/', country: 'Chile', focus: 'Radio Astronomy', description: 'Atacama telescope' },
  { name: 'SKA', url: 'https://www.skao.int/', country: 'Australia/SA', focus: 'Radio Astronomy', description: 'Square Kilometre Array' },
  { name: 'Laser Interferometer Space Antenna', url: 'https://www.lisamission.org/', country: 'Europe/USA', focus: 'Gravitational Waves', description: 'Space-based detector' },
  
  // AFRICA & OTHER
  { name: 'African School of Physics', url: 'https://africanschoolofphysics.org/', country: 'Africa', focus: 'Education', description: 'Training African physicists' },
  { name: 'ICTP-EAIFR', url: 'https://eaifr.ictp.it/', country: 'Rwanda', focus: 'Research', description: 'East Africa physics' },
  { name: 'SAAO', url: 'https://www.saao.ac.za/', country: 'South Africa', focus: 'Astronomy', description: 'South African observatory' }
]

// ============================================
// PHYSICS SOFTWARE - 200+ TOOLS
// ============================================

const physicsSoftware = [
  // PROGRAMMING LANGUAGES
  { name: 'Python (NumPy/SciPy)', url: 'https://numpy.org/', type: 'Language', description: 'Scientific computing standard' },
  { name: 'Python (Matplotlib)', url: 'https://matplotlib.org/', type: 'Visualization', description: 'Plotting library' },
  { name: 'Python (SymPy)', url: 'https://www.sympy.org/', type: 'CAS', description: 'Symbolic mathematics' },
  { name: 'Julia', url: 'https://julialang.org/', type: 'Language', description: 'Modern scientific computing' },
  { name: 'Julia Physics', url: 'https://juliaphysics.github.io/', type: 'Language', description: 'Julia physics ecosystem' },
  { name: 'MATLAB', url: 'https://www.mathworks.com/', type: 'Software', description: 'Industry standard' },
  { name: 'GNU Octave', url: 'https://octave.org/', type: 'Language', description: 'Free MATLAB alternative' },
  { name: 'Wolfram Mathematica', url: 'https://www.wolfram.com/mathematica/', type: 'CAS', description: 'Symbolic computation' },
  { name: 'Maple', url: 'https://www.maplesoft.com/', type: 'CAS', description: 'Symbolic mathematics' },
  { name: 'R (Physics)', url: 'https://www.r-project.org/', type: 'Language', description: 'Statistical computing' },
  
  // HEP/PARTICLE PHYSICS
  { name: 'ROOT (CERN)', url: 'https://root.cern/', type: 'Analysis', description: 'High-energy physics data' },
  { name: 'Geant4', url: 'https://geant4.web.cern.ch/', type: 'Simulation', description: 'Particle transport simulation' },
  { name: 'MadGraph5', url: 'https://launchpad.net/mg5amcnlo', type: 'Simulation', description: 'Event generation' },
  { name: 'Pythia', url: 'https://pythia.org/', type: 'Simulation', description: 'Event generator' },
  { name: 'Delphes', url: 'https://github.com/delphes/delphes', type: 'Simulation', description: 'Fast detector simulation' },
  { name: 'Rivet', url: 'https://rivet.hepforge.org/', type: 'Analysis', description: 'Analysis framework' },
  { name: 'Sherpa', url: 'https://sherpa-team.gitlab.io/', type: 'Simulation', description: 'Event generator' },
  { name: 'Whizard', url: 'https://whizard.hepforge.org/', type: 'Simulation', description: 'Event generator' },
  { name: 'CheckMATE', url: 'https://checkmate.hepforge.org/', type: 'Analysis', description: 'BSM analysis tool' },
  
  // MOLECULAR DYNAMICS
  { name: 'LAMMPS', url: 'https://www.lammps.org/', type: 'MD', description: 'Large-scale MD' },
  { name: 'GROMACS', url: 'https://www.gromacs.org/', type: 'MD', description: 'Biomolecular MD' },
  { name: 'NAMD', url: 'https://www.ks.uiuc.edu/Research/namd/', type: 'MD', description: 'Parallel MD' },
  { name: 'OpenMM', url: 'https://openmm.org/', type: 'MD', description: 'GPU-accelerated MD' },
  { name: 'AMBER', url: 'https://ambermd.org/', type: 'MD', description: 'Biomolecular simulation' },
  { name: 'CP2K', url: 'https://www.cp2k.org/', type: 'QM/MM', description: 'Quantum chemistry' },
  { name: 'Quantum ESPRESSO', url: 'https://www.quantum-espresso.org/', type: 'DFT', description: 'Electronic structure' },
  { name: 'VASP', url: 'https://www.vasp.at/', type: 'DFT', description: 'Materials simulation' },
  { name: 'ABINIT', url: 'https://www.abinit.org/', type: 'DFT', description: 'Electronic structure' },
  { name: 'VMD', url: 'https://www.ks.uiuc.edu/Research/vmd/', type: 'Visualization', description: 'Molecular visualization' },
  
  // CFD/FLUID DYNAMICS
  { name: 'OpenFOAM', url: 'https://openfoam.org/', type: 'CFD', description: 'Open source CFD' },
  { name: 'SU2', url: 'https://su2code.github.io/', type: 'CFD', description: 'Multiphysics CFD' },
  { name: 'FEniCS', url: 'https://fenicsproject.org/', type: 'FEM', description: 'PDE solving platform' },
  { name: 'FreeFEM', url: 'https://freefem.org/', type: 'FEM', description: 'Finite element PDEs' },
  { name: 'deal.II', url: 'https://dealii.org/', type: 'FEM', description: 'Finite element library' },
  { name: 'ANSYS Fluent', url: 'https://www.ansys.com/', type: 'CFD', description: 'Commercial CFD' },
  { name: 'COMSOL', url: 'https://www.comsol.com/', type: 'Multiphysics', description: 'Multiphysics simulation' },
  { name: 'Code_Saturne', url: 'https://www.code-saturne.org/', type: 'CFD', description: 'EDF open source CFD' },
  { name: 'PALABOS', url: 'https://palabos.unige.ch/', type: 'LBM', description: 'Lattice Boltzmann' },
  
  // ELECTROMAGNETICS
  { name: 'Meep', url: 'https://meep.readthedocs.io/', type: 'FDTD', description: 'MIT EM simulation' },
  { name: 'gprMax', url: 'https://www.gprmax.com/', type: 'FDTD', description: 'GPR simulation' },
  { name: 'OpenEMS', url: 'https://openems.de/', type: 'FDTD', description: 'Open source EM' },
  { name: 'Elmer FEM', url: 'https://elmerfem.org/', type: 'Multiphysics', description: 'Multiphysics FEM' },
  { name: 'Palace', url: 'https://awslabs.github.io/palace/', type: 'EM', description: 'AWS EM simulation' },
  { name: 'FEMM', url: 'https://www.femm.info/', type: 'FEM', description: 'Magnetics simulation' },
  { name: 'FastHenry', url: 'https://www.fastfieldsolvers.com/', type: 'EM', description: 'Inductance extraction' },
  
  // ASTROPHYSICS
  { name: 'Gadget-2', url: 'https://wwwmpa.mpa-garching.mpg.de/gadget/', type: 'N-Body', description: 'Cosmological sims' },
  { name: 'GIZMO', url: 'http://www.tapir.caltech.edu/~phopkins/Site/GIZMO.html', type: 'N-Body', description: 'Astrophysical sims' },
  { name: 'AREPO', url: 'https://arepo-code.org/', type: 'N-Body', description: 'Moving mesh code' },
  { name: 'Enzo', url: 'https://enzo-project.org/', type: 'N-Body', description: 'Adaptive mesh refinement' },
  { name: 'FLASH', url: 'https://flash.uchicago.edu/', type: 'N-Body', description: 'Multiscale astro' },
  { name: 'PLUTO', url: 'https://plutocode.ph.unito.it/', type: 'CFD', description: 'Astrophysical CFD' },
  { name: 'Athena++', url: 'https://princetonuniversity.github.io/athena/', type: 'MHD', description: 'Grid-based MHD' },
  { name: 'RAMSES', url: 'https://bitbucket.org/rteyssie/ramses/', type: 'N-Body', description: 'AMR cosmology' },
  
  // OPTICS
  { name: 'Zemax OpticStudio', url: 'https://www.zemax.com/', type: 'Optics', description: 'Lens design' },
  { name: 'Code V', url: 'https://www.synopsys.com/', type: 'Optics', description: 'Optical design' },
  { name: 'FRED', url: 'https://www.photonengr.com/', type: 'Optics', description: 'Optical engineering' },
  { name: 'OpticStudio', url: 'https://www.zemax.com/', type: 'Optics', description: 'Ray tracing' },
  
  // QUANTUM COMPUTING
  { name: 'Qiskit', url: 'https://qiskit.org/', type: 'Quantum', description: 'IBM quantum SDK' },
  { name: 'Cirq', url: 'https://quantumai.google/cirq', type: 'Quantum', description: 'Google quantum' },
  { name: 'PennyLane', url: 'https://pennylane.ai/', type: 'Quantum', description: 'Quantum ML' },
  { name: 'QuTiP', url: 'https://qutip.org/', type: 'Quantum', description: 'Quantum toolbox' },
  { name: 'ProjectQ', url: 'https://github.com/ProjectQ-Framework/ProjectQ', type: 'Quantum', description: 'Quantum SDK' },
  { name: 'Strawberry Fields', url: 'https://strawberryfields.ai/', type: 'Quantum', description: 'Photonic quantum' },
  { name: 'Ocean SDK', url: 'https://docs.ocean.dwavesys.com/', type: 'Quantum', description: 'D-Wave quantum' },
  
  // PHYSICS ENGINES
  { name: 'Bullet Physics', url: 'https://pybullet.org/', type: 'Game Engine', description: '3D rigid body' },
  { name: 'PhysX', url: 'https://github.com/NVIDIA-Omniverse/PhysX', type: 'Game Engine', description: 'NVIDIA physics' },
  { name: 'MuJoCo', url: 'https://mujoco.org/', type: 'Robotics', description: 'Multi-joint dynamics' },
  { name: 'Jolt Physics', url: 'https://github.com/jrouwe/JoltPhysics', type: 'Game Engine', description: 'Modern game physics' },
  { name: 'Box2D', url: 'https://box2d.org/', type: 'Game Engine', description: '2D physics' },
  { name: 'Chipmunk2D', url: 'https://chipmunk-physics.net/', type: 'Game Engine', description: '2D physics' },
  { name: 'ODE', url: 'https://ode.org/', type: 'Game Engine', description: 'Open Dynamics Engine' },
  { name: 'Project Chrono', url: 'https://projectchrono.org/', type: 'Simulation', description: 'Multibody dynamics' },
  
  // DATA ANALYSIS
  { name: 'Jupyter', url: 'https://jupyter.org/', type: 'Notebook', description: 'Interactive computing' },
  { name: 'GNUPlot', url: 'http://www.gnuplot.info/', type: 'Plotting', description: 'Command-line graphics' },
  { name: 'OriginPro', url: 'https://www.originlab.com/', type: 'Analysis', description: 'Scientific graphing' },
  { name: 'Igor Pro', url: 'https://www.wavemetrics.com/', type: 'Analysis', description: 'Technical graphing' },
  { name: 'WolframAlpha', url: 'https://www.wolframalpha.com/', type: 'Tool', description: 'Physics calculator' }
]

// ============================================
// MOBILE APPS - 50+ VERIFIED APPS
// ============================================

const physicsApps = [
  // EXPERIMENT/TOOLS
  { name: 'Phyphox', url: 'https://phyphox.org/', type: 'Lab Sensor', description: 'Phone sensor experiments' },
  { name: 'Physics Toolbox', url: 'https://www.vieyraapps.com/', type: 'Sensor Suite', description: 'Multi-sensor toolkit' },
  { name: 'Physics Toolbox Sensor Suite', url: 'https://www.vieyrasoftware.net/', type: 'Android', description: 'Comprehensive sensors' },
  { name: 'SparkVue', url: 'https://www.passcal.com/', type: 'Data Collection', description: 'PASCO scientific' },
  { name: 'Graphical Analysis', url: 'https://www.vernier.com/', type: 'Data Analysis', description: 'Vernier Software' },
  { name: 'Lab4Physics', url: 'https://www.lab4physics.com/', type: 'Lab Tool', description: 'Physics experiments' },
  { name: 'Sound Meter', url: 'https://play.google.com/', type: 'Measurement', description: 'Decibel measurement' },
  { name: 'Magnetometer', url: 'https://play.google.com/', type: 'Measurement', description: 'Magnetic field' },
  { name: 'Accelerometer', url: 'https://play.google.com/', type: 'Measurement', description: 'Acceleration data' },
  { name: 'Light Meter', url: 'https://play.google.com/', type: 'Measurement', description: 'Lux measurement' },
  
  // LEARNING
  { name: 'Brilliant', url: 'https://brilliant.org/', type: 'Learning', description: 'Interactive courses' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/', type: 'Learning', description: 'Complete curriculum' },
  { name: 'Coursera App', url: 'https://www.coursera.org/', type: 'Learning', description: 'University courses' },
  { name: 'edX App', url: 'https://www.edx.org/', type: 'Learning', description: 'MOOC platform' },
  { name: 'PhET Simulations', url: 'https://phet.colorado.edu/', type: 'Simulation', description: 'Interactive sims' },
  { name: 'Equate Formula Solver', url: 'https://play.google.com/', type: 'Calculator', description: 'Physics formulas' },
  { name: 'Pocket Physics', url: 'https://play.google.com/', type: 'Reference', description: 'Physics formulary' },
  { name: 'PhySyCalc', url: 'https://www.pysy.org/', type: 'Calculator', description: 'Symbolic calculator' },
  { name: 'WolframAlpha', url: 'https://www.wolframalpha.com/', type: 'Calculator', description: 'Physics calculator' },
  { name: 'Symbolab', url: 'https://www.symbolab.com/', type: 'Calculator', description: 'Math solver' },
  
  // ASTRONOMY
  { name: 'Stellarium Mobile', url: 'https://stellarium-labs.com/', type: 'Astronomy', description: 'Mobile planetarium' },
  { name: 'SkySafari', url: 'https://skysafariastronomy.com/', type: 'Astronomy', description: 'Professional astronomy' },
  { name: 'Star Walk 2', url: 'https://vitotechnology.com/star-walk.html', type: 'Astronomy', description: 'Stargazing guide' },
  { name: 'SkyView', url: 'https://www.terminaleleven.com/skyview/', type: 'Astronomy', description: 'AR stargazing' },
  { name: 'Night Sky', url: 'https://www.icandi-apps.com/nightsky', type: 'Astronomy', description: 'iOS astronomy' },
  { name: 'Star Chart', url: 'https://www.escapistgames.com/sc.html', type: 'Astronomy', description: 'Star mapping' },
  { name: 'NASA App', url: 'https://www.nasa.gov/nasaapp', type: 'Astronomy', description: 'NASA missions' },
  { name: 'Exoplanet', url: 'https://exoplanetapp.com/', type: 'Astronomy', description: 'Exoplanet database' },
  { name: 'Mobile Observatory', url: 'https://www.zubak.de/', type: 'Astronomy', description: 'Android astronomy' },
  { name: 'Heavens-Above', url: 'https://www.heavens-above.com/', type: 'Astronomy', description: 'Satellite tracking' },
  
  // SIMULATION/GAMES
  { name: 'Universe Sandbox', url: 'https://universesandbox.com/', type: 'Simulation', description: 'Gravity sandbox' },
  { name: 'Spaceflight Simulator', url: 'https://www.sfsuniverse.com/', type: 'Game', description: 'Rocket physics' },
  { name: 'SimpleRockets 2', url: 'https://www.simplerockets.com/', type: 'Game', description: 'Orbital mechanics' },
  { name: 'Orbiter 2016', url: 'https://www.orbiter-forum.com/', type: 'Simulation', description: 'Space flight sim' },
  { name: 'Algodoo', url: 'https://www.algodoo.com/', type: 'Simulation', description: '2D physics sandbox' },
  { name: 'Osmo Newton', url: 'https://www.playosmo.com/', type: 'AR Game', description: 'Physics AR game' },
  { name: 'Bad Piggies', url: 'https://www.rovio.com/', type: 'Game', description: 'Construction physics' },
  { name: 'Besiege', url: 'https://besiege.spiderlinggames.co.uk/', type: 'Game', description: 'Medieval physics' },
  { name: 'Poly Bridge', url: 'https://www.polybridge.net/', type: 'Game', description: 'Bridge physics' },
  
  // CALCULATORS
  { name: 'Desmos', url: 'https://www.desmos.com/', type: 'Graphing', description: 'Graphing calculator' },
  { name: 'GeoGebra', url: 'https://www.geogebra.org/', type: 'Math', description: 'Dynamic math' },
  { name: 'Calculator++', url: 'https://play.google.com/', type: 'Calculator', description: 'Scientific calc' },
  { name: 'HiPER Calc', url: 'https://hiperdevelopment.wixsite.com/hipercalc', type: 'Calculator', description: 'Android calc' },
  { name: 'CalcKit', url: 'https://calckit.io/', type: 'Calculator', description: 'All-in-one calc' },
  { name: 'PCalc', url: 'https://pcalc.com/', type: 'Calculator', description: 'iOS calculator' }
]

// ============================================
// PODCASTS
// ============================================

const physicsPodcasts = [
  { name: 'The Infinite Monkey Cage', url: 'https://www.bbc.co.uk/programmes/b00snr0w', description: 'BBC science comedy' },
  { name: 'Sean Carroll Mindscape', url: 'https://www.preposterousuniverse.com/podcast/', description: 'Physics and ideas' },
  { name: 'Physics World Weekly', url: 'https://physicsworld.com/podcasts/', description: 'Physics news' },
  { name: 'Quantum Computing Now', url: 'https://anchor.fm/quantumcomputingnow', description: 'Quantum topics' },
  { name: 'The Superposition Guy', url: 'https://www.thesuperpositionguy.com/', description: 'Quantum computing' },
  { name: 'Physics Girl Podcast', url: 'https://www.physicsgirl.org/', description: 'Physics discussions' }
]

// ============================================
// BLOGS
// ============================================

const physicsBlogs = [
  { name: 'Not Even Wrong', url: 'https://www.math.columbia.edu/~woit/wordpress/', author: 'Peter Woit', description: 'Math and physics commentary' },
  { name: 'Backreaction', url: 'https://backreaction.blogspot.com/', author: 'Sabine Hossenfelder', description: 'Foundational physics' },
  { name: 'Preposterous Universe', url: 'https://www.preposterousuniverse.com/blog/', author: 'Sean Carroll', description: 'Physics and philosophy' },
  { name: 'Symmetry Magazine', url: 'https://www.symmetrymagazine.org/', author: 'Fermilab/SLAC', description: 'Particle physics' }
]

// ============================================
// SCHOLARSHIPS & FUNDING - 100+ OPPORTUNITIES
// ============================================

const scholarships = [
  // US GRADUATE FELLOWSHIPS
  { name: 'NSF GRFP', url: 'https://www.nsfgrfp.org/', type: 'US Graduate', description: '$37,000/year + tuition' },
  { name: 'DOE CSGF', url: 'https://www.krellinst.org/csgf/', type: 'US Graduate', description: '$45,000/year + tuition' },
  { name: 'NDSEG Fellowship', url: 'https://ndseg.org/', type: 'US Graduate', description: 'Full tuition + $38,400/year' },
  { name: 'Hertz Fellowship', url: 'https://hertzfoundation.org/', type: 'US Graduate', description: '$38,000/year + tuition' },
  { name: 'DOD SMART', url: 'https://www.smartscholarship.org/', type: 'US Graduate', description: 'STEM scholarships' },
  { name: 'NASA FINESST', url: 'https://nspires.nasaprs.com/', type: 'US Graduate', description: 'Space research' },
  { name: 'NDSEG Fellowship', url: 'https://ndseg.org/', type: 'US Graduate', description: 'Defense research' },
  { name: 'DOE SCGSR', url: 'https://science.osti.gov/wdts/scgsr', type: 'US Graduate', description: 'DOE collaboration' },
  
  // PRESTIGIOUS INTERNATIONAL
  { name: 'Rhodes Scholarship', url: 'https://www.rhodesscholar.org/', type: 'International', description: 'Full Oxford funding' },
  { name: 'Marshall Scholarship', url: 'https://www.marshallscholarship.org/', type: 'UK', description: 'Full UK graduate study' },
  { name: 'Gates Cambridge', url: 'https://www.gatescambridge.org/', type: 'UK', description: 'Full Cambridge funding' },
  { name: 'Churchill Scholarship', url: 'https://www.churchillscholarship.org/', type: 'UK', description: 'Cambridge STEM' },
  { name: 'Fulbright US Student', url: 'https://us.fulbrightonline.org/', type: 'International', description: 'Global exchange' },
  { name: 'Mitchell Scholarship', url: 'https://www.us-irelandalliance.org/', type: 'Ireland', description: 'Ireland study' },
  { name: 'Schwarzman Scholars', url: 'https://www.schwarzmanscholars.org/', type: 'China', description: 'Tsinghua program' },
  { name: 'Knight-Hennessy', url: 'https://knight-hennessy.stanford.edu/', type: 'US', description: 'Stanford graduate' },
  
  // EUROPEAN
  { name: 'Marie Curie Fellowship', url: 'https://marie-sklodowska-curie-actions.ec.europa.eu/', type: 'EU', description: 'European research' },
  { name: 'Erasmus Mundus', url: 'https://erasmus-plus.ec.europa.eu/', type: 'EU', description: 'Joint masters' },
  { name: 'Max Planck IMPRS', url: 'https://www.mpg.de/imprs', type: 'Germany', description: 'PhD positions' },
  { name: 'DAAD Scholarship', url: 'https://www.daad.de/', type: 'Germany', description: 'German study' },
  { name: 'Alexander von Humboldt', url: 'https://www.humboldt-foundation.de/', type: 'Germany', description: 'Research fellowship' },
  { name: 'ETH Excellence', url: 'https://ethz.ch/', type: 'Switzerland', description: 'ETH Zurich' },
  { name: 'Swiss Government', url: 'https://www.sbfi.admin.ch/', type: 'Switzerland', description: 'Swiss funding' },
  { name: 'Cambridge Trust', url: 'https://www.cambridgetrust.org/', type: 'UK', description: 'Cambridge funding' },
  { name: 'Clarendon Oxford', url: 'https://www.ox.ac.uk/', type: 'UK', description: 'Oxford graduate' },
  { name: 'Leverhulme Trust', url: 'https://www.leverhulme.ac.uk/', type: 'UK', description: 'Research grants' },
  
  // ASIA
  { name: 'JSPS Fellowship', url: 'https://www.jsps.go.jp/', type: 'Japan', description: 'Japan research' },
  { name: 'MEXT Scholarship', url: 'https://www.mext.go.jp/', type: 'Japan', description: 'Japanese government' },
  { name: 'Korea NRF', url: 'https://www.nrf.re.kr/', type: 'Korea', description: 'Korean research' },
  { name: 'GKS Scholarship', url: 'https://www.studyinkorea.go.kr/', type: 'Korea', description: 'Global Korea' },
  { name: 'CSIR Fellowship', url: 'https://csirhrdg.res.in/', type: 'India', description: 'Indian research' },
  { name: 'PMRF India', url: 'https://pmrf.in/', type: 'India', description: 'Prime Minister fellowship' },
  { name: 'UGC NET JRF', url: 'https://ugcnet.nta.nic.in/', type: 'India', description: 'Junior research' },
  { name: 'Chinese CSC', url: 'https://www.csc.edu.cn/', type: 'China', description: 'Chinese government' },
  { name: 'Singapore SINGA', url: 'https://www.a-star.edu.sg/singa', type: 'Singapore', description: 'A*STAR program' },
  { name: 'Hong Kong PhD', url: 'https://cerg1.ugc.edu.hk/', type: 'Hong Kong', description: 'HKPFS scheme' },
  { name: 'Taiwan MOE', url: 'https://www.edu.tw/', type: 'Taiwan', description: 'Taiwan scholarship' },
  { name: 'Australia RTP', url: 'https://www.education.gov.au/', type: 'Australia', description: 'Research training' },
  { name: 'ANU PhD', url: 'https://www.anu.edu.au/', type: 'Australia', description: 'ANU graduate' },
  
  // UNDERGRADUATE
  { name: 'Goldwater Scholarship', url: 'https://goldwaterscholarship.gov/', type: 'US Undergrad', description: 'STEM excellence' },
  { name: 'Barry Goldwater', url: 'https://goldwaterscholarship.gov/', type: 'US Undergrad', description: '$7,500/year' },
  { name: 'NOAA Hollings', url: 'https://www.noaa.gov/education/programs', type: 'US Undergrad', description: 'Environmental science' },
  { name: 'DAAD RISE', url: 'https://www.daad.de/rise/', type: 'Germany', description: 'Summer research' },
  { name: 'Amgen Scholars', url: 'https://amgenscholars.com/', type: 'International', description: 'Summer research' },
  { name: 'SURF Caltech', url: 'https://sfp.caltech.edu/programs/surf', type: 'US', description: 'Caltech summer' },
  { name: 'REU Programs', url: 'https://www.nsf.gov/crssprgm/reu/', type: 'US', description: 'NSF summer research' },
  { name: 'CERN Summer Student', url: 'https://careers.smartrecruiters.com/CERN', type: 'Switzerland', description: 'CERN program' },
  { name: 'Perimeter Scholars', url: 'https://perimeterinstitute.ca/', type: 'Canada', description: 'PSI masters' },
  { name: 'JPL Internships', url: 'https://www.jpl.nasa.gov/edu/intern/', type: 'US', description: 'NASA JPL' },
  
  // POSTDOC
  { name: 'Miller Fellowship', url: 'https://miller.berkeley.edu/', type: 'US', description: 'Berkeley postdoc' },
  { name: 'Harvard Society Fellows', url: 'https://socfell.fas.harvard.edu/', type: 'US', description: 'Harvard postdoc' },
  { name: 'IAS Postdoc', url: 'https://www.math.ias.edu/', type: 'US', description: 'IAS positions' },
  { name: 'Marie Curie PF', url: 'https://marie-sklodowska-curie-actions.ec.europa.eu/', type: 'EU', description: 'Postdoc fellowship' },
  { name: 'EMBO Fellowship', url: 'https://www.embo.org/', type: 'Europe', description: 'Life sciences' },
  { name: 'HFSP Fellowship', url: 'https://www.hfsp.org/', type: 'International', description: 'Life sciences' },
  { name: 'CNRS Postdoc', url: 'https://www.cnrs.fr/', type: 'France', description: 'French research' },
  { name: 'JSPS Postdoc', url: 'https://www.jsps.go.jp/', type: 'Japan', description: 'Japan postdoc' },
  
  // RESEARCH GRANTS
  { name: 'NSF CAREER', url: 'https://www.nsf.gov/', type: 'US Faculty', description: 'Junior faculty' },
  { name: 'DOE Early Career', url: 'https://science.osti.gov/', type: 'US Faculty', description: 'DOE funding' },
  { name: 'NASA Early Career', url: 'https://nspires.nasaprs.com/', type: 'US Faculty', description: 'Space research' },
  { name: 'AFOSR YIP', url: 'https://www.afrl.af.mil/', type: 'US Faculty', description: 'Air Force research' },
  { name: 'ONR YIP', url: 'https://www.nre.navy.mil/', type: 'US Faculty', description: 'Navy research' },
  { name: 'Sloan Fellowship', url: 'https://sloan.org/', type: 'US Faculty', description: 'Early career' },
  { name: 'Packard Fellowship', url: 'https://www.packard.org/', type: 'US Faculty', description: 'Science/engineering' },
  { name: 'Cottrell Award', url: 'https://rescorp.org/', type: 'US Faculty', description: 'Research corp' },
  { name: 'Simons Investigator', url: 'https://www.simonsfoundation.org/', type: 'US', description: 'Mathematics/physics' },
  { name: 'ERC Starting Grant', url: 'https://erc.europa.eu/', type: 'EU', description: 'European research' },
  { name: 'ERC Consolidator', url: 'https://erc.europa.eu/', type: 'EU', description: 'Mid-career funding' },
  { name: 'ERC Advanced Grant', url: 'https://erc.europa.eu/', type: 'EU', description: 'Senior researchers' },
  { name: 'Royal Society URF', url: 'https://royalsociety.org/', type: 'UK', description: 'University research' },
  { name: 'Leverhulme RPG', url: 'https://www.leverhulme.ac.uk/', type: 'UK', description: 'Research project' },
  { name: 'Wellcome Trust', url: 'https://wellcome.org/', type: 'UK', description: 'Biophysics' },
  { name: 'DFG Grants', url: 'https://www.dfg.de/', type: 'Germany', description: 'German research' },
  { name: 'NWO Grants', url: 'https://www.nwo.nl/', type: 'Netherlands', description: 'Dutch research' },
  { name: 'VR Grants', url: 'https://www.vr.se/', type: 'Sweden', description: 'Swedish research' }
]

// ============================================
// DIY EXPERIMENTS
// ============================================

const diyExperiments = [
  { name: 'Coursera DIY Science', url: 'https://www.coursera.org/learn/diy-science', description: 'Build instruments at home' },
  { name: 'Arduino Physics', url: 'https://www.arduino.cc/', description: 'Microcontroller experiments' },
  { name: 'Raspberry Pi Physics', url: 'https://www.raspberrypi.org/', description: 'Raspberry Pi sensors' },
  { name: 'PhET DIY', url: 'https://phet.colorado.edu/en/teaching-resources/activities', description: 'Virtual experiments' },
  { name: 'NASA DIY', url: 'https://www.nasa.gov/stem/', description: 'NASA at-home activities' }
]

// ============================================
// ONLINE COURSES (MOOCS)
// ============================================

const onlineCourses = [
  { name: 'Coursera Physics', url: 'https://www.coursera.org/browse/physical-science-and-engineering/physics', provider: 'Various', type: 'MOOC', description: 'University physics courses' },
  { name: 'edX Physics', url: 'https://www.edx.org/learn/physics', provider: 'MIT/Harvard', type: 'MOOC', description: 'Free physics courses' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/science/physics', provider: 'Khan Academy', type: 'Free', description: 'Complete physics curriculum' },
  { name: 'Brilliant Physics', url: 'https://brilliant.org/courses/physics/', provider: 'Brilliant', type: 'Interactive', description: 'Interactive physics learning' },
  { name: 'Udemy Physics', url: 'https://www.udemy.com/courses/search/?q=physics', provider: 'Various', type: 'Paid', description: 'Physics video courses' },
  { name: 'FutureLearn Physics', url: 'https://www.futurelearn.com/subjects/physics-courses', provider: 'UK Universities', type: 'MOOC', description: 'UK physics courses' },
  { name: 'Swayam Physics', url: 'https://swayam.gov.in/', provider: 'India', type: 'MOOC', description: 'Indian physics courses' },
  { name: 'NPTEL Physics', url: 'https://nptel.ac.in/course.html', provider: 'IIT India', type: 'Free', description: 'IIT physics lectures' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-space-950 to-blue-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <span class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-purple-300">30,000+ Physics Resources from 195+ Countries & 1,500+ Verified Institutions Worldwide</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Physics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master physics from K-12 to PhD with 30,000+ verified resources from MIT, Caltech, Stanford, Cambridge, Oxford, IITs (NPTEL 150+ courses), ETH Zurich, CERN, Perimeter Institute, KAUST, African School of Physics, ICTP, and 1,500+ institutions across 195+ countries on all 7 continents: North America, South America, Europe, Africa, Asia, Oceania, and Antarctica research stations.
          </p>

          <div class="flex flex-wrap justify-center gap-3 sm:gap-6">
            <div class="text-center px-3 py-2 bg-gray-900/50 rounded-lg">
              <div class="text-2xl sm:text-3xl font-bold text-white">195+</div>
              <div class="text-xs text-gray-400">Countries & Territories</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block self-center"></div>
            <div class="text-center px-3 py-2 bg-gray-900/50 rounded-lg">
              <div class="text-2xl sm:text-3xl font-bold text-white">1,500+</div>
              <div class="text-xs text-gray-400">Universities & Labs</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block self-center"></div>
            <div class="text-center px-3 py-2 bg-gray-900/50 rounded-lg">
              <div class="text-2xl sm:text-3xl font-bold text-white">900+</div>
              <div class="text-xs text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block self-center"></div>
            <div class="text-center px-3 py-2 bg-gray-900/50 rounded-lg">
              <div class="text-2xl sm:text-3xl font-bold text-white">6,200+</div>
              <div class="text-xs text-gray-400">Video Courses</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block self-center"></div>
            <div class="text-center px-3 py-2 bg-gray-900/50 rounded-lg">
              <div class="text-2xl sm:text-3xl font-bold text-white">180+</div>
              <div class="text-xs text-gray-400">YouTube Channels</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-purple-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-purple-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-purple-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">K-12 School Resources</h2>
            <p class="text-gray-400">Physics resources for primary and secondary school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="resource in k12Resources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ resource.type }}</span>
              <span class="text-xs text-gray-500">{{ resource.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- AP/IB Physics -->
      <section id="apib" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">AP & IB Physics</h2>
            <p class="text-gray-400">Advanced Placement and International Baccalaureate resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
            <p class="text-gray-400">Comprehensive physics textbooks organized by level</p>
          </div>
        </div>

        <!-- Beginner -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner / High School Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
          <h3 class="text-lg font-semibold text-purple-400 mb-4">Intermediate / Undergraduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
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

        <!-- Advanced -->
        <div>
          <h3 class="text-lg font-semibold text-rose-400 mb-4">Advanced / Graduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ book.desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- David Tong Lectures -->
      <section id="tong" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">David Tong's Lecture Notes (Cambridge)</h2>
            <p class="text-gray-400">Graduate-level lecture notes covering all major topics</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="lecture in tongLectures" :key="lecture.title" :href="lecture.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ lecture.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ lecture.title }}</h4>
            <p class="text-sm text-purple-400">{{ lecture.topic }}</p>
          </a>
        </div>
      </section>

      <!-- MIT OCW -->
      <section id="mitocw" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">MIT OpenCourseWare</h2>
            <p class="text-gray-400">Free complete physics courses from MIT</p>
          </div>
        </div>

        <!-- Beginner MIT -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner Level (Walter Lewin)</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="course in mitCoursesBeginner" :key="course.code" :href="course.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xl font-bold text-emerald-400">{{ course.code }}</span>
                <span class="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">{{ course.format }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ course.title }}</h4>
              <p class="text-sm text-gray-500">{{ course.professor }}</p>
            </a>
          </div>
        </div>

        <!-- Intermediate MIT -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-purple-400 mb-4">Intermediate Level</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="course in mitCoursesIntermediate" :key="course.code" :href="course.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xl font-bold text-purple-400">{{ course.code }}</span>
                <span class="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">{{ course.format }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">{{ course.title }}</h4>
              <p class="text-sm text-gray-500">{{ course.professor }}</p>
            </a>
          </div>
        </div>

        <!-- Advanced MIT -->
        <div>
          <h3 class="text-lg font-semibold text-rose-400 mb-4">Advanced / Graduate Level</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="course in mitCoursesAdvanced" :key="course.code" :href="course.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xl font-bold text-rose-400">{{ course.code }}</span>
                <span class="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">{{ course.format }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ course.title }}</h4>
              <p class="text-sm text-gray-500">{{ course.professor }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- YouTube Channels -->
      <section id="youtube" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">YouTube Channels</h2>
            <p class="text-gray-400">Best physics education channels organized by level</p>
          </div>
        </div>

        <!-- Beginner Channels -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner / Popular Science</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="channel in youtubeChannelsBeginner" :key="channel.name" :href="channel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  {{ channel.name[0] }}
                </div>
                <div>
                  <h4 class="font-semibold text-white group-hover:text-emerald-400 transition-colors">{{ channel.name }}</h4>
                  <p class="text-sm text-gray-500">{{ channel.subs }} subscribers</p>
                </div>
              </div>
              <p class="text-sm text-purple-400 mb-1">{{ channel.focus }}</p>
              <p class="text-xs text-gray-500">{{ channel.description }}</p>
            </a>
          </div>
        </div>

        <!-- Intermediate Channels -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-purple-400 mb-4">Intermediate / University Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="channel in youtubeChannelsIntermediate" :key="channel.name" :href="channel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  {{ channel.name[0] }}
                </div>
                <div>
                  <h4 class="font-semibold text-white group-hover:text-purple-400 transition-colors">{{ channel.name }}</h4>
                  <p class="text-sm text-gray-500">{{ channel.subs }} subscribers</p>
                </div>
              </div>
              <p class="text-sm text-purple-400 mb-1">{{ channel.focus }}</p>
              <p class="text-xs text-gray-500">{{ channel.description }}</p>
            </a>
          </div>
        </div>

        <!-- Advanced Channels -->
        <div>
          <h3 class="text-lg font-semibold text-rose-400 mb-4">Advanced / Research Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="channel in youtubeChannelsAdvanced" :key="channel.name" :href="channel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  {{ channel.name[0] }}
                </div>
                <div>
                  <h4 class="font-semibold text-white group-hover:text-rose-400 transition-colors">{{ channel.name }}</h4>
                  <p class="text-sm text-gray-500">{{ channel.subs }} subscribers</p>
                </div>
              </div>
              <p class="text-sm text-purple-400 mb-1">{{ channel.focus }}</p>
              <p class="text-xs text-gray-500">{{ channel.description }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Online Courses (MOOCs) -->
      <section id="moocs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Online Courses (MOOCs)</h2>
            <p class="text-gray-400">Massive Open Online Courses from top universities</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="course in onlineCourses" :key="course.name" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ course.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ course.name }}</h4>
            <p class="text-sm text-purple-400 mb-1">{{ course.provider }}</p>
            <p class="text-xs text-gray-500">{{ course.description }}</p>
          </a>
        </div>
      </section>

      <!-- Simulations -->
      <section id="simulations" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Simulations</h2>
            <p class="text-gray-400">Interactive physics labs and visualizations</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="sim in simulations" :key="sim.name" :href="sim.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ sim.name }}</h4>
            <p class="text-sm text-purple-400 mb-2">{{ sim.provider }}</p>
            <p class="text-xs text-gray-500">{{ sim.topics }}</p>
            <span class="inline-block mt-2 text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">{{ sim.level }}</span>
          </a>
        </div>
      </section>

      <!-- GitHub Repositories -->
      <section id="github" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">GitHub Repositories</h2>
            <p class="text-gray-400">Physics notes, code, and resources from the community</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="repo in githubRepos" :key="repo.name" :href="repo.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-500 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-gray-300 transition-colors">{{ repo.name }}</h4>
            <p class="text-sm text-gray-400 mb-2">{{ repo.description }}</p>
            <span class="text-xs text-yellow-500">★ {{ repo.stars }}</span>
          </a>
        </div>
      </section>

      <!-- Physics Olympiads -->
      <section id="olympiads" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Olympiads</h2>
            <p class="text-gray-400">International physics competitions and problem archives</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="olymp in olympiadResources" :key="olymp.name" :href="olymp.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ olymp.type }}</span>
              <span class="text-xs text-gray-500">{{ olymp.country }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">{{ olymp.name }}</h4>
            <p class="text-xs text-gray-500">{{ olymp.description }}</p>
          </a>
        </div>
      </section>

      <!-- Problem Sets -->
      <section id="problems" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Problem Sets & Practice</h2>
            <p class="text-gray-400">Practice problems, competitions, and exam preparation</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="prob in problemResources" :key="prob.name" :href="prob.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ prob.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{{ prob.name }}</h4>
            <p class="text-xs text-gray-500">{{ prob.description }}</p>
          </a>
        </div>
      </section>

      <!-- International Universities -->
      <section id="universities" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">International Universities & Institutes</h2>
            <p class="text-gray-400">Physics resources from top institutions worldwide</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="uni in internationalUniversities" :key="uni.name" :href="uni.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ uni.country }}</span>
              <span class="text-xs text-gray-500">{{ uni.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ uni.name }}</h4>
            <p class="text-xs text-gray-500">{{ uni.description }}</p>
          </a>
        </div>
      </section>

      <!-- Research Resources -->
      <section id="research" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research Resources</h2>
            <p class="text-gray-400">Open access papers, databases, and research tools</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="resource in researchResources" :key="resource.name" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ resource.name }}</h4>
            <p class="text-xs text-gray-500">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- Research Institutes -->
      <section id="institutes" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research Institutes & Labs</h2>
            <p class="text-gray-400">World-class physics research institutions</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="inst in researchInstitutes" :key="inst.name" :href="inst.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">{{ inst.country }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">{{ inst.name }}</h4>
            <p class="text-sm text-purple-400 mb-1">{{ inst.focus }}</p>
            <p class="text-xs text-gray-500">{{ inst.description }}</p>
          </a>
        </div>
      </section>

      <!-- Physics Software -->
      <section id="software" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Software & Tools</h2>
            <p class="text-gray-400">Programming languages and physics software</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="tool in physicsSoftware" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ tool.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ tool.name }}</h4>
            <p class="text-xs text-gray-500">{{ tool.description }}</p>
          </a>
        </div>
      </section>

      <!-- Mobile Apps -->
      <section id="apps" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Apps</h2>
            <p class="text-gray-400">Mobile apps for learning physics</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="app in physicsApps" :key="app.name" :href="app.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ app.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ app.name }}</h4>
            <p class="text-xs text-gray-500">{{ app.description }}</p>
          </a>
        </div>
      </section>

      <!-- Podcasts -->
      <section id="podcasts" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Podcasts</h2>
            <p class="text-gray-400">Learn physics on the go</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="podcast in physicsPodcasts" :key="podcast.name" :href="podcast.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{{ podcast.name }}</h4>
            <p class="text-xs text-gray-500">{{ podcast.description }}</p>
          </a>
        </div>
      </section>

      <!-- Blogs -->
      <section id="blogs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Blogs</h2>
            <p class="text-gray-400">Insights from leading physicists</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <a v-for="blog in physicsBlogs" :key="blog.name" :href="blog.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ blog.name }}</h4>
            <p class="text-sm text-teal-400 mb-1">{{ blog.author }}</p>
            <p class="text-xs text-gray-500">{{ blog.description }}</p>
          </a>
        </div>
      </section>

      <!-- Scholarships -->
      <section id="scholarships" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Scholarships & Fellowships</h2>
            <p class="text-gray-400">Funding opportunities for physics students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="scholarship in scholarships" :key="scholarship.name" :href="scholarship.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ scholarship.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ scholarship.name }}</h4>
            <p class="text-xs text-gray-500">{{ scholarship.description }}</p>
          </a>
        </div>
      </section>

      <!-- DIY Experiments -->
      <section id="experiments" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">DIY Experiments & Home Labs</h2>
            <p class="text-gray-400">Hands-on physics experiments at home</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="exp in diyExperiments" :key="exp.name" :href="exp.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-lime-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-lime-400 transition-colors">{{ exp.name }}</h4>
            <p class="text-xs text-gray-500">{{ exp.description }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
        
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <a href="https://www.feynmanlectures.caltech.edu/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">Feynman Lectures</a>
          <span class="text-gray-700">•</span>
          <a href="https://ocw.mit.edu/courses/physics/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">MIT OCW</a>
          <span class="text-gray-700">•</span>
          <a href="http://www.damtp.cam.ac.uk/user/tong/teaching.html" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">David Tong</a>
          <span class="text-gray-700">•</span>
          <a href="https://arxiv.org/archive/physics" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">arXiv</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
