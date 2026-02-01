<script setup lang="ts">
useHead({
  title: 'Psychology - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master psychology from K-12 to graduate research with 2000+ curated resources. Free textbooks, courses from Harvard, Yale, Stanford, cognitive science, clinical resources, and research databases.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'Introduction to psychology, AP Psychology basics',
    color: 'rose',
    resources: 500,
    topics: ['Intro Psychology', 'AP Psychology', 'Developmental Basics', 'Social Psychology']
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'Major branches: cognitive, social, abnormal, personality',
    color: 'pink',
    resources: 800,
    topics: ['Cognitive Psychology', 'Abnormal Psychology', 'Personality', 'Research Methods']
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Clinical practice, neuroscience, psychometrics, PhD prep',
    color: 'purple',
    resources: 700,
    topics: ['Clinical Psychology', 'Neuropsychology', 'Psychometrics', 'Therapeutic Techniques']
  }
]

const featuredResources = [
  {
    title: 'American Psychological Association',
    author: 'APA',
    type: 'Official Organization',
    url: 'https://www.apa.org/',
    icon: 'building',
    description: 'Leading scientific and professional organization representing psychology in the US',
    level: 'All Levels'
  },
  {
    title: 'Psychology Today',
    author: 'Psychology Today',
    type: 'Articles & Directory',
    url: 'https://www.psychologytoday.com/',
    icon: 'newspaper',
    description: 'Popular psychology magazine with articles, blogs, and therapist directory',
    level: 'All Levels'
  },
  {
    title: 'Noba Project',
    author: 'Noba',
    type: 'Free Textbooks',
    url: 'https://nobaproject.com/',
    icon: 'book',
    description: 'Free peer-reviewed psychology textbooks and educational modules',
    level: 'All Levels'
  },
  {
    title: 'Simply Psychology',
    author: 'Simply Psychology',
    type: 'Educational Website',
    url: 'https://www.simplypsychology.org/',
    icon: 'graduation',
    description: 'Accessible psychology explanations and study guides for students',
    level: 'Beginner to Intermediate'
  },
  {
    title: 'Verywell Mind',
    author: 'Verywell',
    type: 'Health Resource',
    url: 'https://www.verywellmind.com/',
    icon: 'heart',
    description: 'Evidence-based mental health information and resources',
    level: 'All Levels'
  },
  {
    title: 'OpenStax Psychology',
    author: 'Rice University',
    type: 'Free Textbook',
    url: 'https://openstax.org/details/books/psychology',
    icon: 'book-open',
    description: 'Comprehensive free college-level psychology textbook',
    level: 'Beginner to Intermediate'
  }
]

const quickLinks = [
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 150 },
  { name: 'AP Psychology', url: '#ap', icon: 'award', count: 80 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 50 },
  { name: 'Clinical Psychology', url: '#clinical', icon: 'heart', count: 120 },
  { name: 'Cognitive Psychology', url: '#cognitive', icon: 'brain', count: 100 },
  { name: 'Databases', url: '#databases', icon: 'database', count: 40 },
  { name: 'Research & Journals', url: '#research', icon: 'microscope', count: 60 },
  { name: 'Professional Orgs', url: '#professional', icon: 'users', count: 80 },
  { name: 'Mental Health', url: '#mentalhealth', icon: 'heart', count: 50 },
  { name: 'Online Learning', url: '#online', icon: 'video', count: 40 }
]

// ============================================
// K-12 SCHOOL LEVEL RESOURCES
// ============================================

