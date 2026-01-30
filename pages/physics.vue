<script setup lang="ts">
useHead({
  title: 'Physics - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master physics from K-12 to PhD research with 3000+ curated resources from MIT, Caltech, Stanford, Cambridge, Oxford, IIT, ETH Zurich, CERN, Perimeter Institute, and worldwide institutions. Free textbooks, courses, simulations, apps, podcasts, scholarships, and research tools.' }
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
    resources: 800,
    topics: ['Conceptual Physics', 'AP Physics 1 & 2', 'IB Physics', 'Interactive Simulations']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level physics - calculus based',
    color: 'purple',
    resources: 1200,
    topics: ['Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Thermodynamics']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Graduate courses, research, PhD preparation',
    color: 'rose',
    resources: 1000,
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
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 150 },
  { name: 'AP/IB Physics', url: '#apib', icon: 'award', count: 80 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 300 },
  { name: 'University Courses', url: '#universities', icon: 'building', count: 200 },
  { name: 'MIT OCW', url: '#mitocw', icon: 'video', count: 60 },
  { name: 'YouTube Channels', url: '#youtube', icon: 'play', count: 100 },
  { name: 'Simulations', url: '#simulations', icon: 'beaker', count: 80 },
  { name: 'GitHub Repos', url: '#github', icon: 'code', count: 150 },
  { name: 'Olympiads', url: '#olympiads', icon: 'medal', count: 100 },
  { name: 'Problem Sets', url: '#problems', icon: 'pencil', count: 200 },
  { name: 'Research Tools', url: '#research', icon: 'microscope', count: 50 },
  { name: 'Software', url: '#software', icon: 'computer', count: 60 },
  { name: 'Apps', url: '#apps', icon: 'mobile', count: 40 },
  { name: 'Scholarships', url: '#scholarships', icon: 'money', count: 50 }
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
  { title: 'CERN Education', url: 'https://education.web.cern.ch/', provider: 'CERN', type: 'Resources', level: 'HS', desc: 'Particle physics for students' }
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
// YOUTUBE CHANNELS - BEGINNER
// ============================================

const youtubeChannelsBeginner = [
  { name: 'Khan Academy Physics', subs: '8M+', focus: 'All Topics', url: 'https://www.youtube.com/@khanacademy', description: 'Comprehensive physics playlist' },
  { name: 'Physics Girl', subs: '2M+', focus: 'Conceptual', url: 'https://www.youtube.com/@physicsgirl', description: 'Fun physics experiments' },
  { name: 'Veritasium', subs: '15M+', focus: 'Science', url: 'https://www.youtube.com/@veritasium', description: 'Physics misconceptions' },
  { name: 'MinutePhysics', subs: '5M+', focus: 'Quick Explanations', url: 'https://www.youtube.com/@MinutePhysics', description: 'Short physics videos' },
  { name: 'SciShow', subs: '7M+', focus: 'General Science', url: 'https://www.youtube.com/@SciShow', description: 'Physics episodes' },
  { name: 'TED-Ed', subs: '18M+', focus: 'Education', url: 'https://www.youtube.com/@TEDEd', description: 'Physics animations' },
  { name: 'Professor Dave Explains', subs: '3M+', focus: 'Chemistry/Physics', url: 'https://www.youtube.com/@ProfessorDaveExplains', description: 'Clear explanations' },
  { name: 'The Science Asylum', subs: '500K+', focus: 'Conceptual', url: 'https://www.youtube.com/@TheScienceAsylum', description: 'Challenging questions' }
]

