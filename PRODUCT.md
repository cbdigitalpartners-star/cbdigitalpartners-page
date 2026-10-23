# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chilean business decision-makers (founders, operations and marketing leads) evaluating whether to hire a studio to build custom software: messaging integrations, automation, web platforms, fintech, education tools. They arrive skeptical and time-poor. Job to be done: *"prove this studio is competent and safe to trust with my project, fast."* Emotional goal: **confidence**. The work should read as solid, secure and production-grade.

## Product Purpose

Marketing landing site for **C&B Digital Partners**, a custom-software studio based in Santiago, Chile. The site exists to turn a skeptical visitor into a project conversation (primary action: email `contacto@cbdigitalpartners.cl` / "Solicitar una propuesta"). Success means the visitor leaves convinced the studio ships real, secure software and writes to ask for a proposal.

## Positioning

Senior engineers who ship, not a marketing agency. The claim rests on products running in production for real clients, built on official APIs, role-based permissions and encrypted data, rather than on adjectives.

## Operating Context

- Spanish-language (es) site for the Chilean market: pesos, local banks, INAPI, MINEDUC.
- Pages: `index.html` (landing), `privacidad.html`, `terminos.html`.
- Visitors compare the studio against agencies and freelancers, often on a phone, often after a referral.

## Capabilities and Constraints

- Static HTML + hand-written `styles.css` + progressive-enhancement `scripts.js`. No framework, no build step. Deployed on Vercel from `main`.
- Light and dark themes: follows `prefers-color-scheme`, with a manual toggle persisted in `localStorage` (`cb-theme`).
- Services offered: custom web platforms and portals, applied AI where it is measurable, messaging integrations (TikTok, WhatsApp, Instagram via official APIs), automation of response flows.
- Commits are authored as `cbdigitalpartners-star`.

## Brand Commitments

- Name: **C&B Digital Partners**. Tagline on the brand sheet: "Tecnología · Estrategia · Resultados".
- Logo: navy "C&B" wordmark with a circuit-trace motif. Use `assets/logo-clean.png` (transparent) in header and footer; `assets/favicon.ico`. The other `logo_*.png` files are raw brand-sheet crops with caption text baked in and must not be used directly.
- Personality: **modern · trustworthy · technically precise**. Voice is direct and concrete (real products in production, official APIs, encrypted data). No hype, no buzzword salad.
- Anti-reference: must not look like a generic AI-made template.

## Evidence on Hand

- **Colegio Contempora** (education): school management platform plus public school website on one database. Public figures shown on the school's site: 211 students, 28 teachers, 9 courses. From the codebase: 11 roles with their own permissions, 140 data models. Public site: https://colegia.colegiocontempora.com/. No usable school photography (its photos show identifiable children).
- **Tu Marka** (trademark registration before INAPI): sales site (https://www.tumarka.cl, payments through Flow, cash or 5 instalments), internal CRM (pipeline, AI-drafted feasibility report sent as PDF, 15 tracked INAPI stages with legal deadlines, instalment collections with alerts) and client portal (brand progress, documents, payments). The CRM and portal URLs must not be published. Screenshot: `assets/case-tumarka.webp`.
- **Gastus** (personal finance, in production): imports statements from Chilean banks, AI categorisation, recurring-expense detection, field-level encryption, no ads, no trackers. https://gastus.cl. Assets: `assets/gastus-logo.png|webp`, `assets/hero-gastus.webp`.
- Other solutions described without client names: client-advisor portal, real-estate investor portal, therapy-centre management (runs on the Contempora codebase).
- No testimonials, client logos, press or business statistics exist. Do not invent them.

## Product Principles

1. **Evidence over claims.** Real products, numbers and screenshots beat adjectives.
2. **Restraint.** Few elements, each earning its place.
3. **Intentional hierarchy.** Vary layout and rhythm between sections; no uniform card grid by default.
4. **Accessible by default.** WCAG AA in both themes.
5. **Production-grade polish.** The craft of the site is itself the proof of competence.

## Accessibility & Inclusion

WCAG AA: text contrast ≥ 4.5:1, visible focus rings, full keyboard navigation, skip link, `prefers-reduced-motion` honoured, `forced-colors` supported. Verify both themes.
