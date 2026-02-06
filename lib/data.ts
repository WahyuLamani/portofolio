import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
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
    category: "UI Kit",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    id: 5,
    title: "HPP system Calculating",
    category: "Web Design",
    year: "2024",
    href: "https://hppsystem-by-lumi-and-bloom.vercel.app/",
    description:
      "This app is for calculating HPP (Harga Pokok Penjualan) in a web-based system.",
  },
];

export const skills: Skill[] = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 80 },
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
