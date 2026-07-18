---
title: "Solid Carbide"
track: "personal"
type: "project"
dateStart: "2026-01"
displayDate: "2026"
nodeImage: "../../assets/logos/solid-carbide-logo.png"
summary: "Survival roguelike driving game - solo, built in ~1 month with Cursor."
links:
  - { label: "GitHub", href: "https://github.com/akyrat/SolidCarbide" }
accent: true
media:
  - src: "../../assets/timeline-content/SolidCarbide.gif"
    alt: "Solid Carbide gameplay gif"
---

A survival roguelike driving game, built solo in roughly one month heavily Cursor-assisted.

- Approached the project as a **game designer with a software engineering background** - owning all systems design, architecture, and balancing
  decisions, and using Cursor to bridge Unity-specific implementation.
- Designed a fully **data-driven architecture** (weapons, enemy types, and
  vehicle handling as ScriptableObjects) enabling rapid balancing without code
  changes.
- Implemented 23 car types across 163 variants (cosmetic only), 6 different weapon and
  10 power-up progressions, and tiered elite/boss encounters.
- Implemented systems beyond core gameplay: persistent meta-progression with a
  save system and in-game shop, full input rebinding (keyboard + gamepad), and
  local couch co-op multiplayer.
- Built custom **Unity editor tooling** (procedural stage generation, map
  preview baking) to speed up content iteration.
- Shipped a cross-platform (Windows + macOS) build to friends via private playtest,
  supported by a structured dev process - phased roadmap, tech-debt tracking,
  and devlogs.
