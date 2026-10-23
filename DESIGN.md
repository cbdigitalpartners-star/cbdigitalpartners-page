---
name: C&B Digital Partners
description: Custom software studio in Santiago, Chile. Real products in production, shown as evidence.
colors:
  ink: "#0b1020"
  ink-soft: "#161d33"
  paper: "#f7f8fc"
  muted: "#5b6270"
  line: "#e6e8f0"
  signal-blue: "#4f6bff"
  signal-blue-text: "#3b55e6"
  production-teal: "#00d4b3"
  surface: "#ffffff"
  surface-alt: "#eef1fb"
  band-navy: "#0b1020"
  band-muted: "#aeb6d4"
  legal-text: "#2b3245"
  ink-dark: "#eceffa"
  ink-soft-dark: "#c5cbe0"
  paper-dark: "#0a0e1a"
  muted-dark: "#99a2bd"
  line-dark: "#232a42"
  signal-blue-dark: "#7488ff"
  surface-dark: "#11162b"
  surface-alt-dark: "#0d1322"
  band-navy-dark: "#141b33"
  band-muted-dark: "#b6bdd6"
typography:
  display:
    fontFamily: "Space Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 6.2vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.6vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Space Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.4vw, 1.3rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "IBM Plex Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, Cascadia Code, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  xs: "6px"
  sm: "10px"
  md: "12px"
  base: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "0.75rem"
  sm: "clamp(1rem, 2vw, 1.5rem)"
  md: "clamp(1.75rem, 4vw, 2.75rem)"
  lg: "clamp(3rem, 7vw, 5rem)"
  xl: "clamp(4.5rem, 10vw, 7.5rem)"
  gutter: "24px"
  container: "1080px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.md}"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "9px 18px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "30px"
  tag:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.signal-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "4px 10px"
  cta-band:
    backgroundColor: "{colors.band-navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "56px 48px"
---

# Design System: C&B Digital Partners

## Overview

**Creative North Star: "Circuito en producción"**

The site is drawn like a circuit that is already live. Signal blue is the current that connects things (links, actions, the traces in the logo and the closing band); production teal is the confirmation that something is running (the live dot, the end node of a pipeline, the last stop of a gradient). Deep navy and a cool, near-white paper carry everything else, so the two signals stay rare and readable.

Density is calm and editorial rather than dashboard-like: generous section spacing, a single 1080px column, and each section with its own composition (an editorial split for services, an asymmetric product case for each client, spec-sheet facts, a connected three-stop pipeline). Proof is shown, not described: real screenshots in browser frames, product mocks built in HTML, real numbers in a hairline spec grid. Light is the default; dark mode mirrors every token rather than inverting the page.

The visual rejection is explicit: it must never read as a generic AI template. No identical equal-weight card grids as a default, no emoji icons, no everything-centred layouts, no decorative gradient washes.

**Key Characteristics:**
- Navy + cool paper ground, two signal accents (blue connects, teal confirms).
- Space Grotesk display over IBM Plex Sans body; IBM Plex Mono only for small technical labels (hosts, tags, chips).
- Real product evidence framed as browser windows or HTML mocks.
- Circuit traces as the one recurring motif, kept away from text.
- Every section composed differently; motion is a reveal on an already-visible default.

## Colors

A restrained navy-and-paper system where two saturated signals do all the pointing.

