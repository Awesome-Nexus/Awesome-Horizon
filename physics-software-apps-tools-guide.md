# Comprehensive Guide to Physics Software, Apps, and Computational Tools

A deep research compilation of software tools, programming languages, simulation platforms, and applications used in physics research, education, and computation.

---

## 1. Programming Languages for Physics

### Python Ecosystem
Python has become the dominant language in scientific computing due to its ease of use and extensive libraries.

#### NumPy
- **URL**: https://numpy.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - N-dimensional array object (ndarray)
  - Broadcasting functions
  - Linear algebra, Fourier transforms, random number generation
  - Foundation for the entire Python scientific stack
  - Integrates with C/C++ and Fortran code
  - Used by nearly every scientist working in Python

#### SciPy
- **URL**: https://scipy.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Algorithms for optimization, integration, interpolation
  - Eigenvalue problems, algebraic equations
  - Differential equations, statistics
  - Signal and image processing
  - Wraps highly-optimized C, C++, and Fortran implementations
  - Extends NumPy with additional tools for array computing

#### Matplotlib
- **URL**: https://matplotlib.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Publication-quality static, animated, and interactive visualizations
  - Multiple export formats (PNG, PDF, SVG, etc.)
  - Embeddable in JupyterLab and GUIs
  - Rich array of third-party packages built on top (Seaborn, Cartopy, etc.)
  - Object-oriented and MATLAB-style interfaces

#### SymPy
- **URL**: https://www.sympy.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Pure Python computer algebra system (CAS)
  - Symbolic mathematics: algebra, calculus, discrete math
  - Equation solving, matrix operations
  - Physics module with mechanics, quantum, and units support
  - Code generation (C, Fortran, Julia)

#### Pandas
- **URL**: https://pandas.pydata.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Data structures for tabular and time-series data
  - Data manipulation and analysis tools
  - Missing data handling
  - Merging, joining, reshaping datasets
  - Essential for experimental data analysis

#### Xarray
- **URL**: https://xarray.dev/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Labeled multi-dimensional arrays
  - Built on top of NumPy and Pandas
  - Support for netCDF and other scientific formats
  - Ideal for geospatial and climate data
  - Integration with Dask for parallel computing

---

### Julia
- **URL**: https://julialang.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - High-performance JIT compilation via LLVM
  - Dynamic typing with optional type annotations
  - Multiple dispatch paradigm
  - Built-in parallelism (multi-threading, GPU, distributed)
  - Interoperability with Python, R, C, Fortran
  - **JuliaPhysics** ecosystem for physics applications
  - Celeste.jl achieved 1.5 PetaFLOP/s on 650,000 cores
  - Packages: DifferentialEquations.jl, Flux.jl, JuMP.jl

---

### MATLAB
- **URL**: https://www.mathworks.com/products/matlab.html
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Matrix-based programming language
  - Live Editor for executable notebooks
  - Interactive apps for algorithm exploration
  - Toolboxes for signal processing, control systems, image processing
  - Parallel computing on clusters, GPUs, clouds
  - Simulink integration for model-based design
  - Industry standard in engineering and physics education

---

### Mathematica
- **URL**: https://www.wolfram.com/mathematica/
- **Platforms**: Windows, macOS, Linux, Web (Wolfram Cloud)
- **Key Features**:
  - 6,000+ built-in functions
  - Symbolic and numerical computation
  - Wolfram Language for technical computing
  - Notebook interface with rich documents
  - Access to Wolfram Knowledgebase
  - Machine learning and neural networks
  - 150,000+ documentation examples
  - Cloud integration for sharing and computation

---

### Maple
- **URL**: https://www.maplesoft.com/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Symbolic and numeric computation
  - Mathematical equation solving
  - Technical document environment
  - Code generation (C, Java, Python, MATLAB)
  - Specialized packages for physics (PDEtools, Physics)
  - Student packages for education

---

### R
- **URL**: https://www.r-project.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Statistical computing and graphics
  - Extensive package ecosystem (CRAN)
  - Publication-quality plots
  - Data manipulation (dplyr, tidyr)
  - Used in biophysics, statistical mechanics, data analysis

