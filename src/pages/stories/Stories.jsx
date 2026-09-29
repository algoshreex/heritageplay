
// import { useRef, useState } from 'react'
// import { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { STORIES } from '../../data/stories.js'
// import { TIMELINE } from '../../data/timeline.js'
// import { ARTIFACT, QUIZ } from '../../data/artifact.js'
// import StoryCard from '../../components/stories/StoryCard.jsx'
// import PageHero from '../../components/PageHero.jsx'
// import './Stories.css'

// export default function Stories() {
//   const timelineRef = useRef(null)
//   const [activeHotspot, setActiveHotspot] = useState(ARTIFACT.hotspots[0].id)
//   const [quizChoice, setQuizChoice] = useState(null)

//   function scrollTimeline(dir) {
//     timelineRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' })
//   }

//   const activeSpot = ARTIFACT.hotspots.find((h) => h.id === activeHotspot)

//   return (
//     <section className="stories">
//       {/* ---------- HERO ---------- */}
//       <PageHero
//         eyebrow="Stories & Learning"
//         title={<>Stories Hidden in the <span className="stories__accent">Past</span></>}
//         subtitle="Discover the games, objects, architecture, and people that shaped ancient civilizations."
//       >
//         <div className="stories__hero-row">
//           <button
//             type="button"
//             className="stories__play-btn"
//             aria-label="Watch the story"
//             onClick={() => document.getElementById('story-video')?.showModal()}
//           >
//             ▶
//           </button>
//           <div>
//             <button
//               type="button"
//               className="stories__watch-cta"
//               onClick={() => document.getElementById('story-video')?.showModal()}
//             >
//               Watch the Story →
//             </button>
//             <p className="stories__hero-meta">01:24 min · Mohenjo-daro · Games & Daily Life</p>
//           </div>
//         </div>
//       </PageHero>

//       <dialog id="story-video" className="stories__video-modal">
//         <button
//           type="button"
//           className="stories__video-close"
//           onClick={() => document.getElementById('story-video')?.close()}
//           aria-label="Close video"
//         >
//           ×
//         </button>
//         <video src="/story.mp4" controls autoPlay className="stories__video" />
//       </dialog>

//       <div className="container">
//         {/* ---------- FEATURED STORIES ---------- */}
//         <div className="stories__featured-head">
//           <h2>📖 Featured Stories</h2>
//           <a href="#all-stories" className="stories__view-all">View All Stories →</a>
//         </div>

//         <div className="stories__featured-grid">
//           {STORIES.map((story, i) => (
//             <a href={`#story-${story.id}`} className="stories__featured-card" key={story.id}>
//               <span className="stories__featured-num">{String(i + 1).padStart(2, '0')}</span>
//               <h3>{story.title}</h3>
//               <p>{story.teaser}</p>
//               <span className="stories__featured-arrow">→</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* ---------- THE PAST, IN MOTION ---------- */}
//       <div className="stories__motion-band">
//         <div className="container">
//           <div className="stories__motion-head">
//             <span className="stories__motion-icon">▶</span>
//             <div>
//               <h2>The Past, in Motion</h2>
//               <p>Experience history through engaging videos, immersive audio and interactive artifacts.</p>
//             </div>
//           </div>

//           <div className="stories__motion-grid">
//             <button
//               type="button"
//               className="stories__motion-card"
//               onClick={() => document.getElementById('story-video')?.showModal()}
//             >
//               <span className="stories__motion-card-icon">▶</span>
//               <strong>Watch</strong>
//               <span>Short, cinematic videos from ancient sites.</span>
//               <span className="stories__motion-arrow">→</span>
//             </button>

//             <button type="button" className="stories__motion-card">
//               <span className="stories__motion-card-icon">🎧</span>
//               <strong>Listen</strong>
//               <span>Narrated stories and ambient sounds.</span>
//               <span className="stories__motion-arrow">→</span>
//             </button>

