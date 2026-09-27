import { CASES } from '../../data/cases.js'
import CaseCard from '../../components/detective/CaseCard.jsx'
import './Detective.css'

export default function Detective() {
  return (
    <section className="detective-list">
      <div className="container">
        <p className="eyebrow">Archaeological Detective</p>
        <h1>Choose a case to investigate</h1>
        <p className="detective-list__lede">
          Every case gives you real evidence categories — artifacts, game
          pieces, board markings, texts, locations, and dates — each labeled
          by how well it's supported. Examine the evidence, then form your
          own hypothesis about what game it points to.
        </p>

        <div className="detective-list__notice">
          <strong>About these cases:</strong> this prototype uses invented
          sites and evidence to demonstrate the investigation mechanic. The
          civilizations and periods are real; the specific finds are not
          drawn from actual excavation reports yet.
        </div>

        <div className="detective-list__grid">
          {CASES.map((c) => (
            <CaseCard key={c.id} caseData={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
