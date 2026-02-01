<script setup lang="ts">
useHead({
  title: 'Mathematics - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master mathematics from K-12 to PhD research with 5000+ curated resources. Free textbooks, MIT/Harvard courses, problem solving platforms, competitions, and research databases covering 100+ countries.' }
  ]
})

// Hero Statistics
const stats = [
  { label: 'Active Mathematicians', value: '50,000+', icon: 'users' },
  { label: 'Annual Papers', value: '100,000+', icon: 'file-text' },
  { label: 'IMO Countries', value: '100+', icon: 'globe' },
  { label: 'Resources', value: '5000+', icon: 'book-open' }
]

// Featured Resources
const featuredResources = [
  { 
    title: 'Khan Academy Math', 
    author: 'Khan Academy', 
    url: 'https://www.khanacademy.org/math', 
    desc: 'Complete K-12 + college mathematics curriculum',
    type: 'Free Platform',
    level: 'All Levels'
  },
  { 
    title: 'MIT OCW Mathematics', 
    author: 'MIT', 
    url: 'https://ocw.mit.edu/courses/mathematics/', 
    desc: 'Undergraduate and graduate courses with full materials',
    type: 'University Courses',
    level: 'UG/Grad'
  },
  { 
    title: 'Wolfram MathWorld', 
    author: 'Wolfram Research', 
    url: 'https://mathworld.wolfram.com/', 
    desc: '13,000+ entries, comprehensive math encyclopedia',
    type: 'Reference',
    level: 'All Levels'
  },
  { 
    title: '3Blue1Brown', 
    author: 'Grant Sanderson', 
    url: 'https://www.3blue1brown.com/', 
    desc: 'Visual math explanations with custom animations',
    type: 'Video Series',
    level: 'All Levels'
  },
  { 
    title: 'Art of Problem Solving', 
    author: 'AoPS', 
    url: 'https://artofproblemsolving.com/', 
    desc: 'Competition math, online school, community',
    type: 'Competition Math',
    level: 'K-12/UG'
  },
  { 
    title: 'Paul\'s Online Math Notes', 
    author: 'Lamar University', 
    url: 'https://tutorial.math.lamar.edu/', 
    desc: 'Excellent algebra, calculus, DE notes',
    type: 'Free Notes',
    level: 'UG'
  }
]

// Quick Links
const quickLinks = [
  { name: 'K-12 Math', url: '#k12', icon: 'school', count: 200 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 50 },
  { name: 'Calculus', url: '#calculus', icon: 'trending-up', count: 80 },
  { name: 'Linear Algebra', url: '#linear', icon: 'grid', count: 60 },
  { name: 'Competitions', url: '#competitions', icon: 'award', count: 100 },
  { name: 'Olympiads', url: '#olympiads', icon: 'trophy', count: 30 },
  { name: 'Problem Solving', url: '#problems', icon: 'target', count: 150 },
  { name: 'Software', url: '#software', icon: 'code', count: 40 },
  { name: 'Research', url: '#research', icon: 'microscope', count: 80 },
  { name: 'History', url: '#history', icon: 'clock', count: 40 }
]

// K-12 Resources
const k12Resources = [
  { title: 'Khan Academy Math', url: 'https://www.khanacademy.org/math', provider: 'Khan Academy', type: 'Complete Curriculum', level: 'K-12+' },
  { title: 'Brilliant Math', url: 'https://brilliant.org/courses/math/', provider: 'Brilliant', type: 'Interactive Learning', level: 'All' },
  { title: 'IXL Math', url: 'https://www.ixl.com/math', provider: 'IXL', type: 'Practice Platform', level: 'K-12' },
  { title: 'Desmos Graphing Calculator', url: 'https://www.desmos.com/calculator', provider: 'Desmos', type: 'Graphing Tool', level: 'All' },
  { title: 'GeoGebra', url: 'https://www.geogebra.org/', provider: 'GeoGebra', type: 'Math Software', level: 'K-12/UG' },
  { title: 'Math is Fun', url: 'https://www.mathsisfun.com/', provider: 'MathsIsFun', type: 'Tutorials', level: 'K-8' },
  { title: 'Brilliant Elementary', url: 'https://brilliant.org/', provider: 'Brilliant', type: 'Interactive', level: 'K-5' },
  { title: 'PatrickJMT', url: 'https://patrickjmt.com/', provider: 'PatrickJMT', type: 'Video Lessons', level: 'High School' },
  { title: 'Math Antics', url: 'https://www.mathantics.com/', provider: 'Math Antics', type: 'Video Lessons', level: 'K-8' },
  { title: 'Prodigy Math', url: 'https://www.prodigygame.com/', provider: 'Prodigy', type: 'Game-based', level: 'K-8' },
  { title: 'Cool Math Games', url: 'https://www.coolmathgames.com/', provider: 'Coolmath', type: 'Educational Games', level: 'K-12' },
  { title: 'Math Playground', url: 'https://www.mathplayground.com/', provider: 'Math Playground', type: 'Interactive Games', level: 'K-6' }
]

