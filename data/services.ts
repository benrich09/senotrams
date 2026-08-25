export type Accent = "orange" | "blue";

export interface ServiceItem {
  slug: string;
  monogram: string;
  name: string;
  tagline: string;
  accent: Accent;
  description: string;
  longDescription: string;
  howItWorks: string[];
  features: string[];
  bookingNote: string;
  externalUrl?: string;
  externalLabel?: string;
  exploreDetails?: { title: string; body: string }[];
  showDomainSearch?: boolean;
}

export const services: ServiceItem[] = [
  {
    slug: "web-mobile-apps",
    monogram: "WM",
    name: "Web & Mobile Apps",
    tagline: "Software that ships",
    accent: "blue",
    description:
      "Custom websites, web apps and mobile products — from idea to production.",
    longDescription:
      "We design and build web and mobile software for businesses that need reliable products, not just mockups. Our product studio experience is showcased on Senotrams Tech (Avionics).",
    howItWorks: [
      "Discovery — goals, users and success metrics",
      "Design — flows, UI and technical plan",
      "Build — iterative sprints with demos",
      "Launch — deploy, train and hand over",
      "Support — fixes, features and growth",
    ],
    features: [
      "Marketing sites & e-commerce",
      "Web applications & dashboards",
      "Android & iOS apps",
      "APIs & integrations",
      "Maintenance & scaling",
    ],
    bookingNote: "Tell us what you are building and we will scope the first milestone.",
    externalUrl: "https://avionics-two.vercel.app/",
    externalLabel: "Explore Senotrams Tech",
    exploreDetails: [
      {
        title: "Software services",
        body: "Web, mobile and enterprise software delivery for teams that need dependable build partners.",
      },
      {
        title: "Ready-made platforms",
        body: "A catalogue of business platforms you can adopt or customise instead of starting from zero.",
      },
      {
        title: "Tech education",
        body: "Practical learning and updates so your team stays current with modern product delivery.",
      },
    ],
  },
  {
    slug: "hosting",
    monogram: "HS",
    name: "Hosting Services",
    tagline: "Stay online",
    accent: "orange",
    description:
      "Web hosting, business email, domains and VPS — managed for uptime.",
    longDescription:
      "We help you get a domain, host your site, set up professional email and manage servers so your business stays reachable.",
    howItWorks: [
      "Choose domain & plan",
      "We provision hosting and SSL",
      "Connect email and DNS",
      "Deploy your site or app",
      "Monitor and support",
    ],
    features: [
      "Managed web hosting",
      "Business email",
      "Domain registration",
      "VPS management",
      "Backups & SSL",
    ],
    bookingNote: "Share what you need hosted and we will recommend a plan.",
    showDomainSearch: true,
  },
  {
    slug: "social-media",
    monogram: "SM",
    name: "Social Media Management",
    tagline: "Consistent presence",
    accent: "blue",
    description: "Content calendars, posting and engagement on the channels that matter.",
    longDescription:
      "We keep your brand active with planned content, publishing and light community management.",
    howItWorks: [
      "Audit channels & audience",
      "Agree tone and calendar",
      "Create and schedule posts",
      "Engage and report monthly",
    ],
    features: [
      "Strategy & calendar",
      "Creative posts",
      "Scheduling",
      "Community replies",
      "Simple analytics",
    ],
    bookingNote: "Tell us your platforms and goals.",
  },
  {
    slug: "graphics-design",
    monogram: "GD",
    name: "Graphics Designing",
    tagline: "Clear visual identity",
    accent: "orange",
    description: "Logos, brand kits and assets for web, print and social.",
    longDescription:
      "Strong visuals help people remember you. We design identity systems and campaign assets that stay consistent.",
    howItWorks: [
      "Brief & references",
      "Concepts",
      "Refinement",
      "Final files for every channel",
    ],
    features: ["Logo & brand", "Social creatives", "Print design", "Decks", "Packaging graphics"],
    bookingNote: "Describe the deliverable and any style you prefer.",
  },
  {
    slug: "animation",
    monogram: "AN",
    name: "Animation",
    tagline: "Motion that explains",
    accent: "blue",
    description: "Short motion graphics, explainers and animated ads.",
    longDescription:
      "Animation makes complex ideas easy to follow — ideal for product explainers and social ads.",
    howItWorks: [
      "Script / storyboard",
      "Style frames",
      "Animation",
      "Sound & export",
    ],
    features: ["2D motion", "Explainers", "Social ads", "Logo intros"],
    bookingNote: "Share length, platform and message.",
  },
  {
    slug: "data-analysis",
    monogram: "DA",
    name: "Data Collection & Analysis",
    tagline: "Decisions from data",
    accent: "orange",
    description: "Collect, clean and analyse data into reports you can use.",
    longDescription:
      "We help you gather the right data and turn it into clear reports and dashboards.",
    howItWorks: [
      "Define questions",
      "Collect & clean",
      "Analyse",
      "Present insights",
    ],
    features: ["Surveys", "Cleaning", "Reports", "Dashboards"],
    bookingNote: "What decision are you trying to support?",
  },
  {
    slug: "digital-marketing",
    monogram: "DM",
    name: "Digital Marketing",
    tagline: "Reach people ready to act",
    accent: "blue",
    description: "Campaigns and ads that bring enquiries — not only clicks.",
    longDescription:
      "We plan and run paid and organic digital campaigns so your offer reaches the right audience.",
    howItWorks: [
      "Define offer & audience",
      "Setup tracking",
      "Launch campaigns",
      "Optimise weekly",
      "Report results",
    ],
    features: [
      "Campaign strategy",
      "Meta & Google ads",
      "Landing advice",
      "Conversion tracking",
      "Monthly reviews",
    ],
    bookingNote: "Share product, audience and monthly budget range.",
  },
  {
    slug: "content-creation",
    monogram: "CC",
    name: "Content Creation",
    tagline: "Words that convert",
    accent: "orange",
    description: "Website copy, blogs, scripts and social content in your voice.",
    longDescription:
      "Clear content helps visitors understand and take the next step — on your site and on social.",
    howItWorks: [
      "Brand voice & goals",
      "Outline",
      "Draft",
      "Edit & publish-ready files",
    ],
    features: [
      "Website copy",
      "Blog articles",
      "Social captions",
      "Email sequences",
      "Brand voice guides",
    ],
    bookingNote: "What content do you need first?",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
