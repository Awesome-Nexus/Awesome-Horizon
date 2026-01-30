<script setup lang="ts">
useHead({
  title: 'Physics - Complete Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master physics from beginner to research level with 1000+ curated resources from MIT, Caltech, Stanford, Cambridge, and worldwide. Free textbooks, courses, simulations, apps, podcasts, scholarships, and more.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'No Calculus Required',
    description: 'High school, AP Physics, conceptual understanding',
    color: 'emerald',
    resources: 500,
    topics: ['Conceptual Physics', 'AP Physics 1 & 2', 'Algebra-based Mechanics', 'Interactive Simulations']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Calculus Required',
    description: 'Undergraduate university level physics',
    color: 'purple',
    resources: 600,
    topics: ['Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Thermodynamics']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate Level',
    description: 'Graduate courses and research preparation',
    color: 'rose',
    resources: 400,
    topics: ['QFT', 'General Relativity', 'Advanced QM', 'Particle Physics']
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
    title: 'Motion Mountain',
    author: 'Christoph Schiller',
    type: 'Free PDF Textbook',
    url: 'https://www.motionmountain.net/',
    icon: 'mountain',
    description: 'Comprehensive 5-volume physics textbook series, all free',
    level: 'All Levels'
  },
  {
    title: 'Light and Matter',
    author: 'Ben Crowell',
    type: 'Free Textbooks',
    url: 'https://www.lightandmatter.com/',
    icon: 'lightbulb',
    description: 'Free physics textbooks from conceptual to calculus',
    level: 'Beginner-Interm'
  },
  {
    title: 'David Tong Lectures',
    author: 'David Tong (Cambridge)',
    type: 'Free PDF Notes',
    url: 'http://www.damtp.cam.ac.uk/user/tong/teaching.html',
    icon: 'document',
    description: 'Graduate-level lecture notes on all major topics',
    level: 'Advanced'
  }
]

const quickLinks = [
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 200 },
  { name: 'MIT OCW', url: '#mitocw', icon: 'video', count: 50 },
  { name: 'MOOCs', url: '#moocs', icon: 'graduation', count: 150 },
  { name: 'YouTube', url: '#youtube', icon: 'play', count: 100 },
  { name: 'Simulations', url: '#simulations', icon: 'flask', count: 50 },
  { name: 'GitHub Repos', url: '#github', icon: 'code', count: 200 },
  { name: 'Problem Sets', url: '#problems', icon: 'pencil', count: 200 },
  { name: 'Universities', url: '#universities', icon: 'building', count: 100 },
  { name: 'Software', url: '#software', icon: 'cog', count: 150 },
  { name: 'Mobile Apps', url: '#apps', icon: 'phone', count: 50 },
  { name: 'Podcasts', url: '#podcasts', icon: 'mic', count: 30 },
  { name: 'Blogs', url: '#blogs', icon: 'edit', count: 30 },
  { name: 'Experiments', url: '#experiments', icon: 'flask', count: 100 },
  { name: 'Scholarships', url: '#scholarships', icon: 'award', count: 50 }
]

