"use client";

import { GitBranch, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BranchComponent() {
  return (
    <div className="flex items-center gap-2 mt-1 group animate-in fade-in slide-in-from-left-2 duration-500">
      <div className="h-4 w-4 border-l-2 border-b-2 border-muted-foreground/20 rounded-bl-lg ml-4 mb-2" />
      <Button
        variant="ghost"
        size="xs"
        className="h-7 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 border border-dashed bg-background/50 shadow-sm"
        aria-label="Fork conversation"
      >
        <GitBranch className="w-3 h-3 mr-1.5 text-primary/60" />
        Fork Conversation
      </Button>
      <Button
        variant="ghost"
        size="xs"
        className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/5 border border-dashed p-0 bg-background/50 shadow-sm"
        aria-label="Add alternative path"
      >
        <Plus className="w-3 h-3" />
      </Button>
    </div>
  );
}
