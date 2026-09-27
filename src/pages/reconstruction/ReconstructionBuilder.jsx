import { useMemo, useState } from 'react'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { getCaseById, HYPOTHESIS_FIELDS } from '../../data/cases.js'
import { prefillFromHypothesis, computeEvidenceSupport } from '../../data/reconstructionOptions.js'
import BuilderStepper, { STAGES } from '../../components/reconstruction/BuilderStepper.jsx'
import StageShell from '../../components/reconstruction/StageShell.jsx'
import BoardPicker from '../../components/reconstruction/BoardPicker.jsx'
import PiecesEditor from '../../components/reconstruction/PiecesEditor.jsx'
import RandomizerPicker from '../../components/reconstruction/RandomizerPicker.jsx'
import MovementPicker from '../../components/reconstruction/MovementPicker.jsx'
import ObjectivePicker from '../../components/reconstruction/ObjectivePicker.jsx'
import PlayersPicker from '../../components/reconstruction/PlayersPicker.jsx'
import EvidenceSupportPanel from '../../components/reconstruction/EvidenceSupportPanel.jsx'
import './ReconstructionBuilder.css'

export default function ReconstructionBuilder() {
  const { caseId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const caseData = getCaseById(caseId)
  const state = location.state

  const [stageIndex, setStageIndex] = useState(0)
  const [furthestIndex, setFurthestIndex] = useState(0)
  const [builder, setBuilder] = useState(() => prefillFromHypothesis(state?.hypothesis))

  const support = useMemo(
    () => (caseData ? computeEvidenceSupport(caseData, builder) : null),
    [caseData, builder],
  )

  if (!caseData) {
    return (
      <section className="reconstruction-builder">
        <div className="container">
          <p className="eyebrow">Archaeological Detective</p>
          <h1>Case not found</h1>
          <Link to="/detective" className="reconstruction-builder__back">← Back to all cases</Link>
        </div>
      </section>
    )
  }

  // Reconstruction always starts from a hypothesis formed during
  // investigation. Hypothesis state lives in memory only for this
  // prototype, so a direct link or refresh sends the user back to finish
  // the case first.
  if (!state?.hypothesis) {
    return (
      <section className="reconstruction-builder">
        <div className="container reconstruction-builder__guard">
          <p className="eyebrow">Case {caseData.number}</p>
          <h1>Form a hypothesis first</h1>
          <p>
            The Reconstruction Builder starts from the hypothesis you form
            during investigation. Head back into the case, examine the
            evidence, and form your hypothesis to unlock this step.
          </p>
          <Link to={`/detective/${caseData.id}`} className="reconstruction-builder__cta">
            Return to Case {caseData.number} →
          </Link>
        </div>
      </section>
    )
  }

  function goTo(index) {
    setStageIndex(index)
    setFurthestIndex((f) => Math.max(f, index))
  }

  function goNext() {
    goTo(Math.min(STAGES.length - 1, stageIndex + 1))
    window.scrollTo({ top: window.scrollY - 1 })
  }

  function goBack() {
    goTo(Math.max(0, stageIndex - 1))
  }

  function update(patch) {
    setBuilder((prev) => ({ ...prev, ...patch }))
  }

  const stageKey = STAGES[stageIndex].key

  const stageValid = {
    board: !!builder.board,
    pieces: true,
    randomizer: builder.useRandomizer ? !!builder.randomizer : true,
    movement: !!builder.movement,
    objective: !!builder.objective,
    players: !!builder.players,
    review: true,
  }[stageKey]

  return (
    <section className="reconstruction-builder">
      <div className="container">
        <Link to={`/detective/${caseData.id}`} className="reconstruction-builder__back">
          ← Back to Case {caseData.number}
        </Link>

        <p className="eyebrow">Reconstruction Builder</p>
        <h1>{caseData.title}</h1>
        <p className="reconstruction-builder__lede">
          Turn your hypothesis into a possible version of this game. Nothing
          you choose here is a claim that the game has been identified —
          it's your working reconstruction, checked against the evidence as
          you go.
        </p>

        <div className="reconstruction-builder__stepper-wrap">
          <BuilderStepper currentIndex={stageIndex} furthestIndex={furthestIndex} onJump={goTo} />
        </div>

        <div className="reconstruction-builder__body">
          {stageKey === 'board' && (
            <StageShell
              eyebrow="Step 1 of 7"
              title="What kind of board might this have used?"
              lede="Pick the layout that best fits the board or marking evidence from your investigation."
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <BoardPicker value={builder.board} onChange={(v) => update({ board: v })} />
            </StageShell>
          )}

          {stageKey === 'pieces' && (
            <StageShell
              eyebrow="Step 2 of 7"
              title="How many pieces, and what kind?"
              lede="Set how many pieces each player starts with, and pick a shape that matches the game-piece evidence."
              onBack={goBack}
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <PiecesEditor
                count={builder.piecesCount}
                shape={builder.pieceShape}
                onCountChange={(v) => update({ piecesCount: v })}
                onShapeChange={(v) => update({ pieceShape: v })}
              />
            </StageShell>
          )}

          {stageKey === 'randomizer' && (
            <StageShell
              eyebrow="Step 3 of 7"
              title="Does the game rely on chance?"
              lede="Decide whether pieces move by a thrown randomizer, and if so, what kind."
              onBack={goBack}
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <RandomizerPicker
                useRandomizer={builder.useRandomizer}
                config={builder.randomizer}
                onToggle={(v) => update({ useRandomizer: v })}
                onConfigChange={(v) => update({ randomizer: v })}
              />
            </StageShell>
          )}

          {stageKey === 'movement' && (
            <StageShell
              eyebrow="Step 4 of 7"
              title="How do pieces move?"
              lede="Choose the movement rule your reconstruction will actually play by."
              onBack={goBack}
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <MovementPicker value={builder.movement} onChange={(v) => update({ movement: v })} />
            </StageShell>
          )}

          {stageKey === 'objective' && (
            <StageShell
              eyebrow="Step 5 of 7"
              title="What's the objective?"
              lede="Choose what a player is trying to achieve to win."
              onBack={goBack}
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <ObjectivePicker value={builder.objective} onChange={(v) => update({ objective: v })} />
            </StageShell>
          )}

          {stageKey === 'players' && (
            <StageShell
              eyebrow="Step 6 of 7"
              title="How many players?"
              lede="Choose how many players your reconstruction supports."
              onBack={goBack}
              onNext={goNext}
              nextDisabled={!stageValid}
            >
              <PlayersPicker value={builder.players} onChange={(v) => update({ players: v })} />
            </StageShell>
          )}

          {stageKey === 'review' && (
            <StageShell
              eyebrow="Step 7 of 7"
              title="Review your reconstruction"
              lede="Here's the full picture — your choices, and how well each one is supported by the case's evidence."
              onBack={goBack}
            >
              <div className="review-summary">
                <h3>Your hypothesis, from the investigation</h3>
                <ul className="review-summary__list">
                  {HYPOTHESIS_FIELDS.map((f) => (
                    <li key={f.key}>
                      <span>{f.label.replace(/\?$/, '')}</span>
                      <strong>{state.hypothesis[f.key] ?? '—'}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="review-summary__heading">Your reconstruction</h3>
              <EvidenceSupportPanel support={support} />

              <div className="review-actions">
                <button
                  type="button"
                  className="review-actions__primary"
                  onClick={() =>
                    navigate(`/detective/${caseData.id}/reconstruct/play`, {
                      state: {
                        caseId: caseData.id,
                        caseTitle: caseData.title,
                        hypothesis: state.hypothesis,
                        builder,
                        support,
                      },
                    })
                  }
                >
                  Test Reconstruction →
                </button>
                <Link
                  to={`/detective/${caseData.id}/compare`}
                  state={{
                    caseId: caseData.id,
                    caseTitle: caseData.title,
                    hypothesis: state.hypothesis,
                    builder,
                    support,
                  }}
                  className="review-actions__secondary"
                >
                  Compare with Historical Interpretation
                </Link>
              </div>
            </StageShell>
          )}
        </div>
      </div>
    </section>
  )
}
