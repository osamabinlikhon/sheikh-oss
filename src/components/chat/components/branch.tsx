"use client";

import { GitBranch, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BranchProps {
  onBranch: () => void;
  branchCount?: number;
}

export function BranchComponent({ onBranch, branchCount = 0 }: BranchProps) {
  return (
    <div className="flex items-center gap-2 my-2 animate-in fade-in duration-500">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBranch}
        className="h-7 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg border border-dashed border-muted-foreground/30 flex items-center gap-1.5"
      >
        <GitBranch className="w-3 h-3" />
        <span>Fork Conversation / নতুন ব্রাঞ্চ</span>
      </Button>
      {branchCount > 0 && (
        <div className="flex items-center gap-1 text-[10px] font-bold text-primary/60 uppercase tracking-widest">
          <ChevronRight className="w-3 h-3" />
          <span>{branchCount} Branches</span>
        </div>
      )}
    </div>
  );
}
