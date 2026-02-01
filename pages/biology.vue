<script setup lang="ts">
useHead({
  title: 'Biology - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master biology from K-12 to PhD research with 5000+ curated resources. Molecular biology, genetics, ecology, bioinformatics tools, research databases, and virtual labs.' }
  ]
})

// Hero Statistics
const stats = [
  { label: 'Biologists Worldwide', value: '2M+', icon: 'users' },
  { label: 'Annual Papers', value: '500K+', icon: 'file-text' },
  { label: 'Known Species', value: '2M+', icon: 'leaf' },
  { label: 'Resources', value: '5000+', icon: 'book-open' }
]

// Featured Resources
const featuredResources = [
  { 
    title: 'Khan Academy Biology', 
    author: 'Khan Academy', 
    url: 'https://www.khanacademy.org/science/biology', 
    desc: 'Comprehensive free biology courses from molecules to ecosystems',
    type: 'Free Course',
    level: 'All Levels'
  },
  { 
    title: 'MIT OCW Biology', 
    author: 'MIT', 
    url: 'https://ocw.mit.edu/courses/biology/', 
    desc: 'Complete undergraduate and graduate biology curriculum',
    type: 'University Courses',
    level: 'UG/Grad'
  },
  { 
    title: 'NCBI Education', 
    author: 'NIH', 
    url: 'https://www.ncbi.nlm.nih.gov/education/', 
    desc: 'Bioinformatics tutorials, databases, and tools',
    type: 'Bioinformatics',
    level: 'All Levels'
  },
  { 
    title: 'Protein Data Bank', 
    author: 'RCSB PDB', 
    url: 'https://www.rcsb.org/', 
    desc: '200,000+ 3D macromolecular structures',
    type: 'Database',
    level: 'Research'
  },
  { 
    title: 'iBiology', 
    author: 'UCSF/HHMI', 
    url: 'https://www.ibiology.org/', 
    desc: 'Free seminars from leading biologists',
    type: 'Video Lectures',
    level: 'All Levels'
  },
  { 
    title: 'HHMI BioInteractive', 
    author: 'HHMI', 
    url: 'https://www.biointeractive.org/', 
    desc: 'Evolution, genetics, and ecology resources',
    type: 'Educational',
    level: 'K-12/UG'
  }
]

// Quick Links
const quickLinks = [
  { name: 'Disciplines', url: '#disciplines', icon: 'layers', count: 16 },
  { name: 'K-12 Biology', url: '#k12', icon: 'school', count: 120 },
  { name: 'AP/IB Biology', url: '#apib', icon: 'award', count: 80 },
  { name: 'Textbooks', url: '#textbooks', icon: 'book', count: 150 },
  { name: 'Databases', url: '#databases', icon: 'database', count: 50 },
  { name: 'Virtual Labs', url: '#labs', icon: 'flask', count: 40 },
  { name: 'Bioinformatics', url: '#bioinformatics', icon: 'code', count: 60 },
  { name: 'Journals', url: '#journals', icon: 'file-text', count: 80 },
  { name: 'Institutions', url: '#institutions', icon: 'building', count: 35 },
  { name: 'History', url: '#history', icon: 'clock', count: 20 }
]

// Biology Disciplines
const disciplines = [
  { name: 'Molecular Biology', url: 'https://www.nature.com/subjects/molecular-biology', desc: 'DNA, RNA, protein synthesis', org: 'ASCB' },
  { name: 'Cell Biology', url: 'https://www.cell.com/', desc: 'Cell structure and function', org: 'ASCB' },
  { name: 'Genetics & Genomics', url: 'https://www.genetics-gsa.org/', desc: 'Heredity, genes, genome analysis', org: 'GSA' },
  { name: 'Microbiology', url: 'https://asm.org/', desc: 'Bacteria, viruses, fungi', org: 'ASM' },
  { name: 'Biochemistry', url: 'https://www.asbmb.org/', desc: 'Chemical processes in organisms', org: 'ASBMB' },
  { name: 'Ecology', url: 'https://www.esa.org/', desc: 'Organisms and environment', org: 'ESA' },
  { name: 'Evolutionary Biology', url: 'https://www.evolutionsociety.org/', desc: 'Evolution and natural selection', org: 'SSE' },
  { name: 'Marine Biology', url: 'https://www.marinebio.org/', desc: 'Ocean life and ecosystems', org: 'MBS' },
  { name: 'Botany', url: 'https://botany.org/', desc: 'Plant science', org: 'BSA' },
  { name: 'Zoology', url: 'https://www.zoosocietynews.org/', desc: 'Animal science', org: 'SICB' },
  { name: 'Physiology', url: 'https://www.physiology.org/', desc: 'Organism function', org: 'APS' },
  { name: 'Immunology', url: 'https://www.immunology.org/', desc: 'Immune system', org: 'AAI' },
  { name: 'Neurobiology', url: 'https://www.sfn.org/', desc: 'Nervous system', org: 'SfN' },
  { name: 'Developmental Biology', url: 'https://www.developmentalbiology.org/', desc: 'Growth and development', org: 'SDB' },
  { name: 'Cancer Biology', url: 'https://www.aacr.org/', desc: 'Cancer research', org: 'AACR' },
  { name: 'Structural Biology', url: 'https://www.rcsb.org/', desc: 'Molecular structures', org: 'RCSB' }
]

