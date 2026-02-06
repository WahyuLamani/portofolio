import { skills } from "@/lib/data";
import { Palette } from "lucide-react";

export default function SkillSection() {
    return (
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
    )
}