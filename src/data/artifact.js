// A single explorable artifact — hotspot positions are % of the image box.
export const ARTIFACT = {
  name: 'The Harappan Dice',
  period: 'c. 2500 BCE',
  blurb:
    'Small, square dice made of terracotta, often found in homes and surrounding areas of the Indus Valley cities.',
  hotspots: [
    { id: 'material', top: 22, left: 18, label: 'Material', value: 'Terracotta' },
    { id: 'period', top: 20, left: 78, label: 'Estimated Period', value: 'c. 2500 BCE' },
    { id: 'found', top: 78, left: 20, label: 'Found at', value: 'Harappa' },
    { id: 'use', top: 78, left: 76, label: 'How it was used?', value: 'Game piece?' },
  ],
}

export const QUIZ = {
  question: 'Look at the artifact below. What do you think it was used for?',
  options: [
    { id: 'a', label: 'Game piece', correct: true },
    { id: 'b', label: 'Tool', correct: false },
    { id: 'c', label: 'Religious object', correct: false },
    { id: 'd', label: 'Unknown', correct: false },
  ],
  evidence:
    'Similar pieces have been found in gaming contexts, and the shape suggests it may have been used in board games.',
}