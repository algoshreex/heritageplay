import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StrataField from '../components/StrataField.jsx'
import HeroVideoBg from '../components/HeroVideoBg.jsx'
import { IconDice, IconPot, IconPiece, IconBoard } from '../components/Icons.jsx'
import './Home.css'

const PRIMARY_ACTIONS = [
  {
    to: '/explore',
    title: 'Explore the Past',
    body: 'Walk through a small Harappan settlement and inspect real artifact records.',
    accent: 'saffron',
  },
  {
    to: '/detective',
    title: 'Become an Archaeological Detective',
    body: 'Take on a case, read the clues, and reason your way toward a theory.',
    accent: 'royal-blue',
  },
  {
    to: '/play',
    title: 'Play the Past',
    body: 'Play traditional Indian games the way historical sources describe them.',
    accent: 'heritage-green',
  },
]

const JOURNEY = [
  { to: '/explore', title: 'Explore Heritage', body: 'Artifacts, toys, and game pieces with sourced evidence.', accent: 'saffron', icon: '🏛️' },
  { to: '/detective', title: 'Archaeological Detective', body: 'Investigate clues, then build a reconstruction.', accent: 'royal-blue', icon: '🔍' },
  { to: '/play', title: 'Play the Past', body: 'Traditional games, played by their historical rules.', accent: 'heritage-green', icon: '🎲' },
  { to: '/evolution', title: 'Game Evolution', body: 'Trace how one game became another, region by region.', accent: 'peacock', icon: '🔄' },
  { to: '/map', title: 'Heritage Map', body: 'Games and toys, placed where they were actually found.', accent: 'rani-pink', icon: '🗺️' },
  { to: '/stories', title: 'Stories & Learning', body: 'Short, visual stories behind the objects and the games.', accent: 'royal-purple', icon: '📜' },
]

/* ---- Scroll reveal helper ---- */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ---- Full-viewport hero with background video ---- */}
      <section className="hero">
        <div className="hero__video-wrap">
          <HeroVideoBg src="/hero-clip.mp4" />
        </div>
        <div className="hero__overlay" aria-hidden="true" />

        <div className={`container hero__inner ${heroLoaded ? 'hero__inner--visible' : ''}`}>
          <p className="hero__eyebrow">Smart India Hackathon 2026 · SIH26208</p>
          <h1 className="hero__heading">
            Discover India's Heritage.
            <br />
            Reconstruct Its Stories.
            <br />
            <span className="hero__heading-accent">Play the Past.</span>
          </h1>
          <p className="hero__sub">
            Explore ancient objects, investigate archaeological clues, reconstruct
            possible games, and experience India's cultural heritage through play.
          </p>

          <div className="hero__actions">
            {PRIMARY_ACTIONS.map((action, i) => (
              <Link
                key={action.to}
                to={action.to}
                className={`hero__action hero__action--${action.accent}`}
                style={{ animationDelay: `${0.5 + i * 0.12}s` }}
              >
                <span className="hero__action-title">{action.title}</span>
                <span className="hero__action-body">{action.body}</span>
                <span className="hero__action-arrow">→</span>
              </Link>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="hero__scroll-hint" aria-hidden="true">
            <span className="hero__scroll-chevron">↓</span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ---- Artifact strip divider ---- */}
      <section className="artifact-strip" aria-hidden="true">
        <div className="container artifact-strip__inner">
          <IconDice className="artifact-strip__icon" />
          <IconPot className="artifact-strip__icon" />
          <IconPiece className="artifact-strip__icon" />
          <IconBoard className="artifact-strip__icon" />
        </div>
      </section>

      {/* ---- Six ways into the past ---- */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <p className="eyebrow">The experience</p>
            <h2 className="section__heading">Six ways into the past</h2>
            <p className="section__lede">
              Every section is built on the same idea: separate what the evidence
              shows from what is still uncertain, and let you test your own
              thinking against it.
            </p>
          </RevealSection>

          <div className="journey-grid">
            {JOURNEY.map((item, i) => (
              <RevealSection key={item.to} delay={i * 80}>
                <Link to={item.to} className={`journey-card journey-card--${item.accent}`}>
                  <span className="journey-card__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="journey-card__arrow">→</span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Evidence philosophy band ---- */}
      <section className="section section--evidence">
        <div className="container evidence-band">
          <RevealSection>
            <div className="evidence-band__text">
              <p className="eyebrow">Why this matters</p>
              <h2 className="section__heading">Nothing here is presented as more certain than it is</h2>
              <p className="section__lede">
                Every artifact, rule, and reconstruction on HeritagePlay is labeled
                by how well it's supported — so you always know what's known,
                what's a scholar's best guess, and what's your own theory.
              </p>
            </div>
          </RevealSection>
          <RevealSection delay={150}>
            <ul className="evidence-band__legend">
              <li><span className="dot dot--high" /> Verified Evidence — directly supported by sources</li>
              <li><span className="dot dot--medium" /> Scholarly Interpretation — a reasoned reading of the evidence</li>
              <li><span className="dot dot--low" /> Reconstruction — a possible answer where the record is silent</li>
            </ul>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
