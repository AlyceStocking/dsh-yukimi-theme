# dsh-yukimi-theme

A [Sajo Yukimi](https://wiki.biligame.com/imascg/%E4%BD%90%E5%9F%8E%E9%9B%AA%E7%BE%8E) (佐城雪美) theme for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) web UI.

Version **1.2.0** includes a Windows companion in a transparent, frameless, always-on-top window. It monitors all live root sessions, flips once for each new notice, and shows original preset dialogue without sound. Questions and approvals remain until settled; turn-ending notices are queued and shown once. Clicking a bubble opens its session in Harness. The in-page pet hides only after the companion is ready; the background, signature and card remain available.

Build with `npm install`, `npm run build:client`, `npm run desktop:package`; run `npm run check` and `npm test`, then disable the plugin and run `npm run desktop:install`. This creates a complete `.tgz` with the Electron runtime, stores an immutable content-addressed archive under `$DSH_HOME/yukimi-desktop/packages/`, and uses the Desktop application's own CLI to update the profile dependency. Keep this archive: dependency reinstalls can then restore the complete desktop package instead of the old GitHub default branch. Use `npm run desktop:install -- --bundle-only` to build the archive without installing it. Harness program files are not modified.

CLI updates of an existing package preserve its package and internal entry switches; successful installation does not imply enablement. Enable the package and open its details to check that the internal `yukimi-theme` entry is enabled too. The package switch preserves individual entry settings, so toggling the package cannot undo a disabled internal entry. Fully quit and relaunch the DSH desktop app and its Host process while sessions are idle. The Host caches modules; closing the main window, toggling the plugin or refreshing the page may retain the previous entry.

`desktop:sync` remains available for temporary development copies and rollback backups. It does not change the profile dependency source, so a package-manager reinstall can overwrite those copies; use `desktop:install` for persistent installation.

Git checkouts do not include the ignored Electron binary; complete distributions must include `desktop/runtime/win32-x64/`. `npm run desktop:preview` runs a synthetic preview without model calls and keeps separate settings in `build/preview-data/`. To restore a backup, disable the plugin and run `npm run desktop:sync -- --restore-backup <backup-directory>`, then fully quit and relaunch DSH to load the restored Host modules.

Position, outfits and notification acknowledgements live under `$DSH_HOME/yukimi-desktop`. The Host uses a local Windows named pipe with a random handshake to talk to its owned helper and authenticated DSH Connection RPC to reach the page; no extra network port is opened. Minimizing or hiding Harness keeps the pet visible; disabling the plugin or quitting Harness closes it. A normal turn ending is not proof that an entire project is complete.

Dragging reaches each display's edges and corners using the pet's own bounds, independently of its transparent carrier window. Bubbles and settings open on the side with available space. Saved positions refer to the pet itself; previous window-based positions migrate automatically.

All outfit sprites preload in the background, starting with the current and next outfits. Switching waits for image decoding and keeps the previous sprite while loading or on failure, avoiding a blank first outfit change.

Session notices raise the companion and its bubble above other windows without taking keyboard focus. The elevated layer is maintained while a notice remains visible, then returns to the normal floating layer.

Historical messages and code blocks use translucent reading surfaces. The opaque composer card masks scrolled messages and shows a soft blue-violet focus glow, while keeping the host's dock gradient, dynamic sizing and upward menus.

Restyles the page — colors, background, sidebar, and a few interactive widgets — around Yukimi Sajo from *THE iDOLM@STER Cinderella Girls*.

[中文说明](README.md) · [Live preview](https://alycestocking.github.io/dsh-yukimi-theme/)

## npm distribution

After the npm release is published, install the complete Windows x64 package with:

```powershell
dsh plugin --profile desktop add dsh-yukimi-theme@1.2.0
```

The npm package includes the Electron companion runtime; a GitHub source checkout requires the build steps above. Web users can select `--profile web`. Restart Desktop after installation and check both the bundle and internal plugin switches. The public repository uses the `dsh-plugin` topic for dshfind discovery; indexing follows the directory refresh schedule.

## Features

- **Visible background art** with translucent reading surfaces limited to messages and tool content; supports light and dark palettes.
- **Always-visible floating doll**: drag, click to flip with dialogue, double-click to change outfits, and long-press to choose a doll or background.
- **Keyboard interaction**: Enter/Space interacts, the context-menu key opens settings, and Escape closes settings.
- **Floating card and signature**: the card remains draggable, automatically cycles, and advances on click.
- **Responsive extras**: below 1100px wide or 640px tall, only the Mobamas card and signature hide. The doll scales down but stays mounted and visible. Extras return with their previous display preferences when space permits.
- **Full conversation width**: no decoration sidebar, reserved column or decoration gallery dialog.
- **Viewport bounds**: doll dragging/resizing and the settings panel stay within the viewport.

The threshold is defined by matching client/CSS media queries. In the Web profile, preferences are page-local and reset on reload. The Windows companion saves preferences locally and synchronizes them with the desktop app's page.

## Install the Web profile theme

Install with dsh's own plugin management command (the package then appears in the Settings → Plugins management UI):

```bash
dsh plugin --profile web add github:AlyceStocking/dsh-yukimi-theme
```

Stop any running Web server, then start it again:

```bash
dsh web
```

or `dsh --profile web`.

> Do not install by copying into `node_modules` and editing `cordis.patch.yml` by hand: the plugin runs, but because it is not a pnpm dependency of the profile, the plugin management UI will not list it and it cannot be toggled or removed from the UI.
> `DSH_HOME` defaults to `C:\Users\<you>\.dsh` on Windows.

## Development and validation

For Web profile style iteration, edit `lib/client.js` directly. Shared artwork URLs and original lines live in `lib/assets.js`; run `npm run build:client` after editing them to regenerate the client asset block. Run `npm run check` and `npm test`.

The installed Web profile uses a file copy. For browser-only style or artwork changes, sync the generated `lib/client.js` to that profile's plugin directory and refresh the browser page. Stop and restart `dsh web` if the previous client remains cached.

For the Windows companion, follow the complete build, package and sync workflow above, then fully quit and relaunch the desktop app and its Host process. Copying only `lib/client.js` does not update the Host bridge or the companion executable. See the [validation record](docs/validation.md) for Web and Windows companion results, their tested scope, and official references.

## License & credits

- **Code**: MIT License, © 2026 AlyceStocking.
- **Artwork**: Yukimi Sajo and all illustrations / cards / paper dolls / signatures are © **Bandai Namco Entertainment / Cygames** (*THE iDOLM@STER Cinderella Girls*). This theme only hot-links the [imascg wiki](https://wiki.biligame.com/imascg) image URLs; it does **not bundle or redistribute** any official assets.
- Personal / fan use only; not for commercial use.

## Thanks

- Character & assets: [imascg wiki](https://wiki.biligame.com/imascg/佐城雪美)
- Palette based on Yukimi's image color `#171C8F` noted on the wiki page.
