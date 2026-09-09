# dsh-yukimi-theme

A [Sajo Yukimi](https://wiki.biligame.com/imascg/%E4%BD%90%E5%9F%8E%E9%9B%AA%E7%BE%8E) (佐城雪美) theme for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) web UI.

Restyles the page — colors, background, sidebar, and a few interactive widgets — around Yukimi Sajo from *THE iDOLM@STER Cinderella Girls*.

[中文说明](README.md) · [Live preview](https://alycestocking.github.io/dsh-yukimi-theme/)

## Features

- **Deep-blue palette** based on Yukimi's image color `#171C8F`, with light/dark/system support.
- **Readable surfaces**: subdued background art, high-contrast text and code surfaces, without text outlines.
- **Dedicated decoration rail**: cards, doll and signature stay in a reserved 248px column outside conversation, composer and tool details.
- **Responsive display**: the rail appears at 1280×720 or larger. Smaller windows hide it automatically; the sidebar's “雪” button opens a scrollable decoration dialog with Escape-to-close.
- **One-click visibility**: show/hide the entire rail from the sidebar footer. The desktop choice survives viewport changes within the current page.
- **Doll interactions**: click to flip and show a line; use the visible button to cycle outfits. Keyboard controls and reduced-motion styling are supported.
- **Mobamas cards**: automatic carousel and click-to-advance; the timer stops while decorations are hidden.
- **Appearance controls**: expand the visible settings section to choose a background or hide individual decorations.

Free dragging has been removed to prevent overlap; visible controls replace the old long-press and double-click actions. Decoration preferences are page-local and reset on reload.

## Install

1. Copy this package (`@local/dsh-yukimi-theme`) under `$DSH_HOME/profiles/node_modules/@local/`:

   ```
   $DSH_HOME/profiles/node_modules/@local/dsh-yukimi-theme/
   ├── package.json
   └── lib/
       ├── index.js
       └── client.js
   ```

2. Edit `$DSH_HOME/profiles/web/cordis.patch.yml` and add:

   ```yaml
   - insert:
       - id: yukimi-theme
         name: '@local/dsh-yukimi-theme'
   ```

   (If the file is currently the empty `[]`, replace it with the above, keeping the comment.)

3. Restart:

   ```bash
   dsh web
   ```

   or `dsh --profile web`.

> `DSH_HOME` defaults to `C:\Users\<you>\.dsh` on Windows.

## Development and validation

Edit `lib/client.js` directly; no build or test dependencies are required. Run `npm run check` and `npm test`. Sync the modified client to the installed copy before reloading DSH; restart the server if the old bundle remains cached. See [stage validation](docs/validation.md) for browser checks and official references.

## License & credits

- **Code**: MIT License, © 2026 AlyceStocking.
- **Artwork**: Yukimi Sajo and all illustrations / cards / paper dolls / signatures are © **Bandai Namco Entertainment / Cygames** (*THE iDOLM@STER Cinderella Girls*). This theme only hot-links the [imascg wiki](https://wiki.biligame.com/imascg) image URLs; it does **not bundle or redistribute** any official assets.
- Personal / fan use only; not for commercial use.

## Thanks

- Character & assets: [imascg wiki](https://wiki.biligame.com/imascg/佐城雪美)
- Palette based on Yukimi's image color `#171C8F` noted on the wiki page.
