import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AdvancedLoader = ({ onLoadingComplete }) => {
  const [loadingStage, setLoadingStage] = useState(0)
  const [progress, setProgress] = useState(0)
  
  const stages = [
    "Initializing neural networks...",
    "Loading AI modules...",
    "Connecting to the matrix...",
    "Calibrating cyber aesthetics...",
    "Preparing digital experience..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const stageTimer = setInterval(() => {
      setLoadingStage(prev => (prev + 1) % stages.length)
    }, 1000)

    return () => {
      clearInterval(timer)
      clearInterval(stageTimer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>

        <div className="text-center z-10 max-w-md mx-auto px-4">
          {/* Main Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div 
              className="text-6xl font-orbitron font-bold mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(45deg, #00ffff, #ff0080, #00ff41, #ffff00, #00ffff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Team
            </motion.div>
            <motion.div 
              className="text-2xl font-orbitron font-light text-cyan-400 tracking-[0.5em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              ABC
            </motion.div>
          </motion.div>

          {/* Loading Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Progress Bar Container */}
            <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              {/* Progress Bar Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full" />
              
              {/* Progress Bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Progress Percentage */}
            <motion.div
              className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              key={progress}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {progress}%
            </motion.div>

            {/* Loading Stage Text */}
            <motion.div
              className="text-cyan-400 font-orbitron text-sm tracking-wider min-h-[20px]"
              key={loadingStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {stages[loadingStage]}
            </motion.div>

            {/* Animated Loading Dots */}
            <div className="flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Orbital Loading Animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {[120, 180, 240].map((size, index) => (
              <motion.div
                key={size}
                className="absolute border border-cyan-400/20 rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: -size/2,
                  left: -size/2
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + index * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{ top: -1, left: size/2 - 1 }}
                  animate={{
                    boxShadow: [
                      "0 0 5px #00ffff",
                      "0 0 20px #00ffff",
                      "0 0 5px #00ffff"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Glitch Effect Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
          }}
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              rgba(0, 255, 255, 0.03),
              transparent
            )`
          }}
        />

        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}

export default AdvancedLoader