---

### Fortran
- **URL**: https://fortran-lang.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Still widely used in high-performance physics simulations
  - Native array operations
  - Coarrays for parallel programming
  - Modern Fortran (2018, 2023 standards)
  - Foundation of many legacy physics codes
  - Used in climate models, astrophysics, CFD

---

### C/C++
- **Key Features**:
  - Low-level performance for compute-intensive simulations
  - Object-oriented design (C++)
  - Template metaprogramming
  - Standard Template Library (STL)
  - Used for: ROOT (CERN), Geant4, game physics engines
  - Essential for GPU programming (CUDA, OpenCL)

---

## 2. Physics Simulation Software

### Computational Fluid Dynamics (CFD)

#### OpenFOAM
- **URL**: https://openfoam.org/
- **Platforms**: Linux (native), Windows (WSL), macOS (Multipass)
- **Key Features**:
  - Free, open-source CFD software
  - 1.5 million lines of C++ code
  - Solves fluid motion, heat transfer, thermodynamics, chemistry
  - Applications: chemical engineering, civil engineering, mechanical engineering
  - Used for Net Zero technology development
  - GPL v3 licensed

#### SU2
- **URL**: https://su2code.github.io/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source CFD and shape optimization
  - 2D/3D compressible/incompressible flows
  - Turbulence modeling
  - Adjoint-based optimization
  - Multiphysics (fluid-structure interaction)

#### FEniCS
- **URL**: https://fenicsproject.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source finite element library
  - High-level Python and C++ interfaces
  - Automated solution of partial differential equations (PDEs)
  - Parallel computing support
  - Used for solid mechanics, fluid dynamics, electromagnetics

#### deal.II
- **URL**: https://www.dealii.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - C++ library for finite element computations
  - Adaptive mesh refinement
  - Parallel computing with MPI
  - Extensive documentation and tutorials
  - Used in solid mechanics, fluid dynamics, quantum mechanics

---

### Electromagnetics

#### Meep
- **URL**: https://meep.readthedocs.io/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Free finite-difference time-domain (FDTD) simulation software
  - Models electromagnetic systems
  - Python and Scheme interfaces
  - Parallel computing support
  - Used for photonics, metamaterials, antennas

#### gprMax
- **URL**: https://www.gprmax.com/
- **GitHub**: https://github.com/gprMax/gprMax
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Electromagnetic wave propagation simulator
  - FDTD method for Ground Penetrating Radar (GPR)
  - Python 3 with Cython performance parts
  - CPU (OpenMP) and GPU (CUDA) solvers
  - GPL v3+ licensed

#### OpenEMS
- **URL**: https://openems.de/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source electromagnetic field solver
  - FDTD method
  - Octave/MATLAB and Python interfaces
  - Visualization using ParaView
  - Used for antennas, MRI, microwave circuits

#### COMSOL Multiphysics
- **URL**: https://www.comsol.com/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Commercial finite element simulation software
  - AC/DC Module, RF Module, Wave Optics Module
  - Multiphysics coupling capabilities
  - CAD integration
  - Application builder for custom interfaces

---

### Molecular Dynamics

#### LAMMPS
- **URL**: https://www.lammps.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Large-scale Atomic/Molecular Massively Parallel Simulator
  - Classical molecular dynamics for materials modeling
  - Solid-state materials and soft matter support
  - Parallel computing with MPI and OpenMP
  - GPU acceleration support
  - Extensible with packages (BPM, RHEO, etc.)
  - Open source (GPLv2)

#### GROMACS
- **URL**: https://www.gromacs.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - High-performance molecular dynamics
  - Optimized for biomolecular simulations (proteins, lipids, nucleic acids)
  - Industry-standard for computational chemistry
  - SIMD optimizations for various architectures
  - Free and open source

#### NAMD
- **URL**: https://www.ks.uiuc.edu/Research/namd/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Parallel molecular dynamics code
  - Designed for high-performance simulation of large biomolecular systems
  - Scales to hundreds of millions of atoms
  - GPU acceleration support
  - Works with VMD for visualization
  - Free for academic use

