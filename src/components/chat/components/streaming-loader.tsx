"use client";

import { Loader2 } from "lucide-react";

export function StreamingLoader({ message = "Sheikh is thinking..." }: { message?: string }) {
  return (
    <div className="flex items-center gap-4 animate-in fade-in duration-500 py-2">
      <div className="flex-none w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
        <Loader2 className="w-5 h-5 text-white animate-spin" />
      </div>
      <div className="text-[10px] font-black text-white uppercase tracking-[0.25em] animate-pulse">
        {message}
      </div>
    </div>
  );
}
