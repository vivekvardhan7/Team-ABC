import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award, Zap, Code, Brain, Rocket, ChevronDown } from 'lucide-react'
import TypewriterText from '../components/TypewriterText'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus, Float, MeshDistortMaterial, Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// 3D Background Components
const FloatingGeometry = ({ theme }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={hovered ? (theme === 'light' ? "#8b5cf6" : "#a855f7") : (theme === 'light' ? "#3b82f6" : "#60a5fa")}
          transparent
          opacity={theme === 'light' ? 0.6 : 0.4}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

const ParticleField = ({ theme }) => {
  const pointsRef = useRef()
  const particleCount = 100
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color={theme === 'light' ? "#60a5fa" : "#93c5fd"} 
        transparent 
        opacity={theme === 'light' ? 0.6 : 0.4} 
      />
    </points>
  )
}

const Background3D = ({ theme }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={theme === 'light' ? 0.5 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'light' ? 0.8 : 0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color={theme === 'light' ? "#8b5cf6" : "#a855f7"} />
        
        <ParticleField theme={theme} />
        
        <group position={[-3, 2, -2]}>
          <FloatingGeometry theme={theme} />
        </group>
        
        <group position={[3, -1, -3]}>
          <Float speed={1.5} rotationIntensity={0.3}>
            <Torus args={[0.8, 0.3, 16, 32]}>
              <meshStandardMaterial 
                color={theme === 'light' ? "#ec4899" : "#f472b6"} 
                transparent 
                opacity={theme === 'light' ? 0.4 : 0.3} 
              />
            </Torus>
          </Float>
        </group>
        
        <group position={[0, -2, -4]}>
          <Float speed={2.5} rotationIntensity={0.4}>
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial 
                color={theme === 'light' ? "#10b981" : "#34d399"} 
                transparent 
                opacity={theme === 'light' ? 0.3 : 0.2} 
              />
            </Box>
          </Float>
        </group>
      </Canvas>
    </div>
  )
}

// 3D Team Member Card Component
const TeamMember3D = ({ member, index, theme }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        y: -10, 
        rotateX: 5, 
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className={`relative backdrop-blur-lg border rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-white/10 border-white/20' 
          : 'bg-gray-800/10 border-gray-700/20'
      }`}>
        {/* 3D Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isHovered ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : ''
        }`} />
        
        <div className="relative z-10">
          <motion.div 
            className="relative w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full"
            animate={{
              rotateY: isHovered ? 10 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full`} />
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover rounded-full relative z-10"
            />
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              isHovered ? 'bg-white/20' : ''
            }`} />
          </motion.div>
          
          <motion.h3 
            className={`text-xl font-bold mb-2 text-center transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}
            animate={{ z: isHovered ? 20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className={`text-center font-medium mb-2 ${member.color}`}
            animate={{ z: isHovered ? 15 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.role}
          </motion.p>
          
          <motion.p 
            className={`text-sm text-center transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}
            animate={{ z: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.university}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

const Home = ({ theme }) => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const roles = [
    'AI Engineers',
    'Full Stack Developers', 
    'UI/UX Designers',
    'Digital Innovators',
    'Problem Solvers',
    'Tech Architects',
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning implementations'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web and mobile application development with modern technologies'
    },
    {
      icon: Rocket,
      title: 'Performance Optimized',
      description: 'Lightning-fast, scalable solutions built for growth and efficiency'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Propel Studio delivered an exceptional AI solution that transformed our business operations.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'Professional, innovative, and delivered exactly what we needed. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartupXYZ',
      content: 'The team\'s expertise in both AI and web development is unmatched. Great experience!',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Technologies' },
    { number: '24/7', label: 'Support' }
  ]

  const teamMembers = [
    {
      name: 'Sai Vivek',
      role: 'AI/ML Engineer',
      university: 'NIT Mizoram',
      photo: '/SaiVivek.jpg',
      gradient: 'from-blue-500 to-purple-600',
      color: 'text-blue-600'
    },
    {
      name: 'Anand Sai',
      role: 'Backend & AI/ML Dev',
      university: 'GITAM University',
      photo: '/AnandSai.jpg',
      gradient: 'from-purple-500 to-pink-500',
      color: 'text-purple-600'
    },
    {
      name: 'Nandan',
      role: 'Frontend & UI/UX',
      university: 'GITAM University',
      photo: '/Nandan.jpg',
      gradient: 'from-green-400 to-blue-500',
      color: 'text-green-600'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      <Background3D theme={theme} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
            style={{ transform: `translateY(${y1}px)` }}
          >
            <motion.h1 
              className={`text-6xl md:text-8xl font-bold mb-6 leading-tight transition-colors duration-700 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                transformStyle: 'preserve-3d',
                textShadow: theme === 'light' ? '0 10px 30px rgba(0,0,0,0.1)' : '0 10px 30px rgba(255,255,255,0.1)'
              }}
            >
              <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>We are</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Propel Studio
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-3xl md:text-5xl font-light mb-8 transition-colors duration-700 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <TypewriterText
                texts={roles}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                cursorColor="text-blue-600"
              />
            </motion.h2>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
            style={{ transform: `translateY(${y2}px)` }}
          >
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transition-colors duration-700 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Transforming ideas into intelligent digital solutions with cutting-edge AI and immersive 3D experiences
            </p>
          </motion.div>

          {/* Team Introduction with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMember3D key={index} member={member} index={index} theme={theme} />
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 relative overflow-hidden"
                style={{
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                to="/contact"
                className={`px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl ${
                  theme === 'dark' ? 'hover:text-white' : ''
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator with 3D Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotateX: [0, 10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`cursor-pointer transition-colors duration-700 ${
                theme === 'light' ? 'text-gray-400' : 'text-gray-500'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-700 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-700 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5, 
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border relative overflow-hidden ${
                  theme === 'light' 
                    ? 'bg-white/80 border-white/20' 
                    : 'bg-gray-800/80 border-gray-700/20'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'light' 
                    ? 'bg-gradient-to-br from-blue-50/50 to-purple-50/50' 
                    : 'bg-gradient-to-br from-blue-900/20 to-purple-900/20'
                }`} />
                
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className={`text-xl font-semibold mb-4 relative z-10 transition-colors duration-700 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed relative z-10 transition-colors duration-700 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Elements */}
      <section className={`py-20 px-4 relative transition-colors duration-700 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' 
          : 'bg-gradient-to-r from-blue-900/20 to-purple-900/20'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-center backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-white/60' 
                    : 'bg-gray-800/60'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`font-medium transition-colors duration-700 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with 3D Cards */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-700 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-700 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  y: -5, 
                  rotateX: 5, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border ${
                  theme === 'light' 
                    ? 'bg-white/80 border-white/20' 
                    : 'bg-gray-800/80 border-gray-700/20'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed transition-colors duration-700 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold transition-colors duration-700 ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm transition-colors duration-700 ${
                      theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Effects */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            
            <Float speed={1} rotationIntensity={0.2}>
              <Sphere args={[2, 32, 32]} position={[-5, 2, -5]}>
                <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
              </Sphere>
            </Float>
            
            <Float speed={1.5} rotationIntensity={0.3}>
              <Box args={[1.5, 1.5, 1.5]} position={[5, -2, -3]}>
                <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
              </Box>
            </Float>
          </Canvas>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate and create digital experiences that drive results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                >
                  Start Your Project
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  to="/projects"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home