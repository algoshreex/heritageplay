import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SealMark, IconMenu, IconClose } from './Icons.jsx'
import './Navigation.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Explore Heritage', to: '/explore' },
  { label: 'Archaeological Detective', to: '/detective' },
  { label: 'Play the Past', to: '/play' },
  { label: 'Game Evolution', to: '/evolution' },
  { label: 'Heritage Map', to: '/map' },
  { label: 'Stories & Learning', to: '/stories' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="nav">
      <div className="nav__bar container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <SealMark className="nav__seal" size={32} />
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

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

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
