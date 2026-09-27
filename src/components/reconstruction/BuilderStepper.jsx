import { IconCheck } from '../Icons.jsx'
import './BuilderStepper.css'

export const STAGES = [
  { key: 'board', label: 'Board' },
  { key: 'pieces', label: 'Pieces' },
  { key: 'randomizer', label: 'Randomizer' },
  { key: 'movement', label: 'Movement' },
  { key: 'objective', label: 'Objective' },
  { key: 'players', label: 'Players' },
  { key: 'review', label: 'Review' },
]

export default function BuilderStepper({ currentIndex, furthestIndex, onJump }) {
  return (
    <nav className="builder-stepper" aria-label="Reconstruction builder steps">
      <ol>
        {STAGES.map((stage, i) => {
          const state = i < currentIndex ? 'done' : i === currentIndex ? 'current' : 'upcoming'
          const reachable = i <= furthestIndex
          return (
            <li key={stage.key} className={`builder-stepper__item builder-stepper__item--${state}`}>
              <button
                type="button"
                disabled={!reachable}
                onClick={() => reachable && onJump(i)}
                aria-current={state === 'current' ? 'step' : undefined}
              >
                <span className="builder-stepper__dot">
                  {state === 'done' ? <IconCheck size={12} /> : i + 1}
                </span>
                <span className="builder-stepper__label">{stage.label}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
