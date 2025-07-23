# HawalaBit Landing Page

This repository contains the static landing page for **HawalaBit**, a Web3 remittance platform bridging crypto and the Somali diaspora economy.

---

## 🌐 Live Preview

Open `index.html` directly in your browser to view the landing page. No build step required.

---

## 🛠 Tech Stack

- **Tailwind CSS** via CDN
- **Typed.js** for animated headers
- **Playfair Display** + SF Pro system fonts
- **Responsive layout**: mobile + desktop nav systems
- **Peer toggle system** for mobile menu
- **SVG + React-based interactive grid** (desktop-only)
- **No build tooling** — runs in-browser via `babel-standalone`

---

## 🧠 Codex Integration Guidelines

To ensure Codex edits are safe and context-aware:

### ✅ Do:
- Inline any React components using `<script type="text/babel">` (e.g. `InteractiveGridPattern`)
- Mount components into divs like `#grid-root` — do not import from external `.tsx` files
- Use `md:hidden` and `md:flex` consistently to separate mobile/desktop behavior
- Keep `logo` path as `assets/hawalabit-logo.svg`
- Use `z-[999]` for mobile overlays and `z-0` for background patterns
- Use `bg-[#0c0c0c]` as the global dark background
- Lock scroll with `overflow-hidden` when mobile menu is open
- Use `text-4xl md:text-8xl` for responsive hero headings

### ❌ Don’t:
- Don’t use `import`, `export`, or JSX outside `<script type="text/babel">`
- Don’t reference files via `src="components/*.tsx"` — Codex won’t resolve this
- Don’t move the mobile `<nav>` back inside the `<header>`
- Don’t remove `z-10` on `<div class="relative z-10">` — it protects layering
- Don’t apply background effects globally on mobile (desktop-only)

---

## 🧩 Components

### `InteractiveGridPattern`
- Mounted to `#grid-root`
- Only rendered when `window.innerWidth >= 768`
- Styled with `stroke-white/10`, `fill-purple-500/10`
- Fully background-layered with `z-0 pointer-events-none`

### Mobile Navigation
- Controlled via `#nav-toggle` checkbox (peer)
- Close button: top-right `&times;`
- Link section starts at `pt-[33vh]`, CTA is last
- Body scroll locked when open

---

## 🚀 Deployment

You can deploy via:
- GitHub Pages
- Any static file host (e.g. Netlify, Vercel, Cloudflare Pages)

No build process required.

---

## 📁 File Structure

hawalabit-site/
├── index.html
├── assets/
│ └── hawalabit-logo.svg

pgsql
Copy
Edit

---

## ✨ Design Intent

- Inspired by LayerZero, Zora, Worldcoin
- Minimalist, high-contrast dark mode
- Trust-focused, conversion-optimized layout
- Designed for mobile-first users with elite desktop polish
