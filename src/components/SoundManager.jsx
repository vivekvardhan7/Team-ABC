import React, { useEffect, useRef } from 'react'

const SoundManager = ({ enabled }) => {
  const audioContextRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    // Initialize Web Audio API
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    const playSound = (frequency, duration, type = 'sine') => {
      if (!audioContextRef.current) return

      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.value = frequency
      oscillator.type = type
      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration)

      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + duration)
    }

    // Add sound effects to interactive elements
    const addSoundEffects = () => {
      const buttons = document.querySelectorAll('button, a, [role="button"]')
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          if (enabled) playSound(800, 0.1, 'sine')
        })
        
        button.addEventListener('click', () => {
          if (enabled) playSound(1000, 0.15, 'square')
        })
      })
    }

    // Delay to ensure DOM is ready
    setTimeout(addSoundEffects, 100)

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
    }
  }, [enabled])

  return null
}

export default SoundManager