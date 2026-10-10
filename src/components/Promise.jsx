import useReveal from '../hooks/useReveal.js'
import { promiseFooter, promises } from '../data/content.js'

/**
 * Section 4 — A Special Promise. College-themed, forward-looking, and
 * deliberately written as "here is what I will do", not "here is why you
 * should be fine with it".
 */
export default function Promise() {
  const [ref, shown] = useReveal()

  return (
    <section id="promise" className="section section--promise" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">not just words</span>
          <h2 className="section__title">A Special Promise 🎒</h2>
          <p className="section__lead">
            About college, about us, and about how I want to handle things from now on.
          </p>
        </header>

        <div className="promise-list">
          {promises.map((p, i) => (
            <article className="promise-item" key={p.title} style={{ '--i': i }}>
              <span className="promise-item__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="promise-item__icon" aria-hidden="true">
                {p.icon}
              </span>
              <div className="promise-item__body">
                <h3 className="promise-item__title">{p.title}</h3>
                <p className="promise-item__text">{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="promise-foot">{promiseFooter}</blockquote>
      </div>
    </section>
  )
}
