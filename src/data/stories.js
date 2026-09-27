// Stories & Learning — sourced from published excavation reports (Marshall,
// Kenoyer) and museum captions. Each story is a collapsible card built from
// "blocks": plain paragraphs, block quotations (with a citation), a short
// image-style caption, or a closing footnote.
export const STORIES = [
  {
    id: 'dice-through-time',
    era: 'HARAPPA · 1995–2001',
    title: 'The Dice That Traveled Through Time',
    teaser:
      "A pottery die from Harappa — and what John Marshall found when he studied hundreds like it at Mohenjo-daro.",
    blocks: [
      {
        type: 'p',
        text:
          'A cubical die with 1 to 6 dots was found in rubble during excavations at Harappa between 1995 and 2001. Many dice were also found at Mohenjo-daro, and John Marshall writes:',
      },
      {
        type: 'quote',
        cite: 'John Marshall, Mohenjo-daro and the Indus Civilization, pp. 551–552',
        text:
          'That dicing was a common game at Mohenjo-daro is proved by the number of pieces that have been found. In all cases they are made of pottery and are usually cubical, ranging in size from 1.2 by 1.2 by 1.2 inches to 1.5 by 1.5 by 1.5 inches ... The dice of Mohenjo-daro are not marked in the same way as to-day, i.e. so that the sum of the points on any two opposite sides amounts to seven. Instead of that, 1 is opposite 2, 3 opposite 4, and 5 opposite 6. All the examples found are exceedingly well made with well-defined edges; the points are shallow holes averaging 0.1 inch in diameter. The clay of which they are made is light red in color, well baked, and sometimes coated with a red wash. These dice must have been thrown on a soft surface, such as a piece of cloth, or on dusty ground, for their edges show little sign of wear. It is not yet known whether these objects were used in pairs, but two specimens found in the Dk Area (of Mohenjo-daro), not far from each other, are exactly the same size.',
      },
    ],
  },
  {
    id: 'what-did-people-play',
    era: 'MOHENJO-DARO',
    title: 'What Did People Play in Harappa?',
    teaser:
      "Faience, agate, shell, marble — a catalogue of the gamesmen that filled Mohenjo-daro's houses.",
    blocks: [
      {
        type: 'caption',
        label: 'Game Board',
        text: 'A wide variety of game pieces from Mohenjo-daro, shown here on a modern wooden board.',
      },
      {
        type: 'p',
        text:
          'Sir John Marshall, one of the earliest excavators at Mohenjo-daro, writes in the monumental work summarizing the first finds at the site (Mohenjo-daro and the Indus Civilization, 1931, pp. 557–58):',
      },
      {
        type: 'quote',
        cite: 'John Marshall, Mohenjo-daro and the Indus Civilization, pp. 557–58',
        text:
          'That some form of game or games played with pieces was common at Mohenjo-daro is proved by the great number of gamesmen that have been found. The materials of which these pieces are made are comparatively few. In order of popularity they are faience, pottery, shell, marble, agate, slate, and steatite.\n\nNo. 11 in Pl. CLV is made of black marble and comes from Room 88, Block 9, L Area. No. 12 is beautifully made of agate, and was unearthed in the chamber south of No. 1, Block 8, Section C, DK Area. No. 13 is of faience and was found in House XXIII Block IV, VS Area. No. 14 is faience, and comes from the chamber west of No. 2, House XIII, Block 4, Section B, DK Area. No. 16 is made of green slate and comes from House X, Block 2, VS Area. No. 18 is well made in faience and was taken from Block 2 of the Southern Buildings section. Nos. 19 and 20 are of faience; the former was found in Chamber 18, House IV, Block 2, Section B, DK Area. No. 21 is pottery and came from Room 59, House LIX, Block 8, HR Area. No. 22 is cut from a piece of agate, and nos. 23, 24, and 25 are made of pottery. Of the last three, No. 23 was found in House XVI, Block 2, VS Area, and No. 24 came from Chamber 6, Block 2, Section C, DK Area.\n\nNos. 23, 24, and 26 are especially interesting in that they are decorated. The first two are coloured white and red, evidently with the idea of imitating decorated carnelian. The third is more elaborate still; it is painted in red and black on a cream ground, the hatched lines in the illustrations denoting red. Its base is slightly concave. No. 21, also of pottery, is painted dark brown to imitate some kind of bone.',
      },
      {
        type: 'p',
        text: "The National Museum's caption reads:",
      },
      {
        type: 'quote',
        cite: 'National Museum, New Delhi — exhibition caption',
        text:
          'The indoor recreations show that the inhabitants had a sense of contentment and security and possessed the traits of gregariousness and sociability, controlled by an implicit code of ethics. The most favourite game was played with gamesmen (chessmen) on segmented boards which looked like the present day game of chess. The gamesmen found a variety of materials like faience, shell, terracotta, marble, agate and steatite. The games-board with gamesmen also found in the excavations of Ur, a Sumerian City State of ancient Mesopotamia, and Memphis in Egypt.\n\nAnother favourite game was played with cubical and tubular dices of terracotta, bone, ivory & alabaster. They are generally numbered 1 opposite 2, 3 opposite 4 & 5 opposite 6. Yet another game popular with the people was the game of chance. It was played with square, rectangular casting sticks marked with incised lines and concentric circles.',
      },
    ],
  },
  {
    id: 'lattice-screen',
    era: 'MOHENJO-DARO · HARAPPA',
    title: 'Lattice Screen and Curved Fragment',
    teaser:
      'Carved alabaster screens that let in light, kept out eyes — and reappeared centuries later in Mughal marble.',
    blocks: [
      {
        type: 'p',
        text: 'Dr. Kenoyer (Ancient Cities, p. 58) writes:',
      },
      {
        type: 'quote',
        cite: 'Jonathan Mark Kenoyer, Ancient Cities of the Indus Valley Civilization, p. 58',
        text:
          'Windows situated on both the first and second stories had shutters with latticework grills above and below the shutters. This allowed air and light into the room when the shutters were closed and maintained the privacy of the room from outsiders. The shutters and grillwork were probably made of wood, but some may have been made of reeds or matting. A few examples of carved alabaster and marble lattice work have been found at Mohenjo-daro and Harappa. Set into the red-fired brick walls these lattices may have adorned the houses of wealthy merchants or rulers. These early artisans combined the functional features of architecture with patterned beauty, a tradition that anticipated the elegant marble screens of the Mughal period and the more mundane wooden screens on high rise apartment buildings of modern Karachi.',
      },
      {
        type: 'p',
        text: 'Sir John Marshall wrote (Mohenjo-daro, Vol. 1, 1931, p. 219):',
      },
      {
        type: 'quote',
        cite: 'John Marshall, Mohenjo-daro, Vol. I, 1931, p. 219',
        text:
          'One of the finds from the former room [13] consisted of fragments of a pierced lattice of alabaster which presumably filled the windows or ventilators at the top of the wall. Perforated screens with geometric patterns have been met with before in Kushan and Gupta buildings. It is now patent that perforated lattices were known and employed in the Indus valley in the prehistoric period.',
      },
      {
        type: 'footnote',
        text: 'See also: An Indus House #1, An Indus House #2, and An Indus House #3.',
      },
    ],
  },
]