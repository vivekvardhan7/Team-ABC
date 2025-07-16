import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Zap, Code, Brain, Rocket, Download } from 'lucide-react'
import TypewriterText from '../components/TypewriterText'

const Home = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const roles = [
    'AI Engineer',
    'Full Stack Developer', 
    'UI/UX Magician',
    'Prompt Hacker',
    'Digital Architect',
    'Code Craftsman',
    'Neural Network Trainer',
  ]

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Dynamic Cursor-Following Gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0,255,255,0.1), 
            rgba(255,0,128,0.05), 
            transparent 50%)`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div 
          style={{ y: y1, opacity }}
          className="max-w-7xl mx-auto text-center relative"
        >
          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-cyan-400' : 
                  i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
                }`}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-orbitron font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                className="text-gray-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Most say
              </motion.span>
              <br />
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                don't judge a book
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-400"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                by its
              </motion.span>{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                style={{
                  textShadow: '0 0 30px rgba(0,255,255,0.5)',
                  filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.3))'
                }}
              >
                cover
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-2xl md:text-4xl font-orbitron font-light text-cyan-400 mb-8"
            >
              But developers?{' '}
              <motion.span 
                className="text-white font-bold"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.5)',
                    '0 0 20px rgba(255,255,255,0.8)',
                    '0 0 10px rgba(255,255,255,0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                We always do.
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Enhanced Subheadline with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              That's why we design{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
                bold, animated, intelligent
              </span>{' '}
              interfaces that leave a mark.
            </p>
            
            <div className="text-lg md:text-xl font-orbitron">
              <span className="text-gray-300">We are </span>
              <TypewriterText
                texts={roles}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 font-bold"
                cursorColor="text-cyan-400"
              />
            </div>
          </motion.div>

          {/* Enhanced Team Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Sai Vivek */}
              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0,255,255,0.3)',
                      '0 0 40px rgba(0,255,255,0.6)',
                      '0 0 20px rgba(0,255,255,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-orbitron font-bold text-xl">SV</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Sai Vivek Vardhan
                  </h3>
                  <p className="text-cyan-400 text-sm">AI/ML Engineer • NIT Mizoram</p>
                  <p className="text-gray-500 text-xs">Neural Networks & Systems</p>
                </div>
              </motion.div>

              {/* Animated Connector */}
              <motion.div 
                className="hidden md:block relative"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
              >
                <div className="w-24 h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
                <motion.div
                  className="absolute top-0 left-0 w-2 h-px bg-white"
                  animate={{ x: [0, 88, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Anand Sai */}
              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(255,0,128,0.3)',
                      '0 0 40px rgba(255,0,128,0.6)',
                      '0 0 20px rgba(255,0,128,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-white font-orbitron font-bold text-xl">AS</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-pink-400"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                    Anand Sai
                  </h3>
                  <p className="text-pink-400 text-sm">Backend, Database, and AI/ML Developer • GITAM</p>
                  <p className="text-gray-500 text-xs">Backend Systems & AI/ML</p>
                </div>
              </motion.div>
              {/* Animated Connector between Anand and Nandan */}
              <motion.div 
                className="hidden md:block relative"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <div className="w-24 h-px bg-gradient-to-r from-pink-500 via-green-400 to-blue-400" />
                <motion.div
                  className="absolute top-0 left-0 w-2 h-px bg-white"
                  animate={{ x: [0, 88, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
              {/* Nandan */}
              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(34,197,94,0.3)',
                      '0 0 40px rgba(34,197,94,0.6)',
                      '0 0 20px rgba(34,197,94,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <span className="text-white font-orbitron font-bold text-xl">NC</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-green-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    Nandan Chilukuri
                  </h3>
                  <p className="text-green-400 text-sm">Frontend and UI/UX dev • GITAM</p>
                  <p className="text-gray-500 text-xs">Interfaces and Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 flex items-center space-x-2"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-2 overflow-hidden"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book a Call</span>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="group relative px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Resume</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 relative">
        <motion.div 
          style={{ y: y2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Craft
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to interactive experiences, we build the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI & ML Solutions',
                description: 'Intelligent chatbots, recommendation systems, and neural networks',
                color: 'from-cyan-400 to-blue-500',
                delay: 0
              },
              {
                icon: Code,
                title: 'Web Applications',
                description: 'Interactive portfolios, e-commerce platforms, and custom dashboards',
                color: 'from-purple-500 to-pink-500',
                delay: 0.2
              },
              {
                icon: Rocket,
                title: 'Digital Experiences',
                description: 'Motion graphics, 3D interfaces, and immersive user journeys',
                color: 'from-pink-500 to-red-500',
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  delay: service.delay, 
                  duration: 0.6,
                  hover: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="service-card relative group cursor-pointer"
              >
                <div className="relative bg-black/20 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 h-full overflow-hidden">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 relative`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                    
                    {/* Icon Glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Border Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent"
                    whileHover={{
                      borderImage: 'linear-gradient(45deg, #00ffff, #ff0080, #00ffff) 1'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-black/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12 overflow-hidden"
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Ready to Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Extraordinary?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate and create digital experiences that leave a lasting impression
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home