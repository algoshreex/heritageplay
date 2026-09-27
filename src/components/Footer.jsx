import { SealMark } from './Icons.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <SealMark size={24} className="footer__seal" />
          <span>HeritagePlay</span>
        </div>
        <p className="footer__line">
          Discover the evidence. Build your theory. Play the past.
        </p>
        <p className="footer__meta">Built for Smart India Hackathon 2026 — SIH26208</p>
      </div>
    </footer>
  )
}
