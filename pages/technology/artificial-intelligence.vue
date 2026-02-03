<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-purple-950 via-space-900 to-indigo-950 pb-16 pt-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div class="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav :category="categoryInfo" :subject="subjectInfo" />
        
        <div class="text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-purple-300 ring-1 ring-purple-500/30">
            <Icon name="brain" :size="24" />
            <span class="text-sm font-medium">Technology</span>
          </div>
          
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Artificial Intelligence
          </h1>
          
          <p class="mx-auto max-w-3xl text-lg text-slate-300">
            Master machine learning, deep learning, neural networks, natural language processing, 
            and computer vision. From your first ML model to cutting-edge AI research.
          </p>
          
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">2,500+</div>
              <div class="text-xs text-slate-400">Resources</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">Intermediate</div>
              <div class="text-xs text-slate-400">Level</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">195+</div>
              <div class="text-xs text-slate-400">Countries</div>
            </div>
            <div class="rounded-2xl bg-space-800/50 p-4 ring-1 ring-purple-500/20">
              <div class="text-2xl font-bold text-purple-400">Fast.ai</div>
              <div class="text-xs text-slate-400">Top Course</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prerequisites -->
    <section class="relative border-t border-purple-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Prerequisites</h2>
          <p class="mt-2 text-slate-400">
            Foundation knowledge needed before diving into AI/ML
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="code" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Python Programming</h3>
            <p class="text-sm text-slate-400">
              Essential for AI/ML. Comfortable with NumPy, Pandas, and basic scripting.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="barchart" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Mathematics</h3>
            <p class="text-sm text-slate-400">
              Linear algebra, calculus, and statistics fundamentals. 
              <a href="https://www.3blue1brown.com/" target="_blank" class="text-purple-400 hover:underline">3Blue1Brown</a> is excellent.
            </p>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20">
            <div class="mb-4"><Icon name="cpu" :size="32" /></div>
            <h3 class="mb-2 font-semibold text-white">Programming Basics</h3>
            <p class="text-sm text-slate-400">
              Understanding of data structures, algorithms, and basic computer science concepts.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Courses -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Best AI/ML Courses</h2>
          <p class="mt-2 text-slate-400">
            Curated courses from top institutions and practitioners
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <!-- Fast.ai -->
          <a href="https://www.fast.ai/" target="_blank" class="group rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 ring-1 ring-purple-500/30 transition-all hover:ring-purple-500/50">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20"><Icon name="zap" :size="24" /></div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-purple-400">Fast.ai</h3>
                <div class="text-xs text-purple-400">Highly Recommended</div>
              </div>
            </div>
            <p class="mb-4 text-sm text-slate-300">
              "Practical Deep Learning for Coders" - The best starting point for deep learning. 
              Top-down approach gets you building models immediately. Free and world-class.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-purple-500/10 px-2 py-1 text-xs text-purple-300">Deep Learning</span>
              <span class="rounded-full bg-purple-500/10 px-2 py-1 text-xs text-purple-300">PyTorch</span>
              <span class="rounded-full bg-purple-500/10 px-2 py-1 text-xs text-purple-300">Free</span>
            </div>
          </a>
          
          <!-- Andrew Ng ML -->
          <a href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="book" :size="24" /></div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-purple-400">Machine Learning Specialization</h3>
                <div class="text-xs text-slate-500">DeepLearning.AI / Stanford</div>
              </div>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Andrew Ng's updated ML course. Covers supervised/unsupervised learning, 
              neural networks, and best practices. The gold standard for ML fundamentals.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">Machine Learning</span>
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">Certificate</span>
            </div>
          </a>
          
          <!-- CS229 -->
          <a href="https://cs229.stanford.edu/" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="school" :size="24" /></div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-purple-400">CS229: Machine Learning</h3>
                <div class="text-xs text-slate-500">Stanford</div>
              </div>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              Stanford's rigorous ML course with mathematical foundations. 
              Lecture videos, notes, and assignments all available free.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">Mathematical</span>
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">Free</span>
            </div>
          </a>
          
          <!-- Deep Learning Specialization -->
          <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" class="group rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="brain" :size="24" /></div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-purple-400">Deep Learning Specialization</h3>
                <div class="text-xs text-slate-500">DeepLearning.AI</div>
              </div>
            </div>
            <p class="mb-4 text-sm text-slate-400">
              5-course series covering neural networks, CNNs, RNNs, and transformers. 
              Build AI projects with Python and TensorFlow.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">Deep Learning</span>
              <span class="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">TensorFlow</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- NLP & Computer Vision -->
    <section class="relative border-t border-purple-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Specialized Tracks</h2>
          <p class="mt-2 text-slate-400">
            Advanced topics after mastering fundamentals
          </p>
        </div>
        
        <div class="grid gap-6 lg:grid-cols-2">
          <!-- NLP -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-blue-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="message-circle" :size="32" />
              <h3 class="text-xl font-semibold text-white">Natural Language Processing</h3>
            </div>
            
            <ul class="mb-6 space-y-3 text-sm text-slate-400">
              <li class="flex items-start gap-2">
                <span class="text-blue-400">→</span>
                <a href="https://web.stanford.edu/class/cs224n/" target="_blank" class="hover:text-white">
                  <strong>CS224n</strong> - Stanford NLP with Deep Learning
                </a>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">→</span>
                <a href="https://huggingface.co/course" target="_blank" class="hover:text-white">
                  <strong>Hugging Face Course</strong> - NLP with Transformers
                </a>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">→</span>
                <a href="http://web.stanford.edu/class/cs224u/" target="_blank" class="hover:text-white">
                  <strong>CS224u</strong> - Natural Language Understanding
                </a>
              </li>
            </ul>
            
            <div class="rounded-lg bg-blue-500/10 p-4">
              <div class="text-xs text-blue-400 mb-1">Key Libraries</div>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs text-slate-300">Hugging Face Transformers</span>
                <span class="text-xs text-slate-300">spaCy</span>
                <span class="text-xs text-slate-300">NLTK</span>
                <span class="text-xs text-slate-300">GPT</span>
              </div>
            </div>
          </div>
          
          <!-- Computer Vision -->
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-green-500/20">
            <div class="mb-4 flex items-center gap-3">
              <Icon name="eye" :size="32" />
              <h3 class="text-xl font-semibold text-white">Computer Vision</h3>
            </div>
            
            <ul class="mb-6 space-y-3 text-sm text-slate-400">
              <li class="flex items-start gap-2">
                <span class="text-green-400">→</span>
                <a href="https://cs231n.stanford.edu/" target="_blank" class="hover:text-white">
                  <strong>CS231n</strong> - Convolutional Neural Networks
                </a>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">→</span>
                <a href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank" class="hover:text-white">
                  <strong>CNN Course</strong> - DeepLearning.AI
                </a>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">→</span>
                <a href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" target="_blank" class="hover:text-white">
                  <strong>PyTorch Object Detection</strong> - Tutorial
                </a>
              </li>
            </ul>
            
            <div class="rounded-lg bg-green-500/10 p-4">
              <div class="text-xs text-green-400 mb-1">Key Libraries</div>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs text-slate-300">OpenCV</span>
                <span class="text-xs text-slate-300">PyTorch Vision</span>
                <span class="text-xs text-slate-300">TensorFlow Vision</span>
                <span class="text-xs text-slate-300">YOLO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frameworks & Tools -->
    <section class="relative py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">ML Frameworks & Tools</h2>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="flame" :size="24" />
              <h3 class="font-semibold text-white">PyTorch</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Facebook's ML framework. Dynamic computation graphs, great for research.
            </p>
            <a href="https://pytorch.org/tutorials/" target="_blank" class="text-sm text-orange-400 hover:underline">
              Official Tutorials →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="bar-chart-3" class="w-6 h-6" />
              <h3 class="font-semibold text-white">TensorFlow</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Google's ML platform. Strong ecosystem for production deployment.
            </p>
            <a href="https://www.tensorflow.org/tutorials" target="_blank" class="text-sm text-orange-400 hover:underline">
              Official Tutorials →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="smile" :size="24" />
              <h3 class="font-semibold text-white">Hugging Face</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Model hub and libraries for NLP and multimodal AI. Essential for modern AI.
            </p>
            <a href="https://huggingface.co/docs" target="_blank" class="text-sm text-orange-400 hover:underline">
              Documentation →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="calculator" :size="24" />
              <h3 class="font-semibold text-white">scikit-learn</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Classic ML algorithms. Best for traditional ML before deep learning.
            </p>
            <a href="https://scikit-learn.org/stable/" target="_blank" class="text-sm text-orange-400 hover:underline">
              Documentation →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="book-open" :size="24" />
              <h3 class="font-semibold text-white">Jupyter</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Interactive notebooks for experimentation and visualization.
            </p>
            <a href="https://jupyter.org/try" target="_blank" class="text-sm text-orange-400 hover:underline">
              Try Online →
            </a>
          </div>
          
          <div class="rounded-xl bg-space-800/50 p-6 ring-1 ring-orange-500/20">
            <div class="mb-3 flex items-center gap-2">
              <Icon name="database" :size="24" />
              <h3 class="font-semibold text-white">Pandas & NumPy</h3>
            </div>
            <p class="text-sm text-slate-400 mb-3">
              Data manipulation and numerical computing foundations.
            </p>
            <a href="https://pandas.pydata.org/docs/" target="_blank" class="text-sm text-orange-400 hover:underline">
              Pandas Docs →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Papers & Research -->
    <section class="relative border-t border-purple-500/10 bg-space-900/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Research & Papers</h2>
          <p class="mt-2 text-slate-400">
            Stay current with the latest AI research
          </p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-2">
          <a href="https://paperswithcode.com/" target="_blank" class="group flex items-start gap-4 rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="file-text" :size="24" /></div>
            <div>
              <h3 class="mb-2 font-semibold text-white group-hover:text-purple-400">Papers with Code</h3>
              <p class="text-sm text-slate-400">
                ML papers with code implementations. Leaderboards, datasets, and methods. 
                The best resource for finding state-of-the-art results.
              </p>
            </div>
          </a>
          
          <a href="https://arxiv.org/list/cs.AI/recent" target="_blank" class="group flex items-start gap-4 rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="file-edit" :size="24" /></div>
            <div>
              <h3 class="mb-2 font-semibold text-white group-hover:text-purple-400">arXiv cs.AI</h3>
              <p class="text-sm text-slate-400">
                Latest AI research papers. Subscribe to stay updated on cutting-edge developments.
              </p>
            </div>
          </a>
          
          <a href="https://distill.pub/" target="_blank" class="group flex items-start gap-4 rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="sparkles" :size="24" /></div>
            <div>
              <h3 class="mb-2 font-semibold text-white group-hover:text-purple-400">Distill.pub</h3>
              <p class="text-sm text-slate-400">
                Beautiful, interactive explanations of ML research. 
                Articles on attention, feature visualization, and more.
              </p>
            </div>
          </a>
          
          <a href="https://mlsub.net/" target="_blank" class="group flex items-start gap-4 rounded-xl bg-space-800/50 p-6 ring-1 ring-purple-500/20 transition-all hover:bg-space-800">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/10"><Icon name="mail" :size="24" /></div>
            <div>
              <h3 class="mb-2 font-semibold text-white group-hover:text-purple-400">The Batch</h3>
              <p class="text-sm text-slate-400">
                DeepLearning.AI's weekly AI newsletter. Curated news and insights.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">
          Start Building AI Today
        </h2>
        <p class="mb-8 text-lg text-slate-400">
          The AI field moves fast, but the fundamentals remain constant. 
          Start with Fast.ai for practical skills, or Andrew Ng for theory.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.fast.ai/"
            target="_blank"
            class="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-500"
          >
            Start with Fast.ai
          </a>
          <a 
            href="https://www.coursera.org/specializations/machine-learning-introduction"
            target="_blank"
            class="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Machine Learning Course
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getCategoryBySlug, getSubjectBySlug } from '~/data/subjects'

const categoryInfo = getCategoryBySlug('technology')
const subjectInfo = getSubjectBySlug('artificial-intelligence')

useHead({
  title: 'Artificial Intelligence & Machine Learning - AI/ML Resources | Awesome Horizon',
  meta: [
    { 
      name: 'description', 
      content: 'Master AI and machine learning with 2,500+ resources. Fast.ai, Stanford courses, deep learning, NLP, computer vision, and PyTorch/TensorFlow tutorials.' 
    }
  ]
})
</script>
