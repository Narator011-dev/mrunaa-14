import { useState } from 'react'
import FloatingHearts from './FloatingHearts.jsx'
import Sparkles from './Sparkles.jsx'
import Teddy from './Teddy.jsx'
import { welcome } from '../data/content.js'

/**
 * Section 1 — the welcome screen. Sits on top of everything until she taps
 * the button, then fades away to reveal the rest of the site.
 */
export default function Welcome({ onOpen }) {
  const [leaving, setLeaving] = useState(false)

  const handleOpen = () => {
    if (leaving) return
    setLeaving(true)
    // Let the fade-out finish before handing control to the main site.
    window.setTimeout(() => onOpen?.(), 620)
  }

  return (
    <div className={`welcome ${leaving ? 'welcome--leaving' : ''}`}>
      <FloatingHearts count={18} />
      <Sparkles count={34} />

      <div className="welcome__glow" aria-hidden="true" />

      <div className="welcome__inner">
        <p className="welcome__kicker">{welcome.kicker}</p>

        <div className="welcome__teddy">
          <Teddy size={128} />
        </div>

        <h1 className="welcome__title">{welcome.title}</h1>
        <p className="welcome__subtitle">{welcome.subtitle}</p>

        <button type="button" className="btn btn--primary btn--pulse" onClick={handleOpen}>
          <span className="btn__label">{welcome.button}</span>
          <span className="btn__shine" aria-hidden="true" />
        </button>

        <p className="welcome__hint">{welcome.hint}</p>
      </div>

      <p className="welcome__foot">{welcome.note}</p>
    </div>
  )
}
