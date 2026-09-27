import { useParams, useLocation, Link } from 'react-router-dom'
import { getCaseById } from '../../data/cases.js'
import PlayableBoard from '../../components/reconstruction/PlayableBoard.jsx'
import './PlayReconstruction.css'

export default function PlayReconstruction() {
  const { caseId } = useParams()
  const location = useLocation()
  const caseData = getCaseById(caseId)
  const state = location.state

  if (!caseData) {
    return (
      <section className="play-reconstruction">
        <div className="container">
          <p className="eyebrow">Archaeological Detective</p>
          <h1>Case not found</h1>
          <Link to="/detective" className="play-reconstruction__back">← Back to all cases</Link>
        </div>
      </section>
    )
  }

  if (!state?.builder) {
    return (
      <section className="play-reconstruction">
        <div className="container play-reconstruction__guard">
          <p className="eyebrow">Case {caseData.number}</p>
          <h1>Build a reconstruction first</h1>
          <p>
            There's nothing to test yet — finish the Reconstruction Builder
            for this case to generate a playable prototype.
          </p>
          <Link to={`/detective/${caseData.id}`} className="play-reconstruction__cta">
            Return to Case {caseData.number} →
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="play-reconstruction">
      <div className="container">
        <Link to={`/detective/${caseData.id}/reconstruct`} className="play-reconstruction__back">
          ← Back to Reconstruction Builder
        </Link>

        <p className="eyebrow">Test Your Theory · Case {caseData.number}</p>
        <h1>Playing your reconstruction of {caseData.title}</h1>
        <p className="play-reconstruction__lede">
          This is a working prototype of the game your choices describe —
          not a claim that this is how the game was actually played.
          Evidence Support Score for this reconstruction: <strong>{state.support?.overall}%</strong>.
        </p>

        <div className="play-reconstruction__board">
          <PlayableBoard builder={state.builder} />
        </div>

        <div className="play-reconstruction__actions">
          <Link to={`/detective/${caseData.id}/reconstruct`} className="play-reconstruction__secondary">
            ← Adjust reconstruction
          </Link>
          <Link to={`/detective/${caseData.id}/compare`} state={state} className="play-reconstruction__primary">
            Compare with Historical Interpretation →
          </Link>
        </div>
      </div>
    </section>
  )
}
