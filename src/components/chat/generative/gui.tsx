"use client";

import { Monitor, MousePointer2, Keyboard, ExternalLink } from "lucide-react";
import Image from "next/image";

interface GUIResult {
  success: boolean;
  action: string;
  vncStream: string;
  lastScreenshot: string;
  message: string;
}

export function GUIOutput({ result }: { result: GUIResult }) {
  return (
    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-primary flex items-center gap-2 uppercase tracking-tighter">
            <Monitor className="w-3 h-3" />
            VNC Remote Stream (Port 5900)
        </div>
        <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live</span>
        </div>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden border shadow-2xl bg-black group">
        <Image
          src={result.lastScreenshot}
          alt="GUI Screenshot"
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Overlay Action Indicator */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
            {result.action === "type" ? <Keyboard className="w-4 h-4 text-blue-400" /> : <MousePointer2 className="w-4 h-4 text-green-400" />}
            <span className="text-xs font-bold text-white uppercase tracking-wider">{result.action}</span>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
             <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ExternalLink className="w-4 h-4" />
             </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-muted/50 border border-dashed border-primary/20">
          <div className="text-sm font-medium leading-relaxed italic text-foreground/80">
            {result.message}
          </div>
      </div>
    </div>
  );
}
