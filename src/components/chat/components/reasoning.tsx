"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BrainCircuit } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ReasoningProps {
  reasoning: string;
}

export function ReasoningComponent({ reasoning }: ReasoningProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border border-white/10 rounded-2xl bg-surface-dark overflow-hidden shadow-xl">
        <CollapsibleTrigger className="flex items-center gap-3 w-full p-4 text-[10px] font-black text-slate-400 hover:bg-white/5 transition-colors uppercase tracking-[0.2em]">
          <BrainCircuit className="w-5 h-5 text-white" />
          <span>Thought Process / চিন্তাপ্রক্রিয়া</span>
          <div className="ml-auto">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-6 pt-2 text-sm leading-relaxed text-slate-300 italic border-t border-white/5 bg-black/20">
          <div className="mt-4 whitespace-pre-wrap font-medium">
            {reasoning}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
