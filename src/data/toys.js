// // Each toy is built in a few steps. At each step the person picks one
// // option by clicking it — the correct choice is historically grounded,
// // the wrong ones are plausible-but-incorrect distractors.
// export const TOYS = [
//   {
//     id: 'bull-cart',
//     name: 'Terracotta Bull Cart',
//     intro:
//       'A classic Indus Valley toy — a clay cart pulled by a bull figure, found across Harappa and Mohenjo-daro, likely pulled along the ground by a string.',
//     steps: [
//       {
//         id: 'body',
//         prompt: 'Choose the cart body',
//         options: [
//           { id: 'a', emoji: '🛒', label: 'Rectangular clay cart bed', correct: true },
//           { id: 'b', emoji: '🚗', label: 'Rounded modern car shape' },
//           { id: 'c', emoji: '🛖', label: 'Small hut structure' },
//         ],
//       },
//       {
//         id: 'wheels',
//         prompt: 'Choose the wheels',
//         options: [
//           { id: 'a', emoji: '⚙️', label: 'Two solid disc wheels', correct: true },
//           { id: 'b', emoji: '🛞', label: 'Four rubber tyres' },
//           { id: 'c', emoji: '🪀', label: 'Spoked bicycle wheels' },
//         ],
//       },
//       {
//         id: 'animal',
//         prompt: 'Choose the animal figure',
//         options: [
//           { id: 'a', emoji: '🐂', label: 'Bull', correct: true },
//           { id: 'b', emoji: '🐘', label: 'Elephant' },
//           { id: 'c', emoji: '🐍', label: 'Snake' },
//         ],
//       },
//     ],
//     resultEmojis: ['🐂', '🛒', '⚙️'],
//   },
//   {
//     id: 'whistle-bird',
//     name: 'Terracotta Whistle Bird',
//     intro:
//       'Small bird-shaped whistles made of fired clay have been found at several Harappan sites — likely toys and musical instruments for children.',
//     steps: [
//       {
//         id: 'shape',
//         prompt: 'Choose the base shape',
//         options: [
//           { id: 'a', emoji: '🐦', label: 'Bird-shaped body', correct: true },
//           { id: 'b', emoji: '🐟', label: 'Fish-shaped body' },
//           { id: 'c', emoji: '🧱', label: 'Flat brick shape' },
//         ],
//       },
//       {
//         id: 'hole',
//         prompt: 'Where does the whistle hole go?',
//         options: [
//           { id: 'a', emoji: '🕳️', label: 'Small hole at the tail', correct: true },
//           { id: 'b', emoji: '🔲', label: 'Large square opening' },
//           { id: 'c', emoji: '➕', label: 'No hole at all' },
//         ],
//       },
//       {
//         id: 'finish',
//         prompt: 'Choose the finish',
//         options: [
//           { id: 'a', emoji: '🟤', label: 'Plain red-washed clay', correct: true },
//           { id: 'b', emoji: '🌈', label: 'Bright plastic paint' },
//           { id: 'c', emoji: '⬛', label: 'Polished black stone' },
//         ],
//       },
//     ],
//     resultEmojis: ['🐦', '🕳️', '🟤'],
//   },
//   {
//     id: 'monkey-toy',
//     name: 'Climbing Monkey Toy',
//     intro:
//       'Small terracotta monkey figures with holes for a string have been found — pulled or slid along a string, an early "moving toy."',
//     steps: [
//       {
//         id: 'figure',
//         prompt: 'Choose the figure',
//         options: [
//           { id: 'a', emoji: '🐒', label: 'Monkey figure', correct: true },
//           { id: 'b', emoji: '🐄', label: 'Cow figure' },
//           { id: 'c', emoji: '🦁', label: 'Lion figure' },
//         ],
//       },
//       {
//         id: 'mechanism',
//         prompt: 'Choose how it moves',
//         options: [
//           { id: 'a', emoji: '🧵', label: 'Pulled with a string through holes', correct: true },
//           { id: 'b', emoji: '🔋', label: 'Battery-powered motor' },
//           { id: 'c', emoji: '🎡', label: 'Wind-up spring' },
//         ],
//       },
//       {
//         id: 'material',
//         prompt: 'Choose the material',
//         options: [
//           { id: 'a', emoji: '🟫', label: 'Fired terracotta clay', correct: true },
//           { id: 'b', emoji: '🧊', label: 'Clear plastic' },
//           { id: 'c', emoji: '🪵', label: 'Painted wood' },
//         ],
//       },
//     ],
//     resultEmojis: ['🐒', '🧵', '🟫'],
//   },
// ]

