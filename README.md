# Muhammad Ahmad — AI/ML Engineer Portfolio

A modern, dark-mode-first portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS (custom design tokens via CSS variables for dark/light theming)
- lucide-react for icons
- next/font for Space Grotesk, Inter, and JetBrains Mono
- No external UI libraries — all components are custom

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       Root layout, fonts, metadata, theme provider
  page.tsx          Assembles all sections
  globals.css       Design tokens (CSS variables) + small custom utilities
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  Experience.tsx, Services.tsx, Education.tsx, Testimonials.tsx,
  Contact.tsx, Footer.tsx, BackToTop.tsx, NeuralCanvas.tsx,
  ThemeToggle.tsx, Reveal.tsx, ui.tsx
context/
  ThemeContext.tsx  Dark/light theme state (persisted to localStorage)
hooks/
  useActiveSection.ts   Drives active nav-link highlighting on scroll
  useInView.ts          Drives scroll reveal animations
lib/
  data.ts           All editable content: skills, projects, experience,
                     services, education, certifications, testimonials, links
```

## Customizing content

Almost everything you'll want to change lives in **`lib/data.ts`** — projects, skills,
experience, services, education, certifications, testimonials, and contact links are
all plain data objects there. Edit the text/values and the UI updates automatically.

## Things to swap in before publishing

1. **Resume** — add a real `resume.pdf` to the `public/` folder (the hero's
   "Download Resume" button already links to `/resume.pdf`).
2. **Avatar** — `components/Hero.tsx` currently renders an abstract inline SVG
   illustration. Replace it with a real photo using `next/image` if you'd like:
   ```tsx
   import Image from "next/image";
   <Image src="/headshot.jpg" alt="Muhammad Ahmad" fill className="object-cover" />
   ```
3. **Real links** — update the email, LinkedIn, GitHub, and Upwork URLs in
   `lib/data.ts` (`contactLinks`) and in `components/Footer.tsx`.
4. **Contact form backend** — the form currently opens the visitor's email client
   via a `mailto:` link (see `components/Contact.tsx`). To submit silently instead,
   wire it up to a service like [Formspree](https://formspree.io) or a custom API route.
5. **Project links & thumbnails** — swap the placeholder `#` demo/repo URLs and the
   abstract SVG thumbnails in `lib/data.ts` / `components/Projects.tsx` for real
   screenshots (use `next/image` for automatic optimization).

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`) throughout
- Skip-to-content link, visible focus states, keyboard-navigable menu
- Respects `prefers-reduced-motion` (disables the neural network canvas animation
  and scroll-reveal transitions)
- All icons are inline SVG / lucide-react (no extra image requests)
- Fonts loaded via `next/font` (self-hosted, no layout shift, no external requests
  at runtime)
- Metadata + Open Graph tags configured in `app/layout.tsx` for SEO
