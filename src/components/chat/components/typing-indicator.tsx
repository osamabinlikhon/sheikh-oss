"use client";

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1.5 px-5 py-3 bg-surface-dark border border-white/10 rounded-2xl w-fit shadow-lg">
      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
    </div>
  );
}
