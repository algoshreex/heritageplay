import { Link } from 'react-router-dom'
import { STORIES } from '../../data/stories.js'
import StoryCard from '../../components/stories/StoryCard.jsx'
import './Stories.css'

export default function Stories() {
  return (
    <section className="stories">
      <div className="container stories__inner">
        <p className="eyebrow">Phase 9</p>
        <h1>Stories &amp; Learning</h1>
        <p className="stories__lede">
          Short, visual stories about artifacts, games, and the archaeology
          behind them — drawn from the original excavation reports.
        </p>
        <Link to="/" className="stories__back">
          ← Back to Home
        </Link>

        <div className="stories__list">
          {STORIES.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}