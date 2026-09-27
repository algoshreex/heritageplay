// import { Link } from 'react-router-dom'
// import './Placeholder.css'
// import PageHero from '../components/PageHero.jsx'

// export default function Placeholder({ title, phase, body }) {
//   return (
//     <section className="placeholder">
    
//     <>
//       <PageHero eyebrow={phase} title={title} subtitle={body} />
//     </>
  
//       <div className="container placeholder__inner">
//         <p className="eyebrow">{phase}</p>
//         <h1>{title}</h1>
//         <p className="placeholder__body">{body}</p>
//         <Link to="/" className="placeholder__back">← Back to Home</Link>
//       </div>
//     </section>
//   )
// }
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import './Placeholder.css'

export default function Placeholder({ title, phase, body }) {
  return (
    <section className="placeholder">
      <PageHero eyebrow={phase} title={title} subtitle={body} />

      <div className="container placeholder__inner">
        <Link to="/" className="placeholder__back">← Back to Home</Link>
      </div>
    </section>
  )
}