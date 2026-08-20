window.__ModuleLoader__.load({
	id: "@local/dsh-yukimi-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		const React = require("react");

		const inject = ["timer"];

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
			".hHd-Xa_root {",
			"  background: transparent;",
			"}",
			".wSkVaW_root {",
			"  background: transparent;",
			"}",
			".ydkMvW_root {",
			"  background: transparent;",
			"}",
			"body {",
			"  --dsw-specific-bubble: rgba(255,255,255,0.62);",
			"}",
			"body[data-ds-dark-theme] {",
			"  --dsw-specific-bubble: rgba(20,24,51,0.55);",
			"}",
			".Sxvs8a_root {",
			"  text-shadow: 0 1px 2px rgba(255,255,255,0.6), 0 0 6px rgba(255,255,255,0.35);",
			"}",
			"body[data-ds-dark-theme] .Sxvs8a_root {",
			"  text-shadow: 0 1px 2px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.45);",
			"}",
			"body {",
			"  --dsw-alias-markdown-code-block: rgba(255,255,255,0.52);",
			"  --dsw-alias-markdown-code-block-banner: rgba(255,255,255,0.4);",
			"  --dsw-alias-markdown-inline-code: rgba(255,255,255,0.45);",
			"}",
			"body[data-ds-dark-theme] {",
			"  --dsw-alias-markdown-code-block: rgba(20,24,51,0.52);",
			"  --dsw-alias-markdown-code-block-banner: rgba(20,24,51,0.4);",
			"  --dsw-alias-markdown-inline-code: rgba(20,24,51,0.45);",
			"}",
			".md-code-block {",
			"  backdrop-filter: blur(10px) saturate(150%);",
			"  -webkit-backdrop-filter: blur(10px) saturate(150%);",
			"}",
			".md-code-block pre, .md-code-block .shiki {",
			"  background: transparent !important;",
			"}",
			"code:not(pre code) {",
			"  backdrop-filter: blur(5px) saturate(140%);",
			"  -webkit-backdrop-filter: blur(5px) saturate(140%);",
			"}",
			"@keyframes yukimi-flip {",
			"  0% { transform: rotateY(0deg); }",
			"  100% { transform: rotateY(360deg); }",
			"}",
			"@keyframes yukimi-idle {",
			"  0%, 100% { transform: translateY(0); }",
			"  50% { transform: translateY(-6px); }",
			"}",
			"@media (max-width: 720px) {",
			"  .VOzbGW_nav { display: none; }",
			"  .VOzbGW_options { padding: 0 16px 20px; }",
			"}",
		].join("\n");

		function apply(ctx) {
			const theme = ctx.get("theme");
			if (theme !== undefined) {
				const tokens = {
					"--dsw-alias-bg-base": { light: "rgba(240,244,252,0.30)", dark: "rgba(13,16,38,0.28)" },
					"--dsw-alias-bg-layer-1": { light: "#ffffff", dark: "#161a3a" },
					"--dsw-alias-bg-layer-2": { light: "#eef1f8", dark: "#1e2348" },
					"--dsw-alias-bg-overlay": { light: "#ffffff", dark: "#1b1f42" },
					"--dsw-alias-border-l1": { light: "#dbe2f0", dark: "rgba(120,140,200,0.18)" },
					"--dsw-alias-border-l2": { light: "#2582C8", dark: "#4fe3e1" },
					"--dsw-alias-brand-primary": { light: "#171C8F", dark: "#4d6bfe" },
					"--dsw-alias-label-primary": { light: "#1b2440", dark: "#f2f5ff" },
					"--dsw-alias-label-secondary": { light: "#5c6b8e", dark: "#aab4d4" },
					"--dsw-alias-state-error-primary": { light: "#d64545", dark: "#ff6b6b" },
					"--dsw-alias-state-success-primary": { light: "#31b56a", dark: "#3dd68c" },
					"--dsw-alias-state-warn-primary": { light: "#e6a23c", dark: "#f0b429" },
					"--dsw-specific-sidebar-fill": { light: "rgba(214,226,248,0.50)", dark: "rgba(20,24,51,0.50)" },
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

			function MobamasRail() {
				const [index, setIndex] = React.useState(0);
				const [pos, setPos] = React.useState({ right: 20, top: 120 });
				const dragRef = React.useRef(null);

				React.useEffect(() => {
					return ctx.interval(() => setIndex(i => (i + 1) % MOBAMAS.length), 3200);
				}, [index]);

				const onDown = (e) => {
					dragRef.current = { sx: e.clientX, sy: e.clientY, rr: pos.right, tt: pos.top };
					if (e.currentTarget && e.currentTarget.setPointerCapture) {
						e.currentTarget.setPointerCapture(e.pointerId);
					}
				};
				const onMove = (e) => {
					const d = dragRef.current;
					if (!d) return;
					setPos({ right: d.rr - (e.clientX - d.sx), top: d.tt + (e.clientY - d.sy) });
				};
				const onUp = () => { dragRef.current = null; };

				const card = MOBAMAS[index];
				const rootStyle = { position: "fixed", right: pos.right, top: pos.top, width: 196, pointerEvents: "auto", zIndex: 9999, fontFamily: "inherit" };

				return React.createElement("div", { style: rootStyle },
					React.createElement("div", {
						onPointerDown: onDown, onPointerMove: onMove, onPointerUp: onUp, onPointerCancel: onUp,
						style: { cursor: "move", userSelect: "none", background: "#171C8F", color: "#fff", padding: "6px 10px", borderRadius: "12px 12px 0 0", fontSize: 12, fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center" },
					},
						React.createElement("span", null, "Mobamas 卡片"),
						React.createElement("span", { style: { opacity: 0.75, fontSize: 11, fontWeight: 400 } }, (index + 1) + "/" + MOBAMAS.length),
					),
					React.createElement("button", {
						onClick: () => setIndex((index + 1) % MOBAMAS.length),
						title: "点击跳到下一个",
						style: { cursor: "pointer", padding: 0, border: "none", background: "#eef1f8", display: "block", lineHeight: 0, width: "100%" },
					},
						React.createElement("img", { src: card.url, alt: card.label, style: { width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block" } }),
					),
					React.createElement("div", { style: { textAlign: "center", padding: "5px 8px", background: "rgba(255,255,255,0.92)", borderRadius: "0 0 12px 12px", fontSize: 11, color: "#5c6b8e" } }, card.label),
				);
			}

			const uiPrefs = {
				showSign: true,
				showMobamas: true,
				listeners: new Set(),
				toggle(key) {
					this[key] = !this[key];
					this.listeners.forEach((fn) => fn());
				},
				subscribe(fn) {
					this.listeners.add(fn);
					return () => { this.listeners.delete(fn); };
				},
				get(key) { return this[key]; },
			};

			function useUiPref(key) {
				return React.useSyncExternalStore(
					(cb) => uiPrefs.subscribe(cb),
					() => uiPrefs.get(key),
				);
			}

			function SignOverlay() {
				const show = useUiPref("showSign");
				if (!show) return null;
				return React.createElement("img", {
					src: SIGN_URL, alt: "佐城雪美 签名",
					style: { position: "fixed", right: 18, bottom: 14, width: 160, pointerEvents: "none", userSelect: "none", opacity: 0.9, zIndex: 9999, filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" },
				});
			}

			function MobamasOverlay() {
				const show = useUiPref("showMobamas");
				if (!show) return null;
				return React.createElement(MobamasRail);
			}

			function YukimiPet() {
				const [cardIndex, setCardIndex] = React.useState(7);
				const [petitIndex, setPetitIndex] = React.useState(0);
				const [flipping, setFlipping] = React.useState(false);
				const [bubble, setBubble] = React.useState("");
				const [bg, setBg] = React.useState(CARDS[23].url);
				const [panelOpen, setPanelOpen] = React.useState(false);
				const [pos, setPos] = React.useState({ right: 40, bottom: 140 });
				const showSign = useUiPref("showSign");
				const showMobamas = useUiPref("showMobamas");
				const bubbleTimer = React.useRef(null);
				const pressTimer = React.useRef(null);
				const clickTimer = React.useRef(null);
				const panelTimer = React.useRef(null);
				const longPressTriggered = React.useRef(false);
				const dragging = React.useRef(false);
				const dragStart = React.useRef(null);
				const flippingRef = React.useRef(false);
				const lastActiveRef = React.useRef(Date.now());
				const nextAutoRef = React.useRef(Date.now() + (60 + Math.random() * 540) * 1000);

				const doFlip = () => {
					if (flippingRef.current) return;
					flippingRef.current = true;
					setFlipping(true);
					ctx.timeout(() => setPetitIndex(i => (i + 1) % 4), 250);
					ctx.timeout(() => { flippingRef.current = false; setFlipping(false); }, 540);
					if (bubbleTimer.current) bubbleTimer.current();
					setBubble(LINES[Math.floor(Math.random() * LINES.length)]);
					bubbleTimer.current = ctx.timeout(() => { setBubble(""); bubbleTimer.current = null; }, 3200);
				};

				const doChangeOutfit = () => {
					if (flippingRef.current) return;
					flippingRef.current = true;
					setFlipping(true);
					ctx.timeout(() => {
						setCardIndex(i => (i + 1) % ICONS.length);
						setPetitIndex(0);
					}, 250);
					ctx.timeout(() => { flippingRef.current = false; setFlipping(false); }, 540);
				};

				const doFlipRef = React.useRef(doFlip);
				doFlipRef.current = doFlip;

				const resetPanelTimer = () => {
					if (panelTimer.current) panelTimer.current();
					panelTimer.current = ctx.timeout(() => { setPanelOpen(false); panelTimer.current = null; }, 6000);
				};

				const togglePanel = () => {
					setPanelOpen(o => {
						const next = !o;
						if (panelTimer.current) { panelTimer.current(); panelTimer.current = null; }
						if (next) {
							panelTimer.current = ctx.timeout(() => { setPanelOpen(false); panelTimer.current = null; }, 6000);
						}
						return next;
					});
				};

				React.useEffect(() => {
					const mark = () => { lastActiveRef.current = Date.now(); };
					window.addEventListener("pointerdown", mark);
					window.addEventListener("keydown", mark);
					window.addEventListener("mousemove", mark);
					return () => {
						window.removeEventListener("pointerdown", mark);
						window.removeEventListener("keydown", mark);
						window.removeEventListener("mousemove", mark);
					};
				}, []);

				React.useEffect(() => {
					return ctx.interval(() => {
						const now = Date.now();
						if ((now - lastActiveRef.current) < 30000 && now >= nextAutoRef.current) {
							doFlipRef.current();
							nextAutoRef.current = now + (60 + Math.random() * 540) * 1000;
						}
					}, 5000);
				}, []);

				const onPetitPointerDown = (e) => {
					if (e.currentTarget && e.currentTarget.setPointerCapture) {
						e.currentTarget.setPointerCapture(e.pointerId);
					}
					dragStart.current = { sx: e.clientX, sy: e.clientY, br: pos.right, bb: pos.bottom };
					dragging.current = false;
					longPressTriggered.current = false;
					if (pressTimer.current) pressTimer.current();
					pressTimer.current = ctx.timeout(() => {
						longPressTriggered.current = true;
						togglePanel();
					}, 500);
				};

				const onPetitPointerMove = (e) => {
					const d = dragStart.current;
					if (!d) return;
					const dx = e.clientX - d.sx;
					const dy = e.clientY - d.sy;
					if (!dragging.current && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
						dragging.current = true;
						if (pressTimer.current) { pressTimer.current(); pressTimer.current = null; }
						longPressTriggered.current = false;
					}
					if (dragging.current) {
						setPos({ right: d.br - dx, bottom: d.bb - dy });
					}
				};

				const onPetitPointerUp = (e) => {
					if (pressTimer.current) { pressTimer.current(); pressTimer.current = null; }
					const wasDragging = dragging.current;
					dragging.current = false;
					const d = dragStart.current;
					dragStart.current = null;
					if (wasDragging && d) {
						const dist = Math.sqrt(Math.pow(e.clientX - d.sx, 2) + Math.pow(e.clientY - d.sy, 2));
						if (dist >= 20) return;
						setPos({ right: d.br, bottom: d.bb });
					}
					if (longPressTriggered.current) return;
					if (clickTimer.current) {
						clickTimer.current();
						clickTimer.current = null;
						doChangeOutfit();
					} else {
						clickTimer.current = ctx.timeout(() => {
							clickTimer.current = null;
							doFlip();
						}, 280);
					}
				};

				const onPetitPointerCancel = () => {
					if (pressTimer.current) { pressTimer.current(); pressTimer.current = null; }
					if (clickTimer.current) { clickTimer.current(); clickTimer.current = null; }
					dragging.current = false;
					dragStart.current = null;
				};

				const rootStyle = { position: "fixed", right: pos.right, bottom: pos.bottom, zIndex: 9999, pointerEvents: "auto", fontFamily: "inherit" };

				return React.createElement("div", { style: rootStyle },
					React.createElement("style", null, ":root{--yukimi-bg:url(\"" + bg + "\");}"),
					React.createElement("div", { style: { position: "relative", width: 240 } },
						React.createElement("img", {
							src: IMG + PETITS[cardIndex][petitIndex], alt: "佐城雪美 纸片小人",
							draggable: false,
							onDragStart: (e) => e.preventDefault(),
							onPointerDown: onPetitPointerDown, onPointerMove: onPetitPointerMove, onPointerUp: onPetitPointerUp, onPointerCancel: onPetitPointerCancel,
							style: { width: 240, aspectRatio: "1 / 1", objectFit: "contain", cursor: "pointer", userSelect: "none", touchAction: "none", WebkitUserDrag: "none", animation: flipping ? "yukimi-flip 0.5s ease" : "yukimi-idle 2.4s ease-in-out infinite", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))" },
						}),
						bubble ? React.createElement("div", { style: { position: "absolute", right: -6, top: -8, maxWidth: 200, background: "rgba(23,28,63,0.85)", color: "#fff", padding: "8px 10px", borderRadius: 12, fontSize: 13, lineHeight: 1.5, pointerEvents: "none" } }, bubble) : null,
						panelOpen ? React.createElement("div", {
							onPointerDown: resetPanelTimer,
							style: { position: "absolute", left: 252, top: 0, width: 300, maxHeight: 460, overflowY: "auto", background: "rgba(255,255,255,0.95)", borderRadius: 12, boxShadow: "0 8px 30px rgba(20,24,60,0.35)", padding: 10 },
						},
							React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#5c6b8e", marginBottom: 6 } }, "显示"),
							React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 10 } },
								React.createElement("button", {
									onClick: () => uiPrefs.toggle("showSign"),
									style: { cursor: "pointer", border: "1px solid #2582C8", background: showSign ? "#171C8F" : "transparent", color: showSign ? "#fff" : "#171C8F", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600 },
								}, "签名 " + (showSign ? "开" : "关")),
								React.createElement("button", {
									onClick: () => uiPrefs.toggle("showMobamas"),
									style: { cursor: "pointer", border: "1px solid #2582C8", background: showMobamas ? "#171C8F" : "transparent", color: showMobamas ? "#fff" : "#171C8F", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600 },
								}, "Mobamas " + (showMobamas ? "开" : "关")),
							),
							React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#5c6b8e", marginBottom: 6 } }, "小人"),
							React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 5, marginBottom: 10 } },
								ICONS.map((ic, i) => React.createElement("button", {
									key: ic, onClick: () => { setCardIndex(i); setPetitIndex(0); }, title: "小人 " + (i + 1),
									style: { cursor: "pointer", padding: 0, border: cardIndex === i ? "2px solid #171C8F" : "2px solid transparent", borderRadius: 6, overflow: "hidden", background: "#eef1f8", display: "block", lineHeight: 0 },
								},
									React.createElement("img", { src: IMG + ic, alt: "小人 " + (i + 1), loading: "lazy", style: { width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" } }),
								)),
							),
							React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#5c6b8e", marginBottom: 6 } }, "背景"),
							React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 } },
								CARDS.map((c) => React.createElement("button", {
									key: c.url, onClick: () => setBg(c.url), title: c.label,
									style: { cursor: "pointer", padding: 0, border: bg === c.url ? "2px solid #171C8F" : "2px solid transparent", borderRadius: 6, overflow: "hidden", background: "#eef1f8", display: "block", lineHeight: 0 },
								},
									React.createElement("img", { src: c.url, alt: c.label, loading: "lazy", style: { width: "100%", aspectRatio: "1280 / 824", objectFit: "cover", display: "block" } }),
								)),
							),
						) : null,
					),
				);
			}

			const slots = ctx.get("slots");
			if (slots !== undefined) {
				slots.inject("shell.overlay", () => {
					slots.register(
						{ name: "shell.overlay", id: "yukimi-sign", order: 90 },
						() => React.createElement(SignOverlay),
					);
					slots.register(
						{ name: "shell.overlay", id: "yukimi-pet", order: 100 },
						() => React.createElement(YukimiPet),
					);
					slots.register(
						{ name: "shell.overlay", id: "yukimi-mobamas", order: 110 },
						() => React.createElement(MobamasOverlay),
					);
				});
			}
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
