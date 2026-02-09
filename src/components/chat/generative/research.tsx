"use client";

import { ExternalLink } from "lucide-react";

interface ResearchProps {
  result: string;
  sources?: Array<{ id: string; source: string; url: string }>;
}

export function ResearchOutput({ result, sources }: ResearchProps) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold text-primary">
        রিসার্চ সম্পন্ন: {sources?.length || 0}টি সোর্স থেকে ডেটা সংগ্রহ করা হয়েছে
      </div>
      <div className="text-sm leading-relaxed whitespace-pre-wrap">
        {result || "তথ্য বিশ্লেষণ সম্পন্ন হয়েছে।"}
      </div>
      {sources && sources.length > 0 && (
        <div className="pt-2 flex flex-wrap gap-2">
          {sources.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border hover:bg-muted transition-colors text-[10px] font-medium text-muted-foreground"
            >
              {s.source}
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
