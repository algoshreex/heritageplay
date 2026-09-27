// A single 16-cell path is shared by every shape (so the same reconstruction
// config plays the same regardless of shape) — only the visual layout of
// that path changes. Coordinates are [col, row] grid positions, 0-indexed.

export const PATH_LENGTH = 16

export function getShapeLayout(shape) {
  switch (shape) {
    case 'Grid': {
      // Snake through a 4x4 grid, alternating direction each row.
      const coords = Array.from({ length: PATH_LENGTH }, (_, i) => {
        const row = Math.floor(i / 4)
        const col = row % 2 === 0 ? i % 4 : 3 - (i % 4)
        return [col, row]
      })
      return { coords, cols: 4, rows: 4 }
    }

    case 'Cross-shaped': {
      // Four 3-cell arms radiating from a center at (3,3), plus a 4-cell
      // diamond "hub" around the center — a simplified nod to cross-track
      // race games like Pachisi.
      const coords = [
        [3, 2], [3, 1], [3, 0], // up arm
        [2, 3], [1, 3], [0, 3], // left arm
        [3, 4], [3, 5], [3, 6], // down arm
        [4, 3], [5, 3], [6, 3], // right arm
        [2, 2], [4, 2], [4, 4], [2, 4], // hub
      ]
      return { coords, cols: 7, rows: 7 }
    }

    case 'Irregular': {
      // A wavy, uneven zigzag rather than a clean line or grid.
      const pattern = [0, 1, 0, 1, 1, 0, 0, 1]
      const coords = Array.from({ length: PATH_LENGTH }, (_, i) => [i, pattern[i % pattern.length]])
      return { coords, cols: PATH_LENGTH, rows: 2 }
    }

    case 'Path':
    default: {
      const coords = Array.from({ length: PATH_LENGTH }, (_, i) => [i, 0])
      return { coords, cols: PATH_LENGTH, rows: 1 }
    }
  }
}

// Deterministic "points" value per cell, used only for the
// Collect-the-most-points objective — a small, fixed pattern so the board
// is predictable across playthroughs.
export function pointValueForCell(index) {
  return ((index * 7) % 3) + 1
}
