export interface Project {
  id?: string;
  title: string;
  service: string;
  category: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Business website rebuild",
    service: "Web & Mobile Apps",
    category: "Website",
    description: "Modern marketing site with contact and service pages.",
  },
  {
    title: "Managed hosting & email",
    service: "Hosting Services",
    category: "Infrastructure",
    description: "Domain, SSL, hosting and business email setup.",
  },
  {
    title: "Brand identity pack",
    service: "Graphics Designing",
    category: "Design",
    description: "Logo, colours, typography and social templates.",
  },
];
