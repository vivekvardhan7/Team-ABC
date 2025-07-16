import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Zap, Globe, Brain, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (id) => {
    setActiveFilter(id);
  };
  
  const categories = [
    { id: 'featured', name: 'Featured', icon: Zap },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'AIWeb', name: 'AI+Web', icon: Smartphone },
    { id: 'all', name: 'All Projects', icon: Filter },
    
  ]

  const projects = [
    // Web Apps
    {
      id: 1,
      title: 'ZenithZap Beverages',
      description: 'An elegant beverage platform offering energy sachets for the sports persons.',
      category: 'web',
      featured: true,
      image: 'https://zenithzap.vercel.app/Electrona_Sample_Card.png',
      technologies: ['React+vite', 'Tailwind CSS', 'framer-motion','typescript'],
      github: 'https://github.com/aanu3804/ZenithZap/tree/main', // Replace with actual GitHub link if available
      demo: 'https://zenithzap.vercel.app/',
      gradient: 'from-purple-500 to-pink-500'
    },
    
    {
      id: 2,
      title: 'Curehouzz',
      description: 'Healthcare platform for Services like Doctor appointment, Medicine delivery, lab Bookings,Hospital Bookings,etc.',
      category: 'web',
      featured: true,
      image: 'cureho.png',
      technologies: ['React+vite','Tailwind CSS', 'Express','Node.js', 'FireStoreDB'],
      github: 'https://github.com/aanu3804/CureHouzz-frontend ',
      demo: 'https://cure-houzz.vercel.app/',
      gradient: 'from-cyan-400 to-blue-500'
    },
 
    {
      id: 5,
      title: 'Advanced Proxy Detection for Reaidy.io',
      description: 'AI-powered proxy detection system for enhanced interview on Reaidy.io.This proxt detection is fully functioned on frontend itself. Therefore there is no need to deploy any backend server.',
      category: 'ai',
      featured: true,
      image: 'reaidy.jpg',
      technologies: ['Face-min.js','React', 'TensorFlow.js', 'WebRTC'],
      github: '#',
      demo: 'https://advanced-proxy-detection-reaidyio.vercel.app/',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 6,
      title: 'SayHey Conversation Summarizer',
      description: 'AI tool to summarize conversations for SayHey users.This inlcludes Speaker Diarisation,Speech to text , Summarization and Feedback to the Listener',
      category: 'ai',
      featured: true,
      image: 'https://media.licdn.com/dms/image/v2/D4D16AQFvHyGTCeGbVg/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1676927396050?e=2147483647&v=beta&t=KUScscddtH-9bsv9GeHpPFjY3R9jOxhpB6_fdv78u9w',
      technologies: ['Whisper','Python', 'NLP', 'OpenAI'],
      github: 'https://huggingface.co/spaces/aanu3804/SayHey_Project-1/tree/main',
      demo: 'https://huggingface.co/spaces/aanu3804/SayHey_Project-1',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      id: 7,
      title: 'SayHey AI Listener',
      description: 'AI-powered listener for real-time conversation analysis.',
      category: 'ai',
      featured: false,
      image: 'https://media.licdn.com/dms/image/v2/D4D16AQFvHyGTCeGbVg/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1676927396050?e=2147483647&v=beta&t=KUScscddtH-9bsv9GeHpPFjY3R9jOxhpB6_fdv78u9w',
      technologies: ['Python', 'Speech Recognition', 'OpenAI'],
      github: '#',
      demo: '#',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 8,
      title: 'Serene - Emotional Assistance Chatbot',
      description: 'A chatbot that provides emotional support using AI and NLP.User can either text or voice chat with the bot.',
      category: 'ai',
      featured: false,
      image: 'https://www.revechat.com/wp-content/uploads/2021/08/What-is-sentiment-analysis.png',
      technologies: ['Python', 'NLP', 'React','OpenAI','Whisper'],
      github: 'https://github.com/aanu3804/serene-backend',
      demo: 'https://serene-pied.vercel.app/',
      gradient: 'from-blue-400 to-cyan-500'
    },
    // Full Stack (AI+Web)
    {
      id: 9,
      title: 'Health Report Summarizer',
      description: 'Full stack app for summarizing health reports using AI.',
      category: 'AIWeb',
      featured: true,
      image: 'https://analyticsindiamag.com/wp-content/uploads/2025/01/Ai-health-banner.jpg',
      technologies: ['React', 'Node.js', 'Python', 'NLP'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      id: 10,
      title: 'FitMetriXa - AI Fitness Buddy',
      description: 'AI-powered gym and fitness management platform.',
      category: 'AIWeb',
      featured: true,
      image: 'https://www.freebeatfit.com/cdn/shop/articles/Blog-Transform-Your-Upper-Body-Strength-with-AI-Driven-Workouts.jpg?v=1718189236',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow','GroqAPI','FirebaseDB'],
      github: '#',
      demo: '#',
      gradient: 'from-green-400 to-blue-500'
    }
    ,
    {
      id: 3,
      title: 'Vivek Portfolio',
      description: 'Personal portfolio website for Sai Vivek Vardhan.',
      category: 'web',
      featured: false,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      demo: 'https://saivivek-portfolio.vercel.app/',
      gradient: 'from-cyan-400 to-purple-500'
    },
    {
      id: 4,
      title: 'Anand Portfolio',
      description: 'Personal portfolio website for Anand Sai.',
      category: 'web',
      featured: false,
      image: 'https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/aanu3804/anand-Portfolio',
      demo: 'https://anand-portfolio-zeta.vercel.app/',
      gradient: 'from-pink-500 to-red-500'
    },
    // AI/
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter)

  console.log('Active filter:', activeFilter, 'Filtered projects:', filteredProjects);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20 px-4 relative"
    >
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Project
              </span>{' '}
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of innovative projects that push the boundaries of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleFilterClick(category.id)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-full font-medium 
                  transition-all duration-300 hover:scale-105
                  ${activeFilter === category.id
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-400/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                  }
                `}
              >
                <Icon size={16} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>
      </section>


      {/* Projects Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cyber-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <div className="flex space-x-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
                        >
                          Live Demo
                        </a>
                      )}

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-4 bg-gray-800/50 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 text-center border border-gray-600/50"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card rounded-2xl p-12 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Have an Idea?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Let's Build It
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? Let's collaborate and create something extraordinary together.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects