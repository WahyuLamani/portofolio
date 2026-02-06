interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  href?: string;
  description?: string;
  tags?: string[];
}

interface Skill {
  name: string;
  level: number;
}
