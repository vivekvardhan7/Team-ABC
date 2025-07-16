import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('cyber')

  const themes = {
    cyber: {
      primary: '#00ffff',
      secondary: '#ff0080',
      background: '#0f0f23',
      surface: '#1a1a2e',
      text: '#ffffff',
      accent: '#00ff41',
    },
    dark: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      accent: '#06b6d4',
    },
    terminal: {
      primary: '#00ff41',
      secondary: '#ff0080',
      background: '#000000',
      surface: '#1a1a1a',
      text: '#00ff41',
      accent: '#ffff00',
    },
  }

  const currentTheme = themes[theme]

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes)
    const currentIndex = themeKeys.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themeKeys.length
    setTheme(themeKeys[nextIndex])
  }

  const value = {
    theme,
    currentTheme,
    setTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider