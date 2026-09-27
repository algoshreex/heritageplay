import { Link } from 'react-router-dom'
import StrataField from '../components/StrataField.jsx'
import HeroVideoBg from '../components/HeroVideoBg.jsx'
import { IconDice, IconPot, IconPiece, IconBoard } from '../components/Icons.jsx'
import './Home.css'

const PRIMARY_ACTIONS = [
  {
    to: '/explore',
    title: 'Explore the Past',
    body: 'Walk through a small Harappan settlement and inspect real artifact records.',
    accent: 'saffron',
  },
  {
    to: '/detective',
    title: 'Become an Archaeological Detective',
    body: 'Take on a case, read the clues, and reason your way toward a theory.',
    accent: 'royal-blue',
  },
  {
    to: '/play',
    title: 'Play the Past',
    body: 'Play traditional Indian games the way historical sources describe them.',
    accent: 'heritage-green',
  },
]

const JOURNEY = [
  { to: '/explore', title: 'Explore Heritage', body: 'Artifacts, toys, and game pieces with sourced evidence.', accent: 'saffron' },
  { to: '/detective', title: 'Archaeological Detective', body: 'Investigate clues, then build a reconstruction.', accent: 'royal-blue' },
  { to: '/play', title: 'Play the Past', body: 'Traditional games, played by their historical rules.', accent: 'heritage-green' },
  { to: '/evolution', title: 'Game Evolution', body: 'Trace how one game became another, region by region.', accent: 'peacock' },
  { to: '/map', title: 'Heritage Map', body: 'Games and toys, placed where they were actually found.', accent: 'rani-pink' },
  { to: '/stories', title: 'Stories & Learning', body: 'Short, visual stories behind the objects and the games.', accent: 'royal-purple' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        {/* <StrataField /> */}
        <div className="hero-v">
          <HeroVideoBg src="/hero-clip.mp4"/>
        </div>
        <div className="hero__overlay-wash" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">Smart India Hackathon 2026 · SIH26208</p>
          <h1 className="hero__heading">
            Discover India's Heritage.
            <br />
            Reconstruct Its Stories.
            <br />
            Play the Past.
          </h1>
          <p className="hero__sub">
            Explore ancient objects, investigate archaeological clues, reconstruct
            possible games, and experience India's cultural heritage through play.
          </p>

          <div className="hero__actions">
            {PRIMARY_ACTIONS.map((action) => (
              <Link key={action.to} to={action.to} className={`hero__action hero__action--${action.accent}`}>
                <span className="hero__action-title">{action.title}</span>
                <span className="hero__action-body">{action.body}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    <section className="artifact-strip" aria-hidden="true">
        <div className="container artifact-strip__inner">
          <IconDice className="artifact-strip__icon" />
          <IconPot className="artifact-strip__icon" />
          <IconPiece className="artifact-strip__icon" />
          <IconBoard className="artifact-strip__icon" />
        </div>
      </section>

        {/* <section className="section section--demo">
        <div className="container">
          <p className="eyebrow">See it in action</p>
          <h2 className="section__heading">Watch a quick demo</h2>
          <p className="section__lede">
            A short look at HeritagePlay in motion.
          </p>

          <div className="-video">
            <iframe
              src="https://www.youtube.com/embed/O67m2k70JLA?start=108&end=118&rel=0"
              title="HeritagePlay demo clip"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>    */}

      <section className="section">
        <div className="container">
          <p className="eyebrow">The experience</p>
          <h2 className="section__heading">Six ways into the past</h2>
          <p className="section__lede">
            Every section is built on the same idea: separate what the evidence
            shows from what is still uncertain, and let you test your own
            thinking against it.
          </p>

          <div className="journey-grid">
            {JOURNEY.map((item) => (
              <Link key={item.to} to={item.to} className={`journey-card journey-card--${item.accent}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--evidence">
        <div className="container evidence-band">
          <div className="evidence-band__text">
            <p className="eyebrow">Why this matters</p>
            <h2 className="section__heading">Nothing here is presented as more certain than it is</h2>
            <p className="section__lede">
              Every artifact, rule, and reconstruction on HeritagePlay is labeled
              by how well it's supported — so you always know what's known,
              what's a scholar's best guess, and what's your own theory.
            </p>
          </div>
          <ul className="evidence-band__legend">
            <li><span className="dot dot--high" /> Verified Evidence — directly supported by sources</li>
            <li><span className="dot dot--medium" /> Scholarly Interpretation — a reasoned reading of the evidence</li>
            <li><span className="dot dot--low" /> Reconstruction — a possible answer where the record is silent</li>
          </ul>
        </div>
      </section>
    </>
  )
}
