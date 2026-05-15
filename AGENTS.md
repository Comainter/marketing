# Comainter Agent Rules

## This is NOT a generic SaaS website

Comainter is infrastructure software for developer ecosystems.

The product is:

* AI-powered issue qualification
* support intelligence
* maintainer workflow automation
* repository operational intelligence

NOT:

* chatbot wrapper
* generic AI assistant
* flashy consumer AI app

The design and code should feel closer to:

* Linear
* Datadog
* Sentry
* Sourcegraph
* Vercel

than:

* generic AI landing pages.

---

# Core Product Understanding

Comainter validates and qualifies developer issues BEFORE they reach engineering teams.

The system:

* detects duplicates
* validates environment/config correctness
* identifies unsupported usage
* checks historical incidents
* analyzes stacktraces
* retrieves related PRs/issues/releases
* determines whether an issue is actionable

Only qualified engineering problems should escalate to maintainers.

This positioning is critical.

DO NOT frame the product as:

* AI chatbot
* GitHub issue organizer
* simple issue triage tool

Instead frame it as:

* developer support infrastructure
* issue qualification intelligence
* maintainer operations platform
* developer ecosystem intelligence

---

# Design Principles

## Visual Tone

The UI must feel:

* operational
* technical
* infrastructure-grade
* trustworthy
* intelligent
* minimal
* enterprise-focused

Avoid:

* excessive gradients
* bright AI aesthetics
* cartoon illustrations
* floating AI blobs
* playful startup visuals
* crypto/Web3 aesthetics

Preferred design language:

* subtle borders
* glass panels
* grid systems
* dashboard visuals
* terminal-inspired interfaces
* observability aesthetics
* dark-first UI

---

# Layout Principles

Prefer:

* dense but readable layouts
* operational dashboards
* system diagrams
* workflow visualizations
* issue intelligence feeds
* infrastructure panels
* repository graphs
* structured information hierarchy

Avoid:

* giant empty sections
* oversized marketing text
* excessive whitespace
* simplistic landing-page layouts

---

# Typography

Use:

* Inter
* Geist
* SF-like typography

Hierarchy should feel similar to:

* Linear
* Datadog
* Sentry

Headlines:

* concise
* technical
* operational

Avoid generic AI marketing language like:

* “supercharge”
* “revolutionize”
* “magical AI”
* “next-generation intelligence”

---

# Animation Rules

Animations should be:

* subtle
* purposeful
* system-like
* low-noise

Good:

* panel transitions
* workflow progression
* graph interactions
* issue state changes
* terminal activity
* loading traces

Bad:

* bouncing elements
* exaggerated motion
* decorative floating animations

Use Framer Motion conservatively.

---

# Technical UI Patterns

The website should frequently show:

* issue qualification pipelines
* stacktrace analysis
* issue similarity matching
* repository topology graphs
* issue → PR → release relationships
* confidence scoring
* subsystem analysis
* operational dashboards

The UI should communicate:
“deep repository intelligence.”

---

# Messaging Rules

Always emphasize:

* reducing engineering interruption
* support deflection
* issue qualification
* operational intelligence
* maintainer productivity
* ecosystem scaling

Never emphasize:

* generic AI chat
* assistant-style interaction
* “talk to your codebase”

---

# Target Audience

Primary:

* developer platform teams
* OSS companies
* infrastructure startups
* API companies
* DevRel teams
* support engineering teams
* platform engineering orgs

Tone should assume:
technical and infrastructure-aware users.

---

# Frontend Architecture Rules

Use:

* Next.js App Router
* Server Components where appropriate
* Suspense boundaries correctly
* route groups when useful
* component-driven architecture
* clean folder boundaries
* reusable UI primitives
* motion separated from business logic

Avoid:

* giant monolithic components
* deeply nested prop chains
* unnecessary client components
* overengineering abstractions

---

# Component Style Rules

Components should:

* look composable
* resemble internal tooling
* feel production-grade

Prefer:

* bordered cards
* observability-style tables
* command-center layouts
* issue feed panels
* graph overlays
* split views

Avoid:

* generic startup card grids
* template aesthetics
* marketing-heavy sections

---

# Color Usage

Primary palette:

* neutral dark backgrounds
* muted grays
* subtle accent highlights

Accent colors should represent:

* issue states
* qualification status
* operational signals

NOT decorative branding noise.

---

# Code Expectations

Code should be:

* production-grade
* modular
* typed correctly
* accessible
* responsive
* maintainable

Prioritize:

* clean architecture
* composability
* readability
* performance

Do not prematurely overengineer.

---

# Website Goal

The site should make visitors feel:

“This is serious infrastructure software for managing developer ecosystem complexity.”

NOT:

“This is another AI wrapper startup.”

# File Structure Rules

The project structure must reflect:

* infrastructure-grade frontend architecture
* maintainability
* scalability
* clear ownership boundaries

Avoid:

