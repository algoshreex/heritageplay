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
import Stories from './pages/stories/Stories.jsx'
import HeritageMap from './pages/heritagemap/HeritageMap.jsx'
import ToyMaker from './pages/toymaker/ToyMaker.jsx'
import ExploreHeritage from './pages/explore/ExploreHeritage.jsx'



const COMING_SOON = [

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
          <Route path="/stories" element={<Stories />} />
          <Route path="/map" element={<HeritageMap />} />
          <Route path="/toy-maker" element={<ToyMaker />} />
          <Route path="/explore" element={<ExploreHeritage />} />
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