#### OpenMM
- **URL**: https://openmm.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - High-performance toolkit for molecular simulation
  - Library or application usage
  - Language bindings: Python, C, C++, Fortran
  - GPU acceleration (CUDA, OpenCL)
  - Custom force field support
  - MIT/LGPL licensed

#### AMBER
- **URL**: https://ambermd.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Assisted Model Building with Energy Refinement
  - Force fields for biomolecular simulation
  - Molecular dynamics and energy minimization
  - MM/PBSA and MM/GBSA binding free energy calculations
  - Distributed as AmberTools (free) and Amber (licensed)

---

### Quantum Chemistry

#### Quantum ESPRESSO
- **URL**: https://www.quantum-espresso.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source electronic structure calculations
  - Density Functional Theory (DFT) with plane waves
  - Core packages: PWscf, CP (Car-Parrinello)
  - Specialized packages: PHonon, TD-DFPT, EPW
  - GPU support (NVIDIA, AMD)
  - Parallel execution with MPI and OpenMP

#### VASP
- **URL**: https://www.vasp.at/
- **Platforms**: Linux (primarily)
- **Key Features**:
  - Vienna Ab initio Simulation Package
  - DFT calculations for materials
  - Plane-wave basis sets
  - Hybrid functionals, GW, RPA
  - Commercial software (academic licenses available)
  - Py4VASP Python interface

#### Gaussian
- **URL**: https://gaussian.com/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Commercial quantum chemistry software
  - Wide range of methods (HF, DFT, MP2, CC, CI)
  - Excited state calculations
  - ONIOM multilayer calculations
  - Vibrational analysis, NMR predictions
  - Industry standard for computational chemistry

#### ORCA
- **URL**: https://orcaforum.kofo.mpg.de/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Free quantum chemistry program
  - DFT, MP2, coupled-cluster methods
  - Excited states, spectroscopy predictions
  - Relativistic methods
  - Parallel computing support
  - Popular in academic research

---

### Astrophysics

#### Gadget
- **URL**: https://gitlab.mpcdf.mpg.de/vrs/gadget4
- **Platforms**: Linux, macOS
- **Key Features**:
  - Cosmological N-body and SPH simulation code
  - Used for galaxy formation and cosmology
  - MPI parallelization
  - Sophisticated tree algorithms
  - Version 4 is the current stable release

#### GIZMO
- **URL**: http://www.tapir.caltech.edu/~phopkins/Site/GIZMO.html
- **Platforms**: Linux, macOS
- **Key Features**:
  - Flexible multi-method magnetohydrodynamics+gravity code
  - Meshless finite-mass/mass-moving/volume methods
  - Cosmological simulations
  - Star formation and feedback models

#### AREPO
- **URL**: https://arepo-code.org/
- **Platforms**: Linux
- **Key Features**:
  - Moving-mesh hydrodynamical simulation code
  - Voronoi tessellation
  - Ideal for galaxy formation
  - Developed by the Max Planck Institute

#### Enzo
- **URL**: https://enzo-project.org/
- **Platforms**: Linux, macOS
- **Key Features**:
  - Adaptive mesh refinement (AMR) cosmology code
  - Multi-physics hydrodynamics
  - Community-developed open source
  - Runs from laptops to Top500 supercomputers
  - Star formation, radiation transport

#### FLASH
- **URL**: https://flash.uchicago.edu/
- **Platforms**: Linux
- **Key Features**:
  - AMR code for astrophysical fluid dynamics
  - Developed by University of Chicago
  - Support for nuclear burning
  - Magnetohydrodynamics (MHD)
  - Used for supernovae, stellar evolution

#### PLUTO
- **URL**: http://plutocode.ph.unito.it/
- **GitHub**: https://github.com/PLUTO-code
- **Platforms**: Linux, macOS
- **Key Features**:
  - Godunov-type code for computational astrophysics
  - HD, MHD, relativistic MHD
  - Adaptive mesh refinement
  - Parallel computing support

---

### Particle Physics

