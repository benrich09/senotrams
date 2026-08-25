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

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About", href: "/about", description: "Our story and mission" },
      { label: "Careers", href: "/about/careers", description: "Open roles" },
      { label: "Team", href: "/team", description: "People behind Senotrams" },
      { label: "Innovators", href: "/#innovators", description: "Connect with builders" },
    ],
  },
];

export const contactItem: NavSubItem = {
  label: "Contact",
  href: "/contact",
  description: "Share ideas and recommendations",
};
