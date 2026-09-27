export const CATEGORIES = [
  { id: 'cities', icon: '🏛️', title: 'Ancient Cities', body: 'Explore the planned cities, trade networks and settlements of the Indus Valley.' },
  { id: 'artifacts', icon: '🏺', title: 'Artifacts', body: 'Discover everyday objects, craftsmanship and unique artifacts from the past.' },
  { id: 'daily-life', icon: '👥', title: 'Daily Life', body: 'Step into the lives of people — their food, clothing, games and culture.' },
  { id: 'architecture', icon: '🏛️', title: 'Architecture', body: 'See how the cities were planned, built and designed with advanced systems.' },
]

export const SITES = [
  {
    id: 'harappa',
    name: 'Harappa',
    period: 'c. 2600 – 1900 BCE',
    location: 'Punjab, Pakistan',
    body: 'One of the largest cities of the Indus Valley, known for its planned layout and craftsmanship.',
  },
  {
    id: 'mohenjo-daro',
    name: 'Mohenjo-daro',
    period: 'c. 2600 – 1900 BCE',
    location: 'Sindh, Pakistan',
    body: 'A well-planned city with streets, drainage systems and public structures like the Great Bath.',
  },
  {
    id: 'dholavira',
    name: 'Dholavira',
    period: 'c. 3000 – 1500 BCE',
    location: 'Kutch, Gujarat',
    body: 'Known for its water management system, city planning and unique sign boards.',
  },
  {
    id: 'lothal',
    name: 'Lothal',
    period: 'c. 2400 – 1900 BCE',
    location: 'Gujarat',
    body: 'An important trade center with a dockyard, workshops and craft production.',
  },
]

export const CITY_MARKERS = [
  { id: 'citadel', label: 'Citadel', top: 30, left: 55, note: 'The raised, walled area housing important public buildings.' },
  { id: 'houses', top: 32, left: 82, label: 'Houses', note: 'Multi-room brick houses, many with their own wells and drains.' },
  { id: 'great-bath', top: 68, left: 42, label: 'Great Bath', note: 'A large watertight tank, likely used for ritual bathing.' },
  { id: 'streets', top: 70, left: 84, label: 'Streets & Drains', note: 'Grid-planned streets with covered drainage running alongside.' },
]

export const ARTIFACTS = [
  { id: 'pottery', icon: '🏺', title: 'Terracotta Pottery', body: 'Used for storage and daily use.' },
  { id: 'bull', icon: '🐂', title: 'Terracotta Bull', body: 'A popular motif found at Harappa and Mohenjo-daro.' },
  { id: 'seal', icon: '🪙', title: 'Steatite Seal', body: 'Often used for trade and identification.' },
  { id: 'dancing-girl', icon: '🗿', title: 'Dancing Girl (inspired)', body: 'A small bronze figurine from Mohenjo-daro.' },
]