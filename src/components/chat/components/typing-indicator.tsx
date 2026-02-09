"use client";

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 px-4 py-2 bg-muted rounded-2xl w-fit">
      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
    </div>
  );
}
