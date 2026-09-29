import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setFadeOut(true)
          setTimeout(() => setVisible(false), 600)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-screen--fade' : ''}`}>
      <div className="loading-screen__content">
        {/* Animated logo */}
        <div className="loading-screen__logo">
          <div className="loading-screen__logo-icon">
            <span className="loading-screen__logo-glyph">▦</span>
            <div className="loading-screen__logo-ring" />
            <div className="loading-screen__logo-ring loading-screen__logo-ring--2" />
          </div>
          <span className="loading-screen__logo-text">HeritagePlay</span>
        </div>

        {/* Progress bar */}
        <div className="loading-screen__progress">
          <div
            className="loading-screen__progress-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Tagline */}
        <p className="loading-screen__tagline">
          Discovering the past, one artifact at a time…
        </p>
      </div>

      {/* Floating particles */}
      <div className="loading-screen__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="loading-screen__particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.5,
              fontSize: `${4 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