#### ROOT
- **URL**: https://root.cern/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Data analysis framework from CERN
  - C++ interpreter (Cling)
  - Python bindings (PyROOT)
  - Histogramming, fitting, minimization
  - I/O for large datasets
  - Geometry and detector description
  - Standard in high-energy physics

#### Geant4
- **URL**: https://geant4.web.cern.ch/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Toolkit for particle passage through matter
  - Monte Carlo simulation
  - Geometry, tracking, physics processes
  - Visualization capabilities
  - Used in HEP, nuclear, medical, space physics
  - Open source C++

#### MadGraph
- **URL**: https://launchpad.net/mg5amcnlo
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Matrix element and event generator
  - Automatic generation of matrix elements
  - Monte Carlo event generation
  - NLO calculations
  - Parton shower integration

#### Pythia
- **URL**: https://pythia.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Event generator for particle physics
  - Parton showers, hadronization, decay
  - Underlying event modeling
  - Interfaces to other generators
  - Standard for collider physics

#### Delphes
- **URL**: https://delphes.github.io/
- **GitHub**: https://github.com/delphes/delphes
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Fast detector simulation framework
  - Parametrized detector response
  - Input: HepMC, Output: ROOT
  - Cards for ATLAS, CMS, etc.
  - Conda installation available

---

## 3. Physics Engines

### 3D Physics Engines

#### Bullet
- **URL**: https://pybullet.org/ (PyBullet)
- **GitHub**: https://github.com/bulletphysics/bullet3
- **Platforms**: Windows, macOS, Linux, iOS, Android
- **Key Features**:
  - Real-time collision detection
  - Rigid and soft body dynamics
  - VR, robotics, machine learning applications
  - PyBullet Python bindings
  - GPU acceleration (OpenCL)
  - zlib license

#### PhysX
- **URL**: https://github.com/NVIDIA-Omniverse/PhysX
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - NVIDIA physics engine
  - Rigid body dynamics, cloth, fluids
  - GPU acceleration (CUDA)
  - Used in games, simulations, robotics
  - Open source (BSD-3)
  - Integrated with NVIDIA Omniverse

#### MuJoCo
- **URL**: https://mujoco.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Multi-Joint dynamics with Contact
  - Model-based optimization focus
  - Inverse dynamics with contacts
  - XML model format (MJCF)
  - Cross-platform GUI with OpenGL
  - Free and open source
  - DeepMind robotics standard

#### Jolt
- **URL**: https://github.com/jrouwe/JoltPhysics
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Modern C++ physics engine
  - Deterministic simulations
  - Multi-threaded architecture
  - Used in games (Horizon Forbidden West)
  - MIT licensed

#### ODE (Open Dynamics Engine)
- **URL**: https://www.ode.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Rigid body dynamics library
  - Collision detection with friction
  - Joint types: ball, hinge, slider, universal
  - C/C++ API
  - Used in games, VR, simulation tools
  - Dual-licensed (LGPL/BSD)

---

### 2D Physics Engines

#### Box2D
- **URL**: https://box2d.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - 2D physics engine for games
  - Rigid bodies, joints, contacts
  - Continuous collision detection
  - Used in Angry Birds, many other games
  - C++ library with language bindings

#### Chipmunk2D
- **URL**: https://chipmunk-physics.net/
- **Platforms**: Windows, macOS, Linux, iOS, Android
- **Key Features**:
  - Fast 2D physics library
  - Rigid body simulation
  - Spatial indexing for collision detection
  - C library with bindings
  - MIT licensed

---

### Game Engines with Physics

#### Unity
- **URL**: https://unity.com/
- **Platforms**: Windows, macOS, Linux (Editor); 25+ end-user platforms
- **Key Features**:
  - Built-in NVIDIA PhysX integration
  - 2D and 3D physics
  - Visual scripting and C# programming
  - Real-time rendering
  - Particle systems
  - 3.6B+ monthly downloads of Unity apps

#### Unreal Engine
- **URL**: https://www.unrealengine.com/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Chaos physics engine
  - NVIDIA PhysX (legacy)
  - Destruction simulation
  - Cloth and fluid simulation
  - Blueprint visual scripting
  - C++ programming

