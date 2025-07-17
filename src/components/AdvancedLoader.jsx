import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AdvancedLoader = ({ onLoadingComplete }) => {
  const [loadingStage, setLoadingStage] = useState(0)
  const [progress, setProgress] = useState(0)
  
  const stages = [
    "Initializing systems...",
    "Loading components...",
    "Preparing interface...",
    "Almost ready...",
    "Welcome to Propel Studio!"
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
        className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center z-50 overflow-hidden"
      >
        <div className="text-center z-10 max-w-md mx-auto px-4">
          {/* Main Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <span className="text-white font-bold text-2xl">PS</span>
            </motion.div>
            
            <motion.div 
              className="text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Propel Studio
            </motion.div>
            
            <motion.div 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Digital Innovation Studio
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
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              {/* Progress Bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative overflow-hidden"
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
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              key={progress}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {progress}%
            </motion.div>

            {/* Loading Stage Text */}
            <motion.div
              className="text-gray-600 font-medium text-sm min-h-[20px]"
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
                  className="w-2 h-2 bg-blue-600 rounded-full"
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
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AdvancedLoader