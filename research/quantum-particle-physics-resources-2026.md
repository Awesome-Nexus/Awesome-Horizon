# Quantum Physics and Particle Physics Resources & Statistics 2026

> **Research Date:** January 2026  
> **Data Coverage:** 2024-2025 verified statistics  
> **Status:** Compiled from official sources, press releases, and scientific publications

---

## 1. Quantum Computing (2024-2025)

### 1.1 IBM Quantum

| Metric | Value | Year |
|--------|-------|------|
| **Qiskit Downloads** | 13+ million | 2024-2025 |
| **Qiskit Users Worldwide** | 600,000+ | 2024 |
| **Developers Preferring Qiskit** | 69% | 2024 |
| **Dependent Projects** | 7,000+ | 2025 |
| **Contributors** | 592 | 2024 |

**Hardware Systems:**
- **IBM Quantum System Two:** Modular quantum-centric supercomputing architecture
- **Condor Processor:** 1,121 qubits (superconducting)
- **Osprey Processor:** 433 qubits
- **Heron Series:** High-fidelity processors (r3 = 0.5, 133 qubits)
- **Flamingo:** Next-generation processors planned

**Key Achievements 2024-2025:**
- Opened first European Quantum Data Center in Germany (2024)
- Launched Qiskit Code Assistant and Guardium Quantum Safe
- Introduced fractional gate operations to reduce circuit depth
- Extended roadmap to 2033 targeting fault-tolerant systems

**Resources:**
- Website: https://www.ibm.com/quantum/qiskit
- GitHub: https://github.com/Qiskit
- Documentation: https://quantum.cloud.ibm.com/docs/

---

### 1.2 Google Quantum AI

| Metric | Value | Year |
|--------|-------|------|
| **Willow Chip Qubits** | 105 | Dec 2024 |
| **Sycamore Qubits** | 54-70 | 2019-2024 |
| **Below-Threshold Error Correction** | Achieved | 2024 |

**Key Achievements 2024-2025:**
- **Willow Chip (Dec 2024):** First quantum chip to achieve below-threshold quantum error correction
- Demonstrated state-of-the-art T1 times (>100 μs)
- Quantum Virtual Machine "willow_pink" released in Cirq
- Quantum Computing Service (QCS) available to authorized partners

**SDK:**
- **Cirq:** Open-source Python framework for quantum circuits
- Latest Release: v1.6.1 (August 2025)
- Minimum Python: 3.11
- GitHub: https://github.com/quantumlib/Cirq
- Documentation: https://quantumai.google/cirq

**Access Model:**
- Quantum hardware available by application to authorized partners
- No public self-service access (as of 2025)
- No usage fees for approved research partners

---

### 1.3 IonQ

| Metric | Value | Date |
|--------|-------|------|
| **Forte Enterprise AQ** | 36 algorithmic qubits | Dec 2024 |
| **Cash Position** | ~$1.6 billion | March 2025 |
| **Qubitekk Acquisition** | Completed | Jan 2025 |
| **ID Quantique Acquisition** | Completed | Feb 2025 |

**Systems:**
- **IonQ Forte:** 30+ qubits, acousto-optic deflector (AOD) technology
- **IonQ Forte Enterprise:** 36 algorithmic qubits (AQ36)
- **IonQ Aria:** Commercial trapped-ion system
- **IonQ Harmony:** Entry-level system

**Key Technologies:**
- Trapped-ion quantum computing
- Photonic interconnects for quantum networking
- Clifford Noise Reduction (CliNR) technique for error correction

**Cloud Access:**
- Amazon Braket
- Microsoft Azure Quantum
- Google Cloud
- IonQ Quantum Cloud

**Resources:**
- Website: https://ionq.com
- Partnerships: DESY, Airbus, Naval Research Lab, Dell

---

### 1.4 Rigetti Computing