#### Godot
- **URL**: https://godotengine.org/
- **Platforms**: Windows, macOS, Linux, mobile, web
- **Key Features**:
  - Built-in 2D and 3D physics
  - Bullet integration for 3D
  - Custom physics engine for 2D
  - GDScript, C#, C++ programming
  - Open source (MIT license)

---

## 4. Quantum Computing SDKs

#### Qiskit (IBM)
- **URL**: https://qiskit.org/
- **Platforms**: Windows, macOS, Linux, Cloud
- **Key Features**:
  - IBM's quantum SDK
  - World's fastest transpiler (83x faster)
  - Circuit optimization and execution
  - Quantum algorithms library
  - Access to IBM Quantum systems
  - Open source (Apache 2.0)

#### Cirq (Google)
- **URL**: https://quantumai.google/cirq
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Python library for quantum circuits
  - NISQ-focused design
  - Built-in simulators
  - Qsim high-performance simulator
  - Quantum Virtual Machine (QVM)
  - Access to Google quantum processors

#### PennyLane (Xanadu)
- **URL**: https://pennylane.ai/
- **Platforms**: Windows, macOS, Linux, Cloud
- **Key Features**:
  - Quantum machine learning library
  - Automatic differentiation
  - Hybrid quantum-classical computations
  - Integration: PyTorch, TensorFlow, JAX
  - Device plugins for various hardware
  - Quantum chemistry module

#### QuTiP
- **URL**: https://qutip.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Quantum Toolbox in Python
  - Open quantum systems dynamics
  - Master equation solvers
  - Monte Carlo methods
  - Quantum optics applications
  - 1M+ downloads

#### Q# (Microsoft)
- **URL**: https://github.com/microsoft/qsharp
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Domain-specific language for quantum computing
  - Integration with .NET ecosystem
  - Quantum Resource Estimator
  - Jupyter Notebook support
  - VS Code extension
  - High-level quantum programming

#### Amazon Braket
- **URL**: https://aws.amazon.com/braket/
- **Platforms**: Cloud-based
- **Key Features**:
  - AWS quantum computing service
  - Access to multiple hardware types:
    - Superconducting (Rigetti, IQM)
    - Trapped ion (IonQ, AQT)
    - Neutral atom (QuEra)
  - Managed simulators
  - Hybrid job execution

#### ProjectQ
- **URL**: https://github.com/ProjectQ-Framework/ProjectQ
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source quantum framework
  - Hardware-agnostic compiler
  - High-performance simulator
  - Resource counter backend
  - IBM, AQT, AWS Braket, Azure backends
  - Apache 2.0 license

---

## 5. Data Analysis Tools

#### Jupyter/JupyterLab
- **URL**: https://jupyter.org/
- **Platforms**: Windows, macOS, Linux, Web
- **Key Features**:
  - Interactive computing notebooks
  - Support for 40+ programming languages
  - Live code, equations, visualizations
  - Widgets for interactivity
  - JupyterHub for multi-user deployments
  - Open document format (JSON)

#### Google Colab
- **URL**: https://colab.research.google.com/
- **Platforms**: Web-based
- **Key Features**:
  - Free cloud Jupyter notebooks
  - Free GPU and TPU access
  - Integration with Google Drive
  - Pre-installed scientific libraries
  - Easy sharing and collaboration
  - No local setup required

#### Observable
- **URL**: https://observablehq.com/
- **Platforms**: Web-based
- **Key Features**:
  - JavaScript-based notebooks
  - Data visualization focus
  - Database connections (Snowflake, DuckDB, Postgres)
  - AI-assisted chart building
  - Embeddable visualizations
  - Collaborative canvas

#### ROOT (CERN)
- **URL**: https://root.cern/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - High-energy physics data analysis
  - Histogram and graph plotting
  - Statistical analysis
  - Machine learning (TMVA)
  - Python and C++ interfaces
  - Standard in particle physics

