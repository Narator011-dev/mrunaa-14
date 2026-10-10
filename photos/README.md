# Photos 📷💗

This folder is where the real photos go.

## How to add your own photos

1. Drop your image files in here, for example:
   - `us-1.jpg`
   - `us-2.jpg`
   - `us-3.jpg`
   - `us-4.jpg`
2. Open `src/data/content.js` and find `photoPlaceholders`.
3. Add a `src` to each entry, pointing at the file:

```js
export const photoPlaceholders = [
  { id: 1, caption: 'Our first photo together', src: './photos/us-1.jpg' },
  { id: 2, caption: 'That day you were laughing', src: './photos/us-2.jpg' },
  { id: 3, caption: 'Us being silly',              src: './photos/us-3.jpg' },
  { id: 4, caption: 'Your favourite one of me',    src: './photos/us-4.jpg' }
]
```

4. Open `src/components/LoveCards.jsx` and swap the placeholder box for an `<img>`:

```jsx
<div className="photo-frame__box">
  {p.src ? (
    <img className="photo-frame__img" src={p.src} alt={p.caption} loading="lazy" />
  ) : (
    <>
      <span className="photo-frame__icon" aria-hidden="true">📷</span>
      <span className="photo-frame__hint">{p.hint}</span>
    </>
  )}
</div>
```

That's it — the frames will show your photos instead of the placeholders.

## Tips
- Keep photos under ~500 KB each so the page stays fast on mobile data.
- Square or portrait (4:5) photos look best in these frames.
- `.jpg` is fine; `.webp` is even smaller if you have it.
