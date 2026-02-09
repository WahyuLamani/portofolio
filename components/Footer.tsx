import { sosialMedia } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <div className="text-zinc-500 text-sm text-center md:text-left">
            © 2025 Wahyu Lamani · Designed & Built with passion
            <br />
            <span className="text-xs text-zinc-600">Built with Next.js</span>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-4">
            {sosialMedia.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-700 transition-all clip-corner"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-6 text-sm text-zinc-500 justify-center md:justify-end">
            <a href="#work" className="hover:text-zinc-300 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-zinc-300 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