| Metric | Value | Year |
|--------|-------|------|
| **Ankaa-2 Qubits** | 84 | 2024 |
| **Architecture** | Superconducting | - |

**Systems:**
- **Ankaa-2:** 84-qubit superconducting quantum processor
- **Novera:** Desktop quantum computer for edge deployment
- Available via Amazon Braket (integrated 2024)

**Note:** Rigetti systems available through Amazon Braket and direct access.

---

### 1.5 D-Wave Quantum

| Metric | Value | Date |
|--------|-------|------|
| **Advantage2 Qubits** | 4,400+ | May 2025 |
| **Qubit Connectivity** | 20-way (Zephyr topology) | 2025 |
| **Energy Scale Increase** | 40% | 2025 |
| **Noise Reduction** | 75% | 2025 |
| **Leap Cloud Availability** | 40+ countries | 2025 |
| **Uptime SLA** | 99.9% | 2025 |

**Systems:**
- **Advantage2:** Generally available May 2025
  - 4,400+ superconducting qubits
  - Zephyr-12 (Z12) QPU topology
  - Fast Anneal feature
  - Power consumption: 12.5 kW
  
**Roadmap:**
- **2026:** Advantage2 Performance Update (Cyclic Annealing)
- **2028:** Advantage3 processor (Analog-Digital Quantum Computing)
- **2030:** Advantage3 Performance Update
- **Long-term:** Path to 100,000+ qubits

**Customers/Deployments:**
- Davidson Technologies (Huntsville, Alabama) - on-premises
- Jülich Supercomputing Centre (Germany) - integrated with JUPITER supercomputer
- Japan Tobacco (pharmaceutical development)
- Los Alamos National Laboratory

**Resources:**
- Website: https://www.dwavequantum.com
- Cloud Service: Leap Quantum Cloud Service
- SDK: Ocean SDK

---

### 1.6 Xanadu

| Metric | Value | Status |
|--------|-------|--------|
| **Technology** | Photonic quantum computing | - |
| **Borealis** | Quantum advantage demonstrated | 2022 |
| **PennyLane Users** | Growing open-source community | Active |

**Products:**
- **Borealis:** Photonic quantum computer (cloud-accessible)
- **PennyLane:** Open-source cross-platform SDK for quantum machine learning
- **Catalyst:** Experimental compiler framework based on MLIR

**Resources:**
- Website: https://www.xanadu.ai
- PennyLane: https://pennylane.ai

---

### 1.7 QuEra Computing

| Metric | Value | Status |
|--------|-------|--------|
| **Technology** | Neutral atom quantum computing | - |
| **Aquila Qubits** | 256 | Available via Braket |
| **Connectivity** | Arbitrary reconfigurable | - |

**System:**
- **Aquila:** 256-qubit neutral atom quantum processor
- Available through Amazon Braket
- Analog quantum computing capabilities

---

### 1.8 Microsoft Azure Quantum

**Services (2024-2025):**
- **Azure Quantum:** Cloud quantum computing service
- **Majorana 1 Chip (Feb 2025):** First quantum processor powered by topological qubits
  - 14 physical qubits including buffers and detection circuits
  - Cat qubits for error suppression
- **Ocelot Chip (Feb 2025):** AWS proprietary quantum chip with cat qubits

**Hardware Partners:**
- IonQ (trapped ion)
- Quantinuum (H-Series)
- Rigetti (superconducting)
- Oxford Quantum Circuits
- Pasqal (neutral atom)

**Resources:**
- Website: https://azure.microsoft.com/quantum

---

### 1.9 Amazon Braket

**Hardware Available (2024-2025):**
| Provider | Technology | System |
|----------|------------|--------|
| IonQ | Trapped ion | Forte, Aria |
| Rigetti | Superconducting | Ankaa-2 (84 qubits) |
| QuEra | Neutral atom | Aquila (256 qubits) |
| D-Wave | Quantum annealing | Advantage2 |
| Xanadu | Photonic | Borealis |
| Oxford Quantum Circuits | Superconducting | Various |

