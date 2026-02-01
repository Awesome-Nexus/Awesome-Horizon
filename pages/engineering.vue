<script setup lang="ts">
useHead({
  title: 'Engineering - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master engineering from K-12 to professional with 5000+ curated resources. 13+ disciplines, CAD/CAE tools, professional licensure, global education systems, and emerging technologies.' }
  ]
})

// Hero Statistics
const stats = [
  { label: 'Engineering Students', value: '25M+', icon: 'users' },
  { label: 'Professional Engineers', value: '10M+', icon: 'briefcase' },
  { label: 'Universities', value: '10,000+', icon: 'building' },
  { label: 'Resources', value: '5000+', icon: 'book-open' }
]

// Featured Resources
const featuredResources = [
  { 
    title: 'MIT OpenCourseWare Engineering', 
    author: 'MIT', 
    url: 'https://ocw.mit.edu/courses/engineering/', 
    desc: 'Complete undergraduate and graduate engineering courses',
    type: 'Free Courses',
    level: 'UG/Grad'
  },
  { 
    title: 'NPTEL Engineering', 
    author: 'IITs India', 
    url: 'https://nptel.ac.in/', 
    desc: 'India\'s largest technical education platform',
    type: 'Free Courses',
    level: 'All Levels'
  },
  { 
    title: 'Engineering Toolbox', 
    author: 'EngineeringToolBox', 
    url: 'https://www.engineeringtoolbox.com/', 
    desc: 'Engineering resources, formulas, and data',
    type: 'Reference',
    level: 'Professional'
  },
  { 
    title: 'GrabCAD Community', 
    author: 'Stratasys', 
    url: 'https://grabcad.com/', 
    desc: '5M+ CAD models and engineering community',
    type: 'Community',
    level: 'All Levels'
  },
  { 
    title: 'IEEE Xplore', 
    author: 'IEEE', 
    url: 'https://ieeexplore.ieee.org/', 
    desc: '5M+ research papers and standards',
    type: 'Research Database',
    level: 'Professional'
  },
  { 
    title: 'Fusion 360', 
    author: 'Autodesk', 
    url: 'https://www.autodesk.com/products/fusion-360/', 
    desc: 'CAD/CAM/CAE tool (free for students)',
    type: 'CAD Software',
    level: 'All Levels'
  }
]

// Quick Links
const quickLinks = [
  { name: 'Disciplines', url: '#disciplines', icon: 'layers', count: 13 },
  { name: 'Learning Platforms', url: '#platforms', icon: 'monitor', count: 15 },
  { name: 'Free Textbooks', url: '#textbooks', icon: 'book', count: 30 },
  { name: 'CAD Tools', url: '#cad', icon: 'box', count: 20 },
  { name: 'Software', url: '#software', icon: 'cpu', count: 40 },
  { name: 'Standards', url: '#standards', icon: 'file-text', count: 15 },
  { name: 'Licensure', url: '#licensure', icon: 'award', count: 10 },
  { name: 'Organizations', url: '#organizations', icon: 'globe', count: 20 },
  { name: 'Careers', url: '#careers', icon: 'trending-up', count: 15 },
  { name: 'Emerging Tech', url: '#emerging', icon: 'zap', count: 10 }
]