#### OriginPro
- **URL**: https://www.originlab.com/
- **Platforms**: Windows
- **Key Features**:
  - Professional scientific graphing
  - Data analysis and statistics
  - Curve fitting (nonlinear regression)
  - Signal processing
  - 1M+ registered users worldwide
  - Industry standard for publications

#### Igor Pro
- **URL**: https://www.wavemetrics.com/
- **Platforms**: Windows, macOS
- **Key Features**:
  - Technical graphing and data analysis
  - Built-in programming language
  - Image processing capabilities
  - Hardware device interfacing
  - Used in leading research institutes
  - Custom GUI development

---

## 6. Visualization Tools

#### ParaView
- **URL**: https://www.paraview.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open-source visualization application
  - Distributed memory parallel processing
  - Petascale data analysis
  - In-situ visualization (Catalyst)
  - Web visualization (trame)
  - 20+ years of development

#### VisIt
- **URL**: https://visit-dav.github.io/visit-website/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Scalable to >10^12 zone meshes
  - 130+ file formats supported
  - Parallel and distributed rendering
  - Python scripting interface
  - Open source (BSD)

#### VMD (Visual Molecular Dynamics)
- **URL**: https://www.ks.uiuc.edu/Research/vmd/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Molecular visualization
  - Biomolecular system analysis
  - 3D graphics and animation
  - Tcl/Python scripting
  - VR support
  - Free for academic use

#### OVITO
- **URL**: https://www.ovito.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Open Visualization Tool for particles
  - Scientific data analysis
  - High-quality rendering
  - Python scripting interface
  - OVITO Pro for advanced features
  - Used with LAMMPS, GROMACS

#### yt
- **URL**: https://yt-project.org/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Python package for volumetric data
  - Astrophysics focus
  - Support for multiple simulation codes
  - Volume rendering
  - Parallel analysis
  - Modified BSD license

---

## 7. Mobile Apps

#### Phyphox
- **URL**: https://phyphox.org/
- **Platforms**: iOS, Android
- **Key Features**:
  - Uses phone sensors for experiments
  - Accelerometer, gyroscope, magnetometer
  - Acoustic experiments (Doppler effect)
  - Data export in multiple formats
  - Remote control via web browser
  - Custom experiment creation
  - Award-winning educational tool

#### Physics Toolbox
- **URL**: https://www.vieyrasoftware.net/
- **Platforms**: iOS, Android
- **Key Features**:
  - Suite of sensor-based apps
  - Real-time data collection
  - Multiple sensor displays
  - CSV export
  - Various physics experiments

#### Brilliant
- **URL**: https://brilliant.org/
- **Platforms**: iOS, Android, Web
- **Key Features**:
  - Interactive problem-solving
  - Physics, math, CS courses
  - Visual, interactive canvas
  - Personalized learning paths
  - 10M+ learners worldwide

#### WolframAlpha
- **URL**: https://www.wolframalpha.com/
- **Platforms**: iOS, Android, Web
- **Key Features**:
  - Computational knowledge engine
  - Physics calculations and formulas
  - Unit conversions
  - Equation solving
  - Step-by-step solutions

#### PhET
- **URL**: https://phet.colorado.edu/
- **Platforms**: iOS, Android, Web
- **Key Features**:
  - Interactive math and science simulations
  - Founded by Nobel Laureate Carl Wieman
  - Research-based educational design
  - Game-like learning environment
  - 200+ simulations available

#### Star Walk / Stellarium
- **URL**: https://stellarium.org/
- **Platforms**: iOS, Android, Windows, macOS, Linux
- **Key Features**:
  - Free open-source planetarium
  - 600,000+ stars catalog
  - Realistic 3D sky rendering
  - Telescope control
  - Satellite tracking
  - Constellations from 40+ cultures

#### SkySafari
- **URL**: https://skysafariastronomy.com/
- **Platforms**: iOS, Android, macOS
- **Key Features**:
  - Professional astronomy app
  - Extensive object database
  - Telescope control
  - Augmented reality mode
  - Eclipse and event notifications

#### NASA App
- **URL**: https://www.nasa.gov/nasaapp
- **Platforms**: iOS, Android
- **Key Features**:
  - NASA mission updates
  - Space imagery and videos
  - Live satellite tracking
  - Launch notifications
  - Educational content

