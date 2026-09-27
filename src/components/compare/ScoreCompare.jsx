import '../reconstruction/EvidenceSupportPanel.css'
import './ScoreCompare.css'

function scoreBand(overall) {
  if (overall >= 75) return { label: 'Mostly evidence-supported', className: 'score-ring--high' }
  if (overall >= 45) return { label: 'Mixed support', className: 'score-ring--medium' }
  return { label: 'Largely speculative', className: 'score-ring--low' }
}

function ScoreBlock({ title, overall }) {
  const band = scoreBand(overall)
  return (
    <div className="score-compare__block">
      <div className={`score-ring ${band.className}`}>
        <span>{overall}%</span>
      </div>
      <div>
        <p className="score-compare__title">{title}</p>
        <p className="score-compare__band">{band.label}</p>
      </div>
    </div>
  )
}

export default function ScoreCompare({ yourScore, historicalScore }) {
  return (
    <div className="score-compare">
      <ScoreBlock title="Your Reconstruction" overall={yourScore} />
      <div className="score-compare__divider">vs</div>
      <ScoreBlock title="Historical Interpretation" overall={historicalScore} />
    </div>
  )
}
