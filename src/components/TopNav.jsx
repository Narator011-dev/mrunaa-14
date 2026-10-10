import { useCallback, useEffect, useState } from 'react'
import { sections } from '../data/content.js'
import FloatingHearts from './FloatingHearts.jsx'

/**
 * Sticky top bar with the scroll progress bar, a row of section chips and a
 * live scroll-spy that highlights whichever section is on screen. Hidden on
 * the welcome screen.
 */
export default function TopNav({ visible }) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Scroll-spy — highlight the section nearest the top of the viewport.
  useEffect(() => {
    const onScroll = () => {
      let current = sections[0]?.id ?? ''
      sections.forEach((s) => {
        const el = document.getElementById(s.id)
        if (!el) return
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  if (!visible) return null

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span className="progress__fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className="topnav" aria-label="Sections">
        <FloatingHearts count={7} className="floating-hearts--nav" />
        <div className="topnav__brand" aria-hidden="true">
          <span className="topnav__brand-heart">💗</span>
          <span className="topnav__brand-text">for Mrunaa</span>
        </div>
        <ul className="topnav__list">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                className={`topnav__chip ${active === s.id ? 'topnav__chip--active' : ''}`}
                onClick={() => go(s.id)}
              >
                <span aria-hidden="true">{s.icon}</span>
                <span className="topnav__chip-label">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
