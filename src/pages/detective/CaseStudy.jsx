import { useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCaseById, HYPOTHESIS_FIELDS } from '../../data/cases.js'
import EvidenceCard from '../../components/detective/EvidenceCard.jsx'
import InvestigationProgress from '../../components/detective/InvestigationProgress.jsx'
import HypothesisPanel from '../../components/detective/HypothesisPanel.jsx'
import './CaseStudy.css'

const MIN_EVIDENCE_FOR_HYPOTHESIS = 3

export default function CaseStudy() {
  const { caseId } = useParams()
  const navigate = useNavigate()
  const caseData = getCaseById(caseId)

  const [examinedIds, setExaminedIds] = useState(() => new Set())
  const [connectedIds, setConnectedIds] = useState(() => new Set())
  const [hypothesisValues, setHypothesisValues] = useState({})
  const [hypothesisFormed, setHypothesisFormed] = useState(false)

  const handleExamine = (id) => {
    setExaminedIds((prev) => new Set(prev).add(id))
  }

  const handleToggleConnect = (id) => {
    setConnectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleHypothesisChange = (key, value) => {
    setHypothesisValues((prev) => ({ ...prev, [key]: value }))
    setHypothesisFormed(false)
  }

  const handleSubmitHypothesis = () => {
    setHypothesisFormed(true)
    // Give the user a moment to see the confirmation before scrolling.
    requestAnimationFrame(() => {
      document.getElementById('hypothesis-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const evidenceCount = caseData?.evidence.length ?? 0
  const locked = examinedIds.size < MIN_EVIDENCE_FOR_HYPOTHESIS

  const hypothesisSummary = useMemo(() => {
    if (!caseData) return []
    return HYPOTHESIS_FIELDS.map((f) => ({ label: f.label, value: hypothesisValues[f.key] }))
  }, [caseData, hypothesisValues])

  if (!caseData) {
    return (
      <section className="case-study">
        <div className="container">
          <p className="eyebrow">Archaeological Detective</p>
          <h1>Case not found</h1>
          <p className="case-study__lede">That case doesn't exist yet.</p>
          <Link to="/detective" className="case-study__back">← Back to all cases</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="case-study">
      <div className="container">
        <Link to="/detective" className="case-study__back">← All cases</Link>

        <div className="case-study__header">
          <div>
            <p className="eyebrow">Case {caseData.number} · {caseData.difficulty}</p>
            <h1>{caseData.title}</h1>
            <p className="case-study__meta">
              {caseData.civilization} · {caseData.period} · {caseData.region}
            </p>
            <p className="case-study__summary">{caseData.summary}</p>
          </div>
        </div>

        {caseData.isPrototype && (
          <div className="case-study__notice">
            This is a prototype case built to demonstrate the investigation
            mechanic. The evidence below is invented for this demo and has
            not been drawn from real excavation records.
          </div>
        )}

        <div className="case-study__layout">
          <div className="case-study__evidence">
            <h2 className="case-study__section-heading">Evidence</h2>
            <div className="case-study__evidence-list">
              {caseData.evidence.map((ev) => (
                <EvidenceCard
                  key={ev.id}
                  evidence={ev}
                  examined={examinedIds.has(ev.id)}
                  connected={connectedIds.has(ev.id)}
                  onExamine={handleExamine}
                  onToggleConnect={handleToggleConnect}
                />
              ))}
            </div>

            <HypothesisPanel
              fields={HYPOTHESIS_FIELDS}
              values={hypothesisValues}
              onChange={handleHypothesisChange}
              onSubmit={handleSubmitHypothesis}
              formed={hypothesisFormed}
              locked={locked}
              minRequired={MIN_EVIDENCE_FOR_HYPOTHESIS}
              examinedCount={examinedIds.size}
            />

            {hypothesisFormed && (
              <div id="hypothesis-result" className="hypothesis-result">
                <p className="eyebrow">Your working hypothesis</p>
                <h3>Ready for reconstruction</h3>
                <ul className="hypothesis-result__list">
                  {hypothesisSummary.map((item) => (
                    <li key={item.label}>
                      <span>{item.label.replace(/\?$/, '')}</span>
                      <strong>{item.value}</strong>
                    </li>
                  ))}
                </ul>
                <p className="hypothesis-result__caveat">
                  This hypothesis is your own reasoning, informed by the
                  evidence you connected — it is not a claim that the game
                  has been definitively identified.
                </p>
                <button
                  type="button"
                  className="hypothesis-result__cta"
                  onClick={() =>
                    navigate(`/detective/${caseData.id}/reconstruct`, {
                      state: {
                        caseId: caseData.id,
                        caseTitle: caseData.title,
                        hypothesis: hypothesisValues,
                        examinedCount: examinedIds.size,
                        connectedCount: connectedIds.size,
                        totalEvidence: evidenceCount,
                      },
                    })
                  }
                >
                  Build Reconstruction →
                </button>
              </div>
            )}
          </div>

          <aside className="case-study__sidebar">
            <InvestigationProgress
              examinedCount={examinedIds.size}
              totalCount={evidenceCount}
              connectedCount={connectedIds.size}
              hypothesisFormed={hypothesisFormed}
            />
          </aside>
        </div>
      </div>
    </section>
  )
}
