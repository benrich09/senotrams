// The six subsidiaries under Senotrams Group. `accent` picks which of the
// two brand colors (orange or blue) a subsidiary's card, badge and detail
// page lean on. Every field marked "photo" / "caption" is a placeholder
// slot — swap the image in and the caption tells you what should go there.

export type Accent = "orange" | "blue";

export interface Service {
  title: string;
  detail: string;
}

export interface Subsidiary {
  slug: string;
  monogram: string;
  name: string;
  tagline: string;
  role: string; // one-line role in the wider tech industry / group
  accent: Accent;
  description: string; // short, used on cards
  longDescription: string; // longer, used on the detail page hero
  services: Service[];
  coverCaption: string; // what photo belongs in the detail-page hero
  galleryCaptions: string[]; // what photos belong in the "work" gallery
  bookingNote: string; // shown above the booking form on the detail page
  website: string; // the subsidiary's own website URL (internal page for now — replace with the live domain when it exists)
}

export const subsidiaries: Subsidiary[] = [
  {
    slug: "avionics",
    website: "/subsidiaries/avionics",
    monogram: "AV",
    name: "Avionics",
    tagline: "Software Engineering & Products",
    role: "The group's engineering core",
    accent: "blue",
    description:
      "Software engineering and software products — the websites, apps and internal systems that businesses run on.",
    longDescription:
      "Avionics is the engineering arm of Senotrams Group. It designs, builds and maintains software products end to end — from a first prototype to a system a whole business depends on every day.",
    services: [
      { title: "Website development", detail: "Marketing sites, e-commerce and custom web platforms." },
      { title: "Web applications", detail: "Dashboards, portals and internal tools built to scale." },
      { title: "Mobile applications", detail: "Native and cross-platform apps for Android & iOS." },
      { title: "Software products", detail: "Off-the-shelf and custom software built for resale or licensing." },
      { title: "ERP & business systems", detail: "Inventory, HR, POS and operations systems tailored to you." },
      { title: "API & systems integration", detail: "Connecting your existing tools into one working system." },
    ],
    coverCaption: "Cover photo: developer workstation or product screenshot",
    galleryCaptions: [
      "Screenshot of a delivered web or mobile app",
      "Engineering team collaborating in the office",
      "Client product demo or launch photo",
    ],
    bookingNote: "Tell us what you're building — a website, an app, or a full business system — and we'll scope it with you.",
  },
  {
    slug: "sati",
    website: "/subsidiaries/sati",
    monogram: "SA",
    name: "SATI",
    tagline: "Digital Monitoring & Gaming",
    role: "Keeps people connected and entertained",
    accent: "orange",
    description:
      "Digital monitoring — WiFi services and other digital products — plus gaming installations and sales.",
    longDescription:
      "SATI keeps people connected and entertained. It covers digital monitoring services such as WiFi setup and real-time tracking, alongside gaming installations, consoles and accessories.",
    services: [
      { title: "WiFi services", detail: "Network setup, configuration and ongoing support for homes & offices." },
      { title: "Digital monitoring", detail: "Real-time tracking, CCTV and remote monitoring solutions." },
      { title: "Computer maintenance", detail: "Repairs, servicing and Windows/software installation." },
      { title: "Gaming installations", detail: "Console & PC gaming setup for homes, cafes and events." },
      { title: "Gaming sales", detail: "Consoles, accessories and gaming equipment, sourced and sold." },
      { title: "Digital government services", detail: "BRELA, RITA, NIDA, SGR and bus ticket e-services." },
    ],
    coverCaption: "Cover photo: WiFi/network installation or gaming setup",
    galleryCaptions: [
      "WiFi or network installation in progress",
      "Gaming console/arcade setup photo",
      "Technician servicing digital equipment",
    ],
    bookingNote: "Need WiFi installed, equipment monitored, or a gaming setup sorted? Book a visit below.",
  },
  {
    slug: "kidaino",
    website: "/subsidiaries/kidaino",
    monogram: "KD",
    name: "KIDAINO",
    tagline: "Marketing, Design & Print",
    role: "The group's creative studio",
    accent: "blue",
    description:
      "Digital marketing, graphic & design, and printing services — brand identity built and promoted end to end.",
    longDescription:
      "KIDAINO is the creative studio of Senotrams Group — covering digital marketing, graphic design and printing, so a brand looks right and reaches the right people.",
    services: [
      { title: "Graphic design & brand identity", detail: "Logos, brand guidelines and visual identity systems." },
      { title: "Digital marketing", detail: "Social media management, ad campaigns and content strategy." },
      { title: "2D & 3D animation", detail: "Motion graphics and animated content for brands." },
      { title: "Video ads & audio jingles", detail: "Produced video advertising and audio branding." },
      { title: "Printing services", detail: "Flyers, invitation cards, banners and merchandise printing." },
      { title: "Photo-based advertising", detail: "Product & campaign photography for marketing use." },
    ],
    coverCaption: "Cover photo: design mockup or printed merchandise",
    galleryCaptions: [
      "Brand identity / logo design mockup",
      "Printed merchandise or banners in production",
      "Video or photo ad production shoot",
    ],
    bookingNote: "From a logo to a full marketing campaign — describe what you need designed, printed or promoted.",
  },
  {
    slug: "cognita",
    website: "/subsidiaries/cognita",
    monogram: "CG",
    name: "COGNITA",
    tagline: "AI & Data Analysis",
    role: "The group's intelligence layer",
    accent: "orange",
    description:
      "Artificial intelligence and data analysis — turning raw data into models, dashboards and decisions.",
    longDescription:
      "COGNITA is Senotrams Group's data and AI subsidiary. It builds machine learning models, analytics dashboards and data pipelines that help businesses understand their data and act on it.",
    services: [
      { title: "Data analysis & reporting", detail: "Cleaning, analysing and reporting on business data." },
      { title: "Business intelligence dashboards", detail: "Live dashboards for tracking KPIs and performance." },
      { title: "Machine learning models", detail: "Custom models for prediction, classification and scoring." },
      { title: "Predictive analytics", detail: "Forecasting demand, revenue, risk and other trends." },
      { title: "Natural language & computer vision", detail: "Chatbots, text analysis and image-recognition tools." },
      { title: "Data pipeline engineering", detail: "Automated collection, storage and processing of data." },
      { title: "AI strategy consulting", detail: "Helping teams identify where AI adds real value." },
    ],
    coverCaption: "Cover photo: data dashboard screenshot or analytics team at work",
    galleryCaptions: [
      "Analytics dashboard or data visualisation screenshot",
      "AI model or workflow diagram",
      "Data team working session photo",
    ],
    bookingNote: "Tell us about your data or the decision you're trying to make — we'll suggest the right model or dashboard.",
  },
  {
    slug: "sentryx",
    website: "/subsidiaries/sentryx",
    monogram: "SX",
    name: "SENTRYX",
    tagline: "Auditing, Consultation & Cyber Security",
    role: "The group's trust & security layer",
    accent: "blue",
    description:
      "System auditing, IT consultation and cyber security services — keeping systems safe, compliant and reliable.",
    longDescription:
      "SENTRYX protects and audits the systems businesses rely on. It runs security assessments, IT consultation and cyber security services to keep data and infrastructure safe.",
    services: [
      { title: "System auditing", detail: "Reviewing IT systems and processes for gaps and risks." },
      { title: "IT consultation", detail: "Advisory on infrastructure, tooling and technology decisions." },
      { title: "Cyber security assessments", detail: "Vulnerability scans and penetration testing." },
      { title: "Security hardening", detail: "Locking down networks, servers and applications." },
      { title: "Compliance & policy review", detail: "Aligning systems with data-protection best practice." },
      { title: "Incident response support", detail: "Helping recover from and investigate security incidents." },
    ],
    coverCaption: "Cover photo: security audit session or server room",
    galleryCaptions: [
      "Security audit or consultation meeting in progress",
      "Server room / network security setup",
      "Team reviewing a security report",
    ],
    bookingNote: "Let us know what needs auditing or securing — a system, a network, or a full compliance review.",
  },
  {
    slug: "nexora",
    website: "/subsidiaries/nexora",
    monogram: "NX",
    name: "NEXORA",
    tagline: "Cloud, Networking & IT Infrastructure",
    role: "The group's infrastructure backbone",
    accent: "orange",
    description:
      "Cloud infrastructure, networking and IT hardware — the backbone every other subsidiary's products run on.",
    longDescription:
      "NEXORA is the newest subsidiary in the group, built to handle cloud infrastructure, networking and IT hardware — the backbone that every other subsidiary's software and services run on.",
    services: [
      { title: "Cloud hosting & infrastructure", detail: "Setting up and managing servers and cloud environments." },
      { title: "Network design & installation", detail: "LAN/WAN setup for offices, sites and campuses." },
      { title: "IT hardware procurement", detail: "Sourcing computers, servers and networking equipment." },
      { title: "Infrastructure maintenance", detail: "Ongoing support, monitoring and uptime management." },
      { title: "Data backup & recovery", detail: "Backup systems and disaster-recovery planning." },
      { title: "IT infrastructure consulting", detail: "Planning scalable infrastructure for growing businesses." },
    ],
    coverCaption: "Cover photo: server/network hardware or data centre",
    galleryCaptions: [
      "Server or networking hardware installation",
      "Data centre / server room photo",
      "Team setting up IT infrastructure on site",
    ],
    bookingNote: "Tell us what needs hosting, networking or upgrading — we'll plan the infrastructure with you.",
  },
];

export const activeSubsidiaries = subsidiaries;
