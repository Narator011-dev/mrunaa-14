import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { loveCards, photoPlaceholders } from '../data/content.js'

/**
 * Section 3 — "Things I Love About You".
 * Six cards that flip over on tap/click to reveal a little more, plus a
 * placeholder photo strip to swap real photos into later.
 */
export default function LoveCards() {
  const [ref, shown] = useReveal()
  const [flipped, setFlipped] = useState(() => ({}))

  const toggle = (i) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <section id="love" className="section section--love" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">six little reasons</span>
          <h2 className="section__title">Things I Love About You</h2>
          <p className="section__lead">
            Tap a card to turn it over. Each one is something I actually notice, not something I
            made up to fill a page.
          </p>
        </header>

        <div className="love-grid">
          {loveCards.map((card, i) => (
            <button
              type="button"
              key={card.title}
              className={`flip-card ${flipped[i] ? 'flip-card--on' : ''}`}
              onClick={() => toggle(i)}
              aria-pressed={Boolean(flipped[i])}
            >
              <span className="flip-card__inner">
                <span className="flip-card__face flip-card__face--front">
                  <span className="flip-card__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <span className="flip-card__title">{card.title}</span>
                  <span className="flip-card__text">{card.front}</span>
                  <span className="flip-card__cta">tap to open 💗</span>
                </span>
                <span className="flip-card__face flip-card__face--back">
                  <span className="flip-card__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <span className="flip-card__backtext">{card.back}</span>
                  <span className="flip-card__cta">tap to close</span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="photo-strip">
          <h3 className="photo-strip__title">Our little memory wall</h3>
          <p className="photo-strip__hint">
            These frames are waiting for our real photos — so send me your favourites and I will
            fill them in. 💗
          </p>
          <div className="photo-strip__row">
            {photoPlaceholders.map((p) => (
              <figure className="photo-frame" key={p.id}>
                <div className="photo-frame__box">
                  <span className="photo-frame__icon" aria-hidden="true">
                    📷
                  </span>
                  <span className="photo-frame__hint">{p.hint}</span>
                </div>
                <figcaption className="photo-frame__caption">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
