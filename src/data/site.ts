/**
 * Single source of truth for site-wide identity, contact links and the skills
 * summary. Edit here - no presentation code needs touching.
 */
export const site = {
  name: "Andreas Kyratzis",
  role: "Software Engineer",
  tagline:
    "Software engineer working on AI systems - RAG, evaluation, and tool-calling - with a soft spot for building games.",
  email: "", // optional - add to surface a "Get in touch" link
  links: {
    github: "https://github.com/akyrat",
    linkedin: "https://www.linkedin.com/in/andreas-kyratzis/",
  },
  contact: {
    heading: "Let's talk.",
    sub: "Open to interesting problems - Full stack apps (especially LLM-powered), large legacy codebases or good games.",
  },
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "C#", "Java", "Bash"],
  },
  {
    group: "Frameworks",
    items: ["React", "Redux", "Node", "Express", "Vue"],
  },
  {
    group: "Deployment",
    items: ["AWS", "Azure", "Docker"],
  },
  {
    group: "Databases",
    items: ["DynamoDB", "Weaviate", "Firebase", "SQL"],
  },
  {
    group: "AI / ML",
    items: [
      "RAG",
      "LLM evaluation",
      "MCP",
      "Tool / function calling",
      "Data wrangling",
      "NLP",
    ],
  },
];
