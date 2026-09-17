import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';

function loadTheme(wide = true) {
  let plugin, tokens;
  const mediaListeners = new Set();
  const media = { matches: wide, addEventListener: (_, fn) => mediaListeners.add(fn), removeEventListener: (_, fn) => mediaListeners.delete(fn) };
  const disposers = [];
  const styles = new Set();
  const registrations = [];
  const slots = { inject: (_, fn) => fn(), register: (spec, component) => registrations.push({ spec, component }) };
  vm.runInNewContext(readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8'), {
    window: { matchMedia: () => media, __ModuleLoader__: { load: entry => { plugin = entry.factory(() => ({ createElement: (type, props, ...children) => ({ type, props, children }), Fragment: "fragment" })); } } },
    document: {
      createElement: () => { const tag = { dataset: {}, remove: () => styles.delete(tag) }; return tag; },
      head: { appendChild: tag => styles.add(tag) },
    },
  });
  plugin.apply({
    get: key => key === 'theme' ? { overrideTokens: (_, value) => { tokens = value; return () => { tokens = undefined; }; } } : slots,
    effect: fn => disposers.push(fn()),
  });
  return { tokens, styles, registrations, mediaListeners, resize: wide => { media.matches = wide; mediaListeners.forEach(fn => fn()); }, dispose: () => disposers.reverse().forEach(fn => fn()), currentTokens: () => tokens };
}

const rgb = hex => hex.slice(1).match(/../g).map(v => parseInt(v, 16));
const luminance = c => c.map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((s,v,i) => s + v * [.2126,.7152,.0722][i], 0);
const contrast = (a,b) => (Math.max(luminance(a),luminance(b)) + .05) / (Math.min(luminance(a),luminance(b)) + .05);

test('reading surfaces keep primary and secondary text above 4.5:1 over any background image', () => {
  const { tokens } = loadTheme();
  for (const mode of ['light', 'dark']) {
    for (const token of ['--yukimi-reading-surface', '--dsw-specific-sidebar-fill', '--dsw-specific-bubble', '--dsw-alias-markdown-code-block']) {
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

test('page tint leaves the background art visible while content has its own reading surface', () => {
  const { tokens } = loadTheme();
  for (const mode of ['light','dark']) {
    const alpha = Number(tokens['--dsw-alias-bg-base'][mode].match(/[\d.]+/g)[3]);
    assert.ok(alpha <= 0.15);
    assert.ok(tokens['--yukimi-reading-surface'][mode]);
  }
});


test('only card and signature hide on compact screens; the floating pet keeps its identity', () => {
  const theme=loadTheme(true);
  assert.deepEqual(theme.registrations.map(r=>r.spec.name), ['shell.overlay']);
  const {spec,component}=theme.registrations[0];
  const input=spec.inject();
  const render=()=>component({usePreferences: selector=>selector(input.hooks.preferences.getSnapshot()), update:input.update});
  assert.equal(render().children[2].props.show,false);
  input.update({showMobamas:true});
  const wide=render();
  assert.equal(wide.children[0].props.show,true);
  assert.equal(wide.children[2].props.show,true);
  theme.resize(false);
  const compact=render();
  assert.equal(compact.children[0].props.show,false);
  assert.equal(compact.children[2].props.show,false);
  assert.equal(compact.children[1].type,wide.children[1].type);
  assert.equal(compact.children[1].props.hidden,undefined);
  input.update({showSign:false});
  theme.resize(true);
  assert.equal(render().children[0].props.show,false);
  assert.equal(render().children[2].props.show,true);
  theme.dispose();
  assert.equal(theme.mediaListeners.size,0);
});
