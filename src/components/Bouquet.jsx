import { useMemo, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import Rose from './Rose.jsx'
import Teddy from './Teddy.jsx'
import HeartShower from './HeartShower.jsx'
import { bouquet } from '../data/content.js'

/**
 * Section 5 — Virtual Bouquet.
 * Animated roses that bloom in one after another, a drift of falling petals,
 * and a "virtual hug" overlay she can trigger herself.
 */
export default function Bouquet() {
  const [ref, shown] = useReveal()
  const [hug, setHug] = useState(false)
  const [shower, setShower] = useState(false)

  // Falling petals for this section only.
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 7,
        size: 10 + Math.random() * 16,
        glyph: ['🌸', '🌷', '🌺', '💮'][Math.floor(Math.random() * 4)]
      })),
    []
  )

  const giveHug = () => {
    setHug(true)
    setShower(true)
    window.setTimeout(() => setHug(false), 4200)
  }

  return (
    <section id="bouquet" className="section section--bouquet" ref={ref}>
      <div className="petals" aria-hidden="true">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petals__item"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          >
            {p.glyph}
          </span>
        ))}
      </div>

      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">pick a rose</span>
          <h2 className="section__title">{bouquet.title}</h2>
          <p className="section__lead">{bouquet.subtitle}</p>
        </header>

        <div className="bouquet">
          {bouquet.roses.map((r, i) => (
            <Rose
              key={r.label}
              size={78}
              color={r.color}
              label={r.label}
              className={`bouquet__rose ${shown ? 'bouquet__rose--in' : ''}`}
            />
          ))}
        </div>

        <div className="hug-block">
          <div className="hug-block__teddy">
            <Teddy size={104} />
          </div>
          <h3 className="hug-block__title">{bouquet.hugTitle}</h3>
          <p className="hug-block__text">{bouquet.hugText}</p>
          <button type="button" className="btn btn--soft btn--pulse" onClick={giveHug}>
            {bouquet.hugButton}
          </button>
        </div>
      </div>

      <HeartShower active={shower} duration={3200} density={54} />
      {shower && <span className="sr-only" role="status">Sending you a shower of hearts.</span>}

      {hug && (
        <div className="hug-overlay" onClick={() => setHug(false)} role="presentation">
          <div className="hug-overlay__card">
            <span className="hug-overlay__emoji" aria-hidden="true">
              🤗
            </span>
            <p className="hug-overlay__text">
              Hug received. Warm, tight, and about three seconds too long. 🧸💗
            </p>
            <span className="hug-overlay__hint">tap anywhere to close</span>
          </div>
        </div>
      )}
    </section>
  )
}
