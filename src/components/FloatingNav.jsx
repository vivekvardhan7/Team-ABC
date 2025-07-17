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
  X
} from 'lucide-react'

const FloatingNav = ({ soundEnabled, setSoundEnabled }) => {
  const [isExpanded, setIsExpanded] = useState(false)
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
      href: 'https://wa.me/919876543210?text=Hi%20Team%20ABC!%20I%27m%20interested%20in%20your%20services.', 
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

  return (
    <>
      {/* Desktop Navigation */}
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ABC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Team ABC</span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onMouseEnter={() => playSound(600 + index * 100, 0.1)}
                    onClick={() => playSound(1000, 0.15)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-full font-medium
                      transition-all duration-300 hover:bg-gray-100
                      ${isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* External Links */}
            <div className="flex items-center space-x-4">
              {externalLinks.map((link, index) => {
                const Icon = link.icon
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => playSound(800 + index * 200, 0.1)}
                    onClick={() => playSound(1200, 0.15)}
                    className={`
                      p-2 rounded-full transition-all duration-300 hover:bg-gray-100
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

      {/* Mobile Navigation */}
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
                <span className="text-white font-bold text-sm">ABC</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Team ABC</span>
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

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  )
}

export default FloatingNav