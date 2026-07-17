export interface TeamMember {
  name: string;
  role: string;
  isFounder?: boolean;
}

export const founders: TeamMember[] = [
  { name: "Benson Richard", role: "Co-Founder", isFounder: true },
  { name: "Wenseslaus Kidakule", role: "Co-Founder", isFounder: true },
];

// TODO: add the rest of the team — left as open slots for you to fill in
export const teamMembers: TeamMember[] = [
  { name: "", role: "" },
  { name: "", role: "" },
  { name: "", role: "" },
  { name: "", role: "" },
];
