export interface TimelineEntry {
  id?: string;
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2022 High school",
    title: "Just an idea",
    description:
      "Started sketching the idea that would become Senotrams — long before it was a company.",
  },
  {
    year: "2023 Naming",
    title: "SENOTRAMS is named",
    description:
      'The name comes from reversing "Smartones" a small detail that became the identity for everything that followed.',
  },
  {
    year: "2025 Launch",
    title: "Services go live",
    description:
      "Web & mobile apps, hosting, design, marketing, data and content services open to clients across Tanzania.",
  },
  {
    year: "2026",
    title: "Growing the team",
    description:
      "Expanding delivery capacity and product lines while staying focused on practical digital services for businesses.",
  },
];
