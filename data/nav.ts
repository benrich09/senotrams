export interface NavSubItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavSubItem[];
}

// Order requested: Home, Subsidiaries, Projects, About (with dropdown), then
// Contact rendered separately as the final CTA button in the Navbar.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Subsidiaries", href: "/subsidiaries" },
  { label: "Projects", href: "/projects" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "About",
        href: "/about",
        description: "Our story, mission and how the group started",
      },
      {
        label: "Careers",
        href: "/about/careers",
        description: "Open roles across all six subsidiaries",
      },
      {
        label: "Team",
        href: "/team",
        description: "The founders and people behind Senotrams",
      },
      {
        label: "Timeline",
        href: "/about/timeline",
        description: "Milestones from idea to six subsidiaries",
      },
    ],
  },
];

// Rendered as the final, visually distinct button in the navbar.
export const contactItem: NavSubItem = {
  label: "Contact",
  href: "/contact",
  description: "Reach out and get a service booked",
};
