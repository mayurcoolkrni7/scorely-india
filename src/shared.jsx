// Scorely India — shared building blocks: header, footer, styles, heroes, forms and animations.
// Site-wide settings (links, form email) live in src/config.js.

import * as React from "react"
import { ROUTES, PARTNER_FORM, ASK_FORM, DEFAULT_APP_URL, FORM_EMAIL, DEFAULT_FORM_ENDPOINT } from "./config.js"

export { ROUTES, PARTNER_FORM, ASK_FORM, DEFAULT_APP_URL, FORM_EMAIL, DEFAULT_FORM_ENDPOINT }

// ---------- Images (files in public/images) ----------
export const IMG_LOGO = "/images/logo.webp";
export const IMG_WORKING = "/images/mascot-working.webp";
export const IMG_ACHIEVED = "/images/mascot-celebrating.webp";
export const IMG_THUMBS = "/images/mascot-thumbs-up.webp";
export const IMG_THINK = "/images/mascot-thinking.webp";
// ---------- Page stylesheet (home page styles + shared additions) ----------
const SC_BASE_CSS = '@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700;1,800&family=Inter:wght@400;500;600&display=swap");\nbody{margin:0;background:#FFFFFF}\na{color:#1D5AA6}a:hover{color:#10367D}\n.sc{--grad:linear-gradient(105deg,#10367D 0%,#1D5AA6 38%,#4A90C7 68%,#74B4D9 100%);--grad-soft:linear-gradient(120deg,#EBEBEB 0%,#FFFFFF 50%,#EBEBEB 100%)}\n.sc *{box-sizing:border-box}\n.sc h1,.sc h2,.sc h3,.sc h4{margin:0;font-family:"Plus Jakarta Sans",system-ui,sans-serif;text-wrap:balance}\n.sc p{margin:0}\n.wrap{width:100%;max-width:1240px;margin:0 auto;padding:0 28px}\n.gtext{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}\n.kicker{display:inline-flex;align-items:center;gap:10px;font:600 13px/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#1D5AA6}\n.kicker::before{content:"";width:26px;height:2px;border-radius:2px;background:var(--grad)}\n.h2{font-size:clamp(32px,3.4vw,48px);font-weight:700;line-height:1.1;letter-spacing:-.03em;color:#10367D}\n.lede{font-size:18px;line-height:1.65;color:#667085}\n.shead{display:flex;flex-direction:column;align-items:center;text-align:center;gap:18px;max-width:760px;margin:0 auto}\n.shead .lede{max-width:600px}\n.h2 em{font-style:italic;font-weight:800}\n\n/* glass */\n.glass{background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(18px) saturate(160%);backdrop-filter:blur(18px) saturate(160%);border:1px solid rgba(255,255,255,.7);box-shadow:0 10px 40px rgba(16,54,125,.12),inset 0 1px 0 rgba(255,255,255,.8)}\n.glass-dark{background:rgba(255,255,255,.12);-webkit-backdrop-filter:blur(18px) saturate(160%);backdrop-filter:blur(18px) saturate(160%);border:1px solid rgba(255,255,255,.28);box-shadow:0 14px 40px rgba(5,22,58,.25),inset 0 1px 0 rgba(255,255,255,.35)}\n\n/* buttons */\n.cta{position:relative;display:inline-flex;align-items:center;gap:14px;min-height:54px;padding:6px 6px 6px 26px;border-radius:999px;font:600 15px/1 Inter,system-ui,sans-serif;text-decoration:none;color:#FFFFFF;background:var(--grad);background-size:160% 100%;background-position:0 0;box-shadow:0 12px 30px rgba(29,90,166,.35);transition:background-position .6s ease,box-shadow .3s ease;will-change:transform}\n.cta:hover{color:#FFFFFF;background-position:100% 0;box-shadow:0 16px 40px rgba(29,90,166,.45)}\n.cta .dot{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#FFFFFF;color:#1D5AA6;transition:transform .45s cubic-bezier(.2,.9,.3,1.3)}\n.cta:hover .dot{transform:rotate(-45deg)}\n.cta-white{background:#FFFFFF;color:#10367D;box-shadow:0 12px 30px rgba(5,22,58,.25)}\n.cta-white:hover{color:#10367D;background:#FFFFFF}\n.cta-white .dot{background:#1D5AA6;color:#FFFFFF}\n.ghost{display:inline-flex;align-items:center;min-height:54px;padding:0 24px;border-radius:999px;font:600 15px/1 Inter,sans-serif;text-decoration:none;color:#10367D;border:1.5px solid rgba(16,54,125,.22);transition:border-color .25s ease,background-color .25s ease}\n.ghost:hover{border-color:#10367D;color:#10367D;background:rgba(255,255,255,.6)}\n.ghost-light{color:#FFFFFF;border-color:rgba(255,255,255,.4)}\n.ghost-light:hover{color:#FFFFFF;border-color:#FFFFFF;background:rgba(255,255,255,.1)}\n.cta:focus-visible,.ghost:focus-visible,.navlink:focus-visible,.flink:focus-visible{outline:3px solid #74B4D9;outline-offset:3px}\n\n.navlink{position:relative;color:#10367D;text-decoration:none;font:500 14px/1 Inter,sans-serif;padding:10px 14px;border-radius:999px;transition:background-color .25s ease}\n.navlink:hover{color:#10367D;background:rgba(29,90,166,.08)}\n.flink{color:#C3D3E4;text-decoration:none;transition:color .2s ease}\n.flink:hover{color:#FFFFFF}\n\n/* hero */\n.stage{cursor:none;touch-action:pan-y}\n.cursor-ring{position:absolute;left:0;top:0;width:84px;height:84px;margin:-42px 0 0 -42px;border-radius:50%;border:1.5px solid rgba(255,255,255,.95);pointer-events:none;z-index:9;opacity:0;transition:opacity .3s ease}\n.cursor-ring::after{content:"";position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#FFFFFF}\n@keyframes riseIn{from{opacity:0;transform:translateY(70px)}to{opacity:1;transform:none}}\n@keyframes popIn{from{opacity:0;transform:translateY(110px) scale(.94)}to{opacity:1;transform:none}}\n@keyframes fadeIn{from{opacity:0}to{opacity:1}}\n.svg-rise{transform-box:fill-box;transform-origin:center;animation:riseIn 1.1s cubic-bezier(.16,1,.3,1) both}\n.svg-pop{transform-box:fill-box;transform-origin:50% 100%;animation:popIn 1.3s cubic-bezier(.16,1,.3,1) .35s both}\n.fade-in{animation:fadeIn 1s ease .9s both}\n\n/* mascot motion */\n@keyframes typeBob{0%,100%{transform:translateY(0) rotate(0)}25%{transform:translateY(-3px) rotate(-.4deg)}50%{transform:translateY(0) rotate(0)}75%{transform:translateY(-2px) rotate(.4deg)}}\n@keyframes jumpJoy{0%,100%{transform:translateY(0) scale(1,1)}12%{transform:translateY(4px) scale(1.02,.97)}38%{transform:translateY(-16px) scale(.99,1.02)}60%{transform:translateY(0) scale(1.015,.985)}72%{transform:translateY(-4px)}}\n@keyframes medalPop{0%,100%{transform:scale(1) rotate(0)}20%{transform:scale(1.12) rotate(-8deg)}40%{transform:scale(1) rotate(6deg)}60%{transform:scale(1.04) rotate(-2deg)}}\n@keyframes nod{0%,100%{transform:translateY(0) rotate(0)}30%{transform:translateY(-8px) rotate(-4deg)}60%{transform:translateY(-2px) rotate(3deg)}}\n@keyframes think{0%,100%{transform:rotate(-2.5deg) translateY(0)}50%{transform:rotate(2.5deg) translateY(-6px)}}\n@keyframes peek{0%,100%{transform:translateY(16px) rotate(6deg)}45%,70%{transform:translateY(0) rotate(-2deg)}}\n@keyframes shadowPulse{0%,100%{transform:translateX(-50%) scaleX(1);opacity:.28}38%{transform:translateX(-50%) scaleX(.78);opacity:.16}}\n.m-type{transform-box:fill-box;transform-origin:50% 100%;animation:typeBob 1.1s ease-in-out 1.7s infinite}\n.m-jump{transform-box:fill-box;transform-origin:50% 100%;animation:jumpJoy 1.4s cubic-bezier(.3,.7,.4,1) infinite}\n.m-medal{transform-box:fill-box;transform-origin:center;animation:medalPop 2.4s ease-in-out infinite}\n.m-thumbs{transform-origin:50% 100%;animation:nod 3.2s ease-in-out infinite;filter:drop-shadow(0 18px 26px rgba(16,54,125,.3))}\n.m-think{transform-origin:50% 100%;animation:think 4s ease-in-out infinite;filter:drop-shadow(0 22px 30px rgba(16,54,125,.15))}\n.m-cheer{transform-origin:50% 100%;animation:jumpJoy 1.6s cubic-bezier(.3,.7,.4,1) infinite}\n.m-shadow{position:absolute;left:50%;bottom:6px;width:62%;height:22px;border-radius:50%;background:radial-gradient(closest-side,rgba(16,54,125,.5),transparent);transform:translateX(-50%);animation:shadowPulse 1.6s cubic-bezier(.3,.7,.4,1) infinite}\n.m-think-wrap .m-shadow{animation-duration:4s}\n.m-peek{transform-origin:50% 100%;animation:peek 4.5s ease-in-out infinite;filter:drop-shadow(0 14px 20px rgba(16,54,125,.22))}\n.m-pro{transform:translateY(70px);transition:transform .7s cubic-bezier(.34,1.56,.64,1)}\n.pro-wrap:hover .m-pro{transform:translateY(0) rotate(-4deg)}\n.sc.js .m-cheer-wrap:not(.in) .m-cheer{animation-play-state:paused}\n@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n@keyframes marqueeR{from{transform:translateX(-50%)}to{transform:translateX(0)}}\n@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}\n@keyframes wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}\n@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}\n@keyframes sheen{from{background-position:200% 0}to{background-position:-200% 0}}\n.mq{display:flex;width:max-content;animation:marquee 38s linear infinite}\n.mq-r{display:flex;width:max-content;animation:marqueeR 44s linear infinite}\n.float-a{animation:floaty 6s ease-in-out infinite}\n.float-b{animation:floaty 7s ease-in-out 1.4s infinite}\n.wv{display:inline-block;width:3px;border-radius:3px;background:#74B4D9;transform-origin:center;animation:wave 1s ease-in-out infinite}\n.live{animation:blink 1.4s ease-in-out infinite}\n\n/* scroll reveal */\n.sc.js [data-reveal]{opacity:0;transform:translateY(40px);transition:opacity 1s ease,transform 1s cubic-bezier(.16,1,.3,1)}\n.sc.js [data-reveal].in{opacity:1;transform:none}\n.sc.js .w{opacity:.14;transition:opacity .25s linear}\n\n/* RankRush process accordion */\n.acc{display:flex;gap:12px;height:460px}\n.pan{position:relative;flex:1 1 0;min-width:0;border-radius:32px;overflow:hidden;background:#F5F5F5;transition:flex-grow .7s cubic-bezier(.16,1,.3,1),background-color .5s ease;cursor:default}\n.pan .num{position:absolute;left:28px;bottom:24px;font:800 104px/0.8 "Plus Jakarta Sans",sans-serif;letter-spacing:-.06em;color:#EBEBEB;transition:color .5s ease}\n.pan .tag{position:absolute;left:28px;top:28px;font:600 13px/1 Inter,sans-serif;color:#1D5AA6;font-variant-numeric:tabular-nums}\n.pan .vt{position:absolute;left:28px;top:64px;font:700 24px/1.15 "Plus Jakarta Sans",sans-serif;color:#10367D;letter-spacing:-.02em}\n.pan .body{position:absolute;left:28px;top:112px;width:300px;opacity:0;transform:translateY(16px);transition:opacity .45s ease,transform .6s cubic-bezier(.16,1,.3,1)}\n.pan.open{flex-grow:2.8;background:#EBEBEB}\n.pan.open .body{opacity:1;transform:none;transition-delay:.15s}\n.pan.open .num{color:#74B4D9}\n.acc:hover .pan.open{flex-grow:1;background:#F5F5F5}\n.acc:hover .pan.open .body{opacity:0;transform:translateY(16px);transition-delay:0s}\n.acc:hover .pan.open .num{color:#EBEBEB}\n.acc .pan:hover{flex-grow:2.8;background:#EBEBEB}\n.acc .pan:hover .body{opacity:1;transform:none;transition-delay:.15s}\n.acc .pan:hover .num{color:#74B4D9}\n.pan.night{background:var(--grad)}\n.pan.night .tag,.pan.night .vt{color:#FFFFFF}\n.pan.night .num{color:rgba(255,255,255,.18)}\n.acc .pan.night:hover,.pan.night.open{background:var(--grad)}\n.acc .pan.night:hover .num{color:rgba(255,255,255,.35)}\n\n/* feature rows */\n.frow{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;align-items:center;padding:44px 0}\n.frow::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:#E1E1E1}\n.frow::before{content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .8s cubic-bezier(.16,1,.3,1);z-index:1}\n.frow:hover::before{transform:scaleX(1)}\n.frow .ui{transition:transform .6s cubic-bezier(.16,1,.3,1)}\n.frow:hover .ui{transform:translateY(-6px) rotate(-1deg)}\n\ndetails.faq{border-bottom:1px solid #E1E1E1}\ndetails.faq summary{list-style:none;cursor:pointer}\ndetails.faq summary::-webkit-details-marker{display:none}\ndetails.faq .plus{transition:transform .4s cubic-bezier(.16,1,.3,1),background-color .3s ease,color .3s ease}\ndetails.faq[open] .plus{transform:rotate(135deg);background:#1D5AA6;color:#FFFFFF}\ndetails.faq summary:hover .q{color:#1D5AA6}\n\n.g-res{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:72px;align-items:center}\n.g-feat{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:72px;align-items:start}\n.sticky{position:sticky;top:120px}\n.g-col{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:64px;align-items:center}\n.g-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\n.g-plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:stretch}\n.g-faq{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:72px;align-items:center}\n.g-foot{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,3fr) minmax(0,3fr);gap:40px}\n.navlinks{display:flex;gap:2px}\n.hero-side{display:flex}\n@media (max-width:1040px){\n.navlinks{display:none}\n.g-plans{grid-template-columns:minmax(0,1fr)}\n.acc{flex-direction:column;height:auto}\n.pan,.pan.open,.acc:hover .pan.open,.acc .pan:hover{flex:none;min-height:220px;background:#EBEBEB}\n.pan .body,.acc:hover .pan.open .body{position:absolute;opacity:1;transform:none}\n}\n@media (max-width:860px){\n.g-res,.g-feat,.g-col,.g-faq,.g-foot{grid-template-columns:minmax(0,1fr)}\n.sticky{position:static}\n.frow{grid-template-columns:minmax(0,1fr)}\n.hero-side{display:none}\n.m-peek{display:none}\n.stage{cursor:auto}\n.cursor-ring{display:none}\n}\n@media (max-width:560px){\n.wrap{padding:0 16px}\n.nav-ghost{display:none}\n.g-tiles{grid-template-columns:minmax(0,1fr)}\n.g-tiles>*{transform:none!important}\n.pan .body{width:auto;right:20px}\n}\n@media (prefers-reduced-motion:reduce){\n.m-type,.m-jump,.m-medal,.m-thumbs,.m-think,.m-cheer,.m-shadow,.m-peek{animation:none}\n.m-pro{transition:none}\n.mq,.mq-r,.float-a,.float-b,.wv,.live,.svg-rise,.svg-pop,.fade-in{animation:none}\n.sc.js [data-reveal]{opacity:1;transform:none;transition:none}\n.sc.js .w{opacity:1}\n.pan,.pan .body,.frow .ui,.frow::before,.cta,.cta .dot{transition:none}\n}';
const SC_EXTRA_CSS = `
.sc [id]{scroll-margin-top:100px}
.sc img{max-width:100%}
.navbar{position:relative}
.navlink.active{background:rgba(29,90,166,.1);color:#1D5AA6}
.navlink.active:hover{color:#1D5AA6}
.menu-btn{display:none;width:44px;height:44px;border:0;border-radius:50%;background:rgba(29,90,166,.1);color:#10367D;place-items:center;cursor:pointer;padding:0}
.menu-btn:focus-visible{outline:3px solid #74B4D9;outline-offset:3px}
.mnav{display:none;position:absolute;left:0;right:0;top:calc(100% + 10px);flex-direction:column;gap:2px;padding:10px;border-radius:26px;background:#FFFFFF!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:0 24px 60px rgba(16,54,125,.22)!important}
.mnav a{display:flex;justify-content:space-between;align-items:center;padding:15px 16px;border-radius:16px;font:600 16px/1 Inter,sans-serif;color:#10367D;text-decoration:none}
.mnav a:hover,.mnav a.active{background:rgba(29,90,166,.1);color:#1D5AA6}
.mnav .sep{height:1px;background:rgba(16,54,125,.1);margin:6px 8px}
@media (max-width:1040px){.menu-btn{display:grid}.mnav.open{display:flex}}
@media (max-width:420px){.nav-signup .lbl-long{display:none}}
@media (min-width:421px){.nav-signup .lbl-short{display:none}}

.sc .cta,.sc .ghost{white-space:nowrap}
button.cta,button.ghost{border:0;cursor:pointer}
button.ghost{background:transparent;border:1.5px solid rgba(16,54,125,.22)}
.cta[disabled]{opacity:.7;cursor:progress}
.tlink{display:inline-flex;align-items:center;gap:8px;font:600 15px/1 Inter,sans-serif;color:#1D5AA6;text-decoration:none;padding:6px 0;border-bottom:1.5px solid rgba(29,90,166,.25);transition:gap .3s ease,border-color .3s ease}
.tlink:hover{gap:12px;color:#10367D;border-color:#10367D}
.tlink-light{color:#FFFFFF;border-color:rgba(255,255,255,.4)}
.tlink-light:hover{color:#FFFFFF;border-color:#FFFFFF}

.g-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.g-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.lift{transition:transform .6s cubic-bezier(.16,1,.3,1),box-shadow .4s ease}
.lift:hover{transform:translateY(-6px)}
.pill{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;font:600 12px/1 Inter,sans-serif;letter-spacing:.02em;white-space:nowrap}
.pill-free{background:#EBEBEB;color:#1D5AA6}
.pill-pro{background:#10367D;color:#FFFFFF}
.pill-col{background:#EBEBEB;color:#1D5AA6}
.checks{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.checks li{display:flex;gap:10px;align-items:flex-start;font-size:16px;line-height:1.5}
.checks svg{flex:none;margin-top:3px}

/* tables */
.tbl-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:28px}
.tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:15px}
.tbl th,.tbl td{padding:16px 20px;text-align:left;border-bottom:1px solid #E1E1E1;vertical-align:middle}
.tbl thead th{font:700 15px/1.3 "Plus Jakarta Sans",sans-serif;color:#10367D;background:rgba(235,235,235,.7)}
.tbl tbody th{font-weight:500;color:#344054}
.tbl tr:last-child th,.tbl tr:last-child td{border-bottom:0}
.tbl .hl{background:rgba(29,90,166,.06)}
.tbl tbody tr{transition:background-color .2s ease}
.tbl tbody tr:hover{background:rgba(235,235,235,.6)}

/* tabs */
.tabs{display:inline-flex;gap:4px;padding:6px;border-radius:999px;flex-wrap:wrap;justify-content:center}
.tab{border:0;background:transparent;padding:12px 20px;border-radius:999px;font:600 14px/1 Inter,sans-serif;color:#10367D;cursor:pointer;transition:background-color .25s ease,color .25s ease}
.tab:hover{background:rgba(29,90,166,.08)}
.tab[aria-selected="true"]{background:var(--grad);color:#FFFFFF;box-shadow:0 10px 24px rgba(29,90,166,.3)}
.tab:focus-visible{outline:3px solid #74B4D9;outline-offset:3px}
.fgroup{font:700 13px/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#1D5AA6;padding:0 0 14px}

/* forms */
.form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 14px}
.form .full{grid-column:1/-1}
.fld{display:flex;flex-direction:column;gap:8px;min-width:0}
.fld>label,.fld>.lbl{font:600 13px/1.2 Inter,sans-serif;color:#10367D}
.fld .opt{font-weight:500;color:#667085}
.fld input,.fld select,.fld textarea{width:100%;font:400 16px/1.4 Inter,sans-serif;color:#172033;background:rgba(255,255,255,.88);border:1.5px solid #D2D2D2;border-radius:14px;padding:13px 16px;min-height:52px;transition:border-color .2s ease,box-shadow .2s ease;-webkit-appearance:none;appearance:none}
.fld select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231D5AA6' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;padding-right:44px}
.fld textarea{min-height:120px;resize:vertical}
.fld input:focus,.fld select:focus,.fld textarea:focus{outline:none;border-color:#1D5AA6;box-shadow:0 0 0 4px rgba(29,90,166,.15)}
.fld input::placeholder,.fld textarea::placeholder{color:#98A2B3}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{position:relative;display:inline-flex}
.chip input{position:absolute;opacity:0;width:1px;height:1px}
.chip span{display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:999px;border:1.5px solid #D2D2D2;background:rgba(255,255,255,.88);font:600 14px/1 Inter,sans-serif;color:#10367D;cursor:pointer;transition:all .2s ease}
.chip input:checked+span{background:#10367D;border-color:#10367D;color:#FFFFFF}
.chip input:focus-visible+span{box-shadow:0 0 0 4px rgba(29,90,166,.25)}
.consent{display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:1.5;color:#475467;cursor:pointer}
.consent input{flex:none;width:20px;height:20px;margin:1px 0 0;accent-color:#1D5AA6}
.hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;overflow:hidden}
.form-note{font-size:13px;line-height:1.5;color:#667085}
.form-err{display:flex;flex-direction:column;gap:6px;padding:14px 16px;border-radius:14px;background:#FEF3F2;color:#B42318;font-size:14px;line-height:1.5}
.form-err a{color:#B42318;font-weight:600}
@keyframes okPop{0%{opacity:0;transform:scale(.9) translateY(12px)}100%{opacity:1;transform:none}}
.form-ok{animation:okPop .7s cubic-bezier(.16,1,.3,1) both}

/* devices illustration */
.laptop{position:relative;width:100%;max-width:440px}
.laptop .scr{aspect-ratio:16/10;border-radius:18px 18px 6px 6px;padding:12px;background:#0A2152;border:1px solid rgba(255,255,255,.3)}
.laptop .base{height:14px;margin:0 -6%;border-radius:0 0 18px 18px;background:rgba(255,255,255,.85)}
.phone{position:absolute;right:-6%;bottom:-8%;width:34%;max-width:150px;aspect-ratio:9/18;border-radius:24px;padding:8px;background:#FFFFFF;box-shadow:0 30px 60px rgba(5,22,58,.35)}
.phone .scr{height:100%;border-radius:17px;background:#EBEBEB;padding:12px 10px;display:flex;flex-direction:column;gap:8px}

@media (max-width:1040px){
.g-3{grid-template-columns:repeat(2,minmax(0,1fr))}
.acc .pan,.acc .pan.open{display:flex;flex-direction:column;padding:26px 26px 92px;min-height:0}
.acc .pan .tag,.acc .pan .vt,.acc .pan .body,.acc:hover .pan.open .body{position:static;width:auto;opacity:1;transform:none}
.acc .pan .vt{margin-top:14px}
.acc .pan .body{margin-top:10px}
.acc .pan .num{font-size:80px;left:26px;bottom:20px}
}
@media (max-width:860px){
.hero-intro-btns{justify-content:center}
.hide-sm{display:none!important}
}
@media (max-width:560px){
.g-3,.g-2{grid-template-columns:minmax(0,1fr)}
.form{grid-template-columns:minmax(0,1fr)}
.tbl th,.tbl td{padding:14px 14px}
.cta{min-height:50px}
.phone{right:0}
}
@media (prefers-reduced-motion:reduce){
.lift,.tlink,.form-ok{transition:none;animation:none}
}
`;
export const SC_CSS = SC_BASE_CSS + SC_EXTRA_CSS;
// ---------- Small icons ----------
export function Arrow({ size = 18, w = 2.4 }) {
    return (<svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
        </svg>);
}
export function Check({ color = "#1D5AA6", size = 18 }) {
    return (<svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5 9-10"></path>
        </svg>);
}
export function Cross({ color = "#98A2B3", size = 18 }) {
    return (<svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
            <path d="M7 7l10 10M17 7L7 17"></path>
        </svg>);
}
export const srOnly = {
    position: "absolute",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
};
// Gradient pill button with the round arrow (magnetic on hover)
export function Cta(props) {
    return (<a className={props.white ? "cta cta-white" : "cta"} data-magnetic="" href={props.href} style={props.style}>
            {props.children}
            <span className="dot">
                <Arrow />
            </span>
        </a>);
}
export function Ghost(props) {
    return (<a className={props.light ? "ghost ghost-light" : "ghost"} href={props.href} style={props.style}>
            {props.children}
        </a>);
}
export function TextLink(props) {
    return (<a className={props.light ? "tlink tlink-light" : "tlink"} href={props.href}>
            {props.children}
            <Arrow size={16}/>
        </a>);
}
const NAV_ITEMS = [
    ["rankrush", "RankRush"],
    ["features", "Features"],
    ["plans", "Plans"],
    ["colleges", "For colleges"],
    ["faq", "FAQ"],
];
export function Logo({ light }) {
    return (<>
            <img src={IMG_LOGO} alt="" width={36} height={34} decoding="async" style={{
            height: light ? "38px" : "34px",
            width: "auto",
            display: "block",
            filter: light ? "brightness(0) invert(1)" : undefined,
        }}/>
            <span style={{
            font: light ? "800 22px/1 'Plus Jakarta Sans', sans-serif" : "800 19px/1 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-.03em",
            color: light ? "#FFFFFF" : "#10367D",
            whiteSpace: "nowrap",
        }}>
                {"Scorely"}
                <span style={{ fontWeight: 600, color: light ? "#74B4D9" : "#4A90C7" }}>{" India"}</span>
            </span>
        </>);
}
export function Nav({ appUrl, active }) {
    const [open, setOpen] = React.useState(false);
    const navRef = React.useRef(null);
    React.useEffect(() => {
        if (!open)
            return;
        const close = (e) => {
            if (navRef.current && !navRef.current.contains(e.target))
                setOpen(false);
        };
        const esc = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("pointerdown", close);
        document.addEventListener("keydown", esc);
        return () => {
            document.removeEventListener("pointerdown", close);
            document.removeEventListener("keydown", esc);
        };
    }, [open]);
    return (<div style={{ position: "sticky", top: "14px", zIndex: 50, height: 0 }}>
            <nav ref={navRef} aria-label="Main" className="glass navbar" style={{
            width: "calc(100% - 32px)",
            maxWidth: "1120px",
            margin: "0 auto",
            borderRadius: "999px",
            padding: "8px 8px 8px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
        }}>
                <a href={ROUTES.home} aria-label="Scorely India home" aria-current={active === "home" ? "page" : undefined} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", minWidth: 0 }}>
                    <Logo />
                </a>
                <div className="navlinks">
                    {NAV_ITEMS.map(([k, label]) => (<a key={k} className={active === k ? "navlink active" : "navlink"} href={ROUTES[k]} aria-current={active === k ? "page" : undefined}>
                            {label}
                        </a>))}
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <a className="navlink nav-ghost" href={appUrl} style={{ fontWeight: 600 }}>
                        {"Log in"}
                    </a>
                    <a className="cta nav-signup" data-magnetic="" href={appUrl} style={{ minHeight: "44px", padding: "4px 4px 4px 18px", gap: "10px", fontSize: "14px" }}>
                        <span className="lbl-long">{"Sign up free"}</span>
                        <span className="lbl-short">{"Sign up"}</span>
                        <span className="dot" style={{ width: "36px", height: "36px" }}>
                            <Arrow size={15} w={2.5}/>
                        </span>
                    </a>
                    <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="sc-mobile-nav" onClick={() => setOpen((o) => !o)}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                            {open ? <path d="M6 6l12 12M18 6L6 18"></path> : <path d="M4 7h16M4 12h16M4 17h10"></path>}
                        </svg>
                    </button>
                </div>
                <div id="sc-mobile-nav" className={open ? "mnav glass open" : "mnav glass"}>
                    <a href={ROUTES.home} className={active === "home" ? "active" : ""} onClick={() => setOpen(false)}>
                        {"Home"}
                        <Arrow size={16}/>
                    </a>
                    {NAV_ITEMS.map(([k, label]) => (<a key={k} href={ROUTES[k]} className={active === k ? "active" : ""} onClick={() => setOpen(false)}>
                            {label}
                            <Arrow size={16}/>
                        </a>))}
                    <span className="sep" aria-hidden="true"></span>
                    <a href={appUrl} onClick={() => setOpen(false)}>
                        {"Log in"}
                        <Arrow size={16}/>
                    </a>
                </div>
            </nav>
        </div>);
}
// ---------- Footer ----------
const footHead = {
    font: "600 12px/1 Inter, sans-serif",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#74B4D9",
    marginBottom: "6px",
};
export function Footer({ appUrl }) {
    return (<footer style={{ position: "relative", background: "#0A2152", color: "#C3D3E4", padding: "56px 0 0", overflow: "hidden" }}>
            <div aria-hidden="true" style={{
            position: "absolute",
            left: "-15%",
            right: "-15%",
            top: "-40px",
            height: "300px",
            background: "linear-gradient(90deg, #1D5AA6, #74B4D9 40%, #4A90C7 70%, #10367D)",
            filter: "blur(80px)",
            opacity: 0.7,
            transform: "rotate(-6deg)",
        }}></div>
            <div aria-hidden="true" style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,.12) 1.2px, transparent 1.3px)",
            backgroundSize: "22px 22px",
        }}></div>
            <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
                <div className="glass-dark" style={{ borderRadius: "36px", padding: "clamp(28px, 4vw, 44px) clamp(22px, 4vw, 40px)" }}>
                    <div className="g-foot">
                        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "380px" }}>
                            <a href={ROUTES.home} aria-label="Scorely India home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                                <Logo light/>
                            </a>
                            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "#DDE7F0" }}>
                                {"Weekly All-India mocks for JEE, NEET and CET, with your rank the same evening."}
                            </p>
                            <a className="cta cta-white" data-magnetic="" href={appUrl} style={{ alignSelf: "flex-start", minHeight: "48px", padding: "4px 4px 4px 20px" }}>
                                {"Sign up free"}
                                <span className="dot" style={{ width: "40px", height: "40px" }}>
                                    <Arrow size={16}/>
                                </span>
                            </a>
                        </div>
                        <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
                            <span style={footHead}>{"Explore"}</span>
                            <a className="flink" href={ROUTES.home}>{"Home"}</a>
                            {NAV_ITEMS.map(([k, label]) => (<a key={k} className="flink" href={ROUTES[k]}>
                                    {label}
                                </a>))}
                        </nav>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
                            <span style={footHead}>{"Account"}</span>
                            <a className="flink" href={appUrl}>{"Sign up free"}</a>
                            <a className="flink" href={appUrl}>{"Log in"}</a>
                            <a className="flink" href={PARTNER_FORM}>{"Apply to partner"}</a>
                            <a className="flink" href={ASK_FORM}>{"Ask a question"}</a>
                            <a className="flink" href="https://scorelyindia.com">{"scorelyindia.com"}</a>
                        </div>
                    </div>
                    <div style={{
            marginTop: "40px",
            paddingTop: "22px",
            borderTop: "1px solid rgba(255,255,255,.18)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
            fontSize: "14px",
            color: "#C3D3E4",
        }}>
                        <span>{"© 2026 Scorely India · scorelyindia.com"}</span>
                        <span>{"Independent practice platform. Not affiliated with NTA or any exam-conducting body."}</span>
                    </div>
                </div>
            </div>
            <p aria-hidden="true" style={{
            position: "relative",
            margin: 0,
            textAlign: "center",
            font: "800 clamp(56px, 13.4vw, 210px)/.82 'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-.055em",
            whiteSpace: "nowrap",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(116,180,217,.45)",
            transform: "translateY(14%)",
            paddingTop: "28px",
        }}>
                {"SCORELY INDIA"}
            </p>
        </footer>);
}
// ---------- Page shell: styles, header, footer and the page-wide motion ----------
// Scroll fade-ups ([data-reveal]), magnetic buttons ([data-magnetic]) and the
// scroll-linked word reveal ([data-words] .w) work on every page that uses this shell.
export function PageShell(props) {
    const rootRef = React.useRef(null);
    React.useEffect(() => {
        if (typeof window === "undefined")
            return;
        const root = rootRef.current;
        if (!root)
            return;
        const reduce = !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const offs = [];
        const on = (el, ev, fn, opt) => {
            el.addEventListener(ev, fn, opt);
            offs.push(() => el.removeEventListener(ev, fn, opt));
        };
        // Scroll reveal (also picks up elements added later, e.g. a new FAQ tab)
        let io = null;
        let mo = null;
        if ("IntersectionObserver" in window) {
            root.classList.add("js");
            io = new IntersectionObserver((es) => es.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("in");
                    io && io.unobserve(e.target);
                }
            }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
            const scan = () => root.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el));
            scan();
            if ("MutationObserver" in window) {
                mo = new MutationObserver(scan);
                mo.observe(root, { childList: true, subtree: true });
            }
        }
        // Magnetic buttons (delegated, so buttons added later work too)
        if (!reduce) {
            let cur = null;
            const release = (el) => {
                if (!el)
                    return;
                el.style.transition =
                    "transform .6s cubic-bezier(.16,1,.3,1), background-position .6s ease, box-shadow .3s ease";
                el.style.transform = "";
            };
            on(root, "pointermove", (e) => {
                if (e.pointerType !== "mouse")
                    return;
                const el = e.target.closest
                    ? e.target.closest("[data-magnetic]")
                    : null;
                if (el !== cur) {
                    release(cur);
                    cur = el;
                }
                if (!el)
                    return;
                const r = el.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
                const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
                el.style.transition = "transform .15s ease-out, background-position .6s ease, box-shadow .3s ease";
                el.style.transform = `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px)`;
            });
            on(root, "pointerleave", () => {
                release(cur);
                cur = null;
            });
        }
        // Scroll-linked word reveal (only runs while scrolling)
        const boxes = Array.prototype.slice.call(root.querySelectorAll("[data-words]"));
        let ticking = false;
        const paint = () => {
            ticking = false;
            const vh = window.innerHeight || 800;
            boxes.forEach((box) => {
                const words = box.querySelectorAll(".w");
                const r = box.getBoundingClientRect();
                if (r.bottom < -100 || r.top > vh + 100)
                    return;
                const prog = Math.min(1, Math.max(0, (vh * 0.92 - r.top) / (r.height + vh * 0.12)));
                const lit = prog * words.length;
                for (let w = 0; w < words.length; w++) {
                    const o = reduce ? 1 : Math.min(1, Math.max(0.14, 0.14 + (lit - w) * 0.86));
                    words[w].style.opacity = o.toFixed(2);
                }
            });
        };
        const req = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(paint);
            }
        };
        if (boxes.length) {
            on(window, "scroll", req, { passive: true });
            on(window, "resize", req);
            paint();
        }
        // Arriving with a #hash (e.g. /colleges#apply): land on that section
        if (window.location.hash && window.location.hash.length > 1) {
            const id = decodeURIComponent(window.location.hash.slice(1));
            const t = setTimeout(() => {
                const el = document.getElementById(id);
                if (el)
                    el.scrollIntoView({ behavior: "auto", block: "start" });
            }, 60);
            offs.push(() => clearTimeout(t));
        }
        return () => {
            if (io)
                io.disconnect();
            if (mo)
                mo.disconnect();
            offs.forEach((f) => f());
        };
    }, []);
    return (<div ref={rootRef} className="sc" style={{
            width: "100%",
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#172033",
            background: "#FFFFFF",
            overflowX: "clip",
        }}>
            <style dangerouslySetInnerHTML={{ __html: SC_CSS + HERO_CSS }}/>
            <Nav appUrl={props.appUrl} active={props.active}/>
            {props.children}
            <Footer appUrl={props.appUrl}/>
        </div>);
}
export function RevealHero(p) {
    const { line1 = "RANK EVERY", line2 = "SUNDAY", medalTop = "AIR", medalValue = "1,284", workingTitle = "Working on it", workingSub = "Practice test · 30 questions", achievedTitle = "Target achieved", achievedSub = "Sample · AIR 1,284 of 21,560", hint = "Hover to see Sunday night", dateLabel = "First RankRush", dateValue = "Sun · 15 Nov 2026", label = "The Scorely mascot working on a laptop. Move over the picture to reveal him celebrating his rank.", } = p;
    const stageRef = React.useRef(null);
    const svgRef = React.useRef(null);
    const ringRef = React.useRef(null);
    const [achieved, setAchieved] = React.useState(false);
    const [touched, setTouched] = React.useState(false);
    const touchedRef = React.useRef(false);
    // Headline size: same as the home page for up to 10 letters, shrinks to fit longer lines
    const longest = Math.max(line1.length, line2.length);
    const fs = Math.min(150, Math.floor(1000 / (longest * 0.66)));
    const ls = -7 * (fs / 150);
    const y1 = 262;
    const y2 = Math.round(y1 + fs * 0.987);
    const working = !achieved;
    const dateColor = achieved ? "#10367D" : "#FFFFFF";
    const dateSub = achieved ? "#475467" : "#C3D3E4";
    React.useEffect(() => {
        if (typeof window === "undefined")
            return;
        const svg = svgRef.current;
        const stage = stageRef.current;
        const ring = ringRef.current;
        if (!svg || !stage)
            return;
        const reduce = !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const offs = [];
        const on = (el, ev, fn, opt) => {
            el.addEventListener(ev, fn, opt);
            offs.push(() => el.removeEventListener(ev, fn, opt));
        };
        const touch = () => {
            if (!touchedRef.current) {
                touchedRef.current = true;
                setTouched(true);
            }
        };
        const trail = Array.prototype.slice.call(svg.querySelectorAll("[data-trail]"));
        const full = svg.querySelector("[data-full]");
        const parText = svg.querySelectorAll("[data-par-text]");
        const parImg = svg.querySelectorAll("[data-par-img]");
        const N = trail.length;
        const pts = trail.map(() => ({ x: -300, y: -300 }));
        const target = { x: 550, y: 430 };
        const mouse = { nx: 0, ny: 0 };
        const par = { x: 0, y: 0 };
        const ringPos = { x: 0, y: 0, tx: 0, ty: 0 };
        const wipe = { v: 0, from: 0, to: 0, t0: 0, dur: 1 };
        let inside = false, enterAt = 0, forceFull = false, peeking = false, peekStart = 0, headR = 0, lastAch = false, last = performance.now(), raf = 0, visible = true;
        const MAXR = 2000;
        const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        const setWipe = (to, now) => {
            if (wipe.to === to)
                return;
            wipe.from = wipe.v;
            wipe.to = to;
            wipe.t0 = now;
            wipe.dur = to > wipe.from ? 1100 : 750;
            if (to > 0) {
                full.setAttribute("cx", target.x.toFixed(1));
                full.setAttribute("cy", target.y.toFixed(1));
            }
        };
        const toSvg = (cx, cy) => {
            const m = svg.getScreenCTM();
            if (!m)
                return null;
            const pt = svg.createSVGPoint();
            pt.x = cx;
            pt.y = cy;
            return pt.matrixTransform(m.inverse());
        };
        on(stage, "pointermove", (e) => {
            const pt = toSvg(e.clientX, e.clientY);
            if (!pt)
                return;
            target.x = pt.x;
            target.y = pt.y;
            const r = stage.getBoundingClientRect();
            mouse.nx = (e.clientX - r.left) / r.width - 0.5;
            mouse.ny = (e.clientY - r.top) / r.height - 0.5;
            if (!inside) {
                inside = true;
                enterAt = performance.now();
                peeking = false;
                if (pts[0].x < -200)
                    pts.forEach((q) => {
                        q.x = pt.x;
                        q.y = pt.y;
                    });
            }
            if (ring && e.pointerType === "mouse") {
                ringPos.tx = e.clientX - r.left;
                ringPos.ty = e.clientY - r.top;
                ring.style.opacity = "1";
            }
            touch();
        });
        on(stage, "pointerleave", () => {
            inside = false;
            enterAt = 0;
            mouse.nx = 0;
            mouse.ny = 0;
            if (ring)
                ring.style.opacity = "0";
        });
        on(stage, "pointerdown", (e) => {
            if (e.pointerType !== "mouse") {
                forceFull = !forceFull;
                touch();
            }
        });
        let peekT = 0;
        if (!reduce) {
            peekT = setTimeout(() => {
                if (!inside && !touchedRef.current) {
                    peeking = true;
                    peekStart = performance.now();
                    pts.forEach((q) => {
                        q.x = 380;
                        q.y = 330;
                    });
                }
            }, 1900);
        }
        const frame = (now) => {
            if (!visible) {
                raf = 0;
                return;
            }
            const dt = Math.min(48, now - last) / 16.67;
            last = now;
            const k = (base) => 1 - Math.pow(1 - base, dt);
            if (peeking) {
                const t = (now - peekStart) / 2400;
                if (t >= 1)
                    peeking = false;
                else {
                    const e2 = ease(t);
                    target.x = 380 + 360 * e2;
                    target.y = 340 + Math.sin(e2 * Math.PI) * -60;
                }
            }
            const active = inside || peeking;
            const dwell = inside && now - enterAt > 1000;
            if (reduce) {
                wipe.v = inside || forceFull ? MAXR : 0;
                headR = 0;
            }
            else {
                setWipe(dwell || forceFull ? MAXR : 0, now);
                const wt = Math.min(1, (now - wipe.t0) / wipe.dur);
                wipe.v = wipe.from + (wipe.to - wipe.from) * ease(wt);
                headR += ((active ? 150 : 0) - headR) * k(0.12);
            }
            pts[0].x += (target.x - pts[0].x) * k(0.22);
            pts[0].y += (target.y - pts[0].y) * k(0.22);
            for (let i = 1; i < N; i++) {
                pts[i].x += (pts[i - 1].x - pts[i].x) * k(0.3);
                pts[i].y += (pts[i - 1].y - pts[i].y) * k(0.3);
            }
            for (let j = 0; j < N; j++) {
                const rr = headR * (1 - (j / N) * 0.6);
                trail[j].setAttribute("cx", pts[j].x.toFixed(1));
                trail[j].setAttribute("cy", pts[j].y.toFixed(1));
                trail[j].setAttribute("r", Math.max(0, rr).toFixed(1));
            }
            full.setAttribute("r", Math.max(0, wipe.v).toFixed(1));
            if (!reduce) {
                par.x += (mouse.nx - par.x) * k(0.08);
                par.y += (mouse.ny - par.y) * k(0.08);
                const tx = (-par.x * 18).toFixed(2), ty = (-par.y * 10).toFixed(2), ix = (par.x * 14).toFixed(2), iy = (par.y * 6).toFixed(2);
                parText.forEach((g) => g.setAttribute("transform", `translate(${tx} ${ty})`));
                parImg.forEach((g) => g.setAttribute("transform", `translate(${ix} ${iy})`));
                if (ring) {
                    ringPos.x += (ringPos.tx - ringPos.x) * k(0.25);
                    ringPos.y += (ringPos.ty - ringPos.y) * k(0.25);
                    const sc = dwell ? 1.25 : 1;
                    ring.style.transform = `translate(${ringPos.x.toFixed(1)}px,${ringPos.y.toFixed(1)}px) scale(${sc})`;
                }
            }
            const ach = wipe.v > MAXR * 0.45;
            if (ach !== lastAch) {
                lastAch = ach;
                setAchieved(ach);
            }
            raf = requestAnimationFrame(frame);
        };
        const start = () => {
            if (!raf) {
                last = performance.now();
                raf = requestAnimationFrame(frame);
            }
        };
        start();
        // Pause the hero loop while it is scrolled out of view (keeps the page fast)
        let vio = null;
        if ("IntersectionObserver" in window) {
            vio = new IntersectionObserver((es) => {
                visible = es[0].isIntersecting;
                if (visible)
                    start();
            });
            vio.observe(stage);
        }
        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(peekT);
            if (vio)
                vio.disconnect();
            offs.forEach((f) => f());
        };
    }, []);
    const trailCircles = [];
    for (let i = 0; i < 7; i++)
        trailCircles.push(<circle key={i} data-trail="1" cx="-300" cy="-300" r="0" fill="url(#soft)"></circle>);
    return (<header id="top" style={{ position: "relative", background: "#10367D", overflow: "hidden" }}>
            <div className="stage" ref={stageRef} style={{ position: "relative", width: "100%", paddingTop: "70px" }}>
                <svg ref={svgRef} role="img" aria-label={label} viewBox="0 0 1100 700" preserveAspectRatio="xMidYMax meet" style={{ display: "block", width: "100%", height: "auto", maxHeight: "86vh", minHeight: "320px", overflow: "visible" }}>
                    <defs>
                        <linearGradient id="bgA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#0A2459"></stop>
                            <stop offset=".55" stopColor="#174A92"></stop>
                            <stop offset="1" stopColor="#1D5AA6"></stop>
                        </linearGradient>
                        <linearGradient id="bgB" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#74B4D9"></stop>
                            <stop offset=".5" stopColor="#B7D8EC"></stop>
                            <stop offset="1" stopColor="#EBEBEB"></stop>
                        </linearGradient>
                        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#74B4D9" stopOpacity=".45"></stop>
                            <stop offset="1" stopColor="#74B4D9" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="txtB" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#10367D"></stop>
                            <stop offset=".6" stopColor="#1D5AA6"></stop>
                            <stop offset="1" stopColor="#10367D"></stop>
                        </linearGradient>
                        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.3" fill="#FFFFFF" fillOpacity=".16"></circle>
                        </pattern>
                        <pattern id="dotsB" width="22" height="22" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.3" fill="#1D5AA6" fillOpacity=".18"></circle>
                        </pattern>
                        <radialGradient id="soft">
                            <stop offset="0" stopColor="#FFFFFF"></stop>
                            <stop offset=".62" stopColor="#FFFFFF"></stop>
                            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
                        </radialGradient>
                        <mask id="reveal" maskUnits="userSpaceOnUse" x="-1400" y="-400" width="3900" height="1160">
                            <circle data-full="1" cx="550" cy="430" r="0" fill="url(#soft)"></circle>
                            {trailCircles}
                        </mask>
                    </defs>
                    <g>
                        <rect x="-1400" y="-400" width="3900" height="1160" fill="url(#bgA)"></rect>
                        <rect x="-1400" y="-400" width="3900" height="1160" fill="url(#dots)"></rect>
                        <g opacity=".7">
                            <path d="M180 -60 L330 -60 L120 760 L-60 760 Z" fill="url(#beam)" opacity=".35"></path>
                            <path d="M800 -60 L900 -60 L1160 760 L980 760 Z" fill="url(#beam)" opacity=".25"></path>
                        </g>
                        <g data-par-text="1">
                            <g fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize={fs} letterSpacing={ls} textAnchor="middle" fill="#FFFFFF">
                                <text className="svg-rise" x="550" y={y1} style={{ animationDelay: ".05s" }}>
                                    {line1}
                                </text>
                                <text className="svg-rise" x="550" y={y2} style={{ animationDelay: ".18s" }} fill="#74B4D9">
                                    {line2}
                                </text>
                            </g>
                        </g>
                        <g data-par-img="1">
                            <g className="svg-pop">
                                <image className="m-type" href={IMG_WORKING} x="276" y="168" width="548" height="532" preserveAspectRatio="xMidYMax meet"></image>
                            </g>
                        </g>
                    </g>
                    <g mask="url(#reveal)">
                        <rect x="-1400" y="-400" width="3900" height="1160" fill="url(#bgB)"></rect>
                        <rect x="-1400" y="-400" width="3900" height="1160" fill="url(#dotsB)"></rect>
                        <g data-par-text="1">
                            <g fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontStyle="italic" fontSize={fs} letterSpacing={ls} textAnchor="middle">
                                <text x="550" y={y1} fill="url(#txtB)">
                                    {line1}
                                </text>
                                <text x="550" y={y2} fill="#1D5AA6">
                                    {line2}
                                </text>
                            </g>
                        </g>
                        <g>
                            <rect x="230" y="120" width="16" height="6" rx="3" fill="#1D5AA6" transform="rotate(35 238 123)"></rect>
                            <rect x="310" y="70" width="12" height="5" rx="2.5" fill="#10367D" transform="rotate(-20 316 72)"></rect>
                            <rect x="820" y="100" width="16" height="6" rx="3" fill="#1D5AA6" transform="rotate(-40 828 103)"></rect>
                            <rect x="880" y="190" width="12" height="5" rx="2.5" fill="#FFFFFF" transform="rotate(25 886 192)"></rect>
                            <rect x="190" y="230" width="12" height="5" rx="2.5" fill="#FFFFFF" transform="rotate(60 196 232)"></rect>
                            <rect x="760" y="60" width="10" height="5" rx="2.5" fill="#4A90C7" transform="rotate(15 765 62)"></rect>
                            <path d="M260 300 q14 -18 28 0 t28 0" fill="none" stroke="#1D5AA6" strokeWidth="4" strokeLinecap="round"></path>
                            <path d="M800 300 q14 -18 28 0 t28 0" fill="none" stroke="#10367D" strokeWidth="4" strokeLinecap="round"></path>
                        </g>
                        <g data-par-img="1">
                            <image className="m-jump" href={IMG_ACHIEVED} x="290" y="150" width="520" height="550" preserveAspectRatio="xMidYMax meet"></image>
                            <g transform="translate(772 352) rotate(8)">
                                <g className="m-medal">
                                    <path d="M-18 -60 l-14 -38 h22 l10 25 z M18 -60 l14 -38 h-22 l-10 25 z" fill="#10367D"></path>
                                    <circle r="54" fill="#FFFFFF"></circle>
                                    <circle r="45" fill="#1D5AA6"></circle>
                                    <text y="-9" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#EBEBEB" letterSpacing="1.6">
                                        {medalTop}
                                    </text>
                                    <text y="17" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize={medalValue.length > 5 ? 20 : 25} fill="#FFFFFF">
                                        {medalValue}
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>
                <div className="hero-side fade-in" style={{ position: "absolute", left: "max(28px, calc(50% - 600px))", bottom: "20%", zIndex: 7 }}>
                    {working && (<div className="glass-dark float-a" style={{ display: "flex", alignItems: "center", gap: "12px", borderRadius: "20px", padding: "12px 18px 12px 12px", color: "#FFFFFF" }}>
                            <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center" }}>
                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="13" r="8"></circle>
                                    <path d="M12 9v4l2.5 2.5M9 2h6"></path>
                                </svg>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                <span style={{ font: "600 15px/1.2 'Plus Jakarta Sans', sans-serif" }}>
                                    {workingTitle}
                                    <span className="live">{"…"}</span>
                                </span>
                                <span style={{ font: "500 12px/1.2 Inter, sans-serif", color: "#C3D3E4" }}>{workingSub}</span>
                            </span>
                        </div>)}
                    {achieved && (<div className="glass float-a" style={{ display: "flex", alignItems: "center", gap: "12px", borderRadius: "20px", padding: "12px 18px 12px 12px" }}>
                            <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--grad)", display: "grid", placeItems: "center" }}>
                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"></path>
                                </svg>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                <span style={{ font: "600 15px/1.2 'Plus Jakarta Sans', sans-serif", color: "#10367D" }}>{achievedTitle}</span>
                                <span style={{ font: "500 12px/1.2 Inter, sans-serif", color: "#475467" }}>{achievedSub}</span>
                            </span>
                        </div>)}
                </div>
                <div className="hero-side fade-in" style={{
            position: "absolute",
            right: "max(28px, calc(50% - 600px))",
            bottom: "20%",
            zIndex: 7,
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
        }}>
                    <div className="glass-dark" style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "999px",
            padding: "8px 16px 8px 8px",
            color: "#FFFFFF",
            font: "500 14px/1 Inter, sans-serif",
            transition: "opacity .5s ease",
            opacity: touched ? 0 : 1,
        }}>
                        <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5AA6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 3l14 8-6 2-2 6z"></path>
                            </svg>
                        </span>
                        {" " + hint + " "}
                    </div>
                    <div style={{ textAlign: "right", color: dateColor, transition: "color .5s ease" }}>
                        <span style={{ display: "block", font: "500 13px/1 Inter, sans-serif", color: dateSub, transition: "color .5s ease" }}>{dateLabel}</span>
                        <span style={{ display: "block", marginTop: "6px", font: "700 22px/1.1 'Plus Jakarta Sans', sans-serif" }}>{dateValue}</span>
                    </div>
                </div>
                <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-1px", width: "100%", height: "clamp(34px, 5.5vw, 84px)", zIndex: 8, display: "block" }}>
                    <path d="M0 90 L0 64 Q720 -34 1440 64 L1440 90 Z" fill="#FFFFFF"></path>
                </svg>
            </div>
        </header>);
}
export function LitHeading(props) {
    const words = [];
    let n = 0;
    props.segs.forEach((s) => {
        s.t.split(/\s+/)
            .filter(Boolean)
            .forEach((w) => {
            const inner = s.em ? <em style={{ fontStyle: "italic", fontWeight: 800 }}>{w}</em> : w;
            words.push(<span key={n++} className={s.g ? "w gtext" : "w"} style={s.m ? { color: "#667085" } : undefined}>
                        {inner}
                    </span>);
            words.push(" ");
        });
    });
    const Tag = (props.as || "h2");
    return (<Tag id={props.id} data-words="" style={{
            fontSize: props.size || "clamp(30px, 3.9vw, 54px)",
            fontWeight: 700,
            lineHeight: 1.14,
            letterSpacing: "-.03em",
            color: "#10367D",
            maxWidth: "1040px",
            margin: "0 auto",
            textAlign: "center",
        }}>
            {words}
        </Tag>);
}
export function Intro(props) {
    return (<section aria-labelledby={(props.id || "intro") + "-h"} style={{ position: "relative", padding: "96px 0 112px" }}>
            <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px" }}>
                <span className="kicker">{props.kicker}</span>
                <LitHeading as={props.as || "h1"} id={(props.id || "intro") + "-h"} segs={props.segs}/>
                <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "center", textAlign: "center" }}>
                    {props.lede && (<p className="lede" style={{ maxWidth: "620px" }}>
                            {props.lede}
                        </p>)}
                    {props.children && (<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "center" }}>
                            {props.children}
                        </div>)}
                </div>
            </div>
        </section>);
}
// ---------- Section head (kicker + h2 + lede, centred) ----------
export function SHead(props) {
    return (<div data-reveal="" className="shead">
            <span className="kicker" style={props.light ? { color: "#74B4D9" } : undefined}>
                {props.kicker}
            </span>
            <h2 id={props.id} className="h2" style={props.light ? { color: "#FFFFFF" } : undefined}>
                {props.title}
            </h2>
            {props.lede && (<p className="lede" style={props.light ? { color: "#EBEBEB" } : undefined}>
                    {props.lede}
                </p>)}
            {props.children}
        </div>);
}
// ---------- Marquee band ----------
export function Marquee(props) {
    const big = props.big || [
        ["JEE Main", false],
        ["NEET", true],
        ["CET", false],
        ["every Sunday", true],
    ];
    const small = props.small || ["Physics", "Chemistry", "Biology", "Maths", "Results by 8 PM", "AIR · Percentile · State rank"];
    const bigRun = (key) => (<span key={key} style={{ display: "flex", gap: "40px", paddingRight: "40px", whiteSpace: "nowrap", alignItems: "center" }}>
            {big.map(([t, it], i) => (<React.Fragment key={i}>
                    <span className={it ? "gtext" : undefined} style={it ? { fontStyle: "italic" } : undefined}>
                        {t}
                    </span>
                    <span className="gtext">{"✦"}</span>
                </React.Fragment>))}
        </span>);
    const smallRun = (key) => (<span key={key} style={{ display: "flex", gap: "32px", paddingRight: "32px", whiteSpace: "nowrap" }}>
            {small.map((t, i) => (<React.Fragment key={i}>
                    <span>{t}</span>
                    <span>{"·"}</span>
                </React.Fragment>))}
        </span>);
    return (<div aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "8px 0", borderTop: "1px solid #E1E1E1", borderBottom: "1px solid #E1E1E1" }}>
            <div style={{ overflow: "hidden" }}>
                <div className="mq" style={{ font: "800 clamp(30px, 4.2vw, 60px)/1.15 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em", color: "#10367D" }}>
                    {bigRun(1)}
                    {bigRun(2)}
                </div>
            </div>
            <div style={{ overflow: "hidden" }}>
                <div className="mq-r" style={{ font: "600 clamp(16px, 1.6vw, 20px)/1.4 Inter, sans-serif", color: "#667085" }}>
                    {smallRun(1)}
                    {smallRun(2)}
                </div>
            </div>
        </div>);
}
// ---------- Dark gradient band (used for colleges-style sections) ----------
export function DarkBand(props) {
    return (<section id={props.id} aria-labelledby={props.labelledBy} style={{ position: "relative", padding: props.pad || "160px 0", background: "#10367D", color: "#FFFFFF", overflow: "hidden" }}>
            <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: "absolute", left: 0, top: "-1px", width: "100%", height: "clamp(34px, 5.5vw, 84px)", display: "block", zIndex: 2 }}>
                <path d="M0 0 L1440 0 L1440 26 Q720 124 0 26 Z" fill="#FFFFFF"></path>
            </svg>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, #10367D 0%, #174A92 45%, #1D5AA6 70%, #4A90C7 100%)" }}></div>
            <div aria-hidden="true" style={{
            position: "absolute",
            left: "-10%",
            right: "-10%",
            top: "30%",
            height: "220px",
            background: "linear-gradient(90deg, transparent, #74B4D9 30%, #4A90C7 60%, transparent)",
            filter: "blur(60px)",
            opacity: 0.55,
            transform: "rotate(-12deg)",
        }}></div>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1.2px, transparent 1.3px)", backgroundSize: "22px 22px" }}></div>
            <div style={{ position: "relative" }}>{props.children}</div>
            <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: "-1px", width: "100%", height: "clamp(34px, 5.5vw, 84px)", display: "block", zIndex: 2 }}>
                <path d="M0 90 L0 64 Q720 -34 1440 64 L1440 90 Z" fill="#FFFFFF"></path>
            </svg>
        </section>);
}
// ---------- FAQ item ----------
export function FaqItem(props) {
    return (<details className="faq" open={props.open} style={{ padding: "26px 0" }}>
            <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                <span className="q" style={{ font: "600 clamp(18px, 1.6vw, 20px)/1.4 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.01em", color: "#10367D", transition: "color .2s ease" }}>
                    {props.q}
                </span>
                <span className="plus" aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#EBEBEB", color: "#1D5AA6", display: "grid", placeItems: "center", font: "400 26px/1 Inter, sans-serif" }}>
                    {"+"}
                </span>
            </summary>
            <p style={{ marginTop: "14px", fontSize: "17px", lineHeight: 1.7, color: "#667085", maxWidth: "640px" }}>{props.a}</p>
        </details>);
}
// ---------- Mascot helpers ----------
export function ThinkingMascot({ width = "min(280px, 70%)" }) {
    return (<div className="m-think-wrap" style={{ position: "relative", marginTop: "12px", width }}>
            <span className="m-shadow" aria-hidden="true"></span>
            <img src={IMG_THINK} alt="Scorely mascot thinking" className="m-think" loading="lazy" decoding="async" style={{ position: "relative", width: "100%", height: "auto", display: "block" }}/>
        </div>);
}
// ---------- Closing call to action with the cheering mascot ----------
export function FinalCTA(props) {
    return (<section aria-labelledby="cta-h" style={{ position: "relative", padding: "96px 0 0", textAlign: "center", overflow: "hidden" }}>
            <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "26px" }}>
                <span data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "10px", font: "600 13px/1 Inter, sans-serif", letterSpacing: ".08em", textTransform: "uppercase", color: "#1D5AA6" }}>
                    <span className="live" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A90C7" }}></span>
                    {props.kicker || "RankRush #1 · Sun 15 Nov 2026"}
                </span>
                <h2 id="cta-h" data-reveal="" style={{ fontSize: "clamp(36px, 4.6vw, 64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.04em", color: "#10367D", maxWidth: "900px" }}>
                    {props.title}
                </h2>
                <p data-reveal="" className="lede" style={{ maxWidth: "560px" }}>
                    {props.body}
                </p>
                <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                    <Cta href={props.primary.href}>{props.primary.label}</Cta>
                    {props.secondary && <Ghost href={props.secondary.href}>{props.secondary.label}</Ghost>}
                </div>
                <div data-reveal="" className="m-cheer-wrap" style={{ position: "relative", width: "min(360px, 78%)", marginTop: "20px", marginBottom: "-2px", zIndex: 2 }}>
                    <span className="m-shadow" aria-hidden="true" style={{ bottom: 0 }}></span>
                    <img src={IMG_ACHIEVED} alt="Scorely mascot cheering" className="m-cheer" loading="lazy" decoding="async" style={{ position: "relative", width: "100%", height: "auto", display: "block" }}/>
                </div>
            </div>
        </section>);
}
// ---------- Email form (sends every field to FORM_EMAIL) ----------
export function EmailForm(props) {
    const endpoint = props.endpoint || DEFAULT_FORM_ENDPOINT;
    const [state, setState] = React.useState("idle");
    const [err, setErr] = React.useState("");
    const [mailto, setMailto] = React.useState("");
    const formRef = React.useRef(null);
    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        if (fd.get("_honey")) {
            setState("sent");
            return;
        }
        if (props.requireOneOf && fd.getAll(props.requireOneOf.name).length === 0) {
            setErr(props.requireOneOf.message);
            setMailto("");
            setState("error");
            return;
        }
        const data = {};
        fd.forEach((v, k) => {
            if (k === "_honey")
                return;
            const val = String(v);
            data[k] = data[k] ? data[k] + ", " + val : val;
        });
        const lines = Object.keys(data).map((k) => k + ": " + data[k]);
        const fallback = "mailto:" + FORM_EMAIL + "?subject=" + encodeURIComponent(props.subject) + "&body=" + encodeURIComponent(lines.join("\n"));
        setMailto(fallback);
        setState("sending");
        setErr("");
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    ...data,
                    "Form": props.formName,
                    "Sent from": typeof window !== "undefined" ? window.location.href : "",
                    _subject: props.subject,
                    _template: "table",
                    _captcha: "false",
                }),
            });
            let ok = res.ok;
            try {
                const j = await res.json();
                if (j && (j.success === false || j.success === "false"))
                    ok = false;
            }
            catch (_) { }
            if (!ok)
                throw new Error("send");
            setState("sent");
            form.reset();
        }
        catch (_) {
            setErr("We couldn't send this just now. Please try again, or send it by email instead.");
            setState("error");
        }
    };
    if (state === "sent")
        return (<div className="form-ok" role="status" aria-live="polite" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "8px 0" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--grad)", display: "grid", placeItems: "center" }}>
                    <Check color="#FFFFFF" size={26}/>
                </span>
                <h3 style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-.02em", color: "#10367D" }}>{props.successTitle}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#475467" }}>{props.successBody}</p>
                <button type="button" className="ghost" onClick={() => setState("idle")} style={{ marginTop: "6px" }}>
                    {"Send another"}
                </button>
            </div>);
    return (<form ref={formRef} className="form" onSubmit={onSubmit} noValidate={false} aria-describedby={state === "error" ? props.formName + "-err" : undefined}>
            <div className="hp" aria-hidden="true">
                <label>
                    {"Leave this empty"}
                    <input type="text" name="_honey" tabIndex={-1} autoComplete="off"/>
                </label>
            </div>
            {props.children}
            {state === "error" && (<div id={props.formName + "-err"} className="form-err full" role="alert">
                    <span>{err}</span>
                    {mailto && <a href={mailto}>{"Email " + FORM_EMAIL}</a>}
                </div>)}
            <div className="full" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 20px", marginTop: "6px" }}>
                <button type="submit" className="cta" data-magnetic="" disabled={state === "sending"}>
                    {state === "sending" ? "Sending…" : props.submitLabel}
                    <span className="dot">
                        <Arrow />
                    </span>
                </button>
                <span className="form-note">{"We reply by email, usually within two working days."}</span>
            </div>
        </form>);
}
export function Field(props) {
    const id = "f-" + props.name.replace(/\W+/g, "-").toLowerCase();
    const label = (<label htmlFor={id}>
            {props.label}
            {props.required ? (<span aria-hidden="true" style={{ color: "#1D5AA6" }}>
                    {" *"}
                </span>) : (<span className="opt">{" (optional)"}</span>)}
        </label>);
    let control;
    if (props.options)
        control = (<select id={id} name={props.name} required={props.required} defaultValue="">
                <option value="" disabled>
                    {"Select"}
                </option>
                {props.options.map((o) => (<option key={o} value={o}>
                        {o}
                    </option>))}
            </select>);
    else if (props.textarea)
        control = <textarea id={id} name={props.name} required={props.required} placeholder={props.placeholder} rows={4}></textarea>;
    else
        control = (<input id={id} name={props.name} type={props.type || "text"} required={props.required} placeholder={props.placeholder} autoComplete={props.autoComplete} pattern={props.pattern} inputMode={props.inputMode} min={props.min}/>);
    return (<div className={props.full ? "fld full" : "fld"}>
            {label}
            {control}
        </div>);
}
export function ChipGroup(props) {
    return (<fieldset className="fld full" style={{ border: 0, padding: 0, margin: 0 }}>
            <legend className="lbl" style={{ padding: 0, marginBottom: "8px", font: "600 13px/1.2 Inter, sans-serif", color: "#10367D" }}>
                {props.label}
                {props.required && (<span aria-hidden="true" style={{ color: "#1D5AA6" }}>
                        {" *"}
                    </span>)}
            </legend>
            <div className="chips">
                {props.options.map((o) => (<label key={o} className="chip">
                        <input type="checkbox" name={props.name} value={o}/>
                        <span>{o}</span>
                    </label>))}
            </div>
        </fieldset>);
}
export function Consent({ text }) {
    return (<label className="consent full">
            <input type="checkbox" name="Consent" value="Yes" required/>
            <span>{text}</span>
        </label>);
}
// ---------- Pieces reused on other pages ----------
export function ResultCard() {
    const big = { display: "block", font: "800 26px/1 'Plus Jakarta Sans', sans-serif", color: "#10367D", fontVariantNumeric: "tabular-nums" };
    const small = { display: "block", marginTop: "6px", fontSize: "13px", color: "#475467" };
    return (<div data-reveal="" style={{ position: "relative", padding: "40px 0" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0 -12% 0 18%", borderRadius: "48px", background: "var(--grad)", transform: "rotate(-4deg)" }}></div>
            <div aria-hidden="true" style={{
            position: "absolute",
            right: "2%",
            top: "4%",
            width: "46%",
            height: "34%",
            borderRadius: "30px",
            background: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)",
            transform: "rotate(-4deg)",
        }}></div>
            <div className="glass" style={{ position: "relative", borderRadius: "30px", padding: "30px", display: "flex", flexDirection: "column", gap: "22px", maxWidth: "520px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", font: "500 13px/1 Inter, sans-serif", color: "#475467" }}>
                    <span>{"RankRush #1 · JEE Main pattern"}</span>
                    <span style={{ font: "600 11px/1 Inter, sans-serif", letterSpacing: ".1em", color: "#10367D", background: "rgba(255,255,255,.8)", padding: "6px 10px", borderRadius: "6px" }}>{"SAMPLE"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ color: "#10367D", font: "800 clamp(44px, 4.6vw, 64px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.045em", fontVariantNumeric: "tabular-nums" }}>{"AIR 1,284"}</span>
                    <span style={{ font: "600 15px/1 Inter, sans-serif", color: "#475467" }}>{"of 21,560"}</span>
                </div>
                <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
                    <div>
                        <span style={big}>{"94.05"}</span>
                        <span style={small}>{"Percentile"}</span>
                    </div>
                    <div>
                        <span style={big}>
                            {"212"}
                            <span style={{ fontSize: "15px", color: "#667085" }}>{"/300"}</span>
                        </span>
                        <span style={small}>{"Score"}</span>
                    </div>
                    <div>
                        <span style={big}>{"#38"}</span>
                        <span style={small}>{"State rank"}</span>
                    </div>
                </div>
                <div style={{ height: "8px", borderRadius: "8px", background: "rgba(16,54,125,.1)", overflow: "hidden" }}>
                    <div style={{ width: "94%", height: "100%", borderRadius: "8px", background: "var(--grad)" }}></div>
                </div>
                <p style={{ fontSize: "13px", color: "#475467" }}>{"Results 8:00 PM, Sun 15 Nov 2026 · Physics was your strongest subject"}</p>
            </div>
            <img src={IMG_THUMBS} alt="" className="m-thumbs" loading="lazy" decoding="async" style={{ position: "absolute", right: "-70px", bottom: "-70px", width: "min(210px, 34%)", height: "auto", filter: "drop-shadow(0 18px 26px rgba(16,54,125,.3))" }}/>
        </div>);
}
export function MiniLeaderboard() {
    const row = { display: "flex", justifyContent: "space-between", padding: "10px 14px", borderRadius: "12px", color: "#667085" };
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px" }}>
            <div style={row}>
                <span>{"AIR 1,283"}</span>
                <span>{"95.06 %ile"}</span>
            </div>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 14px",
            borderRadius: "14px",
            background: "var(--grad)",
            color: "#FFFFFF",
            fontWeight: 600,
            boxShadow: "0 14px 30px rgba(29,90,166,.3)",
        }}>
                <span>{"You · AIR 1,284"}</span>
                <span>{"94.05 %ile"}</span>
            </div>
            <div style={row}>
                <span>{"AIR 1,285"}</span>
                <span>{"94.04 %ile"}</span>
            </div>
            <span style={{ fontSize: "12px", color: "#667085", paddingLeft: "14px" }}>{"Sample leaderboard · of 21,560"}</span>
        </div>);
}
export function MiniBuilder() {
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", font: "500 14px/1 Inter, sans-serif" }}>
                <span style={{ padding: "11px 16px", borderRadius: "999px", border: "1px solid #E1E1E1", color: "#667085" }}>{"Whole syllabus"}</span>
                <span style={{ padding: "11px 16px", borderRadius: "999px", background: "#10367D", color: "#FFFFFF" }}>{"Pick chapters"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", font: "800 44px/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>
                <span style={{ color: "#D2D2D2" }}>{"15"}</span>
                <span className="gtext">{"30"}</span>
                <span style={{ color: "#D2D2D2" }}>{"60"}</span>
                <span style={{ font: "500 14px/1 Inter, sans-serif", letterSpacing: 0, color: "#667085" }}>{"questions"}</span>
            </div>
        </div>);
}
export function MiniPlan() {
    const box = { width: "22px", height: "22px", borderRadius: "7px", border: "2px solid #74B4D9", flex: "none" };
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "7px", background: "var(--grad)", display: "grid", placeItems: "center", flex: "none" }}>
                    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10"></path>
                    </svg>
                </span>
                <span style={{ color: "#98A2B3", textDecoration: "line-through" }}>{"Mon · Revise weakest chapter"}</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={box}></span>
                <span>{"Tue · Daily Dose questions"}</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={box}></span>
                <span>{"Wed · Practice test, 15 Qs"}</span>
            </div>
        </div>);
}
export function MiniMentor() {
    return (<div className="ui" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ alignSelf: "flex-end", background: "#10367D", color: "#FFFFFF", borderRadius: "18px 18px 4px 18px", padding: "12px 16px", fontSize: "14px", display: "flex", gap: "10px", alignItems: "center" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74B4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="14" rx="3"></rect>
                    <circle cx="12" cy="13" r="3.5"></circle>
                    <path d="M9 6l1.5-2h3L15 6"></path>
                </svg>
                {" Photo of question attached "}
            </div>
            <div style={{
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#EBEBEB",
            borderRadius: "18px 18px 18px 4px",
            padding: "12px 16px",
            fontSize: "14px",
            color: "#10367D",
        }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", height: "22px" }}>
                    <span className="wv" style={{ height: "10px" }}></span>
                    <span className="wv" style={{ height: "18px", animationDelay: ".15s" }}></span>
                    <span className="wv" style={{ height: "22px", animationDelay: ".3s" }}></span>
                    <span className="wv" style={{ height: "14px", animationDelay: ".45s" }}></span>
                    <span className="wv" style={{ height: "8px", animationDelay: ".6s" }}></span>
                </span>
                {" AI Mentor is working through it "}
            </div>
        </div>);
}
export function PlanCards({ appUrl, free, codeHref }) {
    const yes = free ? free.yes : ["Full RankRush result and detailed feedback", "Class mocks from your own college", "Challenge-a-friend games"];
    const no = free ? free.no : ["Practice builder and full reports", "Previous papers"];
    const li = { display: "flex", gap: "10px", alignItems: "flex-start" };
    const ul = { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "13px", fontSize: "16px", lineHeight: 1.45 };
    const ic = { flex: "none", marginTop: "2px", display: "inline-flex" };
    return (<div className="g-plans">
            <article data-reveal="" className="glass" style={{ borderRadius: "32px", padding: "32px", display: "flex", flexDirection: "column", gap: "22px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#10367D" }}>{"Free"}</h3>
                <p style={{ font: "800 54px/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em", color: "#10367D" }}>{"₹0"}</p>
                <p style={{ fontSize: "16px", color: "#667085", paddingBottom: "20px", borderBottom: "1px dashed #D2D2D2" }}>
                    {free ? "Enter RankRush mocks one at a time." : "Pay per RankRush you take."}
                </p>
                <ul style={ul}>
                    {yes.map((t) => (<li key={t} style={li}>
                            <span style={ic}>
                                <Check />
                            </span>
                            {t}
                        </li>))}
                    {no.map((t) => (<li key={t} style={{ ...li, color: "#667085" }}>
                            <span style={ic}>
                                <Cross />
                            </span>
                            <span>
                                <span style={srOnly}>{"Not included: "}</span>
                                {t}
                            </span>
                        </li>))}
                </ul>
                <a className="ghost" href={appUrl} style={{ marginTop: "auto", justifyContent: "center" }}>
                    {"Sign up free"}
                </a>
            </article>
            <div className="pro-wrap" style={{ position: "relative", display: "flex" }}>
                <img src={IMG_THUMBS} alt="" className="m-pro" loading="lazy" decoding="async" style={{ position: "absolute", right: "18px", top: "-112px", width: "130px", height: "auto", zIndex: 0 }}/>
                <article data-reveal="" style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            borderRadius: "32px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            color: "#FFFFFF",
            background: "var(--grad)",
            boxShadow: "0 36px 70px rgba(29,90,166,.38)",
            overflow: "hidden",
        }}>
                    <div aria-hidden="true" style={{ position: "absolute", right: "-60px", top: "-60px", width: "220px", height: "220px", borderRadius: "40px", background: "rgba(255,255,255,.1)", transform: "rotate(24deg)" }}></div>
                    <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>{"Pro"}</h3>
                        <span className="glass-dark" style={{ font: "600 12px/1 Inter, sans-serif", padding: "8px 12px", borderRadius: "999px" }}>
                            {"Most popular"}
                        </span>
                    </div>
                    <p style={{ position: "relative", font: "800 54px/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>
                        {"₹749 "}
                        <span style={{ font: "500 15px/1 Inter, sans-serif", letterSpacing: 0, color: "#EBEBEB" }}>{"+ GST / year"}</span>
                    </p>
                    <p style={{ position: "relative", fontSize: "16px", color: "#EBEBEB", paddingBottom: "20px", borderBottom: "1px dashed rgba(255,255,255,.35)" }}>
                        {"Every student feature, all year."}
                    </p>
                    <ul style={{ ...ul, position: "relative" }}>
                        {[
            ["Every RankRush included", "#FFFFFF"],
            ["Unlimited practice tests with full reports", "#FFFFFF"],
            ["Daily Dose and weak-topic plan", "#FFFFFF"],
            ["AI Mentor and previous papers", "#74B4D9"],
            ["Create challenge papers for friends", "#FFFFFF"],
        ].map(([t, c]) => (<li key={t} style={li}>
                                <span style={ic}>
                                    <Check color={c}/>
                                </span>
                                {t}
                            </li>))}
                    </ul>
                    <a className="cta cta-white" data-magnetic="" href={appUrl} style={{ position: "relative", marginTop: "auto", justifyContent: "space-between" }}>
                        {"Get Pro"}
                        <span className="dot">
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 6l6 6-6 6"></path>
                            </svg>
                        </span>
                    </a>
                </article>
            </div>
            <article data-reveal="" className="glass" style={{ borderRadius: "32px", padding: "32px", display: "flex", flexDirection: "column", gap: "22px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#10367D" }}>{"Pro with a college code"}</h3>
                <p className="gtext" style={{ font: "800 46px/1.05 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em", fontStyle: "italic" }}>
                    {"Lower price"}
                </p>
                <p style={{ fontSize: "16px", color: "#667085", paddingBottom: "20px", borderBottom: "1px dashed #D2D2D2" }}>{"Same Pro, at your partner college's discount."}</p>
                <ul style={ul}>
                    {["Enter your college's code at checkout", "Works once your college verifies you", "Pro stays yours if you change college"].map((t) => (<li key={t} style={li}>
                            <span style={ic}>
                                <Check />
                            </span>
                            {t}
                        </li>))}
                </ul>
                <a className="ghost" href={codeHref || appUrl} style={{ marginTop: "auto", justifyContent: "center" }}>
                    {"Use my code"}
                </a>
            </article>
        </div>);
}


// ---------- Page heroes (every page except Home) ----------
// One shared layout (copy on the left, animated stage on the right) and a different story per page.
// The mascot is driven by a small physics rig: breathing, weight shift, head-turn toward the cursor,
// and real jump mechanics (crouch → stretch → arc → squash on landing → settle). Everything pauses
// when the hero is off-screen and becomes still for visitors who prefer reduced motion.

export const HERO_CSS = `
.phero{position:relative;overflow:hidden;color:#FFFFFF;background:linear-gradient(160deg,#0A2459 0%,#10367D 52%,#1D5AA6 100%);padding:clamp(118px,11vw,150px) 0 clamp(96px,10vw,150px)}
.phero .ph-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.14) 1.2px,transparent 1.3px);background-size:22px 22px;-webkit-mask-image:linear-gradient(180deg,#000 40%,transparent);mask-image:linear-gradient(180deg,#000 40%,transparent)}
.phero .ph-glow{position:absolute;left:0;top:0;width:760px;height:760px;margin:-380px 0 0 -380px;border-radius:50%;background:radial-gradient(closest-side,rgba(116,180,217,.5),rgba(116,180,217,0));pointer-events:none;will-change:transform}
.phero .ph-beam{position:absolute;top:-10%;bottom:-10%;width:180px;background:linear-gradient(180deg,rgba(116,180,217,.28),rgba(116,180,217,0));transform:skewX(-14deg);pointer-events:none}
.ph-grid{position:relative;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(28px,4vw,56px);align-items:center}
.ph-copy{display:flex;flex-direction:column;gap:24px;align-items:flex-start;position:relative;z-index:2}
.ph-title{margin:0;font:800 clamp(46px,6.4vw,96px)/.95 "Plus Jakarta Sans",sans-serif;letter-spacing:-.05em;color:#FFFFFF}
.ph-title .ln{display:block;overflow:hidden;padding:0 .06em .1em 0}
.ph-title .ln>span{display:inline-block;animation:phLine 1.1s cubic-bezier(.16,1,.3,1) both}
.ph-title em{font-style:italic;color:#74B4D9}
.ph-lede{font-size:18px;line-height:1.65;color:#DDE7F0;max-width:520px}
.ph-chips{display:flex;flex-wrap:wrap;gap:10px}
.ph-chip{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;font:600 13px/1 Inter,sans-serif;color:#FFFFFF;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22)}
.ph-chip i{width:6px;height:6px;border-radius:50%;background:#74B4D9;display:block}
.ph-in{animation:phUp .9s cubic-bezier(.16,1,.3,1) both}
.ph-stage{position:relative;width:100%;aspect-ratio:1/.9;z-index:1}
.ph-curve{position:absolute;left:0;bottom:-1px;width:100%;height:clamp(34px,5.5vw,84px);display:block;z-index:3}
@keyframes phLine{from{transform:translateY(105%)}to{transform:none}}
@keyframes phUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}

/* mascot rig */
.mrig{position:absolute;pointer-events:none;will-change:transform}
.mrig .msh{position:absolute;left:50%;bottom:-3%;width:72%;height:8%;margin-left:-36%;border-radius:50%;background:radial-gradient(closest-side,rgba(5,22,58,.55),rgba(5,22,58,0));transform-origin:50% 50%}
.mrig .mbody{position:relative;transform-origin:50% 100%;will-change:transform}
.mrig .mbody img{display:block;height:auto;margin:0 auto;transition:opacity .14s linear;filter:drop-shadow(0 18px 24px rgba(5,22,58,.28))}
.mrig .mbody img.alt{position:absolute;left:50%;bottom:0;transform:translateX(-50%)}

/* shared stage bits */
.st-card{position:absolute;border-radius:22px;padding:16px 18px}
.st-live{display:inline-flex;align-items:center;gap:8px;font:600 12px/1 Inter,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#DDE7F0}
.st-live i{width:8px;height:8px;border-radius:50%;background:#74B4D9;display:block;animation:blink 1.4s ease-in-out infinite}
.st-num{font-variant-numeric:tabular-nums}
.st-pop{opacity:0;transform:translateY(16px) scale(.96);transition:opacity .5s ease,transform .7s cubic-bezier(.34,1.56,.64,1)}
.st-pop.on{opacity:1;transform:none}
.cf{position:absolute;left:0;top:0;width:9px;height:14px;border-radius:2px;pointer-events:none;animation:cfFly 1.5s cubic-bezier(.2,.7,.3,1) forwards}
@keyframes cfFly{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--dx),var(--dy)) rotate(var(--r));opacity:0}}

/* RankRush: exam window */
.rr-q{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.rr-q span{height:26px;border-radius:8px;background:rgba(255,255,255,.12);transition:background-color .25s ease,transform .25s ease}
.rr-q span.pick{background:#FFFFFF;transform:scale(1.04)}
.rr-bar{height:8px;border-radius:8px;background:rgba(255,255,255,.14);overflow:hidden}
.rr-bar b{display:block;height:100%;width:0;border-radius:8px;background:linear-gradient(90deg,#74B4D9,#FFFFFF)}

/* Features: orbit */
.fo-node{position:absolute;display:flex;align-items:center;gap:8px;padding:10px 14px 10px 10px;border-radius:999px;transform:translate(-50%,-50%);font:700 14px/1 "Plus Jakarta Sans",sans-serif;color:#FFFFFF;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.24);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:background-color .4s ease,color .4s ease,transform .6s cubic-bezier(.34,1.56,.64,1),box-shadow .4s ease;white-space:nowrap}
.fo-node .ic{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.16);transition:background-color .4s ease}
.fo-node.on{background:#FFFFFF;color:#10367D;transform:translate(-50%,-50%) scale(1.12);box-shadow:0 16px 40px rgba(5,22,58,.35),0 0 0 8px rgba(116,180,217,.25)}
.fo-node.on .ic{background:#10367D}
.fo-toast{position:absolute;min-width:190px;max-width:230px;padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.96);color:#10367D;box-shadow:0 18px 40px rgba(5,22,58,.3);font:600 13px/1.35 Inter,sans-serif;opacity:0;transform:translateY(10px) scale(.95);transition:opacity .35s ease,transform .5s cubic-bezier(.34,1.56,.64,1)}
.fo-toast.on{opacity:1;transform:none}
.fo-toast small{display:block;font:600 11px/1 Inter,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#1D5AA6;margin-bottom:6px}

/* Plans: switch */
.pl-switch{position:absolute;left:50%;top:0;transform:translateX(-50%);display:flex;padding:5px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);z-index:6}
.pl-switch button{position:relative;z-index:1;border:0;background:transparent;color:#FFFFFF;font:700 14px/1 "Plus Jakarta Sans",sans-serif;padding:12px 22px;border-radius:999px;cursor:pointer;transition:color .3s ease}
.pl-switch button[aria-pressed="true"]{color:#10367D}
.pl-switch button:focus-visible{outline:3px solid #74B4D9;outline-offset:2px}
.pl-switch .knob{position:absolute;top:5px;bottom:5px;left:5px;width:calc(50% - 5px);border-radius:999px;background:#FFFFFF;box-shadow:0 8px 20px rgba(5,22,58,.3);transition:transform .55s cubic-bezier(.34,1.56,.64,1)}
.pl-card{position:absolute;border-radius:28px;padding:24px;transition:transform .8s cubic-bezier(.16,1,.3,1),opacity .5s ease,filter .5s ease}
.pl-feat{display:flex;align-items:center;gap:10px;font:500 14px/1.3 Inter,sans-serif;opacity:.35;transform:translateX(-6px);transition:opacity .35s ease,transform .45s cubic-bezier(.34,1.56,.64,1)}
.pl-feat.on{opacity:1;transform:none}
.pl-feat .ck{flex:none;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#EBEBEB;transition:background-color .3s ease}
.pl-feat.on .ck{background:#1D5AA6}
.pl-peek{position:absolute;transition:transform .9s cubic-bezier(.34,1.56,.64,1)}

/* Colleges: podium */
.cg-bars{display:flex;align-items:flex-end;gap:10px;height:100%}
.cg-bars div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;height:100%;font:600 11px/1 Inter,sans-serif;color:#DDE7F0}
.cg-bars b{display:block;width:100%;border-radius:8px 8px 4px 4px;background:linear-gradient(180deg,#74B4D9,rgba(116,180,217,.35));height:0;transition:height 1s cubic-bezier(.34,1.3,.64,1)}
.cg-step{position:absolute;bottom:0;border-radius:14px 14px 0 0;display:flex;justify-content:center;padding-top:10px;font:800 26px/1 "Plus Jakarta Sans",sans-serif;transform-origin:50% 100%;transform:scaleY(0);transition:transform .9s cubic-bezier(.34,1.4,.64,1)}
.cg-step.on{transform:scaleY(1)}
.cg-medal{position:absolute;width:13%;aspect-ratio:1/1.35;transform-origin:50% 0;pointer-events:none;opacity:0}
.cg-cert{position:absolute;width:30%;padding:12px 14px;border-radius:14px;background:#FFFFFF;color:#10367D;box-shadow:0 16px 36px rgba(5,22,58,.3);font:700 12px/1.3 "Plus Jakarta Sans",sans-serif;opacity:0;transition:opacity .4s ease,transform .8s cubic-bezier(.34,1.56,.64,1)}
.cg-cert small{display:block;font:500 10px/1.3 Inter,sans-serif;color:#667085;margin-top:4px}

/* FAQ: thinking */
.fq-search{position:absolute;left:4%;right:4%;top:0;display:flex;align-items:center;gap:12px;padding:14px 18px;border-radius:999px;background:rgba(255,255,255,.96);color:#10367D;box-shadow:0 18px 40px rgba(5,22,58,.3);font:600 15px/1.2 Inter,sans-serif;z-index:4}
.fq-caret{display:inline-block;width:2px;height:1.1em;margin-left:2px;vertical-align:-2px;background:#1D5AA6;animation:blink 1s steps(1) infinite}
.fq-bubble{position:absolute;right:0;top:22%;width:50%;padding:16px 18px;border-radius:22px 22px 22px 6px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.26);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);font:500 14px/1.55 Inter,sans-serif;color:#FFFFFF;z-index:4}
.fq-dots{display:inline-flex;gap:5px;padding:4px 0}
.fq-dots i{width:7px;height:7px;border-radius:50%;background:#74B4D9;animation:fqDot 1s ease-in-out infinite}
.fq-dots i:nth-child(2){animation-delay:.15s}.fq-dots i:nth-child(3){animation-delay:.3s}
@keyframes fqDot{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-5px);opacity:1}}
.fq-q{position:absolute;font:800 28px/1 "Plus Jakarta Sans",sans-serif;color:#74B4D9;opacity:0;pointer-events:none;animation:fqRise 3.4s ease-out forwards}
@keyframes fqRise{0%{opacity:0;transform:translate(0,0) scale(.6) rotate(0)}15%{opacity:1}50%{transform:translate(calc(var(--dx)*.5),-70px) scale(1) rotate(calc(var(--r)*.5))}100%{opacity:0;transform:translate(var(--dx),-150px) scale(.9) rotate(var(--r))}}

@media (max-width:860px){
.ph-grid{grid-template-columns:minmax(0,1fr)}
.ph-copy{align-items:center;text-align:center}
.ph-chips{justify-content:center}
.ph-stage{max-width:540px;margin:8px auto 0}
}
@media (max-width:560px){
.fo-node{font-size:12px;padding:8px 11px 8px 8px}.fo-node .ic{width:24px;height:24px}
.fo-toast{min-width:150px;font-size:12px}
.pl-switch button{padding:10px 16px;font-size:13px}
.fq-bubble{width:58%;font-size:13px}
.ph-stage{aspect-ratio:1/1.14}
.st-card{padding:13px 14px}
.rr-exam{width:76%!important}
.rr-ring{width:21%!important}
.pl-card{padding:18px}
.pl-free{width:60%!important;top:16%!important}
.pl-pro{width:78%!important;top:36%!important}
.pl-feat{font-size:12.5px}
.cg-cert{width:44%;padding:10px 12px}
}
@media (prefers-reduced-motion:reduce){
.ph-title .ln>span,.ph-in,.st-live i,.fq-caret,.fq-dots i{animation:none}
.st-pop,.fo-node,.fo-toast,.pl-card,.pl-feat,.pl-peek,.cg-bars b,.cg-step,.cg-cert,.pl-switch .knob{transition:none}
}
`

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const easeOut = (t) => 1 - Math.pow(1 - t, 3)
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
export const prefersReduced = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
export const fmtInt = (n) => Math.round(n).toLocaleString("en-IN")

// ---- Mascot rig: a tiny animation engine for one mascot ----
export function makeRig(root, opts) {
    const body = root.querySelector(".mbody")
    const sh = root.querySelector(".msh")
    const imgs = Array.prototype.slice.call(root.querySelectorAll(".mbody img"))
    const reduce = prefersReduced()
    const s = {
        mode: opts.mode || "idle", // idle | typing | think
        gx: 0, gy: 0, // ground position (px, relative to the CSS position)
        look: 0, lookV: 0, lookT: 0, // head turn spring (-1..1)
        point: null, // fixed look target {x, y} in client px
        act: null, // running action
        seed: Math.random() * 1000,
        lean: 0,
    }
    let raf = 0, visible = true, last = performance.now(), dead = false, ptr = null

    const setPose = (i) => imgs.forEach((im, k) => (im.style.opacity = k === i ? "1" : "0"))

    // A jump with anticipation, stretch, a parabolic arc, squash on landing and a damped settle
    const jump = (o = {}) =>
        new Promise((res) => {
            const a = {
                kind: "jump",
                t0: performance.now(),
                dur: o.dur || 1100,
                h: o.h == null ? 80 : o.h,
                gx0: s.gx, gy0: s.gy,
                gx1: s.gx + (o.dx || 0), gy1: s.gy + (o.dy || 0),
                apex: false, landed: false,
                onApex: o.onApex, onLand: o.onLand, res,
            }
            if (reduce) {
                s.gx = a.gx1
                s.gy = a.gy1
                a.onApex && a.onApex()
                a.onLand && a.onLand()
                res()
                return
            }
            s.act = a
        })
    // A quick crouch-and-recover (a nod, a "hmm", a shrug)
    const bob = (o = {}) =>
        new Promise((res) => {
            if (reduce) return res()
            s.act = { kind: "bob", t0: performance.now(), dur: o.dur || 620, depth: o.depth || 0.08, res }
        })
    const teleport = (gx, gy) => {
        s.gx = gx
        s.gy = gy
    }

    const pose = (now) => {
        const t = (now - opts.t0) / 1000 + s.seed
        let y = 0, sx = 1, sy = 1, rot = 0
        // breathing and weight shift
        const br = Math.sin((t * Math.PI * 2) / 3.6)
        sy += 0.013 * br
        sx -= 0.0065 * br
        rot += 0.7 * Math.sin((t * Math.PI * 2) / 6.3)
        if (s.mode === "typing") {
            // quick, slightly irregular taps
            const tap = Math.abs(Math.sin(t * 9.5)) * (0.6 + 0.4 * Math.sin(t * 1.7))
            y -= 2.2 * tap
            rot += 0.5 * Math.sin(t * 4.3)
        } else if (s.mode === "think") {
            // slow head tilt that pauses at each side, like weighing an answer
            const ph = Math.sin((t * Math.PI * 2) / 5.2)
            rot += 3.2 * Math.sign(ph) * Math.pow(Math.abs(ph), 0.55)
            y -= 2 * Math.max(0, Math.sin(t * 0.9))
        }
        let air = 0
        const a = s.act
        if (a) {
            const p = clamp((now - a.t0) / a.dur, 0, 1)
            if (a.kind === "jump") {
                const C = 0.16, L = 0.24, A = 0.76, S = 0.84
                let gxNow = a.gx0, gyNow = a.gy0
                if (p < C) {
                    const q = easeOut(p / C)
                    sy *= 1 - 0.11 * q
                    sx *= 1 + 0.07 * q
                } else if (p < A) {
                    const q = (p - C) / (A - C) // whole flight incl. launch
                    const f = easeInOut(q)
                    gxNow = lerp(a.gx0, a.gx1, f)
                    gyNow = lerp(a.gy0, a.gy1, f)
                    air = a.h * 4 * q * (1 - q)
                    y -= air
                    const st = p < L ? (p - C) / (L - C) : 1 - (p - L) / (A - L)
                    sy *= 1 + 0.09 * clamp(st, 0, 1)
                    sx *= 1 - 0.05 * clamp(st, 0, 1)
                    rot += (a.gx1 - a.gx0) * 0.02 * Math.sin(q * Math.PI)
                    if (!a.apex && q >= 0.5) {
                        a.apex = true
                        a.onApex && a.onApex()
                    }
                } else {
                    gxNow = a.gx1
                    gyNow = a.gy1
                    if (!a.landed) {
                        a.landed = true
                        a.onLand && a.onLand()
                    }
                    const q = (p - A) / (1 - A)
                    const sq = q < (S - A) / (1 - A) ? Math.sin((q / ((S - A) / (1 - A))) * Math.PI * 0.5) : 1
                    const decay = Math.exp(-5 * q) * Math.cos(q * 14)
                    sy *= 1 - 0.13 * decay * sq
                    sx *= 1 + 0.08 * decay * sq
                }
                s.gx = gxNow
                s.gy = gyNow
                if (p >= 1) {
                    s.gx = a.gx1
                    s.gy = a.gy1
                    s.act = null
                    a.res()
                }
            } else if (a.kind === "bob") {
                const d = Math.sin(p * Math.PI) * Math.exp(-1.2 * p)
                sy *= 1 - a.depth * d
                sx *= 1 + a.depth * 0.6 * d
                rot += 3 * Math.sin(p * Math.PI * 2) * (1 - p)
                if (p >= 1) {
                    s.act = null
                    a.res()
                }
            }
        }
        return { y, sx, sy, rot, air }
    }

    const frame = (now) => {
        if (dead) return
        if (!visible) {
            raf = 0
            return
        }
        const dt = Math.min(48, now - last) / 16.67
        last = now
        // head-turn target: pointer first, then a fixed point of interest, then straight ahead
        const r = root.getBoundingClientRect()
        const cx = r.left + r.width / 2, cy = r.top + r.height * 0.3
        const tgt = ptr || s.point
        s.lookT = tgt ? clamp((tgt.x - cx) / Math.max(260, r.width * 1.4), -1, 1) : 0
        // spring with a touch of overshoot, like a real head turn
        s.lookV += (s.lookT - s.look) * 0.06 * dt
        s.lookV *= Math.pow(0.8, dt)
        s.look += s.lookV * dt
        const pz = reduce ? { y: 0, sx: 1, sy: 1, rot: 0, air: 0 } : pose(now)
        const turn = reduce ? 0 : s.look
        const rot = pz.rot + turn * 5
        const shift = turn * Math.min(14, r.width * 0.04)
        root.style.transform = `translate3d(${s.gx.toFixed(1)}px,${s.gy.toFixed(1)}px,0)`
        body.style.transform = `translate3d(${shift.toFixed(2)}px,${pz.y.toFixed(2)}px,0) rotate(${rot.toFixed(2)}deg) scale(${pz.sx.toFixed(4)},${pz.sy.toFixed(4)})`
        if (sh) {
            const k = clamp(1 - pz.air / 160, 0.45, 1)
            sh.style.transform = `translateX(${(shift * 0.5).toFixed(1)}px) scale(${k.toFixed(3)},${k.toFixed(3)})`
            sh.style.opacity = (0.35 + 0.65 * k).toFixed(2)
        }
        raf = requestAnimationFrame(frame)
    }
    const start = () => {
        if (!raf && !dead) {
            last = performance.now()
            raf = requestAnimationFrame(frame)
        }
    }

    const offs = []
    if (opts.track) {
        const mv = (e) => (ptr = { x: e.clientX, y: e.clientY })
        const lv = () => (ptr = null)
        opts.track.addEventListener("pointermove", mv)
        opts.track.addEventListener("pointerleave", lv)
        offs.push(() => {
            opts.track.removeEventListener("pointermove", mv)
            opts.track.removeEventListener("pointerleave", lv)
        })
    }
    let io = null
    if ("IntersectionObserver" in window) {
        io = new IntersectionObserver((es) => {
            visible = es[0].isIntersecting
            if (visible) start()
        })
        io.observe(root)
    }
    setPose(0)
    start()

    return {
        jump, bob, setPose, teleport,
        setMode: (m) => (s.mode = m),
        lookAt: (pt) => (s.point = pt),
        get gx() { return s.gx },
        get gy() { return s.gy },
        destroy: () => {
            dead = true
            cancelAnimationFrame(raf)
            if (io) io.disconnect()
            offs.forEach((f) => f())
        },
    }
}

// Mascot element with stacked poses (pose 0 shows first)
export function Mascot({ poses, rigRef, trackRef, mode, style, label }) {
    const ref = React.useRef(null)
    React.useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return
        const rig = makeRig(ref.current, { mode, track: trackRef && trackRef.current, t0: performance.now() })
        if (rigRef) rigRef.current = rig
        return () => rig.destroy()
    }, [])
    return (
        <div ref={ref} className="mrig" style={style} role="img" aria-label={label}>
            <span className="msh" aria-hidden="true"></span>
            <div className="mbody">
                {poses.map((p, i) => (
                    <img key={i} className={i ? "alt" : undefined} src={p.src} alt="" decoding="async" style={{ width: (p.w || 100) + "%", opacity: i ? 0 : 1 }} />
                ))}
            </div>
        </div>
    )
}

