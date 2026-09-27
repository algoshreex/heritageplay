import { PIECE_SHAPES } from '../../data/reconstructionOptions.js'
import { IconPiece } from '../Icons.jsx'
import '../detective/HypothesisPanel.css'
import './PiecesEditor.css'

const MIN_PIECES = 1
const MAX_PIECES = 8

export default function PiecesEditor({ count, shape, onCountChange, onShapeChange }) {
  return (
    <div className="pieces-editor">
      <div className="pieces-editor__stepper">
        <span className="pieces-editor__stepper-label">Pieces per player</span>
        <div className="pieces-editor__controls">
          <button
            type="button"
            className="pieces-editor__btn"
            disabled={count <= MIN_PIECES}
            onClick={() => onCountChange(Math.max(MIN_PIECES, count - 1))}
            aria-label="Remove a piece"
          >
            −
          </button>
          <span className="pieces-editor__count">{count}</span>
          <button
            type="button"
            className="pieces-editor__btn"
            disabled={count >= MAX_PIECES}
            onClick={() => onCountChange(Math.min(MAX_PIECES, count + 1))}
            aria-label="Add a piece"
          >
            +
          </button>
        </div>
      </div>

      <div className="pieces-editor__rack" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <IconPiece key={i} size={26} className="pieces-editor__token" />
        ))}
      </div>

      <div className="hypothesis-field">
        <legend>Piece shape</legend>
        <div className="hypothesis-field__options">
          {PIECE_SHAPES.map((s) => (
            <button
              key={s}
              type="button"
              className={'hypothesis-field__option' + (shape === s ? ' hypothesis-field__option--selected' : '')}
              aria-pressed={shape === s}
              onClick={() => onShapeChange(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
