# MM Cleaners — Design System

A restyle of the MM Cleaners home page to match the **BeClean** aesthetic:
punchy lime-green + black, big sharp geometric type, square buttons, sparkle
brand marks, and soft organic off-white backdrops.

---

## 1. Brand personality

Friendly, energetic, spotless. High-contrast black-on-white with an electric
lime accent that signals "fresh / clean". Playful sparkle motifs reinforce the
"sparkling clean" idea. Bold, confident, modern — never corporate-stiff.

---

## 2. Color palette

Exactly 5 core colors. Defined as design tokens in `src/app/globals.css`.

| Token                     | Hex        | Usage                                                        |
| ------------------------- | ---------- | ------------------------------------------------------------ |
| `--color-background`      | `#FFFFFF`  | Page background                                              |
| `--color-foreground`      | `#030303`  | Primary text, dark sections (footer / banner), black pills   |
| `--color-lime` (accent)   | `#e6f632`  | Badges, primary CTAs, numbers, sparkles, icon chips          |
| `--color-cream`           | `#F4F4F1`  | Organic section blobs / alternating section backgrounds      |
| `--color-muted-foreground`| `#6F6F6F`  | Body / secondary paragraph text                              |

Supporting: `--color-lime-foreground: #030303` (text on lime), card surfaces are
pure white with a hairline `#ECECEC` border.

Rules:
- Lime is an accent only — never large flat lime fills for whole sections.
- Text on lime is always near-black for contrast.
- Dark sections (banner, footer) use `#101010` bg with white text + lime accents.

---

## 3. Typography

Two weights of one family for cohesion and identity.

- **Headings:** `Poppins` — weights 600 / 700 / 800. Tight tracking
  (`tracking-tight`), heavy, sharp-geometric. Large display sizes
  (`text-5xl`–`text-7xl`) for the hero.
- **Body:** `Poppins` — weights 400 / 500. `leading-relaxed` (1.5–1.6).
- Small uppercase labels/badges: 500–600 weight, `tracking-wide`, `text-xs`.

Applied via `font-sans` (body) and `font-heading` utility classes wired through
Next.js `next/font/google` in `layout.tsx`.

---

## 4. Spacing & layout

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-20` to `py-24` (mobile-first, scales up).
- Grid via flexbox / CSS grid + `gap-*` (never margins + gap mixed).
- Generous whitespace; content breathes around large organic blobs.

---

## 5. Shape language

- **Buttons:** sharp squares (`rounded-none`). Two variants:
  - **Primary/black:** black bg, white text, trailing arrow.
  - **Accent/lime:** lime bg, black text.
- **Badges:** tiny lime squares, uppercase, `rounded-none`, black text.
- **Cards:** `rounded-none`, hairline border, subtle shadow.
- **Blobs:** large sharp rectangular cream shapes behind content.
- **Icon chips:** lime sharp squares holding a stroked icon.

---

## 6. Iconography & motifs

- **Sparkles:** custom 4-point star SVG (`components/sparkle.tsx`) — the core
  brand mark. Used in the logo, hero, and section accents. Lime or black.
- Functional icons are simple custom stroked SVGs (phone, arrow, check) sized
  16/20/24px — no generic icon-library filler.

---

## 7. Components restyled (home only)

Navbar, Hero (+ quote form), Features, Trust Reviews, Partner Banner,
Introduction, Services Grid, Additional Services, Footer, WhatsApp button.
All existing copy, sections, and ordering are preserved — visuals only.
