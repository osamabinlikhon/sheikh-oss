"use client";

import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToolInvocationCard } from "./tool-invocation";
import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

export function ChatInterface() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  const isLoading = status !== "ready";

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="flex flex-col h-[700px] w-full max-w-3xl mx-auto border rounded-2xl overflow-hidden bg-background shadow-2xl transition-all duration-300 ring-1 ring-border">
      {/* Header */}
      <div className="p-5 border-b bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">Sheikh OSS</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Production Agent Online</p>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
            <div className="px-3 py-1 rounded-full bg-background border text-[10px] font-bold text-muted-foreground flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-yellow-500" />
                Plan-Act-Verify
            </div>
        </div>
      </div>

      {/* Message Area */}
      <ScrollArea className="flex-1 px-6 py-6" ref={scrollRef}>
        <div className="space-y-8 pb-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="p-4 rounded-full bg-muted/50 border border-dashed">
                <Bot className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-sm font-bold">No messages yet</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Ask me to research a topic, write some code, or plan a project. I'll use multiple agents to get it done.
                </p>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex gap-4 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`flex-none w-8 h-8 rounded-lg flex items-center justify-center shadow-sm border ${
                m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`flex flex-col max-w-[85%] space-y-2 ${m.role === "user" ? "items-end" : "items-start"}`}>
                {m.parts.map((part, i) => {
                  if (part.type === "text") {
                    return (
                      <div
                        key={i}
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-none"
                            : "bg-muted text-foreground rounded-tl-none border"
                        }`}
                      >
                        {part.text}
                      </div>
                    );
                  }
                  if (part.type.startsWith("tool-")) {
                    return (
                      <div key={i} className="w-full">
                        <ToolInvocationCard toolInvocation={part as any} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}

          {isLoading && !messages.some(m => m.role === 'assistant' && m.parts.some(p => p.type === 'text' && p.text)) && (
             <div className="flex gap-4 animate-pulse">
                <div className="flex-none w-8 h-8 rounded-lg bg-muted border flex items-center justify-center">
                    <Bot className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-8 w-32 bg-muted rounded-2xl" />
                    <div className="h-4 w-48 bg-muted rounded-full" />
                </div>
             </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-5 border-t bg-muted/10">
        <div className="flex gap-2 p-1.5 rounded-2xl border bg-background shadow-inner focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
            <Input
              value={input}
              placeholder="What's the plan for today?"
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1 border-none shadow-none focus-visible:ring-0 bg-transparent"
            />
            <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-xl shadow-lg px-4 h-10 transition-all active:scale-95"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                    <span className="hidden sm:inline mr-2">Send</span>
                    <Send className="w-4 h-4" />
                </>
              )}
            </Button>
        </div>
        <p className="text-[9px] text-center mt-3 text-muted-foreground font-medium uppercase tracking-widest">
            Powered by Vercel AI SDK & Multi-Agent Orchestrator
        </p>
      </form>
    </div>
  );
}
