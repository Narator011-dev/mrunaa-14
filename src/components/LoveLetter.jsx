import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { letter } from '../data/content.js'

/**
 * Section 7 — Secret Love Letter.
 * An envelope that animates open on tap, lifting its flap and pulling the
 * folded letter out. It can be closed again so she can re-read it.
 */
export default function LoveLetter() {
  const [ref, shown] = useReveal()
  const [open, setOpen] = useState(false)

  return (
    <section id="letter" className="section section--letter" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">top secret 🤫</span>
          <h2 className="section__title">{letter.title}</h2>
          <p className="section__lead">{letter.subtitle}</p>
        </header>

        <div className={`envelope-stage ${open ? 'envelope-stage--open' : ''}`}>
          <button
            type="button"
            className="envelope"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close the letter' : 'Open the letter'}
          >
            <span className="envelope__back" aria-hidden="true" />
            <span className="envelope__letter" aria-hidden="true">
              <span className="envelope__letter-line" />
              <span className="envelope__letter-line envelope__letter-line--short" />
              <span className="envelope__letter-heart">💗</span>
            </span>
            <span className="envelope__front" aria-hidden="true" />
            <span className="envelope__flap" aria-hidden="true" />
            <span className="envelope__seal" aria-hidden="true">
              {open ? '💌' : '💗'}
            </span>
          </button>

          <p className="envelope-hint">{open ? 'tap to fold it back up' : letter.envelopeHint}</p>
        </div>

        <article className={`letter-paper ${open ? 'letter-paper--visible' : ''}`} aria-hidden={!open}>
          <div className="letter-paper__head">
            <span className="letter-paper__stamp" aria-hidden="true">
              💌
            </span>
            <p className="letter-paper__salutation">{letter.salutation}</p>
          </div>
          {letter.body.map((para, i) => (
            <p key={i} className="letter-paper__para">
              {para}
            </p>
          ))}
          <div className="letter-paper__footer" aria-hidden="true">
            <span className="letter-paper__petals">🌸 🌷 🌸</span>
          </div>
        </article>
      </div>
    </section>
  )
}
