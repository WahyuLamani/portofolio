import { ArrowRight } from "lucide-react";

export default function ContactSection() {
    return (
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
    )
}