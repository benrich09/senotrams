export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Innovators", href: "/innovators" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers" },
  { label: "Team", href: "/team" },
  { label: "Timeline", href: "/timeline" },
];

export const contactItem: NavItem = {
  label: "Contact",
  href: "/contact",
};