// Runs a looping story only while the hero is on screen
export function useStory(ref, story) {
    React.useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return
        let alive = true
        let vis = true
        const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => (vis = es[0].isIntersecting)) : null
        if (io) io.observe(ref.current)
        const wait = (ms) =>
            new Promise((res) => {
                const go = () => {
                    if (!alive) return
                    if (!vis || document.hidden) return setTimeout(go, 300)
                    setTimeout(() => alive && res(), ms)
                }
                go()
            })
        const tween = (ms, fn, ease = easeInOut) =>
            new Promise((res) => {
                const t0 = performance.now()
                const tick = (now) => {
                    if (!alive) return
                    const p = clamp((now - t0) / ms, 0, 1)
                    fn(ease(p), p)
                    if (p < 1) requestAnimationFrame(tick)
                    else res()
                }
                requestAnimationFrame(tick)
            })
        story({ wait, tween, alive: () => alive, reduce: prefersReduced() })
        return () => {
            alive = false
            if (io) io.disconnect()
        }
    }, [])
}

// Confetti burst at a point inside a container
export function burst(box, x, y, n = 34) {
    if (!box || prefersReduced()) return
    const colors = ["#74B4D9", "#FFFFFF", "#EBEBEB", "#1D5AA6", "#B7D8EC"]
    for (let i = 0; i < n; i++) {
        const el = document.createElement("span")
        el.className = "cf"
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3
        const sp = 90 + Math.random() * 170
        el.style.left = x + "px"
        el.style.top = y + "px"
        el.style.background = colors[i % colors.length]
        el.style.setProperty("--dx", (Math.cos(ang) * sp).toFixed(0) + "px")
        el.style.setProperty("--dy", (Math.sin(ang) * sp + 140).toFixed(0) + "px")
        el.style.setProperty("--r", ((Math.random() - 0.5) * 900).toFixed(0) + "deg")
        el.style.animationDelay = (Math.random() * 0.12).toFixed(2) + "s"
        box.appendChild(el)
        setTimeout(() => el.remove(), 1800)
    }
}

