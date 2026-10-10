# For Mrunaa 💗 — A Little Surprise

A small, interactive apology website — part heartfelt letter, part tiny game,
built to make one specific person smile.

It is a **pure frontend** project: no backend, no database, no accounts. Just
React, Vite and hand-written CSS. It builds to static files and can be hosted
anywhere for free.

---

## What's inside

Eight sections, in order:

| # | Section | What it does |
|---|---------|--------------|
| 1 | **Welcome** | "Heyyy Mrunaaa! 🥹❤️" with a teddy bear and an animated button that opens the site |
| 2 | **Heartfelt Apology** | The sincere, personal sorry — word for word, no guilt-tripping |
| 3 | **Things I Love About You** | Six cards that flip over on tap, plus a memory wall for real photos |
| 4 | **A Special Promise** | Four forward-looking promises, written as "here is what I'll do" |
| 5 | **Virtual Bouquet** | Roses that bloom in one by one, falling petals, and a virtual hug on tap |
| 6 | **Mini-Game** | Tap floating hearts to score — 30-second timer, golden hearts, combos, best score saved |
| 7 | **Secret Love Letter** | An envelope that animates open to reveal a personal letter |
| 8 | **Final Surprise** | A gentle closing that ends in a shower of hearts and flowers |

Everything is genuinely interactive — nothing is a static mock-up.

---

## Tech stack

- **React 18** — components + hooks only, no state library needed
- **Vite 5** — dev server and build tool
- **JavaScript (ES modules)** — no TypeScript, kept simple
- **Plain custom CSS** — no Tailwind, no CSS-in-JS. Split into five themed files
- **No backend, no database, no API keys**

---

## Project structure

```
mrunaa-sorry-site/
├── index.html                     page shell + Google Fonts
├── package.json                   scripts & dependencies
├── vite.config.js                 Vite config (base: './' for portable hosting)
├── vercel.json                    Vercel deployment config
├── .github/workflows/deploy-pages.yml   GitHub Pages auto-deploy
├── public/
│   ├── .nojekyll                  keeps GitHub Pages from processing files
│   └── photos/README.md           how to add real photos
└── src/
    ├── main.jsx                   React entry point
    ├── App.jsx                    app shell: welcome gate + all sections
    ├── data/
    │   └── content.js             ⭐ ALL TEXT LIVES HERE — edit this to personalise
    ├── hooks/
    │   └── useReveal.js           reveal-on-scroll helper
    ├── components/
    │   ├── Welcome.jsx            section 1
    │   ├── Apology.jsx            section 2
    │   ├── LoveCards.jsx          section 3
    │   ├── Promise.jsx            section 4
    │   ├── Bouquet.jsx            section 5
    │   ├── MiniGame.jsx           section 6
    │   ├── LoveLetter.jsx         section 7
    │   ├── Finale.jsx             section 8
    │   ├── TopNav.jsx             sticky nav + scroll-spy + progress bar
    │   ├── FloatingHearts.jsx     drifting hearts background
    │   ├── Sparkles.jsx           twinkling sparkles
    │   ├── HeartShower.jsx        one-shot heart flower shower
    │   ├── Teddy.jsx              inline-SVG teddy bear
    │   └── Rose.jsx               inline-SVG rose
    └── styles/
        ├── index.css              imports the five files below
        ├── base.css               design tokens, reset, typography, buttons
        ├── animations.css         keyframes + decorative layers
        ├── welcome.css            welcome screen + top nav
        ├── sections.css           sections 2-4
        └── game-letter.css        sections 5-8
```

---

## Run it locally

You need **Node.js 18 or newer** ([download](https://nodejs.org)).

```bash
# 1. go into the project
cd mrunaa-sorry-site

# 2. install dependencies (once)
npm install

# 3. start the dev server
npm run dev
```

Then open the URL it prints — usually **http://localhost:5173**.

### Other commands

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally to check it
```

---

## Deploy it

The build uses `base: './'`, so the **same output works on any host** without
configuration changes.

### Option A — Vercel (easiest, ~2 minutes)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects Vite. Leave the defaults (build `npm run build`, output `dist`).
4. Click **Deploy**. You get a public URL like `https://your-project.vercel.app`.

`vercel.json` is already included and sets the build command, output directory,
SPA routing, and long-term caching for assets.

**Or from the command line:**

```bash
npm install -g vercel
npm run build
vercel --prod
```

### Option B — GitHub Pages (free, repo-hosted)

This project ships an **automatic deploy workflow** at
`.github/workflows/deploy-pages.yml`.

1. Push this folder to a GitHub repository (branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push any change, or run the workflow manually from the **Actions** tab.

Your site appears at `https://<username>.github.io/<repo-name>/`.

Because `base` is `'./'`, it works whether the repo is served from the domain
root or a sub-path — no config change needed.

**Or manually:**

```bash
npm install
npm run deploy:gh     # builds and pushes dist/ to the gh-pages branch
```

### Option C — Netlify / Cloudflare Pages / any static host

- **Build command:** `npm run build`
- **Publish directory:** `dist`

That's all they need.

---

## Make it yours

Almost everything you'd want to change lives in **one file**:
`src/data/content.js`.

| Want to change | Edit this |
|---|---|
| Her name / the greeting | `welcome.title`, or `HER_NAME` |
| The apology text | `apologyMessage` |
| The six love cards | `loveCards` |
| The promises | `promises` |
| The roses and their labels | `bouquet.roses` |
| Game length | `game.seconds` |
| The love letter | `letter.body` |
| The closing message | `finale.lines` |

### Adding real photos

The memory wall currently shows placeholders. To add real photos, see
`public/photos/README.md` — short version: drop images into `public/photos/`,
add a `src` to each entry in `photoPlaceholders`, and swap the placeholder box
in `LoveCards.jsx` for an `<img>` (the README shows the exact snippet).

### Changing the colours

All colours are CSS custom properties at the top of `src/styles/base.css`:

```css
--pink-500: #ff5d8f;   /* main pink  */
--lav-500:  #9a7fd8;   /* lavender   */
--cream:    #fffafc;   /* background */
```

Change those and the whole site re-skins itself.

---

## Accessibility & performance

- **Reduced motion respected** — `prefers-reduced-motion` disables drifting
  hearts, blooming roses and scroll reveals.
- **Keyboard accessible** — the welcome button, nav chips, love cards, envelope
  and game buttons are all real `<button>` elements with visible focus rings.
- **Screen-reader friendly** — decorative layers are `aria-hidden`; state
  changes (hug sent, shower falling) are announced via a live region; the game
  reports its phase.
- **Mobile-first** — designed at phone width first, then scaled up. Fluid type
  via `clamp()`, single-column grids on small screens, nav labels collapse to
  icons under 520px.
- **Light** — about **27 KB of CSS** and **173 KB of JS** (roughly 61 KB
  gzipped in total). No image files at all: the teddy, roses and hearts are
  inline SVG and emoji, so there is nothing heavy to download.
- **No audio autoplay** — there is no audio in this project, so nothing ever
  starts playing on its own.

---

## Notes

- The best score in the mini-game is stored in the browser's `localStorage`, so
  it is per-device and never leaves her phone.
- There is no analytics, no tracking, no external requests except the Google
  Fonts stylesheet.
- There is no backend, so nothing needs a server or a database — but it also
  means there is no way to see whether she opened it. Ask her instead. 💗

---

Made with love, a slow afternoon, and too much patience in CSS.
