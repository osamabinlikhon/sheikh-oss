"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeProps {
  code: string;
}

export function CodeOutput({ code }: CodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-primary">কোড জেনারেটেড ও ভেরিফাইড:</div>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={handleCopy}
          className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
        </Button>
      </div>
      <div className="relative group">
        <pre className="p-3 rounded-lg bg-muted/20 text-xs font-mono leading-relaxed overflow-x-auto border">
          {code}
        </pre>
      </div>
    </div>
  );
}
