import { useMemo } from 'react'

/**
 * Twinkling sparkle field. Rendered once and left alone so the twinkle
 * pattern stays calm rather than flickering.
 */
export default function Sparkles({ count = 26, className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 3 + Math.random() * 7,
        delay: Math.random() * 4,
        duration: 2.2 + Math.random() * 2.6
      })),
    [count]
  )

  return (
    <div className={`sparkles ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="sparkles__dot"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`
          }}
        />
      ))}
    </div>
  )
}
