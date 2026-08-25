export interface Opening {
  id?: string;
  title: string;
  department: string;
  type: string;
  location: string;
}

export const openings: Opening[] = [
  {
    title: "Frontend Developer",
    department: "Web & Mobile Apps",
    type: "Full-time",
    location: "Dar es Salaam / Remote",
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    type: "Full-time",
    location: "Dar es Salaam",
  },
];

export const values = [
  {
    title: "Build with intent",
    description:
      "Every product ships because it solves a real problem, not because it is trendy.",
  },
  {
    title: "One team, many crafts",
    description:
      "Software, design, data and marketing people work under one roof and learn from each other.",
  },
  {
    title: "Start small, think big",
    description:
      "Senotrams started as a notebook idea in high school — we still build that way.",
  },
];
