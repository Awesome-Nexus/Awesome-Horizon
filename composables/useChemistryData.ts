/**
 * Chemistry page data
 */
export const useChemistryData = () => {
  const levels = [
    { id: 'beginner', title: 'Beginner', subtitle: 'K-12', resources: '600+', color: 'emerald' },
    { id: 'intermediate', title: 'Intermediate', subtitle: 'Undergrad', resources: '1000+', color: 'blue' },
    { id: 'advanced', title: 'Advanced', subtitle: 'Graduate', resources: '900+', color: 'purple' }
  ]

  const quickLinks = [
    { name: 'K-12 Chemistry', url: '#k12', count: 100 },
    { name: 'Organic Chemistry', url: '#organic', count: 200 },
    { name: 'Virtual Labs', url: '#labs', count: 50 },
    { name: 'Databases', url: '#databases', count: 40 },
    { name: 'Software', url: '#software', count: 30 }
  ]

  const featuredResources = [
    { title: 'LibreTexts Chemistry', url: 'https://chem.libretexts.org/', provider: 'UC Davis', type: 'Free Library', desc: 'Comprehensive free chemistry library' },
    { title: 'MIT OCW Chemistry', url: 'https://ocw.mit.edu/courses/chemistry/', provider: 'MIT', type: 'Free Course', desc: 'Complete chemistry curriculum' },
    { title: 'Organic Chemistry Portal', url: 'https://www.organic-chemistry.org/', provider: 'Various', type: 'Resource', desc: 'Organic chemistry resources' },
    { title: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', provider: 'NCBI', type: 'Database', desc: 'Chemical structure database' },
    { title: 'ChemSpider', url: 'http://www.chemspider.com/', provider: 'RSC', type: 'Database', desc: 'Chemical structures and properties' },
    { title: 'Periodic Table Live!', url: 'https://periodictable.com/', provider: 'ChemEd DL', type: 'Interactive', desc: 'Interactive periodic table' }
  ]

  const k12Resources = [
    { title: 'Khan Academy Chemistry', url: 'https://www.khanacademy.org/science/chemistry', provider: 'Khan Academy', type: 'Free Course' },
    { title: 'Chem4Kids', url: 'http://www.chem4kids.com/', provider: 'Rader', type: 'Tutorial' },
    { title: 'Periodic Videos', url: 'http://www.periodicvideos.com/', provider: 'Nottingham', type: 'Video' },
    { title: 'RSC Education', url: 'https://edu.rsc.org/', provider: 'Royal Society', type: 'Resources' },
    { title: 'PhET Chemistry', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', provider: 'CU Boulder', type: 'Simulation' },
    { title: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'CMU', type: 'Virtual Lab' }
  ]

  const organicResources = [
    { title: 'Organic Chemistry Portal', url: 'https://www.organic-chemistry.org/', provider: 'Various', type: 'Resource', desc: 'Reactions and mechanisms' },
    { title: 'Name Reactions', url: 'https://www.organic-chemistry.org/namedreactions/', provider: 'Various', type: 'Database', desc: 'Named reactions database' },
    { title: 'Chemistry by Design', url: 'http://chemistrybydesign.oia.arizona.edu/', provider: 'Arizona', type: 'Resource', desc: 'Total synthesis' },
    { title: 'Master Organic Chemistry', url: 'https://www.masterorganicchemistry.com/', provider: 'Various', type: 'Tutorial', desc: 'Tutorials and guides' }
  ]

  const virtualLabs = [
    { title: 'ChemCollective', url: 'http://chemcollective.org/', provider: 'Carnegie Mellon', type: 'Virtual Lab', desc: 'Virtual chemistry labs' },
    { title: 'PhET Chemistry', url: 'https://phet.colorado.edu/chemistry', provider: 'CU Boulder', type: 'Simulation', desc: 'Interactive simulations' },
    { title: 'ChemReaX', url: 'https://chemreax.com/', provider: 'ScienceBySimulation', type: 'Simulation', desc: 'Chemical reaction simulation' },
    { title: 'MERLOT Virtual Labs', url: 'https://www.merlot.org/merlot/chemistry.htm', provider: 'MERLOT', type: 'Collection', desc: 'Virtual lab collection' }
  ]

  const databases = [
    { title: 'PubChem', url: 'https://pubchem.ncbi.nlm.nih.gov/', provider: 'NCBI', type: 'Database', desc: 'Chemical structures and bioassays' },
    { title: 'ChemSpider', url: 'http://www.chemspider.com/', provider: 'RSC', type: 'Database', desc: 'Chemical structure database' },
    { title: 'ChEMBL', url: 'https://www.ebi.ac.uk/chembl/', provider: 'EMBL-EBI', type: 'Database', desc: 'Bioactive molecules' },
    { title: 'NIST Chemistry WebBook', url: 'https://webbook.nist.gov/chemistry/', provider: 'NIST', type: 'Database', desc: 'Thermochemical data' }
  ]

  return {
    levels,
    quickLinks,
    featuredResources,
    k12Resources,
    organicResources,
    virtualLabs,
    databases
  }
}