//             <a href="#artifact-explorer" className="stories__motion-card">
//               <span className="stories__motion-card-icon">✋</span>
//               <strong>Explore</strong>
//               <span>Interactive artifacts and 3D models.</span>
//               <span className="stories__motion-arrow">→</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         {/* ---------- JOURNEY THROUGH TIME ---------- */}
//         <div className="stories__journey-head">
//           <span className="stories__journey-icon">⏳</span>
//           <div>
//             <h2>A Journey Through Time</h2>
//             <p>From the rise of cities to the modern discoveries, explore how the Indus Valley Civilization evolved.</p>
//           </div>
//           <div className="stories__journey-nav">
//             <button type="button" onClick={() => scrollTimeline(-1)} aria-label="Scroll left">←</button>
//             <span>Drag to explore</span>
//             <button type="button" onClick={() => scrollTimeline(1)} aria-label="Scroll right">→</button>
//           </div>
//         </div>

//         <div className="stories__timeline" ref={timelineRef}>
//           {TIMELINE.map((point, i) => (
//             <div className="stories__timeline-point" key={point.year}>
//               <span className={`stories__timeline-dot ${i === TIMELINE.length - 1 ? 'is-current' : ''}`}>
//                 🏺
//               </span>
//               <strong>{point.year}</strong>
//               <span>{point.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* ---------- EXPLORE AN ARTIFACT ---------- */}
//         <div className="stories__artifact" id="artifact-explorer">
//           <div className="stories__artifact-info">
//             <span className="stories__artifact-icon">🎲</span>
//             <h2>Explore an Artifact</h2>
//             <p>Hover over the highlighted points to discover its secrets.</p>
//           </div>

//           <div className="stories__artifact-stage">
//             <span className="stories__artifact-emoji" aria-hidden="true">🎲</span>
//             {ARTIFACT.hotspots.map((spot) => (
//               <button
//                 key={spot.id}
//                 type="button"
//                 className={`stories__artifact-dot ${activeHotspot === spot.id ? 'is-active' : ''}`}
//                 style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
//                 onMouseEnter={() => setActiveHotspot(spot.id)}
//                 onFocus={() => setActiveHotspot(spot.id)}
//                 onClick={() => setActiveHotspot(spot.id)}
//               >
//                 <span className="stories__artifact-dot-label">{spot.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="stories__artifact-card">
//             <span className="stories__artifact-card-icon">☀️</span>
//             <h3>{ARTIFACT.name}</h3>
//             <p>{ARTIFACT.blurb}</p>
//             <p className="stories__artifact-active">
//               <strong>{activeSpot.label}:</strong> {activeSpot.value}
//             </p>
//           </div>
//         </div>

//         {/* ---------- QUIZ ---------- */}
//         <div className="stories__quiz">
//           <div className="stories__quiz-left">
//             <span className="stories__quiz-icon">🎮</span>
//             <h2>Can You Think Like an Archaeologist?</h2>
//             <p>{QUIZ.question}</p>
//             <span className="stories__quiz-artifact-emoji" aria-hidden="true">🪨</span>
//           </div>

//           <div className="stories__quiz-options">
//             {QUIZ.options.map((opt) => (
//               <button
//                 key={opt.id}
//                 type="button"
//                 className={`stories__quiz-option ${quizChoice === opt.id ? (opt.correct ? 'is-correct' : 'is-wrong') : ''}`}
//                 onClick={() => setQuizChoice(opt.id)}
//               >
//                 <span className="stories__quiz-letter">{opt.id.toUpperCase()}</span>
//                 {opt.label}
//               </button>
//             ))}
//           </div>

//           <div className="stories__quiz-evidence">
//             <span className="stories__quiz-icon">💡</span>
//             <h3>Archaeological Evidence</h3>
//             <p>{QUIZ.evidence}</p>
//             <button type="button" className="stories__quiz-learn-more">Learn More →</button>
//           </div>
//         </div>

