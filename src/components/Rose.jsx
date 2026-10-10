/**
 * A stylised rose drawn as inline SVG — stem, leaves, layered petals and a
 * soft glow. Scales to any size and needs no image file.
 */
export default function Rose({ size = 90, color = '#ff5d8f', label = '', className = '' }) {
  return (
    <figure className={`rose ${className}`} style={{ '--rose-color': color }}>
      <svg
        width={size}
        height={size * 1.35}
        viewBox="0 0 80 108"
        role="img"
        aria-label={label || 'A rose'}
      >
        <defs>
          <radialGradient id={`roseGlow-${color.replace('#', '')}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* glow */}
        <circle cx="40" cy="34" r="30" fill={`url(#roseGlow-${color.replace('#', '')})`} />

        {/* stem */}
        <path
          d="M40 62c-1.6 14-3 22-2 38"
          stroke="#4e8a52"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* leaves */}
        <path
          d="M39 82c-10-2-15-9-14-17 8-1 14 6 14 17z"
          fill="#5fa463"
        />
        <path
          d="M42 92c9-3 13-10 12-18-8 0-13 8-12 18z"
          fill="#6cb470"
        />

        {/* outer petals */}
        <circle cx="40" cy="34" r="24" fill={color} />
        <circle cx="24" cy="28" r="12" fill={color} opacity="0.95" />
        <circle cx="56" cy="28" r="12" fill={color} opacity="0.95" />
        <circle cx="30" cy="45" r="11" fill={color} opacity="0.92" />
        <circle cx="50" cy="45" r="11" fill={color} opacity="0.92" />

        {/* inner swirl */}
        <circle cx="40" cy="34" r="15" fill="#ffffff" opacity="0.22" />
        <circle cx="40" cy="34" r="10" fill={color} opacity="0.9" />
        <path
          d="M40 26c5 0 8 4 8 8s-3 8-8 8-8-4-8-8 3-8 8-8z"
          fill="#ffffff"
          opacity="0.35"
        />
        <circle cx="40" cy="34" r="4" fill="#ffffff" opacity="0.5" />
      </svg>
      {label ? <figcaption className="rose__label">{label}</figcaption> : null}
    </figure>
  )
}
