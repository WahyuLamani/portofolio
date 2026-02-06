import { projects } from "@/lib/data";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center clip-corner">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest">
                Portfolio
              </p>
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
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="text-sm text-zinc-500">{project.year}</div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400">{project.category}</p>
                  <small className="text-zinc-500 text-xs">
                    {project.description}
                  </small>
                </div>

                <Link
                  href={project.href || "#"}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-zinc-300 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                {/* Tags Section */}
                {project.tags && project.tags.length > 0 && (
                  <div className="pt-4 border-t border-zinc-800/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs text-zinc-500 clip-corner hover:border-zinc-700 hover:text-zinc-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-l border-t border-zinc-800 opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
