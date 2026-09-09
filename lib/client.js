window.__ModuleLoader__.load({
	id: "@local/dsh-yukimi-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		const React = require("react");

		const inject = ["timer", "theme", "slots"];

		const css = [
			"body {",
			"  background-color: #eef2fa;",
			"  background-image: var(--yukimi-bg, url('https://patchwiki.biligame.com/images/imascg/4/40/9qylnl62pskrgo7hqfrrqi1pidi5qan.png'));",
			"  background-repeat: no-repeat;",
			"  background-attachment: fixed;",
			"  background-position: center center;",
			"  background-size: cover;",
			"}",
			"body[data-ds-dark-theme] {",
			"  background-color: #0d1026;",
			"}",
			"@keyframes yukimi-flip {",
			"  0% { transform: rotateY(0deg); }",
			"  100% { transform: rotateY(360deg); }",
			"}",
			"@keyframes yukimi-idle {",
			"  0%, 100% { transform: translateY(0); }",
			"  50% { transform: translateY(-6px); }",
			"}",
			"/* Only the stable web mount is sized; never target compiled host classes. */",
			"body:has(.yukimi-dock[data-mode=wide]:not([hidden])) #root { max-width: calc(100% - 248px); }",
			".yukimi-dock { position: fixed; inset: 0 0 0 auto; width: 248px; height: 100dvh; box-sizing: border-box; overflow: auto; overscroll-behavior: contain; pointer-events: auto; padding: 16px; background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary); border-left: 1px solid var(--dsw-alias-border-l1); font-family: inherit; font-size: 14px; line-height: 1.5; }",
			".yukimi-dock[hidden] { display: none; }",
			".yukimi-dock header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 12px; }",
			".yukimi-dock h2 { font-size: 14px; margin: 0; }",
			".yukimi-dock button, .yukimi-toggle { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; padding: 6px 10px; cursor: pointer; font: inherit; }",
			".yukimi-dock button:focus-visible, .yukimi-dock summary:focus-visible, .yukimi-toggle:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }",
			".yukimi-toggle { min-width: 32px; min-height: 32px; }",
			".yukimi-card { margin: 0; }",
			".yukimi-card button { display: block; padding: 0; overflow: hidden; width: 100%; }",
			".yukimi-card img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }",
			".yukimi-card figcaption { color: var(--dsw-alias-label-secondary); text-align: center; font-size: 12px; margin: 6px 0; }",
			".yukimi-pet { display: grid; justify-items: center; margin: 12px 0; }",
			".yukimi-dock .yukimi-pet-button { padding: 0; background: transparent; border: 0; width: 100%; }",
			".yukimi-pet img { display: block; width: 100%; max-width: 200px; margin: auto; aspect-ratio: 1; object-fit: contain; }",
			".yukimi-bubble { margin: 4px 0; padding: 8px; border-radius: 8px; background: var(--dsw-alias-bg-layer-2); }",
			".yukimi-sign { display: block; width: 160px; max-width: 100%; margin: 16px auto; pointer-events: none; }",
			".yukimi-options { margin-top: 12px; }",
			".yukimi-options summary { cursor: pointer; padding: 8px 0; }",
			".yukimi-options label { display: flex; align-items: center; gap: 8px; margin: 8px 0; }",
			".yukimi-options h3 { font-size: 13px; margin: 12px 0 6px; }",
			".yukimi-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 6px; }",
			".yukimi-grid button { padding: 0; overflow: hidden; }",
			".yukimi-grid button[aria-pressed=true] { outline: 2px solid var(--dsw-alias-brand-primary); }",
			".yukimi-grid img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; }",
			"dialog.yukimi-dock { inset: 0; margin: auto; width: min(380px, calc(100% - 24px)); height: auto; max-height: calc(100dvh - 24px); border: 0; border-radius: 16px; box-shadow: var(--dsw-elevation-prominent); }",
			"dialog.yukimi-dock::backdrop { background: rgba(13,16,38,0.5); }",
			"dialog.yukimi-dock .yukimi-card { max-width: 216px; margin-inline: auto; }",
			"@media (max-width: 1279px), (max-height: 719px) {",
			"  body:has(.yukimi-dock[data-mode=wide]:not([hidden])) #root { max-width: 100%; }",
			"  .yukimi-dock[data-mode=wide] { display: none; }",
			"}",
			"@media (prefers-reduced-motion: reduce) { .yukimi-pet img { animation: none !important; } }",
			"/* Readability is local to content, leaving the card illustration visible between messages. */",
			"[data-chat-flow-kind]:not([data-chat-flow-kind=user]):not([data-chat-flow-kind=turn-tail]):not([hidden]):not([data-turn-process-hidden]) { background: var(--yukimi-reading-surface); border-radius: 12px; padding: 8px 12px; box-sizing: border-box; }",
			"[data-slot=\"conversation.session.header\"] > * { background: var(--yukimi-reading-surface); }",
		].join("\n");

		function apply(ctx) {
			const theme = ctx.get("theme");
			if (theme !== undefined) {
				const tokens = {
					"--dsw-alias-bg-base": { light: "rgba(240,244,252,0.08)", dark: "rgba(13,16,38,0.08)" },
					"--yukimi-reading-surface": { light: "rgba(240,244,252,0.90)", dark: "rgba(13,16,38,0.90)" },
					"--dsw-specific-bubble": { light: "#e3eafa", dark: "#252d50" },
					"--dsw-alias-markdown-code-block": { light: "#ffffff", dark: "#161a3a" },
					"--dsw-alias-markdown-code-block-banner": { light: "#e3eafa", dark: "#252d50" },
					"--dsw-alias-markdown-inline-code": { light: "#e3eafa", dark: "#252d50" },
					"--dsw-alias-bg-layer-1": { light: "#ffffff", dark: "#161a3a" },
					"--dsw-alias-bg-layer-2": { light: "#eef1f8", dark: "#1e2348" },
					"--dsw-alias-bg-overlay": { light: "#ffffff", dark: "#1b1f42" },
					"--dsw-alias-border-l1": { light: "#dbe2f0", dark: "rgba(120,140,200,0.18)" },
					"--dsw-alias-border-l2": { light: "#2582C8", dark: "#4fe3e1" },
					"--dsw-alias-brand-primary": { light: "#171C8F", dark: "#4d6bfe" },
					"--dsw-alias-label-primary": { light: "#1b2440", dark: "#f2f5ff" },
					"--dsw-alias-label-secondary": { light: "#495777", dark: "#aab4d4" },
					"--dsw-alias-state-error-primary": { light: "#d64545", dark: "#ff6b6b" },
					"--dsw-alias-state-success-primary": { light: "#31b56a", dark: "#3dd68c" },
					"--dsw-alias-state-warn-primary": { light: "#e6a23c", dark: "#f0b429" },
					"--dsw-specific-sidebar-fill": { light: "rgba(214,226,248,0.97)", dark: "rgba(20,24,51,0.97)" },
				};
				ctx.effect(() => theme.overrideTokens("yukimi-sajo", tokens));
			}

			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "@local/dsh-yukimi-theme";
				tag.textContent = css;
				document.head.appendChild(tag);
				return () => tag.remove();
			});

			const SIGN_URL = "https://patchwiki.biligame.com/images/imascg/6/62/1w7uaneo9yw5ps9s8ts843pvc99x3zk.png";
			const IMG = "https://patchwiki.biligame.com/images/imascg/";

			const ICONS = [
				"8/8b/ing01go9a5qd2kucddkckwbifsjo4d3.png",
				"8/8e/7w9z8hwrpnboketav10skclfa1cn50f.png",
				"1/18/66l9m5mrlf7nf75lwshn0tunntp2c2i.png",
				"f/f3/kwccpkj39yt5gp9h0vwn32tjkovli12.png",
				"a/a1/s8gpxcuy41p9z7oanrnxjda1axrqmvv.png",
				"1/17/tgvn9p30l9zr2ckx1wzkdokc71fjjnd.png",
				"b/b7/n84ir0nr97kg5wh38bt15hoyqd1psr0.png",
				"b/ba/opx7sej6fnfbmaesdycx7eettxzybqe.png",
				"d/d9/au4ncgsa9qkz9zc7eyzpjl3h3gsvq5h.png",
				"0/00/mkrma80t5z4armnuivcfa2pjso2skv7.png",
				"9/97/nc0r5y72k1olq3182h70yhidvba1ror.png",
				"5/5a/nwe33wnxg41b1whba9speyeide4ueyh.png",
				"6/66/a5ydvlwluiuy7azoneiyai7rjeo8b78.png",
			];

			const PETITS = [
				["7/7f/6currqdaigi46vyxec0tmzkyybgnas8.png", "d/d5/6hitk3tgbmwln3o6p3zvk4vl77yczv9.png", "d/d4/snlj1f98vxoxyaz19ci3eyv1zj33nx5.png", "3/31/kd1lus7rthpitvlsh3efgltjck7pn9g.png"],
				["3/37/p93o5mirwf40u38kybyyn1x6tmf7kta.png", "1/13/c2taxfxixkgqdnzikflg1jm0l47j15r.png", "2/2f/nxbtpk06h71plh0it00dcw9gljr0kru.png", "e/e7/qrh1epfq4aricofastvazf2nhxgi591.png"],
				["f/f3/awe2krnvkyki6gdepmqs0eie3kdby1x.png", "5/5b/0gfvhet9j89b766xv7mr3kypzvqiph1.png", "6/64/ofbt13fraa5fgwpt59ww9n23u4q8cl6.png", "6/60/g9xa7ymt7t6d46q2otd4ei04o7xez5n.png"],
				["7/71/3u1x11tfwgiu4zwj8rk2ggdgr7n7ve5.png", "8/84/b11dcdaams7kcara8r53dvnxz42cime.png", "b/bb/tnzm5hn4tqmzhiml4386yrl2yn104kr.png", "4/48/5zynswr8uyuxlgc5mdrzorbmjj9coju.png"],
				["c/cd/8495ui0wviex7f9euh9vhmb65f9exey.png", "3/30/rdipmqp6a85girfrnlx1bfumeqfj5ev.png", "6/6d/aiqzghjs2fwx3i71o8nrmu3su844nys.png", "5/57/mqoyuq7f3d2t8baq117gakz8ek7axxx.png"],
				["3/3e/m48ujwrazrd7zgokhkgvbmewjaccrpw.png", "6/6b/rv99bh5xrc77yg32ejlztn6xobzn2md.png", "0/06/tnk758yuo88400nttwczwb1j7lrg0h6.png", "5/5d/kwt1pmyddib56sugzyart6vbg7lhfow.png"],
				["6/66/a0hh16zou02b9nswx9ysadya9fxe4l5.png", "3/39/gdcz80tg6yk93og2mmdgd479qioaxsj.png", "5/5e/mhx1onozcb0xki5g444j3h0v1sbnf1p.png", "a/a8/074pmx9z7x7unb7k1ywz1dhka1em6mi.png"],
				["1/15/5z85ueg7jpc01o09nmv4svqwtklgr12.png", "1/12/mcnppr62mp9mg1pcbnpku2nt1v3ivf0.png", "3/36/p7gw8g13162ipbvd5p9sn6vmsxr2cyr.png", "a/af/i99ouf8oemw2ohenniv391ptclb38yg.png"],
				["a/a2/ibhnwict33qecuuk81nx8vyln9th7to.png", "a/a3/qsmxat8m1q7jhidyo2yvlsu9vgmgqd4.png", "8/8a/enorxt2qehfxoi06pupwn41gjxs7qet.png", "6/60/qda7cw5dm21qgq7oibtu2zz4prodhiu.png"],
				["4/47/pgc7yl7cwztetdpznu04z5n2p7t3izz.png", "f/fb/m4ioswd3z5naq0ih26ese8aq128z5b5.png", "2/23/7giwd610wqb38svsjxkzek7hu3ytf9p.png", "8/82/56sbmchyhp3maqljimfa3nudhyde7cb.png"],
				["0/0b/ceylopyy5smktvl3sbzxpuuh1z30fg3.png", "f/f2/hx2crv3nuwhjpnsyc1uh5ikzeu5l2kc.png", "b/b0/cnsfcehw76wnz51r36q49jp8hinuc8n.png", "e/ee/r9bvb6e3t2k7llk7h44ipibc0ln0140.png"],
				["2/2b/pmecf6g1jeq3dx7xrxdd6tp6sf9rm7l.png", "5/50/1p50la2vv9lrwtvofrq7mwm5hzs448v.png", "7/76/oan5ddell5tot762juw7ucda4fcl7yz.png", "a/a9/skdi6dh1cvn6d8bd9e4yo8r6af1tynq.png"],
				["1/12/gtt7gn0djn9tzrj2ka24cjjxzlzqfbw.png", "6/66/t4xs3hfk68tdx3ba7mpih4g0anon9fb.png", "a/a5/lzll07ijfzhoqipre9byrdaisldut4e.png", "e/e7/cuu700a8n0yu03nrc2479sczyclbf1a.png"],
			];

			const CARDS = [
				{ label: "SR-1", url: IMG + "c/c5/7072a9ghtfsg26d6wgg8jgjac4mz49r.png" },
				{ label: "SR-1+", url: IMG + "b/b5/8r1baeobac5tr87gybfl6zt1dtwvswb.png" },
				{ label: "SSR-1", url: IMG + "a/a5/nr5fryuedu3w49btxqttb3z8kgavi42.png" },
				{ label: "SSR-1+", url: IMG + "a/ae/lp2u2bb1iljjh32qtic2npkk5brlqu7.png" },
				{ label: "SR-2", url: IMG + "4/4e/q82bvl4fury5fim6yya43ke63nvsmnq.png" },
				{ label: "SR-2+", url: IMG + "5/50/tedj5q9xy4a64ftobrann36bojus3w5.png" },
				{ label: "SR-3", url: IMG + "8/8e/gtxk5xydrcme1e2ug7qestym18n5ey3.png" },
				{ label: "SR-3+", url: IMG + "7/75/f64m4thcc3hfdxuypgl8txe9gcj8m62.png" },
				{ label: "SSR-2", url: IMG + "c/c6/ktwwmvw60sw180idvl4l8qhxsbgdgk2.png" },
				{ label: "SSR-2+", url: IMG + "6/6d/2ehigxz87rmc8gmtxljn6hhpuaomest.png" },
				{ label: "SR-4", url: IMG + "e/ef/gxloy99frxca5hkfsfvf6jjqw7e32xo.png" },
				{ label: "SR-4+", url: IMG + "c/c9/f4d3qlwr1kd194854lvcqmagv70u4g6.png" },
				{ label: "SR-5", url: IMG + "d/da/ql99mtxys1osegpve1c1zgjnqty6efb.png" },
				{ label: "SR-5+", url: IMG + "f/f3/hlam5dw18vbmzc5qxfv7gghkd1sibog.png" },
				{ label: "SSR-3", url: IMG + "a/af/gk3iialzydgjjwpapuwdqoq9vgt1r5c.png" },
				{ label: "SSR-3+", url: IMG + "0/04/qe8d4t3df0jfzkp5ww3t6dum0uajgws.png" },
				{ label: "SSR-4", url: IMG + "d/d1/q2orsb6ygokz4hbfguwry3jmcskzsb2.png" },
				{ label: "SSR-4+", url: IMG + "6/68/md8xgmergzrtwy2ktq8ilkxpv0cv8zo.png" },
				{ label: "SR-6", url: IMG + "2/2a/f841ll2n4v3j4xgedp0m2z2pjsuv87w.png" },
				{ label: "SR-6+", url: IMG + "3/34/el5mgvr7bsxol4ke9257k2wpzsyej30.png" },
				{ label: "SR-7", url: IMG + "1/13/qusvh4juet41d8dsoiifeh5vyv1pqtq.png" },
				{ label: "SR-7+", url: IMG + "e/e7/hv19pr2cvglfywtza4xgqxqu6kygudx.png" },
				{ label: "SSR-5", url: IMG + "f/f6/3whyomkrysdjw7ajcglkui65ncllo94.png" },
				{ label: "SSR-5+", url: IMG + "4/40/9qylnl62pskrgo7hqfrrqi1pidi5qan.png" },
				{ label: "SR-8", url: IMG + "d/dc/sxv035hpv4egj4oh7dn3z8w309zwbra.png" },
				{ label: "SR-8+", url: IMG + "f/f5/dr6aew74alr71fhdpp4np809a2epujg.png" },
			];

			const MOBAMAS = [
				{ label: "R1 特训后", url: IMG + "2/2b/mcqzb1iou761wk7qbk8qq0nfulvtl4o.jpg" },
				{ label: "R2 特训后", url: IMG + "b/b1/nd50guac4fiqd9mm69tlqw5oa5e3jfs.jpg" },
				{ label: "R3 特训后", url: IMG + "f/fb/9bb0dvjfit32lcdj4c5upe62nslctkq.jpg" },
				{ label: "R4 特训后", url: IMG + "3/32/rsq9x4788bc5x25mxsatk371qjivdxa.jpg" },
				{ label: "R5 特训后", url: IMG + "a/a9/nxsit880o7ag7jg815famz9dtofo3pc.jpg" },
				{ label: "R6 特训后", url: IMG + "7/7e/ri3hrmpzhcw33sdborez1p99z3czu5d.jpg" },
				{ label: "R7 特训后", url: IMG + "e/ea/qonnfoovogy7lffn04vlukbennfmg8c.jpg" },
				{ label: "SR1 特训后", url: IMG + "4/41/ru4du0df7ko8hdjogiwyp3zofvo6snp.jpg" },
				{ label: "SR2 特训后", url: IMG + "a/a9/6i8sikn64rw9fwivd6m2sli9l9dyzf7.jpg" },
				{ label: "SR3 特训后", url: IMG + "8/88/pf2ul9wxfgjcgghl7ugknd9a7zzey7y.jpg" },
				{ label: "SR4 特训后", url: IMG + "7/71/4vug8mtsj85kjy88qfc2oltku9labpn.jpg" },
				{ label: "SR5 特训后", url: IMG + "4/4f/k3rs9eerv0fuvnhsamjal35h8spw3en.jpg" },
				{ label: "SR6 特训后", url: IMG + "0/09/a8qf15zz1zfhtpegi3cnu3w4uz71670.jpg" },
				{ label: "SR7 特训后", url: IMG + "6/62/bhjylqpma6rcbs0yunhehlpkim0sie2.jpg" },
				{ label: "SR9 特训后", url: IMG + "e/e9/4r01cq7hkcatq9zkvoncxyfuwwkd0hv.jpg" },
			];

			const LINES = [
				"紧紧……握住……所以就不怕了……。再……飞得更高一点……!",
				"我的头发……不是那种光滑的……而是轻盈蓬松的……好神奇……！",
				"美由纪的眼眸……闪闪发亮……好像……满载着阳光……真漂亮",
				"啊……花瓣……正飘舞着……。与你一同，在天空中……旅行的……伙伴……",
				"手……牵在一起……连那份心动……也会联系……",
			];

			// Stable source projected into slot hooks, following the DSH slots contract.
			const wideScreen = window.matchMedia("(min-width: 1280px) and (min-height: 720px)");
			let desktopVisible = true;
			let preferences = { visible: wideScreen.matches, compact: !wideScreen.matches, showSign: true, showMobamas: true, showPet: true, bg: CARDS[23].url };
			const listeners = new Set();
			const source = {
				getSnapshot: () => preferences,
				subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
			};
			const update = (patch) => {
				preferences = { ...preferences, ...patch };
				listeners.forEach(fn => fn());
			};
			const toggleDecorations = () => {
				if (!preferences.compact) desktopVisible = !preferences.visible;
				update({ visible: !preferences.visible });
			};
			ctx.effect(() => {
				const onChange = () => update({ compact: !wideScreen.matches, visible: wideScreen.matches && desktopVisible });
				wideScreen.addEventListener("change", onChange);
				return () => wideScreen.removeEventListener("change", onChange);
			});
			const slotInput = () => ({ hooks: { preferences: source }, update, toggleDecorations });

			function MobamasRail() {
				const [index, setIndex] = React.useState(0);
				React.useEffect(() => ctx.interval(() => setIndex(i => (i + 1) % MOBAMAS.length), 3200), []);
				const card = MOBAMAS[index];
				return React.createElement("figure", { className: "yukimi-card" },
					React.createElement("button", { onClick: () => setIndex(i => (i + 1) % MOBAMAS.length), "aria-label": "下一张 Mobamas 卡片" },
						React.createElement("img", { src: card.url, alt: card.label })),
					React.createElement("figcaption", null, card.label + " · " + (index + 1) + "/" + MOBAMAS.length));
			}

			function YukimiPet() {
				const [outfit, setOutfit] = React.useState(7);
				const [frame, setFrame] = React.useState(0);
				const [bubble, setBubble] = React.useState("");
				const [flipping, setFlipping] = React.useState(false);
				const timers = React.useRef([]);
				const stopTimers = () => { timers.current.forEach(dispose => dispose()); timers.current = []; };
				React.useEffect(() => stopTimers, []);
				const flip = () => {
					stopTimers();
					setFrame(i => (i + 1) % 4);
					setFlipping(true);
					setBubble(LINES[Math.floor(Math.random() * LINES.length)]);
					timers.current = [ctx.timeout(() => setFlipping(false), 540), ctx.timeout(() => setBubble(""), 3200)];
				};
				return React.createElement("section", { className: "yukimi-pet", "aria-label": "雪美小人" },
					React.createElement("button", { className: "yukimi-pet-button", onClick: flip, "aria-label": "与雪美互动" },
						React.createElement("img", { src: IMG + PETITS[outfit][frame], alt: "佐城雪美 纸片小人", draggable: false,
							style: { animation: flipping ? "yukimi-flip 0.5s ease" : "yukimi-idle 2.4s ease-in-out infinite" } })),
					bubble ? React.createElement("p", { className: "yukimi-bubble", role: "status" }, bubble) : null,
					React.createElement("button", { onClick: () => { setOutfit(i => (i + 1) % PETITS.length); setFrame(0); } }, "换一套衣服"));
			}

			function DecorationToggle({ wide, usePreferences, toggleDecorations }) {
				const visible = usePreferences(p => p.visible);
				return React.createElement("button", {
					className: "yukimi-toggle", onClick: toggleDecorations,
					"aria-label": visible ? "隐藏雪美装饰" : "显示雪美装饰", "aria-expanded": visible,
					"aria-controls": "yukimi-dock", title: visible ? "隐藏雪美装饰" : "显示雪美装饰",
				}, wide ? (visible ? "隐藏雪美装饰" : "显示雪美装饰") : "雪");
			}

			function DecorationDock({ usePreferences, update, toggleDecorations }) {
				const prefs = usePreferences(p => p);
				const dockRef = React.useRef(null);
				React.useEffect(() => {
					const dialog = dockRef.current;
					if (!prefs.compact || !dialog) return;
					if (prefs.visible && !dialog.open) dialog.showModal();
					if (!prefs.visible && dialog.open) dialog.close();
					return () => { if (dialog.open) dialog.close(); };
				}, [prefs.visible, prefs.compact]);
				const close = () => {
					toggleDecorations();
					document.querySelector(".yukimi-toggle")?.focus();
				};
				return React.createElement(React.Fragment, null,
					React.createElement("style", null, ':root { --yukimi-bg: url("' + prefs.bg + '"); }'),
					React.createElement(prefs.compact ? "dialog" : "aside", {
						id: "yukimi-dock", ref: dockRef, className: "yukimi-dock", "data-mode": prefs.compact ? "compact" : "wide",
						hidden: !prefs.visible, "aria-label": "雪美装饰", onCancel: e => { e.preventDefault(); close(); },
					},
						React.createElement("header", null, React.createElement("h2", null, "雪美 · Yukimi"),
							React.createElement("button", { onClick: close, "aria-label": "收起雪美装饰" }, "收起")),
						prefs.visible && prefs.showMobamas ? React.createElement(MobamasRail) : null,
						prefs.visible && prefs.showPet ? React.createElement(YukimiPet) : null,
						prefs.showSign ? React.createElement("img", { className: "yukimi-sign", src: SIGN_URL, alt: "佐城雪美 签名" }) : null,
						React.createElement("details", { className: "yukimi-options" },
							React.createElement("summary", null, "外观与装饰"),
							[["showMobamas", "卡片"], ["showPet", "小人"], ["showSign", "签名"]].map(([key, label]) =>
								React.createElement("label", { key }, React.createElement("input", { type: "checkbox", checked: prefs[key], onChange: e => update({ [key]: e.target.checked }) }), label)),
							React.createElement("h3", null, "背景卡面"),
							React.createElement("div", { className: "yukimi-grid" }, CARDS.map(card =>
								React.createElement("button", { key: card.url, title: card.label, "aria-label": "背景 " + card.label, "aria-pressed": prefs.bg === card.url, onClick: () => update({ bg: card.url }) },
									React.createElement("img", { src: card.url, alt: card.label, loading: "lazy" })))))));
			}

			const slots = ctx.get("slots");
			slots.inject("shell.overlay", () => slots.register({ name: "shell.overlay", id: "yukimi-decorations", order: 90, inject: slotInput }, DecorationDock));
			slots.inject("sidebar.footer.action", () => slots.register({ name: "sidebar.footer.action", id: "yukimi-toggle", order: 90, inject: slotInput }, DecorationToggle));

		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
