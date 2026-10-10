// ---------------------------------------------------------------------------
// All of the words and content for the site live here, in one place, so they
// are easy to edit without hunting through components.
// ---------------------------------------------------------------------------

export const HER_NAME = 'Mrunaa'

// 1 · Welcome screen
export const welcome = {
  kicker: 'a tiny corner of the internet',
  title: `Heyyy ${HER_NAME}a! 🥹❤️`,
  subtitle: 'Your favourite troublemaker has a little surprise for you!',
  button: 'Open your surprise 💌',
  hint: 'Made slowly, with a lot of feeling, just for you.',
  note: 'It only takes two minutes — promise. Scroll down whenever you are ready.'
}

// 2 · Heartfelt apology — the exact message, kept intact.
export const apologyMessage = `Mrunaaa, I'm really sorry I didn't take you with me to college. 🥺❤️ I understand that it made you upset, and I don't want to ignore your feelings or make excuses. You are special to me, and I want to be more thoughtful about how my actions affect you. I can't change what happened, but I can try to do better. I made this little website just for you because I want to see you happy. Take your time, meri pyaari si girl. Sending you the biggest virtual hug! 🧸💗`

export const apologyIntro = {
  title: 'Something I need to say',
  lead: 'No excuses. No "but". Just the truth, and a sorry that I really mean.'
}

// 3 · Things I love about you — six cards
export const loveCards = [
  {
    icon: '😊',
    title: 'Your smile',
    front: 'The one that shows up before you even speak.',
    back:
      'It is honestly unfair how one smile from you can fix a whole bad day. I notice it every single time.'
  },
  {
    icon: '🌷',
    title: 'Your personality',
    front: 'Loud, silly, warm — completely your own.',
    back:
      'You are never boring. Even your nonsense is my favourite kind of nonsense. You make ordinary days feel like something.'
  },
  {
    icon: '💖',
    title: 'Your heart',
    front: 'Softer than you let people see.',
    back:
      'Your love is purest for me.'
  },
  {
    icon: '🧸',
    title: 'Your hugs',
    front: 'Instant calm, every time.',
    back:
      'A hug from you shuts the whole world up for a minute. That is a superpower and you don\u2019t even charge for it.'
  },
  {
    icon: '🗣️',
    title: 'The way you talk',
    front: 'The stories, the drama, the tiny details.',
    back:
      'I could listen to you narrate the most random part of your day and still be fully invested. Nobody tells a story like you.'
  },
  {
    icon: '✨',
    title: 'Just… you',
    front: 'The whole package. No edits needed.',
    back:
      'On your best days and your grumpy days, you are still my favourite person. That part does not change.'
  }
]

// 4 · A special promise — college themed
export const promises = [
  {
    icon: '📣',
    title: 'I will talk to you first',
    text: 'Before I decide anything, I will tell you. No surprises you have to find out later.'
  },
  {
    icon: '🧠',
    title: 'I will think about your feelings',
    text: 'Not just mine, not just what is convenient. If something might hurt you, I will catch it before it does.'
  },
  {
    icon: '🎒',
    title: 'Plan it together next time',
    text: 'College, trips, food, anything — you get a say. We plan it as a team, not as a "me".'
  },
  {
    icon: '☎️',
    title: 'I will pick up, always',
    text: 'If you are upset, call me. Even if I am wrong, even if I am busy. I would rather hear it than guess it.'
  }
]

export const promiseFooter =
  'I am not promising I will never mess up again — I would be lying. I am promising I will keep trying to be better at this, for you.'

// 5 · Virtual bouquet
export const bouquet = {
  title: 'A bouquet for you 🌹',
  subtitle:
    'The real one is coming soon. Till then, here are roses that will never wilt — and a hug you can actually feel.',
  roses: [
    { label: 'for your smile', color: '#ff5d8f' },
    { label: 'for your patience', color: '#e75480' },
    { label: 'for your heart', color: '#d96b98' },
    { label: 'for your laugh', color: '#ff85a2' },
    { label: 'and one for being you', color: '#c86b98' }
  ],
  hugTitle: 'A virtual hug, coming in hot',
  hugText:
    'Close your eyes for a second. Arms around you, chin on your head, one long breath out. There. That is the hug. 🧸💗',
  hugButton: 'Get your virtual hug 🤗'
}

// 6 · Mini-game
export const game = {
  title: 'Catch my hearts 💕',
  subtitle:
    'Little hearts keep floating up. Tap as many as you can before time runs out — and try not to miss the big one.',
  seconds: 30,
  start: 'Start the game',
  again: 'Play again',
  outro: 'Every heart you catch is one I meant. You just caught them all.'
}

// 7 · Secret love letter
export const letter = {
  title: 'A letter I hid in here 🤍',
  subtitle: 'You found it. Go on — open it. No one is watching.',
  envelopeHint: 'Tap to open',
  salutation: 'My darling Mrunaaa,',
  body: [
    "Baby the more i speak is less for me you are the best thing that could ever ever happen to me, the best person"
    "the best human being, My baby your not just my girlfriend you are myy wifeee, I love Youu so so much myy Mrunaaaa"
    
  ]
}

// 8 · Final surprise
export const finale = {
  title: 'One last thing 💗',
  big: `I'm sorry, ${HER_NAME}a.`,
  lines: [
    "You gonna get all your life such gifts from me!!!",
   
    'But if this made even a small smile happen somewhere in there, then it did exactly what I built it for.',
    'Now come here. The hug is still waiting. 🧸💗'
  ],
  button: 'Shower me with love 🌸',
  afterButton: 'Okay okay, that is enough hearts. I love you. 🥰',
  signature: '— made by hand, for Mrunaa'
}

// Photo placeholder strip — swap these for real photos.
// Put your images in `public/photos/` and change `src` to e.g. `./photos/us-1.jpg`.
export const photoPlaceholders = [
  { id: 1, caption: 'Our first photo together', hint: 'Add a real photo here 💗' },
  { id: 2, caption: 'That day you were laughing', hint: 'Add a real photo here 💗' },
  { id: 3, caption: 'Us being silly', hint: 'Add a real photo here 💗' },
  { id: 4, caption: 'Your favourite one of me', hint: 'Add a real photo here 💗' }
]

// Section registry drives the nav + scroll-spy.
export const sections = [
  { id: 'apology', label: 'Sorry', icon: '🥺' },
  { id: 'love', label: 'About you', icon: '💖' },
  { id: 'promise', label: 'Promise', icon: '📣' },
  { id: 'bouquet', label: 'Bouquet', icon: '🌹' },
  { id: 'game', label: 'Game', icon: '💕' },
  { id: 'letter', label: 'Letter', icon: '🤍' },
  { id: 'finale', label: 'Last thing', icon: '✨' }
]
