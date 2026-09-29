import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'heritageplay-theme'

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch (_) {/* localStorage might be blocked */}

  // Fall back to OS preference
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Sync the attribute + localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(STORAGE_KEY, theme) } catch (_) {/* noop */}
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return [theme, toggleTheme]
}
