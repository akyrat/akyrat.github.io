# Portfolio Website — Build Spec

A spec for building a personal portfolio / CV website for **Andreas Kyratzis**, Software Engineer.

---

## How to work with me (please read first)

- **Ask questions.** Don't guess on anything ambiguous — design choices, structure, tech, naming. I'd rather answer a quick question than undo a wrong assumption.
- **Keep it conversational and collaborative.** Propose, check in, iterate. This is a back-and-forth, not a one-shot delivery.
- **Brief is good.** Short answers and small increments over giant walls of output.
- **This is v1.** I'm building this in passes. Today is about getting a clean visual skeleton up. I'll come back with more detail (especially my Autodesk work) and we'll extend it.

---

## Goal

A personal portfolio site that doubles as a richer, more detailed version of my CV — more depth than a one-page document allows. It covers my professional work **and** personal projects, presented as a **timeline** to show progression over time.

---

## Guiding principles

1. **Maintainability is the #1 priority.** I will be updating this regularly for years — adding projects, updating roles, tweaking copy. Content must be easy to edit **without touching layout/styling code**. Separate content (data) from presentation. Adding a new timeline entry should be as simple as adding a new data object/markdown file/etc. — propose the cleanest approach and explain the tradeoff briefly.
2. **Static and simple to host.** Plan is GitHub Pages (static hosting, no backend). Keep the stack lightweight and deployment trivial. Flag anything that won't play nicely with GitHub Pages.
3. **Clean, professional, fast.** I'm a software engineer — the site itself is a signal. Tasteful, legible, not over-designed. Mobile-responsive.
4. **Extensible.** Structure it so new sections (e.g. a future blog, more project types) can be added later without a rewrite.

---

## Tech

No hard requirements from me — propose a stack and let's discuss. Constraints: must be GitHub Pages-friendly, easy for me to maintain, and content-editable without digging through presentation code. I'm comfortable with code (C++, Python, TypeScript/React, etc.), so a light framework or static site generator is fine if it earns its keep. **Ask me before locking in the stack.**

---

## Structure (timeline-driven)

The spine of the site is a **chronological timeline** interleaving professional roles and personal projects. Rough combined ordering, newest first:

- **2024–present** — Software Engineer, Autodesk
- **2026** — *Solid Carbide* (personal project)
- **2023–2024** — Graduate Software Engineer, Autodesk
- **2023** — *LoRaChord* (BSc dissertation)
- **2021–2022** — Intern Software Engineer, Autodesk
- **2020** — Tower Defense game (personal project)
- **2019–2023** — BSc Computer Science, Newcastle University

The timeline supports a **three-way filter** — `Unified` / `Professional` / `Personal` — rendered as tabs inside a **rounded-corner container (the tab switcher only)**. The timeline itself sits below with **no container/border** — it should feel open on the page, not boxed in. Switching tabs restructures the timeline **live with smooth animation** (entries animate in/out and the connecting line re-flows) rather than a hard reload. University counts as **Professional**. A **chronological sort toggle** (newest-first / oldest-first) sits alongside the tabs.

**Sections now defined (see Design Direction below):** hero, About Me, the portfolio timeline block, and a skills/tech summary. I'll supply the actual photos/images myself — leave placeholder slots, don't source or generate any imagery.

---

## Content that's ready now

> Note: the **Autodesk work experience below is a v1 starting point.** I'm going to expand this significantly in a later pass, so build the section to hold richer content but don't over-invest in its current wording.

### Work Experience — Autodesk

