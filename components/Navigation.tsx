export default function Navigation () {
    return(
        <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center clip-hexagon">
                <span className="text-sm font-bold">W</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Wahyu Lamani</span>
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
    )
}