export interface AboutStat {
  value: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { value: "2+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "20+", label: "Technologies" },
  { value: "3", label: "Awards" },
];

// Keep bio paragraphs as an array so future updates are a single-line change
export const ABOUT_BIO: string[] = [
  "Software Engineer with 2+ years of experience building scalable and high-performance web applications using React.js and Next.js. Strong expertise in TypeScript, component architecture, and performance optimization.",
  "Skilled in managing server state using TanStack React Query, improving API efficiency through caching and background updates, and designing reusable, maintainable UI systems. Familiar with backend development using Node.js and focused on delivering production-ready, scalable solutions.",
];
