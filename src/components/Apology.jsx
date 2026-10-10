import useReveal from '../hooks/useReveal.js'
import { apologyIntro, apologyMessage } from '../data/content.js'

/**
 * Section 2 — the heartfelt apology. The personal message is shown word for
 * word, unedited, with no guilt-tripping or pressure attached to it.
 */
export default function Apology() {
  const [ref, shown] = useReveal()

  return (
    <section id="apology" className="section section--apology" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">straight from the heart</span>
          <h2 className="section__title">{apologyIntro.title}</h2>
          <p className="section__lead">{apologyIntro.lead}</p>
        </header>

        <div className="note-card">
          <span className="note-card__quote" aria-hidden="true">
            &ldquo;
          </span>
          {apologyMessage.split('\n\n').map((para, i) => (
            <p key={i} className="note-card__para">
              {para}
            </p>
          ))}
          <div className="note-card__signoff">— with all my heart 🧸</div>
        </div>

        <ul className="reassure">
          <li>
            <span aria-hidden="true">🤍</span> No pressure to reply right away.
          </li>
          <li>
            <span aria-hidden="true">🤍</span> No "so are we okay now?" question at the end.
          </li>
          <li>
            <span aria-hidden="true">🤍</span> Just an honest sorry, and a promise to be better.
          </li>
        </ul>
      </div>
    </section>
  )
}