export const TOYS = [
  {
    id: 'bull-cart',
    name: 'Terracotta Bull Cart',
    popular: true,
    material: 'Terracotta',
    foundAt: 'Harappa & Mohenjo-daro',
    period: 'c. 2500 BCE',
    intro:
      'A classic Indus Valley toy — a clay cart pulled by a bull figure, found across Harappa and Mohenjo-daro, likely pulled along the ground by a string.',
    resultEmojis: ['🐂', '🛒', '⚙️'],
    steps: [
      {
        id: 'body',
        prompt: 'Choose the cart body',
        options: [
          { id: 'a', emoji: '🛒', label: 'Rectangular clay cart bed', correct: true },
          { id: 'b', emoji: '🚗', label: 'Rounded modern car shape' },
          { id: 'c', emoji: '🛖', label: 'Small hut structure' },
        ],
      },
      {
        id: 'wheels',
        prompt: 'Choose the wheels',
        options: [
          { id: 'a', emoji: '⚙️', label: 'Two solid disc wheels', correct: true },
          { id: 'b', emoji: '🛞', label: 'Four rubber tyres' },
          { id: 'c', emoji: '🪀', label: 'Spoked bicycle wheels' },
        ],
      },
      {
        id: 'animal',
        prompt: 'Choose the animal figure',
        options: [
          { id: 'a', emoji: '🐂', label: 'Bull', correct: true },
          { id: 'b', emoji: '🐘', label: 'Elephant' },
          { id: 'c', emoji: '🐍', label: 'Snake' },
        ],
      },
    ],
  },
  {
    id: 'whistle-bird',
    name: 'Terracotta Whistle Bird',
    popular: false,
    material: 'Terracotta',
    foundAt: 'Harappa & Mohenjo-daro',
    period: 'c. 2500 BCE',
    intro:
      'Small bird-shaped whistles made of fired clay have been found at several Harappan sites — likely toys and musical instruments for children.',
    resultEmojis: ['🐦', '🕳️', '🟤'],
    steps: [
      {
        id: 'shape',
        prompt: 'Choose the base shape',
        options: [
          { id: 'a', emoji: '🐦', label: 'Bird-shaped body', correct: true },
          { id: 'b', emoji: '🐟', label: 'Fish-shaped body' },
          { id: 'c', emoji: '🧱', label: 'Flat brick shape' },
        ],
      },
      {
        id: 'hole',
        prompt: 'Where does the whistle hole go?',
        options: [
          { id: 'a', emoji: '🕳️', label: 'Small hole at the tail', correct: true },
          { id: 'b', emoji: '🔲', label: 'Large square opening' },
          { id: 'c', emoji: '➕', label: 'No hole at all' },
        ],
      },
      {
        id: 'finish',
        prompt: 'Choose the finish',
        options: [
          { id: 'a', emoji: '🟤', label: 'Plain red-washed clay', correct: true },
          { id: 'b', emoji: '🌈', label: 'Bright plastic paint' },
          { id: 'c', emoji: '⬛', label: 'Polished black stone' },
        ],
      },
    ],
  },
  {
    id: 'monkey-toy',
    name: 'Climbing Monkey Toy',
    popular: false,
    material: 'Terracotta',
    foundAt: 'Harappa & Mohenjo-daro',
    period: 'c. 2500 BCE',
    intro:
      'Small terracotta monkey figures with holes for a string have been found — pulled or slid along a string, an early "moving toy."',
    resultEmojis: ['🐒', '🧵', '🟫'],
    steps: [
      {
        id: 'figure',
        prompt: 'Choose the figure',
        options: [
          { id: 'a', emoji: '🐒', label: 'Monkey figure', correct: true },
          { id: 'b', emoji: '🐄', label: 'Cow figure' },
          { id: 'c', emoji: '🦁', label: 'Lion figure' },
        ],
      },
      {
        id: 'mechanism',
        prompt: 'Choose how it moves',
        options: [
          { id: 'a', emoji: '🧵', label: 'Pulled with a string through holes', correct: true },
          { id: 'b', emoji: '🔋', label: 'Battery-powered motor' },
          { id: 'c', emoji: '🎡', label: 'Wind-up spring' },
        ],
      },
      {
        id: 'material',
        prompt: 'Choose the material',
        options: [
          { id: 'a', emoji: '🟫', label: 'Fired terracotta clay', correct: true },
          { id: 'b', emoji: '🧊', label: 'Clear plastic' },
          { id: 'c', emoji: '🪵', label: 'Painted wood' },
        ],
      },
    ],
  },
]