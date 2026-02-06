import { Facebook, Github, Instagram, Linkedin, LucideIcon, Mail } from "lucide-react";


export const projects: Project[] = [
    { id: 1, title: 'Fintech Dashboard', category: 'Web App', year: '2024' },
    { id: 2, title: 'E-Commerce Platform', category: 'Full Stack', year: '2024' },
    { id: 3, title: 'Design System', category: 'UI Kit', year: '2023' },
    { id: 4, title: 'Portfolio Site', category: 'Web Design', year: '2023' },
  ];
  
export const skills: Skill[] = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

export const sosialMedia: {
    icon: LucideIcon;
    href: string;
}[] = [
    { icon: Github , href: 'https://github.com/WahyuLamani/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wahyulamani/' },
    { icon: Mail, href: 'mailto:wahyulamani03@gmail.com' },
    { icon: Instagram, href: 'https://www.instagram.com/revelacio.w/' },
    ]