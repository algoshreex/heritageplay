import EvidenceStatus from '../detective/EvidenceStatus.jsx'
import './CompareTable.css'

export default function CompareTable({ yourCategories, historicalCategories, notes }) {
  return (
    <div className="compare-table">
      <div className="compare-table__head">
        <span>Category</span>
        <span>Your Reconstruction</span>
        <span>Historical Interpretation</span>
      </div>

      {yourCategories.map((yourCat, i) => {
        const historicalCat = historicalCategories[i]
        const agrees = yourCat.choice === historicalCat.choice
        return (
          <div key={yourCat.key} className="compare-table__row">
            <div className="compare-table__category">
              <span>{yourCat.label}</span>
              <span className={'compare-table__badge' + (agrees ? ' compare-table__badge--agree' : ' compare-table__badge--differ')}>
                {agrees ? 'Matches' : 'Differs'}
              </span>
            </div>

            <div className="compare-table__cell">
              <p className="compare-table__choice">{yourCat.choice}</p>
              <EvidenceStatus status={yourCat.tier} compact />
            </div>

            <div className="compare-table__cell">
              <p className="compare-table__choice">{historicalCat.choice}</p>
              <EvidenceStatus status={historicalCat.tier} compact />
            </div>

            <p className="compare-table__uncertainty">
              <span>What's uncertain:</span> {notes[yourCat.key]}
            </p>
          </div>
        )
      })}
    </div>
  )
}
