// import { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { CATEGORIES, SITES, CITY_MARKERS, ARTIFACTS } from '../../data/exploreHeritage.js'
// import PageHero from '../../components/PageHero.jsx'
// import './ExploreHeritage.css'

// export default function ExploreHeritage() {
//   const [activeMarker, setActiveMarker] = useState(null)
//   const galleryRef = useRef(null)
//   const categoriesRef = useRef(null)

//   function scrollGallery(dir) {
//     galleryRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
//   }

//   return (
//     <section className="explore">
//       {/* ---------- Hero ---------- */}
//       <PageHero
//         eyebrow="Phase 6"
//         title="Explore Heritage"
//         subtitle="Discover the cities, people, objects, and stories of the Indus Valley."
//       >
//         <button
//           type="button"
//           className="explore__start-btn"
//           onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })}
//         >
//           Start Exploring →
//         </button>
//       </PageHero>

//       <div className="container">
//         {/* ---------- Category cards ---------- */}
//         <div className="explore__categories" ref={categoriesRef}>
//           {CATEGORIES.map((cat) => (
//             <div className="explore__category-card" key={cat.id}>
//               <div className="explore__category-image">{cat.icon}</div>
//               <div className="explore__category-icon">{cat.icon}</div>
//               <h3>{cat.title}</h3>
//               <p>{cat.body}</p>
//               <span className="explore__category-arrow">→</span>
//             </div>
//           ))}
//         </div>

//         {/* ---------- Choose a civilization site ---------- */}
//         <div className="explore__section-head">
//           <span className="explore__section-icon">🏛️</span>
//           <h2>Choose a civilization site</h2>
//           <span className="explore__section-note">Four major sites · One incredible civilization</span>
//         </div>

//         <div className="explore__sites-grid">
//           {SITES.map((site) => (
//             <div className="explore__site-card" key={site.id}>
//               <div className="explore__site-image">🏚️</div>
//               <div className="explore__site-body">
//                 <h3>{site.name}</h3>
//                 <p className="explore__site-meta">📅 {site.period}</p>
//                 <p className="explore__site-meta">📍 {site.location}</p>
//                 <p className="explore__site-desc">{site.body}</p>
//                 <Link to="/map" className="explore__site-btn">Explore Site →</Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ---------- Mini map preview ---------- */}
//         <div className="explore__map-band">
//           <div className="explore__map-info">
//             <span className="explore__section-icon">🧭</span>
//             <h2>Explore the Indus Valley</h2>
//             <p>Follow the river, discover the cities, see how they were connected.</p>
//             <ul className="explore__map-legend">
//               <li><span className="explore__dot explore__dot--major" /> Major site</li>
//               <li><span className="explore__dot explore__dot--minor" /> Other settlement</li>
//               <li><span className="explore__dot explore__dot--route" /> Trade route</li>
//             </ul>
//             <Link to="/map" className="explore__map-cta">View Full Map →</Link>
//           </div>
//           <div className="explore__map-preview">
//             <span>🗺️</span>
//           </div>
//         </div>

//         {/* ---------- Step inside the city (hover markers) ---------- */}
//         <div className="explore__city">
//           <div className="explore__city-info">
//             <h2>Step Inside the City</h2>
//             <p>Walk through a reconstructed view of Mohenjo-daro and explore its key features.</p>
//           </div>

//           <div className="explore__city-stage">
//             <span className="explore__city-bg">🏙️</span>
//             {CITY_MARKERS.map((m) => (
//               <button
//                 key={m.id}
//                 type="button"
//                 className={`explore__city-marker ${activeMarker === m.id ? 'is-active' : ''}`}
//                 style={{ top: `${m.top}%`, left: `${m.left}%` }}
//                 onMouseEnter={() => setActiveMarker(m.id)}
//                 onFocus={() => setActiveMarker(m.id)}
//                 onMouseLeave={() => setActiveMarker(null)}
//               >
//                 + {m.label}
//                 {activeMarker === m.id && (
//                   <span className="explore__city-tooltip">{m.note}</span>
//                 )}
//               </button>
//             ))}
//           </div>
//           <p className="explore__city-hint">Hover on the markers to learn more.</p>
//         </div>

//         {/* ---------- Artifact gallery ---------- */}
//         <div className="explore__section-head">
//           <span className="explore__section-icon">🏺</span>
//           <h2>Artifact Gallery</h2>
//           <span className="explore__section-note">Real objects · Real people · A remarkable civilization</span>
//         </div>

//         <div className="explore__gallery-wrap">
//           <button type="button" className="explore__gallery-nav explore__gallery-nav--prev" onClick={() => scrollGallery(-1)} aria-label="Previous">‹</button>
//           <div className="explore__gallery" ref={galleryRef}>
//             {ARTIFACTS.map((a) => (
//               <div className="explore__artifact-card" key={a.id}>
//                 <div className="explore__artifact-image">{a.icon}</div>
//                 <h3>{a.title}</h3>
//                 <p>{a.body}</p>
//                 <button type="button" className="explore__artifact-btn">View Artifact →</button>
//               </div>
//             ))}
//           </div>
//           <button type="button" className="explore__gallery-nav explore__gallery-nav--next" onClick={() => scrollGallery(1)} aria-label="Next">›</button>
//         </div>

//         {/* ---------- Bottom banners ---------- */}
//         <div className="explore__banners">
//           <div className="explore__banner explore__banner--light">
//             <span className="explore__section-icon">💡</span>
//             <div>
//               <h3>Did You Know?</h3>
//               <p>The National Museum, New Delhi houses a remarkable collection of Harappan artifacts, including a terracotta bull, a climbing monkey and other objects from the Indus Valley Civilization.</p>
//               <button type="button" className="explore__banner-btn">Explore Museum Collection →</button>
//             </div>
//           </div>

