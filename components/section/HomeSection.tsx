import { sosialMedia } from "@/lib/data";
import { ArrowRight, Code2 } from "lucide-react";
import MailTooltip from "../tooltip/MailTooltip";

export default function HomeSection() {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
            <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-4 relative z-10">
                <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 clip-corner">
                    <span className="text-sm text-zinc-400"><span className="text-cyan-600"> ● </span> Available for freelance</span>
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter">
                        Junior Fullstack
                    <br />
                    <span className="gradient-text">
                        Developer
                    </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 to-transparent" />
                </div>

                <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                Hallo, I&lsquo;m Wahyu, as a junior full-stack developer, I enjoy making straightforward, practical, and user-focused web apps.<br/>
                I always learn new things and improve my skills while using modern technology to turn ideas into reliable digital solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-white text-zinc-950 font-medium clip-corner hover:bg-zinc-200 transition-all flex items-center gap-2 group">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a href="#contact" className="px-8 py-4 border border-zinc-700 font-medium clip-corner hover:bg-zinc-900 transition-all">
                    Let&lsquo;s Disquss !
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                    {sosialMedia.map(({icon: Icon, href}, i) => 
                    {
                        const isEmail: boolean = href.includes('mailto');
                        const mail: string = isEmail ? href.split(':')[1] : '';
                        const link = (
                            <a 
                                key={i}
                                href={href}
                                className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-700 transition-all clip-corner"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                            ) 
                        return isEmail ? 
                        <MailTooltip key={i}content={mail}>{link}</MailTooltip>
                        : link;
                    })}
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
    )
}