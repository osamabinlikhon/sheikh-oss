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
    <div className="w-full my-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-xl bg-muted/20 overflow-hidden">
        <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 text-xs font-bold text-muted-foreground hover:bg-muted/30 transition-colors uppercase tracking-widest">
          <BrainCircuit className="w-4 h-4 text-primary" />
          <span>Thought Process / চিন্তাপ্রক্রিয়া</span>
          <div className="ml-auto">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 pt-0 text-sm leading-relaxed text-foreground/80 italic border-t bg-background/50">
          <div className="mt-3 whitespace-pre-wrap">
            {reasoning}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
