import { useMemo } from 'react'

/**
 * Soft, always-on layer of hearts drifting upward in the background.
 * Purely decorative — hidden from screen readers and disabled when the
 * visitor prefers reduced motion.
 */
export default function FloatingHearts({ count = 14, className = '' }) {
  const hearts = useMemo(() => {
    const glyphs = ['💗', '💖', '🤍', '💕', '🌸', '✨']
    return Array.from({ length: count }, (_, i) => {
      const size = 12 + Math.random() * 22
      return {
        id: i,
        left: Math.random() * 100,
        size,
        duration: 12 + Math.random() * 14,
        delay: -(Math.random() * 20),
        glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        drift: Math.round((Math.random() - 0.5) * 120),
        opacity: 0.35 + Math.random() * 0.45
      }
    })
  }, [count])

  return (
    <div className={`floating-hearts ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-hearts__item"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            '--dur': `${h.duration}s`,
            '--delay': `${h.delay}s`,
            '--drift': `${h.drift}px`,
            opacity: h.opacity
          }}
        >
          {h.glyph}
        </span>
      ))}
    </div>
  )
}
