"use client";

import { Button } from "@/components/ui/button";

interface SuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function SuggestionComponent({ suggestions, onSelect }: SuggestionsProps) {
  if (!suggestions.length) return null;

  return (
    <div className="flex flex-wrap gap-3 my-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {suggestions.map((suggestion, i) => (
        <Button
          key={i}
          variant="outline"
          size="sm"
          onClick={() => onSelect(suggestion)}
          className="rounded-full text-xs font-bold bg-surface-dark hover:bg-white hover:text-black transition-all border-white/10 px-5 h-9"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
}
