export default function Footer(){
    return (
        <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-500 text-sm">
              © 2025 Portfolio. Designed & Built with passion
            </div>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    )
}