**Services:**
- **Braket Direct:** Reservation-based exclusive access (launched 2023)
- **Braket Digital Learning Plan:** Free educational program
- **Quantum Embark Program:** Enterprise quantum adoption (2024)
- **Ocelot:** AWS first proprietary quantum chip (Feb 2025)

**Simulators:**
- SV1 (state vector)
- TN1 (tensor network)
- DM1 (density matrix, noise-aware)

**Resources:**
- Website: https://aws.amazon.com/braket

---

## 2. Quantum Information Resources

### 2.1 Qiskit (IBM)

| Metric | Value |
|--------|-------|
| **Downloads** | 13+ million |
| **Contributors** | 592 |
| **GitHub Stars** | - |
| **User Preference** | 69% of developers |

**Features:**
- World's fastest transpiler (83x faster than competitors)
- 29% fewer two-qubit gates
- Quantum information science toolkit
- Heterogeneous orchestration plugins
- Qiskit Serverless for hybrid workloads

---

### 2.2 Cirq (Google)

| Metric | Value |
|--------|-------|
| **Latest Version** | 1.6.1 (Aug 2025) |
| **Minimum Python** | 3.11 |

**Features:**
- Native Google Quantum AI integration
- qsim/QVM simulators
- Support for Willow and Sycamore processors
- OpenQASM compatibility
- Clifford protocol support

---

### 2.3 PennyLane (Xanadu)

- Open-source cross-platform SDK
- Quantum machine learning focus
- Plugins for multiple hardware backends
- Integration with PyTorch and TensorFlow
- Website: https://pennylane.ai

---

### 2.4 QuTiP (Quantum Toolbox in Python)

| Metric | Value |
|--------|-------|
| **Downloads** | ~2 million |
| **Contributors** | 167 |

- Open-source framework for quantum dynamics simulations
- Master equation solvers
- Monte Carlo simulations
- Optimal control

---

### 2.5 Mitiq (Unitary Fund)

| Metric | Value |
|--------|-------|
| **Downloads** | 195,000+ total |
| **GitHub Stars** | 360+ |
| **Citations** | 120+ |
| **QEM Techniques** | 9 implemented |

- Platform-agnostic error mitigation
- Supports 6+ quantum SDKs

---

## 3. Particle Physics Labs (2024-2025)

### 3.1 CERN - LHC Run 3

| Metric | Value | Year |
|--------|-------|------|
| **Integrated Luminosity (CMS)** | ~500 fb⁻¹ | 2025 |
| **Proton Energy** | 6.8 TeV | Run 3 |
| **ATLAS/CMS Collaboration Size** | 5,000+ scientists each | - |

**Status:**
- Run 3 ongoing with record luminosity
- High-Luminosity LHC (HL-LHC) upgrade in progress
- Higgs boson property measurements most precise to date
- New limits on Higgs self-coupling

**HL-LHC Accelerator Upgrade Project:**
- 4 quadrupole magnets shipped by Fermilab (25 tons each)
- US national labs consortium: Brookhaven, LBNL, Fermilab

**Resources:**
- Website: https://home.cern
- LHC: https://home.cern/science/accelerators/large-hadron-collider

---

### 3.2 Fermilab (USA)

#### Muon g-2 Experiment

| Metric | Value | Date |
|--------|-------|------|
| **Final Result Precision** | 127 parts per billion | June 2025 |
| **Muons Decay Events** | 100 billion | 2018-2023 |
| **Experiment Design Goal** | 140 ppb | - |
| **Status** | Final results released | June 3, 2025 |

**Key Result:**
- Most precise measurement of muon magnetic anomaly to date
- Experimental value: aμ = 0.001165920705 ± 0.000000000114 (stat) ± 0.000000000091 (syst)
- Agreement with Brookhaven E821 measurement

