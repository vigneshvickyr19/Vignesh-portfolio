export interface Project {
  title: string;
  description: string;
  techs: string[];
  /** Tailwind gradient classes for the card backdrop/overlay */
  color: string;
  liveUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [

  {
    title: "Qatar",
    description:
      "Developed scalable UI using reusable React components and implemented React Query for API caching. Built comments system, map integrations, and AI-based search functionality while improving performance through banner analytics tracking. Impact: Delivered high-performance platform with better user engagement and faster data loading.",
    techs: ["Next.js", "TypeScript", "TanStack Query", "i18n", "Material UI", "Framer Motion"],
    color: "from-primary/20 to-orange-900/20",
    liveUrl: "https://www.qatarliving.com/",
    image: "/images/qatart_image.png",
  },
  {
    title: "HRMS",
    description:
      "Developed employee, payroll, and reporting modules using React Query for server state management. Integrated Firebase Analytics and FCM push notifications, optimizing dashboard performance for large datasets. Impact: Improved workflow efficiency, real-time communication, and analytics tracking.",
    techs: ["Next.js", "TypeScript", "Chart.js", "TanStack Query", "Firebase", "i18n"],
    color: "from-purple-500/20 to-pink-900/20",
    liveUrl: "https://hitayu.live/",
    image: "/images/hrms_image.jpeg",
  },
  {
    title: "AFS – AI Based",
    description:
      "Built AI-powered UI for real-time Q&A interaction with efficient server-state management. Developed an admin analytics dashboard for tracking usage while optimizing API integration flows. Impact: Enhanced user engagement and enabled data-driven insights.",
    techs: ["React.js", "JavaScript", "Ant Design", "TanStack Query"],
    color: "from-blue-500/20 to-cyan-900/20",
    liveUrl: "https://proud-beach-0f8a0190f.5.azurestaticapps.net/",
    image: "/images/afs_image.jpeg",
  },
  {
    title: "MeAndYou",
    description:
      "A premium dating platform focused on authenticity and real-time discovery. Built with a focus on 100% verified profiles, instant conversations, and privacy-first architecture.",
    techs: [
      "React 18",
      "TypeScript",
      "Bun",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Query",
      "Zod",
      "Framer Motion",
    ],
    color: "from-orange-500/20 to-red-900/20",
    liveUrl: "https://www.meandyou.in/",
    image: "/images/meandyou_image.png",
  },
    {
    title: "Rowgistic",
    description:
      "Designed and developed a comprehensive cross-platform mobile application for the rowing community, streamlining logistics and event coordination. Features an integrated social networking space for rowers and trainers, real-time boat tracking and event management, and a secure peer-to-peer marketplace facilitating boat trading between owners.",
    techs: ["React Native", "Firebase Auth", "Firestore", "Material UI", "JavaScript"],
    color: "from-orange-500/20 to-amber-950/20",
    liveUrl: "https://rowgistic.com/",
    image: "/images/rowgistic_image.png",
  },
];
