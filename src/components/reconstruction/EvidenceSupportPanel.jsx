import EvidenceStatus from '../detective/EvidenceStatus.jsx'
import './EvidenceSupportPanel.css'

function scoreBand(overall) {
  if (overall >= 75) return { label: 'Mostly evidence-supported', className: 'score-ring--high' }
  if (overall >= 45) return { label: 'Mixed support', className: 'score-ring--medium' }
  return { label: 'Largely speculative', className: 'score-ring--low' }
}

export default function EvidenceSupportPanel({ support }) {
  const band = scoreBand(support.overall)

  return (
    <div className="evidence-support">
      <div className="evidence-support__score">
        <div className={`score-ring ${band.className}`}>
          <span>{support.overall}%</span>
        </div>
        <div>
          <p className="evidence-support__score-label">Evidence Support Score</p>
          <p className="evidence-support__band">{band.label}</p>
        </div>
      </div>

      <p className="evidence-support__explainer">
        <strong>How this is calculated (prototype indicator, not a real
        archaeological measurement):</strong> each of your six choices is
        compared against the evidence tagged to that category in this case.
        Verified Evidence contributes 100%, Scholarly Interpretation
        contributes 55%, and Reconstruction — or a category with no directly
        connected evidence — contributes 25%. The overall score is the plain
        average across all six.
      </p>

      <div className="evidence-support__table">
        {support.categories.map((cat) => (
          <div key={cat.key} className="evidence-support__row">
            <div className="evidence-support__row-main">
              <span className="evidence-support__category">{cat.label}</span>
              <span className="evidence-support__choice">{cat.choice}</span>
            </div>
            <EvidenceStatus status={cat.tier} compact />
            {cat.supportingEvidence.length > 0 && (
              <p className="evidence-support__linked">
                Linked evidence: {cat.supportingEvidence.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