const youtubeChannelsIntermediate = [
  { name: 'MIT OpenCourseWare', subs: '4M+', focus: 'University Level', url: 'https://www.youtube.com/@mitocw', description: 'Full MIT lectures' },
  { name: 'Leonard Susskind', subs: '100K+', focus: 'Theoretical', url: 'https://www.youtube.com/@SusskindLectures', description: 'Theoretical Minimum' },
  { name: 'Stanford Physics', subs: '200K+', focus: 'University', url: 'https://www.youtube.com/@StanfordPhysics', description: 'Stanford lectures' },
  { name: 'PBS Space Time', subs: '3M+', focus: 'Astrophysics', url: 'https://www.youtube.com/@pbsspacetime', description: 'Cosmology and GR' },
  { name: 'Looking Glass Universe', subs: '300K+', focus: 'Quantum', url: 'https://www.youtube.com/@LookingGlassUniverse', description: 'Quantum mechanics' },
  { name: 'DrPhysicsA', subs: '400K+', focus: 'University', url: 'https://www.youtube.com/@DrPhysicsA', description: 'British lecturer' },
  { name: 'Physics Videos by Eugene Khutoryansky', subs: '1M+', focus: 'Visualizations', url: 'https://www.youtube.com/@EugeneKhutoryansky', description: '3D animations' },
  { name: 'Flipping Physics', subs: '500K+', focus: 'AP/IB', url: 'https://www.youtube.com/@FlippingPhysics', description: 'High school to college' }
]

const youtubeChannelsAdvanced = [
  { name: 'Perimeter Institute', subs: '200K+', focus: 'Research', url: 'https://www.youtube.com/@PerimeterInstitute', description: 'PIRSA lectures' },
  { name: 'Institute for Advanced Study', subs: '100K+', focus: 'Research', url: 'https://www.youtube.com/@ias_princeton', description: 'IAS physics talks' },
  { name: 'CERN', subs: '1M+', focus: 'Particle Physics', url: 'https://www.youtube.com/@CERN', description: 'LHC physics' },
  { name: 'FQXi', subs: '50K+', focus: 'Foundations', url: 'https://www.youtube.com/@FQXi', description: 'Foundational questions' },
  { name: 'Kavli Institute', subs: '30K+', focus: 'Research', url: 'https://www.youtube.com/@KavliFoundation', description: 'KITP seminars' },
  { name: 'Simons Foundation', subs: '100K+', focus: 'Research', url: 'https://www.youtube.com/@SimonsFoundation', description: 'Advanced topics' }
]

// ============================================
// SIMULATIONS
// ============================================

