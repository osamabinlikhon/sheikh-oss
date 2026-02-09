"use client";

import { CitationComponent } from "../components/citations";

interface Source {
  id: string;
  source: string;
  url?: string;
}

export function ResearchOutput({ result, sources }: { result: string; sources?: Source[] }) {
  return (
    <div className="space-y-3 animate-in fade-in duration-500">
      <div className="text-xs font-semibold text-primary">রিসার্চ সম্পন্ন: ৩টি সোর্স থেকে ডেটা সংগ্রহ করা হয়েছে</div>
      <div className="text-sm leading-relaxed whitespace-pre-wrap">
        {result}
      </div>
      {sources && sources.length > 0 && <CitationComponent citations={sources} />}
    </div>
  );
}
