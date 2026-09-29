import './HeroVideoBg.css'

export default function HeroVideoBg({ src }) {
  return (
    <video
      className="hero-video-bg"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      poster="/page-hero-bg.jpg"
    />
  )
}