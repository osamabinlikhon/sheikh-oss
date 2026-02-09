"use client";

import { Button } from "@/components/ui/button";

interface SuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function SuggestionComponent({ suggestions, onSelect }: SuggestionsProps) {
  if (!suggestions.length) return null;

  return (
    <div className="flex flex-wrap gap-2 my-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {suggestions.map((suggestion, i) => (
        <Button
          key={i}
          variant="outline"
          size="sm"
          onClick={() => onSelect(suggestion)}
          className="rounded-full text-xs bg-background hover:bg-primary hover:text-primary-foreground transition-all border-primary/20"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
}
