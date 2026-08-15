# dsh-yukimi-theme

A [Sajo Yukimi](https://wiki.biligame.com/imascg/%E4%BD%90%E5%9F%8E%E9%9B%AA%E7%BE%8E) (佐城雪美) theme for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) web UI.

Restyles the page — colors, background, sidebar, and a few interactive widgets — around Yukimi Sajo from *THE iDOLM@STER Cinderella Girls*.

[中文说明](README.md) · [Live preview](https://alycestocking.github.io/dsh-yukimi-theme/)

## Features

- **Deep-blue palette** built on Yukimi's image color `#171C8F` (light / dark aware).
- **Card-art background**: her SSR artwork fills the page, softly visible through translucent layers.
- **Frosted-glass sidebar**: pale-blue translucent + backdrop blur.
- **Desktop-pet paper doll** (draggable):
  - single-click → flip (4-frame cycle) + dialogue bubble
  - double-click → half-turn spin into the next outfit
  - long-press → toggle the panel (choose doll / switch background card)
  - randomly auto-triggers a "click" while the page is active
- **Mobamas card rail**: auto-cycling card gallery, click to advance, draggable.
- **Signature plate** in the bottom-right corner.
- **Readability**: text stroke on assistant messages + translucent user bubbles.

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

## License & credits

- **Code**: MIT License, © 2026 AlyceStocking.
- **Artwork**: Yukimi Sajo and all illustrations / cards / paper dolls / signatures are © **Bandai Namco Entertainment / Cygames** (*THE iDOLM@STER Cinderella Girls*). This theme only hot-links the [imascg wiki](https://wiki.biligame.com/imascg) image URLs; it does **not bundle or redistribute** any official assets.
- Personal / fan use only; not for commercial use.

## Thanks

- Character & assets: [imascg wiki](https://wiki.biligame.com/imascg/佐城雪美)
- Palette based on Yukimi's image color `#171C8F` noted on the wiki page.
