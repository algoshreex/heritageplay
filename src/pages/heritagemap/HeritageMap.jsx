// 

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { HERITAGE_SITES } from '../../data/heritageSites.js'
import PageHero from '../../components/PageHero.jsx'
import './HeritageMap.css'

const ZOOM_MIN = 1
const ZOOM_MAX = 2.2
const ZOOM_STEP = 0.2

export default function HeritageMap() {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(HERITAGE_SITES[0].id)
  const [zoom, setZoom] = useState(1)

  const activeSite = HERITAGE_SITES.find((site) => site.id === activeId)

  const filteredSites = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return HERITAGE_SITES
    return HERITAGE_SITES.filter(
      (site) =>
        site.name.toLowerCase().includes(q) ||
        site.location.toLowerCase().includes(q)
    )
  }, [query])

  function logClickPosition(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const left = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1)
    const top = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1)
    // eslint-disable-next-line no-console
    console.log(`Map position → top: ${top}%, left: ${left}%`)
  }

  return (
    <section className="heritage-map">
      <PageHero
        eyebrow="Heritage Map"
        title={<>Explore Ancient Civilizations of <span className="heritage-map__accent">India</span></>}
        subtitle="Discover archaeological sites, ancient games, artifacts and stories from across the country."
      />

      <div className="container">
        <div className="heritage-map__layout">
          <aside className="heritage-map__sidebar">
            <div className="heritage-map__search">
              <span aria-hidden="true">🔍</span>
              <input
                type="text"
                placeholder="Search sites..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <ul className="heritage-map__site-list">
              {filteredSites.map((site) => (
                <li key={site.id}>
                  <button
                    type="button"
                    className={`heritage-map__site-item ${
                      activeId === site.id ? 'is-active' : ''
                    }`}
                    onClick={() => setActiveId(site.id)}
                  >
                    <span
                      className="heritage-map__site-thumb"
                      style={{ background: site.accent }}
                      aria-hidden="true"
                    >
                      🏺
                    </span>
                    <span className="heritage-map__site-text">
                      <strong>{site.name}</strong>
                      <small>{site.location}</small>
                    </span>
                  </button>
                </li>
              ))}
              {filteredSites.length === 0 && (
                <li className="heritage-map__no-results">No sites match your search.</li>
              )}
            </ul>
          </aside>

          <div className="heritage-map__mapframe">
            <div className="heritage-map__viewport" onClick={logClickPosition}>
              <div
                className="heritage-map__zoomed"
                style={{ transform: `scale(${zoom})` }}
              >
                <img
                  src="/heritage-map.png"
                  alt="Map of the Indian subcontinent"
                  className="heritage-map__image"
                />

                {HERITAGE_SITES.map((site) => (
                  <button
                    key={site.id}
                    type="button"
                    className={`heritage-map__pin ${
                      activeId === site.id ? 'is-active' : ''
                    }`}
                    style={{ top: `${site.top}%`, left: `${site.left}%` }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveId(site.id)
                    }}
                  >
                    <span className="heritage-map__pin-dot" />
                    <span className="heritage-map__pin-label">{site.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="heritage-map__zoom">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)))}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)))}
                aria-label="Zoom out"
              >
                −
              </button>
            </div>
          </div>

          <aside className="heritage-map__detail">
            <div
              className="heritage-map__detail-thumb"
              style={{ background: activeSite.accent }}
              aria-hidden="true"
            >
              🏺
            </div>
            <h2>{activeSite.name}</h2>
            <p className="heritage-map__detail-location">{activeSite.location}</p>
            <p className="heritage-map__detail-desc">{activeSite.description}</p>

            <dl className="heritage-map__stats">
              <div>
                <dt>🏛️ Civilization</dt>
                <dd>{activeSite.civilization}</dd>
              </div>
              <div>
                <dt>📅 Period</dt>
                <dd>{activeSite.period}</dd>
              </div>
              <div>
                <dt>🎲 Famous For</dt>
                <dd>{activeSite.famousFor}</dd>
              </div>
            </dl>

            <Link to="/stories" className="heritage-map__cta">
              Explore Full Story →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}