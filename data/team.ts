export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Benson Richard",
    role: "Founder & CEO (CTO)",
    focus: "Software Development & Product",
    bio: "Leads product engineering web, mobile and custom systems from idea to production. Sets the overall technical and business direction of Senotrams.",
  },
  {
    name: "Wenseslaus Kidakule",
    role: "Co-founder & Managing Director",
    focus: "Project Management & Operations",
    bio: "Oversees project delivery, team coordination and day-to-day operations. Ensures every project is executed on time and to a high standard.",
  },
  {
    name: "Kelvin Dickson",
    role: "Co-founder & Assistant Managing Director",
    focus: "Marketing, Sales & Product",
    bio: "Leads marketing, sales and product strategy. Connects Senotrams’ offers to the right audiences through campaigns, content and clear messaging.",
  },
  {
    name: "Nicolaus",
    role: "Graphic Designer & Content Expert",
    focus: "Visual Design & Content",
    bio: "Creates brand identity, visual systems and content that make Senotrams’ work recognisable and professional.",
  },
  {
    name: "Edson Edwin",
    role: "Motion Graphics & Digital Arts",
    focus: "Animation & Motion Design",
    bio: "Specialises in motion graphics and digital arts, bringing life and movement to Senotrams’ visual communications.",
  },
  {
    name: "Darlington Esbon",
    role: "Software Developer",
    focus: "Software Engineering",
    bio: "Builds and maintains web and software systems, contributing to the technical delivery of Senotrams’ products and client projects.",
  },
];