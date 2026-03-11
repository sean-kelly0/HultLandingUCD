# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Stack

- **Vite + React** (JSX, no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — configured in `src/index.css` via `@theme`)
- **Figtree** font (official Hult Prize volunteer typeface) loaded via Google Fonts in `index.html`

## Architecture

Single-page landing site. All sections live in `src/components/` and are composed in `src/App.jsx` in order:

```
Navbar → Hero → About → Schedule → Sponsors → Contact → Footer
```

**Official Hult Prize colour palette** (defined in `src/index.css` `@theme` — always use the token names as Tailwind classes, not raw hex):

| Token | Hex | Usage |
|-------|-----|-------|
| `heritage` | `#EC2088` | Primary CTAs, accents, icons |
| `heritage-dark` | `#c4196d` | Hover state for heritage buttons |
| `midnight` | `#292563` | Dark section backgrounds |
| `midnight-light` | `#332f7a` | Cards/overlays on midnight bg |
| `sky` | `#12B1E7` | Secondary accent (links, contact details) |
| `sun` | `#FDD40E` | Highlights (prize amount, gold stats) |
| `hp-black` | `#191919` | Footer background, body text |

Dark sections use `bg-midnight`; light sections use `bg-white`. Pattern: Hero (dark) → About (light) → Schedule (dark) → Sponsors (light) → Contact (dark).

Dynamic colors used in `style={{ color: item.accent }}` (e.g. timeline dots, stat values) stay as hex strings since Tailwind tokens can't be used in inline styles.

## Navbar brand lockup

Per brand guidelines, campus teams must use the "Hult Prize | University Name" lockup (not the standalone H logo). The Navbar renders: **Hult Prize | University College Dublin**.

## Key Placeholders to Fill In

- Event date, time, and specific venue room in `Hero.jsx` and `Schedule.jsx`
- Schedule item times (currently "TBD") in `Schedule.jsx`
- Sponsor logos in `Sponsors.jsx` — replace placeholder `<div>`s with `<img src="..." alt="..." className="h-12 object-contain" />`
- Real email in `Contact.jsx` and `Footer.jsx`
- Instagram handle in `Contact.jsx`
- Form submission in `Contact.jsx` — currently `console.log`; wire up Formspree, EmailJS, or a backend

## Deployment

Static build — deploy `dist/` to Vercel, GitHub Pages, or any static host.
- **Vercel:** connect the repo, auto-detects Vite
- **GitHub Pages:** set `base: '/repo-name/'` in `vite.config.js`, then deploy `dist/`
