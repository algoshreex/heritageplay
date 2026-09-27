import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import Detective from './pages/detective/Detective.jsx'
import CaseStudy from './pages/detective/CaseStudy.jsx'
import ReconstructionBuilder from './pages/reconstruction/ReconstructionBuilder.jsx'
import PlayReconstruction from './pages/reconstruction/PlayReconstruction.jsx'
import ComparePage from './pages/compare/ComparePage.jsx'
import Play from './pages/play/Play.jsx'

// Every route below Home (other than the Archaeological Detective, built in
// Phase 2, and Play the Past, merged from the HeritagePlay-main prototype)
// is a Phase-1 stand-in. Each becomes a real page in its numbered phase
// (see README.md).
const COMING_SOON = [
  { path: '/explore', title: 'Explore Heritage', phase: 'Phase 6', body: "A small, walkable Harappan settlement where you'll inspect real artifact records — name, period, material, evidence, and sources." },
  { path: '/evolution', title: 'Game Evolution', phase: 'Phase 7', body: 'An interactive timeline tracing how games like Chaturanga evolved across regions and centuries.' },
  { path: '/map', title: 'Heritage Map', phase: 'Phase 8', body: 'An interactive map of India surfacing heritage games and toys by region and period.' },
  { path: '/stories', title: 'Stories & Learning', phase: 'Phase 9', body: 'Short, visual stories about artifacts, games, and the archaeology behind them.' },
]

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detective" element={<Detective />} />
          <Route path="/detective/:caseId" element={<CaseStudy />} />
          <Route path="/detective/:caseId/reconstruct" element={<ReconstructionBuilder />} />
          <Route path="/detective/:caseId/reconstruct/play" element={<PlayReconstruction />} />
          <Route path="/detective/:caseId/compare" element={<ComparePage />} />
          <Route path="/play" element={<Play />} />
          {COMING_SOON.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Placeholder title={route.title} phase={route.phase} body={route.body} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  )
}