// Free Textbooks
const textbooksBeginner = [
  { title: 'OpenStax Elementary Algebra', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/elementary-algebra', type: 'FREE PDF' },
  { title: 'OpenStax Intermediate Algebra', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/intermediate-algebra-2e', type: 'FREE PDF' },
  { title: 'OpenStax College Algebra', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/college-algebra', type: 'FREE PDF' },
  { title: 'Calculus Made Easy', author: 'Silvanus Thompson', url: 'http://calculusmadeeasy.org/', type: 'FREE Classic' },
  { title: 'Precalculus - Stitz-Zeager', author: 'Stitz & Zeager', url: 'https://www.stitz-zeager.com/', type: 'FREE PDF' }
]

const textbooksIntermediate = [
  { title: 'OpenStax Calculus Vol 1-3', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/calculus-volume-1', type: 'FREE PDF' },
  { title: 'OpenStax Statistics', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/introductory-statistics', type: 'FREE PDF' },
  { title: 'Linear Algebra - Hefferon', author: 'Jim Hefferon', url: 'http://joshua.smcvt.edu/linearalgebra/', type: 'FREE PDF' },
  { title: 'Paul\'s Algebra Notes', author: 'Paul Dawkins (Lamar)', url: 'https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx', type: 'FREE WEB' },
  { title: 'Paul\'s Calculus I Notes', author: 'Paul Dawkins (Lamar)', url: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx', type: 'FREE WEB' },
  { title: 'Paul\'s Calculus II Notes', author: 'Paul Dawkins (Lamar)', url: 'https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx', type: 'FREE WEB' },
  { title: 'Paul\'s Calculus III Notes', author: 'Paul Dawkins (Lamar)', url: 'https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx', type: 'FREE WEB' }
]

const textbooksAdvanced = [
  { title: 'Interactive Linear Algebra', author: 'Georgia Tech', url: 'https://textbooks.math.gatech.edu/ila/', type: 'FREE WEB' },
  { title: 'Immersive Math', author: 'Various', url: 'http://immersivemath.com/ila/index.html', type: 'FREE Interactive' },
  { title: 'AIM Approved Textbooks', author: 'Various', url: 'https://aimath.org/textbooks/approved-textbooks/', type: 'FREE List' },
  { title: 'Abstract Algebra', author: 'Judson (Thomas)', url: 'http://abstract.ups.edu/', type: 'FREE PDF' },
  { title: 'Book of Proof', author: 'Richard Hammack', url: 'https://www.people.vcu.edu/~rhammack/BookOfProof/', type: 'FREE PDF' }
]

// Calculus Resources
const calculusResources = [
  { name: 'MIT 18.01 Single Variable Calculus', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/', desc: 'OCW Scholar - David Jerison', platform: 'MIT OCW' },
  { name: 'MIT 18.02 Multivariable Calculus', url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/', desc: 'OCW Scholar - Denis Auroux', platform: 'MIT OCW' },
  { name: 'MIT 18.03 Differential Equations', url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/', desc: 'OCW Scholar - Arthur Mattuck', platform: 'MIT OCW' },
  { name: '3Blue1Brown Essence of Calculus', url: 'https://www.3blue1brown.com/topics/calculus', desc: '12 video series, visual approach', platform: 'YouTube' },
  { name: 'Professor Leonard Calculus', url: 'https://www.youtube.com/c/ProfessorLeonard', desc: 'Full lecture series', platform: 'YouTube' },
  { name: 'Calculus.org', url: 'http://calculus.org/', desc: 'Problems and solutions', platform: 'Website' },
  { name: 'Integral Calculator', url: 'https://www.integral-calculator.com/', desc: 'Step-by-step integration', platform: 'Tool' },
  { name: 'Derivative Calculator', url: 'https://www.derivative-calculator.net/', desc: 'Step-by-step derivatives', platform: 'Tool' },
  { name: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', desc: 'Complete courses', platform: 'Khan Academy' },
  { name: 'Harvard Math 1a', url: 'https://people.math.harvard.edu/~ctm/home/text/class/harvard/1a/1a.pdf', desc: 'Benedict Gross notes', platform: 'Harvard' }
]

// Linear Algebra Resources
const linearAlgebraResources = [
  { name: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', desc: 'Gilbert Strang - Classic course', platform: 'MIT OCW' },
  { name: '3Blue1Brown Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra', desc: 'Essence of LA - Visual series', platform: 'YouTube' },
  { name: 'Interactive Linear Algebra', url: 'https://textbooks.math.gatech.edu/ila/', desc: 'Georgia Tech textbook', platform: 'Web' },
  { name: 'Immersive Math', url: 'http://immersivemath.com/ila/index.html', desc: 'Interactive with graphics', platform: 'Web' },
  { name: 'Gilbert Strang\'s Homepage', url: 'http://math.mit.edu/~gs/', desc: 'Books, lectures, more', platform: 'MIT' },
  { name: 'Linear Algebra - Hefferon', url: 'http://joshua.smcvt.edu/linearalgebra/', desc: 'Free textbook with exercises', platform: 'Web' },
  { name: 'Khan Academy Linear Algebra', url: 'https://www.khanacademy.org/math/linear-algebra', desc: 'Complete course', platform: 'Khan Academy' },
  { name: 'Coding the Matrix', url: 'http://codingthematrix.com/', desc: 'Philip Klein, with Python', platform: 'Book/Course' }
]

// Problem Solving Platforms
const problemResources = [
  { name: 'Project Euler', url: 'https://projecteuler.net/', desc: '800+ computational problems', type: 'Programming/Math' },
  { name: 'Brilliant.org', url: 'https://brilliant.org/', desc: 'Interactive problem solving', type: 'All Levels' },
  { name: 'Art of Problem Solving', url: 'https://artofproblemsolving.com/', desc: 'Competition community', type: 'Competition' },
  { name: 'Wolfram Problem Generator', url: 'https://www.wolframalpha.com/problem-generator/', desc: 'Unlimited practice problems', type: 'Practice' },
  { name: 'Math StackExchange', url: 'https://math.stackexchange.com/', desc: 'Q&A community (1M+ questions)', type: 'Forum' },
  { name: 'MathOverflow', url: 'https://mathoverflow.net/', desc: 'Research-level Q&A', type: 'Research Forum' },
  { name: 'Brilliant Community', url: 'https://brilliant.org/community/', desc: 'User-contributed problems', type: 'Community' },
  { name: 'Alcumus (AoPS)', url: 'https://artofproblemsolving.com/alcumus', desc: 'Adaptive learning system', type: 'Adaptive' }
]

// Competition Resources
const competitionResources = [
  { name: 'AMC 8/10/12', url: 'https://www.maa.org/math-competitions/amc-competitions', desc: 'American Mathematics Competitions', level: 'Middle/High School' },
  { name: 'AIME', url: 'https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime', desc: 'American Invitational Math Exam', level: 'High School' },
  { name: 'USAMO/USAJMO', url: 'https://www.maa.org/math-competitions/usamo-usajmo', desc: 'USA Mathematical Olympiad', level: 'Elite HS' },
  { name: 'Putnam Competition', url: 'https://www.maa.org/putnam-competition', desc: 'Undergraduate, most prestigious', level: 'UG' },
  { name: 'Math Kangaroo', url: 'https://www.mathkangaroo.org/', desc: '70+ countries, fun problems', level: 'All' },
  { name: 'ARML', url: 'https://www.arml.com/', desc: 'American Regions Math League', level: 'HS' },
  { name: 'MATHCOUNTS', url: 'https://www.mathcounts.org/', desc: 'USA Middle School', level: 'Middle School' },
  { name: 'UKMT', url: 'https://www.ukmt.org.uk/', desc: 'UK Mathematics Trust', level: 'UK All' },
  { name: 'AMC Preparation', url: 'https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions', desc: 'Past problems archive', level: 'All' }
]

// Olympiad Resources
const olympiadResources = [
  { name: 'IMO Official', url: 'https://www.imo-official.org/', desc: 'International Math Olympiad', scope: 'International' },
  { name: 'IMO Problems Archive', url: 'https://artofproblemsolving.com/wiki/index.php/IMO_Problems_and_Solutions', desc: 'All IMO problems', scope: 'Archive' },
  { name: 'EGMO', url: 'https://www.egmo.org/', desc: 'European Girls\' Math Olympiad', scope: 'Europe' },
  { name: 'APMO', url: 'https://www.apmo-official.org/', desc: 'Asian Pacific Math Olympiad', scope: 'Asia-Pacific' },
  { name: 'IMO Shortlist', url: 'https://artofproblemsolving.com/community/c3223_imo_shortlist', desc: 'Practice problems', scope: 'Archive' },
  { name: 'IMO Compendium', url: 'https://www.imocompendium.com/', desc: 'Problems and solutions', scope: 'Archive' }
]

// Olympiad Training Programs
const olympiadPrograms = [
  { name: 'Ross Mathematics Program', url: 'https://rossprogram.org/', location: 'USA', focus: 'Number Theory', cost: 'Free' },
  { name: 'PROMYS', url: 'https://promys.org/', location: 'USA', focus: 'Number Theory', cost: 'Free/Scholarships' },
  { name: 'Canada/USA Mathcamp', url: 'https://www.mathcamp.org/', location: 'USA', focus: 'Various', cost: 'Sliding Scale' },
  { name: 'HCSSiM', url: 'https://www.hcssim.org/', location: 'USA', focus: 'Various', cost: 'Need-based aid' },
  { name: 'AwesomeMath', url: 'https://www.awesomemath.org/', location: 'Online', focus: 'Competition Prep', cost: 'Paid' },
  { name: 'Olympiad Number Theory', url: 'https://artofproblemsolving.com/articles/files/OlympiadNumberTheory.pdf', location: 'Online', focus: 'Number Theory', cost: 'Free' }
]

// Mathematical Software
const mathSoftware = [
  { name: 'SageMath', url: 'https://www.sagemath.org/', type: 'CAS', cost: 'Free', platform: 'All' },
  { name: 'Maxima', url: 'https://maxima.sourceforge.net/', type: 'CAS', cost: 'Free', platform: 'All' },
  { name: 'SymPy', url: 'https://www.sympy.org/', type: 'CAS', cost: 'Free', platform: 'Python' },
  { name: 'WolframAlpha', url: 'https://www.wolframalpha.com/', type: 'Computational', cost: 'Freemium', platform: 'Web' },
  { name: 'GeoGebra', url: 'https://www.geogebra.org/', type: 'Geometry', cost: 'Free', platform: 'All' },
  { name: 'Desmos', url: 'https://www.desmos.com/', type: 'Graphing', cost: 'Free', platform: 'Web' },
  { name: 'R / RStudio', url: 'https://www.r-project.org/', type: 'Statistics', cost: 'Free', platform: 'All' },
  { name: 'Julia', url: 'https://julialang.org/', type: 'Programming', cost: 'Free', platform: 'All' },
  { name: 'GNU Octave', url: 'https://octave.org/', type: 'MATLAB Alternative', cost: 'Free', platform: 'All' },
  { name: 'Jupyter Notebook', url: 'https://jupyter.org/', type: 'Computing', cost: 'Free', platform: 'All' }
]

// Typesetting Tools
const typesettingTools = [
  { name: 'LaTeX Project', url: 'https://www.latex-project.org/', desc: 'Mathematical typesetting standard' },
  { name: 'Overleaf', url: 'https://www.overleaf.com/', desc: 'Online LaTeX editor with collaboration' },
  { name: 'TeXShop', url: 'https://pages.uoregon.edu/koch/texshop/', desc: 'LaTeX IDE for Mac' },
  { name: 'TeXstudio', url: 'https://www.texstudio.org/', desc: 'Cross-platform LaTeX editor' },
  { name: 'MathJax', url: 'https://www.mathjax.org/', desc: 'Web math rendering' },
  { name: 'KaTeX', url: 'https://katex.org/', desc: 'Fast web math rendering' }
]

// Advanced & Research Resources
const advancedResources = [
  { name: 'Harvard Math 55', url: 'https://legacy-www.math.harvard.edu/archive/55b_fall_09/index.html', desc: 'Honors advanced calculus' },
  { name: 'Stacks Project', url: 'https://stacks.math.columbia.edu/', desc: 'Algebraic geometry reference' },
  { name: 'Kerodon', url: 'https://kerodon.net/', desc: 'Higher category theory' },
  { name: 'nLab', url: 'https://ncatlab.org/nlab/show/HomePage', desc: 'Category theory wiki' },
  { name: 'MIT 18.100A Real Analysis', url: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/', desc: 'Rigorous calculus' },
  { name: 'MIT 18.901 Algebraic Topology', url: 'https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/', desc: 'Topology course' }
]

// Research Databases
const researchDatabases = [
  { name: 'arXiv Mathematics', url: 'https://arxiv.org/archive/math', desc: '150,000+ preprints' },
  { name: 'MathSciNet', url: 'https://mathscinet.ams.org/', desc: 'Mathematical Reviews (subscription)', institution: 'AMS' },
  { name: 'zbMATH Open', url: 'https://zbmath.org/', desc: 'Mathematical abstracting', institution: 'EMS' },
  { name: 'JSTOR', url: 'https://www.jstor.org/subject/mathematics', desc: 'Journal archives', institution: 'Various' },
  { name: 'Project Euclid', url: 'https://projecteuclid.org/', desc: 'Math & statistics journals', institution: 'Cornell' },
  { name: 'EuDML', url: 'https://eudml.org/', desc: 'European Digital Math Library', institution: 'EU' }
]

// Major Awards
const majorAwards = [
  { name: 'Fields Medal', year: 'Every 4 years', winners: '4 under 40', prestige: 'Highest honor', url: 'https://www.mathunion.org/imu-awards/fields-medal' },
  { name: 'Abel Prize', year: 'Annual', winners: '1', prestige: 'Lifetime achievement', url: 'https://abelprize.no/' },
  { name: 'Wolf Prize', year: 'Annual', winners: '1', prestige: 'Major contribution', url: 'https://wolffund.org.il/' },
  { name: 'Chern Medal', year: 'Every 4 years', winners: '1', prestige: 'Outstanding achievement', url: 'https://www.mathunion.org/imu-awards/chern-medal' }
]

// Millennium Prize Problems
const millenniumProblems = [
  { name: 'Riemann Hypothesis', topic: 'Number Theory', status: 'Open', prize: '$1M', desc: 'Distribution of primes' },
  { name: 'P vs NP', topic: 'Complexity', status: 'Open', prize: '$1M', desc: 'Computational complexity' },
  { name: 'Navier-Stokes', topic: 'PDEs', status: 'Open', prize: '$1M', desc: 'Fluid dynamics' },
  { name: 'Yang-Mills Mass Gap', topic: 'Physics', status: 'Open', prize: '$1M', desc: 'Quantum field theory' },
  { name: 'Hodge Conjecture', topic: 'Algebraic Geometry', status: 'Open', prize: '$1M', desc: 'Topology of varieties' },
  { name: 'BSD Conjecture', topic: 'Elliptic Curves', status: 'Open', prize: '$1M', desc: 'L-functions' },
  { name: 'Poincaré Conjecture', topic: 'Topology', status: 'SOLVED 2003', prize: 'Perelman', desc: 'By Grigori Perelman' }
]

// Historical Mathematicians
const historicalMathematicians = [
  { name: 'Euclid', years: '~300 BCE', contribution: 'Elements, geometry foundation', origin: 'Greece' },
  { name: 'Archimedes', years: '287-212 BCE', contribution: 'Calculus precursors, π', origin: 'Greece' },
  { name: 'Isaac Newton', years: '1643-1727', contribution: 'Calculus, physics', origin: 'England' },
  { name: 'Leonhard Euler', years: '1707-1783', contribution: 'e^(iπ)+1=0, prolific', origin: 'Switzerland' },
  { name: 'Carl Gauss', years: '1777-1855', contribution: 'Prince of Mathematicians', origin: 'Germany' },
  { name: 'Évariste Galois', years: '1811-1832', contribution: 'Group theory', origin: 'France' },
  { name: 'Bernhard Riemann', years: '1826-1866', contribution: 'Riemann hypothesis', origin: 'Germany' }
]

// Modern Mathematicians
const modernMathematicians = [
  { name: 'Srinivasa Ramanujan', years: '1887-1920', contribution: 'Infinite series, notebooks', origin: 'India' },
  { name: 'David Hilbert', years: '1862-1943', contribution: '23 problems', origin: 'Germany' },
  { name: 'Kurt Gödel', years: '1906-1978', contribution: 'Incompleteness theorems', origin: 'Austria' },
  { name: 'Alexander Grothendieck', years: '1928-2014', contribution: 'Algebraic geometry', origin: 'France' },
  { name: 'Andrew Wiles', years: '1953-', contribution: 'Fermat\'s Last Theorem', origin: 'UK' },
  { name: 'Grigori Perelman', years: '1966-', contribution: 'Poincaré conjecture', origin: 'Russia' }
]

// Contemporary Mathematicians
const contemporaryMathematicians = [
  { name: 'Terence Tao', years: '1975-', contribution: 'Fields 2006, polymath', origin: 'Australia/USA', url: 'https://www.math.ucla.edu/~tao/' },
  { name: 'Maryam Mirzakhani', years: '1977-2017', contribution: 'Fields 2014, first woman', origin: 'Iran/USA', url: 'https://www.mathunion.org/outreach/celebrating-mirzakhani' },
  { name: 'Karen Uhlenbeck', years: '1942-', contribution: 'Abel 2019, first woman', origin: 'USA', url: 'https://www.ias.edu/scholars/karen-uhlenbeck' },
  { name: 'Maryna Viazovska', years: '1984-', contribution: 'Fields 2022, sphere packing', origin: 'Ukraine', url: 'https://people.epfl.ch/maryna.viazovska' }
]

// Mathematical Organizations
const mathOrganizations = [
  { name: 'International Mathematical Union', abbr: 'IMU', url: 'https://www.mathunion.org/', scope: 'International' },
  { name: 'American Mathematical Society', abbr: 'AMS', url: 'https://www.ams.org/', scope: 'USA' },
  { name: 'Mathematical Association of America', abbr: 'MAA', url: 'https://www.maa.org/', scope: 'USA' },
  { name: 'European Mathematical Society', abbr: 'EMS', url: 'https://euromathsoc.org/', scope: 'Europe' },
  { name: 'London Mathematical Society', abbr: 'LMS', url: 'https://www.lms.ac.uk/', scope: 'UK' },
  { name: 'Société Mathématique de France', abbr: 'SMF', url: 'https://smf.emath.fr/', scope: 'France' }
]

// Women in Mathematics
const womenInMath = [
  { name: 'Association for Women in Mathematics', url: 'https://awm-math.org/', region: 'USA' },
  { name: 'European Women in Mathematics', url: 'https://www.europeanwomeninmaths.org/', region: 'Europe' },
  { name: 'IMU Committee for Women', url: 'https://www.mathunion.org/cwm', region: 'International' },
  { name: 'Math Prize for Girls', url: 'https://mathprize.atfoundation.org/', region: 'USA' },
  { name: 'EGMO', url: 'https://www.egmo.org/', region: 'Europe' }
]

// Research Institutes
const researchInstitutes = [
  { name: 'Institute for Advanced Study', location: 'Princeton, USA', url: 'https://www.ias.edu/math' },
  { name: 'SLMath (MSRI)', location: 'Berkeley, USA', url: 'https://www.slmath.org/' },
  { name: 'Fields Institute', location: 'Toronto, Canada', url: 'https://www.fields.utoronto.ca/' },
  { name: 'Isaac Newton Institute', location: 'Cambridge, UK', url: 'https://www.newton.ac.uk/' },
  { name: 'IHÉS', location: 'France', url: 'https://www.ihes.fr/en/' },
  { name: 'Max Planck Institute', location: 'Bonn, Germany', url: 'https://www.mpim-bonn.mpg.de/' }
]

// YouTube Channels
const youtubeChannels = [
  { name: '3Blue1Brown', url: 'https://www.youtube.com/c/3blue1brown', desc: 'Visual math animations', subs: '6M+' },
  { name: 'Numberphile', url: 'https://www.youtube.com/c/Numberphile', desc: 'Recreational mathematics', subs: '4M+' },
  { name: 'Mathologer', url: 'https://www.youtube.com/c/Mathologer', desc: 'Accessible advanced math', subs: '1M+' },
  { name: 'PatrickJMT', url: 'https://www.youtube.com/c/patrickjmt', desc: 'Calculus tutorials', subs: '1M+' },
  { name: 'Professor Leonard', url: 'https://www.youtube.com/c/ProfessorLeonard', desc: 'Full lecture series', subs: '1M+' },
  { name: 'Stand-up Maths', url: 'https://www.youtube.com/c/standupmaths', desc: 'Fun math explanations', subs: '1M+' },
  { name: 'Khan Academy', url: 'https://www.youtube.com/c/khanacademy', desc: 'Complete curriculum', subs: '8M+' }
]

// Online Course Platforms
const coursePlatforms = [
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/math', courses: 'Complete K-12+', cost: 'Free' },
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/mathematics/', courses: 'UG/Graduate', cost: 'Free' },
  { name: 'Coursera', url: 'https://www.coursera.org/browse/math-and-logic', courses: 'University partnerships', cost: 'Audit Free' },
  { name: 'edX', url: 'https://www.edx.org/learn/math', courses: 'Harvard, MIT, etc.', cost: 'Audit Free' },
  { name: 'Brilliant', url: 'https://brilliant.org/', courses: 'Interactive courses', cost: 'Freemium' },
  { name: 'Brilliant.org', url: 'https://brilliant.org/', courses: 'Problem-solving', cost: 'Subscription' }
]

// Mobile Apps
const mobileApps = [
  { name: 'Photomath', platform: 'iOS/Android', desc: 'Camera calculator', cost: 'Freemium' },
  { name: 'Microsoft Math Solver', platform: 'iOS/Android', desc: 'AI-powered solver', cost: 'Free' },
  { name: 'GeoGebra Apps', platform: 'All', desc: 'Graphing & geometry', cost: 'Free' },
  { name: 'Desmos', platform: 'iOS/Android/Web', desc: 'Graphing calculator', cost: 'Free' },
  { name: 'WolframAlpha', platform: 'All', desc: 'Computational engine', cost: 'Paid' },
  { name: 'Brilliant App', platform: 'iOS/Android', desc: 'Interactive learning', cost: 'Subscription' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-space-950 to-indigo-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-blue-300">5000+ Global Mathematics Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mathematics
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master mathematics from K-12 to PhD research. Free textbooks, MIT/Harvard courses, 
            problem solving platforms, competitions, and research databases covering 100+ countries.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-blue-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ r.type }}</span>
              <span class="text-xs text-gray-500">{{ r.level }}</span>
            </div>
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-blue-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Course Platforms -->
      <section id="platforms" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Online Learning Platforms</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="p in coursePlatforms" :key="p.name" :href="p.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ p.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ p.name }}</h4>
            <p class="text-sm text-gray-500">{{ p.courses }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Mathematics</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
            <span class="text-xs text-gray-600">{{ r.level }}</span>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        
        <h3 class="text-xl font-semibold text-gray-300 mb-4">Beginner (Algebra, Precalculus)</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Intermediate (Calculus, Linear Algebra)</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="book in textbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Advanced (Proof, Abstract Algebra)</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="book in textbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Calculus -->
      <section id="calculus" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Calculus</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in calculusResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ r.platform }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Linear Algebra -->
      <section id="linear" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Linear Algebra</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in linearAlgebraResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ r.platform }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Problem Solving -->
      <section id="problems" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Problem Solving Platforms</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in problemResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Competitions -->
      <section id="competitions" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Math Competitions</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in competitionResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ r.level }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Olympiads -->
      <section id="olympiads" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mathematical Olympiads</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="r in olympiadResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ r.scope }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-yellow-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Summer Training Programs</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="p in olympiadPrograms" :key="p.name" 
               class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ p.cost }}</span>
              <span class="text-xs text-gray-500">{{ p.location }}</span>
            </div>
            <a :href="p.url" target="_blank" class="font-semibold text-white hover:text-yellow-400">{{ p.name }}</a>
            <p class="text-sm text-gray-500">{{ p.focus }}</p>
          </div>
        </div>
      </section>

      <!-- Software -->
      <section id="software" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mathematical Software</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="s in mathSoftware" :key="s.name" :href="s.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ s.type }}</span>
              <span class="text-xs text-gray-500">{{ s.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ s.name }}</h4>
            <p class="text-sm text-gray-500">{{ s.platform }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4 mt-8">Typesetting Tools</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="t in typesettingTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ t.name }}</h4>
            <p class="text-sm text-gray-500">{{ t.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Mobile Apps -->
      <section id="apps" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mobile Apps</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="app in mobileApps" :key="app.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ app.cost }}</span>
              <span class="text-xs text-gray-500">{{ app.platform }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ app.name }}</h4>
            <p class="text-sm text-gray-500">{{ app.desc }}</p>
          </div>
        </div>
      </section>

      <!-- YouTube Channels -->
      <section id="youtube" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">YouTube Channels</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="ch in youtubeChannels" :key="ch.name" :href="ch.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-gray-500">{{ ch.subs }} subscribers</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-red-400">{{ ch.name }}</h4>
            <p class="text-sm text-gray-500">{{ ch.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Advanced & Research -->
      <section id="research" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Advanced & Research Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="r in advancedResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-rose-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Research Databases</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="db in researchDatabases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-rose-400">{{ db.name }}</h4>
            <p class="text-sm text-gray-500">{{ db.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Awards -->
      <section id="awards" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Major Awards</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="award in majorAwards" :key="award.name" :href="award.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-yellow-400">{{ award.name }}</h4>
            <p class="text-sm text-gray-500">{{ award.year }}</p>
            <p class="text-sm text-gray-400">{{ award.prestige }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Millennium Prize Problems ($1M each)</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="prob in millenniumProblems" :key="prob.name" 
               class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ prob.topic }}</span>
              <span :class="['text-xs', prob.status === 'Open' ? 'text-red-400' : 'text-green-400']">{{ prob.status }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ prob.name }}</h4>
            <p class="text-sm text-gray-500">{{ prob.desc }}</p>
          </div>
        </div>
      </section>

      <!-- History -->
      <section id="history" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mathematicians in History</h2>
        
        <h3 class="text-xl font-semibold text-gray-300 mb-4">Historical Giants</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div v-for="m in historicalMathematicians" :key="m.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ m.years }}</span>
              <span class="text-xs text-gray-600">{{ m.origin }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ m.name }}</h4>
            <p class="text-sm text-gray-400">{{ m.contribution }}</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Modern Era</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div v-for="m in modernMathematicians" :key="m.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ m.years }}</span>
              <span class="text-xs text-gray-600">{{ m.origin }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ m.name }}</h4>
            <p class="text-sm text-gray-400">{{ m.contribution }}</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Contemporary Stars</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="m in contemporaryMathematicians" :key="m.name" :href="m.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ m.years }}</span>
              <span class="text-xs text-gray-600">{{ m.origin }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ m.name }}</h4>
            <p class="text-sm text-gray-400">{{ m.contribution }}</p>
          </a>
        </div>
      </section>

      <!-- Organizations -->
      <section id="organizations" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Mathematical Organizations</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="org in mathOrganizations" :key="org.name" :href="org.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ org.abbr }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-teal-400">{{ org.name }}</h4>
            <p class="text-sm text-gray-500">{{ org.scope }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Women in Mathematics</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="w in womenInMath" :key="w.name" :href="w.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ w.name }}</h4>
            <p class="text-sm text-gray-500">{{ w.region }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Research Institutes</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="inst in researchInstitutes" :key="inst.name" :href="inst.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ inst.name }}</h4>
            <p class="text-sm text-gray-500">{{ inst.location }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
        <p class="text-sm text-gray-500">5000+ resources curated for mathematics learners worldwide</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
