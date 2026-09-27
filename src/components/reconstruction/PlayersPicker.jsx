import { PLAYER_COUNTS } from '../../data/reconstructionOptions.js'
import '../detective/HypothesisPanel.css'

export default function PlayersPicker({ value, onChange }) {
  return (
    <div className="hypothesis-field">
      <div className="hypothesis-field__options">
        {PLAYER_COUNTS.map((n) => (
          <button
            key={n}
            type="button"
            className={'hypothesis-field__option' + (value === n ? ' hypothesis-field__option--selected' : '')}
            aria-pressed={value === n}
            onClick={() => onChange(n)}
          >
            {n} players
          </button>
        ))}
      </div>
    </div>
  )
}
