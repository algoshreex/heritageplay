import { Link } from 'react-router-dom'
import { SealMark } from './Icons.jsx'
import './Footer.css'

const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: [
      { label: 'Heritage Sites', to: '/explore' },
      { label: 'Archaeological Detective', to: '/detective' },
      { label: 'Play the Past', to: '/play' },
      { label: 'Heritage Map', to: '/map' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Stories & Learning', to: '/stories' },
      { label: 'Ancient Toy Maker', to: '/toy-maker' },
      { label: 'Game Evolution', to: '/evolution' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'About HeritagePlay', to: '#' },
      { label: 'Our Approach', to: '#' },
      { label: 'Evidence Standards', to: '#' },
      { label: 'SIH 2026', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__grid">
        {/* Brand column */}
        <div className="footer__brand-col">
          <div className="footer__brand">
            <SealMark size={28} className="footer__seal" />
            <span className="footer__wordmark">HeritagePlay</span>
          </div>
          <p className="footer__tagline">
            Discover the evidence. Build your theory. Play the past.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="GitHub" className="footer__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_LINKS.map(col => (
          <div key={col.title} className="footer__link-col">
            <h4 className="footer__col-title">{col.title}</h4>
            <ul className="footer__link-list">
              {col.links.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="container footer__bottom">
        <p className="footer__copyright">
          © 2026 HeritagePlay · Built for Smart India Hackathon — SIH26208
        </p>
        <p className="footer__built-with">
          Made with <span className="footer__heart">♥</span> for India's heritage
        </p>
      </div>
    </footer>
  )
}
