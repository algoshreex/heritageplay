// A small set of hand-built line-art icons in the site's visual vocabulary.
// All use currentColor so they can be recolored via CSS from their parent.

export function SealMark({ size = 36, className }) {
  // The HeritagePlay mark: a stamped seal, like a museum accession stamp —
  // a square field with a die's five-pip pattern, referencing the ancient
  // gaming dice at the center of the whole product.
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.25" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
      <circle cx="28" cy="12" r="2.6" fill="currentColor" />
      <circle cx="20" cy="20" r="2.6" fill="currentColor" />
      <circle cx="12" cy="28" r="2.6" fill="currentColor" />
      <circle cx="28" cy="28" r="2.6" fill="currentColor" />
    </svg>
  )
}

export function IconDice({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="14" r="2.2" fill="currentColor" />
      <circle cx="26" cy="14" r="2.2" fill="currentColor" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
      <circle cx="14" cy="26" r="2.2" fill="currentColor" />
      <circle cx="26" cy="26" r="2.2" fill="currentColor" />
    </svg>
  )
}

export function IconPot({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14 8h12l1.5 5H12.5L14 8Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
      <path
        d="M12.5 13h15c.9 6.5-1 17.5-7.5 19-6.5-1.5-8.4-12.5-7.5-19Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M15.5 18c1.6 1 7.4 1 9 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPiece({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="12" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 32c0-6.5 3.5-11 8-11s8 4.5 8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconBoard({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 15.3h28M6 24.6h28M15.3 6v28M24.6 6v28" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
    </svg>
  )
}

export function IconScroll({ size = 20, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 8h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 8a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 15h9M15 20h9M15 25h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPin({ size = 20, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 34s10-10.5 10-18a10 10 0 1 0-20 0c0 7.5 10 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="16" r="3.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function IconClock({ size = 20, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
      <path d="M20 12v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCheck({ size = 16, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 12.5l5.5 5.5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMenu({ size = 24, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ size = 24, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
