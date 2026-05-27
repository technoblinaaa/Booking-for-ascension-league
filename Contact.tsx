@import "tailwindcss";

/* ── Custom properties ── */
:root {
  --orchid: #b04fc8;
  --orchid-light: #d47fe6;
  --orchid-dim: #6e2e80;
  --gold: #c9a84c;
  --gold-light: #e8cc7a;
  --deep-black: #04000a;
  --void: #07000f;
  --panel: rgba(20, 6, 38, 0.55);
  --border-glow: rgba(176, 79, 200, 0.35);
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #04000a; }
::-webkit-scrollbar-thumb { background: var(--orchid-dim); border-radius: 2px; }

/* ── Base ── */
*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  cursor: none;
}

body {
  background-color: #04000a;
  color: #e8e0f0;
  font-family: 'Jost', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── Custom cursor ── */
.cursor-dot {
  width: 8px;
  height: 8px;
  background: var(--orchid-light);
  border-radius: 50%;
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, background 0.2s;
  mix-blend-mode: screen;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(176, 79, 200, 0.6);
  border-radius: 50%;
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition: transform 0.12s ease-out, width 0.3s, height 0.3s, border-color 0.3s;
}

/* ── Typography ── */
.font-cinzel   { font-family: 'Cinzel Decorative', serif; }
.font-playfair { font-family: 'Playfair Display', serif; }
.font-jost     { font-family: 'Jost', sans-serif; }

/* ── Glassmorphism ── */
.glass {
  background: var(--panel);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border: 1px solid var(--border-glow);
  border-radius: 16px;
}

.glass-gold {
  background: rgba(22, 10, 5, 0.6);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 16px;
}

/* ── Glow utilities ── */
.glow-orchid {
  box-shadow:
    0 0 20px rgba(176, 79, 200, 0.25),
    0 0 60px rgba(176, 79, 200, 0.12),
    inset 0 0 30px rgba(176, 79, 200, 0.06);
}

.glow-gold {
  box-shadow:
    0 0 20px rgba(201, 168, 76, 0.25),
    0 0 60px rgba(201, 168, 76, 0.10),
    inset 0 0 30px rgba(201, 168, 76, 0.05);
}

.text-glow-orchid {
  text-shadow: 0 0 30px rgba(176, 79, 200, 0.7), 0 0 80px rgba(176, 79, 200, 0.3);
}
.text-glow-gold {
  text-shadow: 0 0 20px rgba(201, 168, 76, 0.6), 0 0 50px rgba(201, 168, 76, 0.25);
}

/* ── Gradient text ── */
.gradient-orchid {
  background: linear-gradient(135deg, #d47fe6 0%, #b04fc8 40%, #7c3095 70%, #c9a84c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-gold {
  background: linear-gradient(135deg, #e8cc7a 0%, #c9a84c 50%, #a07828 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Animated border ── */
@keyframes borderPulse {
  0%, 100% { border-color: rgba(176, 79, 200, 0.25); box-shadow: 0 0 15px rgba(176,79,200,0.1); }
  50%       { border-color: rgba(176, 79, 200, 0.65); box-shadow: 0 0 40px rgba(176,79,200,0.25); }
}

.border-pulse { animation: borderPulse 3s ease-in-out infinite; }

/* ── Particle canvas ── */
#particle-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* ── Section transitions ── */
section { position: relative; }

/* ── Sacred geometry ── */
.sacred-rotate {
  animation: slowRotate 60s linear infinite;
}
.sacred-rotate-reverse {
  animation: slowRotateReverse 90s linear infinite;
}
@keyframes slowRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes slowRotateReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

/* ── Float ── */
@keyframes floatY {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-18px); }
}
.float-anim { animation: floatY 6s ease-in-out infinite; }

/* ── Pulse glow ── */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.85; transform: scale(1.08); }
}
.pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }

/* ── Shimmer ── */
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

/* ── Divider ── */
.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(176,79,200,0.5), rgba(201,168,76,0.4), transparent);
}

