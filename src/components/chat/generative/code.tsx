"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeOutput({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-primary">কোড জেনারেটেড ও ভেরিফাইড:</div>
        <button
          onClick={copyToClipboard}
          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <div className="relative group">
        <pre className="p-4 rounded-xl bg-muted/20 text-xs font-mono leading-relaxed overflow-x-auto border shadow-inner">
          {code}
        </pre>
      </div>
    </div>
  );
}