**Software Engineer | May 2024 – Present**
- Owned and evolved a production RAG-based Question Answering system embedded in Fusion 360, reaching ~1,000 users in private preview, later integrated into a platform-wide multi-agent architecture.
- Took operational ownership of the assistant during multiple leadership gaps, ensuring release readiness, service stability, and quality under tight deadlines while coordinating with cross-functional stakeholders.
- Designed and maintained an end-to-end evaluation framework, reducing an over-complex setup to four interpretable metrics covering correctness, hallucination, and retrieval quality.
- Acted as key technical stakeholder evaluating third-party LLM evaluation tooling via hands-on PoCs, contributing to a company-wide standard based on cost/capability trade-offs.
- Designed and built custom tools over Fusion's manufacturing API rather than exposing the API directly — improving security by constraining LLM-accessible actions, reducing token spend, and increasing tool-call accuracy through iteratively refined tool descriptions. Worked with the team to evolve the tool taxonomy from noun-based to verb-based action design, later carried into the MCP tool architecture.
- Architected and implemented function-calling/tool-invocation workflows over public APIs, framing tool selection as a closed-set classification problem with repeat-run reliability measurement.
- Improved RAG retrieval pipelines through re-ranking, query transformation, multi-query strategies, and systematic data ingestion/preprocessing improvements.
- Prototyped an adaptive MCP-based QA workflow exposing retrieval as a dynamic tool to the LLM, increasing similarity to expert-refined ground truths by ~20% in initial evaluations.

**Graduate Software Engineer | Sep 2023 – May 2024**
- Improved toolpath performance by 40% via flame-graph profiling and refactoring core class structures in a large legacy codebase.
- Expanded Fusion's public API by exposing low-level geometry selection functionality to external developers.

**Intern Software Engineer | Jun 2021 – Jun 2022**
- Rotated across five teams over 12 months, contributing to feature delivery, performance improvements, and professional web development (TypeScript, React, Redux) within Fusion 360's large legacy codebase.

### Education

