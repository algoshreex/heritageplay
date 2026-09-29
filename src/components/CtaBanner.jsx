import { Link } from 'react-router-dom'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" aria-hidden="true">
        <div className="cta-banner__orb cta-banner__orb--1" />
        <div className="cta-banner__orb cta-banner__orb--2" />
        <div className="cta-banner__orb cta-banner__orb--3" />
      </div>
      <div className="container cta-banner__inner">
        <p className="cta-banner__eyebrow">Ready to begin?</p>
        <h2 className="cta-banner__heading">
          Step into 5,000 years of heritage
        </h2>
        <p className="cta-banner__body">
          Explore artifacts, solve archaeological mysteries, and play games the way ancient civilizations did. Your journey starts here.
        </p>
        <div className="cta-banner__actions">
          <Link to="/explore" className="cta-banner__btn cta-banner__btn--primary">
            Start Exploring
            <span className="cta-banner__btn-arrow">→</span>
          </Link>
          <Link to="/detective" className="cta-banner__btn cta-banner__btn--secondary">
            Try Detective Mode
          </Link>
        </div>
      </div>
    </section>
  )
}