//         {/* ---------- THEN VS NOW / MAP / DID YOU KNOW ---------- */}
//         <div className="stories__bottom-grid">
//           <div className="stories__then-now">
//             <span className="stories__section-icon">📖</span>
//             <h3>Then vs Now</h3>
//             <p>See how the past connects to the present.</p>
//             <div className="stories__then-now-images">
//               <div className="stories__then-now-frame">
//                 <span className="stories__then-now-emoji">🏛️</span>
//                 <span className="stories__then-now-tag">Ancient Harappa (reconstruction)</span>
//               </div>
//               <div className="stories__then-now-frame">
//                 <span className="stories__then-now-emoji">🏺</span>
//                 <span className="stories__then-now-tag">Today (archaeological site)</span>
//               </div>
//             </div>
//           </div>

//           <div className="stories__where">
//             <span className="stories__section-icon">📍</span>
//             <h3>Where Did It Happen?</h3>
//             <p>Explore the places that brought these stories to life on the Heritage Map.</p>
//             <div className="stories__where-map">
//               <span>🗺️</span>
//             </div>
//             <Link to="/map" className="stories__where-cta">Explore on Map →</Link>
//           </div>

//           <div className="stories__know">
//             <span className="stories__section-icon">💡</span>
//             <h3>Did You Know?</h3>
//             <p>Some ancient games may have been played with pieces surprisingly similar to modern board games.</p>
//             <button type="button" className="stories__know-cta">Reveal the Evidence →</button>
//           </div>
//         </div>

//         {/* ---------- ALL STORIES (full text) ---------- */}
//         <h2 id="all-stories" className="stories__all-heading">All Stories</h2>
//         <div className="stories__list">
//           {STORIES.map((story, index) => (
//             <div id={`story-${story.id}`} key={story.id}>
//               <StoryCard story={story} index={index} />
//             </div>
//           ))}
//         </div>

//         {/* ---------- BOTTOM CTA ---------- */}
//         <div className="stories__cta">
//           <div>
//             <h2>Think You've Discovered Something?</h2>
//             <p>Become the Archaeologist and help uncover more secrets from the past.</p>
//           </div>
//           <Link to="/detective" className="stories__cta-btn">Start Investigation →</Link>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { STORIES } from '../../data/stories.js'
import { TIMELINE } from '../../data/timeline.js'
import { ARTIFACT, QUIZ } from '../../data/artifact.js'
import StoryCard from '../../components/stories/StoryCard.jsx'
import PageHero from '../../components/PageHero.jsx'
import './Stories.css'

