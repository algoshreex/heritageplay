import { BOARD_SHAPES } from '../../data/reconstructionOptions.js'
import '../detective/HypothesisPanel.css'
import './BoardPicker.css'

function BoardPreviewSVG({ shape }) {
  const cell = 22
  const stroke = 'var(--color-royal-blue)'

  if (shape === 'Grid') {
    const n = 5
    const size = n * cell
    return (
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="180">
        {Array.from({ length: n + 1 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * cell} x2={size} y2={i * cell} stroke={stroke} strokeWidth="1.5" opacity="0.6" />
        ))}
        {Array.from({ length: n + 1 }).map((_, i) => (
          <line key={`v${i}`} x1={i * cell} y1={0} x2={i * cell} y2={size} stroke={stroke} strokeWidth="1.5" opacity="0.6" />
        ))}
      </svg>
    )
  }

  if (shape === 'Path') {
    const n = 10
    const w = n * cell
    return (
      <svg viewBox={`0 0 ${w} ${cell * 2}`} width="100%" height="120">
        {Array.from({ length: n }).map((_, i) => (
          <rect key={i} x={i * cell} y={cell / 2} width={cell} height={cell} fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.7" />
        ))}
      </svg>
    )
  }

  if (shape === 'Cross-shaped') {
    const arm = 4
    const size = (arm * 2 + 3) * cell
    const mid = size / 2 - cell * 1.5
    const cells = []
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cells.push([mid + i * cell, mid + j * cell])
    for (let i = 1; i <= arm; i++) {
      cells.push([mid + cell, mid - i * cell])
      cells.push([mid + cell, mid + (2 + i) * cell])
      cells.push([mid - i * cell, mid + cell])
      cells.push([mid + (2 + i) * cell, mid + cell])
    }
    return (
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="200">
        {cells.map(([x, y], i) => (
          <rect key={i} x={x} y={y} width={cell} height={cell} fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.7" />
        ))}
      </svg>
    )
  }

  // Irregular
  const cells = [
    [0, 20], [24, 20], [48, 0], [48, 24], [72, 24], [96, 24], [96, 48], [72, 48], [48, 48], [24, 48], [0, 48],
  ]
  return (
    <svg viewBox="-4 -4 108 78" width="100%" height="160">
      {cells.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={cell} height={cell} fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.7" />
      ))}
    </svg>
  )
}

export default function BoardPicker({ value, onChange }) {
  return (
    <div className="board-picker">
      <div className="hypothesis-field">
        <div className="hypothesis-field__options">
          {BOARD_SHAPES.map((shape) => (
            <button
              key={shape.value}
              type="button"
              className={'hypothesis-field__option' + (value === shape.value ? ' hypothesis-field__option--selected' : '')}
              aria-pressed={value === shape.value}
              onClick={() => onChange(shape.value)}
            >
              {shape.value}
            </button>
          ))}
        </div>
      </div>

      <div className="board-picker__preview">
        {value ? (
          <>
            <BoardPreviewSVG shape={value} />
            <p className="board-picker__caption">
              {BOARD_SHAPES.find((s) => s.value === value)?.description}
            </p>
          </>
        ) : (
          <p className="board-picker__placeholder">Choose a board shape to see a preview.</p>
        )}
      </div>
    </div>
  )
}
