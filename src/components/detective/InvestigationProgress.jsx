import './InvestigationProgress.css'

export default function InvestigationProgress({ examinedCount, totalCount, connectedCount, hypothesisFormed }) {
  const examinedPct = totalCount ? Math.round((examinedCount / totalCount) * 100) : 0

  return (
    <div className="progress-panel">
      <div className="progress-panel__item">
        <div className="progress-panel__row">
          <span className="progress-panel__label">Evidence examined</span>
          <span className="progress-panel__value">{examinedCount}/{totalCount}</span>
        </div>
        <div className="progress-panel__bar">
          <div className="progress-panel__bar-fill" style={{ width: `${examinedPct}%` }} />
        </div>
      </div>

      <div className="progress-panel__item">
        <div className="progress-panel__row">
          <span className="progress-panel__label">Clues connected</span>
          <span className="progress-panel__value">{connectedCount}/{totalCount}</span>
        </div>
        <div className="progress-panel__bar">
          <div
            className="progress-panel__bar-fill progress-panel__bar-fill--connected"
            style={{ width: `${totalCount ? (connectedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="progress-panel__item progress-panel__item--hypothesis">
        <span className="progress-panel__label">Hypothesis</span>
        <span className={`progress-panel__pill${hypothesisFormed ? ' progress-panel__pill--formed' : ''}`}>
          {hypothesisFormed ? 'Formed' : 'Not formed'}
        </span>
      </div>
    </div>
  )
}
