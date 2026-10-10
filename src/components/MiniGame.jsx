import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { game } from '../data/content.js'

const BEST_KEY = 'mrunaa-heart-game-best'
const TICK_MS = 50 // smooth-ish timer without burning CPU

const GLYPHS = ['💗', '💖', '💕', '🤍', '💘']

/**
 * Section 6 — Mini-game. Little hearts float up from the bottom of the play
 * area; she taps them to score. Golden hearts are worth more but vanish
 * faster, and catching hearts in quick succession chains a combo multiplier.
 *
 * Pure client-side, no backend. The best score is remembered in localStorage
 * so she can try to beat herself.
 */
export default function MiniGame() {
  const [ref, shown] = useReveal()
  const [phase, setPhase] = useState('idle') // idle | playing | over
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [caught, setCaught] = useState(0)
  const [missed, setMissed] = useState(0)
  const [msLeft, setMsLeft] = useState(game.seconds * 1000)
  const [hearts, setHearts] = useState([])
  const [pops, setPops] = useState([])
  const [best, setBest] = useState(0)

  const heartId = useRef(0)
  const popId = useRef(0)
  const lastCatchAt = useRef(0)
  const spawnRef = useRef(null)
  const tickRef = useRef(null)
  const timeoutsRef = useRef(new Set())

  // Load previous best score once on mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(BEST_KEY)
      if (stored) setBest(Number(stored) || 0)
    } catch {
      /* localStorage can be unavailable in private modes — that is fine */
    }
  }, [])

  const clearAllTimers = useCallback(() => {
    if (spawnRef.current) clearInterval(spawnRef.current)
    if (tickRef.current) clearInterval(tickRef.current)
    spawnRef.current = null
    tickRef.current = null
    timeoutsRef.current.forEach((t) => clearTimeout(t))
    timeoutsRef.current.clear()
  }, [])

  const later = useCallback((fn, delay) => {
    const t = setTimeout(() => {
      timeoutsRef.current.delete(t)
      fn()
    }, delay)
    timeoutsRef.current.add(t)
    return t
  }, [])

  // Clean everything up if she scrolls away or leaves.
  useEffect(() => () => clearAllTimers(), [clearAllTimers])

  const removeHeart = useCallback((id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id))
  }, [])

  const spawn = useCallback(() => {
    const id = (heartId.current += 1)
    const golden = Math.random() < 0.14
    const size = golden ? 40 + Math.random() * 12 : 30 + Math.random() * 24
    const lifetime = golden ? 1900 + Math.random() * 500 : 2900 + Math.random() * 1400

    const heart = {
      id,
      left: 6 + Math.random() * 82, // percentage across the play area
      size,
      lifetime,
      golden,
      glyph: golden ? '💛' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      wobble: Math.round((Math.random() - 0.5) * 40)
    }

    setHearts((prev) => [...prev, heart])

    // If it floats away untouched, count it as missed.
    later(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id))
      setMissed((m) => m + 1)
    }, lifetime)
  }, [later])

  const start = useCallback(() => {
    clearAllTimers()
    setPhase('playing')
    setScore(0)
    setCombo(0)
    setCaught(0)
    setMissed(0)
    setHearts([])
    setPops([])
    setMsLeft(game.seconds * 1000)
    lastCatchAt.current = 0

    // Spawn hearts a little faster as the game goes on.
    let elapsed = 0
    spawn()
    spawnRef.current = setInterval(() => {
      elapsed += 1
      spawn()
      if (elapsed % 6 === 0 && elapsed < 30) spawn() // occasional double
    }, 620)

    tickRef.current = setInterval(() => {
      setMsLeft((prev) => {
        const next = prev - TICK_MS
        if (next <= 0) {
          clearAllTimers()
          setPhase('over')
          return 0
        }
        return next
      })
    }, TICK_MS)
  }, [clearAllTimers, spawn])

  // Persist a new best score when the round ends.
  useEffect(() => {
    if (phase !== 'over') return
    setBest((prev) => {
      const next = Math.max(prev, score)
      try {
        window.localStorage.setItem(BEST_KEY, String(next))
      } catch {
        /* ignore storage failures */
      }
      return next
    })
    setHearts([])
  }, [phase, score])

  const catchHeart = (heart) => {
    if (phase !== 'playing') return

    const now = Date.now()
    const quick = now - lastCatchAt.current < 1100
    lastCatchAt.current = now

    const nextCombo = quick ? combo + 1 : 1
    setCombo(nextCombo)

    const multiplier = Math.min(1 + Math.floor(nextCombo / 5), 4)
    const gain = (heart.golden ? 25 : 10) * multiplier

    setScore((s) => s + gain)
    setCaught((c) => c + 1)
    removeHeart(heart.id)

    const pop = {
      id: (popId.current += 1),
      left: heart.left,
      text: `+${gain}${heart.golden ? ' 💛' : ''}`,
      combo: nextCombo >= 5 ? `x${multiplier}` : null
    }
    setPops((prev) => [...prev, pop])
    later(() => setPops((prev) => prev.filter((p) => p.id !== pop.id)), 900)
  }

  const secondsLeft = Math.ceil(msLeft / 1000)
  const progress = useMemo(
    () => Math.max(0, Math.min(100, (msLeft / (game.seconds * 1000)) * 100)),
    [msLeft]
  )

  const accuracy = caught + missed > 0 ? Math.round((caught / (caught + missed)) * 100) : 0

  return (
    <section id="game" className="section section--game" ref={ref}>
      <div className={`reveal ${shown ? 'reveal--in' : ''}`}>
        <header className="section__head">
          <span className="section__pill">30 seconds of silly</span>
          <h2 className="section__title">{game.title}</h2>
          <p className="section__lead">{game.subtitle}</p>
        </header>

        <div className="game">
          <div className="game__hud">
            <div className="game__stat">
              <span className="game__stat-label">Score</span>
              <span className="game__stat-value">{score}</span>
            </div>
            <div className="game__stat">
              <span className="game__stat-label">Time</span>
              <span className="game__stat-value">{phase === 'playing' ? `${secondsLeft}s` : `${game.seconds}s`}</span>
            </div>
            <div className="game__stat">
              <span className="game__stat-label">Combo</span>
              <span className="game__stat-value">
                {combo > 0 && phase === 'playing' ? `x${Math.min(1 + Math.floor(combo / 5), 4)}` : '—'}
              </span>
            </div>
            <div className="game__stat">
              <span className="game__stat-label">Best</span>
              <span className="game__stat-value">{best}</span>
            </div>
          </div>

          <div className="game__bar" aria-hidden="true">
            <span className="game__bar-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className={`game__area game__area--${phase}`}>
            {phase === 'playing' &&
              hearts.map((h) => (
                <button
                  type="button"
                  key={h.id}
                  className={`heart ${h.golden ? 'heart--golden' : ''}`}
                  style={{
                    left: `${h.left}%`,
                    fontSize: `${h.size}px`,
                    animationDuration: `${h.lifetime}ms`,
                    '--wobble': `${h.wobble}px`
                  }}
                  onPointerDown={(e) => {
                    e.preventDefault()
                    catchHeart(h)
                  }}
                  aria-label={h.golden ? 'Golden heart, worth extra points' : 'Heart'}
                >
                  {h.glyph}
                </button>
              ))}

            {pops.map((p) => (
              <span key={p.id} className="game__pop" style={{ left: `${p.left}%` }}>
                {p.text}
                {p.combo ? <b className="game__pop-combo">{p.combo}</b> : null}
              </span>
            ))}

            {phase === 'idle' && (
              <div className="game__panel">
                <span className="game__panel-emoji" aria-hidden="true">
                  💕
                </span>
                <p className="game__panel-text">
                  Tap the hearts before they float away. Golden hearts are worth extra.
                </p>
                <button type="button" className="btn btn--primary" onClick={start}>
                  {game.start}
                </button>
              </div>
            )}

            {phase === 'over' && (
              <div className="game__panel">
                <span className="game__panel-emoji" aria-hidden="true">
                  🎉
                </span>
                <h3 className="game__panel-title">
                  {score > 0 ? `You caught ${caught} hearts!` : 'Aww, the hearts floated away.'}
                </h3>
                <div className="game__result">
                  <div>
                    <span className="game__result-label">Score</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span className="game__result-label">Accuracy</span>
                    <strong>{accuracy}%</strong>
                  </div>
                  <div>
                    <span className="game__result-label">Best</span>
                    <strong>{best}</strong>
                  </div>
                </div>
                <p className="game__panel-text">
                  {score >= best && score > 0
                    ? 'New personal best — of course you beat me at my own game. 🥰'
                    : game.outro}
                </p>
                <button type="button" className="btn btn--primary" onClick={start}>
                  {game.again}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
