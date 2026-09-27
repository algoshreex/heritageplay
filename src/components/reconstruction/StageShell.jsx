import './StageShell.css'

export default function StageShell({ eyebrow, title, lede, children, onBack, onNext, nextLabel = 'Next →', nextDisabled = false, backLabel = '← Back' }) {
  return (
    <div className="stage-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="stage-shell__title">{title}</h2>
      {lede && <p className="stage-shell__lede">{lede}</p>}

      <div className="stage-shell__content">{children}</div>

      <div className="stage-shell__nav">
        {onBack ? (
          <button type="button" className="stage-shell__back" onClick={onBack}>{backLabel}</button>
        ) : <span />}
        {onNext && (
          <button type="button" className="stage-shell__next" onClick={onNext} disabled={nextDisabled}>
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  )
}