#### DUNE (Deep Underground Neutrino Experiment)

| Metric | Value |
|--------|-------|
| **Collaboration Size** | 1,500+ scientists from 35+ countries |
| **Far Detector Mass** | 4 × 17-kton LArTPC modules |
| **Baseline** | 1,300 km (Fermilab to SURF, South Dakota) |
| **Beam Power** | 1.2 MW (upgrade to 2.4 MW) |
| **Neutrino Beam Source** | 215m linear accelerator (PIP-II) |

**Construction Status 2025:**
- Underground caverns excavation completed at SURF
- 3,000+ tons of steel arrived for cryostat modules
- PIP-II coldbox installed (Jan 2025)
- High-Bay Building authorized for use (Oct 2025)
- First neutrino data expected: Late 2020s

**Near Detector:**
- 2x2 Demonstrator operating in NuMI beam since July 2024
- ND-LAr with 3D pixel-based readout
- System for on-Axis Neutrino Detection (SAND)

#### Short-Baseline Neutrino Program

| Experiment | Status | Key Result 2025 |
|------------|--------|-----------------|
| **SBND** | 2nd year of operation | ~7,000 neutrinos/day |
| **MicroBooNE** | 10th anniversary 2025 | Sterile neutrino excluded (Nature, Dec 2025) |
| **ICARUS** | 5 years continuous data | Physics beyond SM searches |

**Other Fermilab Programs:**
- **Mu2e:** Final subdetector moved to experiment hall (Nov 2025)
- **NOvA:** Joint results with T2K published in Nature (Oct 2025)
- **SQMS Center:** DOE renewed funding for 5 years (Nov 2025)
- **SuperCDMS:** Installation complete at SNOLAB, data taking early 2026
- **MAGIS-100:** Laser laboratory construction complete

**Resources:**
- Website: https://www.fnal.gov
- DUNE: https://dune.fnal.gov

---

### 3.3 DESY (Germany)

| Facility | Status |
|----------|--------|
| **PETRA IV** | Fourth-generation synchrotron upgrade |
| **FLASH** | Free-electron laser operational |
| **European XFEL** | User operation ongoing |

**Research Areas:**
- Photon science
- Particle physics
- Accelerator R&D

**Resources:**
- Website: https://www.desy.de

---

### 3.4 KEK (Japan)

#### SuperKEKB / Belle II

| Metric | Value |
|--------|-------|
| **Collider Type** | Electron-positron asymmetric |
| **Target Luminosity** | 8×10³⁵ cm⁻²s⁻¹ |
| **Physics Focus** | B physics, CP violation, new physics |

**Status:**
- Continued operation and data collection
- Precision flavor physics measurements
- Search for new physics beyond Standard Model

**J-PARC:**
- **Muon g-2/EDM Experiment:** Construction ongoing, data taking planned for 2030
- T2K neutrino experiment continued operation

**Resources:**
- Website: https://www.kek.jp
- Belle II: https://www.belle2.org

---

### 3.5 SLAC National Accelerator Laboratory (USA)

| Facility | Status |
|----------|--------|
| **LCLS-II** | World's most powerful X-ray free-electron laser |
| **FACET-II** | Advanced accelerator research facility |
| **SuperCDMS** | Dark matter experiment (hosted at SNOLAB) |

**Research Areas:**
- X-ray science
- Particle physics
- Accelerator physics
- Dark matter detection

**Resources:**
- Website: https://www6.slac.stanford.edu

---

### 3.6 Brookhaven National Laboratory (USA)

#### Electron-Ion Collider (EIC)

| Metric | Value |
|--------|-------|
| **Total Project Cost** | ~$2B+ |
| **Circumference** | 2.4 miles |
| **Collider Type** | Polarized electrons + polarized protons/ions |
| **Construction Status** | Ongoing |

