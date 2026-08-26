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
  showDomainSearch?: boolean;
  offerings?: { title: string; text: string }[];
  platforms?: { name: string; category: string; description: string }[];
  techStacks?: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "software-development",
    monogram: "SD",
    name: "Software Development",
    tagline: "Web, mobile & systems",
    accent: "blue",
    description:
      "Web apps, mobile apps, custom systems, APIs, cloud and AI — built end to end for your business.",
    longDescription:
      "Senotrams designs, builds, and supports digital products: websites and web applications, native and cross-platform mobile apps, custom business systems, AI features, cloud infrastructure, and ongoing maintenance.",
    howItWorks: [
      "Discovery — goals, users, and success metrics",
      "Design — flows, UI, and technical plan",
      "Build — iterative sprints with demos",
      "Launch — deploy, train, and hand over",
      "Support — fixes, features, and growth",
    ],
    features: [
      "Web development (sites & web apps)",
      "Mobile apps (Android & iOS)",
      "Custom software & business systems",
      "AI solutions & chatbots",
      "Cloud, DevOps & hosting setup",
      "UI/UX design",
      "API & systems integration",
      "Maintenance & support",
    ],
    bookingNote: "Tell us what you are building — a website, an app, a product, or a full system.",
    offerings: [
      { title: "Web Development", text: "Fast, responsive websites and web applications with modern frameworks and maintainable code." },
      { title: "Mobile App Development", text: "Native and cross-platform apps for Android and iOS, from idea to store launch." },
      { title: "Custom Software & Systems", text: "ERPs, portals, and dashboards designed around how your team works." },
      { title: "AI Solutions & Chatbots", text: "Assistants, automation, and ML features that put AI to work in your product." },
      { title: "Cloud & DevOps", text: "Hosting, CI/CD, and infrastructure that scales with your traffic." },
      { title: "UI/UX Design", text: "Research-driven interfaces and design systems that are a pleasure to use." },
      { title: "API & Integration", text: "Payments, SMS, mobile money, and third-party services connected cleanly." },
      { title: "Maintenance & Support", text: "Updates, monitoring, and support long after launch." },
    ],
    platforms: [
      { name: 'Loan Management System', category: 'Finance', description: 'A comprehensive lending platform that streamlines the entire loan lifecycle — applications, approvals, disbursements, repayments, collections, customer management, and financial reporting.' },
      { name: 'Enterprise Resource Planning (ERP)', category: 'Business', description: 'An integrated business management solution that centralizes finance, procurement, inventory, sales, human resources, payroll, and operations to improve efficiency and decision-making.' },
      { name: 'Customer Relationship Management (CRM)', category: 'Business', description: 'A powerful platform for managing customer interactions, sales pipelines, marketing campaigns, customer support, and long-term business relationships.' },
      { name: 'Human Resource Management (HRM)', category: 'Business', description: 'A complete HR solution for managing employee records, recruitment, attendance, leave, payroll, performance evaluations, training, and workforce analytics.' },
      { name: 'Recruitment Portal', category: 'Business', description: 'A digital recruitment platform that simplifies job posting, online applications, candidate screening, interview scheduling, hiring workflows, and recruitment reporting.' },
      { name: 'Leads Management Platform', category: 'Business', description: 'A centralized platform for capturing, tracking, nurturing, and converting sales leads while providing valuable insights into sales performance and customer engagement.' },
      { name: 'School Management System', category: 'Operations', description: 'A complete education management solution covering admissions, student records, attendance, examinations, fee management, staff administration, and parent communication.' },
      { name: 'Vehicle Tracking System', category: 'Operations', description: 'A GPS-powered fleet management solution with real-time vehicle tracking, route optimization, fuel monitoring, driver behavior analysis, maintenance scheduling, and fleet reports.' },
      { name: 'Hotel & Apartment Management System', category: 'Operations', description: 'A property management solution for hotels, lodges, serviced apartments, and rentals — reservations, guest management, housekeeping, billing, payments, and occupancy reporting.' },
      { name: 'Point of Sale (POS)', category: 'Commerce', description: 'A modern POS for retail stores, supermarkets, pharmacies, restaurants, and wholesalers with sales processing, inventory management, barcode support, and business analytics.' },
      { name: 'Revenue Collection System', category: 'Finance', description: 'A secure digital platform for collecting taxes, fees, levies, and utility payments with automated reconciliation, reporting, and payment integration.' },
      { name: 'Ticketing Solution', category: 'Commerce', description: 'A versatile ticketing platform for transport operators, events, tourism, and customer support — online booking, ticket generation, QR code validation, payments, and reporting.' },
      { name: 'Mobile Betting Platform', category: 'Commerce', description: 'A secure and scalable betting solution supporting sports betting, gaming, digital wallets, payment integration, user management, odds management, and real-time reporting.' },
      { name: 'E-commerce Platform', category: 'Commerce', description: 'A feature-rich online shopping platform with secure payments, inventory management, order processing, customer accounts, and delivery tracking.' },
      { name: 'Delivery Management Platform', category: 'Operations', description: 'A logistics solution to assign drivers, optimize delivery routes, track shipments in real time, manage dispatch operations, and improve customer satisfaction.' },
      { name: 'Ride-Hailing Platform', category: 'Operations', description: 'A complete transportation platform connecting passengers and drivers — ride booking, GPS tracking, fare calculation, secure payments, and trip management.' },
      { name: 'Expense Management System', category: 'Finance', description: 'A financial management solution to record expenses, manage budgets, automate approval workflows, generate reports, and maintain better financial control.' },
      { name: 'Construction ERP', category: 'Business', description: 'A specialized enterprise solution for construction companies — projects, contracts, procurement, equipment, labor, budgeting, billing, and project profitability in one platform.' },
      { name: 'Insurance Management Platform', category: 'Finance', description: 'A comprehensive insurance solution for policies, customer records, underwriting, claims processing, premium collection, renewals, agent management, and regulatory reporting.' },
      { name: 'EV Management Platform', category: 'Operations', description: 'An electric mobility platform for EV fleets, battery swapping, charging infrastructure, battery lifecycle, IoT devices, payments, drivers, and real-time operational analytics.' },
      { name: 'Bulk SMS Platform', category: 'Messaging & Payments', description: 'A reliable messaging platform for sending promotional, transactional, and notification SMS to thousands of recipients with delivery tracking and detailed reporting.' },
      { name: 'Mobile Bulk SMS Platform', category: 'Messaging & Payments', description: 'A mobile-first SMS solution to send, schedule, monitor, and manage bulk SMS campaigns directly from mobile devices or integrated applications.' },
      { name: 'Mobile Payment Gateway', category: 'Messaging & Payments', description: 'A secure payment platform integrating mobile money, bank transfers, card payments, and digital wallets so businesses can accept payments across multiple channels.' },
    ],
    techStacks: [
      "React / Next.js",
      "TypeScript",
      "Node.js / Express",
      "React Native / Flutter",
      "PostgreSQL / MongoDB",
      "Tailwind CSS",
      "REST & GraphQL APIs",
      "Docker & CI/CD",
      "Cloud (Vercel, AWS, Render)",
      "Payment & mobile money integrations",
    ],
  },
  {
    slug: "hosting",
    monogram: "HS",
    name: "Hosting Services",
    tagline: "Stay online",
    accent: "orange",
    description: "Web hosting, business email, domains and VPS — managed for uptime.",
    longDescription:
      "Get a domain, host your site, set up professional email, and manage servers so your business stays reachable.",
    howItWorks: [
      "Choose domain & plan",
      "We provision hosting and SSL",
      "Connect email and DNS",
      "Deploy your site or app",
      "Monitor and support",
    ],
    features: ["Managed web hosting", "Business email", "Domain registration", "VPS management", "Backups & SSL"],
    bookingNote: "Share what you need hosted and we will recommend a plan.",
    showDomainSearch: true,
    techStacks: ["DNS & SSL", "cPanel / managed Linux", "VPS (Ubuntu)", "Email (IMAP/SMTP)", "CDN & backups"],
  },
  {
    slug: "social-media",
    monogram: "SM",
    name: "Social Media Management",
    tagline: "Consistent presence",
    accent: "blue",
    description: "Content calendars, posting and engagement on the channels that matter.",
    longDescription: "We keep your brand active with planned content, publishing, and light community management.",
    howItWorks: ["Audit channels & audience", "Agree tone and calendar", "Create and schedule posts", "Engage and report monthly"],
    features: ["Strategy & calendar", "Creative posts", "Scheduling", "Community replies", "Simple analytics"],
    bookingNote: "Tell us your platforms and goals.",
    techStacks: ["Meta Business Suite", "Canva / design tools", "Scheduling tools", "Analytics dashboards"],
  },
  {
    slug: "graphics-design",
    monogram: "GD",
    name: "Graphics Designing",
    tagline: "Clear visual identity",
    accent: "orange",
    description: "Logos, brand kits and assets for web, print and social.",
    longDescription: "Strong visuals help people remember you. We design identity systems and campaign assets that stay consistent.",
    howItWorks: ["Brief & references", "Concepts", "Refinement", "Final files for every channel"],
    features: ["Logo & brand", "Social creatives", "Print design", "Decks", "Packaging graphics"],
    bookingNote: "Describe the deliverable and any style you prefer.",
    techStacks: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects (static + motion assets)"],
  },
  {
    slug: "animation",
    monogram: "AN",
    name: "Animation",
    tagline: "Motion that explains",
    accent: "blue",
    description: "Short motion graphics, explainers and animated ads.",
    longDescription: "Animation makes complex ideas easy to follow — ideal for product explainers and social ads.",
    howItWorks: ["Script / storyboard", "Style frames", "Animation", "Sound & export"],
    features: ["2D motion", "Explainers", "Social ads", "Logo intros"],
    bookingNote: "Share length, platform and message.",
    techStacks: ["After Effects", "Premiere Pro", "Illustrator", "Lottie", "ToonBoom Harmony", "Moho14", "Clip Studio Pro"],
  },
  {
    slug: "data-analysis",
    monogram: "DA",
    name: "Data Collection & Analysis",
    tagline: "Decisions from data",
    accent: "orange",
    description: "Collect, clean and analyse data into reports you can use.",
    longDescription: "We help you gather the right data and turn it into clear reports and dashboards.",
    howItWorks: ["Define questions", "Collect & clean", "Analyse", "Present insights"],
    features: ["Surveys", "Cleaning", "Reports", "Dashboards"],
    bookingNote: "What decision are you trying to support?",
    techStacks: ["Excel / Google Sheets", "koboToolBox","Survey CTO","Python (pandas)","Power BI", "SQL", "Dashboard tools"],
  },
  {
    slug: "digital-marketing",
    monogram: "DM",
    name: "Digital Marketing",
    tagline: "Reach people ready to act",
    accent: "blue",
    description: "Campaigns and ads that bring enquiries — not only clicks.",
    longDescription: "We plan and run paid and organic digital campaigns so your offer reaches the right audience.",
    howItWorks: ["Define offer & audience", "Setup tracking", "Launch campaigns", "Optimise weekly", "Report results"],
    features: ["Campaign strategy", "Meta & Google ads", "Landing advice", "Conversion tracking", "Monthly reviews"],
    bookingNote: "Share product, audience and monthly budget range.",
    techStacks: ["Meta Ads", "Google Ads", "Analytics", "Pixel / conversion APIs"],
  },
  {
    slug: "content-creation",
    monogram: "CC",
    name: "Content Creation",
    tagline: "Words that convert",
    accent: "orange",
    description: "Website copy, blogs, scripts and social content in your voice.",
    longDescription: "Clear content helps visitors understand and take the next step — on your site and on social.",
    howItWorks: ["Brand voice & goals", "Outline", "Draft", "Edit & publish-ready files"],
    features: ["Website copy", "Blog articles", "Social captions", "Email sequences", "Brand voice guides"],
    bookingNote: "What content do you need first?",
    techStacks: ["Editorial workflows", "SEO basics", "CMS (WordPress / headless)", "Brand guidelines"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
