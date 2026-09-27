# Rohit Kumar — AI/ML & Agentic Systems Engineer Portfolio

A Next.js (App Router) + Tailwind CSS implementation of the "Obsidian Architectural Editorial"
design system, including the animated Three.js agentic-swarm hero visualizer and a fully
interactive Agentic Runtime & RAG Profiler sandbox.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

- `app/` — Next.js App Router entry (layout, global styles, page)
- `components/` — one component per section (Header, Hero, Deployments, Sandbox, Flagship,
  Stack, Trajectory, Contact, Footer) plus shared bits (`SpotlightCard`, `AmbientBackground`,
  `AgentSwarmVisualizer`)
- `lib/data.ts` — all editable content (profile info, stats, skills, trajectory, research) in one
  place, so you can update your bio/projects without touching component markup

## Things to customize

- **Your info**: edit `lib/data.ts` — name, email, phone, GitHub, bio, stats, projects, skills,
  and career trajectory all live there.
- **Avatar / logo image**: currently points to a temporary Google-hosted URL from the original
  mockup. Replace `profile.avatar` in `lib/data.ts` with your own image (drop a file into
  `public/` and reference it as `/your-file.png`).
- **Colors / typography / spacing**: all design tokens are wired into `tailwind.config.ts`,
  matching `DESIGN.md` 1:1.
- **Deploy**: this is a standard Next.js app — deploys cleanly to Vercel, Netlify, or any Node
  host.

## Notes on interactivity

- The hero's 3D agent-swarm graph is rendered with `three` in `components/AgentSwarmVisualizer.tsx`
  as a client component (mouse-reactive rotation, animated swarm nodes/edges).
- The "Agentic Runtime & RAG Profiler" sandbox (`components/Sandbox.tsx`) is fully functional
  React state — clicking framework/retriever/model options recomputes and animates the latency,
  accuracy, and tool-call telemetry live, matching the original mockup's behavior.
- Card spotlight hover glow, shimmer buttons, tag hovers, and pulse/beacon badges are all preserved
  as CSS utilities in `app/globals.css`.
