"use client"

import { useState } from "react";

interface MailTooltipProps{
    content: string;
    children: React.ReactNode;
}

export default function MailTooltip({content, children}: MailTooltipProps){
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return(
        <div className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        >
         {children}   
         {isVisible && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 border border-zinc-700 text-xs text-white whitespace-nowrap clip-corner z-50 animate-fade-in">
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-zinc-900 border-r border-b border-zinc-700"/>
            </div>
          </div>
         )}
        </div>
    )
}