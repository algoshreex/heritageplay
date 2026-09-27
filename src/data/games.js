// Static, historically-inspired games available under "Play the Past".
// Each game is a self-contained page served from /public/games and opened
// as a full page (not a React route) since the game engines are vanilla
// HTML/CSS/JS builds, not React components.
export const GAMES = [
  {
    id: 'ashtapada',
    number: '01',
    era: 'ANCIENT INDIA',
    tag: 'ANCIENT INDIAN BOARD GAME',
    title: 'Ashtapada',
    summary:
      "Explore the ancient Indian 8×8 board-game tradition through a modern digital reconstruction.",
    info: [
      { icon: '🎲', label: 'Strategy' },
      { icon: '👥', label: '2 Players' },
      { icon: '🏺', label: 'Ancient India' },
    ],
    href: '/games/ashtapada.html',
  },
  {
    id: 'harappan',
    number: '02',
    era: 'HARAPPAN HERITAGE',
    tag: 'HISTORICALLY INSPIRED',
    title: 'Harappan Dice',
    summary:
      'A digital dice experience inspired by gaming artifacts associated with the Indus Valley Civilization.',
    info: [
      { icon: '🎲', label: 'Dice Strategy' },
      { icon: '👥', label: '2 Players' },
      { icon: '🏺', label: 'Harappan Era' },
    ],
    href: '/games/harappan.html',
  },
]
