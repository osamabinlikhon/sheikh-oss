"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { User, Loader2, Plus, ArrowUp, Construction, Languages, GitBranch, Megaphone, CreditCard, Terminal, FlaskConical, Headset } from "lucide-react";
import { ToolInvocationCard } from "@/components/chat/tool-invocation";
import { TypingIndicator } from "@/components/chat/components/typing-indicator";
import { StreamingLoader } from "@/components/chat/components/streaming-loader";
import { isToolUIPart } from "ai";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, status, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isStreaming = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, status]);

  const handleSuggestionSelect = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  const onChatSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input });
    setInput("");
  };

  const initialSuggestions = [
    { text: "Create slides", icon: "view_carousel" },
    { text: "Build website", icon: "code" },
    { text: "Develop apps", icon: "smartphone" },
    { text: "Design", icon: "auto_fix_high" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl font-bold text-white">bolt</span>
          <span className="text-xl font-bold tracking-tight text-white uppercase">sheikh</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a className="hover:text-white transition-colors" href="#">Features</a>
          <a className="hover:text-white transition-colors" href="#">Resources</a>
          <a className="hover:text-white transition-colors" href="#">Events</a>
          <a className="hover:text-white transition-colors" href="#">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-slate-200 transition-colors">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/10 transition-colors">Sign up</button>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full py-2.5 text-center bg-white/5 border-b border-white/10 text-sm font-medium text-slate-300">
        <a className="flex items-center justify-center gap-2 hover:text-white transition-colors" href="#">
          Explore the future of task automation with Sheikh
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>

      <main className={`flex-1 max-w-7xl mx-auto px-6 ${messages.length === 0 ? 'pt-24 pb-32' : 'pt-12 pb-40'} w-full`}>
        {messages.length === 0 ? (
          <>
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="font-display text-5xl md:text-6xl mb-12 text-white font-normal">
                What can I do for you?
              </h1>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <form
                  onSubmit={onChatSubmit}
                  className="relative bg-surface-dark border border-white/10 rounded-3xl shadow-2xl p-4 min-h-[160px] flex flex-col justify-between"
                >
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none placeholder-slate-600 text-white p-2"
                    placeholder="Assign a task or ask anything"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <button type="button" className="p-2 rounded-full hover:bg-white/10 text-slate-500 transition-colors">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                    <button
                      type="submit"
                      disabled={!input.trim() || isStreaming}
                      className="p-2 bg-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">north</span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {initialSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.text}
                    onClick={() => handleSuggestionSelect(suggestion.text)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-surface-dark border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:bg-surface-lighter hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg opacity-60">{suggestion.icon}</span>
                    {suggestion.text}
                  </button>
                ))}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-dark border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:bg-surface-lighter hover:text-white transition-colors">
                  More
                </button>
              </div>
            </section>

            {/* Build Section */}
            <section className="mt-32">
              <h2 className="text-xl font-semibold mb-8 text-white">What are you building?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-6 bg-surface-dark border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-900/30 p-3 rounded-xl text-blue-400">
                      <Construction className="w-6 h-6" />
                    </div>
                    <div className="w-24 h-16 bg-white/5 rounded border border-white/10 overflow-hidden">
                       {/* Placeholder for preview image */}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Custom Web Tool</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Create a specialized online tool, such as a calculator or data converter, tailored for your specific needs.
                  </p>
                </div>
                <div className="group p-6 bg-surface-dark border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-900/30 p-3 rounded-xl text-purple-400">
                      <Languages className="w-6 h-6" />
                    </div>
                    <div className="w-24 h-16 bg-white/5 rounded border border-white/10 overflow-hidden">
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Localize Content</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Adapt your content for new markets with automated cultural nuances and language translation workflows.
                  </p>
                </div>
                <div className="group p-6 bg-surface-dark border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-orange-900/30 p-3 rounded-xl text-orange-400">
                      <GitBranch className="w-6 h-6" />
                    </div>
                    <div className="w-24 h-16 bg-white/5 rounded border border-white/10 overflow-hidden">
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Automation Workflow</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Design complex multi-step automated sequences that bridge the gap between different software tools.
                  </p>
                </div>
              </div>
            </section>

            {/* Workflow Categories */}
            <section className="mt-20 overflow-hidden">
              <h2 className="text-xl font-semibold mb-8 text-white">Workflow Categories</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {[
                  { name: "Marketing", icon: Megaphone, color: "text-blue-400" },
                  { name: "Sales", icon: CreditCard, color: "text-green-400" },
                  { name: "DevOps", icon: Terminal, color: "text-indigo-400" },
                  { name: "Research", icon: FlaskConical, color: "text-purple-400" },
                  { name: "Customer Care", icon: Headset, color: "text-orange-400" },
                ].map((cat) => (
                  <div key={cat.name} className="flex-shrink-0 px-8 py-12 bg-surface-dark rounded-2xl border border-white/10 w-64 flex flex-col items-center text-center hover:bg-surface-lighter transition-colors cursor-pointer group">
                    <cat.icon className={`w-10 h-10 mb-4 ${cat.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium text-slate-200">{cat.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Chat View */
          <div className="max-w-4xl mx-auto space-y-8 pb-32" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-6 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`flex-none w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border ${
                  m.role === "user" ? "bg-white text-black" : "bg-surface-dark border-white/10"
                }`}>
                  {m.role === "user" ? <User className="w-5 h-5" /> : <span className="material-symbols-outlined text-white">bolt</span>}
                </div>

                <div className={`flex flex-col max-w-[85%] space-y-4 ${m.role === "user" ? "items-end" : "items-start"}`}>
                  {m.parts.map((part, i) => {
                    if (part.type === "text") {
                      return (
                        <div
                          key={i}
                          className={`rounded-2xl px-6 py-4 text-base leading-relaxed shadow-sm animate-in fade-in slide-in-from-bottom-1 duration-300 ${
                            m.role === "user"
                              ? "bg-white text-black font-medium"
                              : "bg-surface-dark text-slate-200 border border-white/10"
                          }`}
                        >
                          {part.text}
                        </div>
                      );
                    }
                      if (isToolUIPart(part)) {
                      return (
                        <div key={i} className="w-full">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            <ToolInvocationCard toolInvocation={(part as any).toolInvocation} />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}

            {isStreaming && (
              <div className="space-y-6">
                <StreamingLoader />
                <div className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">bolt</span>
                  </div>
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Persistent Input for Chat */}
      {messages.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <form
              onSubmit={onChatSubmit}
              className="relative bg-surface-dark border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center gap-3"
            >
              <button type="button" className="p-2 rounded-full hover:bg-white/10 text-slate-500 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-slate-600"
                placeholder="Ask follow-up or give instruction..."
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="p-2 bg-white text-black rounded-full hover:bg-slate-200 transition-colors disabled:opacity-50"
              >
                {isStreaming ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowUp className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-12 bg-black mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl font-bold text-white">bolt</span>
            <span className="text-lg font-bold tracking-tight text-white uppercase">sheikh</span>
            <span className="text-xs text-slate-500 ml-4">© 2024 Sheikh AI Engine</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">System Status</a>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Operational
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .font-display {
          font-family: var(--font-playfair), serif;
        }
      `}</style>
    </div>
  );
}