* dumping everything into `/components`
* giant shared utility folders
* deeply nested feature spaghetti
* unclear UI/business separation

The structure should feel closer to:

* Vercel
* Sentry
* Linear
* enterprise frontend systems

NOT:

* template-generated portfolios
* small indie landing pages

---

# Recommended App Structure

```txt
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── pricing/
│   │       └── page.tsx
│   │
│   ├── api/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── providers.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── typography/
│   ├── shared/
│   ├── ui/
│   └── motion/
│
├── features/
│   ├── hero/
│   ├── issue-qualification/
│   ├── repository-intelligence/
│   ├── maintainer-intelligence/
│   ├── ecosystem-analytics/
│   ├── integrations/
│   └── workflow-visualization/
│
├── lib/
│   ├── utils/
│   ├── constants/
│   ├── animations/
│   ├── config/
│   ├── graph/
│   └── helpers/
│
├── hooks/
│
├── styles/
│
├── types/
│
├── data/
│
└── public/
```

---

# Folder Responsibilities

## app/

Only:

* routing
* layouts
* metadata
* server composition
* page orchestration

Avoid:

* large UI logic
* feature implementation
* animation complexity

Pages should stay thin.

---

# features/

This is the MOST IMPORTANT folder.

Each major homepage/system section should be isolated as a feature domain.

Example:

```txt
features/
├── hero/
│   ├── components/
│   ├── hooks/
│   ├── constants/
│   ├── types.ts
│   └── index.ts
```

Each feature owns:

* its visuals
* local state
* animations
* internal components
* mock data
* interactions

This prevents:
massive unmaintainable component trees.

---

# components/

Only reusable primitives belong here.

Examples:

* buttons
* cards
* grids
* section wrappers
* typography
* navbar
* modal
* command palette
* panels

DO NOT place business/domain-specific sections here.

Bad:

```txt
components/Hero.tsx
```

Good:

```txt
features/hero/components/hero-shell.tsx
```

---

# ui/

This should mostly contain:

* shadcn/ui primitives
* reusable infrastructure components

Examples:

* button
* dialog
* tooltip
* tabs
* table
* badge
* input

These should remain generic.

---

# motion/

Motion primitives only.

Examples:

* fade transitions
* stagger utilities
* glow animations
* scroll reveals
* terminal typing effects

Avoid duplicating Framer Motion logic across features.

---

# lib/

Pure logic and utilities.

Examples:

* graph generation
* repository mock generation
* issue state generators
* analytics helpers
* formatting
* constants
* config

No React components here.

---

# data/

Structured marketing/demo data.

Examples:

* issue examples
* repo graphs
* workflow states
* metrics
* dashboards
* timeline data

Keep fake operational data centralized.

---

# Naming Conventions

Use:

* kebab-case for files
* feature-oriented names
* descriptive component names

Good:

```txt
issue-qualification-pipeline.tsx
repository-graph-panel.tsx
maintainer-analytics-card.tsx
```

Bad:

```txt
Card2.tsx
HeroNew.tsx
SectionFinal.tsx
```

---

# Component Architecture Rules

Prefer:

* many small composable components
* explicit props
* isolated animations
* reusable layout primitives

Avoid:

* giant 1000-line page components
* mixed business + animation logic
* deeply coupled sections

---

# Styling Rules

Use:

* Tailwind utility-first
* clsx/cn helpers
* design tokens
* CSS variables for themes

Avoid:

* inline styles
* random spacing values
* inconsistent layout systems

Spacing and sizing should feel systematic.

---

# State Management Rules

Use local state by default.

Only introduce global state if:

* multiple distant features share state
* orchestration complexity becomes real

Avoid premature Zustand/Redux complexity.

Most marketing interactions should remain local.

---

# Animation Structure

Animations should be isolated.

Good:

```txt
motion/
├── fade-in.ts
├── terminal-stream.ts
├── graph-flow.ts
```

Bad:
random inline animation logic inside every component.

---

# Section Composition Strategy

Each homepage section should feel like:
a standalone product surface.

Examples:

* issue qualification dashboard
* repository intelligence graph
* maintainer analytics console
* ecosystem observability panel

Avoid:
generic marketing blocks.

---

# Visual Hierarchy

The homepage should visually resemble:

* operational command center
* developer observability platform
* infrastructure intelligence dashboard

NOT:

* SaaS template
* AI chatbot startup
* consumer landing page

---

# Engineering Philosophy

Optimize for:

* long-term maintainability
* composability
* clarity
* low cognitive load
* feature isolation

Do NOT overabstract early.

Prefer:
clear duplication over premature abstraction.

Only extract abstractions after repetition becomes obvious.

---

# Important Architectural Principle

The frontend should communicate:
“deep operational intelligence.”

Every section should reinforce:

* repository understanding
* issue qualification
* maintainer workflows
* ecosystem intelligence
* developer infrastructure

The UI itself should feel like:
a developer operations platform.
