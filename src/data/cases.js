// Phase 2 uses local, static data only — no backend, no database yet.
//
// IMPORTANT: every case here is prototype content built to demonstrate the
// Archaeological Detective mechanic. Civilizations, periods, and general
// archaeological categories (dice, terracotta pieces, incised boards) are
// real and well documented; the specific sites, objects, and inscriptions
// described are invented for this prototype and have NOT been checked
// against real excavation reports. Each case carries a visible prototype
// notice, and every evidence card carries its own VERIFIED /
// INTERPRETATION / RECONSTRUCTION status so nothing here reads as an
// established historical claim.

export const HYPOTHESIS_FIELDS = [
  {
    key: 'boardStructure',
    label: 'What kind of board might this have used?',
    options: ['Grid', 'Path', 'Cross-shaped', 'Irregular', 'Unknown'],
  },
  {
    key: 'players',
    label: 'How many players might have played?',
    options: ['2', '3', '4', 'Unknown'],
  },
  {
    key: 'pieces',
    label: 'How many pieces might each player have had?',
    options: ['Few (2–4 each)', 'Many (5+ each)', 'Unknown'],
  },
  {
    key: 'movement',
    label: 'What type of movement might be involved?',
    options: ['Dice-based', 'Fixed movement', 'Area-based', 'Unknown'],
  },
  {
    key: 'objective',
    label: 'What could the objective have been?',
    options: ['Reach a destination', 'Capture pieces', 'Collect points', 'Unknown'],
  },
]