export default function Stories() {
  const timelineRef = useRef(null)
  const videoRef = useRef(null)
  const [activeHotspot, setActiveHotspot] = useState(ARTIFACT.hotspots[0].id)
  const [quizChoice, setQuizChoice] = useState(null)

  function openVideo() {
    document.getElementById('story-video')?.showModal()
    videoRef.current?.play()
  }

  function closeVideo() {
    videoRef.current?.pause()
    document.getElementById('story-video')?.close()
  }

  function scrollTimeline(dir) {
    timelineRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  const activeSpot = ARTIFACT.hotspots.find((h) => h.id === activeHotspot)

  return (
    <section className="stories">
      {/* ---------- HERO ---------- */}
      <PageHero
        eyebrow="Stories & Learning"
        title={<>Stories Hidden in the <span className="stories__accent">Past</span></>}
        subtitle="Discover the games, objects, architecture, and people that shaped ancient civilizations."
      >
        <div className="stories__hero-row">
          <button
            type="button"
            className="stories__play-btn"
            aria-label="Watch the story"
            onClick={openVideo}
          >
            ▶
          </button>
          <div>
            <button
              type="button"
              className="stories__watch-cta"
              onClick={openVideo}
            >
              Watch the Story →
            </button>
            <p className="stories__hero-meta">01:24 min · Mohenjo-daro · Games & Daily Life</p>
          </div>
        </div>
      </PageHero>

      <dialog id="story-video" className="stories__video-modal">
        <button
          type="button"
          className="stories__video-close"
          onClick={closeVideo}
          aria-label="Close video"
        >
          ×
        </button>
        <video
          ref={videoRef}
          src="/story.mp4"
          controls
          className="stories__video"
        />
      </dialog>

      <div className="container">
        {/* ---------- FEATURED STORIES ---------- */}
        <div className="stories__featured-head">
          <h2>📖 Featured Stories</h2>
          <a href="#all-stories" className="stories__view-all">View All Stories →</a>
        </div>

        <div className="stories__featured-grid">
          {STORIES.map((story, i) => (
            <a href={`#story-${story.id}`} className="stories__featured-card" key={story.id}>
              <span className="stories__featured-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{story.title}</h3>
              <p>{story.teaser}</p>
              <span className="stories__featured-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------- THE PAST, IN MOTION ---------- */}
      <div className="stories__motion-band">
        <div className="container">
          <div className="stories__motion-head">
            <span className="stories__motion-icon">▶</span>
            <div>
              <h2>The Past, in Motion</h2>
              <p>Experience history through engaging videos, immersive audio and interactive artifacts.</p>
            </div>
          </div>

          <div className="stories__motion-grid">
            <button
              type="button"
              className="stories__motion-card"
              onClick={openVideo}
            >
              <span className="stories__motion-card-icon">▶</span>
              <strong>Watch</strong>
              <span>Short, cinematic videos from ancient sites.</span>
              <span className="stories__motion-arrow">→</span>
            </button>

            <button
              type="button"
              className="stories__motion-card"
              onClick={() => document.getElementById('story-audio')?.showModal()}
            >
              <span className="stories__motion-card-icon">🎧</span>
              <strong>Listen</strong>
              <span>Narrated stories and ambient sounds.</span>
              <span className="stories__motion-arrow">→</span>
            </button>

            <a href="#artifact-explorer" className="stories__motion-card">
              <span className="stories__motion-card-icon">✋</span>
              <strong>Explore</strong>
              <span>Interactive artifacts and 3D models.</span>
              <span className="stories__motion-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <dialog id="story-audio" className="stories__video-modal">
        <button
          type="button"
          className="stories__video-close"
          onClick={() => document.getElementById('story-audio')?.close()}
          aria-label="Close audio"
        >
          ×
        </button>
        <div className="stories__audio-player">
          <span className="stories__audio-icon">🎧</span>
          <h3>Narrated Story</h3>
          <audio src="/mohenjo-daro-narration.mp3" controls className="stories__audio" />
        </div>
      </dialog>

      <div className="container">
        {/* ---------- JOURNEY THROUGH TIME ---------- */}
        <div className="stories__journey-head">
          <span className="stories__journey-icon">⏳</span>
          <div>
            <h2>A Journey Through Time</h2>
            <p>From the rise of cities to the modern discoveries, explore how the Indus Valley Civilization evolved.</p>
          </div>
          <div className="stories__journey-nav">
            <button type="button" onClick={() => scrollTimeline(-1)} aria-label="Scroll left">←</button>
            <span>Drag to explore</span>
            <button type="button" onClick={() => scrollTimeline(1)} aria-label="Scroll right">→</button>
          </div>
        </div>

        <div className="stories__timeline" ref={timelineRef}>
          {TIMELINE.map((point, i) => (
            <div className="stories__timeline-point" key={point.year}>
              <span className={`stories__timeline-dot ${i === TIMELINE.length - 1 ? 'is-current' : ''}`}>
                🏺
              </span>
              <strong>{point.year}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>

        {/* ---------- EXPLORE AN ARTIFACT ---------- */}
        <div className="stories__artifact" id="artifact-explorer">
          <div className="stories__artifact-info">
            <span className="stories__artifact-icon">🎲</span>
            <h2>Explore an Artifact</h2>
            <p>Hover over the highlighted points to discover its secrets.</p>
          </div>

          <div className="stories__artifact-stage">
            <span className="stories__artifact-emoji" aria-hidden="true">🎲</span>
            {ARTIFACT.hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className={`stories__artifact-dot ${activeHotspot === spot.id ? 'is-active' : ''}`}
                style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onFocus={() => setActiveHotspot(spot.id)}
                onClick={() => setActiveHotspot(spot.id)}
              >
                <span className="stories__artifact-dot-label">{spot.label}</span>
              </button>
            ))}
          </div>

          <div className="stories__artifact-card">
            <span className="stories__artifact-card-icon">☀️</span>
            <h3>{ARTIFACT.name}</h3>
            <p>{ARTIFACT.blurb}</p>
            <p className="stories__artifact-active">
              <strong>{activeSpot.label}:</strong> {activeSpot.value}
            </p>
          </div>
        </div>

        {/* ---------- QUIZ ---------- */}
        <div className="stories__quiz">
          <div className="stories__quiz-left">
            <span className="stories__quiz-icon">🎮</span>
            <h2>Can You Think Like an Archaeologist?</h2>
            <p>{QUIZ.question}</p>
            <span className="stories__quiz-artifact-emoji" aria-hidden="true">🪨</span>
          </div>

          <div className="stories__quiz-options">
            {QUIZ.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`stories__quiz-option ${quizChoice === opt.id ? (opt.correct ? 'is-correct' : 'is-wrong') : ''}`}
                onClick={() => setQuizChoice(opt.id)}
              >
                <span className="stories__quiz-letter">{opt.id.toUpperCase()}</span>
                {opt.label}
              </button>
            ))}
          </div>

          <div className="stories__quiz-evidence">
            <span className="stories__quiz-icon">💡</span>
            <h3>Archaeological Evidence</h3>
            <p>{QUIZ.evidence}</p>
            <button type="button" className="stories__quiz-learn-more">Learn More →</button>
          </div>
        </div>

        {/* ---------- THEN VS NOW / MAP / DID YOU KNOW ---------- */}
        <div className="stories__bottom-grid">
          <div className="stories__then-now">
            <span className="stories__section-icon">📖</span>
            <h3>Then vs Now</h3>
            <p>See how the past connects to the present.</p>
            <div className="stories__then-now-images">
              <div className="stories__then-now-frame">
                <span className="stories__then-now-emoji">🏛️</span>
                <span className="stories__then-now-tag">Ancient Harappa (reconstruction)</span>
              </div>
              <div className="stories__then-now-frame">
                <span className="stories__then-now-emoji">🏺</span>
                <span className="stories__then-now-tag">Today (archaeological site)</span>
              </div>
            </div>
          </div>

          <div className="stories__where">
            <span className="stories__section-icon">📍</span>
            <h3>Where Did It Happen?</h3>
            <p>Explore the places that brought these stories to life on the Heritage Map.</p>
            <div className="stories__where-map">
              <span>🗺️</span>
            </div>
            <Link to="/map" className="stories__where-cta">Explore on Map →</Link>
          </div>

          <div className="stories__know">
            <span className="stories__section-icon">💡</span>
            <h3>Did You Know?</h3>
            <p>Some ancient games may have been played with pieces surprisingly similar to modern board games.</p>
            <button type="button" className="stories__know-cta">Reveal the Evidence →</button>
          </div>
        </div>

        {/* ---------- ALL STORIES (full text) ---------- */}
        <h2 id="all-stories" className="stories__all-heading">All Stories</h2>
        <div className="stories__list">
          {STORIES.map((story, index) => (
            <div id={`story-${story.id}`} key={story.id}>
              <StoryCard story={story} index={index} />
            </div>
          ))}
        </div>

        {/* ---------- BOTTOM CTA ---------- */}
        <div className="stories__cta">
          <div>
            <h2>Think You've Discovered Something?</h2>
            <p>Become the Archaeologist and help uncover more secrets from the past.</p>
          </div>
          <Link to="/detective" className="stories__cta-btn">Start Investigation →</Link>
        </div>
      </div>
    </section>
  )
}