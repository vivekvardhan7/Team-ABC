import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  FolderOpen, 
  Settings, 
  Layers, 
  Users, 
  Mail, 
  Github, 
  MessageCircle, 
  Palette, 
  Volume2, 
  VolumeX,
  Zap,
  Code2,
  Brain,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react'

const FloatingNav = ({ soundEnabled, setSoundEnabled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home', color: 'text-blue-600' },
    { path: '/projects', icon: FolderOpen, label: 'Projects', color: 'text-purple-600' },
    { path: '/services', icon: Zap, label: 'Services', color: 'text-green-600' },
    { path: '/stack', icon: Layers, label: 'Stack', color: 'text-orange-600' },
    { path: '/team', icon: Users, label: 'Team', color: 'text-pink-600' },
    { path: '/contact', icon: Mail, label: 'Contact', color: 'text-indigo-600' },
  ]

  const externalLinks = [
    { 
      href: 'https://github.com/promptarchi', 
      icon: Github, 
      label: 'GitHub', 
      color: 'text-gray-600 hover:text-gray-800'
    },
    { 
      href: 'https://wa.me/919876543210?text=Hi%20Propel%20Studio!%20I%27m%20interested%20in%20your%20services.', 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      color: 'text-green-600 hover:text-green-700'
    },
  ]

  const playSound = (frequency = 800, duration = 0.1) => {
    if (!soundEnabled) return
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = frequency
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)
    } catch (error) {
      console.log('Audio not supported')
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      {/* Desktop Top Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 180,
                  transition: { duration: 0.6 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-white font-bold text-lg">PS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">Propel Studio</span>
            </Link>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
              
              {externalLinks.map((link, index) => {
                const Icon = link.icon
                
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => playSound(800 + index * 200, 0.1)}
                    onClick={() => playSound(1200, 0.15)}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 15,
                      transition: { duration: 0.3 }
                    }}
                    className={`
                      p-2 rounded-full transition-all duration-300 hover:bg-gray-100
                      ${link.color}
                    `}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Top Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 md:hidden"
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Propel Studio</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        playSound(1000, 0.15)
                      }}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-xl font-medium
                        transition-all duration-300
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex space-x-4 justify-center">
                    <button
                      onClick={toggleTheme}
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    
                    {externalLinks.map((link) => {
                      const Icon = link.icon
                      
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            p-3 rounded-full transition-all duration-300 hover:bg-gray-100
                            ${link.color}
                          `}
                        >
                          <Icon size={20} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Navigation (Mobile & Desktop) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl px-6 py-3">
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotateY: 15,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Link
                    to={item.path}
                    onMouseEnter={() => playSound(600 + index * 100, 0.1)}
                    onClick={() => playSound(1000, 0.15)}
                    className={`
                      flex flex-col items-center p-3 rounded-xl font-medium
                      transition-all duration-300 group relative
                      ${isActive 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={20} className="mb-1" />
                    <span className="text-xs hidden sm:block">{item.label}</span>
                    
                    {/* 3D Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
      <div className="h-20"></div> {/* Extra space for bottom nav */}
    </>
  )
}

export default FloatingNav