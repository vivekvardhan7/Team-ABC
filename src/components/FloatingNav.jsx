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
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react'

const FloatingNav = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderOpen, label: 'Projects' },
    { path: '/services', icon: Settings, label: 'Services' },
    { path: '/stack', icon: Layers, label: 'Stack' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ]

  return (
    <>
      {/* Top Header with Logo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          theme === 'light' 
            ? 'bg-white/80 border-gray-200' 
            : 'bg-gray-900/80 border-gray-700'
        } backdrop-blur-lg border-b`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Propel Studio
              </span>
            </Link>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors md:hidden ${
                  theme === 'light' 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`border-t transition-colors duration-300 md:hidden ${
                theme === 'light' 
                  ? 'bg-white border-gray-200' 
                  : 'bg-gray-900 border-gray-700'
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-xl font-medium
                        transition-all duration-300
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                          : theme === 'light'
                            ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`backdrop-blur-lg border rounded-2xl shadow-2xl px-6 py-3 transition-all duration-700 ${
          theme === 'light' 
            ? 'bg-white/90 border-gray-200' 
            : 'bg-gray-900/90 border-gray-700'
        }`}>
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
                    className={`
                      flex flex-col items-center p-3 rounded-xl font-medium
                      transition-all duration-300 group relative
                      ${isActive 
                        ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30' 
                        : theme === 'light'
                          ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon size={20} className="mb-1" />
                    <span className="text-xs hidden sm:block">{item.label}</span>
                    
                    {/* 3D Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
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

      {/* Spacers for fixed navigation */}
      <div className="h-16"></div>
      <div className="h-20"></div>
    </>
  )
}

export default FloatingNav