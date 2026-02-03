<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-950 via-space-900 to-indigo-950 pb-16 pt-32">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div class="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cyan-400/5 blur-2xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-blue-300 ring-1 ring-blue-500/30">
              <Icon name="laptop" class="w-6 h-6" />
              <span class="text-sm font-medium">Technology</span>
            </div>
            
            <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Computer Science
            </h1>
            
            <p class="mb-8 text-lg text-slate-300">
              The study of computation, algorithms, programming, and information. 
              From your first "Hello World" to distributed systems architecture, 
              master the fundamentals and advanced concepts that power our digital world.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
                <div class="text-2xl font-bold text-blue-400">3,000+</div>
                <div class="text-xs text-slate-400">Resources</div>
              </div>
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
                <div class="text-2xl font-bold text-blue-400">All Levels</div>
                <div class="text-xs text-slate-400">Beginner to PhD</div>
              </div>
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20">
                <div class="text-2xl font-bold text-blue-400">195+</div>
                <div class="text-xs text-slate-400">Countries</div>
              </div>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="mt-10 lg:mt-0">
            <div class="rounded-2xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
              <h3 class="mb-4 font-semibold text-white">Quick Navigation</h3>
              <div class="flex flex-wrap gap-2">
                <a href="#k12" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">K-12</a>
                <a href="#beginner" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Beginner</a>
                <a href="#intermediate" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Intermediate</a>
                <a href="#advanced" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Advanced</a>
                <a href="#courses" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Courses</a>
                <a href="#textbooks" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Textbooks</a>
                <a href="#youtube" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">YouTube</a>
                <a href="#careers" class="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30 transition-colors hover:bg-blue-500/20">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- K-12 Section -->
    <section id="k12" class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">K-12 Computer Science</h2>
          <p class="mt-2 text-slate-400">
            Resources for elementary, middle, and high school students
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Code.org -->
          <a href="https://code.org/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="gamepad" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">Code.org</h3>
            <p class="text-sm text-slate-400">Free coding curriculum for K-12 with Hour of Code activities, CS Fundamentals, and AP CS Principles.</p>
          </a>
          
          <!-- Scratch -->
          <a href="https://scratch.mit.edu/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="brain" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">Scratch</h3>
            <p class="text-sm text-slate-400">Visual programming language from MIT for ages 8-16. Create stories, games, and animations.</p>
          </a>
          
          <!-- Khan Academy -->
          <a href="https://www.khanacademy.org/computing" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="book-open" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">Khan Academy</h3>
            <p class="text-sm text-slate-400">Free courses in computer programming, computer science principles, and AP CSP.</p>
          </a>
          
          <!-- Blockly Games -->
          <a href="https://blockly.games/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="puzzle" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">Blockly Games</h3>
            <p class="text-sm text-slate-400">Educational games teaching programming concepts through puzzles and challenges.</p>
          </a>
          
          <!-- CS First -->
          <a href="https://csfirst.withgoogle.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="sparkles" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">CS First</h3>
            <p class="text-sm text-slate-400">Google's free computer science curriculum for elementary and middle school students.</p>
          </a>
          
          <!-- Tynker -->
          <a href="https://www.tynker.com/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20 transition-all hover:ring-blue-500/40">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="rocket" class="w-6 h-6 text-blue-400" /></div>
            <h3 class="mb-2 font-semibold text-white group-hover:text-blue-400">Tynker</h3>
            <p class="text-sm text-slate-400">Coding platform for kids with game-based learning and progression to real languages.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Beginner Resources -->
    <section id="beginner" class="relative border-t border-blue-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <span class="mb-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">Beginner Level</span>
          <h2 class="text-2xl font-bold text-white">Getting Started with Programming</h2>
          <p class="mt-2 text-slate-400">
            Your first steps into computer science - no prior experience needed
          </p>
        </div>
        
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Free Courses -->
          <div>
            <h3 class="mb-4 text-lg font-semibold text-white">Free Online Courses</h3>
            <div class="space-y-4">
              <a href="https://cs50.harvard.edu/x/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="graduation-cap" class="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 class="font-medium text-white">CS50: Introduction to Computer Science</h4>
                  <p class="text-sm text-slate-400">Harvard's legendary course - the best introduction to CS. Covers C, Python, SQL, HTML/CSS, and more.</p>
                </div>
              </a>
              
              <a href="https://www.freecodecamp.org/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="laptop" class="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 class="font-medium text-white">freeCodeCamp</h4>
                  <p class="text-sm text-slate-400">Completely free coding curriculum with certifications in web development, data science, and more.</p>
                </div>
              </a>
              
              <a href="https://www.theodinproject.com/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="globe" class="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 class="font-medium text-white">The Odin Project</h4>
                  <p class="text-sm text-slate-400">Free full-stack web development curriculum with hands-on projects and community support.</p>
                </div>
              </a>
              
              <a href="https://www.codecademy.com/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-blue-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10"><Icon name="book" class="w-5 h-5 text-blue-400" /></div>
                <div>
                  <h4 class="font-medium text-white">Codecademy</h4>
                  <p class="text-sm text-slate-400">Interactive coding lessons in Python, JavaScript, Java, and more. Free tier available.</p>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Programming Languages -->
          <div>
            <h3 class="mb-4 text-lg font-semibold text-white">Best First Programming Languages</h3>
            <div class="space-y-4">
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
                <div class="mb-2 flex items-center gap-2">
                  <Icon name="code" class="w-5 h-5 text-yellow-500" />
                  <h4 class="font-medium text-white">Python</h4>
                  <span class="ml-auto rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">Recommended</span>
                </div>
                <p class="text-sm text-slate-400">The most beginner-friendly language. Readable syntax, huge community, used in data science, AI, and web development.</p>
              </div>
              
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
                <div class="mb-2 flex items-center gap-2">
                  <Icon name="globe" class="w-5 h-5 text-yellow-500" />
                  <h4 class="font-medium text-white">JavaScript</h4>
                </div>
                <p class="text-sm text-slate-400">The language of the web. Essential for front-end development and increasingly used for back-end with Node.js.</p>
              </div>
              
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
                <div class="mb-2 flex items-center gap-2">
                  <Icon name="coffee" class="w-5 h-5 text-yellow-500" />
                  <h4 class="font-medium text-white">Java</h4>
                </div>
                <p class="text-sm text-slate-400">Great for learning object-oriented programming. Used in enterprise, Android development, and academic settings.</p>
              </div>
              
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20">
                <div class="mb-2 flex items-center gap-2">
                  <Icon name="package" class="w-5 h-5 text-yellow-500" />
                  <h4 class="font-medium text-white">C</h4>
                </div>
                <p class="text-sm text-slate-400">The foundational language. Harder to learn but gives deep understanding of how computers work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Textbooks - Beginner -->
    <section id="textbooks" class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Recommended Textbooks</h2>
          <p class="mt-2 text-slate-400">
            Classic and modern texts for learning computer science
          </p>
        </div>
        
        <!-- Beginner Textbooks -->
        <div class="mb-8">
          <h3 class="mb-4 text-lg font-semibold text-green-400">Beginner Level</h3>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">Python</div>
              <h4 class="font-medium text-white">Automate the Boring Stuff</h4>
              <p class="text-sm text-slate-400">Al Sweigart - Practical programming for total beginners. Free online.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">Python</div>
              <h4 class="font-medium text-white">Python Crash Course</h4>
              <p class="text-sm text-slate-400">Eric Matthes - Hands-on, project-based introduction to Python.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">General CS</div>
              <h4 class="font-medium text-white">Grokking Algorithms</h4>
              <p class="text-sm text-slate-400">Aditya Bhargava - Illustrated guide to algorithms with Python examples.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">JavaScript</div>
              <h4 class="font-medium text-white">Eloquent JavaScript</h4>
              <p class="text-sm text-slate-400">Marijn Haverbeke - Modern introduction to programming. Free online.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">General</div>
              <h4 class="font-medium text-white">How to Design Programs</h4>
              <p class="text-sm text-slate-400">Felleisen et al. - Teaches fundamentals of programming design. Free.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <div class="mb-2 text-xs text-slate-500">C</div>
              <h4 class="font-medium text-white">C Programming Language (K&R)</h4>
              <p class="text-sm text-slate-400">Kernighan & Ritchie - The definitive C reference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Intermediate Resources -->
    <section id="intermediate" class="relative border-t border-blue-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <span class="mb-2 inline-block rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">Intermediate Level</span>
          <h2 class="text-2xl font-bold text-white">Deepening Your Knowledge</h2>
          <p class="mt-2 text-slate-400">
            Data structures, algorithms, and software engineering principles
          </p>
        </div>
        
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Data Structures & Algorithms -->
          <div>
            <h3 class="mb-4 text-lg font-semibold text-white">Data Structures & Algorithms</h3>
            <div class="space-y-4">
              <a href="https://www.coursera.org/specializations/data-structures-algorithms" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10"><Icon name="bar-chart-3" class="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <h4 class="font-medium text-white">Data Structures & Algorithms Specialization</h4>
                  <p class="text-sm text-slate-400">UC San Diego on Coursera - Comprehensive algorithmic toolbox with programming challenges.</p>
                </div>
              </a>
              
              <a href="https://leetcode.com/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10"><Icon name="trophy" class="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <h4 class="font-medium text-white">LeetCode</h4>
                  <p class="text-sm text-slate-400">Platform for practicing coding interview problems with thousands of algorithm challenges.</p>
                </div>
              </a>
              
              <a href="https://visualgo.net/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10"><Icon name="eye" class="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <h4 class="font-medium text-white">VisuAlgo</h4>
                  <p class="text-sm text-slate-400">Visualizing data structures and algorithms through animation. Created at NUS.</p>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Software Engineering -->
          <div>
            <h3 class="mb-4 text-lg font-semibold text-white">Software Engineering</h3>
            <div class="space-y-4">
              <a href="https://missing.csail.mit.edu/" target="_blank" class="flex items-start gap-4 rounded-xl bg-space-800/50 p-4 ring-1 ring-yellow-500/20 transition-all hover:bg-space-800">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10"><Icon name="wrench" class="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <h4 class="font-medium text-white">The Missing Semester</h4>
                  <p class="text-sm text-slate-400">MIT course on practical computing skills: command line, version control, debugging, and more.</p>
                </div>
              </a>
              
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
                <div class="mb-2 text-xs text-slate-500">Book</div>
                <h4 class="font-medium text-white">Clean Code</h4>
                <p class="text-sm text-slate-400">Robert C. Martin - Essential guide to writing maintainable, readable code.</p>
              </div>
              
              <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
                <div class="mb-2 text-xs text-slate-500">Book</div>
                <h4 class="font-medium text-white">Design Patterns</h4>
                <p class="text-sm text-slate-400">Gang of Four - Classic patterns for object-oriented design.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Intermediate Textbooks -->
        <div class="mt-8">
          <h3 class="mb-4 text-lg font-semibold text-yellow-400">Intermediate Textbooks</h3>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <h4 class="font-medium text-white">Introduction to Algorithms (CLRS)</h4>
              <p class="text-sm text-slate-400">The definitive algorithms reference book.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <h4 class="font-medium text-white">Cracking the Coding Interview</h4>
              <p class="text-sm text-slate-400">Gayle McDowell - 189 programming questions and solutions.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <h4 class="font-medium text-white">Head First Design Patterns</h4>
              <p class="text-sm text-slate-400">Visual, engaging introduction to design patterns.</p>
            </div>
            <div class="rounded-xl bg-space-800/50 p-4 ring-1 ring-slate-700">
              <h4 class="font-medium text-white">Computer Systems: A Programmer's Perspective</h4>
              <p class="text-sm text-slate-400">Deep dive into how hardware and software interact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Resources -->
    <section id="advanced" class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <span class="mb-2 inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">Advanced Level</span>
          <h2 class="text-2xl font-bold text-white">Advanced Topics</h2>
          <p class="mt-2 text-slate-400">
            Graduate-level computer science and specialized domains
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Operating Systems -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="monitor" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Operating Systems</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>OSTEP</strong> - Free book on operating systems</li>
              <li>• <strong>MIT 6.828</strong> - OS Engineering with xv6</li>
              <li>• <strong>Linux Kernel</strong> - Documentation and source</li>
            </ul>
          </div>
          
          <!-- Databases -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="database" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Database Systems</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>CMU 15-445</strong> - Database Systems</li>
              <li>• <strong>Readings in Database Systems</strong> (Red Book)</li>
              <li>• <strong>Designing Data-Intensive Applications</strong> (Martin Kleppmann)</li>
            </ul>
          </div>
          
          <!-- Distributed Systems -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="globe2" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Distributed Systems</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>MIT 6.824</strong> - Distributed Systems</li>
              <li>• <strong>Designing Distributed Systems</strong></li>
              <li>• <strong>Distributed Systems for Fun and Profit</strong> (Free book)</li>
            </ul>
          </div>
          
          <!-- Compilers -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="settings" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Compilers</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>Stanford CS143</strong> - Compilers</li>
              <li>• <strong>Dragon Book</strong> - Compilers: Principles, Techniques</li>
              <li>• <strong>Crafting Interpreters</strong> - Free book by Bob Nystrom</li>
            </ul>
          </div>
          
          <!-- Computer Networks -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="zap" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Computer Networks</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>Stanford CS144</strong> - Computer Networking</li>
              <li>• <strong>Computer Networking: A Top-Down Approach</strong></li>
              <li>• <strong>Beej's Guide to Network Programming</strong></li>
            </ul>
          </div>
          
          <!-- Theory -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-red-500/20">
            <Icon name="calculator" class="w-8 h-8 mb-4 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Theory of Computation</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              <li>• <strong>MIT 6.045</strong> - Automata, Computability, Complexity</li>
              <li>• <strong>Introduction to the Theory of Computation</strong> (Sipser)</li>
              <li>• <strong>The Nature of Computation</strong> (Moore & Mertens)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- YouTube Channels -->
    <section id="youtube" class="relative border-t border-blue-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Best YouTube Channels</h2>
          <p class="mt-2 text-slate-400">
            Free video tutorials and lectures from top educators
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a href="https://www.youtube.com/@freecodecamp" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="video" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">freeCodeCamp</h3>
            <p class="text-sm text-slate-400">Full courses on every programming topic imaginable.</p>
          </a>
          
          <a href="https://www.youtube.com/@TraversyMedia" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="laptop" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">Traversy Media</h3>
            <p class="text-sm text-slate-400">Practical web development tutorials and crash courses.</p>
          </a>
          
          <a href="https://www.youtube.com/@TheCodingTrain" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="rocket" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">The Coding Train</h3>
            <p class="text-sm text-slate-400">Creative coding with p5.js, Processing, and more.</p>
          </a>
          
          <a href="https://www.youtube.com/@3blue1brown" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="calculator" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">3Blue1Brown</h3>
            <p class="text-sm text-slate-400">Beautiful visualizations of math and algorithms.</p>
          </a>
          
          <a href="https://www.youtube.com/@cs50" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="graduation-cap" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">CS50</h3>
            <p class="text-sm text-slate-400">Harvard's computer science courses and lectures.</p>
          </a>
          
          <a href="https://www.youtube.com/@Fireship" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="flame" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">Fireship</h3>
            <p class="text-sm text-slate-400">Quick, high-intensity tech tutorials and explainers.</p>
          </a>
          
          <a href="https://www.youtube.com/@NeetCode" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="target" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">NeetCode</h3>
            <p class="text-sm text-slate-400">LeetCode explanations and interview prep.</p>
          </a>
          
          <a href="https://www.youtube.com/@MITOpenCourseWare" target="_blank" class="group rounded-xl bg-space-800/50 p-4 ring-1 ring-red-600/30 transition-all hover:bg-space-800">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20"><Icon name="landmark" class="w-6 h-6 text-red-400" /></div>
            <h3 class="font-semibold text-white group-hover:text-red-400">MIT OCW</h3>
            <p class="text-sm text-slate-400">Full MIT computer science lectures.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Careers -->
    <section id="careers" class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Career Paths</h2>
          <p class="mt-2 text-slate-400">
            What you can do with a computer science education
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 ring-1 ring-blue-500/20">
            <Icon name="laptop" class="w-8 h-8 mb-3 text-blue-400" />
            <h3 class="mb-2 font-semibold text-white">Software Engineer</h3>
            <p class="text-sm text-slate-400">Build applications, systems, and infrastructure at tech companies.</p>
            <div class="mt-3 text-xs text-cyan-400">$70k - $250k+</div>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 ring-1 ring-purple-500/20">
            <Icon name="bot" class="w-8 h-8 mb-3 text-purple-400" />
            <h3 class="mb-2 font-semibold text-white">AI/ML Engineer</h3>
            <p class="text-sm text-slate-400">Develop machine learning models and AI systems.</p>
            <div class="mt-3 text-xs text-purple-400">$100k - $300k+</div>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 ring-1 ring-red-500/20">
            <Icon name="lock" class="w-8 h-8 mb-3 text-red-400" />
            <h3 class="mb-2 font-semibold text-white">Security Engineer</h3>
            <p class="text-sm text-slate-400">Protect systems and data from cyber threats.</p>
            <div class="mt-3 text-xs text-red-400">$80k - $200k+</div>
          </div>
          
          <div class="rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 ring-1 ring-emerald-500/20">
            <Icon name="bar-chart-3" class="w-8 h-8 mb-3 text-emerald-400" />
            <h3 class="mb-2 font-semibold text-white">Data Scientist</h3>
            <p class="text-sm text-slate-400">Analyze data and build predictive models.</p>
            <div class="mt-3 text-xs text-emerald-400">$90k - $250k+</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative border-t border-blue-500/10 py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Your Computer Science Journey
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          Whether you're completely new to coding or looking to advance your skills, 
          there's a resource here for you. Start with CS50 or freeCodeCamp and build 
          from there.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://cs50.harvard.edu/x/"
            target="_blank"
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            Start with CS50
          </a>
          <a 
            href="https://www.freecodecamp.org/"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Try freeCodeCamp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('computer-science')

useHead({
  title: 'Computer Science - Programming, Algorithms, CS Fundamentals | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Master computer science with 3,000+ free resources. From CS50 and MIT courses to programming tutorials, algorithms, data structures, and software engineering.' 
    }
  ]
})
</script>