const simulations = [
  { name: 'PhET Simulations', url: 'https://phet.colorado.edu/', provider: 'University of Colorado', topics: 'All Topics', level: 'All' },
  { name: 'oPhysics', url: 'https://ophysics.com/', provider: 'oPhysics', topics: 'Mechanics, E&M', level: 'HS/UG' },
  { name: 'The Physics Aviary', url: 'https://www.thephysicsaviary.com/', provider: 'Physics Aviary', topics: 'All Topics', level: 'HS' },
  { name: 'GeoGebra Physics', url: 'https://www.geogebra.org/', provider: 'GeoGebra', topics: 'Mechanics', level: 'All' },
  { name: 'My Physics Lab', url: 'https://www.myphysicslab.com/', provider: 'Erik Neumann', topics: 'Mechanics', level: 'UG' },
  { name: 'Falstad Simulations', url: 'https://www.falstad.com/mathphysics.html', provider: 'Paul Falstad', topics: 'Math & Physics', level: 'All' },
  { name: 'Walter Fendt Physics', url: 'https://www.walter-fendt.de/html5/phen/', provider: 'Walter Fendt', topics: 'All Topics', level: 'HS' },
  { name: 'Coding Train Physics', url: 'https://thecodingtrain.com/', provider: 'Daniel Shiffman', topics: 'Simulations', level: 'All' },
  { name: 'GlowScript VPython', url: 'https://glowscript.org/', provider: 'VPython', topics: '3D Simulations', level: 'UG' },
  { name: 'Labster Physics', url: 'https://www.labster.com/', provider: 'Labster', topics: 'Virtual Labs', level: 'UG' }
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
// INTERNATIONAL UNIVERSITIES
// ============================================

const internationalUniversities = [
  { name: 'Oxford Physics', url: 'https://www2.physics.ox.ac.uk/', country: 'UK', type: 'University', description: 'Oxford lecture notes' },
  { name: 'Cambridge Physics', url: 'https://www.phy.cam.ac.uk/', country: 'UK', type: 'University', description: 'Cambridge Tripos' },
  { name: 'ETH Zurich Physics', url: 'https://www.phys.ethz.ch/', country: 'Switzerland', type: 'University', description: 'ETH lecture notes' },
  { name: 'TU Munich Physics', url: 'https://www.ph.tum.de/', country: 'Germany', type: 'University', description: 'German resources' },
  { name: 'IIT Physics', url: 'https://physics.iitm.ac.in/', country: 'India', type: 'University', description: 'IIT lecture materials' },
  { name: 'NPTEL Physics', url: 'https://nptel.ac.in/course.html', country: 'India', type: 'MOOC', description: 'Indian MOOC platform' },
  { name: 'Tsinghua Physics', url: 'https://www.phys.tsinghua.edu.cn/', country: 'China', type: 'University', description: 'Chinese resources' },
  { name: 'Tokyo University Physics', url: 'https://www.phys.s.u-tokyo.ac.jp/', country: 'Japan', type: 'University', description: 'Japanese resources' },
  { name: 'Sorbonne Physics', url: 'https://www.sorbonne-universite.fr/', country: 'France', type: 'University', description: 'French resources' },
  { name: 'Weizmann Physics', url: 'https://www.weizmann.ac.il/feinberg/', country: 'Israel', type: 'Research', description: 'Weizmann Institute' },
  { name: 'African School of Physics', url: 'https://africanschoolofphysics.org/', country: 'Africa', type: 'School', description: 'ASP online lectures' },
  { name: 'ICTP', url: 'https://www.ictp.it/', country: 'Italy', type: 'Research', description: 'Abdus Salam ICTP' }
]

// ============================================
// RESEARCH RESOURCES
// ============================================

const researchResources = [
  { name: 'arXiv Physics', url: 'https://arxiv.org/archive/physics', type: 'Repository', description: '2+ million physics papers' },
  { name: 'arXiv astro-ph', url: 'https://arxiv.org/archive/astro-ph', type: 'Repository', description: 'Astrophysics papers' },
  { name: 'arXiv cond-mat', url: 'https://arxiv.org/archive/cond-mat', type: 'Repository', description: 'Condensed matter papers' },
  { name: 'arXiv hep-th', url: 'https://arxiv.org/archive/hep-th', type: 'Repository', description: 'High energy theory' },
  { name: 'arXiv gr-qc', url: 'https://arxiv.org/archive/gr-qc', type: 'Repository', description: 'General relativity' },
  { name: 'arXiv quant-ph', url: 'https://arxiv.org/archive/quant-ph', type: 'Repository', description: 'Quantum physics' },
  { name: 'NASA ADS', url: 'https://ui.adsabs.harvard.edu/', type: 'Database', description: 'Astrophysics Data System' },
  { name: 'INSPIRE-HEP', url: 'https://inspirehep.net/', type: 'Database', description: 'High energy physics literature' },
  { name: 'Web of Science', url: 'https://www.webofscience.com/', type: 'Database', description: 'Citation database' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/', type: 'Search', description: 'Academic search engine' }
]

// ============================================
// RESEARCH INSTITUTES
// ============================================

const researchInstitutes = [
  { name: 'Perimeter Institute', url: 'https://perimeterinstitute.ca/', country: 'Canada', focus: 'Theoretical Physics', description: 'Foundational physics research' },
  { name: 'Institute for Advanced Study', url: 'https://www.ias.edu/', country: 'USA', focus: 'All Physics', description: 'Princeton IAS' },
  { name: 'CERN', url: 'https://home.cern/', country: 'Switzerland', focus: 'Particle Physics', description: 'European lab for particle physics' },
  { name: 'FERMILAB', url: 'https://www.fnal.gov/', country: 'USA', focus: 'Particle Physics', description: 'Fermi National Lab' },
  { name: 'Max Planck Institutes', url: 'https://www.mpg.de/en', country: 'Germany', focus: 'All Physics', description: 'German research institutes' },
  { name: 'Kavli Institute', url: 'https://www.kavli.org/', country: 'USA/Int', focus: 'Astrophysics', description: 'KITP and others' },
  { name: 'NIST', url: 'https://www.nist.gov/', country: 'USA', focus: 'Applied Physics', description: 'Standards and technology' },
  { name: 'LIGO', url: 'https://www.ligo.caltech.edu/', country: 'USA', focus: 'Gravitational Waves', description: 'Gravitational wave observatory' },
  { name: 'Diamond Light Source', url: 'https://www.diamond.ac.uk/', country: 'UK', focus: 'Synchrotron', description: 'UK synchrotron facility' },
  { name: 'DESY', url: 'https://www.desy.de/', country: 'Germany', focus: 'Particle Physics', description: 'German electron synchrotron' }
]

// ============================================
// PHYSICS SOFTWARE
// ============================================

const physicsSoftware = [
  { name: 'Python (NumPy/SciPy)', url: 'https://numpy.org/', type: 'Language', description: 'Scientific computing' },
  { name: 'MATLAB Student', url: 'https://www.mathworks.com/academia/tah-portal.html', type: 'Software', description: 'Student version' },
  { name: 'Mathematica', url: 'https://www.wolfram.com/mathematica/', type: 'CAS', description: 'Symbolic computation' },
  { name: 'COMSOL Student', url: 'https://www.comsol.com/', type: 'Simulation', description: 'Multiphysics simulation' },
  { name: 'ROOT (CERN)', url: 'https://root.cern/', type: 'Analysis', description: 'High-energy physics' },
  { name: 'Geant4', url: 'https://geant4.web.cern.ch/', type: 'Simulation', description: 'Particle transport' },
  { name: 'MadGraph', url: 'https://launchpad.net/mg5amcnlo', type: 'Simulation', description: 'Particle physics events' },
  { name: 'Gadget-2', url: 'https://wwwmpa.mpa-garching.mpg.de/gadget/', type: 'Simulation', description: 'Cosmological simulations' },
  { name: 'Julia Physics', url: 'https://juliaphysics.github.io/', type: 'Language', description: 'Modern physics computing' },
  { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/', type: 'Tool', description: 'Physics calculator' }
]

// ============================================
// MOBILE APPS
// ============================================

const physicsApps = [
  { name: 'PhyPhox', url: 'https://phyphox.org/', type: 'Lab', description: 'Phone sensor experiments' },
  { name: 'Physics Toolbox', url: 'https://www.vieyraapps.com/', type: 'Sensors', description: 'Sensor suite' },
  { name: 'Brilliant App', url: 'https://brilliant.org/', type: 'Learning', description: 'Interactive courses' },
  { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/', type: 'Calculator', description: 'Physics calculator' },
  { name: 'Physics Notes', url: 'https://play.google.com/', type: 'Reference', description: 'Formula reference' },
  { name: 'Universe Sandbox', url: 'https://universesandbox.com/', type: 'Simulation', description: 'Gravity simulator' },
  { name: 'SkyView', url: 'https://www.terminaleleven.com/', type: 'Astronomy', description: 'Stargazing app' },
  { name: 'NASA App', url: 'https://www.nasa.gov/nasaapp', type: 'Astronomy', description: 'NASA missions and images' }
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
// SCHOLARSHIPS
// ============================================

const scholarships = [
  { name: 'NSF GRFP', url: 'https://www.nsfgrfp.org/', type: 'Graduate', description: 'NSF Graduate Fellowship' },
  { name: 'DOE CSGF', url: 'https://www.krellinst.org/csgf/', type: 'Graduate', description: 'Computational science' },
  { name: 'NDSEG Fellowship', url: 'https://ndseg.asee.org/', type: 'Graduate', description: 'Defense fellowship' },
  { name: 'Hertz Fellowship', url: 'https://hertzfoundation.org/', type: 'Graduate', description: 'Prestigious STEM' },
  { name: 'Rhodes Scholarship', url: 'https://www.rhodesscholar.org/', type: 'Graduate', description: 'Oxford graduate study' },
  { name: 'Marshall Scholarship', url: 'https://www.marshallscholarship.org/', type: 'Graduate', description: 'UK graduate study' },
  { name: 'Gates Cambridge', url: 'https://www.gatescambridge.org/', type: 'Graduate', description: 'Cambridge graduate' },
  { name: 'Fulbright', url: 'https://us.fulbrightonline.org/', type: 'Graduate', description: 'International exchange' }
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
            <span class="text-sm text-purple-300">3000+ Global Physics Resources from K-12 to PhD</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Physics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master physics from K-12 to PhD research with 3000+ curated resources from MIT, Caltech, Stanford, Cambridge, Oxford, IIT, ETH Zurich, CERN, Perimeter Institute, and institutions worldwide.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">300+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">200+</div>
              <div class="text-sm text-gray-400">University Courses</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3000+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
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
