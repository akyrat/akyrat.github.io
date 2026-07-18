---
title: "Software Engineer - Autodesk"
track: "professional"
type: "role"
dateStart: "2024-05"
displayDate: "2024–present"
nodeImage: "../../assets/logos/autodesk-logo.png"
summary: "Working on a LLM-based Assistant for Fusion manufacturing using RAG"
order: 0
links:
  - { label: "Autodesk", href: "https://www.autodesk.com" }
---

## Fusion

- Currently working a new project that uses ML to generate end-to-end Manufacturing process plans.

## Manufacturing Assistant 

Answers manufacturing questions and takes actions on behalf of users. Embedded in Fusion, exposed to users in private preview only.

**Technical Owner of Question Answering**: LLM-based RAG system based on Autodesk-owned documentation.
  - Data curation, cleaning, filtering, chunking and embedding into a Vector Database for RAG.
  - RAG Architecture building blocks _(classification, multi-step and multi-query retrieval, re-ranking)_.
  - Evaluation dataset curation with manufacturing experts.
  - RAG system tuning for optimal embedding/language models, prompts and general architecture.
- **Prototyped** an adaptive **RAG MCP-based Question Answering workflow** exposing retrieval as a dynamic tool to the LLM, **increasing Factual Correctness by ~20%**.

Worked on **Function Calling**, initially implemented with LLM tool-calling, later switched to MCP.

**Techinical Owner of Evaluation** for both Question Answering & Function Calling:
  - **_Question Answering:_** Simplified pre-existing **LLM-as-a-judge** 12 metric framework into 4 intuitive metrics (Answer based and Context based) and came up with **deterministic** metrics for measuring retrieval performance.
  - **_Function Calling:_** Designed and implemented pipeline for repeat-request evaluation, giving a 0-100% score on performance consistency for each function calling tool. Equivalent conversion for MCP.
  - Evaluation focused on giving developers performance insights and regression prevention.
  - Improved pipeline to produce intuitive graphs for bi-weekly stakeholder presentation.
- Took **operational ownership** of the assistant during multiple leadership
  gaps, ensuring release readiness, service stability, and quality under tight
  deadlines while coordinating with cross-functional stakeholders.
- Acted as **key technical stakeholder** in evaluating third-party vendor **LLM evaluation tooling** via hands-on PoCs, contributing to **company-wide adoption**.

Project discontinued in favor of a different implementation.
