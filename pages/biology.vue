<script setup lang="ts">
useHead({
  title: 'Biology - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master biology from K-12 to PhD research with 2500+ curated resources. Free textbooks, courses from MIT, Stanford, Harvard, virtual labs, molecular biology tools, and research databases like NCBI and PDB.' }
  ]
})

const levels = [
  {
    id: 'beginner',
    icon: 'seedling',
    title: 'Beginner',
    subtitle: 'K-12 to High School',
    description: 'School biology, AP/IB, basic concepts',
    color: 'emerald',
    resources: 650
  },
  {
    id: 'intermediate',
    icon: 'target',
    title: 'Intermediate',
    subtitle: 'Undergraduate University',
    description: 'University level biology',
    color: 'green',
    resources: 1100
  },
  {
    id: 'advanced',
    icon: 'rocket',
    title: 'Advanced',
    subtitle: 'Graduate & Research',
    description: 'Graduate courses, PhD preparation',
    color: 'teal',
    resources: 850
  }
]

const featuredResources = [
  { title: 'Khan Academy Biology', author: 'Khan Academy', url: 'https://www.khanacademy.org/science/biology', desc: 'Comprehensive free biology courses' },
  { title: 'MIT OCW Biology', author: 'MIT', url: 'https://ocw.mit.edu/courses/biology/', desc: 'Complete biology curriculum' },
  { title: 'NCBI Education', author: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/education/', desc: 'Bioinformatics and genetics resources' },
  { title: 'Protein Data Bank', author: 'RCSB PDB', url: 'https://www.rcsb.org/', desc: '3D protein structures database' },
  { title: 'iBiology', author: 'UCSF/HHMI', url: 'https://www.ibiology.org/', desc: 'Free biology seminars and talks' },
  { title: 'BioInteractive', author: 'HHMI', url: 'https://www.biointeractive.org/', desc: 'Evolution and genetics resources' }
]

const quickLinks = [
  { name: 'K-12 Biology', url: '#k12', count: 120 },
  { name: 'AP/IB Biology', url: '#apib', count: 80 },
  { name: 'Textbooks', url: '#textbooks', count: 150 },
  { name: 'Molecular Bio', url: '#molecular', count: 100 },
  { name: 'Ecology', url: '#ecology', count: 90 },
  { name: 'Virtual Labs', url: '#labs', count: 40 },
  { name: 'Databases', url: '#databases', count: 50 },
  { name: 'Visualization', url: '#visualization', count: 25 },
  { name: 'Institutions', url: '#institutions', count: 35 },
  { name: 'Research', url: '#research', count: 60 }
]

const k12Resources = [
  { title: 'Khan Academy Biology', url: 'https://www.khanacademy.org/science/biology', provider: 'Khan Academy', type: 'Free Course' },
  { title: 'BioInteractive', url: 'https://www.biointeractive.org/', provider: 'HHMI', type: 'Interactive' },
  { title: 'Cells Alive', url: 'https://www.cellsalive.com/', provider: 'Quill Graphics', type: 'Visualization' },
  { title: 'Learn Genetics Utah', url: 'https://learn.genetics.utah.edu/', provider: 'Utah Uni', type: 'Tutorial' },
  { title: 'Teaching Genetics Utah', url: 'https://teach.genetics.utah.edu/', provider: 'Utah Uni', type: 'Teacher Resources' },
  { title: 'Nova Labs', url: 'https://www.pbs.org/wgbh/novalabs/', provider: 'PBS', type: 'Lab' },
  { title: 'BrainPOP Biology', url: 'https://www.brainpop.com/science/biology/', provider: 'BrainPOP', type: 'Animation' },
  { title: 'Biodiversity Heritage', url: 'https://www.biodiversitylibrary.org/', provider: 'BHL', type: 'Archive' },
  { title: 'National Geographic Education', url: 'https://education.nationalgeographic.org/', provider: 'NatGeo', type: 'Resources' },
  { title: 'Understanding Evolution', url: 'https://evolution.berkeley.edu/', provider: 'UC Berkeley', type: 'Educational' },
  { title: 'Understanding Science', url: 'https://undsci.berkeley.edu/', provider: 'UC Berkeley', type: 'Educational' },
  { title: 'DNA Learning Center', url: 'https://www.dnalc.org/', provider: 'Cold Spring Harbor', type: 'Interactive' },
  { title: 'DNA Interactive', url: 'https://www.dnai.org/', provider: 'Cold Spring Harbor', type: 'Interactive' },
  { title: 'Your Genome', url: 'https://www.yourgenome.org/', provider: 'Wellcome Trust', type: 'Educational' },
  { title: 'Cell Biology by Scitable', url: 'https://www.nature.com/scitable/cellbio', provider: 'Nature', type: 'Reference' },
  { title: 'Biology Project', url: 'https://www.biology.arizona.edu/', provider: 'Arizona Uni', type: 'Tutorial' },
  { title: 'Cells Alive!', url: 'https://www.cellsalive.com/', provider: 'Quill Graphics', type: 'Visualization' },
  { title: 'Nobel Prize Educational Games', url: 'https://www.nobelprize.org/prizes/lists/all-educational-games/', provider: 'Nobel Prize', type: 'Games' },
  { title: 'Visible Body', url: 'https://www.visiblebody.com/', provider: 'Visible Body', type: '3D Anatomy' },
  { title: 'Innerbody Research', url: 'https://www.innerbody.com/', provider: 'Innerbody', type: 'Anatomy' },
  { title: 'Get Body Smart', url: 'https://www.getbodysmart.com/', provider: 'Get Body Smart', type: 'Anatomy' },
  { title: 'NOVA Labs Evolution', url: 'https://www.pbs.org/wgbh/novalabs/lab/evolution/', provider: 'PBS', type: 'Lab' },
  { title: 'NOVA Labs RNA', url: 'https://www.pbs.org/wgbh/novalabs/lab/rna/', provider: 'PBS', type: 'Lab' },
  { title: 'National Center for Science Education', url: 'https://ncse.ngo/', provider: 'NCSE', type: 'Educational' },
  { title: 'Australian Museum Education', url: 'https://australian.museum/learn/', provider: 'Australian Museum', type: 'Resources' },
  { title: 'Natural History Museum London', url: 'https://www.nhm.ac.uk/schools', provider: 'NHM London', type: 'Resources' },
  { title: 'BioMan Biology', url: 'https://www.biomanbio.com/', provider: 'BioMan', type: 'Games' },
  { title: 'Blood Typing Game', url: 'https://www.nobelprize.org/educational/medicine/bloodtypinggame/', provider: 'Nobel Prize', type: 'Game' },
  { title: 'Cell Craft', url: 'http://www.cellcraftgame.com/', provider: 'Cell Craft', type: 'Game' },
  { title: 'Spongelab', url: 'https://www.spongelab.com/', provider: 'Spongelab', type: 'Interactive' }
]

const apibResources = [
  { title: 'AP Biology College Board', url: 'https://apstudents.collegeboard.org/courses/ap-biology', provider: 'College Board', type: 'AP Official' },
  { title: 'AP Bio Prep - Khan Academy', url: 'https://www.khanacademy.org/science/ap-biology', provider: 'Khan Academy', type: 'AP Prep' },
  { title: 'IB Biology Resources', url: 'https://www.thinkib.net/biology', provider: 'ThinkIB', type: 'IB Resources' },
  { title: 'Bozeman Science Biology', url: 'https://www.bozemanscience.com/ap-biology', provider: 'Paul Andersen', type: 'Video' },
  { title: 'Biology Dictionary', url: 'https://biologydictionary.net/', provider: 'BioDictionary', type: 'Reference' },
  { title: 'Albert.io AP Biology', url: 'https://www.albert.io/ap-biology', provider: 'Albert.io', type: 'Practice' }
]

const textbooksBeginner = [
  { title: 'OpenStax Biology', author: 'OpenStax', url: 'https://openstax.org/details/books/biology-2e', type: 'FREE PDF' },
  { title: 'OpenStax Concepts of Biology', author: 'OpenStax', url: 'https://openstax.org/details/books/concepts-biology', type: 'FREE PDF' },
  { title: 'Biology LibreTexts', author: 'Various', url: 'https://bio.libretexts.org/', type: 'FREE WEB' },
  { title: 'CK-12 Biology', author: 'CK-12', url: 'https://www.ck12.org/biology/', type: 'FlexBook' }
]

const textbooksIntermediate = [
  { title: 'Molecular Biology of the Cell', author: 'Alberts et al.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/', type: 'FREE Online' },
  { title: 'Molecular Cell Biology', author: 'Lodish et al.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21743/', type: 'FREE Online' },
  { title: 'Principles of Genetics', author: 'Snustad & Simmons', url: 'https://www.khanacademy.org/science/biology/genetics', type: 'Course' },
  { title: 'Campbell Biology Concepts', author: 'Reece et al.', url: 'https://www.pearson.com/en-us/subject-catalog/p/campbell-biology-concepts-connections/P200000005792', type: 'Textbook' },
  { title: 'MIT 7.016 Introductory Biology', author: 'MIT', url: 'https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/', type: 'FREE Course' },
  { title: 'MIT 7.03 Genetics', author: 'MIT', url: 'https://ocw.mit.edu/courses/7-03-genetics-fall-2004/', type: 'FREE Course' },
  { title: 'MIT 7.28x Molecular Biology', author: 'MIT', url: 'https://www.edx.org/learn/molecular-biology/massachusetts-institute-of-technology-molecular-biology-part-1-dna-replication-and-repair', type: 'MOOC' },
  { title: 'MIT 7.05 Biochemistry', author: 'MIT', url: 'https://ocw.mit.edu/courses/5-07sc-biological-chemistry-i-fall-2013/', type: 'FREE Course' },
  { title: 'Principles of Biology', author: 'Nature Scitable', url: 'https://www.nature.com/scitable', type: 'FREE Online' },
  { title: 'Biology 2e', author: 'OpenStax', url: 'https://openstax.org/details/books/biology-2e', type: 'FREE PDF' },
  { title: 'Microbiology', author: 'OpenStax', url: 'https://openstax.org/details/books/microbiology', type: 'FREE PDF' },
  { title: 'Anatomy & Physiology', author: 'OpenStax', url: 'https://openstax.org/details/books/anatomy-and-physiology', type: 'FREE PDF' },
  { title: 'Animal Diversity Web', author: 'University of Michigan', url: 'https://animaldiversity.org/', type: 'Database' },
  { title: 'Botanical Society of America', author: 'BSA', url: 'https://botany.org/plant-science-bulleting', type: 'Resources' }
]

const textbooksAdvanced = [
  { title: 'Biochemistry', author: 'Berg, Tymoczko, Stryer', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21154/', type: 'FREE Online' },
  { title: 'Molecular Biology of the Cell 6th', author: 'Alberts et al.', url: 'https://www.amazon.com/Molecular-Biology-Cell-6th-Problem/', type: 'Reference' },
  { title: 'Molecular Cell Biology', author: 'Lodish et al.', url: 'https://www.amazon.com/Molecular-Cell-Biology-Harvey-Lodish/', type: 'Reference' },
  { title: 'Genome 4', author: 'Terry Brown', url: 'https://www.wiley.com/en-us/Genome%2C+4th+Edition-p-9781118318512', type: 'Textbook' },
  { title: 'Rosalind', author: 'University of California', url: 'https://rosalind.info/', type: 'Bioinformatics Problems' },
  { title: 'Galaxy Training Network', author: 'Galaxy', url: 'https://training.galaxyproject.org/', type: 'Training' },
  { title: 'Bioconductor', author: 'Bioconductor', url: 'https://www.bioconductor.org/', type: 'R Packages' },
  { title: 'DataCamp Bioinformatics', author: 'DataCamp', url: 'https://www.datacamp.com/courses/bioinformatics', type: 'Course' },
  { title: 'Coursera Bioinformatics', author: 'UC San Diego', url: 'https://www.coursera.org/specializations/bioinformatics', type: 'MOOC' },
  { title: 'edX Bioinformatics', author: 'Various', url: 'https://www.edx.org/learn/bioinformatics', type: 'MOOC' },
  { title: 'EMBL-EBI Training', author: 'EMBL-EBI', url: 'https://www.ebi.ac.uk/training', type: 'Training' },
  { title: 'NCBI Education', author: 'NIH', url: 'https://www.ncbi.nlm.nih.gov/education/', type: 'Educational' },
  { title: 'BioModels Database', author: 'EMBL-EBI', url: 'https://www.ebi.ac.uk/biomodels/', type: 'Database' },
  { title: 'Reactome', author: 'Reactome', url: 'https://reactome.org/', type: 'Pathway Database' },
  { title: 'WormBook', author: 'C. elegans Community', url: 'https://www.wormbook.org/', type: 'Reference' },
  { title: 'WormClassroom', author: 'UCSC', url: 'https://wormclassroom.org/', type: 'Educational' },
  { title: 'The Node', author: 'Developmental Biology', url: 'https://thenode.biologists.com/', type: 'Community' },
  { title: 'Allen Institute Brain Atlas', author: 'Allen Institute', url: 'https://portal.brain-map.org/', type: 'Atlas' },
  { title: 'ModelDB', author: 'Yale University', url: 'https://modeldb.science/', type: 'Database' },
  { title: 'Immunopaedia', author: 'Immunopaedia', url: 'https://www.immunopaedia.org.za/', type: 'Educational' },
  { title: 'CancerQuest', author: 'Emory University', url: 'https://www.cancerquest.org/', type: 'Educational' },
  { title: 'Jackson Laboratory', author: 'JAX', url: 'https://www.jax.org/education-and-learning', type: 'Resources' }
]

const molecularBioResources = [
  { name: 'NCBI PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/', desc: 'Biomedical literature database', provider: 'NIH' },
  { name: 'NCBI Gene', url: 'https://www.ncbi.nlm.nih.gov/gene', desc: 'Gene sequences and annotations', provider: 'NIH' },
  { name: 'NCBI BLAST', url: 'https://blast.ncbi.nlm.nih.gov/', desc: 'Sequence alignment tool', provider: 'NIH' },
  { name: 'Ensembl Genome', url: 'https://www.ensembl.org/', desc: 'Genome browser and data', provider: 'EMBL-EBI' },
  { name: 'UCSC Genome Browser', url: 'https://genome.ucsc.edu/', desc: 'Interactive genome viewer', provider: 'UCSC' },
  { name: 'Protein Data Bank', url: 'https://www.rcsb.org/', desc: '3D macromolecular structures', provider: 'RCSB' },
  { name: 'UniProt', url: 'https://www.uniprot.org/', desc: 'Protein sequence database', provider: 'UniProt' },
  { name: 'KEGG Pathway', url: 'https://www.genome.jp/kegg/pathway.html', desc: 'Biological pathways database', provider: 'KEGG' },
  { name: 'OMIM', url: 'https://omim.org/', desc: 'Mendelian Inheritance in Man', provider: 'Johns Hopkins' },
  { name: 'ClinVar', url: 'https://www.ncbi.nlm.nih.gov/clinvar/', desc: 'Clinical variation database', provider: 'NCBI' },
  { name: 'dbSNP', url: 'https://www.ncbi.nlm.nih.gov/snp/', desc: 'SNP database', provider: 'NCBI' },
  { name: 'dbGaP', url: 'https://www.ncbi.nlm.nih.gov/gap/', desc: 'Genotype-phenotype database', provider: 'NCBI' },
  { name: 'GeneCards', url: 'https://www.genecards.org/', desc: 'Human gene database', provider: 'Weizmann Inst.' },
  { name: 'Human Protein Atlas', url: 'https://www.proteinatlas.org/', desc: 'Protein expression database', provider: 'SciLifeLab' },
  { name: 'STRING', url: 'https://string-db.org/', desc: 'Protein interaction network', provider: 'STRING' },
  { name: 'Pfam', url: 'https://pfam.xfam.org/', desc: 'Protein families database', provider: 'EMBL-EBI' },
  { name: 'InterPro', url: 'https://www.ebi.ac.uk/interpro/', desc: 'Protein families and domains', provider: 'EMBL-EBI' },
  { name: 'CATH', url: 'https://www.cathdb.info/', desc: 'Protein structure classification', provider: 'UCL' },
  { name: 'SCOP', url: 'https://scop.mrc-lmb.cam.ac.uk/', desc: 'Structural classification', provider: 'MRC-LMB' },
  { name: 'BRENDA', url: 'https://www.brenda-enzymes.org/', desc: 'Enzyme database', provider: 'Uni Cologne' },
  { name: 'COG-KOG', url: 'https://www.ncbi.nlm.nih.gov/research/cog/', desc: 'Orthologous groups', provider: 'NCBI' }
]

const ecologyResources = [
  { name: 'Encyclopedia of Life', url: 'https://eol.org/', desc: 'Global species information', provider: 'EOL' },
  { name: 'GBIF', url: 'https://www.gbif.org/', desc: 'Global biodiversity data', provider: 'GBIF' },
  { name: 'iNaturalist', url: 'https://www.inaturalist.org/', desc: 'Citizen science biodiversity', provider: 'CalAcademy' },
  { name: 'Biodiversity Heritage', url: 'https://www.biodiversitylibrary.org/', desc: 'Natural history literature', provider: 'BHL' },
  { name: 'USGS Ecosystems', url: 'https://www.usgs.gov/ecosystems', desc: 'Ecosystem research', provider: 'USGS' },
  { name: 'Nature Conservancy', url: 'https://www.nature.org/', desc: 'Conservation resources', provider: 'TNC' },
  { name: 'WWF Conservation', url: 'https://www.worldwildlife.org/', desc: 'Wildlife conservation', provider: 'WWF' },
  { name: 'Ecological Society', url: 'https://www.esa.org/', desc: 'Ecology education resources', provider: 'ESA' },
  { name: 'BOLD Systems', url: 'https://www.boldsystems.org/', desc: 'Barcode of Life database', provider: 'BOLD' },
  { name: 'Atlas of Living Australia', url: 'https://www.ala.org.au/', desc: 'Australian biodiversity', provider: 'ALA' },
  { name: 'TimeTree', url: 'http://www.timetree.org/', desc: 'Evolutionary timescales', provider: 'Temple Uni' },
  { name: 'Foldit', url: 'https://fold.it/', desc: 'Protein folding game', provider: 'UW' },
  { name: 'EteRNA', url: 'https://eternagame.org/', desc: 'RNA folding game', provider: 'Stanford' },
  { name: 'Phylo', url: 'https://phylo.cs.mcgill.ca/', desc: 'Sequence alignment game', provider: 'McGill' },
  { name: 'Zooniverse Biology', url: 'https://www.zooniverse.org/projects', desc: 'Citizen science projects', provider: 'Zooniverse' }
]

const virtualLabs = [
  { name: 'LabXchange Biology', url: 'https://www.labxchange.org/', provider: 'Harvard/HHMI' },
  { name: 'BioInteractive Labs', url: 'https://www.biointeractive.org/classroom-resources', provider: 'HHMI' },
  { name: 'NOVA Labs Evolution', url: 'https://www.pbs.org/wgbh/novalabs/lab/evolution/', provider: 'PBS' },
  { name: 'Learn Genetics Utah', url: 'https://learn.genetics.utah.edu/content/', provider: 'Utah Uni' },
  { name: 'PhET Biology', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=biology', provider: 'CU Boulder' },
  { name: 'Virtual Microscope', url: 'https://www.mi-microscope.org/', provider: 'University of Michigan' },
  { name: 'Nikon MicroscopyU', url: 'https://www.microscopyu.com/', provider: 'Nikon' },
  { name: 'Olympus Microscopy', url: 'https://www.olympus-lifescience.com/en/microscope-resource-center/', provider: 'Olympus' },
  { name: 'Virtual Cell Animation', url: 'https://www.nanohub.org/resources/virtualcell', provider: 'Purdue' },
  { name: 'NOVA Labs RNA', url: 'https://www.pbs.org/wgbh/novalabs/lab/rna/', provider: 'PBS' }
]

const databases = [
  { name: 'NCBI', url: 'https://www.ncbi.nlm.nih.gov/', provider: 'NIH', desc: 'National Center for Biotechnology Information' },
  { name: 'PDB', url: 'https://www.rcsb.org/', provider: 'RCSB', desc: 'Protein Data Bank' },
  { name: 'UniProt', url: 'https://www.uniprot.org/', provider: 'UniProt', desc: 'Protein sequence and function' },
  { name: 'Ensembl', url: 'https://www.ensembl.org/', provider: 'EMBL-EBI', desc: 'Genome browser and annotation' },
  { name: 'GenBank', url: 'https://www.ncbi.nlm.nih.gov/genbank/', provider: 'NCBI', desc: 'Nucleotide sequence database' },
  { name: 'PubMed Central', url: 'https://www.ncbi.nlm.nih.gov/pmc/', provider: 'NIH', desc: 'Free full-text archive' },
  { name: 'FlyBase', url: 'https://flybase.org/', provider: 'FlyBase', desc: 'Drosophila database' },
  { name: 'SGD', url: 'https://www.yeastgenome.org/', provider: 'Stanford', desc: 'Yeast genome database' },
  { name: 'WormBase', url: 'https://wormbase.org/', provider: 'WormBase', desc: 'C. elegans database' },
  { name: 'TAIR', url: 'https://www.arabidopsis.org/', provider: 'Phoenix Bio', desc: 'Arabidopsis database' },
  { name: 'MGI', url: 'http://www.informatics.jax.org/', provider: 'JAX', desc: 'Mouse genome database' },
  { name: 'ZFIN', url: 'https://zfin.org/', provider: 'ZFIN', desc: 'Zebrafish database' },
  { name: 'Xenbase', url: 'https://www.xenbase.org/', provider: 'Xenbase', desc: 'Xenopus database' }
]

const visualizationTools = [
  { name: 'PyMOL', url: 'https://pymol.org/', desc: 'Molecular visualization system', provider: 'Schrodinger' },
  { name: 'ChimeraX', url: 'https://www.cgl.ucsf.edu/chimerax/', desc: 'Next-gen visualization', provider: 'UCSF' },
  { name: 'Jmol', url: 'https://jmol.sourceforge.net/', desc: 'Java-based molecule viewer', provider: 'Open Source' },
  { name: 'VMD', url: 'https://www.ks.uiuc.edu/Research/vmd/', desc: 'Visual Molecular Dynamics', provider: 'UIUC' },
  { name: 'Mol* (MolStar)', url: 'https://molstar.org/', desc: 'Modern web-based viewer', provider: 'MolStar' },
  { name: 'BioRender', url: 'https://www.biorender.com/', desc: 'Scientific illustration tool', provider: 'BioRender' },
  { name: 'UCSF Chimera', url: 'https://www.cgl.ucsf.edu/chimera/', desc: 'Molecular visualization', provider: 'UCSF' }
]

const researchInstitutions = [
  { name: 'Cold Spring Harbor', url: 'https://www.cshl.edu/', desc: 'Research and education', country: 'USA' },
  { name: 'Marine Biological Laboratory', url: 'https://www.mbl.edu/', desc: 'MBL at Woods Hole', country: 'USA' },
  { name: 'Scripps Research', url: 'https://www.scripps.edu/', desc: 'Biomedical research', country: 'USA' },
  { name: 'Broad Institute', url: 'https://www.broadinstitute.org/', desc: 'Genomics research', country: 'USA' },
  { name: 'Sanger Institute', url: 'https://www.sanger.ac.uk/', desc: 'Genomic research', country: 'UK' },
  { name: 'EMBL', url: 'https://www.embl.org/', desc: 'Molecular Biology Lab', country: 'Europe' },
  { name: 'EBI', url: 'https://www.ebi.ac.uk/', desc: 'Bioinformatics Institute', country: 'UK' },
  { name: 'ELIXIR', url: 'https://elixir-europe.org/', desc: 'Infrastructure for life science', country: 'Europe' },
  { name: 'DDBJ', url: 'https://www.ddbj.nig.ac.jp/', desc: 'Japan DNA Data Bank', country: 'Japan' },
  { name: 'RIKEN', url: 'https://www.riken.jp/', desc: 'Research institute', country: 'Japan' },
  { name: 'National Institute of Genetics', url: 'https://www.nig.ac.jp/', desc: 'Genetics research', country: 'Japan' },
  { name: 'WEHI', url: 'https://www.wehi.edu.au/', desc: 'Medical research', country: 'Australia' },
  { name: 'Garvan Institute', url: 'https://www.garvan.org.au/', desc: 'Medical research', country: 'Australia' },
  { name: 'CSIR India', url: 'https://www.csir.res.in/', desc: 'Scientific research', country: 'India' },
  { name: 'TIFR India', url: 'https://www.tifr.res.in/', desc: 'Fundamental research', country: 'India' },
  { name: 'CCMB India', url: 'https://www.ccmb.res.in/', desc: 'Cellular and molecular biology', country: 'India' },
  { name: 'NCBS India', url: 'https://www.ncbs.res.in/', desc: 'Biological sciences', country: 'India' },
  { name: 'SIBS China', url: 'http://www.sibs.cas.cn/', desc: 'Shanghai Institutes', country: 'China' },
  { name: 'Chinese Academy of Sciences', url: 'https://english.cas.cn/', desc: 'CAS', country: 'China' }
]

const researchJournals = [
  { name: 'Nature', url: 'https://www.nature.com/', publisher: 'Nature Portfolio', type: 'Journal' },
  { name: 'Science', url: 'https://www.science.org/', publisher: 'AAAS', type: 'Journal' },
  { name: 'Cell', url: 'https://www.cell.com/', publisher: 'Cell Press', type: 'Journal' },
  { name: 'PNAS', url: 'https://www.pnas.org/', publisher: 'NAS', type: 'Journal' },
  { name: 'PLOS Biology', url: 'https://journals.plos.org/plosbiology/', publisher: 'PLOS', type: 'Open Access' },
  { name: 'eLife', url: 'https://elifesciences.org/', publisher: 'eLife Sciences', type: 'Open Access' },
  { name: 'BMC Biology', url: 'https://bmcbiol.biomedcentral.com/', publisher: 'BioMed Central', type: 'Open Access' },
  { name: 'Developmental Cell', url: 'https://www.cell.com/developmental-cell', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Molecular Cell', url: 'https://www.cell.com/molecular-cell', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Cell Systems', url: 'https://www.cell.com/cell-systems', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Cell Reports', url: 'https://www.cell.com/cell-reports', publisher: 'Cell Press', type: 'Open Access' },
  { name: 'iScience', url: 'https://www.cell.com/iscience', publisher: 'Cell Press', type: 'Open Access' },
  { name: 'EMBO Journal', url: 'https://www.embopress.org/journal/emboj', publisher: 'EMBO', type: 'Journal' },
  { name: 'EMBO Reports', url: 'https://www.embopress.org/journal/embr', publisher: 'EMBO', type: 'Journal' },
  { name: 'Nucleic Acids Research', url: 'https://academic.oup.com/nar', publisher: 'Oxford', type: 'Open Access' },
  { name: 'Bioinformatics', url: 'https://academic.oup.com/bioinformatics', publisher: 'Oxford', type: 'Journal' },
  { name: 'PLOS Computational Biology', url: 'https://journals.plos.org/ploscompbiol/', publisher: 'PLOS', type: 'Open Access' },
  { name: 'Genome Biology', url: 'https://genomebiology.biomedcentral.com/', publisher: 'BioMed Central', type: 'Open Access' },
  { name: 'Genome Research', url: 'https://genome.cshlp.org/', publisher: 'CSHL', type: 'Journal' },
  { name: 'Genes & Development', url: 'https://genesdev.cshlp.org/', publisher: 'CSHL', type: 'Journal' },
  { name: 'Development', url: 'https://journals.biologists.com/dev', publisher: 'Company of Biologists', type: 'Journal' },
  { name: 'Journal of Cell Biology', url: 'https://rupress.org/jcb', publisher: 'Rockefeller', type: 'Journal' },
  { name: 'Molecular Biology of the Cell', url: 'https://www.molbiolcell.org/', publisher: 'ASCB', type: 'Open Access' },
  { name: 'Molecular and Cellular Biology', url: 'https://journals.asm.org/journal/mcb', publisher: 'ASM', type: 'Journal' },
  { name: 'Journal of Biological Chemistry', url: 'https://www.jbc.org/', publisher: 'ASBMB', type: 'Open Access' },
  { name: 'Biochemistry', url: 'https://pubs.acs.org/journal/bichaw', publisher: 'ACS', type: 'Journal' },
  { name: 'Plant Cell', url: 'https://www.plantcell.org/', publisher: 'ASPB', type: 'Journal' },
  { name: 'Plant Physiology', url: 'https://www.plantphysiol.org/', publisher: 'ASPB', type: 'Journal' },
  { name: 'Journal of Experimental Botany', url: 'https://academic.oup.com/jxb', publisher: 'Oxford', type: 'Journal' },
  { name: 'Ecology Letters', url: 'https://onlinelibrary.wiley.com/journal/14610248', publisher: 'Wiley', type: 'Journal' },
  { name: 'Journal of Ecology', url: 'https://besjournals.onlinelibrary.wiley.com/journal/13652745', publisher: 'BES', type: 'Journal' },
  { name: 'Journal of Animal Ecology', url: 'https://besjournals.onlinelibrary.wiley.com/journal/13652656', publisher: 'BES', type: 'Journal' },
  { name: 'Functional Ecology', url: 'https://besjournals.onlinelibrary.wiley.com/journal/13652435', publisher: 'BES', type: 'Journal' },
  { name: 'Oikos', url: 'https://onlinelibrary.wiley.com/journal/16000706', publisher: 'Nordic SE', type: 'Journal' },
  { name: 'Evolution', url: 'https://onlinelibrary.wiley.com/journal/15585646', publisher: 'SSE', type: 'Journal' },
  { name: 'Molecular Ecology', url: 'https://onlinelibrary.wiley.com/journal/1365294x', publisher: 'Wiley', type: 'Journal' },
  { name: 'Molecular Biology and Evolution', url: 'https://academic.oup.com/mbe', publisher: 'Oxford', type: 'Journal' },
  { name: 'Systematic Biology', url: 'https://academic.oup.com/sysbio', publisher: 'Oxford', type: 'Journal' },
  { name: 'Neuron', url: 'https://www.cell.com/neuron', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Nature Neuroscience', url: 'https://www.nature.com/neuro/', publisher: 'Nature Portfolio', type: 'Journal' },
  { name: 'Journal of Neuroscience', url: 'https://www.jneurosci.org/', publisher: 'SfN', type: 'Journal' },
  { name: 'Glia', url: 'https://onlinelibrary.wiley.com/journal/10981136', publisher: 'Wiley', type: 'Journal' },
  { name: 'Journal of Comparative Neurology', url: 'https://onlinelibrary.wiley.com/journal/10969861', publisher: 'Wiley', type: 'Journal' },
  { name: 'Immunity', url: 'https://www.cell.com/immunity', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Nature Immunology', url: 'https://www.nature.com/ni/', publisher: 'Nature Portfolio', type: 'Journal' },
  { name: 'Journal of Experimental Medicine', url: 'https://rupress.org/jem', publisher: 'Rockefeller', type: 'Journal' },
  { name: 'Journal of Immunology', url: 'https://www.jimmunol.org/', publisher: 'AAI', type: 'Journal' },
  { name: 'Cancer Research', url: 'https://aacrjournals.org/cancerres', publisher: 'AACR', type: 'Journal' },
  { name: 'Cancer Cell', url: 'https://www.cell.com/cancer-cell', publisher: 'Cell Press', type: 'Journal' },
  { name: 'Oncogene', url: 'https://www.nature.com/onc/', publisher: 'Nature Portfolio', type: 'Journal' },
  { name: 'Molecular Cancer Therapeutics', url: 'https://aacrjournals.org/mct', publisher: 'AACR', type: 'Journal' },
  { name: 'Journal of Clinical Investigation', url: 'https://www.jci.org/', publisher: 'JCI', type: 'Journal' },
  { name: 'BioRxiv', url: 'https://www.biorxiv.org/', publisher: 'CSHL', type: 'Preprint' },
  { name: 'MedRxiv', url: 'https://www.medrxiv.org/', publisher: 'BMJ/CSHL', type: 'Preprint' },
  { name: 'Research Square', url: 'https://www.researchsquare.com/', publisher: 'Research Square', type: 'Preprint' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
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
            <span class="text-sm text-emerald-300">2500+ Global Biology Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Biology
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master biology from K-12 to PhD research with 2500+ curated resources. Free textbooks, MIT and Stanford courses, virtual labs, molecular biology tools, and research databases like NCBI and PDB.
          </p>
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
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-emerald-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
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

      <!-- AP/IB Biology -->
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

      <!-- Free Textbooks -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Free Textbooks</h2>
        
        <!-- Beginner -->
        <h3 class="text-xl font-semibold text-emerald-400 mb-4">Beginner Level</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <!-- Intermediate -->
        <h3 class="text-xl font-semibold text-green-400 mb-4">Intermediate Level</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a v-for="book in textbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
          </a>
        </div>

        <!-- Advanced -->
        <h3 class="text-xl font-semibold text-teal-400 mb-4">Advanced Level</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <p class="text-sm text-teal-400 mt-1">{{ r.provider }}</p>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Ecology & Environment -->
      <section id="ecology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Ecology & Environment Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in ecologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-green-400">{{ r.name }}</h4>
            <p class="text-sm text-green-400 mt-1">{{ r.provider }}</p>
            <p class="text-sm text-gray-500">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Virtual Labs -->
      <section id="labs" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Virtual Labs</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <a v-for="lab in virtualLabs" :key="lab.name" :href="lab.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-cyan-400">{{ lab.name }}</h4>
            <p class="text-sm text-gray-500">{{ lab.provider }}</p>
          </a>
        </div>
      </section>

      <!-- Biological Databases -->
      <section id="databases" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Biological Databases</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="db in databases" :key="db.name" :href="db.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-blue-400">{{ db.name }}</h4>
            <p class="text-sm text-blue-400">{{ db.provider }}</p>
            <p class="text-sm text-gray-500">{{ db.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Visualization Tools -->
      <section id="visualization" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Visualization Tools</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="tool in visualizationTools" :key="tool.name" :href="tool.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <h4 class="font-semibold text-white group-hover:text-purple-400">{{ tool.name }}</h4>
            <p class="text-sm text-purple-400 mt-1">{{ tool.provider }}</p>
            <p class="text-sm text-gray-500">{{ tool.desc }}</p>
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

      <!-- Research & Journals -->
      <section id="research" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Research & Journals</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="journal in researchJournals" :key="journal.name" :href="journal.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ journal.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ journal.name }}</h4>
            <p class="text-sm text-gray-500">{{ journal.publisher }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
