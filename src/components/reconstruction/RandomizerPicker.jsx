import { RANDOMIZER_CONFIGS } from '../../data/reconstructionOptions.js'
import '../detective/HypothesisPanel.css'
import './RandomizerPicker.css'

export default function RandomizerPicker({ useRandomizer, config, onToggle, onConfigChange }) {
  return (
    <div className="randomizer-picker">
      <div className="randomizer-picker__toggle">
        <button
          type="button"
          className={'randomizer-picker__option' + (useRandomizer ? ' randomizer-picker__option--selected' : '')}
          aria-pressed={useRandomizer}
          onClick={() => onToggle(true)}
        >
          Uses a randomizer
        </button>
        <button
          type="button"
          className={'randomizer-picker__option' + (!useRandomizer ? ' randomizer-picker__option--selected' : '')}
          aria-pressed={!useRandomizer}
          onClick={() => onToggle(false)}
        >
          No randomizer
        </button>
      </div>

      {useRandomizer ? (
        <div className="hypothesis-field" style={{ marginTop: 'var(--space-6)' }}>
          <legend>Randomizer type</legend>
          <div className="hypothesis-field__options">
            {RANDOMIZER_CONFIGS.map((c) => (
              <button
                key={c.value}
                type="button"
                className={'hypothesis-field__option' + (config === c.value ? ' hypothesis-field__option--selected' : '')}
                aria-pressed={config === c.value}
                onClick={() => onConfigChange(c.value)}
              >
                {c.value}
              </button>
            ))}
          </div>
          {config && (
            <p className="randomizer-picker__caption">
              {RANDOMIZER_CONFIGS.find((c) => c.value === config)?.description}
            </p>
          )}
        </div>
      ) : (
        <p className="randomizer-picker__caption" style={{ marginTop: 'var(--space-5)' }}>
          Without a randomizer, every turn moves a fixed number of steps or
          lets the player choose a short distance — set that up next.
        </p>
      )}
    </div>
  )
}
