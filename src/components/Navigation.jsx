import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SealMark, IconMenu, IconClose } from './Icons.jsx'
import useTheme from '../hooks/useTheme.js'
import './Navigation.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Explore Heritage', to: '/explore' },
  { label: 'Archaeological Detective', to: '/detective' },
  { label: 'Play the Past', to: '/play' },
  { label: 'Ancient Toy Maker', to: '/toy-maker' },
  { label: 'Heritage Map', to: '/map' },
  { label: 'Stories & Learning', to: '/stories' },
]

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  // Close the mobile menu whenever the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <header className="nav">
      <div className="nav__bar container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <SealMark className="nav__seal" size={30} />
          <span className="nav__wordmark">HeritagePlay</span>
        </NavLink>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 'nav__link' + (isActive ? ' nav__link--active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__theme"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={'nav__backdrop' + (open ? ' nav__backdrop--visible' : '')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className={'nav__links nav__links--mobile' + (open ? ' nav__links--mobile-open' : '')}
        aria-label="Primary"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => 'nav__link' + (isActive ? ' nav__link--active' : '')}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}