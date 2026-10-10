/**
 * A cute little teddy bear, drawn as inline SVG so it scales perfectly and
 * needs no image files. No external assets, no licensing worries.
 */
export default function Teddy({ size = 110, className = '', wave = true }) {
  return (
    <svg
      className={`teddy ${wave ? 'teddy--wave' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="A cute teddy bear"
    >
      {/* ears */}
      <circle cx="34" cy="30" r="15" fill="#c98b5e" />
      <circle cx="34" cy="30" r="8" fill="#f3c9a6" />
      <circle cx="86" cy="30" r="15" fill="#c98b5e" />
      <circle cx="86" cy="30" r="8" fill="#f3c9a6" />

      {/* head */}
      <circle cx="60" cy="48" r="30" fill="#d99c6b" />
      <ellipse cx="60" cy="58" rx="19" ry="15" fill="#f6d3b3" />

      {/* eyes */}
      <circle cx="49" cy="43" r="3.4" fill="#4a2f21" />
      <circle cx="71" cy="43" r="3.4" fill="#4a2f21" />
      <circle cx="50.2" cy="41.8" r="1.1" fill="#fff" />
      <circle cx="72.2" cy="41.8" r="1.1" fill="#fff" />

      {/* nose + mouth */}
      <ellipse cx="60" cy="53" rx="4.4" ry="3.4" fill="#4a2f21" />
      <path d="M60 56.5v4" stroke="#4a2f21" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M55.5 62c1.6 2 7.4 2 9 0" stroke="#4a2f21" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* cheeks */}
      <circle cx="41" cy="55" r="4.6" fill="#ff9ec0" opacity="0.55" />
      <circle cx="79" cy="55" r="4.6" fill="#ff9ec0" opacity="0.55" />

      {/* body */}
      <rect x="40" y="74" width="40" height="30" rx="15" fill="#d99c6b" />
      <ellipse cx="60" cy="90" rx="12" ry="9" fill="#f6d3b3" />

      {/* waving paw */}
      <circle className={wave ? 'teddy__paw' : ''} cx="94" cy="82" r="9.5" fill="#d99c6b" />

      {/* heart on chest */}
      <path
        d="M60 88c-3.4-2.6-6-4.8-6-7.4a3.2 3.2 0 0 1 6-1.2 3.2 3.2 0 0 1 6 1.2c0 2.6-2.6 4.8-6 7.4z"
        fill="#ff5d8f"
      />
    </svg>
  )
}
