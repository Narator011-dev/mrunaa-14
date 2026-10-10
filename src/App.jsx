import { useEffect, useState } from 'react'
import Welcome from './components/Welcome.jsx'
import TopNav from './components/TopNav.jsx'
import Apology from './components/Apology.jsx'
import LoveCards from './components/LoveCards.jsx'
import Promise from './components/Promise.jsx'
import Bouquet from './components/Bouquet.jsx'
import MiniGame from './components/MiniGame.jsx'
import LoveLetter from './components/LoveLetter.jsx'
import Finale from './components/Finale.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'
import Sparkles from './components/Sparkles.jsx'

/**
 * App shell.
 *  - The welcome screen sits on top until she taps the button.
 *  - After that the section nav appears and the page takes over scrolling.
 *  - Background decorations (hearts + sparkles) live behind everything and
 *    stay still while the content scrolls past.
 */
export default function App() {
  const [opened, setOpened] = useState(false)

  // Lock scrolling while the welcome screen is up.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  // When the site opens, gently scroll to the first section.
  useEffect(() => {
    if (!opened) return
    const t = window.setTimeout(() => {
      document.getElementById('apology')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 260)
    return () => clearTimeout(t)
  }, [opened])

  return (
    <div className={`app ${opened ? 'app--opened' : ''}`}>
      <div className="bg" aria-hidden="true">
        <FloatingHearts count={12} className="floating-hearts--bg" />
        <Sparkles count={24} className="sparkles--bg" />
      </div>

      {!opened && <Welcome onOpen={() => setOpened(true)} />}

      <TopNav visible={opened} />

      <main className="site" aria-hidden={!opened}>
        <Apology />
        <LoveCards />
        <Promise />
        <Bouquet />
        <MiniGame />
        <LoveLetter />
        <Finale />
      </main>

      <footer className="footer">
        <span className="footer__heart">💗</span>
        <p className="footer__text">Made with love, a slow afternoon and too much patience in CSS.</p>
        <p className="footer__sub">for Mrunaa — the best person to be in trouble with.</p>
      </footer>
    </div>
  )
}