**Key Components:**
- World's highest voltage polarized electron gun (tested at SBU, Oct 2024)
- ePIC detector collaboration
- Accelerator tunnel construction underway

**RHIC/STAR:**
- Continued heavy ion physics program
- Study of quark-gluon plasma

**Resources:**
- EIC: https://www.bnl.gov/eic
- Website: https://www.bnl.gov

---

### 3.7 GSI/FAIR (Germany)

| Metric | Value |
|--------|-------|
| **FAIR Collaboration Scientists** | 2,500+ from 413 institutes in 53 countries |
| **SIS100 Dipole Magnets** | All produced and cold tested |
| **Civil Construction (Stage 1)** | Completed end of 2024 |

**Timeline:**
- **2024:** Installation in FAIR accelerator tunnels ongoing
- **2025:** Cryogenic plant commissioning
- **End 2025:** Transport line commissioning
- **2027:** Beam commissioning (second half)
- **2027/2028:** First beams for science experiments

**FAIR Research Programs:**
- **APPA:** Atomic physics, plasma physics, applied research
- **CBM:** Compressed baryonic matter
- **NUSTAR:** Nuclear structure and astrophysics
- **PANDA:** Antiproton annihilation at Darmstadt

**Phase-0 Program:**
- Ongoing science with upgraded GSI accelerators
- ~3 months beam time per year
- 65 experiment proposals approved (2022)

**Resources:**
- Website: https://www.gsi.de/en/fair

---

### 3.8 IHEP Beijing - CEPC Planning

#### Circular Electron Positron Collider (CEPC)

| Metric | Value |
|--------|-------|
| **Center-of-Mass Energy** | 90-240 GeV |
| **Tunnel Circumference** | ~100 km |
| **Cost Estimate** | ~$5-10 billion |

**Status 2024-2025:**
- **Accelerator TDR:** Released 2023
- **Detector TDR:** Released October 2025
- **EDR Phase:** 2024-2027
- **Five-Year Plan (2026-2030):** Not approved (Oct 2025)
- **Next Proposal:** 2030

**Design Features:**
- Higgs factory as primary goal
- Upgrade path to SPPC (super proton-proton collider)
- Reference detector: crystal ECAL, scintillating glass HCAL
- AC-coupled LGAD tracking (10 μm position, 50 ps time)

**Resources:**
- Website: https://cepc.ihep.ac.cn

---

## 4. Particle Physics Theory Institutes

### 4.1 Kavli IPMU (Japan)

- **Full Name:** Kavli Institute for the Physics and Mathematics of the Universe
- **Location:** University of Tokyo, Kashiwa, Japan
- **Focus:** Cosmology, astrophysics, mathematics
- **Website:** https://www.ipmu.jp

---

### 4.2 SISSA (Italy)

- **Full Name:** International School for Advanced Studies
- **Location:** Trieste, Italy
- **Focus:** Physics, mathematics, neuroscience
- **Research Areas:** Astroparticle physics, condensed matter, statistical physics
- **Website:** https://www.sissa.it

---

### 4.3 ICTP (Italy)

- **Full Name:** Abdus Salam International Centre for Theoretical Physics
- **Location:** Trieste, Italy
- **Mandate:** Promote research and education in developing countries
- **Programs:** High energy physics, cosmology, condensed matter
- **Website:** https://www.ictp.it

---

### 4.4 Nordita (Sweden)

- **Full Name:** Nordic Institute for Theoretical Physics
- **Location:** Stockholm, Sweden (Albano Campus)
- **Founded:** 1957 (Copenhagen), relocated 2007
- **Host Institutions:** Stockholm University, KTH Royal Institute of Technology

**Research Areas:**
- Astrophysics and astroparticle physics
- Hard and soft condensed matter physics
- High-energy physics and cosmology
- Quantum information and networks

**Key Programs 2025:**
- Eurostrings 2025 (August)
- Integrability, Dualities and Deformations (September)
- Quantum Connections summer school
- Amplitudes, Strong-Field Gravity and Resummation (April 2026)

