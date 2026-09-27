import { MOVEMENT_OPTIONS } from '../../data/reconstructionOptions.js'
import './BlockOptions.css'

export default function MovementPicker({ value, onChange }) {
  return (
    <div className="block-options">
      {MOVEMENT_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={'block-option' + (value === opt.value ? ' block-option--selected' : '')}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          <strong>{opt.value}</strong>
          {opt.description}
        </button>
      ))}
    </div>
  )
}
