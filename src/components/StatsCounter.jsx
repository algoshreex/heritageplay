import { useRef, useEffect, useState } from 'react'
import './StatsCounter.css'

const STATS = [
  { value: 150, suffix: '+', label: 'Ancient Artifacts', icon: '🏺' },
  { value: 40, suffix: '+', label: 'Traditional Games', icon: '🎲' },
  { value: 12, suffix: '', label: 'Heritage Sites', icon: '🏛️' },
  { value: 5000, suffix: '+', label: 'Years of History', icon: '📜' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return count
}

function StatItem({ stat, delay, inView }) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [inView, delay])

  const count = useCountUp(stat.value, 2200, started)

  return (
    <div className={`stat-item ${started ? 'stat-item--visible' : ''}`}>
      <span className="stat-item__icon">{stat.icon}</span>
      <span className="stat-item__value">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="stat-item__label">{stat.label}</span>
    </div>
  )
}

export default function StatsCounter() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-section__glow" aria-hidden="true" />
      <div className="container stats-section__inner">
        <p className="eyebrow stats-section__eyebrow">Heritage in numbers</p>
        <h2 className="stats-section__heading">A living record of India's past</h2>
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 150} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