**Recent Funding:**
- ERC Synergy Grant 2025 (Axel Brandenburg - cosmic magnetic fields)
- Swedish Research Council Grants

**Nature Index 2024-2025:** 44 publications, Share 9.58

**Resources:**
- Website: https://nordita.org

---

### 4.5 IPPP Durham (UK)

- **Full Name:** Institute for Particle Physics Phenomenology
- **Location:** Durham University, UK
- **Founded:** 2000
- **Status:** UK's national institute for particle phenomenology

**25th Anniversary:** September 24-25, 2025

**Research Output:**
- 1,600+ research papers published
- Average citations: 100+ per paper
- Most cited: "Parton Distributions for the LHC" (Martin & Stirling)

**Tools Developed:**
- SHERPA (simulation)
- HERWIG (event generator)
- Parton distribution functions

**Key Researchers:**
- Keith Ellis (FRS)
- Nigel Glover (FRS)
- Michael Spannowsky (Director)

**Recent Events:**
- PASCOS 2025 (July 2025)
- IPPP 25th Anniversary celebration

**REF 2024:** Top 10 UK Physics department, 96% world-leading research

**Resources:**
- Website: https://www.ippp.dur.ac.uk

---

## 5. Neutrino Physics

### 5.1 DUNE (Deep Underground Neutrino Experiment)

| Parameter | Value |
|-----------|-------|
| **Baseline** | 1,300 km |
| **Far Detector** | 4 × 17-kton LArTPC modules |
| **Near Detector** | ND-LAr + TMS + SAND |
| **Beam Power** | 1.2 MW → 2.4 MW |
| **Collaboration** | 1,500+ scientists, 35+ countries |

**Physics Goals:**
- Neutrino mass ordering determination
- CP violation in leptonic sector
- Supernova neutrino detection
- Nucleon decay search

**Construction Progress 2025:**
- SURF caverns excavation complete
- 3,000 tons of steel delivered for cryostats
- PIP-II linac construction ongoing
- Cryogenic plant installed

**Expected Sensitivity:**
- 5σ mass ordering determination in ~5 years
- CP violation discovery for any δCP value

**Resources:**
- Website: https://dune.fnal.gov
- LBNF: https://lbnf.fnal.gov

---

### 5.2 JUNO (Jiangmen Underground Neutrino Observatory)

| Parameter | Value |
|-----------|-------|
| **Location** | Jiangmen, Guangdong Province, China |
| **Depth** | 700 m underground |
| **Detector Mass** | 20,000 tons liquid scintillator |
| **Acrylic Sphere Diameter** | 35.4 m |
| **PMTs** | 20,000 (20-inch) + 25,600 (3-inch) |
| **Reactor Distance** | 53 km (Taishan & Yangjiang) |
| **Collaboration** | 700+ scientists from 75 institutions, 17 countries |
| **Start of Data Taking** | August 26, 2025 |

**First Physics Results (Nov 2025):**
- 59 days of effective data (Aug-Nov 2025)
- Solar oscillation parameters measured with 1.5-1.8× better precision
- Confirmed "solar neutrino tension" at 1.5σ

**Physics Goals:**
- Neutrino mass ordering determination
- Precision oscillation parameter measurements (sub-percent)
- Solar, atmospheric, supernova, geoneutrino studies
- Proton decay search
- Sterile neutrino search

**Upgrade Potential:**
- Path to world-leading 0νββ decay search

**Resources:**
- Website: https://juno.ihep.cas.cn

---

### 5.3 Hyper-Kamiokande (Japan)

| Parameter | Value |
|-----------|-------|
| **Location** | Kamioka, Japan |
| **Water Volume** | 260,000 tons (5× Super-Kamiokande) |
| **PMTs** | ~40,000 |
| **Construction Status** | Ongoing |
| **Expected Start** | ~2027 |