//           <div className="explore__banner explore__banner--dark">
//             <span className="explore__section-icon">🔍</span>
//             <div>
//               <h3>Become an Archaeological Detective</h3>
//               <p>Think like a researcher. Study the clues, ask questions, and uncover the past.</p>
//               <Link to="/detective" className="explore__banner-btn">Go to Detective Page →</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, SITES, CITY_MARKERS, ARTIFACTS } from '../../data/exploreHeritage.js'
import PageHero from '../../components/PageHero.jsx'
import './ExploreHeritage.css'

export default function ExploreHeritage() {
  const galleryRef = useRef(null)
  const categoriesRef = useRef(null)

  function scrollGallery(dir) {
    galleryRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section className="explore">
      {/* ---------- Hero ---------- */}
      <PageHero
        eyebrow="Phase 6"
        title="Explore Heritage"
        subtitle="Discover the cities, people, objects, and stories of the Indus Valley."
      >
        <button
          type="button"
          className="explore__start-btn"
          onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Exploring →
        </button>
      </PageHero>

      <div className="container">
        {/* ---------- Category cards ---------- */}
        <div className="explore__categories" ref={categoriesRef}>
          {CATEGORIES.map((cat) => (
            <div className="explore__category-card" key={cat.id}>
              <div className="explore__category-image">{cat.icon}</div>
              <div className="explore__category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.body}</p>
              <span className="explore__category-arrow">→</span>
            </div>
          ))}
        </div>

        {/* ---------- Choose a civilization site ---------- */}
        <div className="explore__section-head">
          <span className="explore__section-icon">🏛️</span>
          <h2>Choose a civilization site</h2>
          <span className="explore__section-note">Four major sites · One incredible civilization</span>
        </div>

        <div className="explore__sites-grid">
          {SITES.map((site) => (
            <div className="explore__site-card" key={site.id}>
              <div className="explore__site-image">
  <img src={site.image} alt={site.name} />
</div>

              <div className="explore__site-body">
                <h3>{site.name}</h3>
                <p className="explore__site-meta">📅 {site.period}</p>
                <p className="explore__site-meta">📍 {site.location}</p>
                <p className="explore__site-desc">{site.body}</p>
                <Link to="/map" className="explore__site-btn">Explore Site →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Mini map preview ---------- */}
        <div className="explore__map-band">
          <div className="explore__map-info">
            <span className="explore__section-icon">🧭</span>
            <h2>Explore the Indus Valley</h2>
            <p>Follow the river, discover the cities, see how they were connected.</p>
            <ul className="explore__map-legend">
              <li><span className="explore__dot explore__dot--major" /> Major site</li>
              <li><span className="explore__dot explore__dot--minor" /> Other settlement</li>
              <li><span className="explore__dot explore__dot--route" /> Trade route</li>
            </ul>
            <Link to="/map" className="explore__map-cta">View Full Map →</Link>
          </div>
          <div className="explore__map-preview">
            <span>🗺️</span>
          </div>
        </div>

        {/* ---------- Step inside the city (video) ---------- */}
        <div className="explore__city">
          <div className="explore__city-info">
            <h2>Step Inside the City</h2>
            <p>Walk through a reconstructed view of Mohenjo-daro and explore its key features.</p>
          </div>

          <div className="explore__city-stage explore__city-stage--video">
            <video
              className="explore__city-video"
              src="/city-tour.mp4"
              controls
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="explore__city-chips">
            {CITY_MARKERS.map((m) => (
              <div className="explore__city-chip" key={m.id}>
                <strong>{m.label}</strong>
                <span>{m.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Artifact gallery ---------- */}
        <div className="explore__section-head">
          <span className="explore__section-icon">🏺</span>
          <h2>Artifact Gallery</h2>
          <span className="explore__section-note">Real objects · Real people · A remarkable civilization</span>
        </div>

        <div className="explore__gallery-wrap">
          <button type="button" className="explore__gallery-nav explore__gallery-nav--prev" onClick={() => scrollGallery(-1)} aria-label="Previous">‹</button>
          <div className="explore__gallery" ref={galleryRef}>
            {ARTIFACTS.map((a) => (
              <div className="explore__artifact-card" key={a.id}>
                <div className="explore__artifact-image">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
                <div className="explore__artifact-body">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  {(a.period || a.site) && (
                    <div className="explore__artifact-meta">
                      {a.period && <span className="explore__artifact-tag">📅 {a.period}</span>}
                      {a.site && <span className="explore__artifact-tag">📍 {a.site}</span>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="explore__gallery-nav explore__gallery-nav--next" onClick={() => scrollGallery(1)} aria-label="Next">›</button>
        </div>

        {/* ---------- Bottom banners ---------- */}
        <div className="explore__banners">
          <div className="explore__banner explore__banner--light">
            <span className="explore__section-icon">💡</span>
            <div>
              <h3>Did You Know?</h3>
              <p>The National Museum, New Delhi houses a remarkable collection of Harappan artifacts, including a terracotta bull, a climbing monkey and other objects from the Indus Valley Civilization.</p>
              <button type="button" className="explore__banner-btn">Explore Museum Collection →</button>
            </div>
          </div>

          <div className="explore__banner explore__banner--dark">
            <span className="explore__section-icon">🔍</span>
            <div>
              <h3>Become an Archaeological Detective</h3>
              <p>Think like a researcher. Study the clues, ask questions, and uncover the past.</p>
              <Link to="/detective" className="explore__banner-btn">Go to Detective Page →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}