import { useMemo, useState } from 'react'
import { getShapeLayout, pointValueForCell, PATH_LENGTH } from './boardLayouts.js'
import { RANDOMIZER_CONFIGS } from '../../data/reconstructionOptions.js'
import './PlayableBoard.css'

const PLAYER_COLORS = ['var(--color-saffron)', 'var(--color-royal-blue)', 'var(--color-heritage-green)', 'var(--color-rani-pink)']
const FIXED_STEP = 2

function rollFor(configValue) {
  const config = RANDOMIZER_CONFIGS.find((c) => c.value === configValue) || RANDOMIZER_CONFIGS[2]
  if (config.value === 'Six cowrie shells') {
    // Simulate six independent shell-flips, as the real object would work.
    let heads = 0
    for (let i = 0; i < 6; i++) if (Math.random() < 0.5) heads++
    return heads
  }
  const [min, max] = config.range
  return min + Math.floor(Math.random() * (max - min + 1))
}

function makeInitialPieces(players, piecesCount) {
  return Array.from({ length: players }, () =>
    Array.from({ length: piecesCount }, () => ({ position: 0, finished: false })),
  )
}

export default function PlayableBoard({ builder }) {
  const { board, piecesCount, players, movement, objective } = builder

  // Movement is what actually drives play. If the reconstruction says
  // "Dice-based" movement but the randomizer stage was set to "no
  // randomizer", we still need something to roll — default to a six-faced
  // die and say so, rather than silently guessing or breaking.
  const usesDiceEngine = movement === 'Dice-based'
  const effectiveRandomizer = builder.useRandomizer ? builder.randomizer : 'Six-faced die'
  const randomizerFallback = usesDiceEngine && !builder.useRandomizer

  const layout = useMemo(() => getShapeLayout(board), [board])
  const isPoints = objective === 'Collect the most points'
  const isCapture = objective === 'Capture opponent pieces'

  const [pieces, setPieces] = useState(() => makeInitialPieces(players, piecesCount))
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [pendingRoll, setPendingRoll] = useState(null)
  const [pendingDistance, setPendingDistance] = useState(null)
  const [scores, setScores] = useState(() => Array(players).fill(0))
  const [visited, setVisited] = useState(() => new Set([0]))
  const [turnCount, setTurnCount] = useState(0)
  const [message, setMessage] = useState('Your move — take your turn.')
  const [winner, setWinner] = useState(null)

  const MAX_TURNS = 30
  const gameOver = winner !== null

  function resetGame() {
    setPieces(makeInitialPieces(players, piecesCount))
    setCurrentPlayer(0)
    setPendingRoll(null)
    setPendingDistance(null)
    setScores(Array(players).fill(0))
    setVisited(new Set([0]))
    setTurnCount(0)
    setWinner(null)
    setMessage('Your move — take your turn.')
  }

  function advanceTurn() {
    setPendingRoll(null)
    setPendingDistance(null)
    setCurrentPlayer((p) => (p + 1) % players)
    setTurnCount((t) => t + 1)
  }

  function handleRoll() {
    const value = rollFor(effectiveRandomizer)
    setPendingRoll(value)
    setMessage(value === 0 ? `Rolled ${value} — no move available this turn.` : `Rolled ${value}. Choose a piece to move.`)
  }

  function handlePassAfterZero() {
    setMessage('Turn passed.')
    advanceTurn()
  }

  function handleSelectDistance(n) {
    setPendingDistance(n)
    setMessage(`Move ${n} selected. Choose a piece to move.`)
  }

  function getMoveAmount() {
    if (movement === 'Dice-based') return pendingRoll
    if (movement === 'Fixed steps') return FIXED_STEP
    if (movement === 'Area-based') return pendingDistance
    return null
  }

  function canMove() {
    if (gameOver) return false
    if (movement === 'Dice-based') return pendingRoll !== null && pendingRoll > 0
    if (movement === 'Area-based') return pendingDistance !== null
    return true // Fixed steps can always move
  }

  function movePiece(playerIdx, pieceIdx) {
    if (playerIdx !== currentPlayer || gameOver) return
    const amount = getMoveAmount()
    if (amount === null || !canMove()) return

    const piece = pieces[currentPlayer][pieceIdx]
    if (piece.finished) return

    const newPos = Math.min(PATH_LENGTH - 1, piece.position + amount)
    const nextPieces = pieces.map((row) => row.map((p) => ({ ...p })))
    nextPieces[currentPlayer][pieceIdx].position = newPos
    if (newPos === PATH_LENGTH - 1) nextPieces[currentPlayer][pieceIdx].finished = true

    let note = `Moved to cell ${newPos + 1}.`
    let nextScores = scores
    let nextVisited = visited

    if (isCapture && newPos !== PATH_LENGTH - 1) {
      let captured = false
      nextPieces.forEach((row, pIdx) => {
        if (pIdx === currentPlayer) return
        row.forEach((p) => {
          if (!p.finished && p.position === newPos) {
            p.position = 0
            captured = true
          }
        })
      })
      if (captured) note += ' Captured an opponent piece, sending it back to the start!'
    }

    if (isPoints && newPos !== PATH_LENGTH - 1 && !visited.has(newPos)) {
      const gained = pointValueForCell(newPos)
      nextScores = scores.map((s, i) => (i === currentPlayer ? s + gained : s))
      nextVisited = new Set(visited).add(newPos)
      note += ` +${gained} points.`
    }

    setPieces(nextPieces)
    setScores(nextScores)
    setVisited(nextVisited)

    // Win check
    if (!isPoints && nextPieces[currentPlayer].every((p) => p.finished)) {
      setWinner(currentPlayer)
      setMessage(`Player ${currentPlayer + 1} wins — all pieces reached the end! ${note}`)
      return
    }

    const nextTurnCount = turnCount + 1
    if (isPoints && (nextTurnCount >= MAX_TURNS || nextVisited.size >= PATH_LENGTH - 1)) {
      const top = Math.max(...nextScores)
      const leaders = nextScores.reduce((acc, s, i) => (s === top ? [...acc, i] : acc), [])
      setWinner(leaders.length === 1 ? leaders[0] : 'tie')
      setMessage(
        leaders.length === 1
          ? `Player ${leaders[0] + 1} wins with ${top} points! ${note}`
          : `It's a tie at ${top} points! ${note}`,
      )
      return
    }

    setMessage(note)
    setPendingRoll(null)
    setPendingDistance(null)
    setCurrentPlayer((p) => (p + 1) % players)
    setTurnCount(nextTurnCount)
  }

  const cellSize = 40

  return (
    <div className="playable-board">
      {randomizerFallback && (
        <p className="playable-board__note">
          Your reconstruction didn't include a randomizer, but this movement
          type needs one to play — a six-faced die is used here so the
          prototype stays playable.
        </p>
      )}

      <div className="playable-board__status">
        <div className="playable-board__turn">
          <span className="playable-board__dot" style={{ background: PLAYER_COLORS[currentPlayer] }} />
          {gameOver ? 'Game over' : `Player ${currentPlayer + 1}'s turn`}
        </div>
        <p className="playable-board__message">{message}</p>
      </div>

      <div
        className="playable-board__grid"
        style={{
          gridTemplateColumns: `repeat(${layout.cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${layout.rows}, ${cellSize}px)`,
        }}
      >
        {layout.coords.map(([col, row], index) => {
          const occupants = []
          pieces.forEach((playerPieces, pIdx) => {
            playerPieces.forEach((p, pieceIdx) => {
              if (p.position === index) occupants.push({ pIdx, pieceIdx, finished: p.finished })
            })
          })
          return (
            <div
              key={index}
              className={
                'playable-board__cell' +
                (index === 0 ? ' playable-board__cell--start' : '') +
                (index === PATH_LENGTH - 1 ? ' playable-board__cell--end' : '') +
                (isPoints && visited.has(index) ? ' playable-board__cell--visited' : '')
              }
              style={{ gridColumn: col + 1, gridRow: row + 1 }}
            >
              <span className="playable-board__cell-index">{index === 0 ? 'S' : index === PATH_LENGTH - 1 ? 'E' : index + 1}</span>
              {isPoints && index !== 0 && index !== PATH_LENGTH - 1 && (
                <span className="playable-board__cell-points">+{pointValueForCell(index)}</span>
              )}
              <div className="playable-board__occupants">
                {occupants.map((o, i) => (
                  <span
                    key={i}
                    className="playable-board__piece"
                    style={{ background: PLAYER_COLORS[o.pIdx % PLAYER_COLORS.length] }}
                    title={`Player ${o.pIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="playable-board__controls">
        {movement === 'Dice-based' && !gameOver && (
          <div className="playable-board__action">
            {pendingRoll === null ? (
              <button type="button" className="playable-board__roll" onClick={handleRoll}>
                Roll ({effectiveRandomizer})
              </button>
            ) : pendingRoll === 0 ? (
              <button type="button" className="playable-board__roll" onClick={handlePassAfterZero}>
                Continue (rolled 0)
              </button>
            ) : (
              <span className="playable-board__roll-result">Rolled: {pendingRoll} — pick a piece below</span>
            )}
          </div>
        )}

        {movement === 'Area-based' && !gameOver && (
          <div className="playable-board__action">
            <span className="playable-board__action-label">Choose distance:</span>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                type="button"
                className={'playable-board__distance' + (pendingDistance === n ? ' playable-board__distance--selected' : '')}
                onClick={() => handleSelectDistance(n)}
              >
                {n}
              </button>
            ))}
          </div>
        )}

        {movement === 'Fixed steps' && !gameOver && (
          <p className="playable-board__action-label">Every move advances {FIXED_STEP} steps. Pick a piece below.</p>
        )}

        <div className="playable-board__players">
          {Array.from({ length: players }).map((_, pIdx) => (
            <div key={pIdx} className={'playable-board__player' + (pIdx === currentPlayer ? ' playable-board__player--active' : '')}>
              <div className="playable-board__player-head">
                <span className="playable-board__dot" style={{ background: PLAYER_COLORS[pIdx % PLAYER_COLORS.length] }} />
                Player {pIdx + 1}
                {isPoints && <span className="playable-board__score">{scores[pIdx]} pts</span>}
              </div>
              <div className="playable-board__rack">
                {pieces[pIdx].map((p, pieceIdx) => (
                  <button
                    key={pieceIdx}
                    type="button"
                    disabled={p.finished || pIdx !== currentPlayer || gameOver || !canMove()}
                    className={'playable-board__rack-piece' + (p.finished ? ' playable-board__rack-piece--finished' : '')}
                    style={{ borderColor: PLAYER_COLORS[pIdx % PLAYER_COLORS.length] }}
                    onClick={() => movePiece(pIdx, pieceIdx)}
                  >
                    {p.finished ? '✓' : p.position + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {gameOver && (
        <div className="playable-board__end">
          <p>
            {winner === 'tie' ? "It's a tie!" : `Player ${Number(winner) + 1} wins!`}
          </p>
          <button type="button" className="playable-board__restart" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}

      {!gameOver && (
        <button type="button" className="playable-board__restart playable-board__restart--ghost" onClick={resetGame}>
          Restart
        </button>
      )}
    </div>
  )
}
