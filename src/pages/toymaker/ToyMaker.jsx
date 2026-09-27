// 

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOYS } from '../../data/toys.js'
import PageHero from '../../components/PageHero.jsx'
import './ToyMaker.css'

const PHASES = ['Choose Toy', 'Find Pieces', 'Build & Learn']

export default function ToyMaker() {
  const [toyId, setToyId] = useState(null)
  const [stepIndex, setStepIndex] = useState(0)
  const [picked, setPicked] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [done, setDone] = useState(false)
  const pickerRef = useRef(null)

  const toy = TOYS.find((t) => t.id === toyId)
  const step = toy?.steps[stepIndex]

  // Which of the 3 top-level phases we're in, for the "STEP X of 3" bar.
  const phase = !toy ? 0 : done ? 2 : 1

  function chooseToy(id) {
    setToyId(id)
    setStepIndex(0)
    setPicked([])
    setFeedback(null)
    setDone(false)
  }

  function choosePiece(option) {
    setFeedback({ optionId: option.id, correct: option.correct })
    if (!option.correct) return

    setTimeout(() => {
      const next = [...picked, option.emoji]
      setPicked(next)
      setFeedback(null)
      if (stepIndex + 1 < toy.steps.length) {
        setStepIndex(stepIndex + 1)
      } else {
        setDone(true)
      }
    }, 500)
  }

  function reset() {
    setToyId(null)
    setStepIndex(0)
    setPicked([])
    setFeedback(null)
    setDone(false)
  }

  return (
    <section className="toy-maker">
      <PageHero
        eyebrow="Ancient Toy Maker"
        title={<>Build the <span className="toy-maker__hero-accent">Toys</span> of the Indus Valley</>}
        subtitle="Pick each piece correctly and assemble a real toy from Harappan history — one careful choice at a time."
      >
        <button
          type="button"
          className="toy-maker__start-btn"
          onClick={() => pickerRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          🧰 Start Building →
        </button>
      </PageHero>

      <div className="container">
        {/* ---------- Step progress bar ---------- */}
        <div className="toy-maker__phasebar" ref={pickerRef}>
          <div className="toy-maker__phasebar-text">
            <p className="eyebrow">Step {phase + 1} of 3</p>
            <h2>
              {phase === 0 && 'Choose a toy to build'}
              {phase === 1 && `Find the pieces — ${toy.name}`}
              {phase === 2 && 'Built & learned!'}
            </h2>
            <p className="toy-maker__phasebar-sub">
              Each toy reveals a part of life in the Indus Valley — their games, skills, and creativity.
            </p>
          </div>

          <div className="toy-maker__phasesteps">
            {PHASES.map((label, i) => (
              <div className="toy-maker__phasestep" key={label}>
                <span className={`toy-maker__phasestep-num ${i < phase ? 'is-done' : ''} ${i === phase ? 'is-current' : ''}`}>
                  {i + 1}
                </span>
                <span>{label}</span>
                {i < PHASES.length - 1 && <span className="toy-maker__phasestep-line" />}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Toy picker ---------- */}
        {!toy && (
          <div className="toy-maker__picker-grid">
            {TOYS.map((t) => (
              <div className="toy-maker__picker-card" key={t.id}>
                <div className="toy-maker__picker-image">
                  {t.popular && <span className="toy-maker__badge">★ Popular</span>}
                  <span className="toy-maker__picker-emoji">{t.resultEmojis[0]}</span>
                </div>

                <div className="toy-maker__picker-body">
                  <div className="toy-maker__picker-main">
                    <h3>{t.name}</h3>
                    <p>{t.intro}</p>
                    <button type="button" className="toy-maker__build-btn" onClick={() => chooseToy(t.id)}>
                      Build This Toy →
                    </button>
                  </div>

                  <dl className="toy-maker__picker-meta">
                    <div>
                      <dt>🏺 Material</dt>
                      <dd>{t.material}</dd>
                    </div>
                    <div>
                      <dt>📍 Found at</dt>
                      <dd>{t.foundAt}</dd>
                    </div>
                    <div>
                      <dt>📅 Period</dt>
                      <dd>{t.period}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---------- Build flow ---------- */}
        {toy && !done && (
          <div className="toy-maker__build">
            <div className="toy-maker__stage">
              <div className="toy-maker__assembled">
                {picked.map((emoji, i) => (
                  <span key={i} className="toy-maker__assembled-piece">{emoji}</span>
                ))}
                {picked.length === 0 && <span className="toy-maker__assembled-empty">🏺</span>}
              </div>
              <p className="toy-maker__building-name">{toy.name} — piece {stepIndex + 1} of {toy.steps.length}</p>
            </div>

            <h3 className="toy-maker__prompt">{step.prompt}</h3>

            <div className="toy-maker__options">
              {step.options.map((opt) => {
                const state =
                  feedback?.optionId === opt.id ? (feedback.correct ? 'is-correct' : 'is-wrong') : ''
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`toy-maker__option ${state}`}
                    onClick={() => choosePiece(opt)}
                  >
                    <span className="toy-maker__option-emoji">{opt.emoji}</span>
                    {opt.label}
                  </button>
                )
              })}
            </div>

            {feedback && !feedback.correct && (
              <p className="toy-maker__hint">Not quite — try another piece.</p>
            )}

            <button type="button" className="toy-maker__change-toy" onClick={reset}>
              ← Choose a different toy
            </button>
          </div>
        )}

        {/* ---------- Completion ---------- */}
        {toy && done && (
          <div className="toy-maker__complete">
            <div className="toy-maker__complete-stage">
              {picked.map((emoji, i) => (
                <span key={i} className="toy-maker__assembled-piece toy-maker__assembled-piece--big">{emoji}</span>
              ))}
            </div>
            <h2>You built the {toy.name}!</h2>
            <p>{toy.intro}</p>
            <div className="toy-maker__complete-actions">
              <button type="button" className="toy-maker__primary-btn" onClick={reset}>
                Build Another Toy
              </button>
              <Link to="/stories" className="toy-maker__secondary-btn">
                Explore More Stories →
              </Link>
            </div>
          </div>
        )}

        {/* ---------- Did you know bar ---------- */}
        <div className="toy-maker__didyouknow">
          <span className="toy-maker__didyouknow-icon">💡</span>
          <p>
            <strong>Did you know?</strong> These toys weren't just for fun — they helped children learn about movement, balance and the world around them.
          </p>
          <Link to="/stories" className="toy-maker__didyouknow-cta">Explore more stories →</Link>
        </div>
      </div>
    </section>
  )
}