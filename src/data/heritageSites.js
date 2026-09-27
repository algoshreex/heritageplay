// Each `top`/`left` is a percentage position on YOUR map image
// (public/heritage-map.png). Positions are approximate — click anywhere on
// the map and check the browser console (F12) for the exact percentage,
// then paste it in here.
export const HERITAGE_SITES = [
  {
    id: 'mohenjo-daro',
    name: 'Mohenjo-daro',
    location: 'Sindh, Pakistan (present day)',
    top: 22,
    left: 32,
    accent: 'var(--color-saffron)',
    civilization: 'Indus Valley Civilization',
    period: '2500 – 1900 BCE',
    famousFor: 'Urban Planning, Dice & Gamesmen, Lattice Screens',
    description:
      'One of the largest cities of the Indus Valley Civilization, Mohenjo-daro has provided evidence of advanced urban planning and drainage systems — and an unusually large number of gaming artifacts: cubical dice, gamesmen in faience, agate, marble and shell, and carved lattice screens set into its brick walls.',
  },
  {
    id: 'harappa',
    name: 'Harappa',
    location: 'Punjab, Pakistan (present day)',
    top: 14,
    left: 38,
    accent: 'var(--color-royal-blue)',
    civilization: 'Indus Valley Civilization',
    period: '2600 – 1900 BCE',
    famousFor: 'Granaries, Seals, Terracotta Dice',
    description:
      'The type-site that gave the Harappan civilization its name. Excavations between 1995 and 2001 turned up a cubical die numbered 1 to 6 in rubble, alongside granaries, seals, and terracotta toys — everyday evidence of a highly organized city.',
  },
  {
    id: 'dholavira',
    name: 'Dholavira',
    location: 'Gujarat, India',
    top: 47,
    left: 24,
    accent: 'var(--color-heritage-green)',
    civilization: 'Indus Valley Civilization',
    period: '2650 – 1450 BCE',
    famousFor: 'Water Reservoirs, Stone Gaming Boards',
    description:
      'Famous for its sophisticated water-management system, Dholavira has also produced incised gaming boards and dice — a sign that even a city engineered against water scarcity still found space, and time, for play.',
  },
  {
    id: 'lothal',
    name: 'Lothal',
    location: 'Gujarat, India',
    top: 58,
    left: 28,
    accent: 'var(--color-peacock)',
    civilization: 'Indus Valley Civilization',
    period: '2200 – 1900 BCE',
    famousFor: 'Dockyard, Dice, Trade with Mesopotamia',
    description:
      "Best known for its dockyard, Lothal also produced a well-preserved set of cubical dice and a possible gaming board scratched onto a brick — a rare glimpse of play among a trading community connected by sea to Mesopotamia and the Gulf.",
  },
  {
    id: 'kalibangan',
    name: 'Kalibangan',
    location: 'Rajasthan, India',
    top: 33,
    left: 34,
    accent: 'var(--color-rani-pink)',
    civilization: 'Indus Valley Civilization',
    period: '2600 – 1900 BCE',
    famousFor: 'Ploughed Field, Fire Altars, Dice',
    description:
      "Known for its ploughed field and fire-altar remains, Kalibangan's houses also contained terracotta dice numbered on the classic Indus pattern — 1 opposite 2, 3 opposite 4, 5 opposite 6 — the same convention documented at Mohenjo-daro.",
  },
  {
    id: 'rakhigarhi',
    name: 'Rakhigarhi',
    location: 'Haryana, India',
    top: 25,
    left: 42,
    accent: 'var(--color-royal-purple)',
    civilization: 'Indus Valley Civilization',
    period: '2600 – 1900 BCE',
    famousFor: 'Cemetery, Gamesmen, Toy Carts',
    description:
      "One of the largest Harappan sites ever excavated, Rakhigarhi's mounds have yielded terracotta dice, gamesmen, and toy carts alongside its famous cemetery — evidence that board games were part of daily life here as much as at Mohenjo-daro.",
  },
]