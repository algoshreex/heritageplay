# HeritagePlay — Phase 1 + Phase 2 + Phase 3 + Phase 4

Built for **Smart India Hackathon 2026**, Problem Statement **SIH26208** (Student Innovation, Heritage & Culture).

**Phase 1** (Foundation): navigation, home page, and the shared design
system. **Phase 2** (Archaeological Detective): case list, case
investigation, evidence classification, and hypothesis-forming. **Phase 3**
(Reconstruction Builder): a step-by-step builder that turns a hypothesis
into a configured game, an Evidence Support Score, and a genuinely playable
prototype. **Phase 4** (Compare): your tested reconstruction side by side
with a scholarly interpretation for the same case. Every other nav
destination still renders a labeled placeholder so the app is fully
clickable end-to-end — nothing 404s.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's in Phase 1

- **`src/index.css`** — the design system: the full heritage color palette,
  a fluid type scale (Fraunces for display, Manrope for body), spacing
  scale, radii, shadows, and accessibility base styles (visible focus rings,
  reduced-motion support).
- **`src/components/Navigation.jsx`** — sticky header with all 7 primary
  sections, collapsing to a mobile menu under 980px.
- **`src/components/Footer.jsx`** — minimal site footer.
- **`src/components/Icons.jsx`** — the shared line-art icon set (seal mark,
  dice, pot, game piece, board) used across the site.
- **`src/components/StrataField.jsx`** — the signature visual device: an
  excavation-layer cross-section behind the hero heading, labeled the way a
  real trench section is labeled. It's the one deliberate visual risk this
  phase takes, and it's built to double as a recurring motif in later
  phases (e.g. behind evidence-tier explanations).
- **`src/pages/Home.jsx`** — hero with the three primary CTAs from the
  spec, an artifact-silhouette divider band, a six-card overview of the
  full experience, and an "evidence philosophy" section that introduces the
  Verified / Interpretation / Reconstruction labeling system up front.
- **`src/pages/Placeholder.jsx`** — generic "coming in Phase N" page used by
  every other route.

## What's in Phase 2

All local/static data — no backend, no database, no AI yet.

- **`src/data/cases.js`** — 3 prototype cases (Indus Valley, Early Historic
  Deccan, Medieval South Indian court), 5 evidence items each, each item
  tagged `VERIFIED` / `INTERPRETATION` / `RECONSTRUCTION`. Every case and
  every piece of invented evidence is clearly marked as prototype content —
  the civilizations and periods are real, the specific finds are not drawn
  from actual excavation reports.
- **`src/pages/detective/Detective.jsx`** — the case list (`/detective`).
- **`src/pages/detective/CaseStudy.jsx`** — the investigation workspace
  (`/detective/:caseId`): evidence cards, progress tracking, and the
  hypothesis form, all driven by local component state.
- **`src/components/detective/`** — `CaseCard`, `EvidenceCard`,
  `EvidenceStatus`, `InvestigationProgress`, `HypothesisPanel`.

**How it works:** open a case → click an evidence card to expand and
examine it → optionally check "connect this clue to my hypothesis" → once
3+ pieces are examined, the hypothesis form unlocks → answer all 5
questions → "Form Hypothesis" reveals a summary and a "Build Reconstruction
→" button → that hands the hypothesis (via router state) into Phase 3.
Hypothesis state lives only in memory for this prototype, so a page
refresh mid-case resets it.

## What's in Phase 3

Still local/static data only — no backend, no database, no AI.

- **`src/data/cases.js`** — unchanged for Phase 2's own UI, plus an
  additive `relatesTo` tag on each evidence item (e.g. `['board']`,
  `['randomizer', 'movement']`) and a `getEvidenceForCategory()` helper.
  This is what lets the Evidence Support Score point at real evidence
  entries instead of a separate, disconnected dataset.
- **`src/data/reconstructionOptions.js`** — builder option lists (board
  shapes, randomizer configs, movement/objective options), the
  hypothesis-to-builder prefill mapping, and `computeEvidenceSupport()`.
- **`src/pages/reconstruction/ReconstructionBuilder.jsx`** — the 7-stage
  wizard (`/detective/:caseId/reconstruct`): Board → Pieces → Randomizer →
  Movement → Objective → Players → Review.
- **`src/pages/reconstruction/PlayReconstruction.jsx`** — the playable
  prototype page (`/detective/:caseId/reconstruct/play`).