**Physics Goals:**
- CP violation discovery
- Neutrino mass ordering
- Nucleon decay search (proton lifetime >10³⁴ years)
- Supernova neutrino detection

---

### 5.4 IceCube / IceCube-Gen2 (Antarctica)

| Parameter | Current | Gen2 |
|-----------|---------|------|
| **Volume** | 1 km³ | 8 km³ |
| **Strings** | 86 | 206 (120 new) |
| **Optical Sensors** | 5,160 | ~15,000 |
| **Radio Array** | - | 500 km² |

**Recent Discoveries:**
- Blazar TXS 0506+056 identification
- Seyfert galaxy NGC 1068
- Galactic plane neutrino emission (2023)

**IceCube-Gen2 Timeline:**
- **2025/2026:** IceCube Upgrade installation (7 new strings)
- **2027:** Final Design Review, Construction start
- **2032:** Full Gen2 completion

**Sensitivity Improvement:**
- 10× detection rate increase
- 5× point source sensitivity
- Ultra-high energy neutrino detection via radio array

**Resources:**
- Website: https://icecube.wisc.edu
- Gen2: https://icecube-gen2.wisc.edu

---

### 5.5 KM3NeT (Mediterranean)

| Parameter | Value |
|-----------|-------|
| **Location** | Mediterranean Sea (France, Italy, Greece) |
| **Detector Type** | Water Cherenkov neutrino telescope |
| **Status** | Construction ongoing |
| **Strings Deployed** | Multiple (increasing) |

**Research Goals:**
- High-energy neutrino astronomy
- Dark matter searches
- Neutrino oscillation studies

**Resources:**
- Website: https://www.km3net.org

---

## 6. Dark Matter Experiments

### 6.1 XENON

**XENONnT:**
- Liquid xenon time projection chamber
- Continued operation and data collection
- World-leading sensitivity for WIMP dark matter
- **Website:** https://xenonexperiment.org

---

### 6.2 LZ (LUX-ZEPLIN)

| Parameter | Value |
|-----------|-------|
| **Location** | Sanford Underground Research Facility |
| **Xenon Mass** | 10 tons (7 tons fiducial) |
| **Status** | Operating |

**Results:**
- Continued WIMP search with increasing exposure
- Competitive sensitivity for low-mass WIMPs

**Resources:**
- Website: https://lz.lbl.gov

---

### 6.3 PandaX (China)

| Parameter | Value |
|-----------|-------|
| **Location** | China Jinping Underground Laboratory |
| **Target** | Xenon-based dark matter detection |
| **Status** | Operating, multi-ton scale |

**PandaX-4T:**
- 4-ton xenon target
- Results competitive with XENONnT and LZ

**Resources:**
- Website: http://pandax.physics.sjtu.edu.cn

---

### 6.4 ADMX (Axion Dark Matter eXperiment)

| Parameter | Value |
|-----------|-------|
| **Location** | University of Washington |
| **Target** | QCD axion dark matter |
| **Technology** | Microwave cavity haloscopes |
| **Status** | Operating, sensitivity improvements ongoing |

**Sensitivity:**
- Reaching DFSZ axion coupling range
- Continued operation toward KSVZ axion sensitivity

**Resources:**
- Website: https://admx.washington.edu

---

### 6.5 DAMIC

- Silicon CCD-based dark matter detection
- Low-mass WIMP sensitivity
- **DAMIC-M:** Updated detector with improved background rejection

---

### 6.6 DEAP-3600

| Parameter | Value |
|-----------|-------|
| **Location** | SNOLAB, Canada |
| **Target Mass** | 3,600 kg liquid argon |
| **Status** | Operating |

**Focus:**
- Spin-independent WIMP-nucleon interactions
- Pulse shape discrimination for background rejection

---

### 6.7 SuperCDMS

