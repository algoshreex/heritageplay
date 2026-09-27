import { Link } from 'react-router-dom'
import './CaseCard.css'

const DIFFICULTY_CLASS = {
  Beginner: 'case-card__difficulty--beginner',
  Intermediate: 'case-card__difficulty--intermediate',
  Advanced: 'case-card__difficulty--advanced',
}

export default function CaseCard({ caseData }) {
  const { id, number, title, civilization, period, region, summary, difficulty, evidence, isPrototype } = caseData

  return (
    <article className="case-card">
      <div className="case-card__top">
        <span className="case-card__number">CASE {number}</span>
        {isPrototype && <span className="case-card__prototype">Prototype Case</span>}
      </div>

      <h3 className="case-card__title">{title}</h3>

      <dl className="case-card__meta">
        <div>
          <dt>Civilization / period</dt>
          <dd>{civilization} · {period}</dd>
        </div>
        <div>
          <dt>Region / site</dt>
          <dd>{region}</dd>
        </div>
      </dl>

      <p className="case-card__summary">{summary}</p>

      <div className="case-card__footer">
        <div className="case-card__stats">
          <span>{evidence.length} pieces of evidence</span>
          <span className={`case-card__difficulty ${DIFFICULTY_CLASS[difficulty] ?? ''}`}>{difficulty}</span>
        </div>
        <Link to={`/detective/${id}`} className="case-card__cta">
          Investigate Case →
        </Link>
      </div>
    </article>
  )
}