- **`src/components/reconstruction/`** — `BuilderStepper`, `StageShell`,
  `BoardPicker` (with live SVG preview), `PiecesEditor`, `RandomizerPicker`,
  `MovementPicker`, `ObjectivePicker`, `PlayersPicker`,
  `EvidenceSupportPanel` (reuses Phase 2's `EvidenceStatus` badge),
  `PlayableBoard` (the actual game engine), and `boardLayouts.js` (shape →
  grid-coordinate mapping shared by the board preview and the live game).
- A new `/detective/:caseId/compare` route reuses the existing
  `Placeholder` component to stand in for Phase 4.

**How it works:** from a case's hypothesis-ready screen, "Build
Reconstruction →" opens the builder, prefilled from the hypothesis wherever
an answer maps cleanly (e.g. "Dice-based" movement carries over; "Unknown"
answers are left for the user to decide explicitly). The user steps through
all 6 stages, then Review shows every choice next to its Evidence Support
tier and an overall score, both computed from the case's own tagged
evidence — never invented at review time. "Test Reconstruction →" opens a
real, playable version of that exact configuration.

## What's in Phase 4

Still local/static data only — no backend, no database, no AI.

- **`src/data/cases.js`** — each case now also carries a
  `historicalInterpretation` object: the same shape as a builder
  configuration (`board`, `piecesCount`, `pieceShape`, `useRandomizer`,
  `randomizer`, `movement`, `objective`, `players`), plus a `notes` object
  giving the uncertainty explanation for each category. This is additive —
  Phase 2/3 code never reads this field, so nothing existing changes.
- **`src/pages/compare/ComparePage.jsx`** (+ css) — the real
  `/detective/:caseId/compare` page, replacing the Phase 3 placeholder.
- **`src/components/compare/`** — `ScoreCompare` (two Evidence Support
  rings side by side, reusing Phase 3's `.score-ring` CSS rather than
  redefining it) and `CompareTable` (a per-category row: your choice vs.
  the historical interpretation's choice, each with its own
  `EvidenceStatus` tier badge reused from Phase 2, plus a "Matches" /
  "Differs" flag and the uncertainty note for that category).
- **Modified:** the two existing "Compare with Historical Interpretation"
  links (in `ReconstructionBuilder.jsx`'s review stage and in
  `PlayReconstruction.jsx`) now pass `state={{ caseId, caseTitle,
  hypothesis, builder, support }}` — the same shape Phase 3 already builds
  — so the Compare page has everything it needs without recomputing
  anything from scratch.

**How it works:** `computeEvidenceSupport()` from Phase 3 is called again,
unchanged, on the case's `historicalInterpretation` object, producing a
second score in the exact same shape as the user's own. Both scores are
usually close, and the page explains why: the score measures how well a
*category* is grounded in the case's evidence, not whether a specific
answer is "correct" — so your reconstruction and the historical
interpretation, drawing on the same evidence, tend to land in the same
range even where their actual choices (shown in the table) differ. The
page closes with the spec's required reminder that neither version is
proven fact.

## Design decisions worth knowing about

- **Color** is taken directly from the spec's palette — no substitutions.
  Each of the six "journey" cards on the home page and each primary CTA
  uses a different accent color from the palette, so the page reads as
  regionally diverse without any single card looking arbitrary.
- **Type**: Fraunces (a display serif with real personality and an italic
  worth using) for headings, Manrope (a warm, slightly geometric sans) for
  body copy and UI — deliberately not a generic corporate pairing.
- **No 3D, no gradients, no glassmorphism** in this phase, per the spec's
  visual-style constraints. Motion is limited to one small on-load reveal
  in the hero strata and ordinary hover/focus states, and it's fully
  disabled under `prefers-reduced-motion`.
- **The Evidence Support Score is explicitly a prototype indicator.** It's
  shown with its exact formula on-screen (tier points averaged across six
  categories) and is never called an accuracy or correctness measurement —
  matching the spec's rule that speculation is never presented as fact.

## Next phases (not built yet)

Per the spec's build order — Phase 5 (Play the Past), Phase 6 (Heritage
Explorer), Phase 7 (Evolution), Phase 8 (Heritage Map), Phase 9 (Stories &
Learning). Each should replace its corresponding `Placeholder` route in
`src/App.jsx` once built, and should build on the tokens in `src/index.css`
rather than introducing new ones.
