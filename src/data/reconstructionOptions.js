import { getEvidenceForCategory } from './cases.js'

// ---------------------------------------------------------------------------
// Builder option lists
// ---------------------------------------------------------------------------

export const BOARD_SHAPES = [
  { value: 'Grid', description: 'A square grid of cells, arranged in rows and columns.' },
  { value: 'Path', description: 'A single continuous line of cells from start to finish.' },
  { value: 'Cross-shaped', description: 'Four arms meeting at a central square, like a plus sign.' },
  { value: 'Irregular', description: 'An uneven layout that does not follow a simple geometric pattern.' },
]

export const PIECE_SHAPES = ['Cone', 'Disc', 'Cowrie', 'Carved figure']

export const RANDOMIZER_CONFIGS = [
  { value: 'Two-sided throw', description: 'A binary throw — think a shell or stick landing one of two ways.', range: [0, 1] },
  { value: 'Four-sided sticks', description: 'A set of throwing sticks, scored 0–4 depending on how many land face-up.', range: [0, 4] },
  { value: 'Six-faced die', description: 'A cube marked one to six, thrown for a value each turn.', range: [1, 6] },
  { value: 'Six cowrie shells', description: 'Six shells thrown together; the score is how many land mouth-up.', range: [0, 6] },
]

export const MOVEMENT_OPTIONS = [
  { value: 'Dice-based', description: 'Pieces move forward by the value thrown on the randomizer.' },
  { value: 'Fixed steps', description: 'Pieces move forward by the same fixed number of steps every turn.' },
  { value: 'Area-based', description: 'On each turn, the player chooses a short distance to move.' },
]

export const OBJECTIVE_OPTIONS = [
  { value: 'Race to the end', description: 'The first player to bring all their pieces to the final cell wins.' },
  { value: 'Capture opponent pieces', description: 'Landing exactly on an opponent sends their piece back to the start.' },
  { value: 'Collect the most points', description: 'Cells award points the first time a piece lands there; the highest score wins.' },
]

export const PLAYER_COUNTS = [2, 3, 4]

export const CATEGORY_META = {
  board: { label: 'Board' },
  pieces: { label: 'Pieces' },
  randomizer: { label: 'Randomizer' },
  movement: { label: 'Movement' },
  objective: { label: 'Objective' },
  players: { label: 'Players' },
}

// ---------------------------------------------------------------------------
// Prefill: turn a Phase 2 hypothesis into a starting point for the builder.
// Unknown / unmapped hypothesis answers are simply left for the user to
// choose explicitly — the builder never guesses on their behalf.
// ---------------------------------------------------------------------------

const MOVEMENT_FROM_HYPOTHESIS = {
  'Dice-based': 'Dice-based',
  'Fixed movement': 'Fixed steps',
  'Area-based': 'Area-based',
}

const OBJECTIVE_FROM_HYPOTHESIS = {
  'Reach a destination': 'Race to the end',
  'Capture pieces': 'Capture opponent pieces',
  'Collect points': 'Collect the most points',
}

export function prefillFromHypothesis(hypothesis = {}) {
  const state = {
    board: BOARD_SHAPES.some((b) => b.value === hypothesis.boardStructure) ? hypothesis.boardStructure : null,
    piecesCount: hypothesis.pieces === 'Many (5+ each)' ? 6 : hypothesis.pieces === 'Few (2–4 each)' ? 3 : 4,
    pieceShape: 'Cone',
    useRandomizer: hypothesis.movement !== 'Fixed movement',
    randomizer: 'Six-faced die',
    movement: MOVEMENT_FROM_HYPOTHESIS[hypothesis.movement] || null,
    objective: OBJECTIVE_FROM_HYPOTHESIS[hypothesis.objective] || null,
    players: /^[2-4]$/.test(hypothesis.players) ? Number(hypothesis.players) : 2,
  }
  return state
}

// ---------------------------------------------------------------------------
// Evidence Support Score
//
// This is a prototype transparency indicator, NOT a real archaeological
// measurement. For each of the six builder categories, we look at whichever
// evidence items in the case are tagged as relevant to that category and
// take the strongest status among them:
//   Verified Evidence          → 100 points
//   Scholarly Interpretation   →  55 points
//   Reconstruction / no linked evidence → 25 points
// The overall score is the plain average across all six categories.
// ---------------------------------------------------------------------------

const TIER_RANK = { VERIFIED: 3, INTERPRETATION: 2, RECONSTRUCTION: 1 }
const TIER_POINTS = { VERIFIED: 100, INTERPRETATION: 55, RECONSTRUCTION: 25 }

function strongestTier(evidenceItems) {
  if (!evidenceItems.length) return 'RECONSTRUCTION'
  return evidenceItems.reduce((best, ev) => (TIER_RANK[ev.status] > TIER_RANK[best] ? ev.status : best), 'RECONSTRUCTION')
}

export function computeEvidenceSupport(caseData, builderState) {
  const categories = Object.keys(CATEGORY_META).map((key) => {
    const items = getEvidenceForCategory(caseData, key)
    const tier = strongestTier(items)
    return {
      key,
      label: CATEGORY_META[key].label,
      choice: describeChoice(key, builderState),
      tier,
      points: TIER_POINTS[tier],
      supportingEvidence: items.map((ev) => ev.title),
    }
  })

  const overall = Math.round(categories.reduce((sum, c) => sum + c.points, 0) / categories.length)

  return { overall, categories }
}

function describeChoice(key, state) {
  switch (key) {
    case 'board': return state.board || '—'
    case 'pieces': return `${state.piecesCount} × ${state.pieceShape}`
    case 'randomizer': return state.useRandomizer ? state.randomizer : 'No randomizer'
    case 'movement': return state.movement || '—'
    case 'objective': return state.objective || '—'
    case 'players': return `${state.players} players`
    default: return '—'
  }
}
