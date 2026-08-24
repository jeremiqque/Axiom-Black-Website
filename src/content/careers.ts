export type Role = { title: string; type: string; location: string; href?: string };
export type Department = { name: string; roles: Role[] };

/** Placeholder open roles — replace with live postings before launch. */
export const departments: Department[] = [
  {
    name: "Engineering",
    roles: [
      { title: "Water / Civil Engineer", type: "Full-time", location: "Newark, NJ" },
      { title: "Project Engineer", type: "Full-time", location: "Newark, NJ" },
      { title: "EIT, Entry Level", type: "Full-time", location: "Newark, NJ" },
    ],
  },
  {
    name: "Technology",
    roles: [
      { title: "Software Engineer", type: "Full-time", location: "Newark, NJ · Hybrid" },
      { title: "Data Engineer", type: "Full-time", location: "Remote (US)" },
    ],
  },
  {
    name: "Consulting & Operations",
    roles: [
      { title: "Project Manager", type: "Full-time", location: "Newark, NJ" },
      { title: "Business Development Lead", type: "Full-time", location: "Newark, NJ" },
    ],
  },
];
