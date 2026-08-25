export interface TimelineEntry {
  id?: string;
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "High school",
    title: "Just an idea",
    description:
      "Benson Richard and Wenseslaus Kidakule start sketching the idea that would become Senotrams — long before it was a company.",
  },
  {
    year: "Naming",
    title: "SENOTRAMS is named",
    description:
      'The name comes from reversing "Smartones" — a small detail that became the identity for everything that followed.',
  },
  {
    year: "Launch",
    title: "Services go live",
    description:
      "Web & mobile apps, hosting, design, marketing, data and content services open to clients across Tanzania.",
  },
  {
    year: "Today",
    title: "Growing the team",
    description:
      "Expanding delivery capacity and product lines while staying focused on practical digital services for businesses.",
  },
];
