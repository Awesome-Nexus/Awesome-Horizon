<script setup lang="ts">
useHead({
  title: 'Astronomy - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Explore the cosmos from K-12 to PhD research with 2500+ curated astronomy resources. NASA, ESA, Hubble, free textbooks, planetarium software, observational guides, and astrophysics research tools.' }
  ]
})

const quickLinks = [
  { name: 'Featured', url: '#featured', icon: 'star', count: 6 },
  { name: 'K-12 Resources', url: '#k12', icon: 'school', count: 20 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 12 },
  { name: 'Observational', url: '#observational', icon: 'telescope', count: 10 },
  { name: 'Astrophysics', url: '#astrophysics', icon: 'atom', count: 8 },
  { name: 'Space Exploration', url: '#exploration', icon: 'rocket', count: 10 },
  { name: 'Planetarium Software', url: '#software', icon: 'computer', count: 20 },
  { name: 'Data Archives', url: '#archives', icon: 'database', count: 30 },
  { name: 'Observatories', url: '#observatories', icon: 'telescope', count: 35 },
  { name: 'Space Agencies', url: '#agencies', icon: 'globe', count: 12 },
  { name: 'Citizen Science', url: '#citizen', icon: 'users', count: 8 },
  { name: 'Research & Journals', url: '#research', icon: 'microscope', count: 27 },
  { name: 'Online Courses', url: '#courses', icon: 'graduation-cap', count: 8 }
]

// ============================================
// FEATURED RESOURCES (6 items)
// ============================================

const featuredResources = [
  {
    title: 'NASA Official Portal',
    author: 'NASA',
    type: 'Space Agency',
    url: 'https://www.nasa.gov/',
    icon: 'rocket',
    description: 'America\'s space agency with missions, research, and educational resources',
    level: 'All Levels'
  },
  {
    title: 'ESA - European Space Agency',
    author: 'ESA',
    type: 'Space Agency',
    url: 'https://www.esa.int/',
    icon: 'globe',
    description: 'Europe\'s gateway to space with extensive science and exploration content',
    level: 'All Levels'
  },
  {
    title: 'Hubble Space Telescope',
    author: 'NASA/ESA/STScI',
    type: 'Observatory',
    url: 'https://hubblesite.org/',
    icon: 'telescope',
    description: 'Breathtaking images and discoveries from the legendary space telescope',
    level: 'All Levels'
  },
  {
    title: 'Sky & Telescope Magazine',
    author: 'AAS',
    type: 'Publication',
    url: 'https://skyandtelescope.org/',
    icon: 'star',
    description: 'Premier astronomy magazine with observing guides and space news',
    level: 'All Levels'
  },
  {
    title: 'Astronomy Magazine',
    author: 'Kalmbach Media',
    type: 'Publication',
    url: 'https://astronomy.com/',
    icon: 'moon',
    description: 'Popular astronomy magazine for amateur and professional astronomers',
    level: 'All Levels'
  },
  {
    title: 'Stellarium Web',
    author: 'Stellarium Project',
    type: 'Planetarium',
    url: 'https://stellarium-web.org/',
    icon: 'star',
    description: 'Free open-source planetarium for your computer and mobile devices',
    level: 'All Levels'
  }
]

// ============================================
// K-12 RESOURCES (20 items)
// ============================================

