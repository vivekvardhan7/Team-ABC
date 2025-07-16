import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e) => {
      setIsHovering(true)
      const element = e.target
      
      if (element.matches('a, button, [role="button"]')) {
        setCursorVariant('button')
      } else if (element.matches('input, textarea')) {
        setCursorVariant('text')
      } else if (element.matches('.project-card, .service-card')) {
        setCursorVariant('project')
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    window.addEventListener('mousemove', moveCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .project-card, .service-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  const cursorVariants = {
    default: {
      scale: 1,
      rotate: 0,
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 255, 255, 0.8)'
    },
    button: {
      scale: 1.5,
      rotate: 45,
      borderRadius: '20%',
      backgroundColor: 'rgba(255, 0, 128, 0.8)'
    },
    text: {
      scale: [1, 0.8, 1],
      rotate: 0,
      borderRadius: '2px',
      backgroundColor: 'rgba(0, 255, 65, 0.8)'
    },
    project: {
      scale: 2,
      rotate: 180,
      borderRadius: '25%',
      backgroundColor: 'rgba(147, 51, 234, 0.8)'
    }
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full h-full"
          style={{
            background: 'linear-gradient(45deg, #00ffff, #ff0080)',
          }}
        />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ delay: 0.1 }}
      >
        <div className="w-full h-full bg-cyan-400/30 rounded-full blur-sm" />
      </motion.div>

      {/* Additional Trail Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-30"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          transition={{ delay: 0.2 + i * 0.05 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: `rgba(0, 255, 255, ${0.2 - i * 0.05})`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default CustomCursor