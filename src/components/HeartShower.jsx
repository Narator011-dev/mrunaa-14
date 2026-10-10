import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * A one-shot shower of hearts, roses and sparkles that rains down the screen
 * when `active` flips true, then removes itself so the page stays light.
 */
export default function HeartShower({ active, duration = 4200, density = 70 }) {
  const [visible, setVisible] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (!active) return undefined
    setVisible(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer.current)
  }, [active, duration])

  const pieces = useMemo(() => {
    const glyphs = ['💗', '💖', '🌹', '🌸', '💕', '✨', '🤍', '🌷']
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.4,
      duration: 2.2 + Math.random() * 2.4,
      size: 16 + Math.random() * 30,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      rotate: Math.round((Math.random() - 0.5) * 540)
    }))
  }, [density])

  if (!visible) return null

  return (
    <div className="shower" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="shower__piece"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--rotate': `${p.rotate}deg`
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  )
}
