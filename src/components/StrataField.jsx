import './StrataField.css'

// The site's signature visual device: a cross-section of excavation layers,
// each labeled the way a real trench section is labeled ("STRATUM I", "STRATUM II"...).
// It stands in for the product's whole idea — you are digging down through
// layers of evidence to reach an understanding — without illustrating any
// specific (and therefore fabricate-able) artifact.
export default function StrataField({ className = '' }) {
  const layers = [
    { label: 'STRATUM I — SURFACE FILL', color: 'var(--color-ivory-deep)' },
    { label: 'STRATUM II — OCCUPATION', color: 'rgba(255,107,0,0.14)' },
    { label: 'STRATUM III — HEARTH & CRAFT', color: 'rgba(212,160,23,0.16)' },
    { label: 'STRATUM IV — FOUNDATION', color: 'rgba(18,60,115,0.10)' },
  ]

  return (
    <div className={`strata-field ${className}`} aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          className="strata-field__layer"
          key={layer.label}
          style={{ background: layer.color, animationDelay: `${i * 90}ms` }}
        >
          <span className="strata-field__label">{layer.label}</span>
        </div>
      ))}
    </div>
  )
}
