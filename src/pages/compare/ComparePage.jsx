import { useMemo } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { getCaseById } from '../../data/cases.js'
import { computeEvidenceSupport } from '../../data/reconstructionOptions.js'
import ScoreCompare from '../../components/compare/ScoreCompare.jsx'
import CompareTable from '../../components/compare/CompareTable.jsx'
import './ComparePage.css'

export default function ComparePage() {
  const { caseId } = useParams()
  const location = useLocation()
  const caseData = getCaseById(caseId)
  const state = location.state

  const historicalSupport = useMemo(
    () => (caseData ? computeEvidenceSupport(caseData, caseData.historicalInterpretation) : null),
    [caseData],
  )

  if (!caseData) {
    return (
      <section className="compare-page">
        <div className="container">
          <p className="eyebrow">Archaeological Detective</p>
          <h1>Case not found</h1>
          <Link to="/detective" className="compare-page__back">← Back to all cases</Link>
        </div>
      </section>
    )
  }

  if (!state?.builder || !state?.support) {
    return (
      <section className="compare-page">
        <div className="container compare-page__guard">
          <p className="eyebrow">Case {caseData.number}</p>
          <h1>Build and test a reconstruction first</h1>
          <p>
            Comparison starts from a reconstruction you've built and tested.
            Head back into the case, form a hypothesis, and build a
            reconstruction to unlock this step.
          </p>
          <Link to={`/detective/${caseData.id}`} className="compare-page__cta">
            Return to Case {caseData.number} →
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="compare-page">
      <div className="container">
        <Link to={`/detective/${caseData.id}/reconstruct/play`} className="compare-page__back">
          ← Back to your reconstruction
        </Link>

        <p className="eyebrow">Compare · Case {caseData.number}</p>
        <h1>{caseData.title}</h1>
        <p className="compare-page__lede">
          Your reconstruction, next to a scholarly best-guess interpretation
          for this case. Both scores are computed the same way — from how
          well each category is grounded in this case's evidence — which is
          why they often land close together even where the specific choices
          differ. That's by design: the score measures the evidence a
          category rests on, not whether an answer is "correct."
        </p>

        <div className="compare-page__scores">
          <ScoreCompare yourScore={state.support.overall} historicalScore={historicalSupport.overall} />
        </div>

        <h2 className="compare-page__table-heading">Category by category</h2>
        <CompareTable
          yourCategories={state.support.categories}
          historicalCategories={historicalSupport.categories}
          notes={caseData.historicalInterpretation.notes}
        />

        <div className="compare-page__closing">
          <p>
            Some parts of ancient games remain unknown. Your reconstruction
            is one possible interpretation based on the available evidence —
            and so is the historical interpretation shown here.
          </p>
        </div>

        <div className="compare-page__actions">
          <Link to={`/detective/${caseData.id}/reconstruct`} className="compare-page__secondary">
            ← Adjust your reconstruction
          </Link>
          <Link to="/detective" className="compare-page__secondary">
            Browse other cases
          </Link>
        </div>
      </div>
    </section>
  )
}
