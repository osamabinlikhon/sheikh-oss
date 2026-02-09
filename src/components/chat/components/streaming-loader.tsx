"use client";

import { Loader2 } from "lucide-react";

export function StreamingLoader({ message = "Agent is thinking..." }: { message?: string }) {
  return (
    <div className="flex items-center gap-3 animate-in fade-in duration-300">
      <div className="flex-none w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Loader2 className="w-4 h-4 text-primary animate-spin" />
      </div>
      <div className="text-xs font-bold text-primary uppercase tracking-widest animate-pulse">
        {message}
      </div>
    </div>
  );
}
