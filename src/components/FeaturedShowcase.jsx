import { useRef, useEffect, useState } from 'react'
import './FeaturedShowcase.css'

const ARTIFACTS = [
  {
    title: 'Harappan Dice',
    era: '2600–1900 BCE',
    location: 'Mohenjo-daro',
    description: 'Cubical terracotta dice with dot markings, evidence of the earliest board games in the Indian subcontinent.',
    evidence: 'high',
    emoji: '🎲',
  },
  {
    title: 'Toy Cart',
    era: '2500–2000 BCE',
    location: 'Harappa',
    description: 'Miniature terracotta cart with functional wheels — one of the oldest known toy vehicles in the world.',
    evidence: 'high',
    emoji: '🛞',
  },
  {
    title: 'Chess Precursor Piece',
    era: '600 CE',
    location: 'Northern India',
    description: 'A carved ivory game piece linked to Chaturanga — the ancient ancestor of modern chess.',
    evidence: 'medium',
    emoji: '♟️',
  },
]

export default function FeaturedShowcase() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const artifact = ARTIFACTS[active]
  const evidenceLabel = {
    high: 'Verified Evidence',
    medium: 'Scholarly Interpretation',
    low: 'Reconstruction',
  }

  return (
    <section className="showcase" ref={ref}>
      <div className={`container showcase__inner ${visible ? 'showcase--visible' : ''}`}>
        <div className="showcase__header">
          <p className="eyebrow showcase__eyebrow">Featured artifacts</p>
          <h2 className="showcase__heading">Objects that tell stories</h2>
          <p className="showcase__lede">
            Every artifact on HeritagePlay is labeled with its evidence level — so you always know what's proven, interpreted, or reconstructed.
          </p>
        </div>

        <div className="showcase__grid">
          {/* Artifact selector */}
          <div className="showcase__list">
            {ARTIFACTS.map((a, i) => (
              <button
                key={i}
                className={`showcase__tab ${i === active ? 'showcase__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="showcase__tab-emoji">{a.emoji}</span>
                <div>
                  <span className="showcase__tab-title">{a.title}</span>
                  <span className="showcase__tab-era">{a.era}</span>
                </div>
                <span className="showcase__tab-arrow">→</span>
              </button>
            ))}
          </div>

          {/* Artifact detail card */}
          <div className="showcase__detail" key={active}>
            <div className="showcase__detail-visual">
              <span className="showcase__detail-emoji">{artifact.emoji}</span>
              <div className="showcase__detail-glow" aria-hidden="true" />
            </div>
            <div className="showcase__detail-info">
              <span className={`showcase__badge showcase__badge--${artifact.evidence}`}>
                {evidenceLabel[artifact.evidence]}
              </span>
              <h3 className="showcase__detail-title">{artifact.title}</h3>
              <p className="showcase__detail-meta">
                📍 {artifact.location} · 🕰️ {artifact.era}
              </p>
              <p className="showcase__detail-desc">{artifact.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
