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
  Brain
} from 'lucide-react'

const FloatingNav = ({ soundEnabled, setSoundEnabled }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [theme, setTheme] = useState('cyber')
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home', color: 'text-cyan-400' },
    { path: '/projects', icon: FolderOpen, label: 'Projects', color: 'text-purple-400' },
    { path: '/services', icon: Zap, label: 'Services', color: 'text-pink-400' },
    { path: '/stack', icon: Layers, label: 'Stack', color: 'text-green-400' },
    { path: '/team', icon: Users, label: 'Team', color: 'text-blue-400' },
    { path: '/contact', icon: Mail, label: 'Contact', color: 'text-orange-400' },
  ]

  const externalLinks = [
    { 
      href: 'https://github.com/promptarchi', 
      icon: Github, 
      label: 'GitHub', 
      color: 'text-gray-400 hover:text-white',
      gradient: 'from-gray-600 to-gray-800'
    },
    { 
      href: 'https://wa.me/919876543210?text=Hi%20Prompt%20Archi!%20I%27m%20interested%20in%20your%20services.', 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      color: 'text-green-400 hover:text-green-300',
      gradient: 'from-green-500 to-emerald-600'
    },
  ]

  const toggleTheme = () => {
    const themes = ['cyber', 'dark', 'terminal', 'glass']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', themes[nextIndex])
  }

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
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed bottom-8 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Main Navigation Container */}
        <motion.div
          layout
          className="flex items-center space-x-1 bg-black/20 backdrop-blur-2xl border border-cyan-400/20 rounded-full p-2 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,128,0.1) 50%, rgba(0,255,255,0.1) 100%)',
            boxShadow: '0 8px 32px rgba(0,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
          }}
        >
          {/* Navigation Items */}
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <motion.div
                key={item.path}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  onMouseEnter={() => playSound(600 + index * 100, 0.1)}
                  onClick={() => playSound(1000, 0.15)}
                  className={`
                    relative flex items-center justify-center w-12 h-12 rounded-full 
                    transition-all duration-300 hover:scale-110 group
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-400/25' 
                      : `${item.color} hover:text-white hover:bg-white/10`
                    }
                  `}
                >
                  <Icon size={20} />
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                  
                  {/* Glow Effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400/20"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}

          {/* Separator */}
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />

          {/* External Links */}
          {externalLinks.map((link, index) => {
            const Icon = link.icon
            
            return (
              <motion.div
                key={link.href}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: (navItems.length + index) * 0.05, duration: 0.3 }}
                className="relative"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound(800 + index * 200, 0.1)}
                  onClick={() => playSound(1200, 0.15)}
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full 
                    transition-all duration-300 hover:scale-110 group
                    ${link.color}
                  `}
                >
                  <Icon size={20} />
                  
                  {/* Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </a>
              </motion.div>
            )
          })}

          {/* Separator */}
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />

          {/* Theme Toggle */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: (navItems.length + externalLinks.length) * 0.05, duration: 0.3 }}
            onClick={() => {
              toggleTheme()
              playSound(1400, 0.2)
            }}
            onMouseEnter={() => playSound(1000, 0.1)}
            className="flex items-center justify-center w-12 h-12 rounded-full text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 transition-all duration-300 hover:scale-110 group relative"
          >
            <Palette size={20} />
            
            {/* Theme Indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black"
              style={{
                background: theme === 'cyber' ? 'linear-gradient(45deg, #00ffff, #ff0080)' :
                           theme === 'dark' ? '#1f2937' :
                           theme === 'terminal' ? '#00ff41' : 'rgba(255,255,255,0.2)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          {/* Sound Toggle */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: (navItems.length + externalLinks.length + 1) * 0.05, duration: 0.3 }}
            onClick={() => {
              setSoundEnabled(!soundEnabled)
              playSound(soundEnabled ? 400 : 1600, 0.2)
            }}
            onMouseEnter={() => playSound(1200, 0.1)}
            className={`
              flex items-center justify-center w-12 h-12 rounded-full 
              transition-all duration-300 hover:scale-110 group relative
              ${soundEnabled 
                ? 'text-green-400 hover:text-green-300 hover:bg-green-400/10' 
                : 'text-red-400 hover:text-red-300 hover:bg-red-400/10'
              }
            `}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            
            {/* Sound Wave Animation */}
            {soundEnabled && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default FloatingNav