import './PageHero.css'

// Reusable header banner — same background photo, same layout — used on
// every page (Explore Heritage, Play the Past, Stories & Learning, etc.)
// Pass `children` for any extra content under the subtitle (buttons, meta
// row, play button — whatever that page needs).
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'left',   // 'left' | 'center'
  children,
}) {
  return (
    <section className={`page-hero page-hero--${align}`}>
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="page-hero__scrim" aria-hidden="true" />
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>}
        {title && <h1 className="page-hero__title">{title}</h1>}
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}