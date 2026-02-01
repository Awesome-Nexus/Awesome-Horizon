# Physics Citizen Science Projects and Open Source Physics Hardware

A comprehensive research compilation of citizen science initiatives and open source hardware projects in physics.

---

## Table of Contents

1. [Citizen Science Projects in Physics](#1-citizen-science-projects-in-physics)
   - [Astronomy & Astrophysics](#astronomy--astrophysics)
   - [Particle Physics](#particle-physics)
   - [Climate & Atmospheric Physics](#climate--atmospheric-physics)
   - [Gravitational Wave Physics](#gravitational-wave-physics)
   - [Other Physics Projects](#other-physics-projects)
2. [Open Source Physics Hardware](#2-open-source-physics-hardware)
   - [Raspberry Pi Projects](#raspberry-pi-projects)
   - [Arduino Projects](#arduino-projects)
   - [3D Printed Physics Equipment](#3d-printed-physics-equipment)
   - [Open Source Instrumentation](#open-source-instrumentation)
   - [Low-Cost DIY Physics Tools](#low-cost-diy-physics-tools)
3. [Open Source Physics Software](#3-open-source-physics-software)
4. [Crowdfunded Physics Projects](#4-crowdfunded-physics-projects)

---

## 1. Citizen Science Projects in Physics

### ASTRONOMY & ASTROPHYSICS

#### Zooniverse Platform Projects

The **Zooniverse** (https://www.zooniverse.org/) is the world's largest platform for people-powered research, hosting numerous physics-related projects.

| Project | URL | Description |
|---------|-----|-------------|
| **Galaxy Zoo** | https://www.galaxyzoo.org/ | Classify galaxies by their shapes to help understand galaxy formation and evolution. Over 900,000 participants have contributed to classifying millions of galaxies from Sloan Digital Sky Survey and other surveys. |
| **Planet Hunters TESS** | https://www.planethunters.org/ | Search for exoplanets using data from NASA's Transiting Exoplanet Survey Satellite (TESS). Volunteers identify transiting planets by analyzing light curves from distant stars. |
| **Disk Detective** | https://diskdetective.org/ | Search for dusty debris disks around stars using data from NASA's WISE mission. These disks are similar to our asteroid belt and represent birthplaces of planets. |
| **Milky Way Project** | https://www.milkywayproject.org/ | Map infrared "bubbles" and bow shocks in our galaxy using Spitzer Space Telescope data. Helps identify regions of star formation. |
| **Radio Galaxy Zoo** | https://radio.galaxy.zoo.org/ | Classify radio sources and their host galaxies to understand active galactic nuclei and black hole jets. |
| **Gravity Spy** | https://www.zooniverse.org/projects/zooniverse/gravity-spy | Classify glitches in LIGO gravitational wave detector data (detailed below). |

#### Distributed Computing Projects

| Project | URL | Description |
|---------|-----|-------------|
| **SETI@home** | https://setiathome.berkeley.edu/ | **Historic project (1999-2020)** - Searched for extraterrestrial intelligence by analyzing radio telescope data. Pioneered volunteer distributed computing. Recently published scientific papers from accumulated data. |
| **Einstein@Home** | https://einsteinathome.org/ | Searches for weak astrophysical signals from spinning neutron stars (pulsars) using data from LIGO gravitational-wave detectors, MeerKAT radio telescope, Fermi gamma-ray satellite, and archival Arecibo data. Run by University of Wisconsin-Milwaukee. |
| **CosmoQuest** | https://www.cosmoquest.org/ | NASA-supported project for mapping surfaces of rocky worlds in our solar system, including the Moon, Mercury, and asteroids. Also provides educational resources and community events. |
| **Stardust@home** | http://stardustathome.com/ | Search for interstellar dust particles captured by NASA's Stardust spacecraft. Volunteers examine microscopic images to find tracks of dust particles in aerogel collector. |

### PARTICLE PHYSICS

| Project | URL | Description |
|---------|-----|-------------|
| **LHC@home** | https://lhcathome.cern.ch/ | Volunteer computing project using Internet-connected computers to advance Particle and Accelerator Physics. Runs Sixtrack for accelerator physics simulations, and virtualization-based applications for ATLAS, CMS, and LHCb experiment simulations. Operated by CERN. |
| **Cosmic Pi** | https://github.com/CosmicPi | Low-cost distributed cosmic ray detector based on Raspberry Pi, developed by CERN scientists. Uses scintillator detectors and silicon photomultipliers to detect cosmic rays. Open source hardware (CERN OHL v1.2). |
| **Quake-Catcher Network** | https://quake-catcher.usi.edu/ | Distributed seismic network using accelerometers in laptops and dedicated sensors to detect earthquakes. Volunteers connect USB sensors to their computers. |
| **MINERVA** | https://minerva-project.org/ | Exoplanet observation project using robotic telescopes. Citizen scientists help schedule observations and analyze data. |

### CLIMATE & ATMOSPHERIC PHYSICS

| Project | URL | Description |
|---------|-----|-------------|
| **GLOBE Program** | https://www.globe.gov/ | NASA-sponsored international science and education program. Over 283 million measurements collected by 1.3M+ citizen scientists across 127 countries. Participants collect data on atmosphere, hydrosphere, biosphere, and soil. |
| **Weather Underground / CWOP** | https://www.wunderground.com/ | Personal Weather Station network allowing individuals to share local weather data contributing to global meteorological models. |
| **Solar Stormwatch** | https://www.solarstormwatch.com/ | Track solar storms and coronal mass ejections (CMEs) using data from NASA's STEREO spacecraft. Helps predict space weather impacts on Earth. |
| **Aurorasaurus** | https://aurorasaurus.org/ | Real-time aurora reporting platform using social media (Twitter/X) observations. Volunteers verify aurora sightings to improve nowcast predictions of auroral activity. NASA-funded project. |

### GRAVITATIONAL WAVE PHYSICS

#### Gravity Spy
- **URL**: https://www.zooniverse.org/projects/zooniverse/gravity-spy
- **Research Team**: Northwestern University CIERA, LIGO Laboratory
- **Funding**: National Science Foundation (NSF grants INSPIRE 1547880, IIS-2107334)

**Project Description:**
Gravity Spy combines citizen science with machine learning to characterize noise artifacts ("glitches") in LIGO gravitational wave detector data. Gravitational wave detectors are susceptible to various instrumental and environmental noise sources that can mask or mimic astrophysical signals.

**How it works:**
1. Citizen scientists classify glitches by morphology into pre-identified categories
2. Classified data trains machine learning algorithms (Convolutional Neural Networks)
3. ML algorithms process more data and identify interesting abnormal glitches
4. Volunteers further characterize these, potentially discovering new glitch classes

**Achievements:**
- Successfully identified new glitch classes: Crown (Fast Scattering), Pizzicato, Paired Doves, Helix
- Over 250 gravitational-wave candidates detected during O4 observing run
- Created "gold standard" glitch datasets for detector characterization
- Gravity Spy 2.0 will incorporate auxiliary channel data for root cause analysis

**Technical Details:**
- Uses convolutional neural networks (CNN) for image recognition of spectrograms
- Volunteers progress through 7 training levels
- Multi-detector support: LIGO Hanford, LIGO Livingston, Virgo (Italy), and KAGRA (Japan)

### OTHER PHYSICS PROJECTS

| Project | URL | Description |
|---------|-----|-------------|
| **Folding@home** | https://foldingathome.org/ | Distributed computing project simulating protein folding and other molecular dynamics. Used for drug discovery and understanding diseases including COVID-19, Alzheimer's, and cancer. Run by University of Pennsylvania. |
| **BOINC** | https://boinc.berkeley.edu/ | Open-source software platform for volunteer computing. Hosts multiple physics projects including SETI@home (historic), Einstein@Home, LHC@home, and many others. Developed at UC Berkeley. |
| **DUNE Citizen Science** | (upcoming) | Planned citizen science components for the Deep Underground Neutrino Experiment, currently in development. |

---

## 2. Open Source Physics Hardware

### RASPBERRY PI PROJECTS

#### Cosmic Pi - Cosmic Ray Detector
- **GitHub**: https://github.com/CosmicPi
- **Hardware License**: CERN Open Hardware Licence v1.2
- **Price**: < $500 USD / < €350

**Description:**
Cosmic Pi is a low-cost distributed cosmic ray detector developed by CERN scientists in their spare time. It aims to crowdsource the world's largest cosmic ray telescope.

**Hardware Components:**
- Raspberry Pi (Zero or 3/4) for data storage and online analysis
- Scintillator material to detect cosmic ray energy
- Optical fiber to trap photons from scintillator
- Silicon photomultipliers (SiPMs) at fiber ends
- Temperature, pressure, humidity sensors (atmospheric monitoring)
- GPS module for location/altitude logging
- Accelerometer and magnetometer for orientation
- Arduino Due microcontroller (for V1.5-1.7)

**Features:**
- Real-time Grafana dashboard for data visualization
- MQTT connection to central server for global mapping
- Over 22 million cosmic rays detected by the network
- Persistent data storage in InfluxDB
- Web interface for creating custom visualizations

**Versions:**
- V1.5-V1.6: Earlier designs with Arduino Due
- V1.7: Incremental improvements
- V1.8: Latest design with persistent MQTT connections

#### Raspberry Shake - Seismograph
- **Website**: https://raspberryshake.org/
- **Description**: Professional-grade seismograph and infrasound monitors based on Raspberry Pi

**Features:**
- Precision seismic instruments for detecting earthquakes
- Real-time seismic insights and global earthquake tracking
- Used by scientists and hobbyists worldwide
- Various models available (1D, 3D, 4D)
- Can detect earthquakes from thousands of kilometers away

**Applications:**
- Earthquake detection and monitoring
- Structural health monitoring
- Educational demonstrations
- Volcanic activity monitoring

#### Other Raspberry Pi Physics Projects

| Project | Description |
|---------|-------------|
| **Pi-based Weather Stations** | Complete weather monitoring with temperature, pressure, humidity, wind speed/direction sensors |
| **Radio Telescopes** | Software-defined radio (SDR) projects using RTL-SDR dongles with Raspberry Pi |
| **Particle Detectors** | DIY particle detection using various sensor add-ons |
| **Spectrometers** | Low-cost optical spectrometers using Pi cameras and diffraction gratings |

### ARDUINO PROJECTS

#### Physics Sensors and Controllers
Arduino (https://www.arduino.cc/) is an open-source electronics platform widely used in physics education and research.

**Common Physics Applications:**

| Sensor Type | Application |
|-------------|-------------|
| **Geiger Counters** | Radiation detection using GM tubes |
| **Magnetometers** | Magnetic field measurements |
| **Accelerometers/Gyroscopes** | Motion sensing, vibration analysis, pendulum experiments |
| **Temperature Sensors** | Thermodynamics experiments, heat transfer studies |
| **Pressure Sensors** | Atmospheric physics, fluid dynamics |
| **Ultrasonic Sensors** | Speed of sound measurements, distance sensing |
| **Light Sensors (LDR, Photodiodes)** | Optics experiments, photometry |

#### Cosmic Watch - Muon Detector
- **Type**: Arduino-based cosmic ray muon detector
- **Components**: Plastic scintillator, SiPM, Arduino microcontroller
- **Applications**: Cosmic ray detection for educational purposes

#### DIY Spectrometers
- Uses diffraction gratings with Arduino ADC for light analysis
- Can be built for under $50
- Applications: Emission line analysis, absorption spectroscopy

### 3D PRINTED PHYSICS EQUIPMENT

#### OpenSPIM - Light Sheet Microscopy
- **Website**: https://openspim.org/
- **License**: Open Access/Open Source

**Description:**
Selective Plane Illumination Microscopy (SPIM) platform built from off-the-shelf components and 3D-printed parts.

**Features:**
- Fast, optically-sectioning, minimally-invasive 3D imaging
- Capable of imaging developing embryos with cellular resolution
- Fits inside a suitcase
- Software built on µManager and Fiji (open source)
- Cost-effective compared to commercial SPIM systems

**Applications:**
- Developmental biology (Drosophila, zebrafish imaging)
- Cell biology
- Long-term time-lapse imaging

#### OpenFlexure Microscope
- **Website**: https://openflexure.org/
- **Description**: 3D-printed, laboratory-grade digital microscopes

**Features:**
- Fully open-source hardware design
- Motorized stage options
- High-quality optics at low cost
- Designed for global health applications
- Used for malaria microscopy, pathology imaging

#### Printable Science
- **Website**: http://www.printablescientific.com/ (various resources)
- Collections of 3D printable scientific equipment

**Available Designs:**
- Optics mounts and lens holders
- Sample chambers
- Translation stages
- Custom scientific apparatus

### OPEN SOURCE INSTRUMENTATION

#### Red Pitaya
- **Website**: https://redpitaya.com/
- **Description**: Open-source FPGA development board for test, measurement, and signal acquisition

**Features:**
- Credit card-sized form factor
- Dual-channel oscilloscope (up to 125 MS/s)
- Signal generator
- Spectrum analyzer
- Logic analyzer
- Fully open-source and reconfigurable
- FPGA-based architecture (Xilinx Zynq)

**Applications:**
- **Photonics**: Laser locking, frequency stabilization
- **Quantum**: Quantum computing control, quantum optics
- **Radar/Lidar**: Signal processing
- **Medical**: Medical device development
- **Aerospace**: NASA ISS air quality monitoring, flight testing
- **Nuclear**: Radiation detection

**Industry Users:**
- NASA (ISS experiments, fiber optic sensing)
- GE Aviation
- Various research institutions

#### openQCM - Quartz Crystal Microbalance
- **Website**: https://openqcm.com/
- **Manufacturer**: Novaetech S.r.l. (Italy)
- **Citations**: Nearly 300 scientific papers

**Products:**
- **openQCM Wi2**: Starter QCM for frequency monitoring
- **openQCM Q-1**: Frequency and dissipation monitoring
- **openQCM NEXT**: Multi-overtone, dissipation, active thermal control

**Applications:**
- Material science
- Biochemistry and molecular biology
- Environmental monitoring
- Surface science and nanotechnology
- Electrochemistry
- Drug discovery

**Features:**
- Arduino-based open-source hardware
- High sensitivity mass sensing
- Real-time frequency monitoring
- Scientific-grade quality

#### Gamma Spectacular
- **Website**: https://www.gammaspectacular.com/
- **Based in**: Australia

**Products:**
- Sound-card based gamma spectrometers (invented in 2009)
- Digital spectrometers (GS-PRO-V5)
- Scintillation detectors (NaI, CsI)
- Neutron detectors with Bluetooth

**Features:**
- Hand-assembled and tested
- Lifetime guarantee
- Free after-sales service and training
- Educational discounts available

**Applications:**
- University teaching labs
- Amateur radiation monitoring
- Professional gamma spectroscopy

### LOW-COST DIY PHYSICS TOOLS

#### Foldscope - Paper Microscope
- **Website**: https://foldscope.com/
- **Inventor**: Manu Prakash (Stanford University)
- **TED Talk**: Available showing live demonstration

**Features:**
- Origami-based paper microscope
- Magnification: 50X-340X
- Waterproof and durable
- Can attach to mobile phones for imaging
- Reached over 2 million people worldwide

**Applications:**
- Field microscopy
- Educational outreach
- Low-resource settings
- Community science (Microcosmos platform)

**Pricing:**
- Individual kits available
- Classroom sets at educational discounts
- Various configurations available

#### DIY Cloud Chambers
- **Type**: Particle detection visualization
- **Cost**: Under $50
- **Components**: Fish tank, felt, dry ice or Peltier cooler, isopropyl alcohol, light source
- **Detects**: Alpha particles, beta particles, cosmic ray muons

#### DIY Bubble Chambers
- More complex than cloud chambers
- Uses superheated liquid to show particle tracks
- Requires careful temperature and pressure control

#### Other DIY Physics Tools

| Tool | Description | Cost |
|------|-------------|------|
| **PhoneScope** | Smartphone spectroscope attachment | $10-30 |
| **DIY Electron Microscope** | Scanning electron microscope projects (various designs) | $500-2000 |
| **OpenPCR** | Open-source thermal cycler for DNA amplification (physics of thermodynamics) | $600 |
| **DIY Magnetometers** | Fluxgate or proton precession designs | $50-200 |
| **DIY Gravitational Wave Demo** | Michelson interferometer kits for educational demonstrations | $100-500 |

---

## 3. Open Source Physics Software

### Python for Physics

#### NumPy
- **URL**: https://numpy.org/
- **Description**: Fundamental package for numerical computing in Python
- **Features**: N-dimensional arrays, linear algebra, Fourier transforms, random number generation

#### SciPy
- **URL**: https://scipy.org/
- **Description**: Algorithms for optimization, integration, interpolation, eigenvalue problems, differential equations
- **Used for**: Signal processing, numerical simulations, data analysis

#### Matplotlib
- **URL**: https://matplotlib.org/
- **Description**: Comprehensive visualization library
- **Features**: Publication-quality plots, interactive figures, multiple export formats

### Physics-Specific Libraries

| Library | URL | Description |
|---------|-----|-------------|
| **ROOT** | https://root.cern/ | Open-source data analysis framework used by high energy physics (CERN). Used in Higgs boson discovery. Supports C++ and Python. |
| **Geant4** | https://geant4.web.cern.ch/ | Toolkit for simulating passage of particles through matter. Used in high energy, nuclear, accelerator, medical, and space physics. |
| **Astropy** | https://www.astropy.org/ | Community Python library for astronomy |
| **SunPy** | https://sunpy.org/ | Solar data analysis in Python |
| **PlasmaPy** | https://www.plasmapy.org/ | Plasma physics in Python |
| **SimPy** | https://simpy.readthedocs.io/ | Process-based discrete-event simulation |

### Arduino and Embedded

| Tool | URL | Description |
|------|-----|-------------|
| **Arduino IDE** | https://www.arduino.cc/en/software | Development environment for Arduino boards |
| **PlatformIO** | https://platformio.org/ | Cross-platform embedded development |
| **Processing** | https://processing.org/ | Programming environment for visual arts and physics visualization |
| **openFrameworks** | https://openframeworks.cc/ | C++ toolkit for creative coding and physics simulations |

### Data Acquisition and Control

| Tool | Description |
|------|-------------|
| **SciDAQ** | Open data acquisition systems |
| **EPICS** | Experimental Physics and Industrial Control System |
| **Tango Controls** | Open-source device control framework |
| **PyVISA** | Python module for controlling measurement devices |

### Physics Education Software

| Tool | URL | Description |
|------|-----|-------------|
| **PhET Simulations** | https://phet.colorado.edu/ | Interactive physics simulations from University of Colorado |
| **Tracker** | https://physlets.org/tracker/ | Video analysis and modeling tool |
| **phyphox** | https://phyphox.org/ | Turn your smartphone into a physics lab using built-in sensors |
| **Physlets** | https://physlets.org/ | JavaScript physics applets |
| **Interactive Physics** | Various | Physics simulation software |

### Smartphone Physics Apps

#### phyphox
- **URL**: https://phyphox.org/
- **Developer**: RWTH Aachen University (Germany)
- **Awards**: Ars legendi faculty award (2020), German Physical Society teaching award (2019)

**Features:**
- Uses smartphone sensors for physics experiments
- Accelerometer for pendulum experiments
- Microphone for Doppler effect measurements
- Magnetometer for magnetic field studies
- Remote control via web browser
- Custom experiment creation
- Data export in multiple formats

---

## 4. Crowdfunded Physics Projects

### Muon Detector Projects

| Project | Platform | Description |
|---------|----------|-------------|
| **Cosmic Pi** | Kickstarter (planned) | Open-source cosmic ray detector |
| **Muon Hunter** | Various | DIY muon detection kits |
| **SparkFun Particle Sensor** | Crowdfunding | Educational particle detection |

### Physics Education Tools

| Project | Description |
|---------|-------------|
| **Makers of the Cosmos** | DIY radio telescope kits |
| **PocketLab** | Wireless sensors for physics experiments |
| **LittleBits Space Kit** | NASA collaboration for space science education |

### Open Hardware Initiatives

| Initiative | Description |
|------------|-------------|
| **CERN Open Hardware Licence** | License for open-source hardware developed at CERN |
| **TAPR Open Hardware License** | Early open hardware license |
| **Open Source Hardware Association (OSHWA)** | Certification for open hardware |

---

## Key Organizations and Resources

### Research Institutions
- **CERN**: https://home.cern/ - European Organization for Nuclear Research
- **LIGO Laboratory**: https://www.ligo.caltech.edu/ - Gravitational wave detection
- **NASA**: https://www.nasa.gov/ - Various citizen science programs
- **NSF**: https://www.nsf.gov/ - Funds many citizen science projects

### Citizen Science Platforms
- **Zooniverse**: https://www.zooniverse.org/ - General citizen science platform
- **BOINC**: https://boinc.berkeley.edu/ - Volunteer computing platform
- **SciStarter**: https://scistarter.org/ - Citizen science project finder
- **CitizenScience.gov**: https://www.citizenscience.gov/ - U.S. government citizen science

### Open Hardware Communities
- **Open Hardware Repository**: https://www.ohwr.org/ - CERN-hosted hardware projects
- **Hackaday.io**: https://hackaday.io/ - Community of hardware hackers
- **Instructables**: https://www.instructables.com/ - DIY project sharing
- **Thingiverse**: https://www.thingiverse.com/ - 3D printable designs

---

## Statistics Summary

### Citizen Science Impact
- **Zooniverse**: Millions of volunteers across 65+ active projects
- **Einstein@Home**: Hundreds of thousands of volunteers
- **GLOBE Program**: 283+ million measurements from 127 countries
- **Gravity Spy**: Identified new glitch classes, contributed to 250+ gravitational wave detections
- **Folding@Home**: ExaFLOP-scale distributed supercomputer during COVID-19

### Open Hardware Reach
- **Cosmic Pi**: 22+ million cosmic rays detected
- **Foldscope**: 2+ million users worldwide
- **openQCM**: Used in 50+ countries, 300+ citations
- **Red Pitaya**: Used by NASA, CERN, universities globally

---

*Compiled: February 2026*

*This document is a living resource. URLs and project status may change over time. Please verify current information through the provided links.*
