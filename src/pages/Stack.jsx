import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Brain, Palette } from 'lucide-react'

const Stack = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Tech', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Palette },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
  ]

  const technologies = [
    // Frontend
    { name: 'React', category: 'frontend', level: 95, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', level: 90, color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: 'TypeScript', category: 'frontend', level: 85, color: 'from-blue-600 to-blue-800', icon: 'TS' },
    { name: 'Tailwind CSS', category: 'frontend', level: 95, color: 'from-teal-400 to-cyan-600', icon: '🎨' },
    { name: 'Framer Motion', category: 'frontend', level: 90, color: 'from-purple-500 to-pink-600', icon: '🎭' },
    { name: 'Three.js', category: 'frontend', level: 75, color: 'from-green-400 to-emerald-600', icon: '🎲' },

    // Backend  
    { name: 'Node.js', category: 'backend', level: 90, color: 'from-green-600 to-green-800', icon: '🟢' },
    { name: 'Python', category: 'backend', level: 95, color: 'from-blue-500 to-yellow-500', icon: '🐍' },
    { name: 'FastAPI', category: 'backend', level: 85, color: 'from-teal-500 to-cyan-700', icon: '⚡' },
    { name: 'PostgreSQL', category: 'backend', level: 80, color: 'from-blue-600 to-indigo-800', icon: '🐘' },
    { name: 'MongoDB', category: 'backend', level: 85, color: 'from-green-500 to-emerald-700', icon: '🍃' },
    { name: 'Redis', category: 'backend', level: 75, color: 'from-red-500 to-red-700', icon: '📦' },

    // Mobile
    { name: 'React Native', category: 'mobile', level: 85, color: 'from-cyan-400 to-blue-600', icon: '📱' },
    { name: 'Flutter', category: 'mobile', level: 70, color: 'from-blue-400 to-cyan-600', icon: '🦋' },
    { name: 'Expo', category: 'mobile', level: 80, color: 'from-purple-500 to-indigo-600', icon: '📲' },

    // AI/ML
    { name: 'TensorFlow', category: 'ai', level: 85, color: 'from-orange-500 to-yellow-600', icon: '🧠' },
    { name: 'PyTorch', category: 'ai', level: 80, color: 'from-red-500 to-orange-600', icon: '🔥' },
    { name: 'OpenAI API', category: 'ai', level: 95, color: 'from-green-400 to-emerald-600', icon: '🤖' },
    { name: 'Hugging Face', category: 'ai', level: 85, color: 'from-yellow-400 to-orange-500', icon: '🤗' },
    { name: 'LangChain', category: 'ai', level: 90, color: 'from-purple-500 to-pink-600', icon: '⛓️' },
    { name: 'Computer Vision', category: 'ai', level: 75, color: 'from-indigo-500 to-purple-600', icon: '👁️' },

    // Cloud
    { name: 'AWS', category: 'cloud', level: 80, color: 'from-orange-400 to-yellow-600', icon: '☁️' },
    { name: 'Vercel', category: 'cloud', level: 95, color: 'from-gray-800 to-black', icon: '▲' },
    { name: 'Netlify', category: 'cloud', level: 85, color: 'from-teal-400 to-cyan-600', icon: '🌐' },
    { name: 'Firebase', category: 'cloud', level: 85, color: 'from-yellow-500 to-orange-600', icon: '🔥' },
    { name: 'Supabase', category: 'cloud', level: 90, color: 'from-green-400 to-emerald-600', icon: '⚡' },
    { name: 'Docker', category: 'cloud', level: 75, color: 'from-blue-500 to-cyan-600', icon: '🐳' },
  ]

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

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
              <span className="text-white">Tech</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Galaxy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our constellation of cutting-edge technologies and tools that power our digital creations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center space-x-2 px-6 py-3 rounded-full font-medium 
                    transition-all duration-300 hover:scale-105
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="cyber-card rounded-xl p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{tech.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  </div>
                  <div className="text-cyan-400 font-bold">{tech.level}%</div>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 capitalize">{tech.category}</span>
                  <span className={`font-semibold ${tech.level >= 90 ? 'text-green-400' : tech.level >= 80 ? 'text-yellow-400' : 'text-orange-400'}`}>
                    {tech.level >= 90 ? 'Expert' : tech.level >= 80 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Orbital Visual */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies orbiting around our core expertise, creating powerful solutions
            </p>
          </motion.div>

          <div className="orbit-container mx-auto">
            {/* Center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="orbit-center"
            >
              <div className="text-white font-orbitron font-bold text-lg">PA</div>
            </motion.div>

            {/* Orbit Rings */}
            {[120, 180, 240].map((size, ringIndex) => (
              <div
                key={ringIndex}
                className="orbit-ring"
                style={{ width: size, height: size }}
              >
                {/* Orbit Items */}
                {['⚛️', '🐍', '🧠', '☁️', '📱', '🎨'][ringIndex] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + ringIndex * 0.2 }}
                    className="orbit-item"
                    style={{
                      top: -20,
                      left: '50%',
                      marginLeft: -20
                    }}
                  >
                    <span className="text-lg">
                      {['⚛️', '🐍', '🧠', '☁️', '📱', '🎨'][ringIndex]}
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Technologies' },
              { number: '50+', label: 'Projects Built' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="cyber-card rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card rounded-2xl p-12 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Need a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Custom Stack?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We adapt our technology choices to fit your specific needs and requirements
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Discuss Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Stack