export const CASES = [
  {
    id: 'case-01',
    number: '01',
    title: 'The Cubical Object of Site MRD-7',
    civilization: 'Indus Valley Civilization (Harappan)',
    period: 'c. 2600 – 1900 BCE',
    region: 'Prototype site MRD-7, Indus region',
    difficulty: 'Beginner',
    summary:
      "A small cubical terracotta object and a scatter of matching pieces were recovered from a single house floor. Were they used for a game — and if so, what kind?",
    isPrototype: true,
    historicalInterpretation: {
      board: 'Grid',
      piecesCount: 7,
      pieceShape: 'Cone',
      useRandomizer: true,
      randomizer: 'Six-faced die',
      movement: 'Dice-based',
      objective: 'Race to the end',
      players: 2,
      notes: {
        board: 'The grid marking is real, but its original size is not — the brick is broken on two edges, so the reconstructed grid size is a guess.',
        pieces: 'Seven matching cones were found together, but whether they formed one full set or were split between two players is unknown.',
        randomizer: "The cube's dot pattern strongly resembles a die, but no directly comparable, fully documented game survives from this exact period.",
        movement: 'Dice-based movement is the most common scholarly reading of numbered throwing objects like this one — not a certainty.',
        objective: 'Nothing at the site indicates how the game was won; a race objective is assumed because it is the simplest fit for the pieces found.',
        players: 'No evidence constrains player count — two is assumed only because it is the simplest possible arrangement.',
      },
    },
    evidence: [
      {
        id: 'mrd7-01',
        type: 'Artifact',
        title: 'Cubical terracotta object', 
        image: '/images/evidence/mrd7-cube.jpg',
        found: 'A fired-clay cube, roughly 1.5 cm per side, with small dot-shaped indentations on each face — one to six dots, no two faces alike.', 
        tellsUs: 'The dot pattern matches how chance-based counting objects are marked in many later, well-documented Indian games.',
        uncertain: 'Whether it was thrown, dropped, or read some other way, and whether it was used for a game at all rather than counting or ritual purposes.',
        status: 'INTERPRETATION',
        relatesTo: ['randomizer', 'movement'],
      },
      {
        id: 'mrd7-02',
        type: 'Game Piece',
        title: 'Set of seven small terracotta cones', 
        image: '/images/evidence/mrd7-cones.png',  
        found: 'Seven small cone-shaped terracotta pieces of near-identical size, found together in a shallow pit near the cubical object.',
        tellsUs: 'Objects were deliberately shaped and grouped, suggesting they were meant to be used as a set rather than individually.',
        uncertain: 'Whether all seven belonged to one player or were split between players, and whether the exact count of seven is meaningful or incidental.',
        status: 'INTERPRETATION',
        relatesTo: ['pieces'],
      },
      {
        id: 'mrd7-03',
        type: 'Board / Marking',
        title: 'Scratched grid on a fired brick', 
        image: '/images/evidence/mrd7-grid.jpg',  
        found: 'A flat fired brick with a shallow, hand-scratched grid of squares on one face, uneven in spacing.',
        tellsUs: 'A grid was intentionally marked onto a durable surface, which is consistent with — but not proof of — a game board.',
        uncertain: 'The exact number of squares originally marked (the brick is broken on two edges), and whether the grid was a board, a counting aid, or something else.',
        status: 'RECONSTRUCTION',
        relatesTo: ['board'],
      },
      {
        id: 'mrd7-04',
        type: 'Location',
        title: 'Single-room house floor, domestic quarter', 
        image: '/images/evidence/mrd7-house-floor.jpg', 
        found: 'All objects above were recovered from the same undisturbed floor level of a small house, away from craft or storage areas.',
        tellsUs: 'The objects were used together in an ordinary domestic setting, not a workshop or ceremonial space.',
        uncertain: 'Whether this was a household leisure activity, a children\u2019s game, or something with a different social role entirely.',
        status: 'VERIFIED',
        relatesTo: [],
      },
      {
        id: 'mrd7-05',
        type: 'Time Period',
        title: 'Stratigraphic dating', 
        image: '/images/evidence/mrd7-stratigraphy.png', 
        found: 'The floor level sits within a securely dated occupation layer of the settlement.',
        tellsUs: 'The objects can be placed within a specific, reasonably narrow time window for the site.',
        uncertain: 'Nothing about the dating itself — the uncertainty in this case is entirely about function, not chronology.',
        status: 'VERIFIED',
        relatesTo: [],
      },
    ],
  },
  {
    id: 'case-02',
    number: '02',
    title: 'The Painted Board of Site KVR-3', 
    civilization: 'Early Historic South India',
    period: 'c. 200 BCE – 200 CE',
    region: 'Prototype site KVR-3, Deccan plateau',
    difficulty: 'Intermediate',
    summary:
      'A cross-shaped incised slab, a handful of cowrie shells, and a fragment of an inscription were found together near a trade route. Could this be an early ancestor of a race-and-capture game still played today?',
    isPrototype: true,
    historicalInterpretation: {
      board: 'Cross-shaped',
      piecesCount: 6,
      pieceShape: 'Carved figure',
      useRandomizer: true,
      randomizer: 'Six cowrie shells',
      movement: 'Dice-based',
      objective: 'Capture opponent pieces',
      players: 2,
      notes: {
        board: 'The cross-in-square carving is directly observed, but whether it was actually played as a cross-track race game, rather than something else with a similar shape, is an interpretation.',
        pieces: 'Two matched sets of six figurines suggest two sides, but the object count alone cannot confirm two players versus a team arrangement.',
        randomizer: 'Cowrie shells are a well-documented dice-substitute in later games; using all sixteen at once versus a smaller throw of six is a scholarly convention, not a confirmed rule here.',
        movement: 'Dice-based movement follows from the shell evidence, but the exact scoring convention used for the throws is not preserved.',
        objective: 'A capture objective is inferred from the two-sided piece arrangement and the board\u2019s resemblance to later capture games — the inscription does not describe the rules.',
        players: 'Two players is the simplest reading of "two sides of six," though more players sharing sides cannot be ruled out.',
      },
    },
    evidence: [
      {
        id: 'kvr3-01',
        type: 'Board / Marking',
        title: 'Cross-shaped incised stone slab',  
        image: '/images/evidence/cross-stone-slab.png', 
        found: 'A flat stone slab with a symmetrical cross-shaped pattern of incised cells, each arm divided into a row of squares.',
        tellsUs: 'The cross-in-square layout closely resembles the board geometry used in well-documented cross-shaped race games from later periods.',
        uncertain: 'Whether this specific slab was used the same way those later games were played, or only shares a visual resemblance.',
        status: 'INTERPRETATION',
        relatesTo: ['board'],
      },
      {
        id: 'kvr3-02',
        type: 'Game Piece',
        title: 'Sixteen cowrie shells', 
        image: '/images/evidence/cowrie-shells.png', 
        found: 'Sixteen cowrie shells, worn smooth on one face, found in a small pouch impression beside the slab.',
        tellsUs: 'Cowrie shells thrown for a random result are documented as dice-substitutes in multiple historical Indian games.',
        uncertain: 'The exact throwing and scoring convention used here, since several different conventions are known from different regions and periods.',
        status: 'INTERPRETATION',
        relatesTo: ['randomizer', 'movement'],
      },
      {
        id: 'kvr3-03',
        type: 'Game Piece',
        title: 'Twelve small carved figurines', 
        image: '/images/evidence/carved-figurines.png', 
        found: 'Twelve figurines carved from soft stone, in two visually distinct groups of six, found scattered near the slab.',
        tellsUs: 'Two matched sets of six suggest two opposing sides, each fielding an equal number of pieces.',
        uncertain: 'Whether "two sides of six" means two players, or more than two players sharing sides — the object count alone cannot settle this.',
        status: 'RECONSTRUCTION',
        relatesTo: ['pieces', 'players'],
      },
      {
        id: 'kvr3-04',
        type: 'Historical Text',
        title: 'Fragmentary inscription', 
          image: '/images/evidence/fragmentary-inscription.png', 
        found: 'A short, partially damaged inscription nearby mentions a recreational activity by name, but the surviving text does not describe its rules.',
        tellsUs: 'The activity was significant enough locally to be named in a public inscription.',
        uncertain: "Whether the named activity is this game at all — the text is too damaged to confirm the connection with certainty.",
        status: 'RECONSTRUCTION',
        relatesTo: ['objective'],
      },
      {
        id: 'kvr3-05',
        type: 'Location',
        title: 'Proximity to a trade route', 
        image: '/images/evidence/trade-route-settlement.png', 
        found: 'The site sits beside a documented overland trade route active during this period.',
        tellsUs: 'The site had regular contact with travelers and merchants from other regions.',
        uncertain: 'Whether the game (if it is one) originated locally or arrived through trade contact.',
        status: 'VERIFIED',
        relatesTo: [],
      },
    ],
  }, 
  {
    id: 'case-03',
    number: '03',
    title: 'The Courtyard Markings of Site RGP-9',
    civilization: 'Medieval South Indian court culture',
    period: 'c. 14th – 16th century CE',
    region: 'Prototype site RGP-9, palace courtyard complex',
    difficulty: 'Advanced',
    summary:
      'A large grid carved directly into a palace courtyard floor, alongside glass counters and a court record fragment, hints at a game played at scale — possibly by several people at once.',
    isPrototype: true,
    historicalInterpretation: {
      board: 'Grid',
      piecesCount: 4,
      pieceShape: 'Disc',
      useRandomizer: true,
      randomizer: 'Four-sided sticks',
      movement: 'Dice-based',
      objective: 'Collect the most points',
      players: 4,
      notes: {
        board: 'The large carved grid is directly observed, but whether it was read as a simple grid or as something closer to a cross track is an interpretation drawn from its scale.',
        pieces: 'A mixed set of glass and stone counters is real; the specific count of four pieces per player is a reconstruction to fit a plausible courtyard game.',
        randomizer: 'Pierced seeds match how thrown, chance-based markers are used in later documented games, but their exact scoring convention here is unknown.',
        movement: 'Dice-based movement is assumed from the seed evidence, though a courtyard-scale board could plausibly use other movement schemes.',
        objective: 'Multiple counter types hint at a scoring system, but the court record does not describe how points — or any objective — were actually counted.',
        players: 'A courtyard-scale board suggests more than two players, but the exact number who gathered for "the game of the court" is not recorded.',
      },
    },
    evidence: [
      {
        id: 'rgp9-01',
        type: 'Board / Marking',
        title: 'Large carved courtyard grid', 
        image: '/images/evidence/courtyard-grid.png', 
        found: 'A grid of large squares carved directly into stone paving, roughly 2.4 by 2.4 meters overall, in a semi-open courtyard.',
        tellsUs: 'The scale implies a game meant to be played by moving large pieces or even standing on the board itself, rather than a small tabletop object.',
        uncertain: 'Whether players sat around it, moved pieces at arm\u2019s length, or physically stepped onto the squares — the carving alone does not show play style.',
        status: 'INTERPRETATION',
        relatesTo: ['board'],
      },
      {
        id: 'rgp9-02',
        type: 'Game Piece',
        title: 'Set of glass and stone counters', 
        image: '/images/evidence/glass-stone-counters.png', 
        found: 'A mixed set of colored glass and polished stone counters recovered from a storage niche adjacent to the courtyard.',
        tellsUs: 'Multiple visually distinct counter types suggest more than two competing sides, or a scoring system using different counter values.',
        uncertain: 'The precise number of sides or players, and whether all counters found together were used in the same game.',
        status: 'RECONSTRUCTION',
        relatesTo: ['pieces', 'players'],
      },
      {
        id: 'rgp9-03',
        type: 'Historical Text',
        title: 'Court record fragment', 
       image: '/images/evidence/court-record.png', 
        found: 'A damaged administrative record mentions courtiers gathering for "the game of the court" on specific occasions, without listing its rules.',
        tellsUs: "A courtyard game was a recognized, named social occasion at this site, not an incidental pastime.",
        uncertain: 'Whether "the game of the court" refers to this specific carved board or to a different, unrecorded game entirely.',
        status: 'RECONSTRUCTION',
        relatesTo: ['objective'],
      },
      {
        id: 'rgp9-04',
        type: 'Artifact',
        title: 'Perforated seed cluster', 
      image: '/images/evidence/perforated-seeds.png', 
        found: 'A small cluster of hard seeds, each pierced with a single hole, found near the counter storage niche.',
        tellsUs: 'Pierced seeds matching this description are used as thrown, chance-based markers in several traditional games documented in later periods.',
        uncertain: 'Whether these particular seeds were used for this board, for a different game, or for a non-game purpose such as jewelry-making.',
        status: 'INTERPRETATION',
        relatesTo: ['randomizer', 'movement'],
      },
      {
        id: 'rgp9-05',
        type: 'Time Period',
        title: 'Architectural dating of the courtyard', 
        image: '/images/evidence/architectural-dating.png', 
        found: 'The courtyard itself is dated by its construction style and associated building records to this period.',
        tellsUs: 'The carving and the period during which courtiers were recorded gathering here align closely in time.',
        uncertain: 'Nothing about the dating itself — the uncertainty in this case concerns how the game was played, not when.',
        status: 'VERIFIED',
        relatesTo: [],
      },
    ],
  },
]

export function getCaseById(caseId) {
  return CASES.find((c) => c.id === caseId)
}

// Phase 3 helper: every evidence item that has tagged itself as relevant to
// a given reconstruction category (board, pieces, randomizer, movement,
// objective, players). Used only by the Evidence Support Score — it does
// not affect how Phase 2 renders evidence cards.
export function getEvidenceForCategory(caseData, categoryKey) {
  return caseData.evidence.filter((ev) => (ev.relatesTo || []).includes(categoryKey))
}