#### Exoplanet
- **URL**: https://exoplanet-app.com/
- **Platforms**: iOS
- **Key Features**:
  - Database of confirmed exoplanets
  - Interactive visualizations
  - Real-time updates
  - Star system simulations
  - Educational information

---

## 8. Lab Equipment Software

#### LabVIEW
- **URL**: https://www.ni.com/en-us/shop/labview.html
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Graphical programming environment
  - Instrument control (any vendor)
  - Data acquisition systems
  - Native UI for monitoring
  - Thousands of analysis functions
  - Industry standard for test automation

#### MATLAB Data Acquisition Toolbox
- **URL**: https://www.mathworks.com/products/data-acquisition.html
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Connect to DAQ devices
  - Analog and digital I/O
  - Signal generation
  - Hardware support for multiple vendors
  - Real-time analysis

#### Python with PyVISA
- **URL**: https://pyvisa.readthedocs.io/
- **Platforms**: Windows, macOS, Linux
- **Key Features**:
  - Python package for instrument control
  - VISA (Virtual Instrument Software Architecture)
  - Supports GPIB, RS232, USB, Ethernet
  - Works with NI, Agilent, Tektronix, SRS adapters
  - Cross-platform compatibility
  - Free and open source

---

## Additional Notable Tools

### SLEPc
- **URL**: https://slepc.upv.es/
- **Key Features**: Scalable Library for Eigenvalue Problem Computations, built on PETSc

### PETSc
- **URL**: https://petsc.org/
- **Key Features**: Portable Extensible Toolkit for Scientific Computation, parallel linear algebra

### FFTW
- **URL**: https://www.fftw.org/
- **Key Features**: Fastest Fourier Transform in the West, C library

### HDF5
- **URL**: https://www.hdfgroup.org/solutions/hdf5/
- **Key Features**: Hierarchical Data Format for large scientific datasets

### NetCDF
- **URL**: https://www.unidata.ucar.edu/software/netcdf/
- **Key Features**: Network Common Data Form for array-oriented scientific data

---

## Summary Table: Quick Reference

| Category | Tool | URL | Platform | License |
|----------|------|-----|----------|---------|
| Python | NumPy | numpy.org | All | BSD |
| Python | SciPy | scipy.org | All | BSD |
| Python | Matplotlib | matplotlib.org | All | PSF |
| Language | Julia | julialang.org | All | MIT |
| Language | MATLAB | mathworks.com | All | Commercial |
| Language | Mathematica | wolfram.com | All | Commercial |
| CFD | OpenFOAM | openfoam.org | Linux/WSL | GPL |
| MD | LAMMPS | lammps.org | All | GPL |
| MD | GROMACS | gromacs.org | All | LGPL |
| QChem | Quantum ESPRESSO | quantum-espresso.org | All | GPL |
| QChem | VASP | vasp.at | Linux | Commercial |
| Astro | Enzo | enzo-project.org | Linux | BSD |
| HEP | ROOT | root.cern | All | LGPL |
| HEP | Geant4 | geant4.web.cern.ch | All | Geant4 |
| 3D Physics | Bullet | pybullet.org | All | zlib |
| 3D Physics | MuJoCo | mujoco.org | All | Apache 2 |
| Quantum | Qiskit | qiskit.org | All | Apache 2 |
| Quantum | Cirq | quantumai.google/cirq | All | Apache 2 |
| Quantum | QuTiP | qutip.org | All | BSD |
| Viz | ParaView | paraview.org | All | BSD |
| Viz | VMD | ks.uiuc.edu/Research/vmd | All | Academic |
| Mobile | Phyphox | phyphox.org | iOS/Android | Free |
| Mobile | PhET | phet.colorado.edu | All | CC-BY |
| Lab | LabVIEW | ni.com/labview | All | Commercial |
| Lab | PyVISA | pyvisa.readthedocs.io | All | MIT |

---

*This guide was compiled in January 2026. URLs and features are subject to change. Please visit the official websites for the most up-to-date information.*
