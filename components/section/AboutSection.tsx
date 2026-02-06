import { ArrowRight, Code2 } from "lucide-react";

export default function AboutSection(){
    return(
        <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - About Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center clip-corner">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest">About Me</p>
                  <h2 className="text-4xl font-bold">Who I Am</h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-bold leading-relaxed">
                  A passionate developer crafting digital experiences with precision and creativity.
                </p>
                
                <p className="text-lg text-zinc-400 leading-relaxed">
                  With over 5 years of experience in web development and UI/UX design, I specialize 
                  in building modern, scalable applications that not only look great but perform 
                  exceptionally well.
                </p>

                <p className="text-lg text-zinc-400 leading-relaxed">
                  My approach combines technical expertise with creative problem-solving, ensuring 
                  every project delivers both aesthetic appeal and functional excellence. I believe 
                  in writing clean, maintainable code and creating interfaces that users love.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '30+', label: 'Clients' },
                  { number: '5+', label: 'Years' },
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    <div className="bg-zinc-900 border border-zinc-800 p-6 clip-corner">
                      <div className="text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm text-zinc-500">{stat.label}</div>
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-zinc-700" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 font-medium clip-corner hover:bg-zinc-200 transition-all group"
                >
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Side - Geometric Visual */}
            <div className="relative h-[600px]">
              {/* Main geometric composition */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Large circle background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 border border-zinc-800 rounded-full" />
                </div>

                {/* Rotating square */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 border border-zinc-700 rotate-45 animate-spin-slow" />
                </div>

                {/* Center card with info */}
                <div className="relative z-10 w-72 bg-zinc-900 border border-zinc-800 p-8 clip-corner">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Developer</h3>
                      <p className="text-zinc-500">& Designer</p>
                    </div>

                    <div className="space-y-3 text-sm text-zinc-400">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zinc-700 clip-corner" />
                        <span>Based in Jakarta, ID</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zinc-700 clip-corner" />
                        <span>Available for freelance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zinc-700 clip-corner" />
                        <span>Remote friendly</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Next.js', 'UI/UX'].map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs clip-corner"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800 border border-zinc-700 clip-corner" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-zinc-800 border border-zinc-700 clip-corner" />
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute top-12 right-12 w-16 h-16 border border-zinc-700 rotate-12 animate-float" />
                <div className="absolute bottom-20 left-12 w-12 h-12 bg-zinc-900 border border-zinc-800 clip-corner animate-float-delayed" />
                
                {/* Small circles */}
                <div className="absolute top-1/4 left-8 w-6 h-6 border border-zinc-700 rounded-full" />
                <div className="absolute bottom-1/3 right-16 w-4 h-4 bg-zinc-800 rounded-full" />

                {/* Triangle */}
                <div className="absolute top-16 left-1/4 w-20 h-20 opacity-50">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-700"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}