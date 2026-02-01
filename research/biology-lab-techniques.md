# Biology Laboratory Techniques, Protocols, and Methods

A comprehensive guide to essential techniques and protocols used in biological research, covering molecular biology, cell biology, protein analysis, microscopy, genomics, and field methods.

---

## Table of Contents

1. [Molecular Biology Techniques](#1-molecular-biology-techniques)
2. [Cell Biology Techniques](#2-cell-biology-techniques)
3. [Protein Techniques](#3-protein-techniques)
4. [Microscopy](#4-microscopy)
5. [Genetics & Genomics](#5-genetics--genomics)
6. [Ecology & Field Methods](#6-ecology--field-methods)
7. [Protocol Resources](#7-protocol-resources)
8. [Safety & Regulations](#8-safety--regulations)

---

## 1. Molecular Biology Techniques

### PCR (Polymerase Chain Reaction)

PCR is a technique used to amplify specific DNA sequences exponentially, generating millions of copies from a small initial amount of template DNA.

**Components:**
- Template DNA
- Forward and reverse primers
- DNA polymerase (typically Taq polymerase)
- dNTPs (deoxynucleotide triphosphates)
- Buffer with Mg²⁺

**Procedure Overview:**
1. **Denaturation** (94-98°C): Double-stranded DNA separates into single strands
2. **Annealing** (50-65°C): Primers bind to complementary sequences on template DNA
3. **Extension** (72°C): DNA polymerase synthesizes new DNA strands
4. Repeat cycles 25-35 times

**Applications:**
- DNA cloning and sequencing
- Gene expression analysis
- Genotyping and mutation detection
- Forensic analysis
- Diagnostic testing

**Variations:**
- **Hot-start PCR**: Prevents non-specific amplification
- **Touchdown PCR**: Gradually decreases annealing temperature
- **Multiplex PCR**: Amplifies multiple targets simultaneously
- **Digital PCR (dPCR)**: Absolute quantification of DNA

---

### Gel Electrophoresis

A technique for separating DNA, RNA, or proteins based on size and charge using an electric field.

**Types:**
- **Agarose gel electrophoresis**: For DNA and RNA (0.5-2% agarose)
- **Polyacrylamide gel electrophoresis (PAGE)**: For smaller DNA fragments and proteins

**Procedure:**
1. Prepare gel with appropriate concentration
2. Load samples with loading dye
3. Run at constant voltage (5-10 V/cm)
4. Stain with ethidium bromide, SYBR Safe, or other fluorescent dyes
5. Visualize under UV or blue light transilluminator

**DNA Ladders/Markers:**
- 1 kb DNA ladder
- 100 bp DNA ladder
- Lambda DNA/HindIII marker

**Safety Considerations:**
- Ethidium bromide is mutagenic; use SYBR Safe alternatives when possible
- UV light causes skin and eye damage; wear protective equipment

---

### DNA Sequencing

#### Sanger Sequencing (Chain Termination Method)

The first widely used DNA sequencing method, still employed for targeted sequencing and verification.

**Principle:**
- Uses dideoxynucleotides (ddNTPs) that terminate DNA synthesis
- Each ddNTP is labeled with a different fluorescent dye
- Capillary electrophoresis separates fragments by size

**Applications:**
- Confirming cloned inserts
- Mutation analysis
- HLA typing
- Small genome sequencing

**Key Platforms:**
- Applied Biosystems 3500/3730 series
- Capillary electrophoresis instruments

#### Next-Generation Sequencing (NGS)

High-throughput sequencing technologies that parallelize the sequencing process.

**Major Platforms:**

| Platform | Technology | Read Length | Applications |
|----------|------------|-------------|--------------|
| Illumina | Sequencing by synthesis | 50-300 bp | Whole genome, exome, RNA-seq |
| Oxford Nanopore | Nanopore sequencing | Up to 2 Mb+ | De novo assembly, real-time sequencing |
| PacBio | Single-molecule real-time (SMRT) | 10-25 kb | Long-read sequencing, epigenetics |
| Ion Torrent | Semiconductor sequencing | 200-400 bp | Targeted sequencing |

**NGS Applications:**
- Whole genome sequencing (WGS)
- Whole exome sequencing (WES)
- RNA sequencing (RNA-seq)
- ChIP-seq, ATAC-seq
- Metagenomics
- Single-cell sequencing

**Bioinformatics Pipeline:**
1. Quality control (FastQC)
2. Adapter trimming (Trim Galore, Cutadapt)
3. Alignment (BWA, Bowtie2)
4. Variant calling (GATK, FreeBayes)
5. Annotation (ANNOVAR, VEP)

---

### CRISPR-Cas9 Gene Editing

A revolutionary genome editing technology using the bacterial CRISPR-Cas system.

**Components:**
- **Cas9 nuclease**: Creates double-strand breaks
- **sgRNA (single guide RNA)**: Directs Cas9 to target sequence
  - crRNA: ~20 nt target-specific sequence
  - tracrRNA: Scaffold for Cas9 binding
- **PAM sequence** (Protospacer Adjacent Motif): NGG for Streptococcus pyogenes Cas9

**Mechanism:**
1. sgRNA guides Cas9 to complementary DNA sequence
2. Cas9 creates double-strand break 3 bp upstream of PAM
3. DNA repair via:
   - **NHEJ** (Non-Homologous End Joining): Error-prone, creates insertions/deletions
   - **HDR** (Homology-Directed Repair): Precise repair using donor template

**Applications:**
- Gene knockout
- Gene insertion/replacement
- Transcriptional activation/repression (dCas9)
- Base editing (cytosine/adenine base editors)
- Prime editing

**Delivery Methods:**
- Plasmid transfection
- mRNA + sgRNA transfection
- Ribonucleoprotein (RNP) complexes
- Viral vectors (lentivirus, AAV)

**Design Tools:**
- Benchling
- CRISPOR
- CHOPCHOP
- sgDesigner (Broad Institute)

---

### Cloning

#### Traditional Cloning (Restriction Enzyme-Based)

**Steps:**
1. PCR amplify insert with restriction sites
2. Digest insert and vector with compatible restriction enzymes
3. Ligate insert into vector using DNA ligase
4. Transform into competent cells
5. Screen colonies (colony PCR, restriction digest, sequencing)

#### Gibson Assembly

**Advantages:**
- Seamless cloning without scar sequences
- Multiple fragments in single reaction
- No restriction sites required

**Mechanism:**
- T5 exonuclease creates 5' overhangs
- Phusion polymerase fills gaps
- Taq ligase seals nicks

#### Golden Gate Assembly

**Features:**
- Type IIS restriction enzymes cut outside recognition site
- Scarless assembly
- Highly efficient for multigene constructs

#### TOPO Cloning

**Mechanism:**
- Uses Vaccinia virus topoisomerase I
- 5-minute room temperature ligation
- No ligase required

**Types:**
- TA cloning: For Taq-amplified PCR products
- Blunt cloning: For proofreading polymerase products
- Zero Blunt: For blunt-end cloning

---

### Western Blot

A technique for detecting specific proteins in a sample using antibody-based detection.

**Procedure:**

1. **Sample Preparation**
   - Lyse cells/tissue in RIPA or Laemmli buffer
   - Quantify protein (BCA or Bradford assay)
   - Denature with SDS and reducing agents (β-mercaptoethanol or DTT)

2. **SDS-PAGE**
   - Separate proteins by molecular weight
   - 8-15% acrylamide gels depending on target size

3. **Transfer**
   - Wet or semi-dry transfer to PVDF or nitrocellulose membrane
   - Transfer buffer with 20% methanol

4. **Blocking**
   - 5% non-fat milk or BSA in TBST
   - Prevents non-specific antibody binding

5. **Primary Antibody Incubation**
   - Specific to target protein
   - Overnight at 4°C or 1-2 hours at room temperature

6. **Secondary Antibody Incubation**
   - HRP-conjugated or fluorescent
   - Detects primary antibody species

7. **Detection**
   - Chemiluminescence (ECL)
   - Fluorescence
   - Colorimetric

**Loading Controls:**
- β-actin (~42 kDa)
- GAPDH (~37 kDa)
- Tubulin (~55 kDa)
- Lamin B1 (~66 kDa) - nuclear

**Antibody Databases:**
- antibodyregistry.org
- CiteAb
- Antibodypedia

---

### Northern Blot

Technique for detecting specific RNA molecules and studying gene expression.

**Procedure:**
1. Extract total RNA or mRNA
2. Separate on denaturing agarose or polyacrylamide gel
3. Transfer to membrane
4. Hybridize with labeled RNA or DNA probe
5. Detect specific transcripts

**Applications:**
- mRNA size and expression levels
- Alternative splicing detection
- miRNA analysis
- RNA stability studies

**Probes:**
- Radiolabeled (³²P) - highest sensitivity
- Digoxigenin (DIG) labeled
- Biotin labeled

---

### Southern Blot

Technique for detecting specific DNA sequences in DNA samples.

**Procedure:**
1. Digest DNA with restriction enzymes
2. Separate fragments by agarose gel electrophoresis
3. Denature DNA in gel (alkaline treatment)
4. Transfer to membrane (capillary or vacuum)
5. Cross-link DNA to membrane (UV or baking)
6. Hybridize with labeled probe
7. Wash and detect

**Applications:**
- Restriction fragment length polymorphism (RFLP)
- Gene copy number analysis
- Transgene integration detection
- DNA methylation analysis

---

### qPCR / RT-PCR

#### Quantitative PCR (qPCR / Real-Time PCR)

Measures DNA amplification in real-time during PCR cycles.

**Detection Methods:**
- **SYBR Green**: Binds double-stranded DNA; non-specific
- **TaqMan probes**: Sequence-specific; hydrolysis probes with fluorophore and quencher
- **Molecular beacons**: Hairpin probes with fluorophore and quencher

**Quantification Methods:**
- **Standard curve**: Absolute quantification
- **ΔΔCt method**: Relative quantification (fold change)

**Applications:**
- Gene expression analysis
- Viral load quantification
- Copy number variation
- SNP genotyping

#### Reverse Transcription PCR (RT-PCR)

**Two-Step RT-PCR:**
1. Reverse transcribe RNA to cDNA using reverse transcriptase
   - Oligo(dT) primers: For mRNA (poly-A tail)
   - Random hexamers: For all RNA
   - Gene-specific primers: For specific targets
2. Use cDNA as template for PCR/qPCR

**One-Step RT-PCR:**
- Reverse transcription and PCR in single tube
- Convenient but less flexible

**Reverse Transcriptases:**
- M-MLV RT: RNase H+ or H-
- SuperScript series (Thermo Fisher)
- AMV RT

---

### DNA/RNA Extraction

#### DNA Extraction

**Methods:**

1. **Phenol-Chloroform Extraction**
   - Classic method
   - Phenol denatures proteins
   - Chloroform improves phase separation
   - Ethanol precipitation

2. **Column-Based Kits**
   - Silica membrane binding
   - Qiagen DNeasy, Zymo Quick-DNA
   - Fast and reproducible

3. **Magnetic Bead-Based**
   - High-throughput compatible
   - Automated extraction

**Specialized Protocols:**
- **Plasmid DNA**: Alkaline lysis
- **Genomic DNA**: Proteinase K digestion
- **FFPE DNA**: Deparaffinization and optimized lysis

#### RNA Extraction

**Critical Considerations:**
- RNases are ubiquitous; use DEPC-treated water and RNase inhibitors
- Work quickly and on ice

**Methods:**

1. **TRIzol/Acid Guanidinium Thiocyanate-Phenol-Chloroform**
   - Gold standard for total RNA
   - Preserves RNA integrity
   - Can isolate small RNAs

2. **Column-Based Kits**
   - RNeasy (Qiagen)
   - PureLink (Thermo Fisher)
   - Quick-RNA (Zymo)

**RNA Quality Assessment:**
- Nanodrop: Purity (A260/A280, A260/A230)
- Bioanalyzer/TapeStation: RIN (RNA Integrity Number)
- Qubit: Accurate concentration

---

### Plasmid Preparation

#### Alkaline Lysis Method

**Steps:**
1. **Resuspension**: Resuspend bacterial pellet in Tris-EDTA buffer
2. **Lysis**: Lyse cells with NaOH/SDS (alkaline denaturation)
3. **Neutralization**: Potassium acetate precipitates genomic DNA and proteins
4. **Precipitation**: Isopropanol or ethanol precipitates plasmid DNA
5. **Wash**: 70% ethanol wash
6. **Resuspension**: TE buffer or water

#### Commercial Kits

- **Qiagen**: Miniprep, Midiprep, Maxiprep, Giga prep
- **Zymo**: Zyppy kits (no centrifugation needed)
- **Thermo Fisher**: PureLink kits

**Plasmid Yields:**
- Miniprep: 5-50 µg
- Midiprep: 100-400 µg
- Maxiprep: 0.5-2 mg
- Gigaprep: 5-15 mg

**Quality:**
- A260/A280: 1.8-2.0
- A260/A230: 2.0-2.2
- Supercoiled vs. nicked forms

---

### Transformation

Introduction of foreign DNA into bacterial cells.

#### Chemical Transformation (Heat Shock)

**Competent Cell Preparation:**
- Inoculate fresh culture
- Chill on ice
- Wash with ice-cold CaCl₂
- Aliquot and freeze at -80°C

**Transformation Procedure:**
1. Mix DNA with competent cells
2. Incubate on ice (30 min)
3. Heat shock at 42°C (30-90 seconds)
4. Ice shock (2 min)
5. Add SOC medium
6. Recover at 37°C (30-60 min)
7. Plate on selective media

**Efficiency Factors:**
- Cell density at harvest
- CaCl₂ concentration
- Heat shock duration
- DNA quality

#### Electroporation

**Advantages:**
- Higher efficiency (10⁹-10¹⁰ CFU/µg)
- Works with larger DNA
- Suitable for difficult-to-transform strains

**Procedure:**
1. Wash cells extensively with 10% glycerol or water
2. Mix with DNA in cuvette
3. Apply electrical pulse (1.8-2.5 kV)
4. Add recovery medium immediately
5. Incubate and plate

---

### Transfection

Introduction of nucleic acids into eukaryotic cells.

#### Chemical Methods

**Calcium Phosphate:**
- Forms DNA-calcium phosphate precipitate
- Cells take up precipitate via endocytosis
- Inexpensive but variable efficiency

**Lipid-Based Transfection:**
- Lipofectamine 2000/3000
- FuGENE
- TransIT
- Forms liposomes with DNA

**Polymer-Based:**
- Polyethylenimine (PEI)
- JetPEI
- Effective for suspension cells

#### Physical Methods

**Electroporation:**
- Brief electrical pulse creates membrane pores
- High efficiency
- Requires optimization of voltage and pulse length

**Nucleofection:**
- Specialized electroporation with optimized buffers
- High efficiency for difficult cell types

**Microinjection:**
- Direct injection into nucleus or cytoplasm
- Single-cell level
- Used for embryos and oocytes

#### Viral Transduction

**Lentivirus:**
- Integrates into host genome
- Stable expression
- Infects dividing and non-dividing cells

**Adenovirus:**
- Non-integrating (episomal)
- Transient high expression
- Immunogenic

**AAV (Adeno-Associated Virus):**
- Non-pathogenic
- Low immunogenicity
- Popular for gene therapy

**Optimization Factors:**
- Cell confluence (70-90% optimal)
- DNA amount and quality
- Reagent:DNA ratio
- Incubation time
- Presence of antibiotics

---

## 2. Cell Biology Techniques

### Cell Culture

#### Aseptic Technique

**Essential Practices:**
- Work in laminar flow hood (biosafety cabinet)
- Sterilize work surface with 70% ethanol
- Flame sterilize tools (if using Bunsen burner)
- Minimize talking and movement
- Spray hands and bottles with ethanol

**Cell Culture Media:**

| Component | Function |
|-----------|----------|
| Basal medium (DMEM, RPMI, etc.) | Nutrients, salts, amino acids |
| Fetal Bovine Serum (FBS) | Growth factors, hormones |
| L-Glutamine | Essential amino acid |
| Antibiotics (optional) | Prevent contamination |

#### Cell Lines

**Adherent Cell Lines:**
- HeLa (cervical cancer)
- HEK293 (embryonic kidney)
- MCF-7 (breast cancer)
- NIH/3T3 (mouse fibroblast)

**Suspension Cell Lines:**
- Jurkat (T-cell leukemia)
- K562 (chronic myelogenous leukemia)
- THP-1 (monocytic leukemia)

**Primary Cells:**
- Directly isolated from tissue
- Limited lifespan (Hayflick limit)
- More physiologically relevant

#### Passaging (Subculturing)

**Adherent Cells:**
1. Aspirate spent medium
2. Wash with PBS (removes serum inhibitors)
3. Add trypsin-EDTA
4. Incubate at 37°C (1-3 min)
5. Neutralize with complete medium
6. Count and seed at appropriate density

**Suspension Cells:**
1. Split cells 1:3 to 1:10
2. Add fresh medium
3. No enzymatic treatment needed

#### Cryopreservation

**Freezing Medium:**
- 90% FBS + 10% DMSO
- Or specialized freezing media

**Procedure:**
1. Harvest cells in log phase
2. Resuspend in freezing medium (1-2×10⁶ cells/mL)
3. Transfer to cryovials
4. Freeze in controlled rate freezer or Mr. Frosty
   - -1°C/min to -80°C
5. Transfer to liquid nitrogen (-196°C)

**Thawing:**
1. Rapid thaw in 37°C water bath
2. Transfer to pre-warmed medium
3. Centrifuge to remove DMSO
4. Resuspend and culture

#### Cell Counting

**Hemocytometer (Manual):**
- Trypan blue exclusion for viability
- Count cells in grid
- Calculate: cells/mL = average count × dilution factor × 10⁴

**Automated Counters:**
- Countess (Thermo Fisher)
- TC20 (Bio-Rad)
- Cellometer
- Flow cytometry-based

**Viability Assays:**
- Trypan blue exclusion
- MTT/XTT assays
- ATP-based assays
- Live/dead staining

---

### Microscopy

#### Light Microscopy

**Brightfield Microscopy:**
- Simplest form
- Staining often required (H&E, Giemsa)
- Limited contrast for transparent samples

**Phase Contrast:**
- Converts phase shifts to brightness changes
- No staining required
- Ideal for live cell imaging

**Differential Interference Contrast (DIC):**
- Enhanced contrast and 3D appearance
- Uses polarized light and Wollaston prisms

**Darkfield Microscopy:**
- Illuminates sample from sides
- Bright objects on dark background
- Useful for unstained samples

---

### Flow Cytometry

A technique for analyzing and sorting cells based on light scattering and fluorescence properties.

**Principles:**
- Cells pass through laser beam in single file
- Forward scatter (FSC): Cell size
- Side scatter (SSC): Cell granularity/complexity
- Fluorescence: Multiple colors (up to 20+ parameters)

**Instrumentation:**
- BD FACSymphony, FACSAria
- Thermo Attune
- Cytek Aurora (spectral)
- Sony SH800

**Applications:**
- Immunophenotyping
- Cell cycle analysis (PI staining)
- Apoptosis detection (Annexin V)
- Intracellular cytokine staining
- Calcium flux measurements

**Controls:**
- Unstained control
- Single-color compensation controls
- FMO (Fluorescence Minus One) controls
- Isotype controls

#### Data Analysis

**Software:**
- FlowJo
- FCS Express
- Cytobank
- CellEngine

**Gating Strategies:**
- Sequential gating
- Boolean gating
- Automated clustering (t-SNE, UMAP)

---

### Cell Sorting (FACS)

Fluorescence-Activated Cell Sorting - isolates specific cell populations.

**Sorting Modes:**
- **Single cell**: One cell per well (cloning)
- **Enrichment**: High-speed bulk sorting
- **Purify**: Remove debris and dead cells

**Considerations:**
- Nozzle size (70, 85, 100, 130 µm)
- Sort speed vs. purity
- Collection media
- Sterility requirements

**Applications:**
- Isolate rare cell populations
- Single-cell genomics
- Stem cell isolation
- Transfected cell sorting

---

### Immunofluorescence (IF)

Detection of specific antigens using fluorescently-labeled antibodies.

#### Direct IF
- Primary antibody directly conjugated to fluorophore
- Faster, less background
- Less amplification

#### Indirect IF
- Unlabeled primary antibody
- Fluororescent secondary antibody
- Signal amplification
- More flexibility

**Procedure:**
1. Fix cells (paraformaldehyde, methanol, acetone)
2. Permeabilize (Triton X-100, saponin) if intracellular
3. Block (BSA, normal serum, or commercial blockers)
4. Incubate primary antibody
5. Wash
6. Incubate secondary antibody
7. Wash
8. Counterstain nucleus (DAPI, Hoechst)
9. Mount with antifade medium

**Common Fluorophores:**

| Fluorophore | Excitation | Emission | Color |
|-------------|------------|----------|-------|
| DAPI | 358 nm | 461 nm | Blue |
| FITC | 495 nm | 519 nm | Green |
| Alexa Fluor 488 | 495 nm | 519 nm | Green |
| Cy3 | 550 nm | 570 nm | Orange |
| Alexa Fluor 555 | 555 nm | 565 nm | Orange |
| Texas Red | 596 nm | 620 nm | Red |
| Alexa Fluor 647 | 650 nm | 668 nm | Far-red |

**Autofluorescence Quenchers:**
- TrueBlack (Biotium)
- Sudan Black B
- CuSO₄ in ammonium acetate

---

### Immunohistochemistry (IHC)

Detection of antigens in tissue sections.

**Sample Types:**
- **FFPE** (Formalin-Fixed Paraffin-Embedded): Long-term storage, excellent morphology
- **Frozen sections**: Better antigen preservation, faster processing

**Procedure:**

1. **Deparaffinization** (FFPE only)
   - Xylene or xylene substitutes
   - Rehydration through ethanol series

2. **Antigen Retrieval**
   - Heat-induced epitope retrieval (HIER): Citrate buffer, pH 6.0 or Tris-EDTA, pH 9.0
   - Enzymatic digestion: Trypsin, proteinase K

3. **Blocking**
   - Endogenous peroxidase (3% H₂O₂)
   - Endogenous biotin (avidin/biotin block)
   - Protein block (serum, BSA)

4. **Antibody Incubation**
   - Primary antibody optimization critical
   - Secondary antibody detection

5. **Detection Systems**
   - Chromogenic: DAB (brown), AEC (red), AP (blue/purple)
   - Fluorescent: Similar to IF

6. **Counterstaining**
   - Hematoxylin (blue nuclei)
   - Methyl green
   - DAPI (fluorescent)

7. **Mounting**
   - Aqueous (fluorescent)
   - Permanent (chromogenic)

**Controls:**
- Positive tissue control
- Negative control (omit primary antibody)
- Isotype control
- Peptide blocking

---

### Live Cell Imaging

Time-lapse microscopy of living cells.

**Environmental Control:**
- Temperature (37°C)
- CO₂ (5-10%)
- Humidity

**Incubation Systems:**
- Stage-top incubators
- Full environmental chambers
- Objective heaters

**Labeling:**
- **Fluorescent proteins**: GFP, mCherry, mNeonGreen
- **Synthetic dyes**: CellTracker, MitoTracker, LysoTracker
- **Genetically encoded indicators**: GCaMP (Ca²⁺), iGEMs

**Considerations:**
- Phototoxicity (minimize light exposure)
- Photobleaching
- Focus drift
- Data storage requirements

**Software:**
- MetaMorph
- NIS-Elements
- ZEN (Zeiss)
- LAS X (Leica)

---

### Cell Fractionation

Separation of cellular components into distinct fractions.

**Differential Centrifugation:**

| Fraction | Speed (×g) | Components |
|----------|------------|------------|
| Nuclei | 600-1,000 | Nuclei, unbroken cells |
| Heavy membranes | 10,000 | Mitochondria, lysosomes, peroxisomes |
| Light membranes | 100,000 | Microsomes, ER, Golgi, PM |
| Cytosol | Supernatant | Soluble proteins |

**Density Gradient Centrifugation:**
- **Sucrose gradients**: Rate-zonal or isopycnic
- **Percoll gradients**: Self-forming, gentle
- **OptiPrep (iodixanol)**: Low viscosity, iso-osmotic

**Specialized Fractionation:**
- **Mitochondria isolation**: Differential + density gradient
- **Nuclear extraction**: Hypotonic lysis
- **Membrane rafts**: Detergent-free methods
- **Exosomes**: Ultracentrifugation or precipitation

---

### Apoptosis Assays

#### Caspase Activity Assays
- **Caspase-3/7**: DEVD substrates
- **Caspase-8**: IETD substrates
- **Caspase-9**: LEHD substrates
- Fluorogenic or luminogenic readout

#### Annexin V Staining
- Binds phosphatidylserine (externalized in early apoptosis)
- Combined with PI for viability
- **Annexin V-FITC/PI**: Early apoptotic (Annexin V+ PI-), Late apoptotic (Annexin V+ PI+)

#### DNA Fragmentation
- **TUNEL assay**: Labels DNA strand breaks
- **DNA laddering**: Agarose gel electrophoresis
- **Sub-G1 peak**: Flow cytometry of PI-stained cells

#### Mitochondrial Assays
- **JC-1**: Membrane potential (red to green shift)
- **TMRE/TMRM**: Membrane potential
- **Cytochrome c release**: Western blot of cytosolic fraction

#### Other Markers
- **PARP cleavage**: Western blot
- **Bcl-2 family proteins**: Western blot
- **Morphological changes**: Condensation, fragmentation

---

## 3. Protein Techniques

### Protein Purification

#### General Strategies

**Solubilization:**
- Buffer pH near protein pI or physiological pH
- Salt concentration (typically 150 mM NaCl)
- Protease inhibitors (PMSF, aprotinin, leupeptin)
- Reducing agents (DTT, β-mercaptoethanol)
- Detergents (for membrane proteins)

**Clarification:**
- Centrifugation (10,000-20,000 ×g)
- Filtration (0.22 or 0.45 µm)

#### Tag-Based Purification

**Common Affinity Tags:**

| Tag | Size | Purification | Application |
|-----|------|--------------|-------------|
| His-tag (6xHis) | ~1 kDa | IMAC (Ni-NTA, Co-NTA) | General purpose |
| GST | ~26 kDa | Glutathione beads | Solubility enhancement |
| MBP | ~42 kDa | Amylose resin | Solubility enhancement |
| Strep-tag II | ~1 kDa | Strep-Tactin | High purity |
| FLAG | ~1 kDa | Anti-FLAG antibody | Detection/purification |
| HA | ~1 kDa | Anti-HA antibody | Detection/purification |

**IMAC (Immobilized Metal Affinity Chromatography):**
- Binding: 10-50 mM imidazole in buffer
- Wash: 20-40 mM imidazole
- Elution: 250-500 mM imidazole
- Alternative: pH gradient or competitive elution

**GST Purification:**
- Binding: PBS or Tris buffer
- Wash: High salt to remove contaminants
- Elution: 10-50 mM reduced glutathione
- TEV or PreScission protease cleavage

---

### Chromatography

#### Affinity Chromatography
Exploits specific binding interactions.

**Types:**
- **Immobilized metal (IMAC)**: His-tag proteins
- **Immunoaffinity**: Antibody-antigen
- **Lectin affinity**: Glycoproteins
- **Heparin**: DNA-binding proteins
- **Protein A/G**: Antibody purification

#### Ion Exchange Chromatography (IEX)
Separates based on charge.

**Anion Exchange (Q, DEAE)**: Binds negatively charged proteins
- Binding: Low salt, pH above pI
- Elution: Salt gradient or pH change

**Cation Exchange (S, SP, CM)**: Binds positively charged proteins
- Binding: Low salt, pH below pI
- Elution: Salt gradient or pH change

#### Size Exclusion Chromatography (SEC)
Separates based on molecular size (hydrodynamic radius).

**Principle:**
- Large molecules elute first (excluded from pores)
- Small molecules elute last (enter pores)

**Common Media:**
- Superdex (GE/Cytiva)
- Superose (GE/Cytiva)
- Sephacryl

**Applications:**
- Polishing step
- Complex characterization
- Molecular weight determination
- Aggregate removal

#### Hydrophobic Interaction Chromatography (HIC)
Separates based on hydrophobicity.

**Mechanism:**
- High salt promotes binding
- Decreasing salt gradient elutes

**Ligands:**
- Phenyl (low substitution)
- Butyl
- Octyl

#### Reversed-Phase Chromatography (RPC)
High resolution separation.

**Mechanism:**
- Hydrophobic interactions with stationary phase
- Organic solvent gradient (acetonitrile, methanol)

**Applications:**
- Peptide purification
- Analytical separations
- Desalting

---

### SDS-PAGE

Sodium Dodecyl Sulfate - Polyacrylamide Gel Electrophoresis for protein separation.

#### Gel Types

**Percentage Selection:**

| Gel % | Optimal Range (kDa) |
|-------|---------------------|
| 4-20% gradient | 10-250 |
| 12% | 10-100 |
| 10% | 15-150 |
| 8% | 25-200 |
| 6% | 50-300 |

**Buffer Systems:**
- **Laemmli (Tris-Glycine)**: Most common
- **Tris-Tricine**: For small peptides (<10 kDa)
- **Bis-Tris (MOPS/MES)**: Neutral pH, better protein stability

#### Sample Preparation
1. Mix with Laemmli sample buffer
2. Heat at 95°C for 5 min (or 70°C for sensitive proteins)
3. Centrifuge to pellet debris
4. Load supernatant

#### Running Conditions
- Stacking gel: 80 V constant
- Separating gel: 120-200 V constant
- Run until dye front reaches bottom

#### Staining Methods

| Method | Sensitivity | Time | MS Compatible |
|--------|-------------|------|---------------|
| Coomassie (Brilliant Blue) | 100 ng | 1-2 hr | Limited |
| Colloidal Coomassie | 10 ng | Overnight | Yes |
| Silver stain | 1 ng | 2-4 hr | Limited |
| SYPRO Ruby | 1 ng | 3-4 hr | Yes |
| Zinc stain | 10 ng | 30 min | Yes |

---

### Mass Spectrometry

Analytical technique for determining molecular mass and structure.

#### Sample Preparation

**In-Gel Digestion:**
1. Excise protein band
2. Destain and dehydrate
3. Reduce (DTT) and alkylate (iodoacetamide)
4. Digest with trypsin (overnight, 37°C)
5. Extract peptides
6. Concentrate and desalt

**In-Solution Digestion:**
1. Denature (urea, guanidine, or heat)
2. Reduce and alkylate
3. Digest with trypsin
4. Quench with formic acid

#### Ionization Methods

**MALDI (Matrix-Assisted Laser Desorption/Ionization):**
- Sample mixed with matrix (CHCA, DHB)
- Laser ionization
- Often coupled with TOF analyzer
- Good for peptides <3 kDa

**ESI (Electrospray Ionization):**
- Solution-based ionization
- Coupled to LC (LC-MS/MS)
- Generates multiply charged ions
- Good for large proteins and complexes

#### Mass Analyzers

| Analyzer | Resolution | Mass Accuracy | Speed | Cost |
|----------|------------|---------------|-------|------|
| Quadrupole | Low | Low | Fast | $ |
| TOF | Medium | Medium | Fast | $$ |
| Ion Trap | Low | Low | Medium | $$ |
| Orbitrap | Very High | Very High | Medium | $$$$ |
| Q-TOF | High | High | Fast | $$$ |

#### Applications

**Protein Identification:**
- Database searching (Mascot, Sequest, MaxQuant)
- Peptide mass fingerprinting (PMF)
- MS/MS sequencing

**Quantitative Proteomics:**
- Label-free quantification
- SILAC (Stable Isotope Labeling by Amino acids in Cell culture)
- TMT/iTRAQ (isobaric tags)
- DIA (Data Independent Acquisition)

**Post-Translational Modifications:**
- Phosphorylation
- Glycosylation
- Ubiquitination
- Acetylation

**Protein-Protein Interactions:**
- Affinity purification-MS (AP-MS)
- Proximity labeling (BioID, APEX)

---

### ELISA

Enzyme-Linked Immunosorbent Assay for detecting and quantifying proteins.

#### Types

**Direct ELISA:**
- Antigen coated on plate
- Enzyme-conjugated primary antibody
- Fastest, least sensitive

**Indirect ELISA:**
- Antigen coated
- Primary antibody
- Enzyme-conjugated secondary antibody
- More sensitive, signal amplification

**Sandwich ELISA:**
- Capture antibody coated
- Sample added
- Detection antibody added
- Most specific and sensitive

**Competitive ELISA:**
- Sample competes with labeled antigen
- Useful for small molecules

#### Detection Systems

| Substrate | Enzyme | Product Color | Detection |
|-----------|--------|---------------|-----------|
| TMB | HRP | Blue/Yellow | 450 nm |
| ABTS | HRP | Green | 405 nm |
| OPD | HRP | Orange | 492 nm |
| pNPP | AP | Yellow | 405 nm |

**Chemiluminescent:**
- Enhanced sensitivity
- Luminometers or CCD imaging

#### Data Analysis
- Standard curve (serial dilutions of known concentration)
- 4-parameter logistic (4PL) or 5PL curve fitting
- Calculate unknown sample concentrations

---

### Co-Immunoprecipitation (Co-IP)

Detection of protein-protein interactions.

**Procedure:**
1. Lyse cells in gentle detergent (NP-40, Triton X-100)
2. Preclear lysate with beads
3. Add primary antibody against bait protein
4. Incubate (1-4 hours or overnight)
5. Add Protein A/G beads
6. Incubate and wash extensively
7. Elute and analyze by Western blot

**Controls:**
- IgG control
- Input control (total lysate)
- Beads-only control
- Reverse Co-IP (pull down interacting protein)

**Considerations:**
- Weak/ transient interactions may be lost
- Use crosslinkers (DSP, BS3) to stabilize
- Include nucleases to reduce nucleic acid bridging

**Alternatives:**
- **GST pull-down**: In vitro interaction
- **Tandem affinity purification (TAP)**: Two-step purification
- **Proximity ligation assay (PLA)**: In situ detection

---

### Protein Crystallization

Method for growing protein crystals for X-ray crystallography.

**Crystallization Methods:**

**Vapor Diffusion (most common):**
- **Sitting drop**: 1-2 µL protein + 1-2 µL reservoir
- **Hanging drop**: Drop suspended from cover slip
- Equilibration against reservoir solution

**Microbatch:**
- Under oil to prevent evaporation
- Small volumes (sub-microliter)

**Free Interface Diffusion:**
- Protein and precipitant in separate chambers
- Diffusion at interface

**Screening:**
- Commercial screens (Hampton, JCSG+, PACT)
- Sparse matrix approach
- High-throughput robotic screening

**Optimization:**
- Grid screens around initial hits
- Additives (salts, detergents, ligands)
- Temperature variation
- Seeding (microseed, macroseed)

**Crystal Quality Assessment:**
- **Diffraction**: Resolution limit
- **Mosaicity**: Crystal perfection
- **Ice rings**: Cryoprotection issues

---

### Circular Dichroism (CD)

Spectroscopic technique for determining protein secondary structure.

**Principle:**
- Measures differential absorption of left vs. right circularly polarized light
- Chiral molecules (proteins) show CD signals

**Regions:**

**Far-UV (190-250 nm):**
- Secondary structure
- α-helix: Minima at 208, 222 nm
- β-sheet: Minimum at 218 nm
- Random coil: Minimum at 195 nm

**Near-UV (250-320 nm):**
- Tertiary structure
- Aromatic amino acids (Phe, Tyr, Trp)
- Disulfide bonds

**Applications:**
- Secondary structure estimation
- Protein folding/unfolding studies
- Thermal stability (Tm determination)
- Ligand binding effects

**Sample Requirements:**
- Purified protein (0.1-1 mg/mL)
- Low buffer absorbance (avoid phosphate below 200 nm)
- No detergents that scatter light

---

## 4. Microscopy

### Light Microscopy

**Types:**

**Upright Microscopes:**
- Standard for fixed samples
- Slides with coverslips
- Oil immersion objectives (100×)

**Inverted Microscopes:**
- Live cell imaging
- Culture dishes and flasks
- Easier access for manipulation

**Key Components:**
- **Objectives**: Achromat, Plan-achromat, Apochromat
- **Illumination**: Halogen, LED, mercury/xenon arc lamps
- **Filters**: Excitation, emission, dichroic mirrors

**Resolution:**
- Abbe limit: d = 0.61λ/NA
- Maximum ~200 nm for visible light

---

### Fluorescence Microscopy

**Epifluorescence:**
- Excitation and emission through same objective
- Mercury or LED light source
- Filter cubes for specific fluorophores

**Key Considerations:**
- Bleed-through (use proper filter sets)
- Autofluorescence
- Photobleaching
- Phototoxicity

**Modern Systems:**
- LED light engines (CoolLED, Lumencor)
- SPECTRA/X multiband filters
- Automated filter wheels

---

### Confocal Microscopy

Uses pinhole to eliminate out-of-focus light for optical sectioning.

**Principles:**
- Laser excitation
- Pinhole aperture rejects out-of-focus fluorescence
- Photomultiplier tube (PMT) or spectral detectors
- XYZ scanning for 3D reconstruction

**Types:**

**Point Scanning (Traditional):**
- Galvanometer mirrors scan point-by-point
- High resolution, slower speed
- Photobleaching concerns

**Spinning Disk:**
- Microlens array + pinhole disk
- Multiple points simultaneously
- Faster imaging, lower phototoxicity
- Lower axial resolution

**Resonant Scanning:**
- High-speed scanning (30+ fps)
- Reduced photobleaching
- Good for live imaging

**Multiphoton:**
- Infrared excitation (Ti:Sapphire laser)
- Deeper tissue penetration
- Less photodamage
- Second/Third harmonic generation

**Super-Resolution Confocal:**
- Airyscan (Zeiss)
- HyVolution (Leica)
- Re-scan confocal (RCM)

---

### Electron Microscopy

#### Transmission EM (TEM)

**Principle:**
- Electrons transmitted through ultra-thin sample
- Magnification up to 10,000,000×
- Resolution <1 Å (atomic)

**Sample Preparation:**
1. Fixation (glutaraldehyde, osmium tetroxide)
2. Dehydration (ethanol series)
3. Embedding (Epon, Spurr's resin)
4. Sectioning (ultramicrotome, 50-100 nm)
5. Staining (uranyl acetate, lead citrate)
6. Carbon coating

**Applications:**
- Ultrastructure of cells and organelles
- Protein structure (cryo-EM)
- Virus morphology
- Material science

**Cryo-EM:**
- Vitrified samples (no staining)
- Near-native state
- Single-particle analysis
- Tomography

#### Scanning EM (SEM)

**Principle:**
- Electron beam scans sample surface
- Secondary electrons detected
- 3D surface morphology

**Sample Preparation:**
1. Fixation
2. Dehydration (or critical point drying)
3. Mounting on stub
4. Sputter coating (gold, platinum)

**Applications:**
- Surface morphology
- Particle analysis
- Failure analysis
- Forensics

**Environmental SEM (ESEM):**
- Wet samples possible
- No coating required

---

### Super-Resolution Microscopy

Techniques overcoming the diffraction limit (~200 nm).

#### Structured Illumination Microscopy (SIM)
**Resolution:** ~100 nm lateral, ~300 nm axial
**Mechanism:** Moiré patterns from interference of sample and grid pattern
**Advantages:** Fast, multicolor, live-cell compatible
**Disadvantages:** Computationally intensive

#### Stimulated Emission Depletion (STED)
**Resolution:** 30-80 nm
**Mechanism:** Doughnut-shaped depletion beam quenches peripheral fluorescence
**Advantages:** Scanning-based, real-time
**Disadvantages:** High laser power, photobleaching

#### Photoactivated Localization Microscopy (PALM)
**Resolution:** 20-50 nm
**Mechanism:** Sparse activation of photoactivatable fluorophores, centroid fitting
**Advantages:** Molecular counting possible
**Disadvantages:** Slow, specialized probes needed

#### Stochastic Optical Reconstruction Microscopy (STORM)
**Resolution:** 20-50 nm
**Mechanism:** Similar to PALM, switchable dyes
**Advantages:** Standard organic dyes
**Disadvantages:** Thiol-containing buffers needed

#### Expansion Microscopy (ExM)
**Resolution:** 20-70 nm (after expansion)
**Mechanism:** Sample embedded in swellable polymer, physically expanded
**Advantages:** Compatible with standard fluorophores
**Disadvantages:** Physical distortion, 4-20× volume increase

---

### Live Imaging

See also [Cell Biology - Live Cell Imaging](#live-cell-imaging)

**Considerations:**
- Maintain physiological conditions
- Minimize light exposure
- Use sensitive cameras (sCMOS, EM-CCD)
- Fast acquisition for dynamic processes

**Techniques:**
- Widefield with deconvolution
- Spinning disk confocal
- Lightsheet microscopy
- Multi-photon for deep tissue

**Analysis:**
- Particle tracking
- Intensity measurements
- Colocalization analysis
- Morphometry

---

### Immunofluorescence Staining

See [Cell Biology - Immunofluorescence](#immunofluorescence-if)

---

## 5. Genetics & Genomics

### DNA Sequencing

See [Molecular Biology - DNA Sequencing](#dna-sequencing)

---

### RNA Sequencing

Comprehensive analysis of transcriptomes.

#### Library Preparation

**mRNA-seq:**
1. Poly-A selection or rRNA depletion
2. Fragmentation (chemical or enzymatic)
3. Reverse transcription
4. Second strand synthesis (for stranded libraries)
5. End repair and A-tailing
6. Adapter ligation
7. PCR amplification
8. Quality control and size selection

**Strand-Specific Protocols:**
- dUTP method (second strand labeling)
- Template switching

**Small RNA-seq:**
- Size selection (15-40 nt)
- Adapter ligation (3' then 5')
- RT-PCR

#### Analysis Pipeline

1. **Quality Control:** FastQC, MultiQC
2. **Alignment:** STAR, HISAT2, Bowtie2
3. **Quantification:**
   - FeatureCounts, HTSeq (count-based)
   - Salmon, Kallisto (pseudoalignment)
4. **Differential Expression:** DESeq2, edgeR, limma
5. **Functional Analysis:**
   - GO enrichment (clusterProfiler)
   - Pathway analysis (GSEA, Reactome)

#### Specialized RNA-seq

**Total RNA-seq:**
- Includes mRNA, lncRNA, circRNA
- Requires rRNA depletion

**Single-Cell RNA-seq:**
- See below

**Ribosome Profiling (Ribo-seq):**
- Translatome analysis
- Ribosome-protected fragments

---

### ChIP-seq

Chromatin Immunoprecipitation followed by sequencing.

**Purpose:** Map protein-DNA interactions (transcription factors, histone marks).

**Procedure:**

1. **Crosslinking**
   - 1% formaldehyde (10-15 min)
   - Quench with glycine

2. **Chromatin Preparation**
   - Cell lysis
   - Sonication or enzymatic digestion (MNase)
   - Fragment size: 200-500 bp

3. **Immunoprecipitation**
   - Incubate with specific antibody
   - Protein A/G bead capture
   - Extensive washing

4. **Reverse Crosslinking**
   - Overnight at 65°C
   - Proteinase K digestion

5. **DNA Purification**
   - Phenol-chloroform or column-based

6. **Library Preparation**
   - Similar to standard DNA-seq
   - Lower input requirements

7. **Sequencing**
   - 50-100 bp reads
   - 10-30 million reads per sample

**Controls:**
- Input DNA (no IP)
- IgG control
- Positive/negative control regions

**Analysis:**
- Alignment (Bowtie2)
- Peak calling (MACS2, HOMER)
- Motif analysis (MEME, HOMER)
- Annotation (ChIPseeker)

---

### ATAC-seq

Assay for Transposase-Accessible Chromatin using sequencing.

**Purpose:** Map open chromatin regions (regulatory elements).

**Procedure:**

1. **Nuclei Preparation**
   - Hypotonic lysis
   - Count nuclei

2. **Transposition**
   - Tn5 transposase with sequencing adapters
   - 30 min at 37°C
   - Integrates adapters into accessible DNA

3. **Purification**
   - Column or magnetic bead purification

4. **PCR Amplification**
   - Limited cycles to reduce bias
   - Size selection (100-700 bp)

**Advantages:**
- Fast (few hours)
- Low cell number (50,000-500,000)
- Single-cell compatible

**Analysis:**
- Peak calling
- Nucleosome positioning
- Footprinting (transcription factor binding)

---

### Single Cell Sequencing

Analysis of genomes and transcriptomes at single-cell resolution.

#### scRNA-seq Methods

| Method | Cells/Run | Capture | Multiplexing |
|--------|-----------|---------|--------------|
| Smart-seq2 | 96-384 | Plate-based | Low |
| 10x Genomics | 1,000-20,000 | Droplet | High |
| Drop-seq | 1,000-10,000 | Droplet | High |
| Seq-Well | 10,000+ | Microwell | High |
| SPLiT-seq | 10,000+ | Split-pool | Very high |

**10x Genomics Chromium:**
- Gel beads with barcoded primers
- Droplet encapsulation
- cDNA from same cell shares cell barcode
- UMI (Unique Molecular Identifier) for quantification

#### Analysis Workflow

1. **Preprocessing:** Cell Ranger, STARsolo
2. **Quality Control:**
   - Filter low-quality cells
   - Remove doublets
   - Mitochondrial content filtering
3. **Normalization:**
   - Log normalization
   - SCTransform
4. **Dimensionality Reduction:**
   - PCA
   - t-SNE, UMAP (visualization)
5. **Clustering:**
   - Graph-based (Louvain, Leiden)
6. **Cell Type Annotation**
7. **Differential Expression**
8. **Trajectory Analysis:** Monocle, Slingshot

#### Other Single-Cell Methods

**scDNA-seq:**
- Copy number variation
- SNV detection
- Low coverage due to genome size

**scATAC-seq:**
- 10x Genomics single-cell ATAC
- Chromatin accessibility

**CITE-seq:**
- Surface protein + transcriptome
- Oligo-tagged antibodies

**Multi-omics:**
- scRNA + scATAC (10x Multiome)
- scRNA + CRISPR screens (Perturb-seq)

---

### Genome Editing

See also [Molecular Biology - CRISPR-Cas9](#crispr-cas9-gene-editing)

#### TALEN (Transcription Activator-Like Effector Nucleases)

**Structure:**
- TALE DNA-binding domain
- FokI nuclease domain
- Dimerization required

**Advantages:**
- Fewer off-target effects than ZFNs
- Easier to design

**Disadvantages:**
- Large protein size
- More complex than CRISPR

#### ZFN (Zinc Finger Nucleases)

**Structure:**
- Zinc finger DNA-binding domains (3-6 fingers)
- FokI nuclease domain

**Advantages:**
- First genome editing tool
- Smaller than TALENs

**Disadvantages:**
- Difficult to design
- Higher off-target activity
- Limited target sites

#### CRISPR Base Editing

**Cytosine Base Editors (CBE):**
- dCas9/nCas9 + APOBEC1 + UGI
- C→T (or G→A) conversion
- No double-strand break

**Adenine Base Editors (ABE):**
- dCas9/nCas9 + TadA
- A→G (or T→C) conversion

**Prime Editing:**
- nCas9 + reverse transcriptase
- All 12 types of point mutations
- Small insertions/deletions
- No donor template required

---

### Genetic Screening

#### RNAi Screening

**Libraries:**
- siRNA (synthetic)
- shRNA (viral vectors)
- esiRNA (endonuclease-prepared)

**Formats:**
- Arrayed (one gene per well)
- Pooled (barcoded, selection-based)

**Readouts:**
- Cell viability
- Reporter assays
- Imaging (high-content)
- Sequencing (for pooled screens)

#### CRISPR Screening

**Types:**

**Knockout (CRISPR-KO):**
- NHEJ-mediated gene disruption
- Full loss-of-function

**Inhibition (CRISPRi):**
- dCas9-KRAB
- Transcriptional repression
- Reversible

**Activation (CRISPRa):**
- dCas9-VP64/p65/HSF1
- Transcriptional activation

**Pooled Screening Workflow:**
1. Design sgRNA library (genome-wide or subset)
2. Lentiviral packaging
3. Transduce cells at low MOI (<0.3)
4. Apply selection pressure
5. Harvest genomic DNA
6. PCR amplify sgRNA sequences
7. Next-gen sequencing
8. MAGeCK analysis

---

### Linkage Analysis

Mapping disease genes using family pedigrees.

**Types:**

**Parametric (LOD Score):**
- Requires disease model (dominant/recessive)
- LOD > 3: Significant linkage
- LOD < -2: Excluded

**Non-parametric (Affected Sib Pair):**
- No disease model required
- Uses allele sharing

**Genotyping:**
- Microsatellite markers (earlier)
- SNP arrays (current)
- Whole exome/genome sequencing

**Analysis Software:**
- MERLIN
- SIMWALK
- GeneHunter
- PLINK

**Applications:**
- Mendelian disease gene mapping
- Complex trait loci
- Homozygosity mapping (consanguineous families)

---

## 6. Ecology & Field Methods

### Population Sampling

#### Quadrat Sampling

**Design:**
- Random placement
- Systematic/grid
- Stratified random

**Considerations:**
- Quadrat size appropriate for organism
- Minimum sample size (statistical power)
- Edge effects

#### Mark-Recapture

**Lincoln-Petersen Index:**
```
N = (M × C) / R
```
- N = Total population
- M = Marked individuals (first capture)
- C = Total captured (second capture)
- R = Marked recaptures

**Assumptions:**
- Population closed (no birth/death/migration)
- Marks not lost
- Equal catchability
- Marks don't affect survival

**Modifications:**
- Schnabel method (multiple captures)
- Jolly-Seber (open populations)

#### Distance Sampling

**Line Transects:**
- Observers travel along lines
- Record perpendicular distances to detected objects
- Model detection function

**Point Transects:**
- Stationary observations
- Radial distances recorded

---

### Biodiversity Assessment

#### Alpha Diversity (Within Site)

**Richness Indices:**
- Species richness (S)
- Margalef's index
- Menhinick's index

**Diversity Indices:**
- **Shannon-Wiener (H')**: -Σ(pi × ln(pi))
- **Simpson's (D)**: 1 - Σ(pi²)
- **Inverse Simpson**: 1/D

**Evenness:**
- Pielou's J': H' / ln(S)

#### Beta Diversity (Between Sites)

**Similarity Indices:**
- **Jaccard**: a / (a + b + c)
- **Sorensen**: 2a / (2a + b + c)
- **Bray-Curtis**: Most common for abundance data

**Distance/Dissimilarity:**
- Sørensen (qualitative)
- Bray-Curtis (quantitative)
- UniFrac (phylogenetic)

#### Gamma Diversity (Regional)
- Total diversity across landscape

---

### Camera Trapping

Wildlife monitoring using motion-activated cameras.

**Deployment:**
- Trail intersections
- Water sources
- Game trails
- Random stratified placement

**Considerations:**
- Camera height and angle
- Detection zone
- Trigger speed
- Battery life/memory
- Security (locks/cages)

**Data Analysis:**
- Independent capture events
- Activity patterns
- Occupancy modeling
- Mark-recapture (for identifiable individuals)

---

### eDNA (Environmental DNA)

Detection of species from DNA in environmental samples.

**Sample Types:**
- Water (ponds, streams, ocean)
- Soil
- Sediment
- Air
- Feces/scat

**Procedure:**

1. **Collection**
   - Sterile techniques
   - Volume appropriate for target
   - Replication

2. **Filtration**
   - 0.22-0.45 µm filters
   - Multiple filters per sample
   - Storage in ethanol or frozen

3. **DNA Extraction**
   - Specialized kits (DNeasy PowerWater, etc.)
   - Inhibitor removal critical

4. **Detection Methods**
   - **qPCR**: Species-specific, quantitative
   - **Metabarcoding**: Multi-species, community analysis
   - **Digital PCR**: High sensitivity

**Inhibitors:**
- Humic acids
- Tannins
- Heavy metals
- Treat with BSA or inhibitor removal kits

**Applications:**
- Invasive species detection
- Endangered species monitoring
- Biodiversity surveys
- Aquatic pathogen detection

---

### Radio Telemetry

Tracking animals using radio transmitters.

**Components:**
- Transmitter (attached to animal)
- Receiver
- Directional antenna

**Signal Types:**
- VHF (Very High Frequency): 150-170 MHz
- UHF (Ultra High Frequency)

**Techniques:**
- **Homing**: Direct approach until located
- **Triangulation**: Multiple bearings to estimate position
- **Automated**: Fixed receiver stations

**Considerations:**
- Transmitter weight (<5% body mass)
- Battery life
- Attachment method
- Signal bounce/reflection

---

### GPS Tracking

Satellite-based location tracking.

**Types:**

**GPS Loggers:**
- Store locations
- Must retrieve device
- High resolution

**GPS-GSM:**
- Cellular data transmission
- Real-time tracking
- Requires cell coverage

**GPS-Satellite:**
- Argos, Iridium systems
- Global coverage
- Expensive

**Geofencing:**
- Virtual boundaries
- Alerts for entry/exit

**Analysis:**
- Home range estimation (MCP, KDE)
- Movement paths
- Habitat selection
- Migration routes

---

### Transect Surveys

Systematic surveys along defined lines.

#### Belt Transects
- Fixed width strip
- Count all organisms within boundaries
- Area = length × width

#### Line Transects
- Record distance from line
- Detection probability modeling
- Distance software for analysis

#### Point Counts (Birds)
- Fixed observation points
- Count birds seen/heard within radius
- Time-limited (e.g., 5-10 minutes)

---

## 7. Protocol Resources

### Protocols.io

**URL:** https://www.protocols.io

A secure platform for developing and sharing reproducible methods. Features over 20,000 reproducible methods with dynamic and interactive capabilities.

**Features:**
- Step-by-step protocol sharing
- Version control and history
- Collaborative editing
- Video and detailed parameters
- Private workspaces for teams
- HIPAA compliance for clinical research
- 21 CFR Part 11 compliance for biotech/pharma

---

### Nature Protocols

**URL:** https://www.nature.com/nprot/

An interactive online resource for laboratory protocols published by Nature Research.

**Scope:**
- Cell, developmental and molecular biology
- Genetics and genomics
- Protein science
- Computational biology
- Immunology
- Neuroscience
- Imaging

**Features:**
- Peer-reviewed protocols
- Step-by-step instructions
- Troubleshooting guides
- Video demonstrations

---

### Current Protocols

**URL:** https://currentprotocols.onlinelibrary.wiley.com/

A comprehensive collection of updatable, step-by-step, reproducible laboratory methods from Wiley.

**Titles Include:**
- Current Protocols in Molecular Biology
- Current Protocols in Cell Biology
- Current Protocols in Protein Science
- Current Protocols in Immunology
- Current Protocols in Bioinformatics
- Current Protocols in Stem Cell Biology
- Current Protocols in Neuroscience
- Current Protocols in Pharmacology

---

### Bio-protocol

**URL:** https://bio-protocol.org

A peer-reviewed, open-access protocol journal publishing high-quality, step-by-step protocols in life sciences.

**Features:**
- Free access to all protocols
- Peer-reviewed methods
- Listed in Web of Science and PubMed Central
- Collaborating with multiple research journals
- Focus on reproducibility

---

### JoVE (Journal of Visualized Experiments)

**URL:** https://www.jove.com

Video platform for research and education with 30,000+ videos of lab methods and science concepts.

**Sections:**
- Research videos
- Education videos
- Science education database

**Coverage:**
- Biology
- Chemistry
- Physics
- Medicine
- Engineering
- Psychology

**Institutional Access:**
- Used by 1,800+ universities and companies
- Peer-reviewed video articles

---

### Addgene

**URL:** https://www.addgene.org

Nonprofit plasmid repository facilitating scientific sharing.

**Collection:**
- 168,844+ plasmids
- 6,793+ contributing labs
- 1,088 ready-to-use viral vectors
- 245 recombinant antibodies
- 2,374,396+ requests fulfilled
- Shipped to 112 countries

**Features:**
- Plasmid repository and distribution
- Educational resources and protocols
- CRISPR guide collection
- Viral vectors (AAV, lentivirus)
- Antibody collection
- Free for academic researchers

---

### Cold Spring Harbor Protocols

**URL:** https://cshprotocols.cshlp.org

Interdisciplinary journal providing definitive research methods.

**Subject Categories:**
- Antibodies
- Bioinformatics/Genomics
- Cell Biology
- Chromatography
- Computational Biology
- Developmental Biology
- DNA Delivery/Gene Transfer
- Electrophoresis
- Genetics
- High-Throughput Analysis
- Imaging/Microscopy
- Immunology
- Laboratory Organisms
- Molecular Biology
- Neuroscience
- Plant Biology
- Polymerase Chain Reaction (PCR)
- Proteins and Proteomics
- RNA Interference (RNAi)/siRNA
- Stem Cells
- Transgenic Technology

---

### Springer Protocols

**URL:** https://link.springer.com/protocols

Comprehensive database of over 50,000 protocols including Methods in Molecular Biology series.

**Series Include:**
- Methods in Molecular Biology
- Methods in Molecular Medicine
- Methods in Biotechnology
- Methods in Pharmacology and Toxicology
- Neuromethods

---

### Methods in Molecular Biology

**URL:** https://link.springer.com/series/7651

Extensive book series published by Humana Press (Springer Nature).

**Features:**
- Detailed step-by-step protocols
- Troubleshooting notes
- Background information
- Wide range of topics
- Updated regularly with new volumes

---

### NIH Protocols and Resources

**URL:** https://www.nih.gov/research-training/medical-research-initiatives

Various NIH institutes provide protocols and guidelines:

**Biosafety Resources:**
- NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules
- Biosafety in Microbiological and Biomedical Laboratories (BMBL)

**Protocol Databases:**
- NCI Protocol Search
- NHLBI Protocols
- NIAID Research Resources

---

## 8. Safety & Regulations

### Biosafety Levels (BSL-1 to BSL-4)

The CDC/NIH classify laboratories into four biosafety levels based on the agents handled and the risk they pose.

#### BSL-1 (Basic Laboratory)

**Agents:**
- Not known to consistently cause disease in healthy adults
- Examples: Non-pathogenic *E. coli*, *Saccharomyces cerevisiae*

**Requirements:**
- Standard microbiological practices
- Open bench work allowed
- Hand washing sink
- No special containment equipment
- Biosafety manual

**PPE:**
- Lab coat
- Gloves
- Eye protection as needed

---

#### BSL-2 (Standard Laboratory)

**Agents:**
- Associated with human disease
- Moderate hazard
- Examples: *Salmonella*, *Staphylococcus aureus*, influenza virus, hepatitis B virus, HIV

**Requirements:**
- BSL-1 practices plus:
- Limited access
- Biohazard warning signs
- Sharps precautions
- Biosafety cabinet (BSC) for aerosol-generating procedures
- Autoclave available
- Laboratory-specific biosafety manual

**PPE:**
- Lab coat (recommended: disposable or dedicated for lab)
- Gloves
- Face protection when splashes possible
- Eye protection

**Training:**
- Biosafety training required
- Annual refresher

---

#### BSL-3 (Containment Laboratory)

**Agents:**
- Indigenous or exotic agents
- May cause serious or lethal disease via inhalation
- Examples: *Mycobacterium tuberculosis*, SARS-CoV-1, West Nile virus, anthrax

**Requirements:**
- BSL-2 practices plus:
- Controlled access (two sets of doors)
- Negative airflow into laboratory
- Exhaust air HEPA filtered (no recirculation)
- BSL-3 laboratory design:
  - Sealed penetrations
  - Autoclave in lab or airlock
  - Emergency lighting
  - Hands-free sink
  - Biological safety cabinet (Class II or III)
- Spill drain (if floor drains present)
- Double-door autoclave

**PPE:**
- Laboratory clothing (scrubs)
- Solid-front gowns
- Two pairs of gloves
- Respiratory protection as needed

**Training:**
- Specialized BSL-3 training
- Respiratory protection fit testing
- Medical surveillance

---

#### BSL-4 (Maximum Containment)

**Agents:**
- Dangerous/exotic agents
- High risk of life-threatening disease
- Aerosol transmission
- No available vaccines or treatments
- Examples: Ebola virus, Marburg virus, smallpox, SARS-CoV-2 (early pandemic)

**Requirements:**
- BSL-3 practices plus:
- Separate building or isolated zone
- Dedicated supply and exhaust air
- HEPA filtration of all exhaust
- Positive pressure personnel suit (Class III BSC alternative)
- Class III biological safety cabinet
- Decontamination of all materials
- Airlock entry
- Shower exit
- Specialized waste management

**PPE:**
- Positive pressure suits with life support
- Double gloves
- Supplied breathing air

**Training:**
- Extensive specialized training
- Medical monitoring
- Psychological evaluation

---

### IACUC (Institutional Animal Care and Use Committee)

**Purpose:** Oversee animal research and ensure ethical treatment.

**Legal Basis:**
- Animal Welfare Act (USDA)
- Public Health Service Policy on Humane Care and Use of Laboratory Animals
- Guide for the Care and Use of Laboratory Animals (NRC)

**Requirements:**
- Protocol review and approval before research begins
- Three-year protocol approval period
- Annual continuing review
- Significant changes require amendment

**Protocol Components:**
- Scientific rationale
- Species and numbers justification
- Veterinary care plan
- Procedures and monitoring
- Pain/distress assessment
- Euthanasia methods
- Personnel qualifications

**The Three Rs:**
- **Replacement**: Use alternatives to animals when possible
- **Reduction**: Minimize number of animals used
- **Refinement**: Minimize pain and distress

**Required Training:**
- Working with the IACUC
- Species-specific training
- Aseptic surgery (if applicable)
- Pain management

---

### IRB (Institutional Review Board)

**Purpose:** Protect human subjects in research.

**Legal Basis:**
- 45 CFR 46 (Common Rule)
- 21 CFR 50, 56 (FDA regulations)
- Belmont Report principles

**Review Levels:**

**Exempt:**
- Minimal risk research
- Educational tests, surveys, interviews
- Publicly available data
- Taste/food quality evaluation

**Expedited:**
- Minimal risk
- Specific categories (blood draws, non-invasive procedures, voice recordings)

**Full Board:**
- Greater than minimal risk
- Vulnerable populations
- New procedures

**Informed Consent Elements:**
1. Purpose of research
2. Duration of participation
3. Procedures involved
4. Risks and discomforts
5. Benefits
6. Alternative procedures
7. Confidentiality
8. Compensation for injury
9. Contact information
10. Voluntary participation

**Vulnerable Populations:**
- Children
- Pregnant women
- Prisoners
- Cognitively impaired
- Economically disadvantaged

---

### GMO Regulations

**United States:**

**FDA:**
- Regulates GMOs for food and feed safety
- Voluntary consultation process

**USDA-APHIS:**
- Regulates plant pests and noxious weeds
- Permits for field trials
- Petitions for deregulation

**EPA:**
- Regulates pesticides including plants with pesticidal properties
- GMOs with Bt toxin

**NIH Guidelines:**
- Research involving recombinant DNA
- Biosafety requirements
- IBC (Institutional Biosafety Committee) oversight

**International:**
- EU: Directive 2001/18/EC, Regulation 1829/2003
- Cartagena Protocol on Biosafety
- Varies significantly by country

---

### Laboratory Safety Training

**Required Training (varies by institution/work):**

**General:**
- Laboratory Safety Fundamentals
- Chemical Hygiene Plan
- Hazard Communication (OSHA)
- Fire Safety
- Emergency Response

**Biological:**
- Bloodborne Pathogens (OSHA 29 CFR 1910.1030)
- Biosafety Principles
- Select Agent regulations (if applicable)

**Specialized:**
- Radiation Safety
- Laser Safety
- Cryogen Safety
- Autoclave Safety

**Documentation:**
- Training records maintained
- Annual refresher required
- Competency assessment

**Key Resources:**
- CDC Laboratory Safety: https://www.cdc.gov/labsafety/
- OSHA Laboratory Standard: https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1450
- NIH Guidelines: https://osp.od.nih.gov/biotechnology/nih-guidelines/

---

## References and Further Reading

### Textbooks

1. **Molecular Biology:**
   - Molecular Cloning: A Laboratory Manual (Green and Sambrook)
   - Current Protocols in Molecular Biology series

2. **Cell Biology:**
   - Culture of Animal Cells (R. Ian Freshney)
   - Animal Cell Culture: A Practical Approach

3. **Protein Methods:**
   - Protein Purification: Principles and High Resolution Methods
   - Protein Methods (Bollag and Edelstein)

4. **Microscopy:**
   - Handbook of Biological Confocal Microscopy (Pawley)
   - Introduction to Light Microscopy (Spector and Goldman)

5. **Ecology:**
   - Measuring and Monitoring Biological Diversity (Standard Methods)
   - Ecological Census Techniques (William Sutherland)

### Online Resources

- **NCBI**: https://www.ncbi.nlm.nih.gov/
- **Addgene**: https://www.addgene.org/
- **Protocols.io**: https://www.protocols.io/
- **Bio-protocol**: https://www.bio-protocol.org/
- **Nature Protocols**: https://www.nature.com/nprot/
- **JoVE**: https://www.jove.com/

### Regulatory Agencies

- **CDC Biosafety**: https://www.cdc.gov/labs/biosafety.html
- **NIH OSP**: https://osp.od.nih.gov/
- **USDA APHIS**: https://www.aphis.usda.gov/
- **FDA**: https://www.fda.gov/
- **EPA**: https://www.epa.gov/
- **OSHA**: https://www.osha.gov/

---

*Document compiled: February 2026*
*Last updated: February 2026*

*Note: Always consult current institutional guidelines, standard operating procedures, and regulatory requirements before conducting laboratory work. Safety protocols and regulations are subject to change.*
