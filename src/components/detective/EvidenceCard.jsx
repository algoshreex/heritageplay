import { useState } from 'react'
import EvidenceStatus from './EvidenceStatus.jsx'
import {
  IconPot,
  IconPiece,
  IconBoard,
  IconScroll,
  IconPin, 
  IconClock
} from '../Icons.jsx'
import './EvidenceCard.css'

const TYPE_ICON = {
  'Artifact': IconPot,
  'Game Piece': IconPiece,
  'Board / Marking': IconBoard,
  'Historical Text': IconScroll,
  'Location': IconPin,
  'Time Period': IconClock,
}

export default function EvidenceCard({
  evidence,
  examined,
  connected,
  onExamine,
  onToggleConnect
}) {
  const [open, setOpen] = useState(false)

  const Icon = TYPE_ICON[evidence.type] ?? IconPot

  function handleToggleOpen() {
    const next = !open
    setOpen(next)

    if (next && !examined) {
      onExamine(evidence.id)
    }
  }

  return (
    <article
      className={`evidence-card${
        connected ? ' evidence-card--connected' : ''
      }`}
    >

      <button
        type="button"
        className="evidence-card__header"
        onClick={handleToggleOpen}
        aria-expanded={open}
      >
        <span className="evidence-card__icon">
          <Icon size={22} />
        </span>

        <span className="evidence-card__heading">
          <span className="evidence-card__type">
            {evidence.type}
          </span>

          <span className="evidence-card__title">
            {evidence.title}
          </span>
        </span>

        <span className="evidence-card__right">
          {examined && (
            <span className="evidence-card__examined">
              Examined
            </span>
          )}

          <EvidenceStatus
            status={evidence.status}
            compact
          />

          <span
            className="evidence-card__chevron"
            aria-hidden="true"
          >
            {open ? '−' : '+'}
          </span>
        </span>
      </button>

      {open && (
        <div className="evidence-card__body">

          {/* Archaeological image */}
          {evidence.image && (
           <div className="evidence-card__image">
  <img 
    src={evidence.image} 
    alt={evidence.title} 
    loading="lazy" 
  />
  <span>Illustrative reconstruction</span>
</div> 
          )}

          <div className="evidence-card__field">
            <p className="evidence-card__field-label">
              What was found
            </p>

            <p>{evidence.found}</p>
          </div>

          <div className="evidence-card__field">
            <p className="evidence-card__field-label">
              What it tells us
            </p>

            <p>{evidence.tellsUs}</p>
          </div>

          <div className="evidence-card__field evidence-card__field--uncertain">
            <p className="evidence-card__field-label">
              What's uncertain
            </p>

            <p>{evidence.uncertain}</p>
          </div>

          <label className="evidence-card__connect">
            <input
              type="checkbox"
              checked={connected}
              onChange={() => onToggleConnect(evidence.id)}
            />

            Connect this clue to my hypothesis
          </label>

        </div>
      )}
    </article>
  )
} 
