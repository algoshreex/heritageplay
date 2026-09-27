 import { GAMES } from '../../data/games.js'
import GameCard from '../../components/play/GameCard.jsx'
import PageHero from '../../components/PageHero.jsx'
import './Play.css'

export default function Play() {
  return (
    <section className="play-hub">
      <PageHero
        eyebrow="Play the Past"
        title="Board Games, Rebuilt from the Ground Up"
        subtitle="Play the same games archaeologists found buried at Harappa and Mohenjo-daro."
      />
      <div className="container">
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