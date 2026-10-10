import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import HeartShower from './HeartShower.jsx'
import Teddy from './Teddy.jsx'
import { finale } from '../data/content.js'

/**
 * Section 8 — Final Surprise. A gentle closing that ends with a shower of
 * hearts and flowers she can trigger herself. No conditions, no pressure.
 */
export default function Finale() {
  const [ref, shown] = useReveal()
  const [shower, setShower] = useState(false)
  const [tapped, setTapped] = useState(false)

  const unleash = () => {
    setShower(false)
    // Re-trigger cleanly so repeated taps still work.
    window.setTimeout(() => setShower(true), 30)
    setTapped(true)
  }

  return (
    <section id="finale" className="section section--finale" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head section__head--center">
          <span className="section__pill">that is all of it</span>
          <h2 className="section__title">{finale.title}</h2>
          <p className="finale__big">{finale.big}</p>
        </header>

        <div className="finale__lines">
          {finale.lines.map((line, i) => (
            <p key={i} className="finale__line">
              {line}
            </p>
          ))}
        </div>

        <div className="finale__teddy">
          <Teddy size={120} />
        </div>

        <button type="button" className="btn btn--primary btn--big btn--pulse" onClick={unleash}>
          {finale.button}
        </button>

        {tapped && <p className="finale__after">{finale.afterButton}</p>}

        <p className="finale__signature">{finale.signature}</p>
      </div>

      <HeartShower active={shower} duration={5000} density={90} />
      {tapped && (
        <span className="sr-only" role="status">
          A shower of hearts and flowers is falling.
        </span>
      )}
    </section>
  )
}