// Engineering Disciplines
const disciplines = [
  { 
    name: 'Mechanical Engineering', 
    url: 'https://www.asme.org/', 
    desc: 'Design, analysis, manufacturing of mechanical systems',
    org: 'ASME',
    examples: 'Automotive, HVAC, Robotics'
  },
  { 
    name: 'Electrical Engineering', 
    url: 'https://www.ieee.org/', 
    desc: 'Electronics, power systems, telecommunications',
    org: 'IEEE',
    examples: 'Circuits, Power grids, IoT'
  },
  { 
    name: 'Civil Engineering', 
    url: 'https://www.asce.org/', 
    desc: 'Infrastructure, buildings, transportation, water',
    org: 'ASCE',
    examples: 'Bridges, Dams, Skyscrapers'
  },
  { 
    name: 'Chemical Engineering', 
    url: 'https://www.aiche.org/', 
    desc: 'Process design, materials, energy conversion',
    org: 'AIChE',
    examples: 'Pharmaceuticals, Refineries, Food'
  },
  { 
    name: 'Computer Engineering', 
    url: 'https://www.computer.org/', 
    desc: 'Hardware-software integration, embedded systems',
    org: 'IEEE CS',
    examples: 'Processors, Embedded systems, VLSI'
  },
  { 
    name: 'Aerospace Engineering', 
    url: 'https://www.aiaa.org/', 
    desc: 'Aircraft, spacecraft, propulsion systems',
    org: 'AIAA',
    examples: 'Airplanes, Satellites, Rockets'
  },
  { 
    name: 'Biomedical Engineering', 
    url: 'https://www.bmes.org/', 
    desc: 'Medical devices, imaging, tissue engineering',
    org: 'BMES',
    examples: 'Prosthetics, MRI, Pacemakers'
  },
  { 
    name: 'Industrial Engineering', 
    url: 'https://www.iise.org/', 
    desc: 'Optimization, systems, supply chain, ergonomics',
    org: 'IISE',
    examples: 'Manufacturing, Logistics, Quality'
  },
  { 
    name: 'Environmental Engineering', 
    url: 'https://www.aaee.net/', 
    desc: 'Pollution control, sustainability, water treatment',
    org: 'AAEE',
    examples: 'Wastewater, Air quality, Remediation'
  },
  { 
    name: 'Materials Science', 
    url: 'https://www.tms.org/', 
    desc: 'Metals, ceramics, polymers, nanomaterials',
    org: 'TMS',
    examples: 'Composites, Semiconductors, Alloys'
  },
  { 
    name: 'Software Engineering', 
    url: 'https://www.computer.org/', 
    desc: 'Software design, development, testing, DevOps',
    org: 'ACM/IEEE',
    examples: 'Apps, Systems, AI/ML platforms'
  },
  { 
    name: 'Petroleum Engineering', 
    url: 'https://www.spe.org/', 
    desc: 'Oil/gas exploration, drilling, production',
    org: 'SPE',
    examples: 'Reservoirs, Drilling, Refining'
  },
  { 
    name: 'Nuclear Engineering', 
    url: 'https://www.ans.org/', 
    desc: 'Nuclear power, radiation, fusion research',
    org: 'ANS',
    examples: 'Reactors, Medical isotopes, Fusion'
  }
]