/* ── Nav ── */
.nav-link {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  letter-spacing: 0.15em;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(232,224,240,0.65);
  transition: color 0.3s;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--orchid-light);
  transition: width 0.3s;
}
.nav-link:hover { color: var(--orchid-light); }
.nav-link:hover::after { width: 100%; }

/* ── Service card hover ── */
.service-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 40px rgba(176, 79, 200, 0.3),
    0 0 100px rgba(176, 79, 200, 0.12),
    0 20px 60px rgba(0,0,0,0.5);
}

/* ── Button base ── */
.btn-primary {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.7rem;
  padding: 0.85rem 2.2rem;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: none;
}
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(176,79,200,0.15), rgba(201,168,76,0.08));
  opacity: 0;
  transition: opacity 0.4s;
}
.btn-primary:hover::before { opacity: 1; }

.btn-orchid {
  background: linear-gradient(135deg, #8b2da8, #6e2e80);
  border: 1px solid rgba(176,79,200,0.6);
  color: #f0e6f8;
  box-shadow: 0 0 20px rgba(176,79,200,0.25), 0 4px 20px rgba(0,0,0,0.4);
}
.btn-orchid:hover {
  box-shadow: 0 0 40px rgba(176,79,200,0.5), 0 8px 30px rgba(0,0,0,0.5);
  border-color: rgba(176,79,200,0.9);
}

.btn-ghost {
  background: transparent;
  border: 1px solid rgba(201,168,76,0.4);
  color: var(--gold-light);
}
.btn-ghost:hover {
  border-color: rgba(201,168,76,0.8);
  box-shadow: 0 0 25px rgba(201,168,76,0.2);
  color: #f5e6b0;
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(232,224,240,0.2);
  color: rgba(232,224,240,0.7);
}
.btn-outline:hover {
  border-color: rgba(232,224,240,0.5);
  color: #e8e0f0;
}

/* ── Scrollbar thin ── */
* { scrollbar-width: thin; scrollbar-color: var(--orchid-dim) #04000a; }

/* ── Section separator ── */
.section-gradient-mask {
  background: linear-gradient(
    to bottom,
    rgba(4,0,10,0) 0%,
    rgba(4,0,10,0.5) 30%,
    rgba(4,0,10,0.5) 70%,
    rgba(4,0,10,0) 100%
  );
}

/* ── Hover lift ── */
.hover-lift {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
}

/* ── Cinematic text reveal ── */
.text-reveal {
  overflow: hidden;
}

/* ── Premium selection ── */
::selection {
  background: rgba(176, 79, 200, 0.35);
  color: #f0e6f8;
}

/* ── Responsive font scaling ── */
@media (max-width: 640px) {
  .font-cinzel { letter-spacing: 0.05em !important; }
}

/* ── Glassmorphism card hover ── */
.glass:hover {
  background: rgba(25, 8, 45, 0.65);
}

/* ── Ambient bottom glow on sections ── */
.ambient-bottom::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(176,79,200,0.4), rgba(201,168,76,0.3), transparent);
}

/* ── Number typography ── */
.tabular-nums { font-variant-numeric: tabular-nums; }

/* ── Cinzel italic simulation ── */
.cinzel-italic {
  font-family: 'Cinzel Decorative', serif;
  font-style: normal;
  transform: skew(-4deg);
  display: inline-block;
}

/* ── Loading / entrance fade ── */
@keyframes entranceFade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.entrance-fade {
  animation: entranceFade 0.8s ease-out forwards;
}

/* ── Quote styling ── */
.quote-mark {
  font-size: 5rem;
  line-height: 0.5;
  font-family: 'Playfair Display', serif;
  color: rgba(176,79,200,0.2);
  user-select: none;
}

/* ── Mobile touch cursor fallback ── */
@media (hover: none) {
  .cursor-dot, .cursor-ring { display: none; }
  html { cursor: auto; }
  * { cursor: auto !important; }
}

/* ── Z-index layers ── */
.z-particles { z-index: 0; }
.z-content   { z-index: 2; }
.z-overlay   { z-index: 5; }
.z-nav       { z-index: 50; }
.z-cursor    { z-index: 9999; }

