import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import AdvancedLoader from './components/AdvancedLoader'
import FloatingNav from './components/FloatingNav'
import CustomCursor from './components/CustomCursor'
import ThreeBackground from './components/ThreeBackground'

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
  const [soundEnabled, setSoundEnabled] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Add any preloading logic here
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    preloadResources()
  }, [])

  if (isLoading) {
    return <AdvancedLoader onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        {/* 3D Background */}
        <ThreeBackground />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Floating Navigation */}
        <FloatingNav 
          soundEnabled={soundEnabled} 
          setSoundEnabled={setSoundEnabled} 
        />
        
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
        
        {/* Global Audio Context for Sound Effects */}
        {soundEnabled && (
          <audio id="global-audio" style={{ display: 'none' }} />
        )}
      </div>
    </Router>
  )
}

export default App