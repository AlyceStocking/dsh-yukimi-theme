import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';

function loadTheme() {
  let plugin, tokens;
  const disposers = [];
  const styles = new Set();
  const slots = { inject() {} };
  vm.runInNewContext(readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8'), {
    window: { __ModuleLoader__: { load: entry => { plugin = entry.factory(() => ({})); } } },
    document: {
      createElement: () => { const tag = { dataset: {}, remove: () => styles.delete(tag) }; return tag; },
      head: { appendChild: tag => styles.add(tag) },
    },
  });
  plugin.apply({
    get: key => key === 'theme' ? { overrideTokens: (_, value) => { tokens = value; return () => { tokens = undefined; }; } } : slots,
    effect: fn => disposers.push(fn()),
  });
  return { tokens, styles, dispose: () => disposers.reverse().forEach(fn => fn()), currentTokens: () => tokens };
}

const rgb = hex => hex.slice(1).match(/../g).map(v => parseInt(v, 16));
const luminance = c => c.map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((s,v,i) => s + v * [.2126,.7152,.0722][i], 0);
const contrast = (a,b) => (Math.max(luminance(a),luminance(b)) + .05) / (Math.min(luminance(a),luminance(b)) + .05);

test('reading surfaces keep primary and secondary text above 4.5:1 over any background image', () => {
  const { tokens } = loadTheme();
  for (const mode of ['light', 'dark']) {
    for (const token of ['--dsw-alias-bg-base', '--dsw-specific-sidebar-fill', '--dsw-specific-bubble', '--dsw-alias-markdown-code-block']) {
      const value = tokens[token][mode];
      for (const image of [0, 255]) {
        const parts = value.startsWith('#') ? [...rgb(value), 1] : value.match(/[\d.]+/g).map(Number);
        const bg = parts.slice(0,3).map(v => v * parts[3] + image * (1-parts[3]));
        for (const label of ['primary','secondary']) {
          assert.ok(contrast(rgb(tokens[`--dsw-alias-label-${label}`][mode]), bg) >= 4.5, `${mode} ${token} ${label}`);
        }
      }
    }
  }
});

test('disposing plugin removes its styles and token overrides', () => {
  const theme = loadTheme();
  assert.equal(theme.styles.size, 1);
  theme.dispose();
  assert.equal(theme.styles.size, 0);
  assert.equal(theme.currentTokens(), undefined);
});