const k12Resources = [
  { title: 'NASA for Students', url: 'https://www.nasa.gov/stem/forstudents/', provider: 'NASA', type: 'Educational', level: 'K-12', desc: 'Games, activities, and resources for young astronomers' },
  { title: 'ESA Kids', url: 'https://www.esa.int/kids/', provider: 'ESA', type: 'Interactive', level: 'Elementary', desc: 'Space adventures and fun facts for children' },
  { title: 'NASA Space Place', url: 'https://spaceplace.nasa.gov/', provider: 'NASA', type: 'Interactive', level: 'K-8', desc: 'Games, animations, and projects about space and Earth science' },
  { title: 'Crash Course Astronomy', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL', provider: 'Crash Course', type: 'Video Course', level: 'Middle/High', desc: '46-episode comprehensive astronomy course by Phil Plait' },
  { title: 'Astronomy Picture of the Day', url: 'https://apod.nasa.gov/', provider: 'NASA', type: 'Daily Resource', level: 'All', desc: 'Discover the cosmos with a new image every day' },
  { title: 'StarChild', url: 'https://starchild.gsfc.nasa.gov/', provider: 'NASA GSFC', type: 'Learning Center', level: 'K-8', desc: 'Learning center for young astronomers' },
  { title: 'Imagine the Universe', url: 'https://imagine.gsfc.nasa.gov/', provider: 'NASA GSFC', type: 'Educational', level: 'High School', desc: 'High school astronomy and astrophysics resources' },
  { title: 'Planet Hunters', url: 'https://www.planethunters.org/', provider: 'Zooniverse', type: 'Citizen Science', level: 'All', desc: 'Help discover new planets by analyzing NASA data' },
  { title: 'NASA Kids\' Club', url: 'https://www.nasa.gov/kidsclub/', provider: 'NASA', type: 'Interactive', level: 'K-4', desc: 'Games and activities for young space explorers' },
  { title: 'ESA Kids - Paxi', url: 'https://www.esa.int/kids/en/learn_with_paxi', provider: 'ESA', type: 'Interactive', level: 'Elementary', desc: 'Paxi the alien teaches kids about space' },
  { title: 'Amazing Space', url: 'https://amazing-space.stsci.edu/', provider: 'STScI', type: 'Educational', level: 'K-12', desc: 'Space telescope science institute educational resources' },
  { title: 'Night Sky Network', url: 'https://nightsky.jpl.nasa.gov/', provider: 'NASA/JPL', type: 'Outreach', level: 'All', desc: 'Amateur astronomy clubs bringing science to the public' },
  { title: 'Astronomical Society of the Pacific', url: 'https://www.astrosociety.org/', provider: 'ASP', type: 'Organization', level: 'All', desc: 'Education and outreach resources for astronomy' },
  { title: 'Royal Astronomical Society of Canada', url: 'https://www.rasc.ca/', provider: 'RASC', type: 'Organization', level: 'All', desc: 'Canadian astronomy education and observing resources' },
  { title: 'British Astronomical Association', url: 'https://britastro.org/', provider: 'BAA', type: 'Organization', level: 'All', desc: 'UK organization for amateur astronomers' },
  { title: 'Society for Popular Astronomy', url: 'https://popastro.com/', provider: 'SPA', type: 'Organization', level: 'All', desc: 'UK society making astronomy accessible to everyone' },
  { title: 'Sky & Telescope Magazine', url: 'https://skyandtelescope.org/', provider: 'AAS', type: 'Publication', level: 'All', desc: 'Premier astronomy magazine with observing guides' },
  { title: 'Astronomy Magazine', url: 'https://astronomy.com/', provider: 'Kalmbach', type: 'Publication', level: 'All', desc: 'Popular astronomy magazine for all levels' },
  { title: 'NASA\'s Eyes', url: 'https://eyes.nasa.gov/', provider: 'NASA', type: 'Interactive', level: 'All', desc: 'Immersive 3D simulations of NASA missions' },
  { title: 'SciJinks', url: 'https://scijinks.gov/', provider: 'NASA/NOAA', type: 'Educational', level: 'Middle School', desc: 'Weather and Earth science for middle schoolers' }
]

// ============================================
// FREE TEXTBOOKS BY LEVEL
// ============================================

const freeTextbooksBeginner = [
  { title: 'Astronomy', author: 'OpenStax', url: 'https://openstax.org/details/books/astronomy', type: 'FREE PDF', desc: 'Comprehensive introductory astronomy textbook' },
  { title: '21st Century Astronomy', author: 'Kay et al.', url: 'https://wwnorton.com/books/9780393538600', type: 'Textbook', desc: 'Introductory astronomy with active learning' },
  { title: 'The Cosmic Perspective', author: 'Bennett et al.', url: 'https://www.pearson.com/', type: 'Textbook', desc: 'Popular introductory astronomy text' },
  { title: 'Exploring the Universe', author: 'Palen et al.', url: 'https://www.mheducation.com/', type: 'Textbook', desc: 'Introductory astronomy for non-science majors' }
]

const freeTextbooksIntermediate = [
  { title: 'An Introduction to Modern Astrophysics', author: 'Carroll & Ostlie', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Standard undergraduate astrophysics text (The "BOB" book)' },
  { title: 'Fundamentals of Astrophysics', author: 'Stan Owocki', url: 'https://www.cambridge.org/', type: 'Textbook', desc: 'Concise introduction to astrophysical concepts' },
  { title: 'Astrophysics of Stars', author: 'Nadia Langer', url: 'https://arxiv.org/', type: 'FREE PDF', desc: 'Stellar structure and evolution' },
  { title: 'Extragalactic Astronomy and Cosmology', author: 'Peter Schneider', url: 'https://www.springer.com/', type: 'Textbook', desc: 'Galaxies and cosmology for undergraduates' }
]

const freeTextbooksAdvanced = [
  { title: 'Gravitation', author: 'Misner, Thorne & Wheeler', url: 'https://press.princeton.edu/', type: 'Classic', desc: 'The definitive text on general relativity' },
  { title: 'Radiative Processes in Astrophysics', author: 'Rybicki & Lightman', url: 'https://www.wiley.com/', type: 'Classic', desc: 'Essential reference for radiative transfer' },
  { title: 'Galactic Dynamics', author: 'Binney & Tremaine', url: 'https://press.princeton.edu/', type: 'Reference', desc: 'The standard text on stellar dynamics' },
  { title: 'Astrophysics of the Interstellar Medium', author: 'Draine', url: 'https://press.princeton.edu/', type: 'Reference', desc: 'Comprehensive interstellar medium physics' }
]

// ============================================
// OBSERVATIONAL ASTRONOMY RESOURCES (10 items)
// ============================================

const observationalResources = [
  { title: 'Sky & Telescope', url: 'https://skyandtelescope.org/', provider: 'AAS', type: 'Magazine', desc: 'Observing guides, equipment reviews, and sky charts' },
  { title: 'Astronomy Magazine', url: 'https://astronomy.com/', provider: 'Kalmbach', type: 'Magazine', desc: 'Star charts and observing tips for all levels' },
  { title: 'Heavens-Above', url: 'https://www.heavens-above.com/', provider: 'Chris Peat', type: 'Web Tool', desc: 'Satellite passes, ISS tracking, and sky charts' },
  { title: 'In-The-Sky.org', url: 'https://in-the-sky.org/', provider: 'Dominic Ford', type: 'Web Tool', desc: 'Interactive sky map and astronomical events' },
  { title: 'TimeAndDate Night Sky', url: 'https://www.timeanddate.com/astronomy/night/', provider: 'TimeAndDate', type: 'Web Tool', desc: 'Planets visible tonight and meteor showers' },
  { title: 'Clear Sky Chart', url: 'https://www.cleardarksky.com/', provider: 'Attilla Danko', type: 'Forecast', desc: 'Astronomical weather forecasts for observing sites' },
  { title: 'Telescope Reviews', url: 'https://www.cloudynights.com/', provider: 'Cloudy Nights', type: 'Community', desc: 'Telescope reviews and amateur astronomy forums' },
  { title: 'American Association of Variable Star Observers', url: 'https://www.aavso.org/', provider: 'AAVSO', type: 'Organization', desc: 'Variable star observation and data archives' },
  { title: 'Astronomical League', url: 'https://www.astroleague.org/', provider: 'AL', type: 'Organization', desc: 'Federation of amateur astronomy societies' },
  { title: 'Messier Catalog', url: 'https://messier.seds.org/', provider: 'SEDS', type: 'Reference', desc: 'Complete guide to the Messier objects' }
]

// ============================================
// ASTROPHYSICS RESOURCES (8 items)
// ============================================

const astrophysicsResources = [
  { title: 'arXiv Astrophysics', url: 'https://arxiv.org/archive/astro-ph', provider: 'Cornell', type: 'Preprint Server', desc: 'Latest astrophysics research papers' },
  { title: 'ADS Astrophysics Data System', url: 'https://ui.adsabs.harvard.edu/', provider: 'NASA/SAO', type: 'Database', desc: 'Abstracts and full-text of astronomy papers' },
  { title: 'AstroBetter', url: 'https://www.astrobetter.com/', provider: 'Astronomy Community', type: 'Blog/Wiki', desc: 'Tips and tricks for astronomers' },
  { title: 'Python for Astronomers', url: 'https://www.astropy.org/', provider: 'Astropy', type: 'Software', desc: 'Core package for astronomy in Python' },
  { title: 'Astrophysics Source Code Library', url: 'https://ascl.net/', provider: 'ASCL', type: 'Repository', desc: 'Free astronomy software source codes' },
  { title: 'NED - NASA/IPAC Extragalactic Database', url: 'https://ned.ipac.caltech.edu/', provider: 'NASA/IPAC', type: 'Database', desc: 'Data for extragalactic objects' },
  { title: 'HEASARC', url: 'https://heasarc.gsfc.nasa.gov/', provider: 'NASA GSFC', type: 'Archive', desc: 'High-energy astrophysics data archive' },
  { title: 'LIGO Scientific Collaboration', url: 'https://www.ligo.org/', provider: 'LIGO/Virgo', type: 'Research', desc: 'Gravitational wave astronomy resources' }
]

// ============================================
// SPACE EXPLORATION RESOURCES (10 items)
// ============================================

const spaceExplorationResources = [
  { title: 'SpaceX', url: 'https://www.spacex.com/', provider: 'SpaceX', type: 'Company', desc: 'Revolutionary space technology and missions' },
  { title: 'Blue Origin', url: 'https://www.blueorigin.com/', provider: 'Blue Origin', type: 'Company', desc: 'Reusable rockets and space tourism' },
  { title: 'Rocket Lab', url: 'https://www.rocketlabusa.com/', provider: 'Rocket Lab', type: 'Company', desc: 'Small satellite launch services' },
  { title: 'ISRO - India Space Research', url: 'https://www.isro.gov.in/', provider: 'ISRO', type: 'Space Agency', desc: 'India\'s ambitious space program' },
  { title: 'CNSA - China National Space', url: 'http://www.cnsa.gov.cn/', provider: 'CNSA', type: 'Space Agency', desc: 'China\'s growing space exploration efforts' },
  { title: 'JAXA - Japan Aerospace', url: 'https://global.jaxa.jp/', provider: 'JAXA', type: 'Space Agency', desc: 'Japan\'s space and planetary science missions' },
  { title: 'Roscosmos', url: 'https://www.roscosmos.ru/', provider: 'Russia', type: 'Space Agency', desc: 'Russian Federal Space Agency' },
  { title: 'SpaceNews', url: 'https://spacenews.com/', provider: 'SpaceNews', type: 'News', desc: 'Daily news on space industry and policy' },
  { title: 'Planetary Society', url: 'https://www.planetary.org/', provider: 'TPS', type: 'Organization', desc: 'Space advocacy and education nonprofit' },
  { title: 'Space.com', url: 'https://www.space.com/', provider: 'Future plc', type: 'News', desc: 'Latest space news and mission updates' }
]

// ============================================
// PLANETARIUM SOFTWARE & TOOLS (20 items)
// ============================================

const planetariumSoftware = [
  { name: 'Stellarium', url: 'https://stellarium.org/', provider: 'Open Source', type: 'Desktop/Mobile', desc: 'Free open-source planetarium software' },
  { name: 'Celestia', url: 'https://celestia.space/', provider: 'Open Source', type: '3D Simulation', desc: 'Real-time 3D space simulation' },
  { name: 'WorldWide Telescope', url: 'https://worldwidetelescope.org/', provider: 'Microsoft/AAS', type: 'Web/Desktop', desc: 'Universe visualization from your browser' },
  { name: 'Aladin Sky Atlas', url: 'https://aladin.u-strasbg.fr/', provider: 'CDS Strasbourg', type: 'Professional', desc: 'Interactive sky atlas for astronomers' },
  { name: 'KStars', url: 'https://kstars.kde.org/', provider: 'KDE', type: 'Desktop', desc: 'Desktop planetarium for KDE/Linux' },
  { name: 'Cartes du Ciel', url: 'https://www.ap-i.net/skychart/', provider: 'Patrick Chevalley', type: 'Desktop', desc: 'Free sky charting software' },
  { name: 'Nightshift', url: 'https://www.nightshift.gg/', provider: 'Nightshift', type: 'Mobile App', desc: 'Stargazing app with AR features' },
  { name: 'Star Walk 2', url: 'https://vitotechnology.com/star-walk.html', provider: 'Vito', type: 'Mobile App', desc: 'Interactive stargazing guide' },
  { name: 'SAOImage DS9', url: 'https://sites.google.com/cfa.harvard.edu/saoimageds9', provider: 'Smithsonian/CfA', type: 'Professional', desc: 'Astronomical imaging and data visualization' },
  { name: 'TOPCAT', url: 'https://www.star.bris.ac.uk/~mbt/topcat/', provider: 'Bristol University', type: 'Professional', desc: 'Tool for operations on catalogs and tables' },
  { name: 'STILTS', url: 'https://www.star.bris.ac.uk/~mbt/stilts/', provider: 'Bristol University', type: 'Professional', desc: 'Command-line tools for table manipulation' },
  { name: 'SpaceEngine', url: 'https://spaceengine.org/', provider: 'Cosmographic Software', type: '3D Simulation', desc: 'Free universe simulator with photorealistic graphics' },
  { name: 'Universe Sandbox', url: 'https://universesandbox.com/', provider: 'Giant Army', type: '3D Simulation', desc: 'Interactive space gravity simulator' },
  { name: 'SkySafari', url: 'https://skysafariastronomy.com/', provider: 'Simulation Curriculum', type: 'Mobile App', desc: 'Professional planetarium app for mobile' },
  { name: 'Star Walk', url: 'https://vitotechnology.com/star-walk.html', provider: 'Vito', type: 'Mobile App', desc: 'Stargazing guide with augmented reality' },
  { name: 'Star Chart', url: 'https://www.escapistgames.com/star-chart/', provider: 'Escapist Games', type: 'Mobile App', desc: 'Star mapping app for iOS and Android' },
  { name: 'StarTracker', url: 'https://www.shenya.im/', provider: 'Shenya', type: 'Mobile App', desc: 'Mobile sky map with AR mode' },
  { name: 'SkyView', url: 'https://www.ttquery.com/skyview/', provider: 'Terminal Eleven', type: 'Mobile App', desc: 'Point device to identify objects in the sky' },
  { name: 'Exoplanet', url: 'https://exoplanetapp.com/', provider: 'Hanno Rein', type: 'Mobile App', desc: 'Interactive catalog of exoplanets' },
  { name: 'LunarMap', url: 'https://www.ap-i.net/lunarmap/', provider: 'Christian Legrand', type: 'Desktop', desc: 'Detailed lunar visualization software' }
]

// ============================================
// DATA ARCHIVES & DATABASES (30 items)
// ============================================

const dataArchives = [
  { name: 'SIMBAD', url: 'http://simbad.u-strasbg.fr/simbad/', type: 'Reference Database', desc: 'Strasbourg astronomical database with 12+ million objects' },
  { name: 'VizieR', url: 'https://vizier.u-strasbg.fr/viz-bin/VizieR', type: 'Catalog Archive', desc: 'Astronomical catalog archive with 20,000+ catalogs' },
  { name: 'NASA ADS', url: 'https://ui.adsabs.harvard.edu/', type: 'Literature Database', desc: 'Astrophysics Data System with 15+ million papers' },
  { name: 'NED', url: 'https://ned.ipac.caltech.edu/', type: 'Galaxy Database', desc: 'NASA/IPAC Extragalactic Database' },
  { name: 'MAST', url: 'https://mast.stsci.edu/', type: 'Mission Archive', desc: 'Mikulski Archive for Space Telescopes (Hubble, TESS, etc.)' },
  { name: 'HEASARC', url: 'https://heasarc.gsfc.nasa.gov/', type: 'High Energy Archive', desc: 'High Energy Astrophysics Science Archive' },
  { name: 'IRSA', url: 'https://irsa.ipac.caltech.edu/', type: 'Infrared Archive', desc: 'NASA/IPAC Infrared Science Archive' },
  { name: 'NASA Exoplanet Archive', url: 'https://exoplanetarchive.ipac.caltech.edu/', type: 'Exoplanet Data', desc: 'Comprehensive exoplanet data and tools' },
  { name: 'SDSS', url: 'https://www.sdss.org/', type: 'Survey Data', desc: 'Sloan Digital Sky Survey - millions of spectra and images' },
  { name: '2MASS', url: 'https://irsa.ipac.caltech.edu/Missions/2mass.html', type: 'Survey Data', desc: 'Two Micron All Sky Survey catalog' },
  { name: 'Gaia Archive', url: 'https://archives.esac.esa.int/gaia/', type: 'Mission Data', desc: 'ESA Gaia mission with 1.8 billion star catalog' },
  { name: 'Pan-STARRS', url: 'https://panstarrs.stsci.edu/', type: 'Survey Data', desc: 'Panoramic Survey Telescope and Rapid Response System' },
  { name: 'Hubble Legacy Archive', url: 'https://hla.stsci.edu/', type: 'Mission Data', desc: 'Enhanced Hubble data products and images' },
  { name: 'JWST Data Archive', url: 'https://archive.stsci.edu/missions-and-data/jwst', type: 'Mission Data', desc: 'James Webb Space Telescope archive' },
  { name: 'Chandra Data Archive', url: 'https://cxc.harvard.edu/cda/', type: 'Mission Data', desc: 'X-ray observatory data archive' },
  { name: 'XMM-Newton Science Archive', url: 'https://nxsa.esac.esa.int/nxsa-web/', type: 'Mission Data', desc: 'ESA X-ray observatory data' },
  { name: 'ESO Science Archive', url: 'https://archive.eso.org/', type: 'Observatory Archive', desc: 'European Southern Observatory data' },
  { name: 'ALMA Science Portal', url: 'https://almascience.nrao.edu/', type: 'Observatory Archive', desc: 'Atacama Large Millimeter/submillimeter Array data' },
  { name: 'LAMBDA', url: 'https://lambda.gsfc.nasa.gov/', type: 'Cosmology', desc: 'Legacy Archive for Microwave Background Data Analysis' },
  { name: 'Planck Archive', url: 'https://pla.esac.esa.int/', type: 'Mission Data', desc: 'Planck satellite CMB data' },
  { name: 'Kepler/K2 Data', url: 'https://archive.stsci.edu/missions-and-data/kepler', type: 'Mission Data', desc: 'Kepler and K2 mission exoplanet data' },
  { name: 'TESS Data', url: 'https://archive.stsci.edu/missions-and-data/tess', type: 'Mission Data', desc: 'Transiting Exoplanet Survey Satellite data' },
  { name: 'WFC3 Library', url: 'https://www.stsci.edu/hst/instrumentation/wfc3', type: 'Instrument Data', desc: 'Hubble Wide Field Camera 3 data' },
  { name: 'VLA Archive', url: 'https://science.nrao.edu/facilities/vla/archive', type: 'Observatory Archive', desc: 'Very Large Array radio astronomy data' },
  { name: 'ATNF Pulsar Catalogue', url: 'https://www.atnf.csiro.au/research/pulsar/psrcat/', type: 'Catalog', desc: 'Comprehensive pulsar database' },
  { name: 'ExoMol', url: 'https://www.exomol.com/', type: 'Molecular Database', desc: 'Molecular spectroscopy for exoplanets' },
  { name: 'Atomic Spectra Database', url: 'https://physics.nist.gov/PhysRefData/ASD/', provider: 'NIST', type: 'Reference', desc: 'Atomic spectra and transition data' },
  { name: 'CDS Portal', url: 'https://cdsportal.u-strasbg.fr/', type: 'Multi-service', desc: 'Strasbourg astronomical data center portal' },
  { name: 'VOSA', url: 'http://svo2.cab.inta-csic.es/theory/vosa/', type: 'Virtual Observatory', desc: 'Virtual Observatory SED Analyzer' },
  { name: 'Astroquery', url: 'https://astroquery.readthedocs.io/', type: 'Python Tool', desc: 'Python access to online astronomical data' }
]

// ============================================
// RESEARCH & JOURNALS (27 items)
// ============================================

const researchJournals = [
  { name: 'The Astrophysical Journal', url: 'https://iopscience.iop.org/journal/0004-637X', type: 'Journal', desc: 'Premier journal for astrophysics research (ApJ)' },
  { name: 'Astronomy & Astrophysics', url: 'https://www.aanda.org/', type: 'Journal', desc: 'Leading European astronomy journal (A&A)' },
  { name: 'Monthly Notices of the RAS', url: 'https://academic.oup.com/mnras', type: 'Journal', desc: 'Royal Astronomical Society journal (MNRAS)' },
  { name: 'The Astronomical Journal', url: 'https://iopscience.iop.org/journal/1538-3881', type: 'Journal', desc: 'Observational astronomy research (AJ)' },
  { name: 'Nature Astronomy', url: 'https://www.nature.com/natastron/', type: 'Journal', desc: 'High-impact astronomy and astrophysics' },
  { name: 'Science Astronomy', url: 'https://www.science.org/journals', type: 'Journal', desc: 'Broad-interest astronomy papers' },
  { name: 'Physical Review D', url: 'https://journals.aps.org/prd/', type: 'Journal', desc: 'Gravitational physics and cosmology' },
  { name: 'Journal of Cosmology', url: 'https://www.jcaps.net/', type: 'Journal', desc: 'Astroparticle physics and cosmology (JCAP)' },
  { name: 'Astrobiology', url: 'https://www.liebertpub.com/ast', type: 'Journal', desc: 'Origin and evolution of life in the universe' },
  { name: 'Publications of the ASP', url: 'https://iopscience.iop.org/journal/1538-3873', type: 'Journal', desc: 'Astronomical Society of the Pacific (PASP)' },
  { name: 'Classical and Quantum Gravity', url: 'https://iopscience.iop.org/journal/0264-9381', type: 'Journal', desc: 'Gravitational physics journal' },
  { name: 'General Relativity and Gravitation', url: 'https://link.springer.com/journal/10714', type: 'Journal', desc: 'Gravitational physics research' },
  { name: 'Solar Physics', url: 'https://link.springer.com/journal/11207', type: 'Journal', desc: 'Solar and heliospheric research' },
  { name: 'Icarus', url: 'https://www.sciencedirect.com/journal/icarus', type: 'Journal', desc: 'Planetary science journal' },
  { name: 'Planetary Science Journal', url: 'https://iopscience.iop.org/journal/2632-3338', type: 'Journal', desc: 'PSJ - Planetary research journal' },
  { name: 'New Astronomy', url: 'https://www.sciencedirect.com/journal/new-astronomy', type: 'Journal', desc: 'Astronomy and astrophysics research' },
  { name: 'Research in Astronomy & Astrophysics', url: 'https://iopscience.iop.org/journal/1674-4527', type: 'Journal', desc: 'RAA - Chinese astronomy journal' },
  { name: 'Journal of Astrophysics and Astronomy', url: 'https://link.springer.com/journal/12036', type: 'Journal', desc: 'Indian Academy of Sciences journal' },
  { name: 'Publications of the ASJ', url: 'https://pasj.oxfordjournals.org/', type: 'Journal', desc: 'Astronomical Society of Japan (PASJ)' },
  { name: 'Chinese Astronomy & Astrophysics', url: 'https://www.sciencedirect.com/journal/chinese-astronomy-and-astrophysics', type: 'Journal', desc: 'Chinese astronomy translations' },
  { name: 'Astronomische Nachrichten', url: 'https://www.aip.org/', type: 'Journal', desc: 'German astronomy journal (AN)' },
  { name: 'Experimental Astronomy', url: 'https://link.springer.com/journal/10686', type: 'Journal', desc: 'Instrumentation and methods' },
  { name: 'High Energy Density Physics', url: 'https://www.sciencedirect.com/journal/high-energy-density-physics', type: 'Journal', desc: 'Laboratory astrophysics' },
  { name: 'Living Reviews', url: 'https://link.springer.com/journal/41114', type: 'Review Journal', desc: 'Living Reviews in Relativity and Solar Physics' },
  { name: 'Universe', url: 'https://www.mdpi.com/journal/universe', type: 'Open Access', desc: 'Multidisciplinary astronomy journal' },
  { name: 'Galaxies', url: 'https://www.mdpi.com/journal/galaxies', type: 'Open Access', desc: 'Galaxy research open access' },
  { name: 'Symmetry', url: 'https://www.mdpi.com/journal/symmetry', type: 'Open Access', desc: 'Physics and mathematics open access' }
]

// ============================================
// OBSERVATORIES & TELESCOPES (35 items)
// ============================================

const groundOpticalTelescopes = [
  { name: 'Keck Observatory', url: 'https://keckobservatory.org/', location: 'Hawaii', type: 'Optical/IR', desc: 'Twin 10-meter telescopes on Mauna Kea' },
  { name: 'Very Large Telescope (VLT)', url: 'https://www.eso.org/public/teles-instr/paranal-observatory/', location: 'Chile', type: 'Optical/IR', desc: 'ESO\'s four 8.2m telescopes at Paranal' },
  { name: 'Gran Telescopio Canarias', url: 'https://www.gtc.iac.es/', location: 'Spain', type: 'Optical/IR', desc: '10.4m telescope - world\'s largest optical' },
  { name: 'Subaru Telescope', url: 'https://subarutelescope.org/', location: 'Hawaii', type: 'Optical/IR', desc: '8.2m Japanese telescope on Mauna Kea' },
  { name: 'Gemini Observatory', url: 'https://www.gemini.edu/', location: 'Hawaii/Chile', type: 'Optical/IR', desc: 'Twin 8.1m telescopes in both hemispheres' },
  { name: 'SALT', url: 'https://www.salt.ac.za/', location: 'South Africa', type: 'Optical', desc: 'Southern African Large Telescope - 11m' },
  { name: 'Hobby-Eberly Telescope', url: 'https://mcdonaldobservatory.org/research/het/', location: 'Texas', type: 'Optical', desc: '9.2m telescope at McDonald Observatory' },
  { name: 'Magellan Telescopes', url: 'https://obs.carnegiescience.edu/', location: 'Chile', type: 'Optical/IR', desc: 'Twin 6.5m telescopes at Las Campanas' },
  { name: 'Large Binocular Telescope', url: 'https://www.lbto.org/', location: 'Arizona', type: 'Optical/IR', desc: 'Twin 8.4m mirrors on Mount Graham' },
  { name: 'Palomar Observatory', url: 'https://sites.astro.caltech.edu/palomar/', location: 'California', type: 'Optical/IR', desc: 'Home of the famous 200-inch Hale Telescope' },
  { name: 'Lick Observatory', url: 'https://www.ucolick.org/', location: 'California', type: 'Optical', desc: 'Historic observatory on Mount Hamilton' },
  { name: 'Kitt Peak National Observatory', url: 'https://www.noao.edu/kpno/', location: 'Arizona', type: 'Optical/Radio', desc: 'US national optical astronomy observatory' },
  { name: 'Cerro Tololo Inter-American', url: 'https://www.ctio.noao.edu/', location: 'Chile', type: 'Optical/IR', desc: 'Major Southern Hemisphere observatory' },
  { name: 'La Palma Observatory', url: 'https://www.iac.es/en/observatorios-de-canarias', location: 'Canary Islands', type: 'Optical/IR', desc: 'Roque de los Muchachos Observatory' }
]

const futureTelescopes = [
  { name: 'Extremely Large Telescope', url: 'https://elt.eso.org/', location: 'Chile', type: 'Future', desc: '39-meter telescope under construction' },
  { name: 'Thirty Meter Telescope', url: 'https://www.tmt.org/', location: 'Hawaii', type: 'Future', desc: '30-meter next-generation telescope' },
  { name: 'Giant Magellan Telescope', url: 'https://www.gmto.org/', location: 'Chile', type: 'Future', desc: '25-meter telescope in development' }
]

const spaceTelescopes = [
  { name: 'Hubble Space Telescope', url: 'https://hubblesite.org/', agency: 'NASA/ESA', type: 'Space', desc: 'Legendary 30-year observatory in orbit' },
  { name: 'James Webb Space Telescope', url: 'https://webb.nasa.gov/', agency: 'NASA/ESA/CSA', type: 'Space', desc: 'Infrared successor to Hubble' },
  { name: 'Chandra X-ray Observatory', url: 'https://chandra.harvard.edu/', agency: 'NASA', type: 'Space', desc: 'X-ray telescope studying high-energy universe' },
  { name: 'TESS', url: 'https://tess.mit.edu/', agency: 'NASA', type: 'Space', desc: 'Transiting Exoplanet Survey Satellite' },
  { name: 'Gaia', url: 'https://www.cosmos.esa.int/web/gaia', agency: 'ESA', type: 'Space', desc: 'Mapping 1.8 billion stars in 3D' },
  { name: 'XMM-Newton', url: 'https://www.esa.int/Science_Exploration/Space_Science/XMM-Newton', agency: 'ESA', type: 'Space', desc: 'X-ray Multi-Mirror Mission' },
  { name: 'Integral', url: 'https://www.esa.int/Science_Exploration/Space_Science/Integral', agency: 'ESA', type: 'Space', desc: 'Gamma-ray observatory' },
  { name: 'Fermi Gamma-ray Telescope', url: 'https://fermi.gsfc.nasa.gov/', agency: 'NASA', type: 'Space', desc: 'Gamma-ray burst and pulsar hunter' },
  { name: 'NuSTAR', url: 'https://www.nustar.caltech.edu/', agency: 'NASA', type: 'Space', desc: 'Nuclear Spectroscopic Telescope Array' },
  { name: 'Swift', url: 'https://swift.gsfc.nasa.gov/', agency: 'NASA', type: 'Space', desc: 'Gamma-ray burst rapid response' },
  { name: 'WISE', url: 'https://wise.astro.ucla.edu/', agency: 'NASA', type: 'Space', desc: 'Wide-field Infrared Survey Explorer' },
  { name: 'Herschel Space Observatory', url: 'https://www.cosmos.esa.int/web/herschel', agency: 'ESA', type: 'Space', desc: 'Far-infrared space observatory (2009-2013)' },
  { name: 'Planck', url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck', agency: 'ESA', type: 'Space', desc: 'Cosmic microwave background mapper' },
  { name: 'Kepler/K2', url: 'https://www.nasa.gov/mission_pages/kepler/main/index.html', agency: 'NASA', type: 'Space', desc: 'Revolutionary exoplanet hunter mission' }
]

const radioTelescopes = [
  { name: 'ALMA', url: 'https://www.almaobservatory.org/', location: 'Chile', type: 'Radio/Submm', desc: 'Atacama Large Millimeter/submillimeter Array' },
  { name: 'Very Large Array (VLA)', url: 'https://public.nrao.edu/telescopes/vla/', location: 'New Mexico', type: 'Radio', desc: '27 antennas on the Plains of San Agustin' },
  { name: 'FAST', url: 'https://fast.bao.ac.cn/', location: 'China', type: 'Radio', desc: 'Five-hundred-meter Aperture Spherical Telescope' },
  { name: 'Effelsberg 100m', url: 'https://www.mpifr-bonn.mpg.de/effelsberg', location: 'Germany', type: 'Radio', desc: 'Max Planck 100-meter radio telescope' },
  { name: 'Green Bank Telescope', url: 'https://greenbankobservatory.org/', location: 'West Virginia', type: 'Radio', desc: 'World\'s largest fully steerable radio dish' },
  { name: 'Parkes Telescope', url: 'https://www.parkes.atnf.csiro.au/', location: 'Australia', type: 'Radio', desc: 'Murriyang - iconic 64-meter dish' },
  { name: 'Jodrell Bank', url: 'https://www.jodrellbank.net/', location: 'UK', type: 'Radio', desc: 'Lovell Telescope and observatory' },
  { name: 'LOFAR', url: 'https://lofar.eu/', location: 'Europe', type: 'Radio', desc: 'Low-Frequency Array - thousands of antennas' },
  { name: 'MeerKAT', url: 'https://www.sarao.ac.za/science-engineering/meerkat/', location: 'South Africa', type: 'Radio', desc: '64-dish precursor to SKA' },
  { name: 'Square Kilometre Array', url: 'https://www.skao.int/', location: 'Australia/South Africa', type: 'Radio', desc: 'World\'s largest radio telescope under construction' }
]

// ============================================
// SPACE AGENCIES (12 items)
// ============================================

const spaceAgencies = [
  { name: 'NASA', url: 'https://www.nasa.gov/', country: 'USA', type: 'Space Agency', desc: 'National Aeronautics and Space Administration' },
  { name: 'ESA', url: 'https://www.esa.int/', country: 'Europe', type: 'Space Agency', desc: 'European Space Agency - 22 member states' },
  { name: 'JAXA', url: 'https://global.jaxa.jp/', country: 'Japan', type: 'Space Agency', desc: 'Japan Aerospace Exploration Agency' },
  { name: 'ISRO', url: 'https://www.isro.gov.in/', country: 'India', type: 'Space Agency', desc: 'Indian Space Research Organisation' },
  { name: 'CNSA', url: 'http://www.cnsa.gov.cn/', country: 'China', type: 'Space Agency', desc: 'China National Space Administration' },
  { name: 'ROSCOSMOS', url: 'https://www.roscosmos.ru/', country: 'Russia', type: 'Space Agency', desc: 'Russian Federal Space Agency' },
  { name: 'CSA', url: 'https://www.asc-csa.gc.ca/', country: 'Canada', type: 'Space Agency', desc: 'Canadian Space Agency' },
  { name: 'ASI', url: 'https://www.asi.it/', country: 'Italy', type: 'Space Agency', desc: 'Italian Space Agency' },
  { name: 'CNES', url: 'https://cnes.fr/', country: 'France', type: 'Space Agency', desc: 'Centre National d\'Études Spatiales' },
  { name: 'DLR', url: 'https://www.dlr.de/', country: 'Germany', type: 'Space Agency', desc: 'German Aerospace Center' },
  { name: 'UKSA', url: 'https://www.gov.uk/government/organisations/uk-space-agency', country: 'UK', type: 'Space Agency', desc: 'UK Space Agency' },
  { name: 'KARI', url: 'https://www.kari.re.kr/', country: 'Korea', type: 'Space Agency', desc: 'Korea Aerospace Research Institute' }
]

// ============================================
// CITIZEN SCIENCE (8 items)
// ============================================

const citizenScienceProjects = [
  { name: 'Galaxy Zoo', url: 'https://www.zooniverse.org/projects/zookeeper/galaxy-zoo/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Classify galaxies by shape and morphology' },
  { name: 'Planet Hunters TESS', url: 'https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Find exoplanets in TESS data' },
  { name: 'Backyard Worlds', url: 'https://backyardworlds.org/', provider: 'NASA', type: 'Citizen Science', desc: 'Discover brown dwarfs and rogue planets' },
  { name: 'Radio Galaxy Zoo', url: 'https://www.zooniverse.org/projects/astrogreg/radio-galaxy-zoo/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Classify radio galaxies and black holes' },
  { name: 'Space Warps', url: 'https://www.zooniverse.org/projects/aprajita/space-warps/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Find gravitational lenses' },
  { name: 'Disk Detective', url: 'https://www.zooniverse.org/projects/ssilverberg/disk-detective/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Identify debris disks around stars' },
  { name: 'Milky Way Project', url: 'https://www.zooniverse.org/projects/povich/milky-way-project/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Map star formation in our galaxy' },
  { name: 'Planet Four', url: 'https://www.zooniverse.org/projects/mschwamb/planet-four/', provider: 'Zooniverse', type: 'Citizen Science', desc: 'Map surface features on Mars' }
]

// ============================================
// ONLINE COURSES (8 items)
// ============================================

const onlineCourses = [
  { name: 'Coursera Astronomy', url: 'https://www.coursera.org/browse/physical-science-and-engineering/astronomy', provider: 'Coursera', type: 'Online Course', desc: 'University astronomy courses from top institutions' },
  { name: 'edX Astronomy (ANU)', url: 'https://www.edx.org/learn/astronomy', provider: 'edX', type: 'Online Course', desc: 'Astrophysics courses from ANU and University of Arizona' },
  { name: 'Khan Academy Cosmology', url: 'https://www.khanacademy.org/science/cosmology-and-astronomy', provider: 'Khan Academy', type: 'Online Course', desc: 'Free cosmology and astronomy lessons' },
  { name: 'FutureLearn Astronomy', url: 'https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/astronomy', provider: 'FutureLearn', type: 'Online Course', desc: 'Astronomy courses from UK universities' },
  { name: 'Swayam Astronomy', url: 'https://swayam.gov.in/', provider: 'India', type: 'Online Course', desc: 'Free Indian government astronomy courses' },
  { name: 'OpenLearn Astronomy', url: 'https://www.open.edu/openlearn/science-maths-technology/astronomy', provider: 'Open University', type: 'Online Course', desc: 'Free UK Open University courses' },
  { name: 'CosmoLearning Astronomy', url: 'https://www.cosmolearning.com/astronomy/', provider: 'CosmoLearning', type: 'Video Lectures', desc: 'Free astronomy video courses' },
  { name: 'Astronomy MOOCs', url: 'https://www.classcentral.com/subject/astronomy', provider: 'Class Central', type: 'Course Directory', desc: 'Directory of online astronomy courses' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <!-- Indigo/Purple space gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-space-950 to-purple-900/30"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/science" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Science
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30 mb-6">
            <span class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-indigo-300">2500+ Global Astronomy Resources from K-12 to PhD</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Astronomy
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the cosmos from K-12 to PhD research with 2500+ curated resources from NASA, ESA, and institutions worldwide. Free textbooks, observational guides, planetarium software, and research tools.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-indigo-400">3</div>
              <div class="text-sm text-gray-400">Difficulty Levels</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-violet-400">100+</div>
              <div class="text-sm text-gray-400">Free Textbooks</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-400">50+</div>
              <div class="text-sm text-gray-400">Planetarium Tools</div>
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
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-indigo-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section id="featured">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-indigo-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">K-12 School Resources</h2>
            <p class="text-gray-400">Astronomy resources for primary and secondary school students</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in k12Resources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Free Textbooks</h2>
            <p class="text-gray-400">Comprehensive astronomy textbooks organized by level</p>
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

      <!-- Observational Astronomy Resources -->
      <section id="observational" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Observational Astronomy Resources</h2>
            <p class="text-gray-400">Tools and guides for amateur and professional observers</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="resource in observationalResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ resource.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ resource.title }}</h4>
            <p class="text-sm text-gray-400">{{ resource.provider }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Astrophysics Resources -->
      <section id="astrophysics" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Astrophysics Resources</h2>
            <p class="text-gray-400">Research tools, data analysis software, and academic resources</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="resource in astrophysicsResources" :key="resource.title" :href="resource.url" target="_blank"
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

      <!-- Space Exploration Resources -->
      <section id="exploration" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Space Exploration Resources</h2>
            <p class="text-gray-400">Space agencies, companies, and mission updates</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="resource in spaceExplorationResources" :key="resource.title" :href="resource.url" target="_blank"
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

      <!-- Planetarium Software & Tools -->
      <section id="software" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Planetarium Software & Tools</h2>
            <p class="text-gray-400">Desktop, web, and mobile applications for exploring the night sky</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="tool in planetariumSoftware" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ tool.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{{ tool.name }}</h4>
            <p class="text-sm text-gray-400">{{ tool.provider }}</p>
            <p class="text-xs text-gray-500">{{ tool.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Data Archives & Databases -->
      <section id="archives" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Data Archives & Databases</h2>
            <p class="text-gray-400">Essential astronomical databases and mission archives for research</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="archive in dataArchives" :key="archive.name" :href="archive.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ archive.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{{ archive.name }}</h4>
            <p class="text-xs text-gray-400">{{ archive.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Observatories & Telescopes -->
      <section id="observatories" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Observatories & Telescopes</h2>
            <p class="text-gray-400">Ground and space-based astronomical observatories worldwide</p>
          </div>
        </div>

        <!-- Ground Optical Telescopes -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-indigo-400 mb-4">Ground-Based Optical/IR Telescopes</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="tel in groundOpticalTelescopes" :key="tel.name" :href="tel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ tel.location }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{{ tel.name }}</h4>
              <p class="text-xs text-gray-500">{{ tel.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Future Telescopes -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-emerald-400 mb-4">Future Telescopes</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="tel in futureTelescopes" :key="tel.name" :href="tel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ tel.location }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{{ tel.name }}</h4>
              <p class="text-xs text-gray-500">{{ tel.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Space Telescopes -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-violet-400 mb-4">Space Telescopes</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="tel in spaceTelescopes" :key="tel.name" :href="tel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded">{{ tel.agency }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">{{ tel.name }}</h4>
              <p class="text-xs text-gray-500">{{ tel.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Radio Telescopes -->
        <div>
          <h3 class="text-lg font-semibold text-amber-400 mb-4">Radio Telescopes</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a v-for="tel in radioTelescopes" :key="tel.name" :href="tel.url" target="_blank"
               class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
              <div class="flex items-start justify-between mb-2">
                <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ tel.location }}</span>
              </div>
              <h4 class="font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{{ tel.name }}</h4>
              <p class="text-xs text-gray-500">{{ tel.desc }}</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Space Agencies -->
      <section id="agencies" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Space Agencies</h2>
            <p class="text-gray-400">National and international space organizations worldwide</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="agency in spaceAgencies" :key="agency.name" :href="agency.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ agency.country }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{{ agency.name }}</h4>
            <p class="text-xs text-gray-500">{{ agency.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Citizen Science -->
      <section id="citizen" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Citizen Science Projects</h2>
            <p class="text-gray-400">Contribute to real astronomy research from home</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="project in citizenScienceProjects" :key="project.name" :href="project.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ project.provider }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">{{ project.name }}</h4>
            <p class="text-xs text-gray-500">{{ project.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Online Courses -->
      <section id="courses" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Online Courses</h2>
            <p class="text-gray-400">Free and paid astronomy courses from leading institutions</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="course in onlineCourses" :key="course.name" :href="course.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ course.provider }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{{ course.name }}</h4>
            <p class="text-xs text-gray-500">{{ course.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Research & Journals -->
      <section id="research" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white">Research & Journals</h2>
            <p class="text-gray-400">Academic journals and research resources for astronomy and astrophysics</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="journal in researchJournals" :key="journal.name" :href="journal.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ journal.type }}</span>
            </div>
            <h4 class="font-semibold text-white mb-1 group-hover:text-rose-400 transition-colors">{{ journal.name }}</h4>
            <p class="text-xs text-gray-400">{{ journal.desc }}</p>
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