const k12Resources = [
  { title: 'Crash Course Psychology', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6', provider: 'Crash Course', type: 'Video Series', level: 'K-12', desc: '40-episode comprehensive video series on psychology basics' },
  { title: 'SciShow Psych', url: 'https://www.youtube.com/scishowpsych', provider: 'SciShow', type: 'YouTube Channel', level: 'Middle/HS', desc: 'Engaging psychology science videos for students' },
  { title: 'Psychology for Kids', url: 'https://kids.frontiersin.org/collections/psychology', provider: 'Frontiers for Young Minds', type: 'Articles', level: 'Elementary', desc: 'Psychology articles written for young readers' },
  { title: 'BrainPop Psychology', url: 'https://www.brainpop.com/health/', provider: 'BrainPop', type: 'Interactive', level: 'K-8', desc: 'Animated educational videos on psychology topics' },
  { title: 'Psychology Games & Activities', url: 'https://www.apa.org/ed/precollege/psn', provider: 'APA', type: 'Activities', level: 'K-12', desc: 'Classroom activities from American Psychological Association' },
  { title: 'Exploratorium Mind', url: 'https://www.exploratorium.edu/mind', provider: 'Exploratorium', type: 'Interactive', level: 'All Ages', desc: 'Interactive exhibits and activities about the mind' },
  { title: 'Psychology Experiments for Kids', url: 'https://www.sciencebuddies.org/science-fair-projects/intro-psychology', provider: 'Science Buddies', type: 'Projects', level: 'K-12', desc: 'Hands-on psychology science fair projects' },
  { title: 'PBS Learning Media Psychology', url: 'https://pbslearningmedia.org/subject/professional-development/psychology/', provider: 'PBS', type: 'Video Lessons', level: 'K-12', desc: 'Educational psychology videos and lesson plans' },
  // NEW K-12 RESOURCES
  { title: 'APA Psychology Topics for Students', url: 'https://www.apa.org/topics', provider: 'APA', type: 'Educational Resource', level: 'K-12', desc: 'Comprehensive psychology topics curated for students by the American Psychological Association' },
  { title: 'Noba Project (Free Textbooks)', url: 'https://nobaproject.com/', provider: 'Noba', type: 'Free Textbook', level: 'High School', desc: 'Free peer-reviewed psychology textbooks and educational modules' },
  { title: 'Simply Psychology', url: 'https://www.simplypsychology.org/', provider: 'Simply Psychology', type: 'Educational Website', level: 'K-12', desc: 'Accessible psychology explanations and study guides for students' },
  { title: 'Explorable Psychology', url: 'https://explorable.com/psychology', provider: 'Explorable', type: 'Articles', level: 'K-12', desc: 'Psychology articles, research methods, and experiments explained simply' },
  { title: 'Dana Foundation Brain Resources', url: 'https://dana.org/', provider: 'Dana Foundation', type: 'Educational Resource', level: 'K-12', desc: 'Brain research and neuroscience resources for educators and students' },
  { title: 'BrainFacts.org (SfN)', url: 'https://www.brainfacts.org/', provider: 'Society for Neuroscience', type: 'Education', desc: 'Neuroscience and cognitive brain science educational resources' },
  { title: 'NIMH Teen Mental Health', url: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health', provider: 'NIMH', type: 'Mental Health', desc: 'Teen mental health resources from the National Institute of Mental Health' },
  { title: 'Mental Health America Youth', url: 'https://www.mhanational.org/youth', provider: 'MHA', type: 'Mental Health', desc: 'Youth mental health resources and screening tools' },
  { title: 'Headspace for Educators', url: 'https://www.headspace.com/educators', provider: 'Headspace', type: 'Wellness App', desc: 'Free mindfulness and meditation resources for educators and students' },
  { title: 'Mind.org.uk Young People', url: 'https://www.mind.org.uk/information-support/for-children-and-young-people/', provider: 'Mind UK', type: 'Mental Health', desc: 'Mental health resources for young people from UK charity' },
  { title: 'Social Psychology Network Teaching Resources', url: 'https://teachpsych.org/', provider: 'Social Psychology Network', type: 'Teaching Resources', desc: 'Teaching resources and materials for social psychology educators' },
  { title: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/', provider: 'CDC', type: 'Reference', desc: 'Official developmental milestones for children from birth to 5 years' },
  { title: 'Zero to Three', url: 'https://www.zerotothree.org/', provider: 'Zero to Three', type: 'Organization', desc: 'Early childhood development resources for professionals and parents' },
  { title: 'Child Development Institute', url: 'https://childdevelopmentinfo.com/', provider: 'Child Development Institute', type: 'Educational Resource', desc: 'Information on child development, psychology, and parenting' }
]

// ============================================
// AP PSYCHOLOGY RESOURCES
// ============================================

const apPsychologyResources = [
  { title: 'AP Psychology Course', url: 'https://apstudents.collegeboard.org/courses/ap-psychology', provider: 'College Board', type: 'AP Course', desc: 'Official AP Psychology course and exam information' },
  { title: 'AP Psychology Study Guide', url: 'https://www.khanacademy.org/test-prep/ap-psychology', provider: 'Khan Academy', type: 'Free Prep', desc: 'Comprehensive AP Psychology test preparation' },
  { title: 'The Psych Files', url: 'https://www.thepsychfiles.com/', provider: 'Michael Britt', type: 'Podcast', desc: 'Psychology podcast covering AP curriculum topics' },
  { title: 'Unit 5 Psychology', url: 'https://www.youtube.com/c/Unit5Psychology', provider: 'Unit 5', type: 'Video', desc: 'AP Psychology video lessons and reviews' },
  { title: 'AP Psychology Review Games', url: 'https://www.cram.com/subjects/ap-psychology', provider: 'Cram.com', type: 'Flashcards', desc: 'AP Psychology flashcards and study games' },
  { title: 'Princeton Review AP Psychology', url: 'https://www.princetonreview.com/college/ap-psychology', provider: 'Princeton Review', type: 'Test Prep', desc: 'AP Psychology practice tests and strategies' }
]

// ============================================
// FREE TEXTBOOKS BY LEVEL
// ============================================

const freeTextbooksBeginner = [
  { title: 'OpenStax Psychology', author: 'OpenStax/Rice University', url: 'https://openstax.org/details/books/psychology', type: 'FREE PDF', desc: 'Comprehensive introductory psychology textbook' },
  { title: 'Psychology 2e', author: 'OpenStax', url: 'https://openstax.org/details/books/psychology-2e', type: 'FREE PDF', desc: 'Updated edition with latest research' },
  { title: 'Noba Psychology', author: 'Noba Project', url: 'https://nobaproject.com/', type: 'FREE WEB', desc: 'Modular peer-reviewed psychology content' },
  { title: 'Introduction to Psychology', author: 'Charles Stangor', url: 'https://www.saylor.org/site/textbooks/Introduction%20to%20Psychology.pdf', type: 'FREE PDF', desc: 'Introductory psychology course textbook' }
]

const freeTextbooksIntermediate = [
  { title: 'Cognitive Psychology', author: 'Marco Cusumano', url: 'https://www.saylor.org/site/wp-content/uploads/2012/06/PSYCH303-Cognitive-Psychology.pdf', type: 'FREE PDF', desc: 'Intermediate cognitive psychology text' },
  { title: 'Research Methods in Psychology', author: 'Paul Price', url: 'https://www.saylor.org/site/textbooks/Research%20Methods%20in%20Psychology.pdf', type: 'FREE PDF', desc: 'Comprehensive research methods guide' },
  { title: 'Learning and Memory', author: 'Mark Gluck', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'Reference', desc: 'Learning and memory processes textbook' },
  { title: 'Social Psychology', author: 'Multiple Authors', url: 'https://nobaproject.com/textbooks/social-psychology', type: 'FREE WEB', desc: 'Social psychology comprehensive coverage' }
]

const freeTextbooksAdvanced = [
  { title: 'Abnormal Psychology', author: 'University of Minnesota', url: 'https://open.lib.umn.edu/abnormalpsychology/', type: 'FREE WEB', desc: 'Advanced abnormal psychology text' },
  { title: 'Clinical Psychology', author: 'Various', url: 'https://nobaproject.com/textbooks/clinical-psychology', type: 'FREE WEB', desc: 'Clinical psychology theory and practice' },
  { title: 'Psychological Testing', author: 'Marie J. C. Forgeard', url: 'https://nobaproject.com/modules/psychological-testing', type: 'FREE MODULE', desc: 'Psychometrics and testing principles' },
  { title: 'Neuropsychology', author: 'Various', url: 'https://nobaproject.com/textbooks/neuropsychology', type: 'FREE WEB', desc: 'Brain-behavior relationships advanced text' }
]

// ============================================
// UNDERGRADUATE RESOURCES (NEW)
// ============================================

const undergraduateResources = [
  { title: 'Yale Introduction to Psychology (Coursera)', url: 'https://www.coursera.org/learn/introduction-psychology', provider: 'Yale University', type: 'Online Course', desc: 'Introduction to psychology course from Yale on Coursera platform' },
  { title: 'MIT OpenCourseWare Psychology', url: 'https://ocw.mit.edu/search/?d=Psychology', provider: 'MIT', type: 'Open Courseware', desc: 'Free MIT psychology course materials and lectures' },
  { title: 'Khan Academy MCAT Psychology', url: 'https://www.khanacademy.org/test-prep/mcat', provider: 'Khan Academy', type: 'Free Course', desc: 'Psychology and sociology content for MCAT preparation' },
  { title: 'OpenStax Psychology', url: 'https://openstax.org/details/books/psychology', provider: 'OpenStax', type: 'Free Textbook', desc: 'Comprehensive free college-level psychology textbook' },
  { title: 'CogSci Stack Exchange', url: 'https://cogsci.stackexchange.com/', provider: 'Stack Exchange', type: 'Q&A Forum', desc: 'Question and answer site for cognitive science professionals' },
  { title: 'Stanford Encyclopedia of Philosophy - Cognitive Science', url: 'https://plato.stanford.edu/entries/cognitive-science/', provider: 'Stanford', type: 'Encyclopedia', desc: 'Comprehensive cognitive science overview from Stanford' },
  { title: 'Research Methods in Psychology (WSU Open Textbook)', url: 'https://opentext.wsu.edu/carrcusi/', provider: 'Washington State University', type: 'Open Textbook', desc: 'Research methods in psychology open textbook' },
  { title: 'APA Style Guide', url: 'https://apastyle.apa.org/', provider: 'APA', type: 'Reference Guide', desc: 'Official APA style guide for academic writing in psychology' },
  { title: 'JASP Statistical Software', url: 'https://jasp-stats.org/', provider: 'University of Amsterdam', type: 'Software', desc: 'Free and open-source statistical software for psychology research' },
  { title: 'Personality Pedagogy', url: 'http://personalitypedagogy.net/', provider: 'Personality Pedagogy', type: 'Educational Resource', desc: 'Resources for teaching and learning about personality psychology' },
  { title: 'Psych Central', url: 'https://psychcentral.com/', provider: 'Psych Central', type: 'Health Resource', desc: 'Mental health information and psychology resources' }
]

// ============================================
// GRADUATE/SPECIALIZED RESOURCES (NEW)
// ============================================

const graduateResources = [
  { title: 'APA Division 12 Clinical Psychology', url: 'https://div12.org/', provider: 'APA Division 12', type: 'Professional Division', desc: 'Society of Clinical Psychology resources and guidelines' },
  { title: 'Clinical Psychology Review', url: 'https://www.sciencedirect.com/journal/clinical-psychology-review', provider: 'Elsevier', type: 'Journal', desc: 'Leading review journal in clinical psychology' },
  { title: 'Society for Clinical Psychology', url: 'https://clinicalpsychology.org/', provider: 'APA Division 12', type: 'Organization', desc: 'Clinical psychology resources for professionals and students' },
  { title: 'APA Division 17 Counseling Psychology', url: 'https://div17.org/', provider: 'APA Division 17', type: 'Professional Division', desc: 'Society of Counseling Psychology professional resources' },
  { title: 'NASP Graduate Program Database', url: 'https://www.nasponline.org/graduate-education/graduate-program-database', provider: 'NASP', type: 'Database', desc: 'Database of school psychology graduate programs' },
  { title: 'International School Psychology Association', url: 'https://www.ispaweb.org/', provider: 'ISPA', type: 'Organization', desc: 'International organization for school psychology' },
  { title: 'SIOP Society for I-O Psychology', url: 'https://www.siop.org/', provider: 'SIOP', type: 'Organization', desc: 'Society for Industrial and Organizational Psychology' },
  { title: 'APA Division 41 American Psychology-Law Society', url: 'https://www.apadivisions.org/division-41', provider: 'APA Division 41', type: 'Professional Division', desc: 'Psychology and law society resources' },
  { title: 'APA Division 38 Health Psychology', url: 'https://www.health-psych.org/', provider: 'APA Division 38', type: 'Professional Division', desc: 'Health psychology resources and research' },
  { title: 'British Psychological Society Health Psychology', url: 'https://www.bps.org.uk/member-microsites/division-health-psychology', provider: 'BPS', type: 'Organization', desc: 'UK health psychology division resources' },
  { title: 'APA Division 40 Clinical Neuropsychology', url: 'https://www.div40.org/', provider: 'APA Division 40', type: 'Professional Division', desc: 'Clinical neuropsychology professional resources' },
  { title: 'International Neuropsychological Society', url: 'https://www.the-ins.org/', provider: 'INS', type: 'Organization', desc: 'International neuropsychological society research and education' },
  { title: 'Cognitive Neuroscience Society', url: 'https://www.cogneurosociety.org/', provider: 'CNS', type: 'Organization', desc: 'Cognitive neuroscience research and resources' },
  { title: 'Journal of Cognitive Neuroscience', url: 'https://direct.mit.edu/jocn', provider: 'MIT Press', type: 'Journal', desc: 'Leading journal in cognitive neuroscience research' }
]

// ============================================
// CLINICAL PSYCHOLOGY RESOURCES
// ============================================

const clinicalResources = [
  { title: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com/us/therapists', provider: 'Psychology Today', type: 'Directory', desc: 'Find licensed therapists by location and specialty' },
  { title: 'APA Clinical Practice Guidelines', url: 'https://www.apa.org/practice/guidelines', provider: 'APA', type: 'Guidelines', desc: 'Evidence-based clinical practice guidelines' },
  { title: 'NAMI - National Alliance on Mental Illness', url: 'https://www.nami.org/', provider: 'NAMI', type: 'Organization', desc: 'Mental health education and support resources' },
  { title: 'Mental Health America', url: 'https://mhanational.org/', provider: 'MHA', type: 'Screening Tools', desc: 'Free mental health screening and resources' },
  { title: 'SAMHSA', url: 'https://www.samhsa.gov/', provider: 'US Government', type: 'Resources', desc: 'Substance abuse and mental health services' },
  { title: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/', provider: 'NIH', type: 'Research', desc: 'Mental health research and educational materials' },
  { title: 'BetterHelp', url: 'https://www.betterhelp.com/', provider: 'BetterHelp', type: 'Online Therapy', desc: 'Online counseling and therapy platform' },
  { title: 'Crisis Text Line', url: 'https://www.crisistextline.org/', provider: 'Crisis Text Line', type: 'Crisis Support', desc: 'Free 24/7 crisis text support service' }
]

// ============================================
// MENTAL HEALTH RESOURCES (NEW)
// ============================================

const mentalHealthResources = [
  { title: 'NIMH (National Institute of Mental Health)', url: 'https://www.nimh.nih.gov/', provider: 'NIH', type: 'Research Institute', desc: 'Federal agency for mental health research and information' },
  { title: 'WHO Mental Health', url: 'https://www.who.int/health-topics/mental-health', provider: 'WHO', type: 'International Org', desc: 'World Health Organization mental health resources' },
  { title: 'Mental Health America', url: 'https://mhanational.org/', provider: 'MHA', type: 'Nonprofit', desc: 'Mental health screening, information, and advocacy' },
  { title: 'Mind UK', url: 'https://www.mind.org.uk/', provider: 'Mind', type: 'Charity', desc: 'UK mental health charity providing information and support' },
  { title: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com/us/therapists', provider: 'Psychology Today', type: 'Directory', desc: 'Find licensed therapists by location and specialty' },
  { title: 'Crisis Text Line', url: 'https://www.crisistextline.org/', provider: 'Crisis Text Line', type: 'Crisis Support', desc: 'Free 24/7 crisis text support - Text HOME to 741741' },
  { title: 'NAMI (National Alliance on Mental Illness)', url: 'https://www.nami.org/', provider: 'NAMI', type: 'Organization', desc: 'Mental health advocacy, education, and support' },
  { title: 'SAMHSA', url: 'https://www.samhsa.gov/', provider: 'US Government', type: 'Government Agency', desc: 'Substance Abuse and Mental Health Services Administration' }
]

// ============================================
// COGNITIVE PSYCHOLOGY RESOURCES
// ============================================

const cognitiveResources = [
  { title: 'Stanford Encyclopedia - Cognitive Science', url: 'https://plato.stanford.edu/entries/cognitive-science/', provider: 'Stanford', type: 'Encyclopedia', desc: 'Comprehensive cognitive science overview' },
  { title: 'Cognitive Class', url: 'https://cognitiveclass.ai/', provider: 'IBM', type: 'Free Courses', desc: 'Free data science and cognitive computing courses' },
  { title: 'Memory and Cognition Guide', url: 'https://www.simplypsychology.org/memory.html', provider: 'Simply Psychology', type: 'Tutorial', desc: 'Memory processes and cognitive psychology' },
  { title: 'BrainFacts.org', url: 'https://www.brainfacts.org/', provider: 'Society for Neuroscience', type: 'Education', desc: 'Neuroscience and cognitive brain science' },
  { title: 'Cognitive Neuroscience Society', url: 'https://www.cogneurosociety.org/', provider: 'CNS', type: 'Organization', desc: 'Cognitive neuroscience research and resources' },
  { title: 'Cognitive Psychology Today', url: 'https://www.psychologytoday.com/us/basics/cognitive-psychology', provider: 'Psychology Today', type: 'Articles', desc: 'Cognitive psychology articles and insights' }
]

// ============================================
// SOCIAL PSYCHOLOGY RESOURCES
// ============================================

const socialResources = [
  { title: 'Social Psychology Network', url: 'https://www.socialpsychology.org/', provider: 'Wesleyan University', type: 'Directory', desc: 'Largest social psychology resource online' },
  { title: 'SPSSI - Society for Psychological Study', url: 'https://www.spssi.org/', provider: 'SPSSI', type: 'Organization', desc: 'Social issues and social psychology research' },
  { title: 'The Personality Project', url: 'https://personality-project.org/', provider: 'William Revelle', type: 'Resource Hub', desc: 'Personality psychology research resources' },
  { title: 'Psychology of Relationships', url: 'https://www.psychologytoday.com/us/basics/relationships', provider: 'Psychology Today', type: 'Articles', desc: 'Relationship science and social connection' },
  { title: 'Understanding Prejudice', url: 'https://www.understandingprejudice.org/', provider: 'Scott Plous', type: 'Educational', desc: 'Social psychology of prejudice and discrimination' },
  { title: 'Milgram Experiment Archive', url: 'https://www.stanleymilgram.com/', provider: 'Alexandra Milgram', type: 'Archive', desc: 'Historical documents and information on obedience research' }
]

// ============================================
// PSYCHOLOGY DATABASES
// ============================================

const databases = [
  { name: 'PsycINFO (APA)', url: 'https://www.apa.org/pubs/databases/psyccinfo', type: 'APA Database', desc: 'Comprehensive psychology and behavioral science database' },
  { name: 'PsycARTICLES', url: 'https://www.apa.org/pubs/databases/psycarticles', type: 'APA Database', desc: 'Full-text articles from APA journals' },
  { name: 'PubMed Psychology', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=psychology', type: 'Research Database', desc: 'MEDLINE psychology research abstracts and citations' },
  { name: 'PubMed Central', url: 'https://www.ncbi.nlm.nih.gov/pmc/', type: 'Full-Text Archive', desc: 'Free full-text psychology research articles' },
  { name: 'Web of Science', url: 'https://www.webofscience.com/', type: 'Citation Database', desc: 'Multidisciplinary citation indexing and search' },
  { name: 'Scopus', url: 'https://www.scopus.com/', type: 'Citation Database', desc: 'Largest abstract and citation database of peer-reviewed literature' },
  { name: 'ERIC', url: 'https://eric.ed.gov/', type: 'Education Database', desc: 'Education Resources Information Center database' },
  { name: 'Google Scholar Psychology', url: 'https://scholar.google.com/', type: 'Search Engine', desc: 'Academic psychology paper search' },
  { name: 'Psychology Database (ProQuest)', url: 'https://about.proquest.com/products-services/psychology.html', type: 'Research Database', desc: 'Full-text psychology journals and dissertations' },
  { name: 'Buros Center for Testing', url: 'https://buros.org/', type: 'Test Database', desc: 'Psychological test reviews and information' }
]

// ============================================
// RESEARCH & JOURNALS
// ============================================

const researchResources = [
  { name: 'Nature Human Behaviour', url: 'https://www.nature.com/nathumbehav/', type: 'Research Journal', desc: 'Premier journal publishing research on human behavior' },
  { name: 'Psychological Science', url: 'https://journals.sagepub.com/home/pss', type: 'Journal', desc: 'Flagship journal of the Association for Psychological Science' },
  { name: 'Psychological Bulletin', url: 'https://www.apa.org/pubs/journals/bul', type: 'Journal', desc: 'Integrative reviews and interpretations of research' },
  { name: 'Annual Review of Psychology', url: 'https://www.annualreviews.org/journal/psych', type: 'Review Journal', desc: 'Comprehensive psychology review articles' },
  { name: 'Clinical Psychology Review', url: 'https://www.sciencedirect.com/journal/clinical-psychology-review', type: 'Journal', desc: 'Leading review journal in clinical psychology' },
  { name: 'Journal of Consulting and Clinical Psychology', url: 'https://www.apa.org/pubs/journals/ccp', type: 'Journal', desc: 'Premier journal for clinical psychology research' },
  { name: 'Journal of Abnormal Psychology', url: 'https://www.apa.org/pubs/journals/abn', type: 'Journal', desc: 'Research on psychopathology and abnormal behavior' },
  { name: 'Psychological Medicine', url: 'https://www.cambridge.org/core/journals/psychological-medicine', type: 'Journal', desc: 'International journal in clinical psychiatry and psychology' },
  { name: 'Cognition', url: 'https://www.sciencedirect.com/journal/cognition', type: 'Journal', desc: 'International journal of cognitive science' },
  { name: 'Neuropsychologia', url: 'https://www.sciencedirect.com/journal/neuropsychologia', type: 'Journal', desc: 'Journal for experimental and theoretical neuropsychology' },
  { name: 'Journal of Cognitive Neuroscience', url: 'https://direct.mit.edu/jocn', type: 'Journal', desc: 'Leading journal in cognitive neuroscience' },
  { name: 'Cognitive Psychology', url: 'https://www.sciencedirect.com/journal/cognitive-psychology', type: 'Journal', desc: 'Leading cognitive psychology research journal' },
  { name: 'Journal of Personality and Social Psychology', url: 'https://www.apa.org/pubs/journals/psp', type: 'Journal', desc: 'Premier social psychology research journal' },
  { name: 'Personality and Social Psychology Review', url: 'https://journals.sagepub.com/home/psr', type: 'Journal', desc: 'Review articles on personality and social psychology' },
  { name: 'Developmental Psychology', url: 'https://www.apa.org/pubs/journals/dev', type: 'Journal', desc: 'Research on human development across the lifespan' },
  { name: 'Child Development', url: 'https://srcd.onlinelibrary.wiley.com/journal/14678624', type: 'Journal', desc: 'Premier journal for developmental research on children' },
  { name: 'Journal of Adolescence', url: 'https://www.sciencedirect.com/journal/journal-of-adolescence', type: 'Journal', desc: 'Research on adolescence and young adulthood' },
  { name: 'Psychological Review', url: 'https://www.apa.org/pubs/journals/rev', type: 'Journal', desc: 'Psychological theory and integrative reviews' },
  { name: 'American Psychologist', url: 'https://www.apa.org/pubs/journals/amp', type: 'Journal', desc: 'Official journal of the American Psychological Association' },
  { name: 'Behavior Research and Therapy', url: 'https://www.sciencedirect.com/journal/behaviour-research-and-therapy', type: 'Journal', desc: 'Experimental psychopathology and therapy research' },
  { name: 'Journal of Clinical Psychiatry', url: 'https://www.physicianspostgraduatepress.com/JCP/index.aspx', type: 'Journal', desc: 'Peer-reviewed articles on psychiatry and mental health' },
  { name: 'Lancet Psychiatry', url: 'https://www.thelancet.com/journals/lanpsy/home', type: 'Journal', desc: 'International journal for psychiatrists' },
  { name: 'JAMA Psychiatry', url: 'https://jamanetwork.com/journals/jamapsychiatry', type: 'Journal', desc: 'Journal of the American Medical Association Psychiatry' },
  { name: 'World Psychiatry', url: 'https://www.wpanet.org/', type: 'Journal', desc: 'Official journal of the World Psychiatric Association' },
  // Open Access Journals
  { name: 'Frontiers in Psychology', url: 'https://www.frontiersin.org/journals/psychology', type: 'Open Access Journal', desc: 'Multidisciplinary open access psychology journal' },
  { name: 'BMC Psychology', url: 'https://bmcpsychology.biomedcentral.com/', type: 'Open Access Journal', desc: 'Open access journal covering all aspects of psychology' },
  { name: 'PLOS ONE', url: 'https://journals.plos.org/plosone/', type: 'Open Access Journal', desc: 'Peer-reviewed open science research across all disciplines' },
  { name: 'Scientific Reports', url: 'https://www.nature.com/srep/', type: 'Open Access Journal', desc: 'Open access journal from Nature Portfolio' },
  { name: 'PeerJ', url: 'https://peerj.com/', type: 'Open Access Journal', desc: 'Open access peer-reviewed scientific mega journal' },
  { name: 'Collabra: Psychology', url: 'https://online.ucpress.edu/collabra', type: 'Open Access Journal', desc: 'Open access psychology journal from UC Press' },
  { name: 'PsyArXiv (preprints)', url: 'https://psyarxiv.com/', type: 'Preprint Server', desc: 'Free psychology preprint repository' }
]

// ============================================
// PROFESSIONAL ORGANIZATIONS (NEW)
// ============================================

const professionalOrganizations = [
  // Major International Organizations
  { name: 'American Psychological Association (APA)', url: 'https://www.apa.org/', type: 'Professional Org', desc: '157,000+ members - Leading US psychology organization', region: 'USA' },
  { name: 'British Psychological Society (BPS)', url: 'https://www.bps.org.uk/', type: 'Professional Org', desc: '60,000+ members - UK professional psychology body', region: 'UK' },
  { name: 'International Union of Psychological Science (IUPsyS)', url: 'https://www.iupsys.net/', type: 'International Org', desc: 'Global federation of national psychology organizations', region: 'International' },
  { name: 'European Federation of Psychologists Associations (EFPA)', url: 'https://www.efpa.eu/', type: 'Federation', desc: 'European federation of national psychology associations', region: 'Europe' },
  { name: 'Association for Psychological Science (APS)', url: 'https://www.psychologicalscience.org/', type: 'Scientific Org', desc: 'International organization for scientific psychology', region: 'International' },
  { name: 'Canadian Psychological Association (CPA)', url: 'https://cpa.ca/', type: 'Professional Org', desc: 'Canadian national psychology association', region: 'Canada' },
  { name: 'Australian Psychological Society (APS)', url: 'https://www.psychology.org.au/', type: 'Professional Org', desc: 'Australian professional psychology organization', region: 'Australia' },
  { name: 'New Zealand Psychological Society', url: 'https://www.psychology.org.nz/', type: 'Professional Org', desc: 'New Zealand professional psychology body', region: 'New Zealand' },
  { name: 'Hong Kong Psychological Society', url: 'https://www.hkps.org.hk/', type: 'Professional Org', desc: 'Hong Kong professional psychology organization', region: 'Hong Kong' },
  { name: 'Singapore Psychological Society', url: 'https://singaporepsychologicalsociety.org/', type: 'Professional Org', desc: 'Singapore professional psychology body', region: 'Singapore' },
  { name: 'German Psychological Society (DGPs)', url: 'https://www.dgps.de/', type: 'Professional Org', desc: 'Deutsche Gesellschaft für Psychologie', region: 'Germany' },
  { name: 'French Psychological Association', url: 'https://www.sfpsy.org/', type: 'Professional Org', desc: 'Société Française de Psychologie', region: 'France' },
  { name: 'Italian Psychological Association', url: 'https://www.aip-assopsicologi.it/', type: 'Professional Org', desc: 'Associazione Italiana Psicologi', region: 'Italy' },
  { name: 'Dutch Institute of Psychologists (NIP)', url: 'https://www.psynip.nl/', type: 'Professional Org', desc: 'Nederlands Instituut van Psychologen', region: 'Netherlands' }
]

// ============================================
// COUNTRY-SPECIFIC RESOURCES (NEW)
// ============================================

const countryResourcesUSA = [
  { name: 'APA', url: 'https://www.apa.org/', type: 'Organization', desc: 'American Psychological Association - Leading US psychology organization' },
  { name: 'Psychology Today', url: 'https://www.psychologytoday.com/', type: 'Media', desc: 'Popular psychology magazine and therapist directory' },
  { name: 'NIMH', url: 'https://www.nimh.nih.gov/', type: 'Government', desc: 'National Institute of Mental Health - Federal research agency' },
  { name: 'APS', url: 'https://www.psychologicalscience.org/', type: 'Organization', desc: 'Association for Psychological Science' },
  { name: 'NASP', url: 'https://www.nasponline.org/', type: 'Organization', desc: 'National Association of School Psychologists' }
]

const countryResourcesUK = [
  { name: 'British Psychological Society', url: 'https://www.bps.org.uk/', type: 'Organization', desc: 'UK professional body for psychology' },
  { name: 'NHS Psychology Resources', url: 'https://www.nhs.uk/mental-health/', type: 'Health Service', desc: 'NHS mental health information and services' },
  { name: 'BPS Learn', url: 'https://www.bps.org.uk/learn', type: 'Education', desc: 'British Psychological Society learning resources' },
  { name: 'The Psychologist Magazine', url: 'https://thepsychologist.bps.org.uk/', type: 'Publication', desc: 'BPS official magazine' },
  { name: 'HCPC', url: 'https://www.hcpc-uk.org/', type: 'Regulator', desc: 'Health and Care Professions Council - Regulator for psychologists' },
  { name: 'BACP', url: 'https://www.bacp.co.uk/', type: 'Organization', desc: 'British Association for Counselling and Psychotherapy' },
  { name: 'UKCP', url: 'https://www.psychotherapy.org.uk/', type: 'Organization', desc: 'UK Council for Psychotherapy' }
]

const countryResourcesEurope = [
  { name: 'EFPA', url: 'https://www.efpa.eu/', type: 'Federation', desc: 'European Federation of Psychologists Associations' },
  { name: 'EuroPsy Certification', url: 'https://www.efpa.eu/europsy', type: 'Certification', desc: 'European Certificate in Psychology' }
]

const countryResourcesAustralia = [
  { name: 'Australian Psychological Society', url: 'https://www.psychology.org.au/', type: 'Organization', desc: 'APS - Australian professional psychology body' },
  { name: 'Psychology Board of Australia (PsyBA)', url: 'https://www.psychologyboard.gov.au/', type: 'Regulator', desc: 'Australian psychology regulatory authority' },
  { name: 'AHPRA', url: 'https://www.ahpra.gov.au/', type: 'Regulator', desc: 'Australian Health Practitioner Regulation Agency' }
]

const countryResourcesCanada = [
  { name: 'Canadian Psychological Association', url: 'https://cpa.ca/', type: 'Organization', desc: 'Canadian national psychology association' },
  { name: 'CPA Accreditation', url: 'https://cpa.ca/accreditation/', type: 'Accreditation', desc: 'CPA accreditation for psychology programs' }
]

const countryResourcesAsiaPacific = [
  { name: 'Chinese Psychological Society', url: 'http://www.cpsbeijing.org/', type: 'Organization', desc: 'Professional psychology organization in China' },
  { name: 'Hong Kong Psychological Society', url: 'https://www.hkps.org.hk/', type: 'Organization', desc: 'Hong Kong professional psychology body' },
  { name: 'Singapore Psychological Society', url: 'https://singaporepsychologicalsociety.org/', type: 'Organization', desc: 'Singapore psychology professional body' },
  { name: 'Japanese Psychological Association', url: 'https://psych.or.jp/', type: 'Organization', desc: 'Japanese national psychology organization' },
  { name: 'Indian Psychological Association', url: 'https://www.indianpsychologicalassociation.org/', type: 'Organization', desc: 'Indian psychology professional body' }
]

// ============================================
// ONLINE LEARNING PLATFORMS (NEW)
// ============================================

const onlineLearningResources = [
  { name: 'Coursera Psychology', url: 'https://www.coursera.org/browse/social-sciences/psychology', type: 'MOOC Platform', desc: 'Psychology courses from Yale, University of Toronto, and more' },
  { name: 'edX Psychology', url: 'https://www.edx.org/learn/psychology', type: 'MOOC Platform', desc: 'Psychology courses from Harvard, MIT, and other top universities' },
  { name: 'OpenLearn Psychology', url: 'https://www.open.edu/openlearn/social-science/psychology', type: 'Free Course', desc: 'Free psychology courses from Open University UK' },
  { name: 'FutureLearn Psychology', url: 'https://www.futurelearn.com/subjects/psychology-mental-health-courses', type: 'MOOC Platform', desc: 'Psychology and mental health courses from global universities' },
  { name: 'Khan Academy MCAT Behavior', url: 'https://www.khanacademy.org/test-prep/mcat', type: 'Free Course', desc: 'Behavioral sciences content for MCAT preparation' },
  { name: 'Udemy Psychology', url: 'https://www.udemy.com/topic/psychology/', type: 'Course Platform', desc: 'Wide range of psychology courses for various levels' }
]

// ============================================
// VIDEO RESOURCES (NEW)
// ============================================

const videoResources = [
  { name: 'iBiology', url: 'https://www.ibiology.org/', type: 'Video Platform', desc: 'Free biology and neuroscience research talks' },
  { name: 'JoVE Psychology', url: 'https://www.jove.com/science-education/psychology', type: 'Video Journal', desc: 'Peer-reviewed scientific video journal' },
  { name: 'PsychClips', url: 'https://www.worthpublishers.com/PsychClips', type: 'Video Resource', desc: 'Psychology video clips for teaching and learning' },
  // YouTube Channels
  { name: 'Jordan B Peterson', url: 'https://www.youtube.com/@JordanBPeterson', type: 'YouTube Channel', desc: 'Clinical psychology lectures and discussions' },
  { name: 'Psych2Go', url: 'https://www.youtube.com/@Psych2go', type: 'YouTube Channel', desc: 'Mental health and psychology animated videos' },
  { name: 'Practical Psychology', url: 'https://www.youtube.com/@practicalpsychology', type: 'YouTube Channel', desc: 'Practical psychology tips and insights' },
  { name: 'The School of Life', url: 'https://www.youtube.com/@theschooloflifetv', type: 'YouTube Channel', desc: 'Emotional intelligence and self-improvement videos' }
]

// ============================================
// DEVELOPMENTAL PSYCHOLOGY RESOURCES
// ============================================

const developmentalResources = [
  { title: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/', provider: 'CDC', type: 'Reference', desc: 'Official developmental milestones for children' },
  { title: 'Zero to Three', url: 'https://www.zerotothree.org/', provider: 'Zero to Three', type: 'Organization', desc: 'Early childhood development resources' },
  { title: 'Society for Research in Child Development', url: 'https://www.srcd.org/', provider: 'SRCD', type: 'Research', desc: 'Child development research organization' },
  { title: 'Developmental Psychology Guide', url: 'https://www.simplypsychology.org/developmental-psychology.html', provider: 'Simply Psychology', type: 'Tutorial', desc: 'Comprehensive developmental psychology overview' },
  { title: 'Jean Piaget Archive', url: 'https://www.piaget.org/', provider: 'Jean Piaget Society', type: 'Archive', desc: 'Resources on Piagetian developmental theory' },
  { title: 'Adolescence Directory', url: 'https://wwweducation.indiana.edu/ceep/projects/adolescence.html', provider: 'Indiana University', type: 'Directory', desc: 'Adolescent development resources' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-space-950 to-rose-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30 mb-6">
            <span class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-pink-300">2000+ Global Psychology Resources from K-12 to PhD</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Psychology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master the science of mind and behavior from K-12 to graduate research with 2000+ curated resources from Harvard, Yale, Stanford, and institutions worldwide. Free textbooks, clinical resources, and research databases.
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
              <div class="text-sm text-gray-400">Clinical Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">2000+</div>
              <div class="text-sm text-gray-400">Total Resources</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-pink-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-pink-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-pink-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">K-12 School Resources</h2>
            <p class="text-gray-400">Psychology resources for primary and secondary school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in k12Resources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- AP Psychology -->
      <section id="ap" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">AP Psychology</h2>
            <p class="text-gray-400">Advanced Placement Psychology exam preparation resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in apPsychologyResources" :key="resource.title" :href="resource.url" target="_blank"
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
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Textbooks</h2>
            <p class="text-gray-400">Comprehensive psychology textbooks organized by level</p>
          </div>
        </div>

        <!-- Beginner -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-rose-400 mb-4">Beginner / High School Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksBeginner" :key="book.title" :href="book.url" target="_blank"
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

        <!-- Intermediate -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-pink-400 mb-4">Intermediate / Undergraduate Level</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="book in freeTextbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ book.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ book.title }}</h4>
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

      <!-- Undergraduate Resources -->
      <section id="undergraduate" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Undergraduate Resources</h2>
            <p class="text-gray-400">University-level courses, textbooks, and learning resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in undergraduateResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Graduate/Specialized Resources -->
      <section id="graduate" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Graduate & Specialized Resources</h2>
            <p class="text-gray-400">Clinical, neuropsychology, I-O, and other specialized fields</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in graduateResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Clinical Psychology -->
      <section id="clinical" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Clinical Psychology</h2>
            <p class="text-gray-400">Mental health resources, therapy directories, and clinical guidelines</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in clinicalResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Mental Health Resources -->
      <section id="mentalhealth" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Mental Health Resources</h2>
            <p class="text-gray-400">Crisis support, mental health organizations, and help resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in mentalHealthResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Cognitive Psychology -->
      <section id="cognitive" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Cognitive Psychology</h2>
            <p class="text-gray-400">Mental processes, memory, learning, and cognitive science resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in cognitiveResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-purple-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Social Psychology -->
      <section id="social" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Social Psychology</h2>
            <p class="text-gray-400">Relationships, social influence, attitudes, and group behavior</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in socialResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-blue-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Developmental Psychology -->
      <section id="developmental" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Developmental Psychology</h2>
            <p class="text-gray-400">Child development, aging, and lifespan psychology resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in developmentalResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <h4 class="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-amber-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Psychology Databases -->
      <section id="databases" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Psychology Databases</h2>
            <p class="text-gray-400">Academic databases and research tools for psychology</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <!-- Research & Journals -->
      <section id="research" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research & Journals</h2>
            <p class="text-gray-400">Academic journals, open access publications, and research resources for psychology</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="journal in researchResources" :key="journal.name" :href="journal.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ journal.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ journal.name }}</h4>
            <p class="text-xs text-gray-400">{{ journal.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Professional Organizations -->
      <section id="professional" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Professional Organizations</h2>
            <p class="text-gray-400">Global psychology associations and professional bodies</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="org in professionalOrganizations" :key="org.name" :href="org.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ org.region }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ org.name }}</h4>
            <p class="text-sm text-gray-400">{{ org.type }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ org.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Country-Specific Resources -->
      <section id="countries" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Country-Specific Resources</h2>
            <p class="text-gray-400">Regional psychology organizations and resources by country</p>
          </div>
        </div>

        <!-- USA -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-blue-400 mb-4">🇺🇸 United States</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesUSA" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>

        <!-- UK -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-red-400 mb-4">🇬🇧 United Kingdom</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesUK" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Europe -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-yellow-400 mb-4">🇪🇺 Europe</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesEurope" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Australia -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-green-400 mb-4">🇦🇺 Australia</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesAustralia" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Canada -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-red-500 mb-4">🇨🇦 Canada</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesCanada" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Asia-Pacific -->
        <div>
          <h3 class="text-lg font-semibold text-orange-400 mb-4">🌏 Asia-Pacific</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="resource in countryResourcesAsiaPacific" :key="resource.name" :href="resource.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ resource.type }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{{ resource.name }}</h4>
              <p class="text-xs text-gray-400">{{ resource.desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Online Learning -->
      <section id="online" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Online Learning Platforms</h2>
            <p class="text-gray-400">MOOCs, online courses, and distance learning resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in onlineLearningResources" :key="resource.name" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ resource.name }}</h4>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Video Resources -->
      <section id="video" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-fuchsia-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Video Resources</h2>
            <p class="text-gray-400">Educational videos, YouTube channels, and visual learning resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in videoResources" :key="resource.name" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-fuchsia-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">{{ resource.name }}</h4>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
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