- **Level 7 AI & Data Science Apprenticeship**, Cambridge Spark | May 2024 – Nov 2025 — Postgraduate (Master's equivalent), applied ML/AI deployment. Completed with a full-time return offer from Autodesk.
- **BSc Computer Science (First Class, 80.5%)**, Newcastle University | Sep 2019 – Jun 2023 — Dissertation: *"LoRaChord — peer-to-peer communication client for smart agriculture systems."*

### Personal Projects

**Solid Carbide — Survival Roguelike Driving Game** *(solo project, built in ~1 month using Cursor) — 2026*
- Approached the project as a game designer with a software engineering background — owning all systems design, architecture, and balancing decisions, and using Cursor as an AI pair-programmer to bridge Unity-specific implementation.
- Designed a fully data-driven architecture (weapons, enemy types, and vehicle handling as ScriptableObjects) enabling rapid balancing without code changes — supporting 23 car types across 163 variants, 6 weapon systems, 10 stacking power-ups, and tiered elite/boss encounters.
- Implemented systems beyond core gameplay: persistent meta-progression with a save system and in-game shop, full input rebinding (keyboard + gamepad), and local couch co-op multiplayer.
- Built custom Unity editor tooling (procedural stage generation, map preview baking) to speed up content iteration.
- Curated and integrated commercially-licensed community art assets; sent a cross-platform (Windows + macOS) build to friends via private playtest, supported by a structured dev process — phased roadmap, tech-debt tracking, and devlogs.
- **Media:** leave placeholder slots for screenshots / GIFs — I'll add these myself, don't generate or source any.

**LoRaChord — Peer-to-Peer Communication Client for Smart Agriculture** *(BSc Dissertation, Newcastle University) — 2023*
- *Include a "Download full dissertation (PDF)" link/button — I'll provide the file.*

> My BSc dissertation tackled a real limitation in smart agriculture IoT systems: centralized gateway architectures create single points of failure, latency, and security risk. I designed a peer-to-peer backup communication layer for IoT devices over LoRa radio, adapting the Chord protocol — originally built for key-based DHT lookup — into a packet-based node-lookup scheme suited to LoRa's broadcast nature, including a custom packet protocol with request deduplication, and a full hardware implementation on Arduino boards. To test it at meaningful scale, I built a C++ simulation harness, since testing with hundreds of physical boards wasn't feasible. The standout result: node failures actually *improved* network performance, since they triggered more frequent re-stabilization of the network's internal routing tables — a fittingly counter-intuitive finding for a system designed to handle failure.

**Tower Defense Game (Unity)** *— 2020*
- First foray into game development, built during the 2020 lockdown by following YouTube tutorials and hand-coding all systems — no AI coding tools existed yet at this level of capability.
- Reached a playable state across 1–2 levels; project was never finished, but it planted the interest that led to Solid Carbide later.

---

## Tech skills (for the skills section)

- **Languages:** Python, C++, TypeScript, JavaScript, C#, Java, Bash
- **Frameworks:** React, Redux, Node, Express, Vue
- **Deployment:** AWS, Azure, Docker
- **Databases:** DynamoDB, Weaviate, Firebase, SQL
- **AI/ML:** RAG, LLM evaluation, MCP, tool/function calling, data wrangling, NLP

---

## Design direction (open to implementation input)

> This captures the **look and feel** I'm going for. Treat it as direction, not law — if something here is awkward to implement, expensive for performance, or you see a better approach, raise it before building. I'd rather discuss a tradeoff than have you silently work around it.

**Overall theme:** Dark.

**Mood:** Mostly clean and restrained — content breathing room, legible typography — with **subtle playful accents that nod to the game projects** (e.g. small motion flourishes, an arcade-ish touch on hover/expand, tasteful accent color). Personality through small details, not a loud theme. Avoid anything that reads as cluttered or gimmicky.

**Page flow (top to bottom):**

1. **Hero** — my name + profession ("Software Engineer"). Optional photo of me (I'll supply; design it to work with or without). Keep it simple and confident.
2. **About Me** — a more personal, visual section. Mixes short prose with imagery (images supplied by me — leave slots):
   - From **Thessaloniki** (city image)
   - Teenage summers working on my dad's construction team — building industrial-grade freezer rooms with panels, in Germany (image if I find one)
   - Studied at **Newcastle University** (image)
   - Interests: favourite **science fiction** material, **gaming**, **guitar / music**
   - Tone: genuine and a bit personal, not a corporate bio.
3. **Portfolio timeline** — the centerpiece (see below).
4. **Skills / tech** summary.
5. Footer with **contact / links** (GitHub, LinkedIn).

**The timeline (centerpiece):**

- The **filter tabs sit inside a rounded-corner container** (the tab switcher only). The **timeline itself has no container or border** — it should feel open on the page, not boxed in.
- **Three filter tabs**: Unified / Professional / Personal. Switching **restructures the timeline live with smooth animation**, not a reload.
- A **chronological sort toggle** (newest ↔ oldest) alongside the tabs.
- **Vertical orientation**, nodes top-to-bottom.
- Each entry is a **circular node**, kept as minimal as possible: a small **image/visual cue** + a **short title**. The **date sits to the side**, not inside the node.
- Nodes are connected by **discrete arrows** showing progression direction.
- Clicking a node **expands it in place** (a drop-down reveal of structured text / multimedia) — **not** a modal or popup. Collapsing returns it cleanly.
- Playful accent moment on expand/hover is welcome here as long as it stays smooth and subtle.

**Maintainability expectation (reiterated, because it drives the architecture):**
I want clean, well-factored components — a reusable timeline-node component/class with **configurable behavior**, and **data-driven entries** so I can add/edit/reorder nodes or tweak a section's behavior later without rework. When you scaffold this, show me how the node component and its data are structured early so we can make sure it's flexible before content gets piled on.

---



1. A working visual skeleton of the site: layout, timeline component, project/role entries rendered from the ready content above.
2. The maintainability approach in place (content separated from presentation) so I can see how I'll add entries later.
3. Responsive and deployable to GitHub Pages.
4. Placeholder slots where pending content (About, media, dissertation PDF) will go.

Start by asking me whatever you need to (stack, timeline layout, design direction) before building. Let's keep it collaborative.