| Parameter | Value |
|-----------|-------|
| **Location** | SNOLAB, Canada |
| **Technology** | Cryogenic germanium/silicon detectors |
| **Installation** | Complete (late 2025) |
| **Data Taking** | Early 2026 |

**Sensitivity:**
- Low-mass WIMP detection (0.5-10 GeV/c²)
- Electron interactions for light dark matter

**Resources:**
- Website: https://supercdms.slac.stanford.edu

---

## Summary Statistics Table

### Quantum Computing

| Company | System | Qubits | Status |
|---------|--------|--------|--------|
| IBM | Condor | 1,121 | Available via cloud |
| IBM | Heron | 133 (r3) | Available |
| Google | Willow | 105 | Research partners only |
| Google | Sycamore | 54-70 | Research partners only |
| IonQ | Forte Enterprise | 36 AQ | Commercial cloud |
| Rigetti | Ankaa-2 | 84 | Commercial cloud |
| D-Wave | Advantage2 | 4,400+ | Commercially available |
| QuEra | Aquila | 256 | Amazon Braket |
| Xanadu | Borealis | - | Photonic, cloud |

### Major Particle Physics Facilities

| Facility | Location | Status |
|----------|----------|--------|
| CERN LHC | Switzerland | Operating (Run 3) |
| DUNE | USA | Under construction |
| JUNO | China | Data taking (Aug 2025) |
| Hyper-K | Japan | Under construction |
| FAIR | Germany | Construction, beams 2027-2028 |
| EIC | USA | Under construction |
| CEPC | China | Planning, EDR phase |
| IceCube-Gen2 | Antarctica | Design, upgrade 2025-2032 |

### Neutrino Experiments Status

| Experiment | Status | Key Milestone |
|------------|--------|---------------|
| DUNE | Construction | First beams late 2020s |
| JUNO | Operating | First results Nov 2025 |
| Hyper-Kamiokande | Construction | Operations ~2027 |
| IceCube-Gen2 | Design | Construction 2027 |
| KM3NeT | Construction | Partial operation |

---

## References and URLs

### Quantum Computing
- IBM Quantum: https://www.ibm.com/quantum
- Google Quantum AI: https://quantumai.google
- IonQ: https://ionq.com
- D-Wave: https://www.dwavequantum.com
- Rigetti: https://www.rigetti.com
- Xanadu: https://www.xanadu.ai
- QuEra: https://www.quera.com
- Amazon Braket: https://aws.amazon.com/braket
- Azure Quantum: https://azure.microsoft.com/quantum

### Particle Physics Labs
- CERN: https://home.cern
- Fermilab: https://www.fnal.gov
- DESY: https://www.desy.de
- KEK: https://www.kek.jp
- SLAC: https://www6.slac.stanford.edu
- Brookhaven: https://www.bnl.gov
- GSI/FAIR: https://www.gsi.de
- IHEP: http://www.ihep.cas.cn

### Neutrino Experiments
- DUNE: https://dune.fnal.gov
- JUNO: https://juno.ihep.cas.cn
- IceCube: https://icecube.wisc.edu
- KM3NeT: https://www.km3net.org
- Hyper-Kamiokande: https://www-sk.icrr.u-tokyo.ac.jp

### Dark Matter Experiments
- XENON: https://xenonexperiment.org
- LZ: https://lz.lbl.gov
- PandaX: http://pandax.physics.sjtu.edu.cn
- ADMX: https://admx.washington.edu
- SuperCDMS: https://supercdms.slac.stanford.edu

### Theory Institutes
- Kavli IPMU: https://www.ipmu.jp
- SISSA: https://www.sissa.it
- ICTP: https://www.ictp.it
- Nordita: https://nordita.org
- IPPP Durham: https://www.ippp.dur.ac.uk

---

*Report compiled: February 2026*
*Data sources: Official press releases, technical design reports, peer-reviewed publications, and institutional websites*
