// 

import { useState } from 'react'
import useInView from '../../hooks/useInView.js'
import './StoryCard.css'

export default function StoryCard({ story, index }) {
  const [ref, inView] = useInView()
  const [open, setOpen] = useState(false)

  return (
    <article
      ref={ref}
      className={`story-card ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <button
        type="button"
        className="story-card__header"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div>
          <span className="eyebrow">{story.era}</span>
          <h3 className="story-card__title">{story.title}</h3>
          <p className="story-card__teaser">{story.teaser}</p>
        </div>
        <span className={`story-card__toggle ${open ? 'is-open' : ''}`} aria-hidden="true">
          +
        </span>
      </button>

      <div className={`story-card__panel ${open ? 'is-open' : ''}`}>
        <div className="story-card__panel-inner">
          {story.blocks.map((block, i) => {
            if (block.type === 'quote') {
              return (
                <blockquote className="story-card__quote" key={i}>
                  {block.text.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                  {block.cite && (
                    <span className="story-card__cite">— {block.cite}</span>
                  )}
                </blockquote>
              )
            }
            if (block.type === 'caption') {
              return (
                <figure className="story-card__caption" key={i}>
                  <span className="eyebrow">{block.label}</span>
                  <p>{block.text}</p>
                </figure>
              )
            }
            if (block.type === 'footnote') {
              return (
                <p className="story-card__footnote" key={i}>
                  {block.text}
                </p>
              )
            }
            return <p key={i}>{block.text}</p>
          })}
        </div>
      </div>
    </article>
  )
}