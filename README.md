# Arian Jafari Portfolio

A production-ready portfolio website for a product researcher and strategy professional focused on competitive intelligence, market research, and product strategy.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router
- Framer Motion
- Lucide icons

## Local Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```bash
app/
  about/
  contact/
  projects/[slug]/
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
data/
  portfolio.ts
README.md
```

## Editing Portfolio Content

All portfolio and project data is centralized in `data/portfolio.ts`.

Update:
- personal details
- nav items
- project list
- case study content
- skills and resume links

## Vercel Deployment

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Keep the default settings for Next.js.
4. Set the production branch as your main branch.
5. Deploy.

## Placeholder Links

Replace the sample values in `data/portfolio.ts` with your real:
- LinkedIn URL
- Resume PDF URL
- project document links
- Figma links
- publication / newsletter links
