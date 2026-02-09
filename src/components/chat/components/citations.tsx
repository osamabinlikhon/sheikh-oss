"use client";

import { ExternalLink, Quote } from "lucide-react";

interface Citation {
  id: string;
  source: string;
  url?: string;
}

interface CitationsProps {
  citations: Citation[];
}

export function CitationComponent({ citations }: CitationsProps) {
  if (!citations.length) return null;

  return (
    <div className="mt-4 pt-4 border-t space-y-2">
      <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
        <Quote className="w-3 h-3" />
        Sources / তথ্যসূত্র
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {citations.map((citation) => (
          <a
            key={citation.id}
            href={citation.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-lg bg-muted/30 border hover:bg-muted/50 transition-colors group"
          >
            <span className="text-xs truncate font-medium">{citation.source}</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}