// ============================================
// FREE TEXTBOOKS - BEGINNER LEVEL
// ============================================
const freeTextbooksBeginner = [
  { title: 'College Physics 2e', author: 'OpenStax', level: 'AP/College', type: 'FREE PDF', url: 'https://openstax.org/details/books/college-physics-2e', topic: 'Comprehensive' },
  { title: 'Physics (High School)', author: 'OpenStax', level: 'High School', type: 'FREE PDF', url: 'https://openstax.org/details/books/physics', topic: 'General' },
  { title: 'Light and Matter', author: 'Ben Crowell', level: 'Intro College', type: 'FREE PDF', url: 'https://www.lightandmatter.com/lm/', topic: 'Comprehensive' },
  { title: 'Conceptual Physics', author: 'Ben Crowell', level: 'High School', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Conceptual' },
  { title: 'Discover Physics', author: 'Ben Crowell', level: 'Beginner', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Everyday' },
  { title: 'Motion Mountain Vol I', author: 'Christoph Schiller', level: 'Beginner-Interm', type: 'FREE PDF', url: 'https://www.motionmountain.net/', topic: 'Mechanics' },
  { title: 'Six Easy Pieces', author: 'Richard Feynman', level: 'General', type: 'Book', url: 'https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained/dp/0465025277', topic: 'Conceptual' },
  { title: 'Relativity for Poets', author: 'Ben Crowell', level: 'Beginner', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Relativity' },
  { title: 'College Physics (LibreTexts)', author: 'Multiple', level: 'AP/College', type: 'FREE', url: 'https://phys.libretexts.org/Bookshelves/College_Physics', topic: 'Comprehensive' },
  { title: 'Physics for the 21st Century', author: 'Annenberg Learner', level: 'Beginner', type: 'FREE Course', url: 'https://www.learner.org/courses/physics/', topic: 'Modern Physics' }
]

// ============================================
// FREE TEXTBOOKS - INTERMEDIATE LEVEL
// ============================================
const freeTextbooksIntermediate = [
  { title: 'University Physics', author: 'OpenStax', level: 'Undergrad', type: 'FREE PDF', url: 'https://openstax.org/', topic: 'Calculus-based' },
  { title: 'Simple Nature', author: 'Ben Crowell', level: 'Undergrad', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'STEM Major' },
  { title: 'Mechanics', author: 'Ben Crowell', level: 'Undergrad', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Mechanics' },
  { title: 'Motion Mountain Vol II', author: 'Christoph Schiller', level: 'Interm', type: 'FREE PDF', url: 'https://www.motionmountain.net/', topic: 'Relativity' },
  { title: 'Motion Mountain Vol III', author: 'Christoph Schiller', level: 'Interm', type: 'FREE PDF', url: 'https://www.motionmountain.net/', topic: 'E&M & Optics' },
  { title: 'Special Relativity', author: 'Ben Crowell', level: 'Interm', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Relativity' },
  { title: 'General Relativity', author: 'Ben Crowell', level: 'Interm', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'GR Intro' },
  { title: 'Problems in Intro Physics', author: 'Ben Crowell', level: 'Interm', type: 'FREE PDF', url: 'https://www.lightandmatter.com/books.html', topic: 'Problems' },
  { title: 'University Physics (LibreTexts)', author: 'Multiple', level: 'Undergrad', type: 'FREE', url: 'https://phys.libretexts.org/Bookshelves/University_Physics', topic: 'Calculus-based' },
  { title: 'The Feynman Lectures', author: 'Feynman/Leighton/Sands', level: 'Interm-Adv', type: 'FREE Online', url: 'https://www.feynmanlectures.caltech.edu/', topic: 'Comprehensive' }
]

// ============================================
// FREE TEXTBOOKS - ADVANCED LEVEL
// ============================================
const freeTextbooksAdvanced = [
  { title: 'Motion Mountain Vol IV', author: 'Christoph Schiller', level: 'Advanced', type: 'FREE PDF', url: 'https://www.motionmountain.net/', topic: 'Quantum Physics' },
  { title: 'Motion Mountain Vol V', author: 'Christoph Schiller', level: 'Advanced', type: 'FREE PDF', url: 'https://www.motionmountain.net/', topic: 'Nuclear & Biophysics' },
  { title: 'Essential Grad Physics - Mechanics', author: 'K. Likharev', level: 'Graduate', type: 'FREE PDF', url: 'https://commons.library.stonybrook.edu/egp/', topic: 'Mechanics' },
  { title: 'Essential Grad Physics - E&M', author: 'K. Likharev', level: 'Graduate', type: 'FREE PDF', url: 'https://commons.library.stonybrook.edu/egp/', topic: 'Electrodynamics' },
  { title: 'Essential Grad Physics - QM', author: 'K. Likharev', level: 'Graduate', type: 'FREE PDF', url: 'https://commons.library.stonybrook.edu/egp/', topic: 'Quantum Mechanics' },
  { title: 'Essential Grad Physics - Stat Mech', author: 'K. Likharev', level: 'Graduate', type: 'FREE PDF', url: 'https://commons.library.stonybrook.edu/egp/', topic: 'Statistical Mechanics' },
  { title: 'Landau & Lifshitz Course', author: 'Landau/Lifshitz', level: 'Graduate', type: 'Archive.org', url: 'https://archive.org/search?query=landau+lifshitz', topic: 'Theoretical Physics' }
]

// ============================================
// DAVID TONG CAMBRIDGE LECTURE NOTES
// ============================================
const tongLectures = [
  { title: 'Dynamics and Relativity', url: 'http://www.damtp.cam.ac.uk/user/tong/relativity.html', topic: 'Mechanics & SR', level: 'Interm' },
  { title: 'Classical Dynamics', url: 'http://www.damtp.cam.ac.uk/user/tong/dynamics.html', topic: 'Lagrangian/Hamiltonian', level: 'Interm' },
  { title: 'Electromagnetism', url: 'http://www.damtp.cam.ac.uk/user/tong/em.html', topic: 'E&M', level: 'Interm' },
  { title: 'Quantum Mechanics', url: 'http://www.damtp.cam.ac.uk/user/tong/quantum.html', topic: 'QM', level: 'Interm' },
  { title: 'Solid State Physics', url: 'http://www.damtp.cam.ac.uk/user/tong/solidstate.html', topic: 'Condensed Matter', level: 'Interm' },
  { title: 'Statistical Physics', url: 'http://www.damtp.cam.ac.uk/user/tong/statphys.html', topic: 'Stat Mech', level: 'Interm' },
  { title: 'Fluid Mechanics', url: 'http://www.damtp.cam.ac.uk/user/tong/fluid.html', topic: 'Fluids', level: 'Interm' },
  { title: 'Cosmology', url: 'http://www.damtp.cam.ac.uk/user/tong/cosmo.html', topic: 'Cosmology', level: 'Interm' },
  { title: 'General Relativity', url: 'http://www.damtp.cam.ac.uk/user/tong/gr.html', topic: 'GR', level: 'Grad' },
  { title: 'Quantum Field Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/qft.html', topic: 'QFT', level: 'Grad' },
  { title: 'Statistical Field Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/sft.html', topic: 'SFT', level: 'Grad' },
  { title: 'The Standard Model', url: 'http://www.damtp.cam.ac.uk/user/tong/sm.html', topic: 'Particle Physics', level: 'Grad' },
  { title: 'String Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/string.html', topic: 'Strings', level: 'Grad' },
  { title: 'Kinetic Theory', url: 'http://www.damtp.cam.ac.uk/user/tong/kinetic.html', topic: 'Kinetics', level: 'Grad' }
]

// ============================================
// MIT OCW COURSES - BEGINNER
// ============================================
const mitCoursesBeginner = [
  { code: '8.01', title: 'Physics I: Classical Mechanics', professor: 'Walter Lewin', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/', level: 'Beginner', format: 'Video' },
  { code: '8.02', title: 'Physics II: E&M', professor: 'Walter Lewin', url: 'https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2005/', level: 'Beginner', format: 'Video' },
  { code: '8.03', title: 'Physics III: Vibrations & Waves', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/', level: 'Beginner', format: 'Video' },
  { code: '8.20', title: 'Introduction to Special Relativity', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-20-special-relativity-fall-2022/', level: 'Beginner', format: 'Lecture Notes' },
  { code: '8.01L', title: 'Physics I (TEAL)', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-01l-physics-i-classical-mechanics-fall-2005/', level: 'Beginner', format: 'Studio' },
  { code: '8.02X', title: 'Physics II: Electricity & Magnetism', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-02x-physics-ii-electricity-magnetism-spring-2005/', level: 'Beginner', format: 'Video' }
]

// ============================================
// MIT OCW COURSES - INTERMEDIATE
// ============================================
const mitCoursesIntermediate = [
  { code: '8.04', title: 'Quantum Physics I', professor: 'Allan Adams', url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/', level: 'Intermediate', format: 'Video' },
  { code: '8.05', title: 'Quantum Physics II', professor: 'Barton Zwiebach', url: 'https://ocw.mit.edu/courses/8-05-quantum-mechanics-ii-fall-2013/', level: 'Intermediate', format: 'Video' },
  { code: '8.09', title: 'Classical Mechanics III', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/', level: 'Intermediate', format: 'Lecture Notes' },
  { code: '8.224', title: 'Exploring Black Holes', professor: 'Edwin Taylor', url: 'https://ocw.mit.edu/courses/8-224-exploring-black-holes-general-relativity-and-astrophysics-spring-2003/', level: 'Intermediate', format: 'Notes' },
  { code: '8.231', title: 'Physics of Solids I', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-231-physics-of-solids-i-fall-2022/', level: 'Intermediate', format: 'Lecture Notes' },
  { code: '8.251', title: 'String Theory for Undergrads', professor: 'Alan Guth', url: 'https://ocw.mit.edu/courses/8-251-string-theory-for-undergraduates-spring-2007/', level: 'Intermediate', format: 'Video' },
  { code: '8.286', title: 'The Early Universe', professor: 'Alan Guth', url: 'https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/', level: 'Intermediate', format: 'Video' },
  { code: '8.701', title: 'Intro to Nuclear & Particle Physics', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/', level: 'Intermediate', format: 'Notes' },
  { code: '8.21', title: 'Physics of Energy', professor: 'Robert Jaffe', url: 'https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/', level: 'Intermediate', format: 'Lecture Notes' }
]

// ============================================
// MIT OCW COURSES - ADVANCED
// ============================================
const mitCoursesAdvanced = [
  { code: '8.06', title: 'Quantum Mechanics III', professor: 'Barton Zwiebach', url: 'https://ocw.mit.edu/courses/8-06-quantum-mechanics-iii-spring-2018/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.07', title: 'Electromagnetism II', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.962', title: 'General Relativity', professor: 'Scott Hughes', url: 'https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.323', title: 'Relativistic QFT I', professor: 'Minwalla et al.', url: 'https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-fall-2008/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.324', title: 'Relativistic QFT II', professor: 'Minwalla et al.', url: 'https://ocw.mit.edu/courses/8-324-relativistic-quantum-field-theory-ii-fall-2010/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.333', title: 'Statistical Mechanics I', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-fall-2013/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.422', title: 'Atomic & Optical Physics I', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-422-atomic-and-optical-physics-i-spring-2014/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.512', title: 'Theory of Solids I', professor: 'Patrick Lee', url: 'https://ocw.mit.edu/courses/8-512-theory-of-solids-i-fall-2004/', level: 'Advanced', format: 'Lecture Notes' },
  { code: '8.325', title: 'Relativistic QFT III', professor: 'MIT Faculty', url: 'https://ocw.mit.edu/courses/8-325-relativistic-quantum-field-theory-iii-spring-2003/', level: 'Advanced', format: 'Lecture Notes' }
]

// ============================================
// YOUTUBE CHANNELS - BEGINNER
// ============================================
const youtubeChannelsBeginner = [
  { name: '3Blue1Brown', url: 'https://www.youtube.com/@3blue1brown', subs: '6M+', focus: 'Math & Physics Visualization', description: 'Essence of calculus, linear algebra' },
  { name: 'Veritasium', url: 'https://www.youtube.com/@veritasium', subs: '15M+', focus: 'Science Education', description: 'High-quality physics explanations' },
  { name: 'Physics Girl', url: 'https://www.youtube.com/@physicsgirl', subs: '2.5M+', focus: 'Physics Experiments', description: 'Hands-on physics demonstrations' },
  { name: 'MinutePhysics', url: 'https://www.youtube.com/@minutephysics', subs: '5M+', focus: 'Quick Explainers', description: 'Short animated physics videos' },
  { name: 'The Action Lab', url: 'https://www.youtube.com/@TheActionLab', subs: '4M+', focus: 'Experiments', description: 'Cool physics experiments' },
  { name: 'Steve Mould', url: 'https://www.youtube.com/@SteveMould', subs: '2M+', focus: 'Physics Phenomena', description: 'Deep dives into physics phenomena' }
]

// ============================================
// YOUTUBE CHANNELS - INTERMEDIATE
// ============================================
const youtubeChannelsIntermediate = [
  { name: 'Walter Lewin (MIT)', url: 'https://www.youtube.com/@lecturesbywalterlewin.them9419', subs: '1M+', focus: 'University Physics', description: 'Legendary MIT physics lectures' },
  { name: 'MIT OpenCourseWare', url: 'https://www.youtube.com/@mitocw', subs: '4M+', focus: 'Full Courses', description: 'Complete MIT course videos' },
  { name: 'Sabine Hossenfelder', url: 'https://www.youtube.com/@SabineHossenfelder', subs: '1.5M+', focus: 'Quantum Gravity', description: 'Research-level made accessible' },
  { name: 'Sean Carroll', url: 'https://www.youtube.com/@seancarroll', subs: '700K+', focus: 'Theoretical Physics', description: 'QM, Many-worlds, cosmology' },
  { name: 'Eugene Khutoryansky', url: 'https://www.youtube.com/@EugeneKhutoryansky', subs: '1M+', focus: 'Visual Explanations', description: 'E&M, mechanics, quantum visualizations' },
  { name: 'Stanford Physics', url: 'https://www.youtube.com/@stanfordphysics', subs: '200K+', focus: 'University Lectures', description: 'Stanford physics courses' }
]

// ============================================
// YOUTUBE CHANNELS - ADVANCED
// ============================================
const youtubeChannelsAdvanced = [
  { name: 'Theoretical Minimum', url: 'https://www.youtube.com/@theoreticalminimum', subs: '400K+', focus: 'Graduate Physics', description: 'Susskind complete physics courses' },
  { name: 'PBS Space Time', url: 'https://www.youtube.com/@pbsspacetime', subs: '3M+', focus: 'Astrophysics & GR', description: 'Research-level astrophysics' },
  { name: 'Quanta Magazine', url: 'https://www.youtube.com/@QuantaScienceChannel', subs: '500K+', focus: 'Cutting-edge Research', description: 'Latest physics research' },
  { name: 'Institute for Advanced Study', url: 'https://www.youtube.com/@ias_princeton', subs: '100K+', focus: 'Research Talks', description: 'Talks from leading physicists' },
  { name: 'Perimeter Institute', url: 'https://www.youtube.com/@perimeterinstitute', subs: '200K+', focus: 'Theoretical Physics', description: 'World-class research talks' },
  { name: 'Kavli Institute', url: 'https://www.youtube.com/@KavliFoundation', subs: '50K+', focus: 'Research Seminars', description: 'Cutting-edge physics talks' }
]

// ============================================
// PHYSICS SIMULATIONS
// ============================================
const simulations = [
  { name: 'PhET Interactive Simulations', url: 'https://phet.colorado.edu/', provider: 'University of Colorado', topics: 'All physics topics', level: 'All Levels' },
  { name: 'oPhysics', url: 'https://ophysics.com/', provider: 'oPhysics', topics: 'E&M, Mechanics, Waves', level: 'High School-College' },
  { name: 'Physics Interactives', url: 'https://www.physicsclassroom.com/Physics-Interactives', provider: 'Physics Classroom', topics: 'Conceptual physics', level: 'Beginner' },
  { name: 'Falstad Math & Physics', url: 'https://www.falstad.com/mathphysics.html', provider: 'Paul Falstad', topics: 'E&M, QM, Waves, Optics', level: 'All Levels' },
  { name: 'MIT Mathlets', url: 'https://mathlets.org/mathlets/', provider: 'MIT', topics: 'DEs, Waves, Physics', level: 'Undergraduate' },
  { name: 'GeoGebra Physics', url: 'https://www.geogebra.org/physics', provider: 'GeoGebra', topics: 'Interactive models', level: 'All Levels' },
  { name: 'MyPhysicsLab', url: 'https://www.myphysicslab.com/', provider: 'Open Source', topics: 'Mechanics simulations', level: 'Undergraduate' },
  { name: 'Algodoo', url: 'https://www.algodoo.com/', provider: 'Algoryx', topics: '2D physics sandbox', level: 'All Levels' }
]

// ============================================
// GITHUB REPOSITORIES
// ============================================
const githubRepos = [
  { name: 'awesome-physics', url: 'https://github.com/wbierbower/awesome-physics', description: 'Curated list of physics resources', stars: '1k+' },
  { name: 'Quantum-Mechanics-Notes', url: 'https://github.com/adibis/Quantum-Mechanics-Notes', description: 'QM lecture notes and resources', stars: '500+' },
  { name: 'Computational-Physics', url: 'https://github.com/topics/computational-physics', description: 'Computational physics repositories', stars: 'Topic' },
  { name: 'physics-notes', url: 'https://github.com/topics/physics-notes', description: 'Physics notes collection', stars: 'Topic' },
  { name: 'physics-simulations', url: 'https://github.com/topics/physics-simulation', description: 'Physics simulation codes', stars: 'Topic' },
  { name: 'Statistical-Mechanics', url: 'https://github.com/rajeshrinet/Statistical-Mechanics', description: 'Stat mech notes and code', stars: '300+' },
  { name: 'Jackson-Electrodynamics', url: 'https://github.com/search?q=Jackson+electrodynamics', description: 'Jackson E&M solutions', stars: 'Multiple' },
  { name: 'Classical-Mechanics', url: 'https://github.com/topics/classical-mechanics', description: 'Classical mechanics resources', stars: 'Topic' }
]

// ============================================
// PROBLEM SETS & COMPETITIONS
// ============================================
const problemResources = [
  { name: 'Physics Olympiad (IPhO)', url: 'https://ipho-new.org/', type: 'Competition', description: 'International Physics Olympiad problems' },
  { name: 'US Physics Team (F=ma)', url: 'https://www.aapt.org/physicsteam/', type: 'Competition', description: 'US Physics Olympiad & F=ma exam' },
  { name: 'British Physics Olympiad', url: 'https://www.bpho.org.uk/', type: 'Competition', description: 'UK physics competition papers' },
  { name: 'GRE Physics Test', url: 'https://www.ets.org/gre/subject/about/content/physics', type: 'Exam Prep', description: 'Graduate school entrance exam' },
  { name: 'Physics GRE Prep', url: 'https://physicsgre.com/', type: 'Exam Prep', description: 'Free GRE Physics prep materials' },
  { name: 'Brilliant Physics', url: 'https://brilliant.org/courses/physics/', type: 'Problems', description: 'Interactive physics problems' },
  { name: 'Physics Stack Exchange', url: 'https://physics.stackexchange.com/', type: 'Q&A', description: 'Research-grade Q&A community' },
  { name: 'Physics Forums', url: 'https://www.physicsforums.com/', type: 'Community', description: 'Homework help & discussions' },
  { name: 'r/Physics', url: 'https://www.reddit.com/r/Physics/', type: 'Community', description: 'Reddit physics community (1M+ members)' },
  { name: 'r/AskPhysics', url: 'https://www.reddit.com/r/AskPhysics/', type: 'Q&A', description: 'Physics questions & answers' }
]

// ============================================
// INTERNATIONAL UNIVERSITIES
// ============================================
const internationalUniversities = [
  { name: 'NPTEL Physics (IITs)', url: 'https://nptel.ac.in/course.html', country: 'India', description: '100+ physics courses from IITs', type: 'Video Courses' },
  { name: 'Landau Institute', url: 'http://www.itp.ac.ru/en/', country: 'Russia', description: 'Landau Institute for Theoretical Physics', type: 'Research' },
  { name: 'Perimeter Institute', url: 'https://perimeterinstitute.ca/', country: 'Canada', description: 'Theoretical physics research & lectures', type: 'Research' },
  { name: 'ICTP', url: 'https://www.ictp.it/', country: 'Italy', description: 'Abdus Salam Centre - Free courses', type: 'Education' },
  { name: 'SISSA', url: 'https://www.sissa.it/', country: 'Italy', description: 'International School for Advanced Studies', type: 'Graduate School' },
  { name: 'ETH Zurich Physics', url: 'https://www.phys.ethz.ch/', country: 'Switzerland', description: 'Swiss Federal Institute of Technology', type: 'University' },
  { name: 'TU Munich Physics', url: 'https://www.ph.tum.de/', country: 'Germany', description: 'Technical University of Munich', type: 'University' },
  { name: 'Oxford Physics', url: 'https://www.physics.ox.ac.uk/', country: 'UK', description: 'University of Oxford', type: 'University' },
  { name: 'Cambridge Physics', url: 'https://www.phy.cam.ac.uk/', country: 'UK', description: 'Cavendish Laboratory', type: 'University' },
  { name: 'CERN', url: 'https://home.cern/', country: 'Switzerland', description: 'European Nuclear Research Centre', type: 'Research' },
  { name: 'Weizmann Institute', url: 'https://www.weizmann.ac.il/feinberg/', country: 'Israel', description: 'Physics department', type: 'Research' },
  { name: 'RIKEN', url: 'https://www.riken.jp/en/', country: 'Japan', description: 'Japanese research institute', type: 'Research' }
]

// ============================================
// SOFTWARE & TOOLS
// ============================================
const physicsSoftware = [
  { name: 'SciPy', url: 'https://scipy.org/', type: 'Python Library', description: 'Scientific computing for physics' },
  { name: 'NumPy', url: 'https://numpy.org/', type: 'Python Library', description: 'Numerical computing' },
  { name: 'SymPy', url: 'https://www.sympy.org/', type: 'Python Library', description: 'Symbolic mathematics' },
  { name: 'Matplotlib', url: 'https://matplotlib.org/', type: 'Python Library', description: 'Physics visualizations' },
  { name: 'QuTiP', url: 'https://qutip.org/', type: 'Python Library', description: 'Quantum Toolbox in Python' },
  { name: 'Astropy', url: 'https://www.astropy.org/', type: 'Python Library', description: 'Astronomy/astrophysics tools' },
  { name: 'ROOT', url: 'https://root.cern/', type: 'Data Analysis', description: 'CERN data analysis framework' },
  { name: 'Wolfram Mathematica', url: 'https://www.wolfram.com/mathematica/', type: 'Software', description: 'Symbolic computation' },
  { name: 'COMSOL', url: 'https://www.comsol.com/', type: 'Software', description: 'Multiphysics simulations' },
  { name: 'Quantum ESPRESSO', url: 'https://www.quantum-espresso.org/', type: 'Software', description: 'Quantum chemistry & materials' },
  { name: 'LAMMPS', url: 'https://www.lammps.org/', type: 'Software', description: 'Molecular dynamics simulator' },
  { name: 'Jupyter Physics', url: 'https://github.com/topics/physics-jupyter', type: 'Notebooks', description: 'Interactive physics notebooks' }
]

// ============================================
// MAJOR PHYSICS WEBSITES
// ============================================
const physicsWebsites = [
  { name: 'Physics Today', url: 'https://physicstoday.org/', description: 'APS publication - physics news' },
  { name: 'Physics World', url: 'https://physicsworld.com/', description: 'IOP publication - news & analysis' },
  { name: 'APS Physics', url: 'https://physics.aps.org/', description: 'American Physical Society news' },
  { name: 'arXiv Physics', url: 'https://arxiv.org/archive/physics', description: 'Latest research preprints' },
  { name: 'HyperPhysics', url: 'http://hyperphysics.phy-astr.gsu.edu/', description: 'Comprehensive concept maps' },
  { name: 'Wolfram Physics', url: 'https://scienceworld.wolfram.com/physics/', description: 'Physics encyclopedia' },
  { name: 'Physics Central', url: 'https://www.physicscentral.com/', description: 'APS outreach site' },
  { name: 'LibreTexts Physics', url: 'https://phys.libretexts.org/', description: '50+ free open textbooks' }
]

// ============================================
// PHYSICS APPS & MOBILE
// ============================================
const physicsApps = [
  { name: 'PhET Mobile', url: 'https://phet.colorado.edu/', type: 'Simulation', description: 'Mobile physics simulations' },
  { name: 'phyphox', url: 'https://phyphox.org/', type: 'Experiment', description: 'Phone sensor experiments' },
  { name: 'Physics Toolbox', url: 'https://www.physicstoolbox.com/', type: 'Measurement', description: 'Advanced sensor suite' },
  { name: 'Algodoo', url: 'https://www.algodoo.com/', type: 'Sandbox', description: '2D physics playground' },
  { name: 'Brilliant', url: 'https://brilliant.org/', type: 'Learning', description: 'Interactive physics courses' },
  { name: 'PhySyCalc', url: 'https://www.physycalc.com/', type: 'Calculator', description: 'Physics calculator with units' }
]

// ============================================
// PODCASTS & AUDIO
// ============================================
const physicsPodcasts = [
  { name: 'Physics World Weekly', url: 'https://physicsworld.com/podcast/', description: 'News and interviews' },
  { name: 'Titanium Physicists', url: 'https://titaniumphysicists.podbean.com/', description: 'Physics explained simply' },
  { name: 'Daniel & Jorge Explain', url: 'https://www.iheart.com/podcast/105-daniel-and-jorge-explain-the-10594513/', description: 'Universe explained' },
  { name: 'Astronomy Cast', url: 'https://www.astronomycast.com/', description: 'Astronomy & astrophysics' },
  { name: 'Infinite Monkey Cage', url: 'https://www.bbc.co.uk/programmes/b00snr0w', description: 'BBC physics panel show' },
  { name: 'Sean Carroll\'s Mindscape', url: 'https://www.preposterousuniverse.com/podcast/', description: 'Physics & philosophy' }
]

// ============================================
// PHYSICS BLOGS
// ============================================
const physicsBlogs = [
  { name: 'Backreaction', url: 'https://backreaction.blogspot.com/', author: 'Sabine Hossenfelder', description: 'Quantum gravity & foundations' },
  { name: 'Not Even Wrong', url: 'https://www.math.columbia.edu/~woit/wordpress/', author: 'Peter Woit', description: 'Mathematical physics' },
  { name: 'Shtetl-Optimized', url: 'https://scottaaronson.blog/', author: 'Scott Aaronson', description: 'Quantum computing' },
  { name: 'Preposterous Universe', url: 'https://www.preposterousuniverse.com/blog/', author: 'Sean Carroll', description: 'Cosmology & QM' },
  { name: 'Of Particular Significance', url: 'https://profmattstrassler.com/', author: 'Matt Strassler', description: 'Particle physics' },
  { name: 'Dot Physics', url: 'https://www.wired.com/category/dotphysics/', author: 'Rhett Allain', description: 'Physics education' }
]

// ============================================
// SCHOLARSHIPS & FELLOWSHIPS
// ============================================
const scholarships = [
  { name: 'NSF GRFP', url: 'https://www.nsfgrfp.org/', type: 'Graduate', description: '$37k/year for 3 years' },
  { name: 'DOE CSGF', url: 'https://www.krellinst.org/csgf/', type: 'Graduate', description: 'Computational science' },
  { name: 'NDSEG Fellowship', url: 'https://ndseg.org/', type: 'Graduate', description: 'National Defense' },
  { name: 'Hertz Fellowship', url: 'https://hertzfoundation.org/', type: 'Graduate', description: '5-year fellowship' },
  { name: 'Goldwater Scholarship', url: 'https://goldwaterscholarship.gov/', type: 'Undergrad', description: 'STEM excellence' },
  { name: 'NASA FINESST', url: 'https://science.nasa.gov/researchers/sara/fellowship-programs', type: 'Graduate', description: 'Earth & space science' }
]

// ============================================
// DIY EXPERIMENTS
// ============================================
const diyExperiments = [
  { name: 'PhET DIY Activities', url: 'https://phet.colorado.edu/en/teaching-resources/activities', description: 'Simulation-based labs' },
  { name: 'Physics Classroom Labs', url: 'https://www.physicsclassroom.com/lab', description: 'Safe home experiments' },
  { name: 'Science Buddies Physics', url: 'https://www.sciencebuddies.org/science-experiments/physics', description: 'K-12 projects' },
  { name: 'phyphox Experiments', url: 'https://phyphox.org/experiments/', description: 'Smartphone physics' },
  { name: 'DIY Science Projects', url: 'https://www.kiwico.com/diy/lists/10-diy-physics-projects-to-try-at-home', description: 'Home experiments' },
  { name: 'We Are Teachers', url: 'https://www.weareteachers.com/easy-science-experiments/', description: '75+ easy experiments' }
]

// ============================================
// SPECIALIZED TOPICS - GRADUATE TEXTBOOKS
// ============================================
const specializedTextbooks = [
  // QFT
  { title: 'An Introduction to QFT', author: 'Peskin & Schroeder', topic: 'QFT', level: 'Graduate' },
  { title: 'Quantum Field Theory', author: 'Srednicki', topic: 'QFT', level: 'Graduate' },
  { title: 'QFT in a Nutshell', author: 'Zee', topic: 'QFT', level: 'Graduate' },
  { title: 'The Quantum Theory of Fields', author: 'Weinberg', topic: 'QFT', level: 'Graduate' },
  // GR
  { title: 'Spacetime and Geometry', author: 'Sean Carroll', topic: 'GR', level: 'Graduate' },
  { title: 'Gravitation', author: 'Misner, Thorne & Wheeler', topic: 'GR', level: 'Graduate' },
  { title: 'Einstein Gravity in a Nutshell', author: 'Zee', topic: 'GR', level: 'Graduate' },
  // String Theory
  { title: 'String Theory Vol 1 & 2', author: 'Polchinski', topic: 'Strings', level: 'Graduate' },
  { title: 'A First Course in String Theory', author: 'Zwiebach', topic: 'Strings', level: 'Graduate' },
  { title: 'String Theory and M-Theory', author: 'Becker, Becker & Schwarz', topic: 'Strings', level: 'Graduate' },
  // Condensed Matter
  { title: 'Principles of Condensed Matter', author: 'Chaikin & Lubensky', topic: 'Condensed Matter', level: 'Graduate' },
  { title: 'Condensed Matter Field Theory', author: 'Altland & Simons', topic: 'Condensed Matter', level: 'Graduate' },
  { title: 'Quantum Theory of Solids', author: 'Kittel', topic: 'Condensed Matter', level: 'Graduate' },
  // Particle Physics
  { title: 'Introduction to Elementary Particles', author: 'Griffiths', topic: 'Particle', level: 'Graduate' },
  { title: 'Quarks and Leptons', author: 'Halzen & Martin', topic: 'Particle', level: 'Graduate' },
  // Cosmology
  { title: 'Modern Cosmology', author: 'Dodelson', topic: 'Cosmology', level: 'Graduate' },
  { title: 'Cosmology', author: 'Weinberg', topic: 'Cosmology', level: 'Graduate' },
  // Quantum Computing
  { title: 'Quantum Computation and Quantum Information', author: 'Nielsen & Chuang', topic: 'Quantum Computing', level: 'Graduate' },
  { title: 'Quantum Computing Lecture Notes', author: 'John Preskill', url: 'http://theory.caltech.edu/~preskill/ph219/', topic: 'Quantum Computing', level: 'Graduate' }
]

// ============================================
// MOOC COURSES (Coursera, edX, etc.)
// ============================================
const moocCourses = [
  // Coursera
  { name: 'How Things Work: Intro to Physics', platform: 'Coursera', institution: 'UVA', level: 'Beginner', url: 'https://www.coursera.org/learn/how-things-work' },
  { name: 'Physics 101 - Forces and Kinematics', platform: 'Coursera', institution: 'Rice', level: 'Beginner', url: 'https://www.coursera.org/learn/physics-101-forces-and-kinematics' },
  { name: 'Mechanics: Motion, Forces, Energy', platform: 'Coursera', institution: 'UCI', level: 'Intermediate', url: 'https://www.coursera.org/learn/mechanics-physics' },
  { name: 'Electricity and Magnetism', platform: 'Coursera', institution: 'UCI', level: 'Intermediate', url: 'https://www.coursera.org/learn/electromagnetism' },
  { name: 'Mastering Quantum Mechanics', platform: 'Coursera', institution: 'MITx', level: 'Advanced', url: 'https://www.coursera.org/learn/mastering-quantum-mechanics' },
  { name: 'Quantum Mechanics for Scientists 1', platform: 'Coursera', institution: 'Stanford', level: 'Advanced', url: 'https://www.coursera.org/learn/quantum-mechanics' },
  { name: 'From the Big Bang to Dark Energy', platform: 'Coursera', institution: 'Tokyo', level: 'Beginner', url: 'https://www.coursera.org/learn/big-bang' },
  { name: 'Understanding Einstein: Special Relativity', platform: 'Coursera', institution: 'Stanford', level: 'Intermediate', url: 'https://www.coursera.org/learn/einstein-relativity' },
  // edX
  { name: 'Mechanics, Part 1', platform: 'edX', institution: 'MITx', level: 'Intermediate', url: 'https://www.edx.org/learn/mechanics/massachusetts-institute-of-technology-mechanics-part-1' },
  { name: 'Mechanics, Part 2', platform: 'edX', institution: 'MITx', level: 'Intermediate', url: 'https://www.edx.org/learn/mechanics/massachusetts-institute-of-technology-mechanics-part-2' },
  { name: 'Electricity and Magnetism, Part 1', platform: 'edX', institution: 'MITx', level: 'Intermediate', url: 'https://www.edx.org/learn/electricity/massachusetts-institute-of-technology-electricity-and-magnetism' },
  { name: 'Mastering Quantum Mechanics', platform: 'edX', institution: 'MITx', level: 'Advanced', url: 'https://www.edx.org/learn/quantum-mechanics/massachusetts-institute-of-technology-mastering-quantum-mechanics' },
  { name: 'Astrophysics: Exploring Exoplanets', platform: 'edX', institution: 'ANU', level: 'Intermediate', url: 'https://www.edx.org/learn/astrophysics/australian-national-university-astrophysics-exploring-exoplanets' },
  { name: 'Astrophysics: Cosmology', platform: 'edX', institution: 'ANU', level: 'Advanced', url: 'https://www.edx.org/learn/astrophysics/australian-national-university-astrophysics-cosmology' },
  { name: 'Relativity and Astrophysics', platform: 'edX', institution: 'Cornell', level: 'Intermediate', url: 'https://www.edx.org/learn/astrophysics/cornell-university-relativity-and-astrophysics' },
  { name: 'Introduction to Quantum Computing', platform: 'edX', institution: 'MITx', level: 'Intermediate', url: 'https://www.edx.org/learn/quantum-computing/massachusetts-institute-of-technology-introduction-to-quantum-computing' }
]

// ============================================
// STANFORD ONLINE COURSES
// ============================================
const stanfordCourses = [
  { name: 'Quantum Mechanics for Scientists & Engineers', code: 'SOE-YEEQMSE01', professor: 'Stanford', level: 'Advanced', url: 'https://online.stanford.edu/courses/soe-yeeqmse01-quantum-mechanics-scientists-and-engineers' },
  { name: 'QM for Scientists & Engineers 2', code: 'SOE-YEEQMSE02', professor: 'Stanford', level: 'Advanced', url: 'https://online.stanford.edu/courses/soe-yeeqmse02-quantum-mechanics-scientists-and-engineers-2' },
  { name: 'Polymer Physics', code: 'CHEMENG466', professor: 'Stanford', level: 'Graduate', url: 'https://online.stanford.edu/courses/chemeng466-polymer-physics' },
  { name: 'Spacecraft Electric Propulsion', code: 'AA284A', professor: 'Stanford', level: 'Graduate', url: 'https://online.stanford.edu/courses/aa284a-spacecraft-electric-propulsion' },
  { name: 'Modern Physics (High School)', code: 'UP070', professor: 'Stanford OHS', level: 'Beginner', url: 'https://stanford.hs.edu.kg/courses/2025/school-year/up070' }
]

// ============================================
// OPEN SOURCE PHYSICS SOFTWARE - BY CATEGORY
// ============================================

// CFD Software
const cfdSoftware = [
  { name: 'OpenFOAM', url: 'https://openfoam.org/', type: 'CFD Suite', description: 'Industry-standard open source CFD' },
  { name: 'SU2', url: 'https://su2code.github.io/', type: 'Multiphysics CFD', description: 'Aerodynamics and design' },
  { name: 'Dolfyn', url: 'https://www.dolfyn.net/', type: 'CFD Code', description: 'Heat/flow simulations' },
  { name: 'Fluidity', url: 'https://fluidityproject.github.io/', type: 'Multiphase CFD', description: 'Adaptive mesh technology' },
  { name: 'WaterLily.jl', url: 'https://github.com/trixi-framework/WaterLily.jl', type: 'Julia CFD', description: 'Lattice Boltzmann methods' }
]

// Electromagnetism Software
const emSoftware = [
  { name: 'Meep', url: 'https://meep.readthedocs.io/', type: 'FDTD EM', description: 'MIT EM simulation software' },
  { name: 'gprMax', url: 'https://www.gprmax.com/', type: 'GPR Simulation', description: 'Ground penetrating radar' },
  { name: 'OpenEMS', url: 'https://openems.de/', type: 'EM Field Solver', description: '3D EM field simulation' },
  { name: 'Elmer FEM', url: 'https://elmerfem.org/', type: 'Multiphysics', description: 'Open source FEM' },
  { name: 'FEniCS', url: 'https://fenicsproject.org/', type: 'PDE Platform', description: 'Python/C++ PDE solving' }
]

// Molecular Dynamics
const mdSoftware = [
  { name: 'LAMMPS', url: 'https://www.lammps.org/', type: 'Classical MD', description: 'Large-scale molecular dynamics' },
  { name: 'GROMACS', url: 'https://www.gromacs.org/', type: 'Biomolecular MD', description: 'Protein simulations' },
  { name: 'NAMD', url: 'https://www.ks.uiuc.edu/Research/namd/', type: 'Parallel MD', description: 'High-performance MD' },
  { name: 'OpenMM', url: 'https://openmm.org/', type: 'GPU MD', description: 'GPU-accelerated MD' },
  { name: 'Quantum ESPRESSO', url: 'https://www.quantum-espresso.org/', type: 'DFT', description: 'Electronic structure' }
]

// Physics Engines
const physicsEngines = [
  { name: 'Bullet Physics', url: 'https://pybullet.org/', type: '3D Engine', description: 'Rigid body dynamics' },
  { name: 'PhysX', url: 'https://github.com/NVIDIA-Omniverse/PhysX', type: 'NVIDIA Physics', description: 'Game physics engine' },
  { name: 'MuJoCo', url: 'https://mujoco.org/', type: 'Robotics', description: 'DeepMind physics engine' },
  { name: 'Project Chrono', url: 'https://projectchrono.org/', type: 'Multibody', description: 'Vehicle dynamics' },
  { name: 'Box2D', url: 'https://box2d.org/', type: '2D Engine', description: '2D physics (Angry Birds)' }
]

// Astronomy Software
const astronomySoftware = [
  { name: 'Stellarium', url: 'https://stellarium.org/', type: 'Planetarium', description: 'Free open source planetarium' },
  { name: 'KStars', url: 'https://kstars.kde.org/', type: 'Astronomy Suite', description: 'KDE astronomy software' },
  { name: 'OpenSpace', url: 'https://www.openspaceproject.com/', type: 'Universe Viz', description: 'NASA-funded visualization' },
  { name: 'Celestia', url: 'https://celestiaproject.space/', type: 'Space Sim', description: '3D space simulator' },
  { name: 'Siril', url: 'https://siril.org/', type: 'Image Processing', description: 'Astrophotography tool' }
]

// Quantum Computing
const quantumSoftware = [
  { name: 'Qiskit', url: 'https://qiskit.org/', type: 'IBM SDK', description: 'IBM quantum computing' },
  { name: 'Cirq', url: 'https://quantumai.google/cirq', type: 'Google Library', description: 'Google quantum library' },
  { name: 'PennyLane', url: 'https://pennylane.ai/', type: 'Quantum ML', description: 'Differentiable quantum' },
  { name: 'QuTiP', url: 'https://qutip.org/', type: 'Quantum Toolbox', description: 'Quantum systems simulation' }
]

// CERN/Particle Physics
const particleSoftware = [
  { name: 'ROOT', url: 'https://root.cern/', type: 'Data Analysis', description: 'CERN analysis framework' },
  { name: 'GEANT4', url: 'https://geant4.web.cern.ch/', type: 'Detector Sim', description: 'Particle transport' },
  { name: 'MadGraph5', url: 'https://launchpad.net/mg5amcnlo', type: 'Event Generator', description: 'Monte Carlo events' },
  { name: 'Pythia', url: 'https://pythia.org/', type: 'Event Generator', description: 'High-energy collisions' }
]

// ============================================
// ARXIV CATEGORIES
// ============================================
const arxivCategories = [
  { code: 'astro-ph', name: 'Astrophysics', description: 'All areas of astrophysics', url: 'https://arxiv.org/archive/astro-ph' },
  { code: 'cond-mat', name: 'Condensed Matter', description: 'Materials and condensed matter', url: 'https://arxiv.org/archive/cond-mat' },
  { code: 'gr-qc', name: 'General Relativity', description: 'GR and quantum cosmology', url: 'https://arxiv.org/archive/gr-qc' },
  { code: 'hep-ex', name: 'High Energy Physics - Exp', description: 'Particle physics experiments', url: 'https://arxiv.org/archive/hep-ex' },
  { code: 'hep-th', name: 'High Energy Physics - Theory', description: 'Particle theory and strings', url: 'https://arxiv.org/archive/hep-th' },
  { code: 'hep-ph', name: 'High Energy Physics - Pheno', description: 'Phenomenology', url: 'https://arxiv.org/archive/hep-ph' },
  { code: 'math-ph', name: 'Mathematical Physics', description: 'Math methods for physics', url: 'https://arxiv.org/archive/math-ph' },
  { code: 'nucl-th', name: 'Nuclear Theory', description: 'Nuclear physics theory', url: 'https://arxiv.org/archive/nucl-th' },
  { code: 'quant-ph', name: 'Quantum Physics', description: 'Quantum mechanics and info', url: 'https://arxiv.org/archive/quant-ph' },
  { code: 'physics', name: 'General Physics', description: 'All other physics topics', url: 'https://arxiv.org/archive/physics' }
]

// ============================================
// RESEARCH TOOLS
// ============================================
const researchTools = [
  { name: 'INSPIRE-HEP', url: 'https://inspirehep.net/', type: 'Literature', description: 'HEP literature database' },
  { name: 'NASA ADS', url: 'https://ui.adsabs.harvard.edu/', type: 'Astrophysics', description: 'Astrophysics data system' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/', type: 'Search', description: 'Academic search engine' },
  { name: 'Connected Papers', url: 'https://www.connectedpapers.com/', type: 'Visualization', description: 'Citation graph explorer' },
  { name: 'Zotero', url: 'https://www.zotero.org/', type: 'Reference', description: 'Reference manager' },
  { name: 'Overleaf', url: 'https://www.overleaf.com/', type: 'LaTeX', description: 'Online LaTeX editor' }
]

// ============================================
// PHYSICS OLYMPIAD RESOURCES
// ============================================
const olympiadResources = [
  { name: 'IPhO Official', url: 'https://ipho-new.org/', type: 'Official', description: 'International Physics Olympiad' },
  { name: 'AAPT Physics Team', url: 'https://www.aapt.org/physicsteam/', type: 'US', description: 'US Physics Olympiad' },
  { name: 'British Physics Olympiad', url: 'https://www.bpho.org.uk/', type: 'UK', description: 'UK physics competition' },
  { name: 'Kevin Zhou Handouts', url: 'https://knzhou.github.io/', type: 'Training', description: 'Excellent problem sets' },
  { name: 'Physoly', url: 'https://physoly.tech', type: 'Resources', description: 'Olympiad problem collection' },
  { name: 'AoPS Physics', url: 'https://artofproblemsolving.com/wiki/index.php/Physics', type: 'Community', description: 'Problem solving forums' }
]

// ============================================
// CAREER RESOURCES
// ============================================
const careerResources = [
  { name: 'APS Careers', url: 'https://www.aps.org/careers/', type: 'Guidance', description: 'American Physical Society' },
  { name: 'IOP Careers', url: 'https://www.iop.org/careers', type: 'Guidance', description: 'Institute of Physics UK' },
  { name: 'Physics Today Jobs', url: 'https://jobs.physicstoday.org/', type: 'Job Board', description: 'Physics employment' },
  { name: 'AIP Statistics', url: 'https://www.aip.org/statistics', type: 'Data', description: 'Employment data' },
  { name: 'REU Programs', url: 'https://www.nsf.gov/crssprgm/reu/', type: 'Research', description: 'NSF summer research' },
  { name: 'CERN Summer Student', url: 'https://careers.smartrecruiters.com/CERN', type: 'Internship', description: 'CERN summer program' }
]

// ============================================
// WOMEN IN PHYSICS
// ============================================
const womenInPhysics = [
  { name: 'APS Women in Physics', url: 'https://www.aps.org/programs/women/', type: 'Organization', description: 'Professional support' },
  { name: 'IOP Women in Physics', url: 'https://www.iop.org/physics-community/special-interest-groups/women-physics-group', type: 'Network', description: 'UK/Europe network' },
  { name: 'Harvard GWiP', url: 'https://women.physics.harvard.edu', type: 'Community', description: 'Harvard women in physics' },
  { name: 'NORNDiP', url: 'https://www.norndip.net', type: 'Network', description: 'Nordic network' },
  { name: 'AAPT Women', url: 'https://www.aapt.org/aboutaapt/organization/women.cfm', type: 'Teachers', description: 'Teachers network' }
]

// ============================================
// MORE YOUTUBE CHANNELS
// ============================================
const moreYoutubeChannels = [
  { name: 'Fermilab', url: 'https://www.youtube.com/@fermilab', subs: '500K+', focus: 'Particle Physics', level: 'All' },
  { name: 'CERN', url: 'https://www.youtube.com/@CERN', subs: '1M+', focus: 'Research', level: 'All' },
  { name: 'Kurzgesagt', url: 'https://www.youtube.com/@kurzgesagt', subs: '22M+', focus: 'Animated Science', level: 'Beginner' },
  { name: 'Deep Sky Videos', url: 'https://www.youtube.com/@DeepSkyVideos', subs: '800K+', focus: 'Astronomy', level: 'All' },
  { name: 'Arvin Ash', url: 'https://www.youtube.com/@arvinash', subs: '1M+', focus: 'Quantum/Relativity', level: 'Intermediate' },
  { name: 'MathTheBeautiful', url: 'https://www.youtube.com/@MathTheBeautiful', subs: '300K+', focus: 'Math Physics', level: 'Advanced' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-space-950 to-blue-900/20"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <span class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-purple-300">1500+ Curated Resources Worldwide</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Physics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master physics from high school to research level. Curated from MIT, Caltech, Stanford, Cambridge, and institutions worldwide.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">200+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">50+</div>
              <div class="text-sm text-gray-400">MIT OCW Courses</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">100+</div>
              <div class="text-sm text-gray-400">YouTube Channels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">1500+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
            </div>
          </div>
        </div>

        <!-- Level Selection Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <a v-for="level in levels" :key="level.id" 
               :href="`#${level.id}-section`"
               class="group relative p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
               :class="`bg-${level.color}-500/5 hover:bg-${level.color}-500/10`">
            <div :class="`absolute inset-0 bg-${level.color}-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`"></div>
            
            <div class="relative">
              <div class="w-12 h-12 mb-4 rounded-xl flex items-center justify-center" :class="`bg-${level.color}-500/20`">
                <svg v-if="level.icon === 'seedling'" class="w-7 h-7" :class="`text-${level.color}-400`" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13"/></svg>
                <svg v-else-if="level.icon === 'target'" class="w-7 h-7" :class="`text-${level.color}-400`" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="1.5"/><circle cx="12" cy="12" r="6" stroke-width="1.5"/><circle cx="12" cy="12" r="2" stroke-width="1.5"/></svg>
                <svg v-else-if="level.icon === 'rocket'" class="w-7 h-7" :class="`text-${level.color}-400`" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2c0 0-7 4-7 11v3l-2 2h18l-2-2v-3c0-7-7-11-7-11z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-1">{{ level.title }}</h3>
              <p :class="`text-sm text-${level.color}-400 mb-3`">{{ level.subtitle }}</p>
              <p class="text-gray-400 text-sm mb-4">{{ level.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="topic in level.topics" :key="topic" 
                      class="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">
                  {{ topic }}
                </span>
              </div>
              
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                {{ level.resources }} Resources
              </div>
            </div>
          </a>
        </div>

        <!-- Featured Resources -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in featuredResources" :key="resource.title" 
               :href="resource.url" target="_blank"
               class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
              <p class="text-sm text-purple-400 mb-2">{{ resource.author }}</p>
              <p class="text-xs text-gray-400 mb-3">{{ resource.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">{{ resource.type }}</span>
                <span class="text-xs text-gray-500">{{ resource.level }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-gray-500">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Free Textbooks Section -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Textbooks</h2>
            <p class="text-gray-400">100% free, legally available physics textbooks from top sources</p>
          </div>
        </div>

        <!-- Beginner Free Books -->
        <div id="beginner-section" class="mb-12 scroll-mt-24">
          <h3 class="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Beginner Level
            <span class="text-sm font-normal text-gray-500">High School / AP / Intro</span>
          </h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksBeginner" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.topic }}</span>
                <span v-if="book.type.includes('FREE')" class="text-xs text-emerald-400 font-semibold">FREE</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
              <p class="text-xs text-gray-500 mt-2">{{ book.level }}</p>
            </a>
          </div>
        </div>

        <!-- Intermediate Free Books -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
            Intermediate Level
            <span class="text-sm font-normal text-gray-500">Undergraduate / Calculus</span>
          </h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ book.topic }}</span>
                <span v-if="book.type.includes('FREE')" class="text-xs text-purple-400 font-semibold">FREE</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
            </a>
          </div>
        </div>

        <!-- Advanced Free Books -->
        <div id="advanced-section">
          <h3 class="text-xl font-semibold text-rose-400 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-rose-400 rounded-full"></span>
            Advanced Level
            <span class="text-sm font-normal text-gray-500">Graduate</span>
          </h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ book.topic }}</span>
                <span class="text-xs text-rose-400 font-semibold">FREE</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ book.title }}</h4>
              <p class="text-sm text-gray-400">{{ book.author }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- David Tong Lecture Notes -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">David Tong's Lecture Notes</h2>
            <p class="text-gray-400">Cambridge University - 14 complete graduate-level lecture notes (completely free)</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="lecture in tongLectures" :key="lecture.title" :href="lecture.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 rounded" 
                    :class="lecture.level === 'Interm' ? 'bg-purple-500/20 text-purple-400' : 'bg-rose-500/20 text-rose-400'">{{ lecture.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ lecture.title }}</h4>
            <p class="text-sm text-gray-500">{{ lecture.topic }}</p>
          </a>
        </div>
      </section>

      <!-- MIT OCW Section -->
      <section id="mitocw" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">MIT OpenCourseWare</h2>
            <p class="text-gray-400">Free complete physics courses from MIT - Walter Lewin's legendary lectures + graduate courses</p>
          </div>
        </div>

        <!-- Beginner MIT -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Beginner Level (Walter Lewin)</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <!-- Physics Simulations -->
      <section id="simulations" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Simulations</h2>
            <p class="text-gray-400">Interactive physics labs and visualizations - browser-based</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="sim in simulations" :key="sim.name" :href="sim.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">{{ sim.name }}</h4>
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

      <!-- Problem Sets & Competitions -->
      <section id="problems" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Problem Sets & Competitions</h2>
            <p class="text-gray-400">Practice problems, olympiads, and exam preparation</p>
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

      <!-- Software & Tools -->
      <section id="software" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Software & Tools</h2>
            <p class="text-gray-400">Python libraries, simulation software, and computational tools</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <!-- Essential Websites -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Essential Physics Websites</h2>
            <p class="text-gray-400">News, research, reference materials, and communities</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="site in physicsWebsites" :key="site.name" :href="site.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ site.name }}</h4>
            <p class="text-sm text-gray-500">{{ site.description }}</p>
          </a>
        </div>
      </section>

      <!-- Physics Apps & Mobile -->
      <section id="apps" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Apps & Mobile</h2>
            <p class="text-gray-400">Learning apps, simulations, and mobile tools for on-the-go physics</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <!-- Podcasts & Audio -->
      <section id="podcasts" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Podcasts & Audio</h2>
            <p class="text-gray-400">Learn physics on the go with these excellent podcasts</p>
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

      <!-- Physics Blogs -->
      <section id="blogs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Blogs</h2>
            <p class="text-gray-400">Insights from leading physicists and educators</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="blog in physicsBlogs" :key="blog.name" :href="blog.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ blog.name }}</h4>
            <p class="text-sm text-teal-400 mb-1">{{ blog.author }}</p>
            <p class="text-xs text-gray-500">{{ blog.description }}</p>
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
            <p class="text-gray-400">Hands-on physics you can do at home with everyday materials</p>
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

      <!-- Scholarships & Fellowships -->
      <section id="scholarships" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Scholarships & Fellowships</h2>
            <p class="text-gray-400">Funding opportunities for physics students at all levels</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <!-- MOOC Courses -->
      <section id="moocs" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">MOOC Courses (Coursera & edX)</h2>
            <p class="text-gray-400">Online courses from top universities - free to audit</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="course in moocCourses" :key="course.name" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ course.platform }}</span>
              <span class="text-xs text-gray-500">{{ course.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{{ course.name }}</h4>
            <p class="text-xs text-gray-500">{{ course.institution }}</p>
          </a>
        </div>
      </section>

      <!-- Stanford Online -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Stanford Online Courses</h2>
            <p class="text-gray-400">Stanford University online physics programs</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="course in stanfordCourses" :key="course.name" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">{{ course.code }}</span>
              <span class="text-xs text-gray-500">{{ course.level }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">{{ course.name }}</h4>
            <p class="text-xs text-gray-500">{{ course.professor }}</p>
          </a>
        </div>
      </section>

      <!-- Open Source Software -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Open Source Physics Software</h2>
            <p class="text-gray-400">Free computational tools for physics research and simulation</p>
          </div>
        </div>

        <!-- CFD -->
        <h3 class="text-lg font-semibold text-cyan-400 mb-4">Computational Fluid Dynamics</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <a v-for="soft in cfdSoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-cyan-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- EM -->
        <h3 class="text-lg font-semibold text-yellow-400 mb-4">Electromagnetism Simulation</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <a v-for="soft in emSoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-yellow-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- MD -->
        <h3 class="text-lg font-semibold text-purple-400 mb-4">Molecular Dynamics</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <a v-for="soft in mdSoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-purple-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- Physics Engines -->
        <h3 class="text-lg font-semibold text-pink-400 mb-4">Physics Engines</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <a v-for="soft in physicsEngines" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-pink-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- Astronomy -->
        <h3 class="text-lg font-semibold text-indigo-400 mb-4">Astronomy Software</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <a v-for="soft in astronomySoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-indigo-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- Quantum -->
        <h3 class="text-lg font-semibold text-emerald-400 mb-4">Quantum Computing</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="soft in quantumSoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-emerald-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>

        <!-- Particle Physics -->
        <h3 class="text-lg font-semibold text-blue-400 mb-4">Particle Physics (CERN)</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="soft in particleSoftware" :key="soft.name" :href="soft.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ soft.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-blue-400 transition-colors">{{ soft.name }}</h4>
            <p class="text-xs text-gray-500">{{ soft.description }}</p>
          </a>
        </div>
      </section>

      <!-- arXiv Categories -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">arXiv Preprint Categories</h2>
            <p class="text-gray-400">Latest research papers in all physics fields</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="cat in arxivCategories" :key="cat.code" :href="cat.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded font-mono">{{ cat.code }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-red-400 transition-colors">{{ cat.name }}</h4>
            <p class="text-xs text-gray-500">{{ cat.description }}</p>
          </a>
        </div>
      </section>

      <!-- Research Tools -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research Tools</h2>
            <p class="text-gray-400">Tools for finding, organizing, and writing research</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="tool in researchTools" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">{{ tool.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-violet-400 transition-colors">{{ tool.name }}</h4>
            <p class="text-xs text-gray-500">{{ tool.description }}</p>
          </a>
        </div>
      </section>

      <!-- Physics Olympiad -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Physics Olympiad Resources</h2>
            <p class="text-gray-400">Competition preparation for IPhO and national olympiads</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in olympiadResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-amber-500 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Career Resources -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Career Resources</h2>
            <p class="text-gray-400">Jobs, internships, and career guidance for physicists</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in careerResources" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-teal-500 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- Women in Physics -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Women in Physics</h2>
            <p class="text-gray-400">Support networks and resources for women in physics</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="res in womenInPhysics" :key="res.name" :href="res.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ res.type }}</span>
            <h4 class="font-semibold text-white mt-2 mb-1 group-hover:text-rose-500 transition-colors">{{ res.name }}</h4>
            <p class="text-xs text-gray-500">{{ res.description }}</p>
          </a>
        </div>
      </section>

      <!-- More YouTube Channels -->
      <section class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">More YouTube Channels</h2>
            <p class="text-gray-400">Additional educational channels for physics learning</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="channel in moreYoutubeChannels" :key="channel.name" :href="channel.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center gap-4 mb-3">
              <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                {{ channel.name[0] }}
              </div>
              <div>
                <h4 class="font-semibold text-white group-hover:text-red-400 transition-colors">{{ channel.name }}</h4>
                <p class="text-sm text-gray-500">{{ channel.subs }} subscribers</p>
              </div>
            </div>
            <p class="text-sm text-red-400 mb-1">{{ channel.focus }}</p>
            <p class="text-xs text-gray-500">Level: {{ channel.level }}</p>
          </a>
        </div>
      </section>

      <!-- Study Tips -->
      <section class="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          Study Tips from Experts
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Master the Mathematics</h4>
                <p class="text-sm text-gray-400">Physics is expressed in math. Don't skimp on calculus, linear algebra, and differential equations.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Work Problems</h4>
                <p class="text-sm text-gray-400">Physics is learned by doing, not reading. Work through every problem you can find.</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Develop Physical Intuition</h4>
                <p class="text-sm text-gray-400">Always ask "what does this mean physically?" Connect equations to real phenomena.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-purple-400 font-bold">4</span>
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Use Multiple Resources</h4>
                <p class="text-sm text-gray-400">Different explanations work for different people. Find what clicks for you.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-purple-500/20">
          <p class="text-gray-400 italic">"What I cannot create, I do not understand." — Richard Feynman</p>
        </div>
      </section>

      <!-- Footer Navigation -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/science" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>
        
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <a href="https://www.goodtheorist.science/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            Gerard 't Hooft's Guide
          </a>
          <span class="text-gray-700">•</span>
          <a href="http://www.damtp.cam.ac.uk/user/tong/teaching.html" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            David Tong's Lectures
          </a>
          <span class="text-gray-700">•</span>
          <a href="https://ocw.mit.edu/courses/physics/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            MIT OCW Physics
          </a>
          <span class="text-gray-700">•</span>
          <a href="https://www.feynmanlectures.caltech.edu/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            Feynman Lectures
          </a>
          <span class="text-gray-700">•</span>
          <a href="https://theoreticalminimum.com/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            Theoretical Minimum
          </a>
          <span class="text-gray-700">•</span>
          <a href="https://knzhou.github.io/" target="_blank" class="text-gray-500 hover:text-purple-400 transition-colors">
            Kevin Zhou's Handouts
          </a>
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
