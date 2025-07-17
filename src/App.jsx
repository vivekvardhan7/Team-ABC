import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import AdvancedLoader from './components/AdvancedLoader'
import FloatingNav from './components/FloatingNav'
import ThemeProvider from './context/ThemeContext'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Stack from './pages/Stack'
import Team from './pages/Team'
import Contact from './pages/Contact'

// Styles
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    preloadResources()
  }, [])

  if (isLoading) {
    return <AdvancedLoader onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <ThemeProvider>
      <Router>
        <div className={`min-h-screen transition-all duration-700 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-slate-50 via-white to-blue-50' 
            : 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900'
        } relative overflow-x-hidden`}>
          {/* Navigation */}
          <FloatingNav theme={theme} toggleTheme={toggleTheme} />
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
              <Route path="/services" element={<Services theme={theme} />} />
              <Route path="/stack" element={<Stack theme={theme} />} />
              <Route path="/team" element={<Team theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App