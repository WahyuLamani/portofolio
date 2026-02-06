"use client"

import { useEffect, useState } from "react";

export default function GeometricBackground() {
    const [scrollY, setScrollY] = useState<number>(0);
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      
    return (
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
    )
}