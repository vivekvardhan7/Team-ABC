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

  const handleLoadingComplete = () => {
    setIsLoading(false)
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-x-hidden transition-colors duration-500">
          {/* Navigation */}
          <FloatingNav />
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App