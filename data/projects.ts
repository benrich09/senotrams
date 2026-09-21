export interface Project {
  id?: string;
  title: string;
  service: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "All Access",
    service: "Web & Customer Experience",
    category: "Website",
    description: "Customer experience outsourcing platform covering call centre operations, WhatsApp support, social media management and training across Tanzania and East Africa.",
    image: "/images/project-allaccess.png",
  },
  {
    title: "Smile Creative",
    service: "Software, SMS & Media",
    category: "Website",
    description: "Digital experiences, bulk SMS campaigns and professional film and media for businesses that want to connect, engage and grow.",
    image: "/images/project-smile.png",
  },
];
