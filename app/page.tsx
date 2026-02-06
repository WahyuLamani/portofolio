"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Palette, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
}

interface Skill {
  name: string;
  level: number;
}

export default function GeometricPortfolio() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    { id: 1, title: 'Fintech Dashboard', category: 'Web App', year: '2024' },
    { id: 2, title: 'E-Commerce Platform', category: 'Full Stack', year: '2024' },
    { id: 3, title: 'Design System', category: 'UI Kit', year: '2023' },
    { id: 4, title: 'Portfolio Site', category: 'Web Design', year: '2023' },
  ];

  const skills: Skill[] = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large Circle */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 border border-zinc-800 rounded-full"
          style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
        />
        
        {/* Triangle */}
        <div 
          className="absolute top-1/4 -left-20 w-64 h-64 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-700"/>
          </svg>
        </div>

        {/* Small Squares */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-zinc-800 rotate-45"
          style={{ transform: `rotate(${45 + scrollY * 0.15}deg)` }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-zinc-800" />
            ))}
          </div>
        </div>

        {/* Hexagon */}
        <div 
          className="absolute top-2/3 left-1/3 w-40 h-40 opacity-10"
          style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-700"/>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center clip-hexagon">
                <span className="text-sm font-bold">YN</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Portfolio</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-zinc-400 transition-colors">Home</a>
              <a href="#work" className="text-sm hover:text-zinc-400 transition-colors">Work</a>
              <a href="#about" className="text-sm hover:text-zinc-400 transition-colors">About</a>
              <a href="#contact" className="px-6 py-2 bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors clip-corner">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 clip-corner">
                <span className="text-sm text-zinc-400">● Available for freelance</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter">
                  Creative
                  <br />
                  <span className="gradient-text">
                    Developer
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 to-transparent" />
              </div>

              <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                Transforming ideas into elegant digital solutions through code and design. 
                Specialized in modern web technologies and user-centric interfaces.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-zinc-950 font-medium clip-corner hover:bg-zinc-200 transition-all flex items-center gap-2 group">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-zinc-700 font-medium clip-corner hover:bg-zinc-900 transition-all">
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: '#' },
                  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                  { icon: <Mail className="w-5 h-5" />, href: '#' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-700 transition-all clip-corner"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Geometric Visual */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Main hexagon container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Outer rotating hexagon */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon 
                        points="50,5 90,25 90,75 50,95 10,75 10,25" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="0.2" 
                        className="text-zinc-700"
                      />
                    </svg>
                  </div>

                  {/* Middle hexagon */}
                  <div className="absolute inset-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon 
                        points="50,5 90,25 90,75 50,95 10,75 10,25" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="0.3" 
                        className="text-zinc-600"
                      />
                    </svg>
                  </div>

                  {/* Inner content */}
                  <div className="absolute inset-16 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center clip-hexagon border border-zinc-800">
                    <div className="text-center space-y-3">
                      <Code2 className="w-16 h-16 mx-auto text-zinc-600" />
                      <div className="text-4xl font-bold text-zinc-700">{'{ }'}</div>
                    </div>
                  </div>

                  {/* Floating squares */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 border border-zinc-700 rotate-12 animate-float" />
                  <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-zinc-900 border border-zinc-800 rotate-45 animate-float-delayed" />
                  
                  {/* Small circles */}
                  <div className="absolute top-1/4 -left-12 w-8 h-8 border border-zinc-700 rounded-full" />
                  <div className="absolute bottom-1/4 -right-12 w-6 h-6 bg-zinc-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center clip-corner">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Portfolio</p>
                <h2 className="text-4xl font-bold">Featured Work</h2>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all clip-corner overflow-hidden"
              >
                {/* Geometric hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center clip-corner">
                      <span className="text-2xl font-bold text-zinc-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-500">{project.year}</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500">{project.category}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    View Project 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-l border-t border-zinc-800 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center clip-corner">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest">Expertise</p>
                  <h2 className="text-4xl font-bold">Skills & Tools</h2>
                </div>
              </div>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Mastering modern technologies to build exceptional digital experiences. 
                Constantly learning and evolving with the industry.
              </p>

              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-900 border border-zinc-800 overflow-hidden clip-corner">
                      <div 
                        className="h-full bg-gradient-to-r from-zinc-600 to-zinc-700 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Geometric skill visualization */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Rotating square */}
                  <div className="absolute inset-0 border border-zinc-800 rotate-45 animate-spin-slow" />
                  
                  {/* Inner squares */}
                  <div className="absolute inset-8 border border-zinc-700 rotate-45" />
                  <div className="absolute inset-16 bg-zinc-900 border border-zinc-700 rotate-45 flex items-center justify-center">
                    <div className="text-6xl font-bold text-zinc-800 -rotate-45">+5</div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 clip-corner" />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 clip-corner" />
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 clip-corner" />
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 clip-corner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Let's Create
              <br />
              <span className="gradient-text">
                Something Great
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto" />
          </div>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together 
            to create something exceptional.
          </p>

          <button className="px-12 py-5 bg-white text-zinc-950 font-bold text-lg clip-corner hover:bg-zinc-200 transition-all inline-flex items-center gap-3 group">
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-500 text-sm">
              © 2024 Portfolio. Designed & Built with passion
            </div>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}