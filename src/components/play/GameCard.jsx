import './GameCard.css'

export default function GameCard({ game }) {
  const { number, era, tag, title, summary, info, href } = game

  return (
    <article className="game-card">
      <div className={`game-card__visual game-card__visual--${game.id}`}>
        <span className="game-card__era">{era}</span>
        <span className="game-card__number">{number}</span>
      </div>

      <div className="game-card__body">
        <span className="eyebrow">{tag}</span>
        <h3 className="game-card__title">{title}</h3>
        <p className="game-card__summary">{summary}</p>

        <ul className="game-card__info">
          {info.map((item) => (
            <li key={item.label}>
              <strong aria-hidden="true">{item.icon}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Full page link on purpose — these games are standalone static
            builds served from /public/games, not React routes. */}
        <a className="game-card__cta" href={href}>
          Play {title} →
        </a>
      </div>
    </article>
  )
}
