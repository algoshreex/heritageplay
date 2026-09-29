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
    image: '/sites/harrapa.jpeg'
  },
  {
    id: 'mohenjo-daro',
    name: 'Mohenjo-daro',
    period: 'c. 2600 – 1900 BCE',
    location: 'Sindh, Pakistan',
    
    body: 'A well-planned city with streets, drainage systems and public structures like the Great Bath.',
    image: '/sites/mohanjodaro.jpeg',
  },
  {
    id: 'dholavira',
    name: 'Dholavira',
    period: 'c. 3000 – 1500 BCE',
    location: 'Kutch, Gujarat',
    body: 'Known for its water management system, city planning and unique sign boards.',
    image: '/sites/dholavia.jpeg',
  },
  {
    id: 'lothal',
    name: 'Lothal',
    period: 'c. 2400 – 1900 BCE',
    location: 'Gujarat',
    body: 'An important trade center with a dockyard, workshops and craft production.',
    image: '/sites/lothal.jpeg',
  },
]

export const CITY_MARKERS = [
  { id: 'citadel', label: 'Citadel', top: 30, left: 55, note: 'The raised, walled area housing important public buildings.' },
  { id: 'houses', top: 32, left: 82, label: 'Houses', note: 'Multi-room brick houses, many with their own wells and drains.' },
  { id: 'great-bath', top: 68, left: 42, label: 'Great Bath', note: 'A large watertight tank, likely used for ritual bathing.' },
  { id: 'streets', top: 70, left: 84, label: 'Streets & Drains', note: 'Grid-planned streets with covered drainage running alongside.' },
]

export const ARTIFACTS = [
  { id: 'painted-vessel', image: '/artifacts/painted-pottery-vessel.png', title: 'Painted Pottery Vessel', body: 'Decorated globular pot with animal and plant motifs, showcasing the artistic skill of Indus potters.', period: 'c. 2600–1900 BCE', site: 'Indus Valley' },
  { id: 'burial-pottery', image: '/artifacts/harappa-burial-pottery.png', title: 'Harappa Burial Pottery', body: 'Red-ware pottery with elaborate painted patterns, found in burial sites at Harappa.', period: 'c. 2600–1900 BCE', site: 'Harappa' },
  { id: 'model-carts', image: '/artifacts/terracotta-model-carts.jpg', title: 'Terracotta Model Carts', body: 'Miniature clay carts and figurines reflecting daily life, transport and domestic animals.', period: 'c. 2500–1900 BCE', site: 'Mohenjo-daro' },
  { id: 'bullock-cart', image: '/artifacts/bullock-cart-toy.jpg', title: 'Bullock Cart Toy', body: 'A clay toy cart with pots, showing that Harappan children played with miniature replicas of everyday objects.', period: 'c. 2500–1900 BCE', site: 'Mohenjo-daro' },
  { id: 'pashupati-seal', image: '/artifacts/pashupati-seal.png', title: 'Pashupati Seal', body: 'The famous seal depicting a seated figure surrounded by animals — possibly an early form of Shiva.', period: 'c. 2350–2000 BCE', site: 'Mohenjo-daro' },
  { id: 'dancing-girl', image: '/artifacts/dancing-girl-bronze.jpg', title: 'Dancing Girl', body: 'An iconic bronze figurine of a confident young girl with bangles, one of the most celebrated Indus artifacts.', period: 'c. 2300–1750 BCE', site: 'Mohenjo-daro' },
  { id: 'unicorn-seal', image: '/artifacts/unicorn-seal.jpg', title: 'Unicorn Seal', body: 'The most common Indus seal type, featuring a unicorn-like bull and undeciphered script characters.', period: 'c. 2600–1900 BCE', site: 'Harappa' },
  { id: 'priest-king', image: '/artifacts/priest-king-bust.jpg', title: 'Priest-King Bust', body: 'A steatite bust of a bearded man wearing a trefoil-patterned cloak — believed to be a ruler or priest.', period: 'c. 2200–1900 BCE', site: 'Mohenjo-daro' },
  { id: 'terracotta-dice', image: '/artifacts/terracotta-dice.jpg', title: 'Terracotta Dice', body: 'An ancient cubical die with dot markings — evidence of board games played over 4,000 years ago.', period: 'c. 2600–1900 BCE', site: 'Harappa' },
  { id: 'bead-necklace', image: '/artifacts/bead-necklace.jpg', title: 'Bead Necklace', body: 'Exquisite jewelry of carnelian, agate, lapis lazuli and gold beads — reflecting long-distance trade networks.', period: 'c. 2500 BCE', site: 'Harappa' },
  { id: 'bronze-buffalo', image: '/artifacts/bronze-buffalo.jpg', title: 'Bronze Water Buffalo', body: 'A finely cast bronze figurine of a water buffalo — demonstrating advanced metallurgical skills.', period: 'c. 2500–1900 BCE', site: 'Mohenjo-daro' },
]