// ---- Shared hero layout ----
export function PageHero({ kicker, line1, line2, lede, primary, secondary, chips, label, children, heroRef }) {
    const localRef = React.useRef(null)
    const ref = heroRef || localRef
    const glowRef = React.useRef(null)
    React.useEffect(() => {
        const el = ref.current
        const glow = glowRef.current
        if (typeof window === "undefined" || !el || !glow || prefersReduced()) return
        let tx = 0.62, ty = 0.4, x = tx, y = ty, raf = 0, on = true
        const mv = (e) => {
            const r = el.getBoundingClientRect()
            tx = (e.clientX - r.left) / r.width
            ty = (e.clientY - r.top) / r.height
        }
        const tick = () => {
            if (!on) return
            x += (tx - x) * 0.05
            y += (ty - y) * 0.05
            const r = el.getBoundingClientRect()
            if (r.bottom > 0) glow.style.transform = `translate3d(${(x * r.width).toFixed(0)}px,${(y * r.height).toFixed(0)}px,0)`
            raf = requestAnimationFrame(tick)
        }
        el.addEventListener("pointermove", mv)
        raf = requestAnimationFrame(tick)
        return () => {
            on = false
            cancelAnimationFrame(raf)
            el.removeEventListener("pointermove", mv)
        }
    }, [])
    return (
        <header id="top" ref={ref} className="phero" aria-label={label}>
            <div className="ph-dots" aria-hidden="true"></div>
            <div className="ph-beam" aria-hidden="true" style={{ left: "8%" }}></div>
            <div className="ph-beam" aria-hidden="true" style={{ right: "12%", width: "120px", opacity: 0.7 }}></div>
            <div className="ph-glow" ref={glowRef} aria-hidden="true"></div>
            <div className="wrap ph-grid">
                <div className="ph-copy">
                    <span className="kicker ph-in" style={{ color: "#74B4D9" }}>
                        {kicker}
                    </span>
                    <h1 className="ph-title">
                        <span className="ln">
                            <span style={{ animationDelay: ".05s" }}>{line1}</span>
                        </span>
                        <span className="ln">
                            <span style={{ animationDelay: ".17s" }}>
                                <em>{line2}</em>
                            </span>
                        </span>
                    </h1>
                    <p className="ph-lede ph-in" style={{ animationDelay: ".3s" }}>
                        {lede}
                    </p>
                    <div className="ph-in hero-intro-btns" style={{ display: "flex", flexWrap: "wrap", gap: "12px", animationDelay: ".42s" }}>
                        <Cta href={primary.href} white>
                            {primary.label}
                        </Cta>
                        {secondary && (
                            <Ghost href={secondary.href} light>
                                {secondary.label}
                            </Ghost>
                        )}
                    </div>
                    {chips && (
                        <div className="ph-chips ph-in" style={{ animationDelay: ".54s", justifyContent: "inherit" }}>
                            {chips.map((c) => (
                                <span key={c} className="ph-chip">
                                    <i aria-hidden="true"></i>
                                    {c}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="ph-stage ph-in" style={{ animationDelay: ".2s" }}>
                    {children}
                </div>
            </div>
            <svg className="ph-curve" aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none">
                <path d="M0 90 L0 64 Q720 -34 1440 64 L1440 90 Z" fill="#FFFFFF"></path>
            </svg>
        </header>
    )
}

// =====================================================================
// RankRush: the exam window counts down, the paper fills in, results land
// and the mascot leaps from his laptop into a celebration.
// =====================================================================
export const RR_START = new Date("2026-11-15T09:00:00+05:30").getTime()

export function RankRushStage({ heroRef }) {
    const box = React.useRef(null)
    const rig = React.useRef(null)
    const cd = React.useRef(null)
    const qn = React.useRef(null)
    const bar = React.useRef(null)
    const ring = React.useRef(null)
    const clock = React.useRef(null)
    const opts = React.useRef(null)
    const status = React.useRef(null)
    const rank = React.useRef(null)
    const air = React.useRef(null)

    // real countdown to RankRush #1
    React.useEffect(() => {
        const el = cd.current
        if (!el) return
        const tick = () => {
            const ms = RR_START - Date.now()
            if (ms <= 0) {
                el.textContent = "Live now"
                return
            }
            const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, sec = Math.floor(ms / 1e3) % 60
            const p = (n) => String(n).padStart(2, "0")
            el.textContent = `${d}d ${p(h)}h ${p(m)}m ${p(sec)}s`
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    useStory(box, async ({ wait, tween, reduce }) => {
        const C = 2 * Math.PI * 46
        const setProg = (p) => {
            const q = Math.min(75, Math.max(1, Math.round(p * 75)))
            if (qn.current) qn.current.textContent = String(q)
            if (bar.current) bar.current.style.width = (p * 100).toFixed(1) + "%"
            if (ring.current) ring.current.style.strokeDashoffset = (C * p).toFixed(1)
            const left = Math.round((1 - p) * 180)
            if (clock.current) clock.current.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`
        }
        const pick = (i) => {
            const kids = opts.current ? opts.current.children : []
            for (let k = 0; k < kids.length; k++) kids[k].classList.toggle("pick", k === i)
        }
        for (;;) {
            const r = rig.current
            if (!r) return
            rank.current.classList.remove("on")
            status.current.textContent = "Paper in progress"
            r.setMode("typing")
            setProg(0)
            if (reduce) {
                setProg(1)
                r.setPose(1)
                rank.current.classList.add("on")
                air.current.textContent = "1,284"
                status.current.textContent = "Results declared · 20:00"
                return
            }
            // answering questions
            let last = -1
            await tween(5200, (e) => {
                setProg(e)
                const step = Math.floor(e * 18)
                if (step !== last) {
                    last = step
                    pick((step * 7) % 4)
                }
            }, (t) => t)
            pick(-1)
            r.setMode("idle")
            status.current.textContent = "Submitted · results at 20:00"
            await r.bob({ depth: 0.06 })
            await wait(500)
            // results
            status.current.textContent = "Results declared"
            rank.current.classList.add("on")
            await tween(1500, (e) => (air.current.textContent = fmtInt(lerp(21560, 1284, e))), easeOut)
            await wait(200)
            const bx = box.current.getBoundingClientRect()
            const mr = box.current.querySelector(".mrig").getBoundingClientRect()
            await r.jump({
                h: 96,
                dur: 1150,
                onApex: () => r.setPose(1),
                onLand: () => burst(box.current, mr.left - bx.left + mr.width * 0.5, mr.top - bx.top + mr.height * 0.25),
            })
            await wait(2600)
            await r.jump({ h: 34, dur: 820, onApex: () => r.setPose(0) })
            await wait(700)
        }
    })

    return (
        <div ref={box} style={{ position: "absolute", inset: 0 }}>
            {/* exam window */}
            <div className="st-card glass-dark rr-exam" style={{ left: "0", top: "2%", width: "64%", display: "flex", flexDirection: "column", gap: "14px", zIndex: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <span className="st-live">
                        <i></i>
                        {"RankRush #1 · JEE"}
                    </span>
                    <span style={{ font: "500 12px/1 Inter, sans-serif", color: "#C3D3E4" }} ref={status}>
                        {"Paper in progress"}
                    </span>
                </div>
                <div>
                    <span style={{ display: "block", font: "500 12px/1 Inter, sans-serif", color: "#C3D3E4" }}>{"Starts in"}</span>
                    <span ref={cd} className="st-num" style={{ display: "block", marginTop: "6px", font: "800 clamp(20px, 2.4vw, 28px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.02em" }}>
                        {"—"}
                    </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", font: "600 13px/1 Inter, sans-serif", color: "#DDE7F0" }}>
                    <span>
                        {"Question "}
                        <b ref={qn} className="st-num" style={{ color: "#FFFFFF" }}>
                            {"1"}
                        </b>
                        {" / 75"}
                    </span>
                    <span className="st-num" style={{ color: "#74B4D9" }}>
                        {"Sun · 15 Nov"}
                    </span>
                </div>
                <div className="rr-bar">
                    <b ref={bar}></b>
                </div>
                <div className="rr-q" ref={opts} aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* timer ring */}
            <div className="rr-ring" style={{ position: "absolute", right: "2%", top: "4%", width: "28%", aspectRatio: "1/1", zIndex: 2 }} aria-hidden="true">
                <svg viewBox="0 0 110 110" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                    <circle cx="55" cy="55" r="46" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.16)" strokeWidth="8"></circle>
                    <circle ref={ring} cx="55" cy="55" r="46" fill="none" stroke="#74B4D9" strokeWidth="8" strokeLinecap="round" strokeDasharray={(2 * Math.PI * 46).toFixed(1)} strokeDashoffset="0"></circle>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>
                    <span>
                        <b ref={clock} className="st-num" style={{ display: "block", font: "800 clamp(16px, 2vw, 22px)/1 'Plus Jakarta Sans', sans-serif" }}>
                            {"3:00"}
                        </b>
                        <span style={{ display: "block", marginTop: "4px", font: "500 10px/1 Inter, sans-serif", color: "#C3D3E4" }}>{"hrs left"}</span>
                    </span>
                </div>
            </div>
            {/* rank card */}
            <div ref={rank} className="st-card glass st-pop" style={{ left: "0", bottom: "6%", width: "44%", zIndex: 4, color: "#10367D" }}>
                <span style={{ display: "block", font: "600 11px/1 Inter, sans-serif", letterSpacing: ".08em", textTransform: "uppercase", color: "#1D5AA6" }}>{"Result night · sample"}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "10px" }}>
                    <span style={{ font: "800 clamp(26px, 3.2vw, 40px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>
                        {"AIR "}
                        <span ref={air} className="st-num">
                            {"21,560"}
                        </span>
                    </span>
                </span>
                <span style={{ display: "block", marginTop: "8px", font: "500 12px/1.3 Inter, sans-serif", color: "#475467" }}>{"of 21,560 · 94.05 percentile"}</span>
            </div>
            <Mascot
                rigRef={rig}
                trackRef={heroRef}
                mode="typing"
                label="The Scorely mascot sitting a RankRush paper, then celebrating his rank."
                poses={[{ src: IMG_WORKING }, { src: IMG_ACHIEVED, w: 92 }]}
                style={{ right: "0", bottom: "0", width: "60%", zIndex: 3 }}
            />
        </div>
    )
}

// =====================================================================
// Features: the Test → Rank → Fix → Repeat loop orbits the mascot,
// who turns his head to follow each step and celebrates a closed loop.
// =====================================================================
export const FO_STEPS = [
    { k: "Test", ang: -90, tip: "Practice test", body: "30 questions · full report", icon: "M9 4h6M8 4h8v16H8z M11 9h4 M11 13h4 M11 17h2" },
    { k: "Rank", ang: 0, tip: "RankRush", body: "AIR 1,284 · 94.05 percentile", icon: "M5 20V11 M12 20V5 M19 20v-6" },
    { k: "Fix", ang: 90, tip: "Weak-topic plan", body: "3 chapters cost 38 marks", icon: "M4 12l5 5L20 6" },
    { k: "Repeat", ang: 180, tip: "Next Sunday", body: "Beat your own rank", icon: "M4 12a8 8 0 0 1 14-5.3L20 9 M20 4v5h-5 M20 12a8 8 0 0 1-14 5.3L4 15 M4 20v-5h5" },
]

export function FeaturesStage({ heroRef }) {
    const box = React.useRef(null)
    const tilt = React.useRef(null)
    const rig = React.useRef(null)
    const comet = React.useRef(null)
    const spin = React.useRef(null)
    const nodes = React.useRef([])
    const toast = React.useRef(null)
    const tTip = React.useRef(null)
    const tBody = React.useRef(null)
    const R = 41 // orbit radius, % of the stage

    // 3D tilt following the pointer
    React.useEffect(() => {
        const el = heroRef && heroRef.current
        const t = tilt.current
        if (!el || !t || prefersReduced()) return
        let rx = 0, ry = 0, tx = 0, ty = 0, raf = 0, on = true
        const mv = (e) => {
            const r = t.getBoundingClientRect()
            tx = clamp((e.clientX - (r.left + r.width / 2)) / r.width, -1, 1)
            ty = clamp((e.clientY - (r.top + r.height / 2)) / r.height, -1, 1)
        }
        const lv = () => (tx = ty = 0)
        const tick = () => {
            if (!on) return
            rx += (ty - rx) * 0.06
            ry += (tx - ry) * 0.06
            t.style.transform = `perspective(1100px) rotateX(${(-rx * 9).toFixed(2)}deg) rotateY(${(ry * 11).toFixed(2)}deg)`
            raf = requestAnimationFrame(tick)
        }
        el.addEventListener("pointermove", mv)
        el.addEventListener("pointerleave", lv)
        raf = requestAnimationFrame(tick)
        return () => {
            on = false
            cancelAnimationFrame(raf)
            el.removeEventListener("pointermove", mv)
            el.removeEventListener("pointerleave", lv)
        }
    }, [])

    useStory(box, async ({ wait, tween, reduce, alive }) => {
        let ang = -90
        const setComet = (a) => {
            if (comet.current) comet.current.setAttribute("transform", `rotate(${a.toFixed(2)} 200 200)`)
        }
        const show = (i) => {
            nodes.current.forEach((n, k) => n && n.classList.toggle("on", k === i))
            const s = FO_STEPS[i]
            const n = nodes.current[i]
            if (rig.current && n) {
                const r = n.getBoundingClientRect()
                rig.current.lookAt({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
            }
            const tt = toast.current
            if (tt) {
                tt.classList.remove("on")
                tTip.current.textContent = s.tip
                tBody.current.textContent = s.body
                const rad = (s.ang * Math.PI) / 180
                const x = 50 + Math.cos(rad) * R, y = 50 + Math.sin(rad) * R
                tt.style.left = clamp(x + (Math.cos(rad) >= 0 ? -34 : 4), 0, 56) + "%"
                tt.style.top = clamp(y + (Math.sin(rad) > 0.5 ? -26 : 8), 2, 76) + "%"
                requestAnimationFrame(() => tt.classList.add("on"))
            }
        }
        if (reduce) {
            show(2)
            return
        }
        let spinA = 0
        const spinTick = () => {
            if (!alive()) return
            spinA = (spinA + 0.06) % 360
            if (spin.current) spin.current.setAttribute("transform", `rotate(${spinA.toFixed(2)} 200 200)`)
            requestAnimationFrame(spinTick)
        }
        requestAnimationFrame(spinTick)
        for (;;) {
            for (let i = 0; i < FO_STEPS.length; i++) {
                const to = FO_STEPS[i].ang + (i === 0 && ang > 0 ? 360 : 0)
                const from = ang
                await tween(900, (e) => setComet(lerp(from, to, e)))
                ang = to % 360 === 270 ? -90 : to
                show(i)
                if (rig.current) rig.current.bob({ depth: 0.05, dur: 520 })
                await wait(1700)
            }
            // loop closed: a happy hop with a thumbs-up
            const r = rig.current
            if (r) {
                r.lookAt(null)
                await r.jump({ h: 70, dur: 1050, onApex: () => r.setPose(1) })
                await wait(1400)
                await r.jump({ h: 26, dur: 760, onApex: () => r.setPose(0) })
            }
        }
    })

    return (
        <div ref={box} style={{ position: "absolute", inset: 0 }}>
            <div ref={tilt} style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
                <svg viewBox="0 0 400 400" aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "100%", height: "100%", transform: "translate(-50%,-50%)", overflow: "visible" }}>
                    <defs>
                        <linearGradient id="foComet" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#74B4D9" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="#FFFFFF"></stop>
                        </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="164" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="26"></circle>
                    <g ref={spin}>
                        <circle cx="200" cy="200" r="164" fill="none" stroke="rgba(116,180,217,.6)" strokeWidth="1.5" strokeDasharray="2 9" strokeLinecap="round"></circle>
                        <circle cx="200" cy="200" r="118" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1"></circle>
                    </g>
                    <g ref={comet} transform="rotate(-90 200 200)">
                        <path d="M364 200 A164 164 0 0 0 296 67" fill="none" stroke="url(#foComet)" strokeWidth="6" strokeLinecap="round" transform="rotate(54 200 200)"></path>
                        <circle cx="364" cy="200" r="9" fill="#FFFFFF"></circle>
                        <circle cx="364" cy="200" r="18" fill="#74B4D9" opacity=".35"></circle>
                    </g>
                </svg>
                {FO_STEPS.map((s, i) => {
                    const rad = (s.ang * Math.PI) / 180
                    return (
                        <div key={s.k} ref={(el) => (nodes.current[i] = el)} className="fo-node" style={{ left: 50 + Math.cos(rad) * R + "%", top: 50 + Math.sin(rad) * R + "%", zIndex: 4 }}>
                            <span className="ic" aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={s.icon}></path>
                                </svg>
                            </span>
                            {s.k}
                        </div>
                    )
                })}
                <div ref={toast} className="fo-toast" style={{ zIndex: 5 }} aria-live="polite">
                    <small ref={tTip}>{"Practice test"}</small>
                    <span ref={tBody}>{"30 questions · full report"}</span>
                </div>
                <Mascot
                    rigRef={rig}
                    trackRef={heroRef}
                    mode="idle"
                    label="The Scorely mascot following the test, rank, fix and repeat loop."
                    poses={[{ src: IMG_THINK }, { src: IMG_THUMBS, w: 104 }]}
                    style={{ left: "32%", top: "24%", width: "36%", zIndex: 3 }}
                />
            </div>
        </div>
    )
}

// =====================================================================
// Plans: a Free / Pro switch you can flip. Pro rolls the price, ticks every
// feature and the mascot springs up from behind the card with a thumbs-up.
// =====================================================================
export const PL_FEATS = ["Every RankRush included", "Practice builder + reports", "Daily Dose and weak-topic plan", "AI Mentor and previous papers"]

export function PlansStage({ heroRef }) {
    const box = React.useRef(null)
    const rig = React.useRef(null)
    const card = React.useRef(null)
    const price = React.useRef(null)
    const feats = React.useRef([])
    const peek = React.useRef(null)
    const [pro, setPro] = React.useState(false)
    const user = React.useRef(false)
    const proRef = React.useRef(false)
    const anim = React.useRef(0)

    // card tilt
    React.useEffect(() => {
        const el = heroRef && heroRef.current
        const c = card.current
        if (!el || !c || prefersReduced()) return
        let rx = 0, ry = 0, tx = 0, ty = 0, raf = 0, on = true
        const mv = (e) => {
            const r = c.getBoundingClientRect()
            tx = clamp((e.clientX - (r.left + r.width / 2)) / r.width, -1, 1)
            ty = clamp((e.clientY - (r.top + r.height / 2)) / r.height, -1, 1)
        }
        const lv = () => (tx = ty = 0)
        const tick = () => {
            if (!on) return
            rx += (ty - rx) * 0.07
            ry += (tx - ry) * 0.07
            c.style.setProperty("--tilt", `perspective(900px) rotateX(${(-rx * 8).toFixed(2)}deg) rotateY(${(ry * 10).toFixed(2)}deg)`)
            raf = requestAnimationFrame(tick)
        }
        el.addEventListener("pointermove", mv)
        el.addEventListener("pointerleave", lv)
        raf = requestAnimationFrame(tick)
        return () => {
            on = false
            cancelAnimationFrame(raf)
            el.removeEventListener("pointermove", mv)
            el.removeEventListener("pointerleave", lv)
        }
    }, [])

    // react to the switch: roll the price, tick features, move the mascot
    React.useEffect(() => {
        proRef.current = pro
        const id = ++anim.current
        const reduce = prefersReduced()
        const from = pro ? 0 : 749
        const to = pro ? 749 : 0
        const t0 = performance.now()
        const roll = (now) => {
            if (id !== anim.current) return
            const p = reduce ? 1 : clamp((now - t0) / 900, 0, 1)
            if (price.current) price.current.textContent = "₹" + fmtInt(lerp(from, to, easeOut(p)))
            if (p < 1) requestAnimationFrame(roll)
        }
        requestAnimationFrame(roll)
        feats.current.forEach((f, i) => {
            if (!f) return
            if (pro) setTimeout(() => id === anim.current && f.classList.add("on"), reduce ? 0 : 260 + i * 170)
            else f.classList.remove("on")
        })
        const r = rig.current
        const pk = peek.current
        if (!r || !pk) return
        if (pro) {
            pk.style.transform = "translateY(0)"
            setTimeout(() => {
                if (id !== anim.current) return
                r.setPose(1)
                r.bob({ depth: 0.1, dur: 700 })
            }, reduce ? 0 : 650)
        } else {
            r.setPose(0)
            r.bob({ depth: 0.12, dur: 420 }).then(() => {
                if (id === anim.current) pk.style.transform = "translateY(78%)"
            })
        }
    }, [pro])

    // autoplay until the visitor uses the switch
    useStory(box, async ({ wait, reduce }) => {
        if (reduce) return setPro(true)
        await wait(900)
        let cur = false
        for (;;) {
            if (user.current) return
            cur = !cur
            setPro(cur)
            await wait(cur ? 4200 : 2600)
        }
    })

    const choose = (v) => {
        user.current = true
        setPro(v)
    }

    return (
        <div ref={box} style={{ position: "absolute", inset: 0 }}>
            <div className="pl-switch" role="group" aria-label="Show plan">
                <span className="knob" aria-hidden="true" style={{ transform: pro ? "translateX(100%)" : "none" }}></span>
                <button type="button" aria-pressed={!pro} onClick={() => choose(false)}>
                    {"Free"}
                </button>
                <button type="button" aria-pressed={pro} onClick={() => choose(true)}>
                    {"Pro"}
                </button>
            </div>
            {/* Free card, behind */}
            <div
                className="pl-card pl-free glass-dark"
                style={{
                    left: "2%",
                    top: "20%",
                    width: "52%",
                    zIndex: pro ? 1 : 3,
                    transform: pro ? "translate(-4%, 6%) rotate(-7deg) scale(.92)" : "rotate(-3deg)",
                    opacity: pro ? 0.6 : 1,
                }}
            >
                <span style={{ font: "700 18px/1 'Plus Jakarta Sans', sans-serif" }}>{"Free"}</span>
                <span style={{ display: "block", marginTop: "12px", font: "800 clamp(32px, 4vw, 48px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>{"₹0"}</span>
                <span style={{ display: "block", marginTop: "10px", font: "500 13px/1.45 Inter, sans-serif", color: "#DDE7F0" }}>{"Pay per RankRush you take. Results, challenges and alerts included."}</span>
            </div>
            {/* mascot peeking behind the Pro card */}
            <div ref={peek} className="pl-peek" style={{ right: "2%", top: "4%", width: "34%", height: "46%", zIndex: 1, transform: "translateY(78%)" }}>
                <Mascot
                    rigRef={rig}
                    trackRef={heroRef}
                    mode="idle"
                    label="The Scorely mascot popping up with a thumbs-up when Pro is chosen."
                    poses={[{ src: IMG_THINK, w: 86 }, { src: IMG_THUMBS }]}
                    style={{ left: 0, bottom: 0, width: "100%" }}
                />
            </div>
            {/* Pro card, front */}
            <div
                ref={card}
                className="pl-card pl-pro"
                style={{
                    right: "0",
                    top: "38%",
                    width: "62%",
                    zIndex: pro ? 4 : 2,
                    background: "#FFFFFF",
                    color: "#10367D",
                    boxShadow: pro ? "0 40px 80px rgba(5,22,58,.45), 0 0 0 6px rgba(116,180,217,.35)" : "0 24px 50px rgba(5,22,58,.3)",
                    transform: pro ? "var(--tilt, none)" : "translate(6%, 8%) rotate(4deg) scale(.94)",
                    filter: pro ? "none" : "saturate(.6)",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ font: "700 18px/1 'Plus Jakarta Sans', sans-serif" }}>{"Pro"}</span>
                    <span style={{ font: "600 11px/1 Inter, sans-serif", padding: "7px 10px", borderRadius: "999px", background: "#10367D", color: "#FFFFFF" }}>{"Most popular"}</span>
                </div>
                <span style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "12px" }}>
                    <span ref={price} className="st-num" style={{ font: "800 clamp(34px, 4.4vw, 54px)/1 'Plus Jakarta Sans', sans-serif", letterSpacing: "-.04em" }}>
                        {"₹0"}
                    </span>
                    <span style={{ font: "500 13px/1 Inter, sans-serif", color: "#667085" }}>{"+ GST / year"}</span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                    {PL_FEATS.map((f, i) => (
                        <span key={f} ref={(el) => (feats.current[i] = el)} className="pl-feat">
                            <span className="ck" aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12l5 5 9-10"></path>
                                </svg>
                            </span>
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// =====================================================================
// Colleges: division results rise, a podium builds, the mascot leaps onto
// the top step, and a medal drops and swings on its ribbon.
// =====================================================================
export function CollegesStage({ heroRef }) {
    const box = React.useRef(null)
    const rig = React.useRef(null)
    const bars = React.useRef([])
    const steps = React.useRef([])
    const medal = React.useRef(null)
    const certs = React.useRef([])
    const label = React.useRef(null)
    const BAR_V = [62, 78, 54, 88]

    useStory(box, async ({ wait, tween, reduce }) => {
        const setBars = (on) => bars.current.forEach((b, i) => b && (b.style.height = on ? BAR_V[i] + "%" : "0%"))
        const setSteps = (on) => steps.current.forEach((s) => s && s.classList.toggle("on", on))
        const setCerts = (on) =>
            certs.current.forEach((c, i) => {
                if (!c) return
                c.style.opacity = on ? "1" : "0"
                c.style.transform = on ? `rotate(${i ? 5 : -6}deg)` : `translateX(${i ? 40 : -40}px) rotate(${i ? 14 : -14}deg)`
            })
        // from the mascot's resting spot to the centre of the top step (layout offsets, so
        // the jump lands in the right place whatever is still animating)
        const groundGap = () => {
            const st = steps.current[1]
            const m = box.current.querySelector(".mrig")
            return { dx: st.offsetLeft + st.offsetWidth / 2 - (m.offsetLeft + m.offsetWidth / 2), dy: -st.offsetHeight + 2 }
        }
        for (;;) {
            const r = rig.current
            if (!r) return
            r.teleport(0, 0)
            r.setPose(0)
            setBars(false)
            setSteps(false)
            setCerts(false)
            medal.current.style.opacity = "0"
            label.current.textContent = "Class mock · marking"
            if (reduce) {
                setBars(true)
                setSteps(true)
                setCerts(true)
                label.current.textContent = "Toppers declared"
                const g = groundGap()
                r.teleport(g.dx, g.dy)
                r.setPose(1)
                medal.current.style.opacity = "1"
                return
            }
            await wait(500)
            setBars(true)
            await wait(1300)
            label.current.textContent = "Toppers declared"
            setSteps(true)
            await wait(900)
            // the leap onto the top step
            const g = groundGap()
            r.lookAt(null)
            await r.bob({ depth: 0.05, dur: 400 })
            await r.jump({ h: 110, dur: 1250, dx: g.dx, dy: g.dy, onApex: () => r.setPose(1) })
            // medal drops and swings like it hangs on a ribbon
            const m = medal.current
            const mb = box.current.getBoundingClientRect()
            const mr = box.current.querySelector(".mrig").getBoundingClientRect()
            const mw = m.getBoundingClientRect().width
            m.style.left = ((mr.left - mb.left + mr.width * 0.5 - mw / 2) / mb.width) * 100 + "%"
            m.style.top = ((mr.top - mb.top + mr.height * 0.3) / mb.height) * 100 + "%"
            m.style.opacity = "1"
            await tween(520, (e) => (m.style.transform = `translateY(${((1 - e) * -260).toFixed(0)}px)`), (t) => t * t)
            burst(box.current, mr.left - mb.left + mr.width * 0.5, mr.top - mb.top + mr.height * 0.2, 28)
            setCerts(true)
            await tween(2400, (_, p) => {
                const th = 26 * Math.exp(-2.3 * p) * Math.cos(p * 15)
                m.style.transform = `rotate(${th.toFixed(2)}deg)`
            }, (t) => t)
            await wait(1600)
            // back down, ready for the next class mock
            m.style.opacity = "0"
            setCerts(false)
            await r.jump({ h: 50, dur: 950, dx: -r.gx, dy: -r.gy, onApex: () => r.setPose(0) })
            await wait(700)
        }
    })

    return (
        <div ref={box} style={{ position: "absolute", inset: 0 }}>
            {/* division board */}
            <div className="st-card glass-dark" style={{ left: "6%", right: "6%", top: "0", height: "44%", display: "flex", flexDirection: "column", gap: "10px", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="st-live">
                        <i></i>
                        <span ref={label}>{"Class mock · marking"}</span>
                    </span>
                    <span style={{ font: "500 12px/1 Inter, sans-serif", color: "#C3D3E4" }}>{"Physics · Div A–D"}</span>
                </div>
                <div className="cg-bars" style={{ flex: 1, minHeight: 0 }}>
                    {["Div A", "Div B", "Div C", "Div D"].map((d, i) => (
                        <div key={d}>
                            <b ref={(el) => (bars.current[i] = el)} style={{ transitionDelay: i * 0.12 + "s" }}></b>
                            <span>{d}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* podium */}
            {[
                { n: "2", l: "37%", w: "17%", h: "17%", bg: "rgba(255,255,255,.16)", c: "#FFFFFF", d: ".1s" },
                { n: "1", l: "55%", w: "19%", h: "25%", bg: "#FFFFFF", c: "#10367D", d: "0s" },
                { n: "3", l: "75%", w: "17%", h: "12%", bg: "rgba(255,255,255,.1)", c: "#DDE7F0", d: ".2s" },
            ].map((s, i) => (
                <div key={s.n} ref={(el) => (steps.current[i] = el)} className="cg-step" style={{ left: s.l, width: s.w, height: s.h, background: s.bg, color: s.c, transitionDelay: s.d, zIndex: 2 }}>
                    {s.n}
                </div>
            ))}
            {/* certificates */}
            <div ref={(el) => (certs.current[0] = el)} className="cg-cert" style={{ left: "0", top: "51%", zIndex: 5 }}>
                {"Certificate of merit"}
                <small>{"Topper · Div D"}</small>
            </div>
            <div ref={(el) => (certs.current[1] = el)} className="cg-cert" style={{ left: "3%", top: "68%", zIndex: 5 }}>
                {"Badge unlocked"}
                <small>{"Top 1% this RankRush"}</small>
            </div>
            <Mascot
                rigRef={rig}
                trackRef={heroRef}
                mode="idle"
                label="The Scorely mascot leaping onto the top step of the podium as toppers are declared."
                poses={[{ src: IMG_THUMBS }, { src: IMG_ACHIEVED, w: 112 }]}
                style={{ left: "4%", bottom: "0", width: "30%", zIndex: 4 }}
            />
            <svg ref={medal} className="cg-medal" viewBox="-60 -110 120 180" aria-hidden="true" style={{ zIndex: 6 }}>
                <path d="M-18 -60 l-14 -48 h22 l10 35 z M18 -60 l14 -48 h-22 l-10 35 z" fill="#74B4D9"></path>
                <circle r="54" fill="#FFFFFF"></circle>
                <circle r="45" fill="#1D5AA6"></circle>
                <text y="-8" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#EBEBEB" letterSpacing="1.6">
                    {"TOPPER"}
                </text>
                <text y="20" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF">
                    {"#1"}
                </text>
            </svg>
        </div>
    )
}

// =====================================================================
// FAQ: questions type themselves into a search bar, question marks drift up
// from the thinking mascot, an answer arrives and he has his "aha" moment.
// =====================================================================
export const FQ = [
    ["Is my RankRush rank official?", "No. It is your rank among everyone who took that paper on Scorely India, with the pool size shown."],
    ["Do I need to pay to sign up?", "No. Signing up is free. Pay per RankRush on Free, or get every one with Pro."],
    ["Will my college see my scores?", "Only if you link to a partner college, and you see a notice first."],
    ["Does partnership cost colleges anything?", "Nothing. Partner colleges pay ₹0; students pay for their own Pro by UPI."],
]

export function FAQStage({ heroRef }) {
    const box = React.useRef(null)
    const rig = React.useRef(null)
    const typed = React.useRef(null)
    const bubble = React.useRef(null)
    const ans = React.useRef(null)
    const dots = React.useRef(null)

    useStory(box, async ({ wait, reduce }) => {
        const qmarks = () => {
            if (reduce || !box.current) return
            const m = box.current.querySelector(".mrig").getBoundingClientRect()
            const b = box.current.getBoundingClientRect()
            for (let i = 0; i < 3; i++) {
                const q = document.createElement("span")
                q.className = "fq-q"
                q.textContent = "?"
                q.style.left = m.left - b.left + m.width * (0.35 + Math.random() * 0.35) + "px"
                q.style.top = m.top - b.top + m.height * 0.12 + "px"
                q.style.setProperty("--dx", ((Math.random() - 0.5) * 120).toFixed(0) + "px")
                q.style.setProperty("--r", ((Math.random() - 0.5) * 50).toFixed(0) + "deg")
                q.style.animationDelay = i * 0.45 + "s"
                q.style.fontSize = 22 + Math.random() * 14 + "px"
                box.current.appendChild(q)
                setTimeout(() => q.remove(), 4400)
            }
        }
        for (let i = 0; ; i = (i + 1) % FQ.length) {
            const r = rig.current
            if (!r) return
            const [q, a] = FQ[i]
            if (reduce) {
                typed.current.textContent = q
                ans.current.textContent = a
                dots.current.style.display = "none"
                bubble.current.classList.add("on")
                return
            }
            r.setPose(0)
            r.setMode("think")
            bubble.current.classList.remove("on")
            typed.current.textContent = ""
            qmarks()
            // type the question like a person: uneven rhythm, pauses at spaces
            for (let c = 1; c <= q.length; c++) {
                typed.current.textContent = q.slice(0, c)
                await wait(q[c - 1] === " " ? 90 + Math.random() * 80 : 38 + Math.random() * 55)
            }
            await wait(450)
            ans.current.textContent = ""
            dots.current.style.display = "inline-flex"
            bubble.current.classList.add("on")
            await wait(1100)
            dots.current.style.display = "none"
            ans.current.textContent = a
            // the "aha": a small hop, thumbs up
            r.setMode("idle")
            await r.jump({ h: 42, dur: 880, onApex: () => r.setPose(1) })
            await wait(2600)
            r.setPose(0)
            await r.bob({ depth: 0.06 })
        }
    })

    return (
        <div ref={box} style={{ position: "absolute", inset: 0 }}>
            <div className="fq-search" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D5AA6" strokeWidth="2.4" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="M20 20l-4-4"></path>
                </svg>
                <span style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <span ref={typed}></span>
                    <span className="fq-caret"></span>
                </span>
            </div>
            <div ref={bubble} className="fq-bubble st-pop" aria-live="polite">
                <span style={{ display: "block", font: "600 11px/1 Inter, sans-serif", letterSpacing: ".08em", textTransform: "uppercase", color: "#74B4D9", marginBottom: "8px" }}>{"Answer"}</span>
                <span ref={dots} className="fq-dots" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <span ref={ans}></span>
            </div>
            <Mascot
                rigRef={rig}
                trackRef={heroRef}
                mode="think"
                label="The Scorely mascot thinking through questions and smiling when the answer arrives."
                poses={[{ src: IMG_THINK }, { src: IMG_THUMBS, w: 104 }]}
                style={{ left: "4%", bottom: "0", width: "44%", zIndex: 3 }}
            />
        </div>
    )
}
