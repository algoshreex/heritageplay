import { useState, useEffect, useRef } from 'react'
import './TestimonialCarousel.css'

const TESTIMONIALS = [
  {
    quote: "HeritagePlay transformed how my students connect with Indian history — they don't just learn, they experience it.",
    author: 'Dr. Priya Sharma',
    role: 'Professor of History, JNU',
    avatar: '👩‍🏫',
  },
  {
    quote: "The reconstruction feature is brilliant. It made me think like a real archaeologist, questioning every piece of evidence.",
    author: 'Arjun Nair',
    role: 'Student & Heritage Enthusiast',
    avatar: '🧑‍🎓',
  },
  {
    quote: "Finally, a platform that treats heritage gaming with the scholarly rigor it deserves. Beautifully crafted.",
    author: 'Meera Patel',
    role: 'Museum Curator, National Museum',
    avatar: '👩‍💼',
  },
  {
    quote: "Playing ancient games with historical rules gave me a completely new perspective on our cultural legacy.",
    author: 'Vikram Desai',
    role: 'Game Design Researcher',
    avatar: '🎮',
  },
]

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timeoutRef.current = setTimeout(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearTimeout(timeoutRef.current)
  }, [active, paused])

  return (
    <section
      className="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container testimonials__inner">
        <p className="eyebrow testimonials__eyebrow">What people say</p>
        <h2 className="testimonials__heading">Voices from the community</h2>

        <div className="testimonials__carousel">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className={`testimonials__card ${i === active ? 'testimonials__card--active' : ''}`}
              aria-hidden={i !== active}
            >
              <div className="testimonials__quote-mark" aria-hidden="true">"</div>
              <p className="testimonials__text">{t.quote}</p>
              <footer className="testimonials__footer">
                <span className="testimonials__avatar">{t.avatar}</span>
                <div>
                  <cite className="testimonials__author">{t.author}</cite>
                  <span className="testimonials__role">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
