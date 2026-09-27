import { GAMES } from '../../data/games.js'
import GameCard from '../../components/play/GameCard.jsx'
import './Play.css'

export default function Play() {
  return (
    <section className="play-hub">
      <div className="container">
        <p className="eyebrow">HeritagePlay Collection</p>
        <h1>
          Choose your <span className="play-hub__accent">game.</span>
        </h1>
        <p className="play-hub__lede">
          Step into India's past and experience historically inspired games
          through a modern interactive platform.
        </p>

        <div className="play-hub__grid">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="play-hub__notice">
          <span className="play-hub__notice-mark" aria-hidden="true">✦</span>
          <div>
            <p className="eyebrow">A note on history</p>
            <h3>Play inspired by history, not a replacement for it.</h3>
            <p>
              HeritagePlay uses historical research and archaeological
              evidence to create engaging digital reconstructions. Where
              original rules are uncertain, our gameplay is clearly
              presented as a historically inspired interpretation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