### Primary
- **Signal Blue** (#4f6bff; dark #7488ff): the accent clause of the hero headline, focus rings, active nav underline, circuit traces, pipeline nodes, borders and fills. The colour of "this connects to something".
- **Signal Blue Text** (#3b55e6; dark #7488ff): the same signal, one step deeper, for every small blue text: links, tags, case and pipeline labels, list numbers, the active role in mocks. Passes 4.5:1 on paper, white and 10% blue tints.

### Secondary
- **Production Teal** (#00d4b3): confirmation only. The live status dot, the final node of a pipeline, the end stop of the blue→teal bar and scroll-progress gradients, the AI module in the school mock. Never used for text.

### Neutral
- **Deep Navy Ink** (#0b1020; dark #eceffa): body and heading text, primary buttons, the nav CTA.
- **Ink Soft** (#161d33; dark #c5cbe0): hover state of dark surfaces.
- **Cool Paper** (#f7f8fc; dark #0a0e1a): page ground. A cool, chroma-low near-white, never cream.
- **Slate Muted** (#5b6270; dark #99a2bd): secondary text, captions, descriptions. Tuned to AA on paper with headroom.
- **Hairline** (#e6e8f0; dark #232a42): borders, dividers, spec-grid rules.
- **Surface** (#ffffff; dark #11162b): cards, browser frames, mocks.
- **Surface Alt** (#eef1fb; dark #0d1322): the alternate section wash (Soluciones).
- **Band Navy** (#0b1020; dark #141b33) with **Band Muted** (#aeb6d4; dark #b6bdd6): the closing CTA band, which stays dark in both themes.
- **Legal Text** (#2b3245; dark #c5cbe0): long-form body on the legal pages.

### Named Rules
**The Two Signals Rule.** Blue and teal are the only accents. Blue points and connects; teal confirms. No third hue enters the palette.

**The Readable Signal Rule.** Small text never uses Signal Blue (#4f6bff); it uses Signal Blue Text (`--accent-text`). Signal Blue stays for strokes, fills, focus rings and display-size type.

**The Mirror Rule.** Dark mode is a full token mirror applied under `prefers-color-scheme: dark` (unless `.theme-light`) and under `.theme-dark`. Components never hard-code a theme colour; surfaces that must not flip (the CTA band, inverted buttons) have their own tokens.

## Typography

**Display Font:** Space Grotesk 700 (with Segoe UI, system-ui)
**Body Font:** IBM Plex Sans 400/600 (with -apple-system, Segoe UI, Roboto)
**Label/Mono Font:** IBM Plex Mono 500/600 (with ui-monospace, Cascadia Code)

**Character:** A geometric, slightly mechanical display face paired with a humanist engineering sans; the mono is the voice of the machine, used only in small doses.

### Hierarchy
- **Display** (700, clamp(1.75rem, 6.2vw, 5.25rem), 1.04, -0.035em): the hero headline only. Two clauses, one per line; the first in Signal Blue.
- **Headline** (700, clamp(1.7rem, 3.6vw, 2.4rem), 1.18, -0.02em): section titles (h2) and the CTA band.
- **Title** (700, clamp(1.4rem, 2.4vw, 1.8rem), 1.18, -0.02em): case-study and featured-product titles.
- **Subtitle** (700, clamp(1.15rem, 1.4vw, 1.3rem), 1.18, -0.01em): feature, card, pipeline and trust headings.
- **Lead** (400, clamp(1.1rem, 1.5vw, 1.3rem), 1.5): section intros and the hero support sentence, in Slate Muted, max 46–60ch.
- **Body** (400, 1rem, 1.65): running text, max about 56ch in features.
- **Label** (Mono 600, 0.72rem, 0.02em): client lines on cases, pipeline audience labels, tags, browser-bar hosts, feature pills. Tags alone are uppercase.

### Named Rules
**The Two-Line Headline Rule.** The hero headline is two lines at every width, one clause per line. Cut words before shrinking type.

**The Mono-Is-Metadata Rule.** IBM Plex Mono never sets a sentence. It labels: a host, a client, a status, a number index.

## Layout

One centred container (max 1080px, 24px side gutters) for every section. Sections are separated by fluid vertical padding (`xl`: clamp(4.5rem, 10vw, 7.5rem)); the cases section opens tighter (`lg`). Section heads sit in two columns above 860px (title left at 0.82fr, intro right at 1.18fr, bottom-aligned) and stack below.

Each section has its own grammar: the hero stacks a full-width headline over a copy column and an overlapping pair of browser screenshots; Servicios is an editorial split with a sticky left head and a numbered list on the right; each case is a two-column body/media pair (the second one flipped), with a full-width three-stop pipeline under the Tu Marka case; Soluciones is one featured product plus a supporting grid; Nosotros is three columns with an accent tick.

Breakpoints: 960px (nav tightens), 860px (two-column layouts stack, sticky heads release), 720px (nav links hide, featured product stacks), 520px and 420px (grids and mocks reflow), 400px (hero buttons go full width). No horizontal scroll at any width.

## Elevation & Depth

A mostly flat system lifted by soft navy-tinted ambient shadows on things that represent a product (screenshots, mocks) and by hover lift on interactive surfaces. Shadow colour is the `--shadow` RGB triplet (11, 16, 32 light; 0, 0, 0 dark), so depth reads as navy, never grey.

### Shadow Vocabulary
- **Product float** (`box-shadow: 0 24px 60px rgba(var(--shadow), 0.14)`): browser frames and the school mock. The back screenshot in a stack drops it.
- **Mock float** (`box-shadow: 0 20px 50px rgba(var(--shadow), 0.16)`): the Gastus mock card.
- **Card hover** (`box-shadow: 0 18px 40px rgba(var(--shadow), 0.10)` with `translateY(-4px)`): solution cards on hover only.
- **Button hover** (`box-shadow: 0 12px 30px rgba(var(--shadow), 0.25)` with `translateY(-2px)`): primary button on hover; pressed state shrinks to `0 4px 12px rgba(var(--shadow), 0.22)`.
- **Live ring** (`box-shadow: 0 0 0 3px` teal at 22%): the status dot, pulsing when motion is allowed.

### Named Rules
**The Product-Floats Rule.** Only representations of real products float at rest. Cards, sections and text blocks are flat until hovered.

## Shapes

Softly rounded rectangles throughout, scaled to the element: 6px for tags and mock list items, 10px for nav CTA, theme toggle and mock tiles, 12px for buttons and media wells, 16px for cards and browser frames, 24px for the CTA band. Pills (999px) are reserved for feature chips and the browser address bar. Circles are signals: pipeline nodes, live dots, window-control dots. Borders are 1px Hairline; accent strokes are 2px Signal Blue (trust ticks, pipeline trace).

## Components

### Buttons
- **Shape:** gently rounded (12px).
- **Primary:** Deep Navy fill with white text in light mode, inverted (near-white fill, navy text) in dark mode, 13px × 24px, IBM Plex Sans 600.
- **Hover / Focus:** lifts 2px with the button-hover shadow; press drops 1px and scales to 0.992. Focus shows a 2px Signal Blue outline at 3px offset.
- **Ghost:** Surface fill, 1px Hairline border, ink text; on hover the border and text turn Signal Blue.
- **In the CTA band:** white fill with band-navy text, magnetic pull toward the cursor on fine pointers.

### Chips (feature pills)
- **Style:** transparent, 1px Hairline, pill radius, Mono label, preceded by a Signal Blue check mark.

### Tags
- **Style:** Mono uppercase label in Signal Blue on a 10% blue tint, 6px radius.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Surface.
- **Shadow Strategy:** flat at rest; card-hover lift on hover with the border shifting toward blue.
- **Border:** 1px Hairline.
- **Internal Padding:** 30px.

### Navigation
- Sticky bar on paper at 85% with a light blur and a Hairline bottom border. Logo left, four to five plain links in Slate Muted (ink on hover) with a Signal Blue underline that wipes in from the left and stays on the active section (scrollspy). A 44px theme toggle and the dark "Hablemos" CTA sit on the right. Below 720px the links hide. A blue→teal scroll-progress bar runs along the very top.

### Browser frame (signature)
- Surface card, 16px radius, product-float shadow, a header bar with three muted window dots and a centred Mono host pill. Holds real screenshots. Two frames overlap in the hero, the back one unshadowed.

### Case study (signature)
- Mono client line, Title heading, muted lead, a two-by-two hairline spec grid of real figures (Display-font numbers), a short scope list with bold leads, and a Signal Blue text link with an arrow that widens its gap on hover.

### Pipeline (signature)
- Three stops on a 2px blue→teal trace, each with a hollow node (the last one teal), a Mono audience label, a Subtitle heading and a short paragraph. Horizontal on desktop, vertical below 860px. The trace draws in when it enters view.

### CTA band (signature)
- Rounded (24px) Band Navy panel, centred Headline and lead, circuit traces masked to the outer edges so they never cross the copy.

## Do's and Don'ts

### Do:
- **Do** show real products: screenshots in browser frames or HTML mocks of real modules, with real figures.
- **Do** keep Signal Blue for connection and action and Production Teal for confirmation, and nothing else.
- **Do** set small blue text in `--accent-text` (#3b55e6 light, #7488ff dark), never in `--accent`.
- **Do** give each section its own composition and keep the hero headline to two lines at every width.
- **Do** mirror every new colour in both dark-mode blocks (`.theme-dark` and the `prefers-color-scheme` query).
- **Do** keep content visible without script: reveals and entrances only enhance an already-visible default, and `prefers-reduced-motion` removes travel.
- **Do** keep circuit traces clear of text.

### Don't:
- **Don't** use the raw `logo_*.png` brand-sheet crops; use `assets/logo-clean.png`.
- **Don't** add emoji as icons, identical equal-weight card grids as a default, or everything-centred sections.
- **Don't** add a third accent colour or a cream/beige ground.
- **Don't** set sentences in IBM Plex Mono.
- **Don't** invent testimonials, client logos, statistics or press.
- **Don't** publish internal URLs of client systems (for example the Tu Marka CRM and portal).
