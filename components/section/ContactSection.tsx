import { contactMethods } from "@/lib/data";
import {
  ArrowRight,
  Calendar,
  Mail,
  MessageSquare,
  Linkedin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's Create
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto" />
        </div>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let&lsquo;s collaborate and build
          something meaningful together.
        </p>

        {/* Primary CTA */}
        <div>
          <a
            href={contactMethods[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-zinc-950 font-bold text-lg clip-corner hover:bg-zinc-200 transition-all inline-flex items-center gap-3 group"
          >
            {contactMethods[0].label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Alternative Contact Methods */}
        <div className="pt-8">
          <p className="text-sm text-zinc-600 uppercase tracking-widest mb-6">
            Or reach out via
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contactMethods.slice(1).map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all clip-corner"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center clip-corner group-hover:border-zinc-700 transition-colors">
                      <Icon className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-sm group-hover:text-zinc-300 transition-colors">
                        {method.label}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