// Learning Platforms
const learningPlatforms = [
  { name: 'Khan Academy Biology', url: 'https://www.khanacademy.org/science/biology', desc: 'Complete biology curriculum', cost: 'Free' },
  { name: 'MIT OCW Biology', url: 'https://ocw.mit.edu/courses/biology/', desc: 'University-level courses', cost: 'Free' },
  { name: 'Coursera Biology', url: 'https://www.coursera.org/browse/biology', desc: 'University partnerships', cost: 'Audit Free' },
  { name: 'edX Biology', url: 'https://www.edx.org/learn/biology', desc: 'MIT, Harvard courses', cost: 'Audit Free' },
  { name: 'iBiology', url: 'https://www.ibiology.org/', desc: 'Seminars from scientists', cost: 'Free' },
  { name: 'CrashCourse Biology', url: 'https://www.youtube.com/c/crashcourse', desc: 'Engaging video series', cost: 'Free' },
  { name: 'Bozeman Science', url: 'https://www.bozemanscience.com/', desc: 'AP Biology videos', cost: 'Free' },
  { name: 'Nature Scitable', url: 'https://www.nature.com/scitable', desc: 'Genetics and cell biology', cost: 'Free' }
]

// K-12 Resources
const k12Resources = [
  { title: 'BioInteractive', url: 'https://www.biointeractive.org/', provider: 'HHMI', type: 'Interactive' },
  { title: 'Cells Alive', url: 'https://www.cellsalive.com/', provider: 'Quill Graphics', type: 'Visualization' },
  { title: 'Learn Genetics Utah', url: 'https://learn.genetics.utah.edu/', provider: 'Utah Uni', type: 'Tutorial' },
  { title: 'NOVA Labs Evolution', url: 'https://www.pbs.org/wgbh/novalabs/lab/evolution/', provider: 'PBS', type: 'Virtual Lab' },
  { title: 'PhET Biology', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=biology', provider: 'CU Boulder', type: 'Simulation' },
  { title: 'Understanding Evolution', url: 'https://evolution.berkeley.edu/', provider: 'UC Berkeley', type: 'Educational' },
  { title: 'DNA Learning Center', url: 'https://www.dnalc.org/', provider: 'Cold Spring Harbor', type: 'Interactive' },
  { title: 'Your Genome', url: 'https://www.yourgenome.org/', provider: 'Wellcome Trust', type: 'Educational' },
  { title: 'Visible Body', url: 'https://www.visiblebody.com/', provider: 'Visible Body', type: '3D Anatomy' },
  { title: 'BioMan Biology', url: 'https://www.biomanbio.com/', provider: 'BioMan', type: 'Games' },
  { title: 'Amoeba Sisters', url: 'https://www.amoebasisters.com/', provider: 'Amoeba Sisters', type: 'YouTube' },
  { title: 'iNaturalist', url: 'https://www.inaturalist.org/', provider: 'CalAcademy', type: 'Citizen Science' }
]

// AP/IB Resources
const apibResources = [
  { title: 'AP Biology College Board', url: 'https://apstudents.collegeboard.org/courses/ap-biology', provider: 'College Board', type: 'AP Official' },
  { title: 'AP Biology Khan Academy', url: 'https://www.khanacademy.org/science/ap-biology', provider: 'Khan Academy', type: 'AP Prep' },
  { title: 'Bozeman Science AP Bio', url: 'https://www.bozemanscience.com/ap-biology', provider: 'Paul Andersen', type: 'Video' },
  { title: 'IB Biology Resources', url: 'https://www.thinkib.net/biology', provider: 'ThinkIB', type: 'IB Resources' },
  { title: 'Biology Dictionary', url: 'https://biologydictionary.net/', provider: 'BioDictionary', type: 'Reference' },
  { title: 'Albert.io AP Biology', url: 'https://www.albert.io/ap-biology', provider: 'Albert.io', type: 'Practice' }
]

// Free Textbooks
const textbooksBeginner = [
  { title: 'OpenStax Biology 2e', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/biology-2e', type: 'FREE PDF' },
  { title: 'OpenStax Concepts of Biology', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/concepts-biology', type: 'FREE PDF' },
  { title: 'Biology LibreTexts', author: 'Various', url: 'https://bio.libretexts.org/', type: 'FREE WEB' },
  { title: 'CK-12 Biology', author: 'CK-12', url: 'https://www.ck12.org/biology/', type: 'FlexBook' }
]

const textbooksIntermediate = [
  { title: 'Molecular Biology of the Cell', author: 'Alberts et al.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/', type: 'FREE Online' },
  { title: 'OpenStax Microbiology', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/microbiology', type: 'FREE PDF' },
  { title: 'OpenStax Anatomy & Physiology', author: 'OpenStax/Rice', url: 'https://openstax.org/details/books/anatomy-and-physiology', type: 'FREE PDF' },
  { title: 'MIT Introductory Biology', author: 'MIT', url: 'https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/', type: 'FREE Course' },
  { title: 'Animal Diversity Web', author: 'University of Michigan', url: 'https://animaldiversity.org/', type: 'Database' },
  { title: 'Nature Scitable', author: 'Nature', url: 'https://www.nature.com/scitable', type: 'FREE Online' }
]

const textbooksAdvanced = [
  { title: 'Biochemistry (Berg)', author: 'Berg, Tymoczko, Stryer', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21154/', type: 'FREE Online' },
  { title: 'Rosalind Bioinformatics', author: 'UC', url: 'https://rosalind.info/', type: 'Problems' },
  { title: 'Galaxy Training', author: 'Galaxy', url: 'https://training.galaxyproject.org/', type: 'Training' },
  { title: 'Bioconductor', author: 'Bioconductor', url: 'https://www.bioconductor.org/', type: 'R Packages' },
  { title: 'EMBL-EBI Training', author: 'EMBL-EBI', url: 'https://www.ebi.ac.uk/training', type: 'Training' },
  { title: 'Allen Brain Atlas', author: 'Allen Institute', url: 'https://portal.brain-map.org/', type: 'Atlas' }
]

// Molecular Biology Resources
const molecularBioResources = [
  { name: 'NCBI PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/', desc: '35M+ biomedical citations', provider: 'NIH' },
  { name: 'NCBI BLAST', url: 'https://blast.ncbi.nlm.nih.gov/', desc: 'Sequence alignment tool', provider: 'NIH' },
  { name: 'GenBank', url: 'https://www.ncbi.nlm.nih.gov/genbank/', desc: 'Nucleotide sequences', provider: 'NCBI' },
  { name: 'Ensembl', url: 'https://www.ensembl.org/', desc: 'Genome browser', provider: 'EMBL-EBI' },
  { name: 'UCSC Genome', url: 'https://genome.ucsc.edu/', desc: 'Interactive genome viewer', provider: 'UCSC' },
  { name: 'Protein Data Bank', url: 'https://www.rcsb.org/', desc: '3D structures', provider: 'RCSB' },
  { name: 'UniProt', url: 'https://www.uniprot.org/', desc: 'Protein sequences', provider: 'UniProt' },
  { name: 'KEGG Pathway', url: 'https://www.genome.jp/kegg/pathway.html', desc: 'Biological pathways', provider: 'KEGG' },
  { name: 'OMIM', url: 'https://omim.org/', desc: 'Human genes/phenotypes', provider: 'JHU' },
  { name: 'Human Protein Atlas', url: 'https://www.proteinatlas.org/', desc: 'Protein expression', provider: 'SciLifeLab' },
  { name: 'STRING', url: 'https://string-db.org/', desc: 'Protein interactions', provider: 'STRING' },
  { name: 'AlphaFold DB', url: 'https://alphafold.ebi.ac.uk/', desc: 'AI structure predictions', provider: 'DeepMind' }
]

// Ecology Resources
const ecologyResources = [
  { name: 'Encyclopedia of Life', url: 'https://eol.org/', desc: 'Global species info', provider: 'EOL' },
  { name: 'GBIF', url: 'https://www.gbif.org/', desc: 'Biodiversity data', provider: 'GBIF' },
  { name: 'iNaturalist', url: 'https://www.inaturalist.org/', desc: 'Citizen science', provider: 'CalAcademy' },
  { name: 'Biodiversity Heritage', url: 'https://www.biodiversitylibrary.org/', desc: 'Natural history literature', provider: 'BHL' },
  { name: 'TimeTree', url: 'http://www.timetree.org/', desc: 'Evolutionary timescales', provider: 'Temple' },
  { name: 'BOLD Systems', url: 'https://www.boldsystems.org/', desc: 'Barcode of Life', provider: 'BOLD' },
  { name: 'Zooniverse Biology', url: 'https://www.zooniverse.org/projects', desc: 'Citizen science projects', provider: 'Zooniverse' },
  { name: 'Atlas of Living Australia', url: 'https://www.ala.org.au/', desc: 'Australian biodiversity', provider: 'ALA' }
]

// Virtual Labs
const virtualLabs = [
  { name: 'LabXchange', url: 'https://www.labxchange.org/', provider: 'Harvard/HHMI' },
  { name: 'BioInteractive Labs', url: 'https://www.biointeractive.org/classroom-resources', provider: 'HHMI' },
  { name: 'NOVA Labs', url: 'https://www.pbs.org/wgbh/novalabs/', provider: 'PBS' },
  { name: 'Learn Genetics', url: 'https://learn.genetics.utah.edu/content/', provider: 'Utah' },
  { name: 'PhET Biology', url: 'https://phet.colorado.edu/', provider: 'CU Boulder' },
  { name: 'Virtual Microscope', url: 'https://www.mi-microscope.org/', provider: 'Michigan' },
  { name: 'Nikon MicroscopyU', url: 'https://www.microscopyu.com/', provider: 'Nikon' },
  { name: 'Olympus Microscopy', url: 'https://www.olympus-lifescience.com/', provider: 'Olympus' }
]

// Bioinformatics Tools
const bioinformaticsTools = [
  { name: 'BLAST', url: 'https://blast.ncbi.nlm.nih.gov/', type: 'Sequence Search', cost: 'Free' },
  { name: 'Clustal Omega', url: 'https://www.ebi.ac.uk/Tools/msa/clustalo/', type: 'Alignment', cost: 'Free' },
  { name: 'Galaxy', url: 'https://usegalaxy.org/', type: 'Analysis Platform', cost: 'Free' },
  { name: 'Geneious', url: 'https://www.geneious.com/', type: 'Sequence Analysis', cost: 'Paid' },
  { name: 'SnapGene', url: 'https://www.snapgene.com/', type: 'DNA Analysis', cost: 'Paid' },
  { name: 'Benchling', url: 'https://www.benchling.com/', type: 'Lab Notebook', cost: 'Freemium' },
  { name: 'PyMOL', url: 'https://pymol.org/', type: 'Visualization', cost: 'Paid' },
  { name: 'ChimeraX', url: 'https://www.cgl.ucsf.edu/chimerax/', type: 'Visualization', cost: 'Free' },
  { name: 'MEGA', url: 'https://www.megasoftware.net/', type: 'Phylogenetics', cost: 'Free' },
  { name: 'Cytoscape', url: 'https://cytoscape.org/', type: 'Networks', cost: 'Free' },
  { name: 'IGV', url: 'https://igv.org/', type: 'Genome Viewer', cost: 'Free' },
  { name: 'Biopython', url: 'https://biopython.org/', type: 'Programming', cost: 'Free' }
]

// Databases
const databases = [
  { name: 'NCBI', url: 'https://www.ncbi.nlm.nih.gov/', provider: 'NIH', desc: 'National Center for Biotechnology' },
  { name: 'PDB', url: 'https://www.rcsb.org/', provider: 'RCSB', desc: 'Protein Data Bank' },
  { name: 'UniProt', url: 'https://www.uniprot.org/', provider: 'UniProt', desc: 'Protein sequences' },
  { name: 'Ensembl', url: 'https://www.ensembl.org/', provider: 'EMBL-EBI', desc: 'Genome browser' },
  { name: 'PubMed Central', url: 'https://www.ncbi.nlm.nih.gov/pmc/', provider: 'NIH', desc: 'Free full-text archive' },
  { name: 'FlyBase', url: 'https://flybase.org/', provider: 'FlyBase', desc: 'Drosophila database' },
  { name: 'SGD', url: 'https://www.yeastgenome.org/', provider: 'Stanford', desc: 'Yeast genome' },
  { name: 'WormBase', url: 'https://wormbase.org/', provider: 'WormBase', desc: 'C. elegans database' },
  { name: 'MGI', url: 'http://www.informatics.jax.org/', provider: 'JAX', desc: 'Mouse genome' },
  { name: 'TAIR', url: 'https://www.arabidopsis.org/', provider: 'Phoenix', desc: 'Arabidopsis database' }
]

// Visualization Tools
const visualizationTools = [
  { name: 'PyMOL', url: 'https://pymol.org/', desc: 'Molecular visualization', provider: 'Schrodinger' },
  { name: 'ChimeraX', url: 'https://www.cgl.ucsf.edu/chimerax/', desc: 'Next-gen visualization', provider: 'UCSF' },
  { name: 'Jmol', url: 'https://jmol.sourceforge.net/', desc: 'Java molecule viewer', provider: 'Open Source' },
  { name: 'VMD', url: 'https://www.ks.uiuc.edu/Research/vmd/', desc: 'Visual Molecular Dynamics', provider: 'UIUC' },
  { name: 'Mol*', url: 'https://molstar.org/', desc: 'Web-based viewer', provider: 'MolStar' },
  { name: 'BioRender', url: 'https://www.biorender.com/', desc: 'Scientific illustration', provider: 'BioRender' }
]

// Research Institutions
const researchInstitutions = [
  { name: 'Cold Spring Harbor', url: 'https://www.cshl.edu/', desc: 'Research & education', country: 'USA' },
  { name: 'Marine Biological Lab', url: 'https://www.mbl.edu/', desc: 'MBL at Woods Hole', country: 'USA' },
  { name: 'Scripps Research', url: 'https://www.scripps.edu/', desc: 'Biomedical research', country: 'USA' },
  { name: 'Broad Institute', url: 'https://www.broadinstitute.org/', desc: 'Genomics', country: 'USA' },
  { name: 'Sanger Institute', url: 'https://www.sanger.ac.uk/', desc: 'Genomic research', country: 'UK' },
  { name: 'EMBL', url: 'https://www.embl.org/', desc: 'Molecular Biology Lab', country: 'Europe' },
  { name: 'EBI', url: 'https://www.ebi.ac.uk/', desc: 'Bioinformatics Institute', country: 'UK' },
  { name: 'RIKEN', url: 'https://www.riken.jp/', desc: 'Research institute', country: 'Japan' },
  { name: 'WEHI', url: 'https://www.wehi.edu.au/', desc: 'Medical research', country: 'Australia' },
  { name: 'NCBS India', url: 'https://www.ncbs.res.in/', desc: 'Biological sciences', country: 'India' },
  { name: 'CAS China', url: 'https://english.cas.cn/', desc: 'Chinese Academy of Sciences', country: 'China' },
  { name: 'Pasteur Institute', url: 'https://www.pasteur.fr/', desc: 'Microbiology research', country: 'France' }
]

// Journals
const journals = [
  { name: 'Nature', url: 'https://www.nature.com/', publisher: 'Nature Portfolio', type: 'Journal', if: '64.8' },
  { name: 'Science', url: 'https://www.science.org/', publisher: 'AAAS', type: 'Journal', if: '56.9' },
  { name: 'Cell', url: 'https://www.cell.com/', publisher: 'Cell Press', type: 'Journal', if: '64.5' },
  { name: 'PNAS', url: 'https://www.pnas.org/', publisher: 'NAS', type: 'Journal', if: '11.1' },
  { name: 'Nature Genetics', url: 'https://www.nature.com/ng/', publisher: 'Nature', type: 'Journal', if: '31.7' },
  { name: 'Nature Medicine', url: 'https://www.nature.com/nm/', publisher: 'Nature', type: 'Journal', if: '82.9' },
  { name: 'Cell Stem Cell', url: 'https://www.cell.com/cell-stem-cell/', publisher: 'Cell Press', type: 'Journal', if: '23.9' },
  { name: 'Neuron', url: 'https://www.cell.com/neuron/', publisher: 'Cell Press', type: 'Journal', if: '16.2' },
  { name: 'Immunity', url: 'https://www.cell.com/immunity/', publisher: 'Cell Press', type: 'Journal', if: '32.4' },
  { name: 'Molecular Cell', url: 'https://www.cell.com/molecular-cell/', publisher: 'Cell Press', type: 'Journal', if: '19.3' },
  { name: 'PLOS Biology', url: 'https://journals.plos.org/plosbiology/', publisher: 'PLOS', type: 'Open Access', if: '9.8' },
  { name: 'eLife', url: 'https://elifesciences.org/', publisher: 'eLife', type: 'Open Access', if: '7.7' },
  { name: 'BioRxiv', url: 'https://www.biorxiv.org/', publisher: 'CSHL', type: 'Preprint', if: '-' }
]

// Major Awards
const majorAwards = [
  { name: 'Nobel Prize in Medicine', url: 'https://www.nobelprize.org/prizes/medicine/', desc: 'Highest honor in biomedicine' },
  { name: 'Lasker Awards', url: 'https://laskerfoundation.org/', desc: 'Medical research achievement' },
  { name: 'Breakthrough Prize', url: 'https://breakthroughprize.org/', desc: 'Life sciences ($3M prize)' },
  { name: 'Wolf Prize in Medicine', url: 'https://wolffund.org.il/', desc: 'Scientific achievement' },
  { name: 'Gruber Prize', url: 'https://gruber.yale.edu/', desc: 'Genetics research' },
  { name: 'Canada Gairdner Awards', url: 'https://gairdner.org/', desc: 'Medical science' }
]

// Historical Figures
const historicalFigures = [
  { name: 'Charles Darwin', years: '1809-1882', contribution: 'Theory of Evolution', field: 'Evolution' },
  { name: 'Gregor Mendel', years: '1822-1884', contribution: 'Laws of Inheritance', field: 'Genetics' },
  { name: 'Rosalind Franklin', years: '1920-1958', contribution: 'DNA Structure (X-ray)', field: 'Structural' },
  { name: 'Watson & Crick', years: '1953', contribution: 'DNA Double Helix', field: 'Molecular' },
  { name: 'Barbara McClintock', years: '1902-1992', contribution: 'Jumping Genes', field: 'Genetics' },
  { name: 'Louis Pasteur', years: '1822-1895', contribution: 'Germ Theory, Vaccines', field: 'Microbiology' },
  { name: 'Alexander Fleming', years: '1881-1955', contribution: 'Penicillin Discovery', field: 'Microbiology' },
  { name: 'Jennifer Doudna', years: '1964-', contribution: 'CRISPR-Cas9', field: 'Biochemistry' },
  { name: 'Emmanuelle Charpentier', years: '1968-', contribution: 'CRISPR-Cas9', field: 'Microbiology' },
  { name: 'Francis Collins', years: '1950-', contribution: 'Human Genome Project', field: 'Genomics' }
]

// Professional Organizations
const professionalOrgs = [
  { name: 'ASCB', url: 'https://www.ascb.org/', members: '7,000+', focus: 'Cell Biology' },
  { name: 'GSA', url: 'https://www.genetics-gsa.org/', members: '5,000+', focus: 'Genetics' },
  { name: 'ASM', url: 'https://asm.org/', members: '30,000+', focus: 'Microbiology' },
  { name: 'ESA', url: 'https://www.esa.org/', members: '9,000+', focus: 'Ecology' },
  { name: 'ASBMB', url: 'https://www.asbmb.org/', members: '12,000+', focus: 'Biochemistry' },
  { name: 'SfN', url: 'https://www.sfn.org/', members: '36,000+', focus: 'Neuroscience' },
  { name: 'AAI', url: 'https://www.immunology.org/', members: '8,000+', focus: 'Immunology' },
  { name: 'AACR', url: 'https://www.aacr.org/', members: '50,000+', focus: 'Cancer Research' }
]

// Top Universities
const topUniversities = [
  { name: 'Harvard University', location: 'USA', url: 'https://www.harvard.edu/', ranking: '#1' },
  { name: 'MIT', location: 'USA', url: 'https://web.mit.edu/', ranking: '#2' },
  { name: 'Stanford University', location: 'USA', url: 'https://www.stanford.edu/', ranking: '#3' },
  { name: 'University of Cambridge', location: 'UK', url: 'https://www.cam.ac.uk/', ranking: '#4' },
  { name: 'University of Oxford', location: 'UK', url: 'https://www.ox.ac.uk/', ranking: '#5' },
  { name: 'Johns Hopkins', location: 'USA', url: 'https://www.jhu.edu/', ranking: '#6' },
  { name: 'UC San Francisco', location: 'USA', url: 'https://www.ucsf.edu/', ranking: '#7' },
  { name: 'University of Tokyo', location: 'Japan', url: 'https://www.u-tokyo.ac.jp/', ranking: '#8' },
  { name: 'Imperial College London', location: 'UK', url: 'https://www.imperial.ac.uk/', ranking: '#9' },
  { name: 'Karolinska Institute', location: 'Sweden', url: 'https://ki.se/', ranking: '#10' }
]

// YouTube Channels
const youtubeChannels = [
  { name: 'CrashCourse Biology', url: 'https://www.youtube.com/c/crashcourse', desc: 'Engaging biology education', subs: '15M+' },
  { name: 'Amoeba Sisters', url: 'https://www.youtube.com/c/AmoebaSisters', desc: 'Fun biology animations', subs: '2M+' },
  { name: 'Bozeman Science', url: 'https://www.youtube.com/c/bozemanscience', desc: 'AP Biology and more', subs: '1M+' },
  { name: 'iBiology', url: 'https://www.youtube.com/c/iBiology', desc: 'Research seminars', subs: '200K+' },
  { name: 'Nature Video', url: 'https://www.youtube.com/c/NatureVideoChannel', desc: 'Science news', subs: '500K+' },
  { name: 'Kurzgesagt', url: 'https://www.youtube.com/c/inanutshell', desc: 'Evolution and biology', subs: '22M+' },
  { name: 'Journey to the Microcosmos', url: 'https://www.youtube.com/c/microcosmos', desc: 'Microscopy', subs: '1M+' },
  { name: 'SciShow', url: 'https://www.youtube.com/c/scishow', desc: 'Science news', subs: '7M+' }
]

// Citizen Science
const citizenScience = [
  { name: 'iNaturalist', url: 'https://www.inaturalist.org/', desc: 'Document biodiversity' },
  { name: 'Zooniverse', url: 'https://www.zooniverse.org/projects', desc: 'Classify data' },
  { name: 'Foldit', url: 'https://fold.it/', desc: 'Protein folding game' },
  { name: 'EteRNA', url: 'https://eternagame.org/', desc: 'RNA folding game' },
  { name: 'Phylo', url: 'https://phylo.cs.mcgill.ca/', desc: 'Sequence alignment game' },
  { name: 'Stall Catchers', url: 'https://stallcatchers.com/', desc: 'Alzheimer\'s research' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-space-950 to-green-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-emerald-300">5000+ Global Biology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Biology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master biology from K-12 to PhD research. Molecular biology, genetics, ecology, 
            bioinformatics tools, research databases, and virtual labs.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div class="text-2xl sm:text-3xl font-bold text-emerald-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
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

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in featuredResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
              <span class="text-xs text-gray-500">{{ r.level }}</span>
            </div>
            <h3 class="font-semibold text-white mb-1">{{ r.title }}</h3>
            <p class="text-sm text-emerald-400 mb-2">{{ r.author }}</p>
            <p class="text-xs text-gray-400">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Disciplines -->
      <section id="disciplines" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Biology Disciplines</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="d in disciplines" :key="d.name" :href="d.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ d.org }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ d.name }}</h4>
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

      <!-- K-12 -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Biology Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- AP/IB -->
      <section id="apib" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">AP/IB Biology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="r in apibResources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        
        <h3 class="text-xl font-semibold text-emerald-400 mb-4">Beginner</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-green-400 mb-4">Intermediate</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <a v-for="book in textbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <h3 class="text-xl font-semibold text-teal-400 mb-4">Advanced</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="book in textbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-teal-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>
      </section>

      <!-- Molecular Biology -->
      <section id="molecular" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Molecular Biology Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in molecularBioResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ r.name }}</h4>
            <p class="text-sm text-teal-400">{{ r.provider }}</p>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Ecology -->
      <section id="ecology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Ecology & Environment</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in ecologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-green-400">{{ r.name }}</h4>
            <p class="text-sm text-green-400">{{ r.provider }}</p>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Virtual Labs -->
      <section id="labs" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Virtual Labs</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="lab in virtualLabs" :key="lab.name" :href="lab.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ lab.name }}</h4>
            <p class="text-sm text-gray-500">{{ lab.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Bioinformatics -->
      <section id="bioinformatics" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Bioinformatics Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="t in bioinformaticsTools" :key="t.name" :href="t.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ t.type }}</span>
              <span class="text-xs text-gray-500">{{ t.cost }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ t.name }}</h4>
          </a>
        </div>
      </section>

      <!-- Databases -->
      <section id="databases" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Biological Databases</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="db in databases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ db.name }}</h4>
            <p class="text-sm text-blue-400">{{ db.provider }}</p>
            <p class="text-sm text-gray-500">{{ db.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Visualization -->
      <section id="visualization" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Visualization Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="tool in visualizationTools" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-pink-400">{{ tool.name }}</h4>
            <p class="text-sm text-pink-400">{{ tool.provider }}</p>
            <p class="text-sm text-gray-500">{{ tool.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Journals -->
      <section id="journals" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Research Journals</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="j in journals" :key="j.name" :href="j.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ j.type }}</span>
              <span class="text-xs text-gray-500">IF: {{ j.if }}</span>
            </div>
            <h4 class="font-semibold text-white group-hover:text-indigo-400">{{ j.name }}</h4>
            <p class="text-sm text-gray-500">{{ j.publisher }}</p>
          </a>
        </div>
      </section>

      <!-- Research Institutions -->
      <section id="institutions" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Research Institutions</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="inst in researchInstitutions" :key="inst.name" :href="inst.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ inst.country }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-orange-400">{{ inst.name }}</h4>
            <p class="text-sm text-gray-500">{{ inst.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Awards -->
      <section id="awards" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Major Awards</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="a in majorAwards" :key="a.name" :href="a.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-yellow-400">{{ a.name }}</h4>
            <p class="text-sm text-gray-500">{{ a.desc }}</p>
          </a>
        </div>
      </section>

      <!-- History -->
      <section id="history" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">History of Biology</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="h in historicalFigures" :key="h.name" class="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ h.years }}</span>
              <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ h.field }}</span>
            </div>
            <h4 class="font-semibold text-white">{{ h.name }}</h4>
            <p class="text-sm text-gray-400">{{ h.contribution }}</p>
          </div>
        </div>
      </section>

      <!-- Professional Organizations -->
      <section id="organizations" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Professional Organizations</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="o in professionalOrgs" :key="o.name" :href="o.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-teal-400">{{ o.name }}</h4>
            <p class="text-sm text-teal-400">{{ o.focus }}</p>
            <p class="text-sm text-gray-500">{{ o.members }}</p>
          </a>
        </div>
      </section>

      <!-- Top Universities -->
      <section id="universities" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Top Universities for Biology</h2>
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

      <!-- YouTube Channels -->
      <section id="youtube" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">YouTube Channels</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="ch in youtubeChannels" :key="ch.name" :href="ch.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all">
            <span class="text-xs text-gray-500">{{ ch.subs }} subscribers</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-red-400">{{ ch.name }}</h4>
            <p class="text-sm text-gray-500">{{ ch.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Citizen Science -->
      <section id="citizen" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Citizen Science</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="c in citizenScience" :key="c.name" :href="c.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-green-400">{{ c.name }}</h4>
            <p class="text-sm text-gray-500">{{ c.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
        <p class="text-sm text-gray-500">5000+ resources curated for biology learners worldwide</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