// Learning Platforms
const learningPlatforms = [
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/engineering/', desc: 'Complete MIT engineering courses', cost: 'Free' },
  { name: 'NPTEL (India)', url: 'https://nptel.ac.in/', desc: 'IIT engineering courses', cost: 'Free' },
  { name: 'Coursera Engineering', url: 'https://www.coursera.org/browse/engineering', desc: 'University partnerships', cost: 'Audit Free' },
  { name: 'edX Engineering', url: 'https://www.edx.org/learn/engineering', desc: 'MIT, Harvard, Berkeley', cost: 'Audit Free' },
  { name: 'Saylor Academy', url: 'https://www.saylor.org/', desc: 'Open engineering courses', cost: 'Free' },
  { name: 'Class Central', url: 'https://www.classcentral.com/subject/engineering', desc: 'Engineering course aggregator', cost: 'Free' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/science', desc: 'Fundamentals and basics', cost: 'Free' },
  { name: 'Brilliant.org', url: 'https://brilliant.org/courses/', desc: 'Interactive STEM learning', cost: 'Freemium' }
]

// Free Textbooks
const freeTextbooks = [
  { title: 'OpenStax Engineering', author: 'Rice University', url: 'https://openstax.org/subjects/view-all', subject: 'Various' },
  { title: 'LibreTexts Engineering', author: 'LibreTexts', url: 'https://eng.libretexts.org/', subject: 'All Disciplines' },
  { title: 'Engineering Mechanics', author: 'Hibbeler (samples)', url: 'https://www.pearson.com/', subject: 'Mechanical' },
  { title: 'Electrical Engineering', author: 'All About Circuits', url: 'https://www.allaboutcircuits.com/textbook/', subject: 'Electrical' },
  { title: 'Control Systems', author: 'Wikibooks', url: 'https://en.wikibooks.org/wiki/Control_Systems', subject: 'Controls' },
  { title: 'Mechanical Design', author: 'Shigley (resources)', url: 'https://www.mheducation.com/', subject: 'Mechanical' },
  { title: 'Fluid Mechanics', author: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/', subject: 'Mechanical/Civil' },
  { title: 'Thermodynamics', author: 'Cengel (resources)', url: 'https://www.mheducation.com/', subject: 'Mechanical' },
  { title: 'Bookboon Engineering', author: 'Various', url: 'https://bookboon.com/en/engineering-ebooks', subject: 'Various' },
  { title: 'IntechOpen Engineering', author: 'Various', url: 'https://www.intechopen.com/books/subject/engineering', subject: 'Various' }
]

// CAD Tools
const cadTools = [
  { name: 'AutoCAD', url: 'https://www.autodesk.com/products/autocad/overview', type: '2D/3D CAD', cost: 'Paid (Student Free)' },
  { name: 'Fusion 360', url: 'https://www.autodesk.com/products/fusion-360/', type: 'CAD/CAM/CAE', cost: 'Free Hobbyist' },
  { name: 'SolidWorks', url: 'https://www.solidworks.com/', type: '3D CAD', cost: 'Paid (Student)' },
  { name: 'Onshape', url: 'https://www.onshape.com/', type: 'Cloud CAD', cost: 'Free Tier' },
  { name: 'FreeCAD', url: 'https://www.freecad.org/', type: '3D CAD', cost: 'Open Source' },
  { name: 'Tinkercad', url: 'https://www.tinkercad.com/', type: 'Beginner CAD', cost: 'Free' },
  { name: 'SketchUp', url: 'https://www.sketchup.com/', type: '3D Modeling', cost: 'Freemium' },
  { name: 'CATIA', url: 'https://www.3ds.com/products-services/catia/', type: 'Enterprise CAD', cost: 'Paid' },
  { name: 'Siemens NX', url: 'https://www.plm.automation.siemens.com/global/en/products/nx/', type: 'Enterprise CAD', cost: 'Paid' },
  { name: 'PTC Creo', url: 'https://www.ptc.com/en/products/creo', type: '3D CAD', cost: 'Paid' },
  { name: 'Rhino', url: 'https://www.rhino3d.com/', type: '3D Modeling', cost: 'Paid' },
  { name: 'LibreCAD', url: 'https://librecad.org/', type: '2D CAD', cost: 'Open Source' }
]

// CAE & Simulation Tools
const caeTools = [
  { name: 'ANSYS Student', url: 'https://www.ansys.com/academic/students', type: 'FEA/CFD', cost: 'Free Student' },
  { name: 'MATLAB', url: 'https://www.mathworks.com/products/matlab.html', type: 'Computing', cost: 'Paid (Student)' },
  { name: 'Simulink', url: 'https://www.mathworks.com/products/simulink.html', type: 'Simulation', cost: 'Paid (Student)' },
  { name: 'COMSOL', url: 'https://www.comsol.com/', type: 'Multiphysics', cost: 'Paid' },
  { name: 'OpenFOAM', url: 'https://openfoam.org/', type: 'CFD', cost: 'Open Source' },
  { name: 'CalculiX', url: 'http://www.calculix.de/', type: 'FEA', cost: 'Open Source' },
  { name: 'Code_Aster', url: 'https://www.code-aster.org/', type: 'FEA', cost: 'Open Source' },
  { name: 'LTspice', url: 'https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html', type: 'Circuit', cost: 'Free' },
  { name: 'CircuitLab', url: 'https://www.circuitlab.com/', type: 'Circuit', cost: 'Freemium' },
  { name: 'Falstad Circuit', url: 'https://www.falstad.com/circuit/', type: 'Circuit', cost: 'Free' }
]

// Electrical/Electronics Tools
const electricalTools = [
  { name: 'KiCad', url: 'https://www.kicad.org/', type: 'PCB Design', cost: 'Open Source' },
  { name: 'Eagle', url: 'https://www.autodesk.com/products/eagle/overview', type: 'PCB Design', cost: 'Paid' },
  { name: 'Altium Designer', url: 'https://www.altium.com/altium-designer', type: 'PCB Design', cost: 'Paid' },
  { name: 'Proteus', url: 'https://www.labcenter.com/', type: 'Simulation', cost: 'Paid' },
  { name: 'Multisim', url: 'https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html', type: 'Simulation', cost: 'Paid' },
  { name: 'Arduino IDE', url: 'https://www.arduino.cc/en/software', type: 'Embedded', cost: 'Free' },
  { name: 'PlatformIO', url: 'https://platformio.org/', type: 'Embedded IDE', cost: 'Free' },
  { name: 'Fritzing', url: 'https://fritzing.org/', type: 'Prototyping', cost: 'Paid' }
]

// Programming for Engineers
const programmingTools = [
  { name: 'Python', url: 'https://www.python.org/', type: 'General', cost: 'Free' },
  { name: 'MATLAB', url: 'https://www.mathworks.com/', type: 'Technical', cost: 'Paid' },
  { name: 'Julia', url: 'https://julialang.org/', type: 'Scientific', cost: 'Free' },
  { name: 'C/C++', url: 'https://en.cppreference.com/', type: 'Systems', cost: 'Free' },
  { name: 'R', url: 'https://www.r-project.org/', type: 'Statistics', cost: 'Free' },
  { name: 'LabVIEW', url: 'https://www.ni.com/en-us/shop/labview.html', type: 'Data Acquisition', cost: 'Paid' },
  { name: 'NumPy/SciPy', url: 'https://numpy.org/', type: 'Python Libraries', cost: 'Free' },
  { name: 'Pandas', url: 'https://pandas.pydata.org/', type: 'Data Analysis', cost: 'Free' }
]

// 3D Printing Tools
const printingTools = [
  { name: 'Cura', url: 'https://ultimaker.com/software/ultimaker-cura', type: 'Slicer', cost: 'Free' },
  { name: 'PrusaSlicer', url: 'https://www.prusa3d.com/page/prusaslicer_424/', type: 'Slicer', cost: 'Free' },
  { name: 'Meshmixer', url: 'https://www.meshmixer.com/', type: 'Mesh Repair', cost: 'Free' },
  { name: 'Blender', url: 'https://www.blender.org/', type: '3D Modeling', cost: 'Free' },
  { name: 'Simplify3D', url: 'https://www.simplify3d.com/', type: 'Slicer', cost: 'Paid' },
  { name: 'OctoPrint', url: 'https://octoprint.org/', type: 'Printer Host', cost: 'Free' }
]

// Engineering Standards
const standardsOrgs = [
  { name: 'ISO', url: 'https://www.iso.org/', desc: 'International Standards Organization', scope: 'Global' },
  { name: 'IEC', url: 'https://www.iec.ch/', desc: 'Electrotechnical standards', scope: 'Global' },
  { name: 'IEEE Standards', url: 'https://standards.ieee.org/', desc: 'Electrical/Electronics standards', scope: 'Global' },
  { name: 'ASME', url: 'https://www.asme.org/', desc: 'Mechanical engineering standards', scope: 'USA/Global' },
  { name: 'ASCE', url: 'https://www.asce.org/', desc: 'Civil engineering standards', scope: 'USA' },
  { name: 'ASTM', url: 'https://www.astm.org/', desc: 'Materials testing standards', scope: 'Global' },
  { name: 'SAE International', url: 'https://www.sae.org/', desc: 'Automotive/aerospace standards', scope: 'Global' },
  { name: 'ANSI', url: 'https://www.ansi.org/', desc: 'American National Standards', scope: 'USA' },
  { name: 'DIN', url: 'https://www.din.de/en', desc: 'German standards', scope: 'Germany/EU' },
  { name: 'JIS', url: 'https://www.jisc.go.jp/eng/', desc: 'Japanese standards', scope: 'Japan' }
]

// Professional Organizations
const professionalOrgs = [
  { name: 'IEEE', url: 'https://www.ieee.org/', members: '400,000+', focus: 'Electrical/Electronics' },
  { name: 'ASME', url: 'https://www.asme.org/', members: '90,000+', focus: 'Mechanical' },
  { name: 'ASCE', url: 'https://www.asce.org/', members: '150,000+', focus: 'Civil' },
  { name: 'AIChE', url: 'https://www.aiche.org/', members: '60,000+', focus: 'Chemical' },
  { name: 'ACM', url: 'https://www.acm.org/', members: '100,000+', focus: 'Computing' },
  { name: 'ICE', url: 'https://www.ice.org.uk/', members: '95,000+', focus: 'Civil (UK)' },
  { name: 'IMechE', url: 'https://www.imeche.org/', members: '115,000+', focus: 'Mechanical (UK)' },
  { name: 'Engineers Australia', url: 'https://www.engineersaustralia.org.au/', members: '100,000+', focus: 'Australia' },
  { name: 'NSPE', url: 'https://www.nspe.org/', members: '50,000+', focus: 'Professional (USA)' },
  { name: 'NAE', url: 'https://www.nae.edu/', members: '2,400+', focus: 'National Academy (USA)' }
]

// Licensure - USA
const usaLicensure = [
  { name: 'NCEES FE Exam', url: 'https://ncees.org/engineering/fe/', desc: 'Fundamentals of Engineering', stage: 'Entry' },
  { name: 'NCEES PE Exam', url: 'https://ncees.org/engineering/pe/', desc: 'Principles and Practice', stage: 'Professional' },
  { name: 'ABET Accreditation', url: 'https://www.abet.org/', desc: 'Program accreditation', stage: 'Education' },
  { name: 'NSPE', url: 'https://www.nspe.org/', desc: 'Professional Engineers society', stage: 'Career' }
]

// Licensure - International
const internationalLicensure = [
  { name: 'Engineering Council UK', url: 'https://www.engc.org.uk/', desc: 'CEng and IEng registration', country: 'UK' },
  { name: 'Engineers Canada', url: 'https://engineerscanada.ca/', desc: 'P.Eng licensure', country: 'Canada' },
  { name: 'Engineers Australia', url: 'https://www.engineersaustralia.org.au/', desc: 'CPEng charter', country: 'Australia' },
  { name: 'Engineering New Zealand', url: 'https://www.engineeringnz.org/', desc: 'CPEngNZ', country: 'New Zealand' },
  { name: 'EUR ING', url: 'https://www.feani.org/', desc: 'European Engineer', country: 'Europe' },
  { name: 'Washington Accord', url: 'https://www.ieagreements.org/', desc: 'International recognition', country: 'Global' }
]

// Top Engineering Schools
const topSchools = [
  { name: 'MIT', location: 'USA', url: 'https://web.mit.edu/', ranking: '#1' },
  { name: 'Stanford', location: 'USA', url: 'https://www.stanford.edu/', ranking: '#2' },
  { name: 'UC Berkeley', location: 'USA', url: 'https://www.berkeley.edu/', ranking: '#3' },
  { name: 'Caltech', location: 'USA', url: 'https://www.caltech.edu/', ranking: '#4' },
  { name: 'Georgia Tech', location: 'USA', url: 'https://www.gatech.edu/', ranking: '#5' },
  { name: 'ETH Zurich', location: 'Switzerland', url: 'https://ethz.ch/', ranking: '#6' },
  { name: 'Cambridge', location: 'UK', url: 'https://www.cam.ac.uk/', ranking: '#7' },
  { name: 'Imperial College', location: 'UK', url: 'https://www.imperial.ac.uk/', ranking: '#8' },
  { name: 'TU Munich', location: 'Germany', url: 'https://www.tum.de/', ranking: '#9' },
  { name: 'Tsinghua University', location: 'China', url: 'https://www.tsinghua.edu.cn/', ranking: '#10' },
  { name: 'NUS', location: 'Singapore', url: 'https://www.nus.edu.sg/', ranking: '#11' },
  { name: 'IIT Bombay', location: 'India', url: 'https://www.iitb.ac.in/', ranking: '#12' }
]

// Career Resources
const careerResources = [
  { name: 'Engineering.com Jobs', url: 'https://www.engineering.com/jobs', desc: 'Engineering job board' },
  { name: 'Indeed Engineering', url: 'https://www.indeed.com/q-engineering-jobs.html', desc: 'General job search' },
  { name: 'LinkedIn Engineering', url: 'https://www.linkedin.com/jobs/engineering-jobs/', desc: 'Professional network jobs' },
  { name: 'Glassdoor Salaries', url: 'https://www.glassdoor.com/Salaries/engineering-salary-SRCH_KO0,11.htm', desc: 'Salary information' },
  { name: 'BLS Engineering', url: 'https://www.bls.gov/ooh/architecture-and-engineering.htm', desc: 'US job outlook data' }
]

// Salary Data by Discipline (USA entry-level)
const salaryData = [
  { discipline: 'Petroleum Engineering', entry: '$95,000', mid: '$137,000', growth: '+3%' },
  { discipline: 'Computer Engineering', entry: '$78,000', mid: '$132,000', growth: '+5%' },
  { discipline: 'Aerospace Engineering', entry: '$77,000', mid: '$126,000', growth: '+6%' },
  { discipline: 'Chemical Engineering', entry: '$76,000', mid: '$112,000', growth: '+4%' },
  { discipline: 'Electrical Engineering', entry: '$75,000', mid: '$104,000', growth: '+9%' },
  { discipline: 'Mechanical Engineering', entry: '$74,000', mid: '$99,000', growth: '+11%' },
  { discipline: 'Civil Engineering', entry: '$65,000', mid: '$90,000', growth: '+7%' },
  { discipline: 'Biomedical Engineering', entry: '$63,000', mid: '$99,000', growth: '+7%' },
  { discipline: 'Environmental Engineering', entry: '$62,000', mid: '$96,000', growth: '+6%' },
  { discipline: 'Industrial Engineering', entry: '$65,000', mid: '$93,000', growth: '+12%' }
]

// Emerging Technologies
const emergingTech = [
  { name: 'AI/ML Engineering', url: 'https://www.coursera.org/specializations/machine-learning-engineering', desc: 'Machine learning operations, AI infrastructure' },
  { name: 'Quantum Engineering', url: 'https://www.ibm.com/quantum/network', desc: 'Quantum computing hardware and applications' },
  { name: 'Sustainable Engineering', url: 'https://www.usgbc.org/leed', desc: 'Green technology, carbon capture, renewables' },
  { name: 'Space Engineering', url: 'https://www.spacex.com/careers/', desc: 'Satellites, Mars missions, space manufacturing' },
  { name: 'Robotics', url: 'https://www.theroboticschallenge.org/', desc: 'Autonomous systems, humanoid robots' },
  { name: 'Bioprinting', url: 'https://www.nature.com/subjects/bioprinting', desc: 'Tissue engineering, organ printing' },
  { name: 'Additive Manufacturing', url: 'https://www.sme.org/additive-manufacturing/', desc: 'Metal 3D printing, construction printing' },
  { name: 'Cyber-Physical Systems', url: 'https://www.nist.gov/el/cyber-physical-systems', desc: 'Industry 4.0, digital twins, IoT' }
]

// Certifications
const certifications = [
  { name: 'PE License', org: 'NCEES', desc: 'Professional Engineer (USA)', url: 'https://ncees.org/' },
  { name: 'PMP', org: 'PMI', desc: 'Project Management Professional', url: 'https://www.pmi.org/' },
  { name: 'Six Sigma', org: 'ASQ', desc: 'Quality improvement methodology', url: 'https://asq.org/' },
  { name: 'LEED AP', org: 'USGBC', desc: 'Green building certification', url: 'https://www.usgbc.org/' },
  { name: 'CCNA', org: 'Cisco', desc: 'Networking certification', url: 'https://www.cisco.com/' },
  { name: 'AWS Certified', org: 'Amazon', desc: 'Cloud engineering', url: 'https://aws.amazon.com/certification/' },
  { name: 'CQE', org: 'ASQ', desc: 'Certified Quality Engineer', url: 'https://asq.org/' },
  { name: 'FEA Certification', org: 'NAFEMS', desc: 'Simulation certification', url: 'https://www.nafems.org/' }
]

// Major Awards
const majorAwards = [
  { name: 'Turing Award', org: 'ACM', desc: 'Computer science Nobel ($1M)', url: 'https://amturing.acm.org/' },
  { name: 'IEEE Medal of Honor', org: 'IEEE', desc: 'Highest IEEE award', url: 'https://www.ieee.org/about/awards/' },
  { name: 'Charles Stark Draper Prize', org: 'NAE', desc: 'Engineering achievement ($500K)', url: 'https://www.nae.edu/' },
  { name: 'Queen Elizabeth Prize', org: 'QEPrize', desc: 'Global engineering (£500K)', url: 'https://qeprize.org/' },
  { name: 'Millennium Technology Prize', org: 'Finland', desc: 'Tech innovation (€1M)', url: 'https://taf.fi/millennium-technology-prize/' },
  { name: 'ASME Medal', org: 'ASME', desc: 'Distinguished service', url: 'https://www.asme.org/about-asme/honors-awards' }
]

// Famous Engineers
const famousEngineers = [
  { name: 'Nikola Tesla', years: '1856-1943', contribution: 'AC electricity, induction motor', field: 'Electrical' },
  { name: 'Thomas Edison', years: '1847-1931', contribution: 'Light bulb, phonograph', field: 'Electrical' },
  { name: 'Henry Ford', years: '1863-1947', contribution: 'Assembly line, Model T', field: 'Mechanical' },
  { name: 'Leonardo da Vinci', years: '1452-1519', contribution: 'Flying machines, engineering drawings', field: 'Various' },
  { name: 'Isambard Brunel', years: '1806-1859', contribution: 'Railways, bridges, ships', field: 'Civil' },
  { name: 'Gustave Eiffel', years: '1832-1923', contribution: 'Eiffel Tower, Statue of Liberty', field: 'Civil' },
  { name: 'Alan Turing', years: '1912-1954', contribution: 'Computer science, cryptography', field: 'Computer' },
  { name: 'Grace Hopper', years: '1906-1992', contribution: 'COBOL, compiler development', field: 'Computer' },
  { name: 'Steve Wozniak', years: '1950-', contribution: 'Apple co-founder, personal computer', field: 'Computer' },
  { name: 'Elon Musk', years: '1971-', contribution: 'SpaceX, Tesla, Neuralink', field: 'Various' },
  { name: 'Norman Borlaug', years: '1914-2009', contribution: 'Green Revolution, Nobel Peace', field: 'Agricultural' },
  { name: 'Fazlur Khan', years: '1929-1982', contribution: 'Tube structure, Sears Tower', field: 'Structural' }
]

// YouTube Channels
const youtubeChannels = [
  { name: 'Real Engineering', url: 'https://www.youtube.com/c/RealEngineering', desc: 'In-depth engineering analysis', subs: '4M+' },
  { name: 'Practical Engineering', url: 'https://www.youtube.com/c/PracticalEngineeringChannel', desc: 'Civil engineering explained', subs: '3M+' },
  { name: 'Engineering Explained', url: 'https://www.youtube.com/c/EngineeringExplained', desc: 'Automotive engineering', subs: '3M+' },
  { name: 'Simone Giertz', url: 'https://www.youtube.com/c/simonegiertz', desc: 'Creative engineering builds', subs: '2M+' },
  { name: 'Mark Rober', url: 'https://www.youtube.com/c/MarkRober', desc: 'Engineering entertainment', subs: '30M+' },
  { name: 'ElectroBOOM', url: 'https://www.youtube.com/c/ElectroBOOM', desc: 'Electrical engineering experiments', subs: '5M+' },
  { name: 'The Engineering Mindset', url: 'https://www.youtube.com/c/TheEngineeringMindset', desc: 'HVAC, electrical basics', subs: '4M+' },
  { name: 'Smarter Every Day', url: 'https://www.youtube.com/c/smartereveryday', desc: 'Science and engineering', subs: '11M+' }
]

// Top Companies Hiring
const topCompanies = [
  { name: 'Google', url: 'https://careers.google.com/', industry: 'Tech/Software' },
  { name: 'Apple', url: 'https://www.apple.com/careers/', industry: 'Hardware/Tech' },
  { name: 'Microsoft', url: 'https://careers.microsoft.com/', industry: 'Software/Cloud' },
  { name: 'Amazon', url: 'https://www.amazon.jobs/', industry: 'Tech/Logistics' },
  { name: 'SpaceX', url: 'https://www.spacex.com/careers/', industry: 'Aerospace' },
  { name: 'Tesla', url: 'https://www.tesla.com/careers/', industry: 'Automotive/Energy' },
  { name: 'Boeing', url: 'https://jobs.boeing.com/', industry: 'Aerospace' },
  { name: 'Siemens', url: 'https://www.siemens.com/global/en/products/services/service-partner/jobs.html', industry: 'Industrial' },
  { name: 'Lockheed Martin', url: 'https://www.lockheedmartinjobs.com/', industry: 'Defense/Aerospace' },
  { name: 'Intel', url: 'https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html', industry: 'Semiconductors' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-space-950 to-amber-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
            <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-orange-300">5000+ Global Engineering Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master engineering from K-12 to professional. 13+ disciplines, CAD/CAE tools, 
            professional licensure, global education systems, and emerging technologies.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div class="text-2xl sm:text-3xl font-bold text-orange-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-orange-400">({{ link.count }})</span>
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
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ r.type }}</span>
              <span class="text-xs text-gray-500">{{ r.level }}</span>
            </div>
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-orange-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Disciplines -->
      <section id="disciplines" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Engineering Disciplines</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <a v-for="d in disciplines" :key="d.name" :href="d.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ d.org }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-orange-400">{{ d.name }}</h4>
            <p class="text-sm text-gray-500">{{ d.desc }}</p>
            <p class="text-xs text-gray-600 mt-1">{{ d.examples }}</p>
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

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks & Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="b in freeTextbooks" :key="b.title" :href="b.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ b.subject }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ b.title }}</h4>
            <p class="text-sm text-gray-400">{{ b.author }}</p>
          </a>
        </div>
      </section>

      <!-- CAD Tools -->
      <section id="cad" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">CAD & Design Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in cadTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ t.type }}</span>
              <span class="text-xs text-gray-500">{{ t.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ t.name }}</h4>
          </a>
        </div>
      </section>

      <!-- CAE/Simulation -->
      <section id="cae" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">CAE & Simulation Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in caeTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ t.type }}</span>
              <span class="text-xs text-gray-500">{{ t.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ t.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Electrical Tools -->
      <section id="electrical" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Electrical & Electronics Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in electricalTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ t.type }}</span>
              <span class="text-xs text-gray-500">{{ t.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-yellow-400">{{ t.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Programming -->
      <section id="software" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Programming for Engineers</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in programmingTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded">{{ t.type }}</span>
              <span class="text-xs text-gray-500">{{ t.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ t.name }}</h4>
          </a>
        </div>
      </section>

      <!-- 3D Printing -->
      <section id="printing" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">3D Printing Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="t in printingTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ t.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-teal-400">{{ t.name }}</h4>
            <span class="text-sm text-gray-500">{{ t.cost }}</span>
          </a>
        </div>
      </section>

      <!-- Standards -->
      <section id="standards" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Engineering Standards Organizations</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="s in standardsOrgs" :key="s.name" :href="s.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-red-400">{{ s.name }}</h4>
            <p class="text-sm text-gray-500">{{ s.desc }}</p>
            <span class="text-xs text-gray-600">{{ s.scope }}</span>
          </a>
        </div>
      </section>

      <!-- Professional Organizations -->
      <section id="organizations" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Professional Organizations</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="o in professionalOrgs" :key="o.name" :href="o.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ o.name }}</h4>
            <p class="text-sm text-gray-500">{{ o.focus }}</p>
            <span class="text-xs text-gray-600">{{ o.members }} members</span>
          </a>
        </div>
      </section>

      <!-- Licensure -->
      <section id="licensure" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Professional Licensure</h2>
        
        <h3 class="text-xl font-semibold text-gray-300 mb-4">United States</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="l in usaLicensure" :key="l.name" :href="l.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ l.stage }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-amber-400">{{ l.name }}</h4>
            <p class="text-sm text-gray-500">{{ l.desc }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">International</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="l in internationalLicensure" :key="l.name" :href="l.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ l.country }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-amber-400">{{ l.name }}</h4>
            <p class="text-sm text-gray-500">{{ l.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Top Schools -->
      <section id="schools" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Top Engineering Schools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="s in topSchools" :key="s.name" :href="s.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ s.ranking }}</span>
              <span class="text-xs text-gray-500">{{ s.location }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ s.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Certifications -->
      <section id="certifications" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Professional Certifications</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="c in certifications" :key="c.name" :href="c.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ c.org }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ c.name }}</h4>
            <p class="text-sm text-gray-500">{{ c.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Careers -->
      <section id="careers" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Career Resources</h2>
        
        <h3 class="text-xl font-semibold text-gray-300 mb-4">Job Boards & Resources</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="r in careerResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-gray-300 mb-4">Salary by Discipline (USA)</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="text-gray-400 border-b border-gray-800">
              <tr>
                <th class="pb-2">Discipline</th>
                <th class="pb-2">Entry</th>
                <th class="pb-2">Mid-Career</th>
                <th class="pb-2">Job Growth</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr v-for="s in salaryData" :key="s.discipline" class="border-b border-gray-800/50">
                <td class="py-2">{{ s.discipline }}</td>
                <td class="py-2 text-green-400">{{ s.entry }}</td>
                <td class="py-2">{{ s.mid }}</td>
                <td class="py-2 text-blue-400">{{ s.growth }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Emerging Tech -->
      <section id="emerging" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Emerging Technologies</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in emergingTech" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-violet-400">{{ t.name }}</h4>
            <p class="text-sm text-gray-500">{{ t.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Awards -->
      <section id="awards" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Major Engineering Awards</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="a in majorAwards" :key="a.name" :href="a.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">{{ a.org }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-yellow-400">{{ a.name }}</h4>
            <p class="text-sm text-gray-500">{{ a.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Famous Engineers -->
      <section id="history" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Famous Engineers in History</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="e in famousEngineers" :key="e.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ e.years }}</span>
              <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ e.field }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ e.name }}</h4>
            <p class="text-sm text-gray-400">{{ e.contribution }}</p>
          </div>
        </div>
      </section>

      <!-- YouTube Channels -->
      <section id="youtube" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Engineering YouTube Channels</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="ch in youtubeChannels" :key="ch.name" :href="ch.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <span class="text-xs text-gray-500">{{ ch.subs }} subscribers</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-red-400">{{ ch.name }}</h4>
            <p class="text-sm text-gray-500">{{ ch.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Top Companies -->
      <section id="companies" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Top Companies Hiring Engineers</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="c in topCompanies" :key="c.name" :href="c.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ c.industry }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ c.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
        <p class="text-sm text-gray-500">5000+ resources curated for engineering learners worldwide</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
