# Bioinformatics & Computational Biology Resources

A comprehensive collection of bioinformatics platforms, tools, databases, and educational resources for computational biology research.

---

## Table of Contents

- [Sequence Analysis](#sequence-analysis)
- [Genome Analysis](#genome-analysis)
- [Phylogenetics](#phylogenetics)
- [Structural Biology](#structural-biology)
- [Programming for Biology](#programming-for-biology)
- [Pathway Analysis](#pathway-analysis)
- [Data Visualization](#data-visualization)
- [Cloud Platforms](#cloud-platforms)
- [Databases & Resources](#databases--resources)
- [Online Courses & Training](#online-courses--training)
- [Bioinformatics Communities](#bioinformatics-communities)

---

## Sequence Analysis

### BLAST (Basic Local Alignment Search Tool)
- **URL**: https://blast.ncbi.nlm.nih.gov/
- **Status**: Free (Government/Academic)
- **Description**: The gold standard tool for finding regions of local similarity between biological sequences. Compares nucleotide or protein sequences to sequence databases and calculates statistical significance of matches.
- **Use Cases**: 
  - Identifying gene families
  - Inferring functional relationships
  - Finding homologous sequences
  - Detecting conserved domains
- **Features**: Multiple specialized BLAST tools including Primer-BLAST, SmartBLAST, IgBLAST, CD-search

### Clustal Omega
- **URL**: https://www.ebi.ac.uk/Tools/msa/clustalo/
- **Status**: Free (Open Source)
- **Description**: Latest version in the Clustal family for multiple sequence alignment. Uses seeded guide trees and HMM profile-profile techniques.
- **Use Cases**:
  - Multiple protein sequence alignment
  - Large-scale alignments (thousands of sequences)
  - Phylogenetic tree generation
- **Features**: Highly scalable, improved accuracy for divergent sequences

### MUSCLE
- **URL**: https://www.drive5.com/muscle/
- **Status**: Free (Open Source)
- **Description**: MUltiple Sequence Comparison by Log-Expectation. High-accuracy multiple sequence alignment tool with MUSCLE v5 being the latest major release.
- **Use Cases**:
  - Accurate multiple sequence alignment
  - Alignment ensemble generation
  - Sequence homology assessment
- **Features**: Iterative refinement, high accuracy, fast execution

### MAFFT
- **URL**: https://mafft.cbrc.jp/alignment/software/
- **Status**: Free (Open Source)
- **Description**: Multiple Alignment using Fast Fourier Transform. One of the fastest multiple sequence alignment tools available.
- **Use Cases**:
  - Large-scale multiple sequence alignment
  - Genome alignment
  - Protein/RNA sequence alignment
- **Features**: Multiple alignment strategies from fast (FFT-NS-1) to accurate (L-INS-i)

### T-Coffee
- **URL**: http://tcoffee.crg.cat/ or https://tcoffee.org/
- **Status**: Free (Open Source)
- **Description**: Tree-based Consistency Objective Function for alignment Evaluation. Can combine multiple alignment methods and integrate structural information.
- **Use Cases**:
  - Combining multiple alignment methods (M-Coffee)
  - Structural alignments (Expresso)
  - RNA secondary structure alignments (R-Coffee)
  - Transmembrane protein alignment
- **Features**: Consistency-based scoring, structural information integration

### EMBOSS Suite
- **URL**: https://www.ebi.ac.uk/Tools/emboss/
- **Status**: Free (Open Source)
- **Description**: European Molecular Biology Open Software Suite. Comprehensive collection of bioinformatics tools for sequence analysis.
- **Use Cases**:
  - Sequence alignment and manipulation
  - Protein motif identification
  - Codon usage analysis
  - Primer design
- **Features**: 200+ programs covering most bioinformatics needs

---

## Genome Analysis

### Galaxy
- **URL**: https://usegalaxy.org/ or https://galaxyproject.org/
- **Status**: Free (Open Source)
- **Description**: Web-based, open-source platform for data-intensive biomedical research. Enables accessible, reproducible, and transparent computational research.
- **Use Cases**:
  - Next-generation sequencing (NGS) analysis
  - Variant calling
  - RNA-seq analysis
  - ChIP-seq analysis
  - Metagenomics
- **Features**: Visual workflow builder, 8,000+ tools, extensive training materials
- **Cloud Options**: Galaxy Cloud, usegalaxy.eu, usegalaxy.org.au

### Geneious
- **URL**: https://www.geneious.com/
- **Status**: Commercial (Academic discounts available)
- **Pricing**: Student: $200/year, Academic: $620/year, Corporate: Custom
- **Description**: All-in-one bioinformatics software platform for sequence data analysis, molecular cloning, and primer design.
- **Use Cases**:
  - Molecular cloning and primer design
  - NGS data analysis
  - Phylogenetic analysis
  - Sequence assembly
  - CRISPR analysis
- **Features**: User-friendly GUI, integrated workflows

### SnapGene
- **URL**: https://www.snapgene.com/
- **Status**: Commercial (Academic discounts available)
- **Pricing**: Academic: ~$350/year per user
- **Description**: Molecular biology software for planning, visualizing, and documenting molecular biology procedures.
- **Use Cases**:
  - Plasmid mapping and annotation
  - Primer design
  - Restriction cloning
  - Gibson assembly
  - PCR simulation
- **Features**: Beautiful visualization, automatic annotation

### Benchling
- **URL**: https://www.benchling.com/
- **Status**: Freemium (Free for academics)
- **Description**: Cloud-based platform for biotechnology R&D. Includes electronic lab notebook, molecular biology tools, and inventory management.
- **Use Cases**:
  - Electronic lab notebook (ELN)
  - DNA sequence analysis and design
  - Lab inventory management
  - Workflow automation
- **Features**: Free academic plan, collaboration tools, AI-powered analysis (Benchling AI)

### CLC Workbench
- **URL**: https://www.qiagenbioinformatics.com/
- **Status**: Commercial
- **Description**: Bioinformatics workbench from QIAGEN with GUI-based analysis tools.
- **Use Cases**:
  - NGS data analysis
  - Microarray analysis
  - De novo assembly
  - Variant calling
- **Features**: Point-and-click interface, enterprise deployment

### DNAStar
- **URL**: https://www.dnastar.com/
- **Status**: Commercial
- **Description**: Comprehensive sequence analysis software suite for molecular biologists.
- **Use Cases**:
  - Sequence assembly
  - Gene expression analysis
  - Protein structure prediction
  - Antibody modeling
- **Features**: Lasergene package, Protean 3D for structure analysis

### Ugene
- **URL**: http://ugene.net/
- **Status**: Free (Open Source)
- **Description**: Free cross-platform bioinformatics software with GUI for multiple sequence alignment, genome assembly, and analysis.
- **Use Cases**:
  - Multiple sequence alignment
  - Genome browsing
  - Primer design
  - Plasmid mapping
- **Features**: Open source, workflow designer, NGS support

### IGV (Integrative Genomics Viewer)
- **URL**: https://software.broadinstitute.org/software/igv/ or https://igv.org/
- **Status**: Free (Open Source - MIT License)
- **Description**: High-performance visualization tool for interactive exploration of large, integrated genomic datasets.
- **Use Cases**:
  - Genome-wide data visualization
  - Variant review
  - RNA-seq visualization
  - Copy number variation analysis
- **Features**: Desktop and web versions (IGV-Web), igv.js for embedding

---

## Phylogenetics

### MEGA (Molecular Evolutionary Genetics Analysis)
- **URL**: https://www.megasoftware.net/
- **Status**: Free (Academic)
- **Description**: Integrated tool for conducting sequence alignment, inferring phylogenetic trees, mining web-based databases, and testing evolutionary hypotheses.
- **Use Cases**:
  - Phylogenetic tree construction
  - Molecular evolution analysis
  - TimeTree calibration
  - Evolutionary hypothesis testing
- **Features**: MEGA-GPT AI assistant, 3.5+ million downloads, TimeTree database integration

### PhyML
- **URL**: http://www.atgc-montpellier.fr/phyml/
- **Status**: Free (Open Source)
- **Description**: Phylogenetic estimation using Maximum Likelihood. Fast and accurate phylogenetic tree reconstruction.
- **Use Cases**:
  - Maximum likelihood phylogeny
  - Large-scale phylogenetic analysis
  - Model selection
- **Features**: Fast algorithms, various substitution models

### RAxML (Randomized Axelerated Maximum Likelihood)
- **URL**: https://github.com/stamatak/standard-RAxML
- **Status**: Free (Open Source)
- **Description**: Program for sequential and parallel Maximum Likelihood-based inference of large phylogenetic trees.
- **Use Cases**:
  - Large phylogenetic trees
  - Parallel phylogenetic inference
  - Bootstrap analysis
- **Features**: MPI and PThreads support, optimized for large datasets

### MrBayes
- **URL**: http://nbisweden.github.io/MrBayes/
- **Status**: Free (Open Source)
- **Description**: Bayesian inference of phylogeny using Markov Chain Monte Carlo (MCMC) methods.
- **Use Cases**:
  - Bayesian phylogenetic analysis
  - Complex model testing
  - Divergence time estimation
- **Features**: Parallel computing, complex substitution models

### BEAST (Bayesian Evolutionary Analysis Sampling Trees)
- **URL**: https://beast.community/
- **Status**: Free (Open Source)
- **Description**: Bayesian analysis platform for molecular sequences. Includes BEAST, BEAUti, and other tools.
- **Use Cases**:
  - Molecular clock dating
  - Phylogeography
  - Coalescent analysis
  - Epidemiological inference
- **Features**: BEAST2 with extensive package ecosystem

### FigTree
- **URL**: http://tree.bio.ed.ac.uk/software/figtree/
- **Status**: Free
- **Description**: Graphical viewer of phylogenetic trees with annotation and export capabilities.
- **Use Cases**:
  - Tree visualization
  - Ancestral state annotation
  - Publication-quality figures
- **Features**: Interactive editing, multiple export formats

### iTOL (Interactive Tree Of Life)
- **URL**: https://itol.embl.de/
- **Status**: Freemium
- **Description**: Web-based tool for the display, annotation, and management of phylogenetic trees.
- **Use Cases**:
  - Online tree visualization
  - Large tree annotation
  - Publication-ready figures
- **Features**: Interactive, supports trees with thousands of tips

---

## Structural Biology

### PyMOL
- **URL**: https://pymol.org/
- **Status**: Commercial (Open-source version available: PyMOL via Conda)
- **Pricing**: Academic license available; free via Conda (conda-forge)
- **Description**: Molecular visualization system for 3D structures of proteins, DNA, and other molecules.
- **Use Cases**:
  - Protein structure visualization
  - Ligand binding site analysis
  - Movie creation for presentations
  - Publication-quality figures
- **Features**: Python scripting, extensive rendering options

### Chimera/ChimeraX
- **URL**: https://www.cgl.ucsf.edu/chimerax/ or https://www.rbvi.ucsf.edu/chimera/
- **Status**: Free (Academic/Government/Nonprofit)
- **Description**: Next-generation molecular visualization program from UCSF. ChimeraX is the successor to the original UCSF Chimera.
- **Use Cases**:
  - Macromolecular structure analysis
  - Cryo-EM density visualization
  - Structure superposition
  - X-ray density analysis
- **Features**: Advanced graphics, VR support, Python scripting

### VMD (Visual Molecular Dynamics)
- **URL**: https://www.ks.uiuc.edu/Research/vmd/
- **Status**: Free (Academic/Government/Nonprofit)
- **Description**: Molecular visualization program for displaying, animating, and analyzing large biomolecular systems.
- **Use Cases**:
  - Molecular dynamics trajectory analysis
  - Large system visualization
  - Analysis of MD simulations
- **Features**: Tcl/Python scripting, trajectory playback, GPU acceleration

### Swiss-PdbViewer
- **URL**: https://spdbv.vital-it.ch/
- **Status**: Free
- **Description**: Application that provides a user-friendly interface for analyzing and comparing multiple protein structures.
- **Use Cases**:
  - Structure comparison
  - Homology modeling
  - Energy minimization
- **Features**: Integration with SWISS-MODEL

### COOT
- **URL**: https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/
- **Status**: Free (Open Source)
- **Description**: Crystallographic Object-Oriented Toolkit for macromolecular model building and validation.
- **Use Cases**:
  - X-ray crystallography model building
  - Electron density interpretation
  - Structure validation
- **Features**: Real-space refinement, validation tools

### AlphaFold
- **URL**: https://alphafold.ebi.ac.uk/ or https://deepmind.google/technologies/alphafold/
- **Status**: Free (Database); Open Source (Code)
- **Description**: AI system developed by Google DeepMind for predicting protein 3D structures from amino acid sequences with high accuracy.
- **Use Cases**:
  - Protein structure prediction
  - Structure-based drug design
  - Understanding protein function
  - Homology modeling
- **Features**: 200+ million predicted structures, API access, open-source code available

### Protein Data Bank (PDB)
- **URL**: https://www.rcsb.org/ (RCSB PDB) or https://www.ebi.ac.uk/pdbe/ (PDBe)
- **Status**: Free (Public Resource)
- **Description**: Worldwide repository of 3D structural data of biological macromolecules.
- **Use Cases**:
  - Structure search and download
  - Structural analysis
  - Drug design
  - Education and research
- **Features**: >200,000 experimentally determined structures, visualization tools (Mol*), API access

---

## Programming for Biology

### Python for Biology
- **URL**: https://www.python.org/ (Language); https://biopython.org/ (Biopython)
- **Status**: Free (Open Source)
- **Key Libraries**:
  - **Biopython**: Sequence analysis, file parsing, BLAST access, phylogenetics
  - **pandas**: Data manipulation and analysis
  - **matplotlib/seaborn**: Data visualization
  - **NumPy/SciPy**: Numerical computing
  - **scanpy**: Single-cell RNA-seq analysis
  - **scikit-bio**: Bioinformatics algorithms

### R for Biology
- **URL**: https://www.r-project.org/ (Language); https://www.bioconductor.org/ (Bioconductor)
- **Status**: Free (Open Source)
- **Key Packages**:
  - **Bioconductor**: 2,361+ bioinformatics packages
  - **DESeq2**: Differential expression analysis
  - **edgeR/limma**: RNA-seq analysis
  - **Seurat**: Single-cell genomics
  - **Biostrings**: String handling for biological sequences
  - **GenomicRanges**: Genomic interval manipulation
  - **ggplot2**: Publication-quality visualization

### Perl for Biology
- **URL**: https://bioperl.org/ (BioPerl)
- **Status**: Free (Open Source)
- **Description**: BioPerl is a collection of Perl modules for bioinformatics programming.
- **Use Cases**: Sequence manipulation, database access, file format conversion

### Java for Biology
- **URL**: https://biojava.org/
- **Status**: Free (Open Source)
- **Description**: Open-source project dedicated to providing Java tools for processing biological data.
- **Use Cases**: Sequence analysis, protein structure analysis, algorithm development

### Jupyter Notebooks
- **URL**: https://jupyter.org/
- **Status**: Free (Open Source)
- **Description**: Interactive computing environment combining code, text, and visualizations.
- **Use Cases**:
  - Reproducible research
  - Interactive data analysis
  - Teaching and tutorials
  - Workflow documentation

---

### R/Bioconductor Packages

#### DESeq2
- **URL**: https://bioconductor.org/packages/DESeq2/
- **Status**: Free (Open Source)
- **Description**: Differential gene expression analysis based on the negative binomial distribution.
- **Use Cases**: RNA-seq differential expression, normalization, visualization

#### edgeR
- **URL**: https://bioconductor.org/packages/edgeR/
- **Status**: Free (Open Source)
- **Description**: Empirical Analysis of Digital Gene Expression Data in R.
- **Use Cases**: Differential expression, small sample sizes, count data analysis

#### limma
- **URL**: https://bioconductor.org/packages/limma/
- **Status**: Free (Open Source)
- **Description**: Linear Models for Microarray Data (also works for RNA-seq).
- **Use Cases**: Differential expression, microarray analysis, RNA-seq voom

#### Seurat
- **URL**: https://satijalab.org/seurat/
- **Status**: Free (Open Source)
- **Description**: R toolkit for single cell genomics.
- **Use Cases**: Single-cell RNA-seq analysis, clustering, trajectory inference

#### Biostrings
- **URL**: https://bioconductor.org/packages/Biostrings/
- **Status**: Free (Open Source)
- **Description**: String manipulation and biological sequence analysis.
- **Use Cases**: Sequence manipulation, pattern matching, alignment

#### GenomicRanges
- **URL**: https://bioconductor.org/packages/GenomicRanges/
- **Status**: Free (Open Source)
- **Description**: Infrastructure for genomic intervals and operations.
- **Use Cases**: Genome arithmetic, interval overlap finding

### Python Libraries

#### Biopython
- **URL**: https://biopython.org/
- **Status**: Free (Open Source)
- **Description**: Set of freely available tools for biological computation.
- **Use Cases**: Sequence parsing, BLAST parsing, phylogenetics, structural biology

#### scikit-bio
- **URL**: http://scikit-bio.org/
- **Status**: Free (Open Source)
- **Description**: Python library for bioinformatics and computational biology.
- **Use Cases**: Sequence analysis, phylogenetics, diversity analysis

#### scanpy
- **URL**: https://scanpy.readthedocs.io/
- **Status**: Free (Open Source)
- **Description**: Scalable toolkit for analyzing single-cell gene expression data.
- **Use Cases**: Single-cell analysis, clustering, visualization, large-scale datasets (>1M cells)
- **Features**: GPU acceleration via rapids-singlecell

---

## Pathway Analysis

### Cytoscape
- **URL**: https://cytoscape.org/
- **Status**: Free (Open Source)
- **Description**: Open source platform for visualizing complex networks and integrating these with any type of attribute data.
- **Use Cases**:
  - Protein-protein interaction networks
  - Gene regulatory networks
  - Social network analysis
  - Pathway visualization
- **Features**: 300+ apps, automation API (CyREST), Cytoscape.js for web

### IPA (Ingenuity Pathway Analysis)
- **URL**: https://www.qiagenbioinformatics.com/products/ingenuity-pathway-analysis/
- **Status**: Commercial (Subscription)
- **Description**: Commercial pathway analysis and visualization tool.
- **Use Cases**:
  - Canonical pathway analysis
  - Upstream regulator analysis
  - Disease and function analysis
  - Network analysis
- **Features**: Curated knowledge base, extensive literature integration

### DAVID (Database for Annotation, Visualization and Integrated Discovery)
- **URL**: https://david.ncifcrf.gov/ or https://david-d.ncifcrf.gov/
- **Status**: Free (Academic)
- **Description**: Bioinformatics resource for functional annotation and enrichment analysis.
- **Use Cases**:
  - Gene functional annotation
  - Enrichment analysis
  - Clustering analysis
- **Features**: Multiple annotation databases integrated

### KEGG Mapper
- **URL**: https://www.genome.jp/kegg/mapper.html
- **Status**: Freemium (Academic free for pathway visualization; Subscription for database access)
- **Description**: Tools for mapping molecular data to KEGG pathways.
- **Use Cases**:
  - Pathway mapping
  - Gene/enzyme annotation
  - Metabolic pathway analysis
- **Features**: 30+ years of development, extensive pathway database

### Reactome
- **URL**: https://reactome.org/
- **Status**: Free (Open Source)
- **Description**: Open-source, open-access, manually curated and peer-reviewed pathway database.
- **Use Cases**:
  - Pathway analysis
  - Over-representation analysis
  - Expression data overlay
- **Features**: AI chatbot (React-to-Me), extensive human pathways

### STRING
- **URL**: https://string-db.org/
- **Status**: Free (Academic)
- **Description**: Database of known and predicted protein-protein interactions.
- **Use Cases**:
  - Protein interaction network analysis
  - Functional enrichment
  - Protein function prediction
- **Features**: 14,000+ organisms, interaction confidence scores

---

## Data Visualization

### R ggplot2
- **URL**: https://ggplot2.tidyverse.org/
- **Status**: Free (Open Source)
- **Description**: Grammar of graphics implementation for R.
- **Use Cases**: Publication-quality statistical graphics, complex visualizations

### Python matplotlib/seaborn
- **URL**: https://matplotlib.org/ and https://seaborn.pydata.org/
- **Status**: Free (Open Source)
- **Description**: Comprehensive visualization libraries for Python.
- **Use Cases**: Statistical visualization, heatmaps, genomic data visualization

### Circos
- **URL**: http://circos.ca/
- **Status**: Free (Open Source)
- **Description**: Circular visualization of relationships and dense data.
- **Use Cases**: Genomic rearrangements, genome-wide data, comparative genomics

### UCSC Genome Browser
- **URL**: https://genome.ucsc.edu/
- **Status**: Free (Academic)
- **Description**: Web-based genome browser with extensive annotation tracks.
- **Use Cases**: Genome navigation, custom track visualization, comparative genomics

---

## Cloud Platforms

### Galaxy Cloud
- **URL**: https://galaxyproject.org/cloud/
- **Status**: Pay-per-use (Cloud infrastructure costs)
- **Description**: Galaxy instances deployed on cloud infrastructure.
- **Use Cases**: Scalable NGS analysis, custom Galaxy deployments

### Terra (Broad Institute)
- **URL**: https://terra.bio/
- **Status**: Freemium (Google Cloud billing)
- **Description**: Cloud-native platform for biomedical research powered by Google Cloud.
- **Use Cases**: Large-scale genomics, GWAS, collaborative research

### DNAnexus
- **URL**: https://www.dnanexus.com/
- **Status**: Commercial (Enterprise)
- **Description**: Cloud-based bioinformatics platform for enterprise genomics.
- **Use Cases**: Clinical genomics, regulated environments, large-scale analysis

### Seven Bridges
- **URL**: https://www.sevenbridges.com/
- **Status**: Commercial
- **Description**: Bioinformatics data analysis platform with workflow capabilities.
- **Use Cases**: Cancer genomics, precision medicine, workflow automation

### Google Cloud Life Sciences
- **URL**: https://cloud.google.com/life-sciences
- **Status**: Pay-per-use
- **Description**: Managed computing infrastructure for life sciences workloads.
- **Use Cases**: Large-scale genomic processing, GATK pipelines

### AWS HealthOmics
- **URL**: https://aws.amazon.com/healthomics/
- **Status**: Pay-per-use
- **Description**: Managed service for biological data processing at scale.
- **Use Cases**: Genomics, transcriptomics, proteomics analysis

---

## Databases & Resources

### NCBI Toolkit
- **URL**: https://www.ncbi.nlm.nih.gov/
- **Resources**: PubMed, GenBank, BLAST, dbSNP, ClinVar, GEO
- **Status**: Free (Public Resource)
- **Description**: Comprehensive suite of biomedical and genomic information resources.

### EMBL-EBI Tools
- **URL**: https://www.ebi.ac.uk/services/
- **Resources**: UniProt, Ensembl, ArrayExpress, PRIDE, InterPro
- **Status**: Free (Public Resource)
- **Description**: Europe's hub for bioinformatics data and tools.

### UCSC Genome Browser Tools
- **URL**: https://genome.ucsc.edu/cgi-bin/hgGateway
- **Status**: Free (Academic)
- **Description**: Tools for genome navigation, data retrieval, and custom analysis.

### Ensembl API
- **URL**: https://www.ensembl.org/info/docs/api/index.html
- **Status**: Free (Open Source)
- **Description**: Access to genomic data through Perl and REST APIs.
- **Features**: Genome data, comparative genomics, variation data

### UniProt Tools
- **URL**: https://www.uniprot.org/help/programmatic_access
- **Status**: Free (Open Source)
- **Description**: Comprehensive protein sequence and annotation database with APIs.
- **Features**: Protein sequence search, batch retrieval, programmatic access

---

## Online Courses & Training

### Coursera Bioinformatics Specialization (UC San Diego)
- **URL**: https://www.coursera.org/specializations/bioinformatics
- **Status**: Free to audit; Certificate paid
- **Description**: Top-50 MOOC of all time. Covers genome sequencing, comparison, and evolutionary analysis.
- **Content**: 7 courses, programming track available (Honors Track)

### edX Biology/Genomics Courses
- **URL**: https://www.edx.org/
- **Status**: Free to audit; Certificates paid
- **Description**: Courses from Harvard, MIT, and other institutions covering genomics and computational biology.

### Cold Spring Harbor Laboratory Courses
- **URL**: https://www.cshl.edu/education/
- **Status**: Paid (Scholarships available)
- **Description**: Premier hands-on training in bioinformatics, sequencing, and computational biology.
- **Features**: Intensive residential courses, expert instructors

### EMBL-EBI Train Online
- **URL**: https://www.ebi.ac.uk/training/
- **Status**: Free
- **Description**: Comprehensive bioinformatics training from Europe's leading bioinformatics institute.
- **Features**: Webinars, online tutorials, hands-on courses

### NIH Bioinformatics Tutorials
- **URL**: https://www.nlm.nih.gov/ncbi/workshops/
- **Status**: Free
- **Description**: Training materials and workshops from NCBI/NIH.

### Galaxy Training Network
- **URL**: https://training.galaxyproject.org/
- **Status**: Free (Open Source)
- **Description**: Collection of tutorials for Galaxy covering various bioinformatics analyses.
- **Features**: 400+ tutorials, hands-on examples, multiple scientific domains

### Software Carpentry
- **URL**: https://software-carpentry.org/
- **Status**: Free (Open Source)
- **Description**: Teaching basic lab skills for research computing to scientists.
- **Content**: Unix shell, Python/R, Git version control

---

## Bioinformatics Communities

### Bioinformatics Stack Exchange
- **URL**: https://bioinformatics.stackexchange.com/
- **Description**: Q&A community for bioinformatics researchers and practitioners.
- **Topics**: Programming, algorithms, data analysis, tool recommendations

### Biostars
- **URL**: https://www.biostars.org/
- **Description**: Bioinformatics question and answer forum with 100,000+ users.
- **Topics**: NGS analysis, tool usage, career advice, research questions

### SEQanswers
- **URL**: http://seqanswers.com/
- **Description**: Next-generation sequencing community forum.
- **Topics**: Sequencing technologies, data analysis, protocols

### Reddit r/bioinformatics
- **URL**: https://www.reddit.com/r/bioinformatics/
- **Description**: Active community for bioinformatics discussions, career advice, and news.
- **Members**: 100,000+ subscribers

### ISCB Communities
- **URL**: https://www.iscb.org/
- **Description**: International Society for Computational Biology.
- **Features**: 
  - Annual conferences (ISMB, ECCB)
  - Regional affiliates
  - Community of Special Interest (COSI) groups
  - Career resources and job board

---

## Quick Reference: Free vs Commercial

| Tool | Type | Cost |
|------|------|------|
| BLAST | Government | Free |
| Galaxy | Open Source | Free |
| Clustal Omega | Open Source | Free |
| MUSCLE | Open Source | Free |
| MAFFT | Open Source | Free |
| T-Coffee | Open Source | Free |
| EMBOSS | Open Source | Free |
| MEGA | Academic | Free |
| PyMOL | Commercial | Paid (Free via Conda) |
| ChimeraX | Academic | Free (Academic/Nonprofit) |
| AlphaFold | Open Source | Free |
| R/Bioconductor | Open Source | Free |
| Python/Biopython | Open Source | Free |
| Cytoscape | Open Source | Free |
| IGV | Open Source | Free |
| Geneious | Commercial | Paid |
| SnapGene | Commercial | Paid |
| Benchling | Freemium | Free (Academic) |
| IPA | Commercial | Paid |
| DAVID | Academic | Free |
| KEGG | Freemium | Free (Pathway viewing) |
| Reactome | Open Source | Free |
| STRING | Academic | Free |

---

*Last Updated: February 2026*

*Note: URLs and pricing information are subject to change. Please verify on the official websites for the most current information.*
