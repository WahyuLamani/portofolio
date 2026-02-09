import {
  Calendar,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  MessageSquare,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "Pramita Helper",
    category: "Web App",
    year: "2025",
    href: "https://app-pramitamanado.vercel.app/",
    description:
      "This app is for helping companies with their daily work at Pramita Manado Clinical Laboratory.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Movie From OMDb",
    category: "Front end W/ API",
    year: "2024",
    href: "https://movie-from-omdb.vercel.app/",
    description:
      "This app is for searching movies from OMDb API and displaying the details.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
  },
  {
    id: 3,
    title: "Cerdas Cermat Game Interface",
    category: "UI Interface Tool",
    year: "2024",
    href: "https://cerdas-cermat-pramita.vercel.app/",
    description:
      "This app is a game interface for the Cerdas Cermat likely family 100 game, allowing users to use the utility functions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "HPP system Calculating",
    category: "Web App",
    year: "2024",
    href: "https://hppsystem-by-lumi-and-bloom.vercel.app/",
    description:
      "This app is for calculating HPP (Harga Pokok Penjualan) in a web-based system.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    title: "Travedilo",
    category: "Web App",
    year: "2024",
    href: "https://github.com/WahyuLamani/task-traveloka-clone/",
    description:
      "An application similar to Traveloka which is usually used for renting accommodation with the advantage that rentals can be done on an hourly basis, where the user is the accommodation owner, tenant, and administrator, each of whom has their own duties and responsibilities.",
    tags: [
      "Laravel",
      "Blade",
      "Bootstrap 5",
      "Jquery",
      "Pusher",
      "Realtime Notification",
      "Vite",
      "Mobile App",
    ],
  },
  {
    id: 6,
    title: "Least Square Regression",
    category: "Web App",
    year: "2024",
    href: "https://github.com/WahyuLamani/daily-sales/",
    description:
      "Sales simulation application for goods in various categories equipped with least square regression calculations",
    tags: ["Laravel", "Blade", "Bootstrap 5", "Jquery", "Regression", "Vite"],
  },
  {
    id: 7,
    title: "Crew Certification",
    category: "Web App",
    year: "2024",
    href: "https://github.com/WahyuLamani/task-certification/",
    description:
      "website for registration of ship crew with certain criteria and requirements",
    tags: ["Laravel", "Blade", "Bootstrap 5", "Vite"],
  },
  {
    id: 8,
    title: "Shopptify",
    category: "Web App",
    year: "2024",
    href: "https://github.com/WahyuLamani/task-onlineshop/",
    description: "simple online shop application built with vanilla php",
    tags: ["php", "Mysql", "Javascript"],
  },
  {
    id: 8,
    title: "Goods Distribution Management System",
    category: "Web App",
    year: "2021",
    href: "https://github.com/WahyuLamani/TA-server/",
    description:
      "This application is my first step in this portfolio. It was built to complete my Diploma 4 studies. It's used for distribution, real-time item tracking, delivery handling, and product monitoring.",
    tags: ["Laravel", "Blade", "Bootstrap 4", "Jquery", "Rest API"],
  },
];

export const skills: Skill[] = [
  { name: "Laravel", level: 95 },
  { name: "React & Next.js", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "UI/UX Design", level: 80 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Node.js", level: 70 },
];

export const sosialMedia: {
  icon: LucideIcon;
  href: string;
}[] = [
  { icon: Github, href: "https://github.com/WahyuLamani/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/wahyulamani/" },
  { icon: Mail, href: "mailto:wahyulamani03@gmail.com" },
  { icon: Instagram, href: "https://www.instagram.com/revelacio.w/" },
];

export const workValues: {
  number: string;
  label: string;
}[] = [
  { number: "10+", label: "Projects" },
  { number: "10+", label: "Clients" },
  { number: "3+", label: "Years" },
];

export const Spesialists: string[] = [
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "MySql",
];

export const contactMethods: {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
  primary: boolean;
}[] = [
  {
    icon: Calendar,
    label: "Schedule a Call",
    description: "Book a 30-min consultation",
    href: "https://cal.com/wahyu-lamani", // Cal.com
    primary: true,
  },
  {
    icon: Mail,
    label: "Send Email",
    description: "wahyulamani03.com",
    href: "mailto:wahyulamani03.com",
    primary: false,
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    description: "@revelaciow",
    href: "https://t.me/revelaciow",
    primary: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/wahyulamani/",
    primary: false,
  },
];
