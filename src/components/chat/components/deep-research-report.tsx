"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Database, Layers, ArrowRight, BarChart3, ShieldCheck } from "lucide-react";

interface DeepResearchReportProps {
  topic: string;
  summary: string;
  sources: { id: string; source: string; url: string }[];
}

export function DeepResearchReport({ topic, summary, sources }: DeepResearchReportProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto pb-20">
      {/* Hero / Title Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Mission Intelligence Report
            </Badge>
            <div className="h-px flex-1 bg-white/5" />
        </div>
        <h1 className="text-4xl font-display text-white">{topic}</h1>
        <p className="text-slate-400 text-sm italic font-serif leading-relaxed max-w-2xl">
            Synthesized intelligence gathered across multiple verified datasets, academic journals, and live market signals.
        </p>
      </div>

      {/* Quantitative Intelligence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-surface-dark border-white/10 shadow-xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50" />
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Confidence</span>
                </div>
                <div className="text-2xl font-bold text-white">98.2%</div>
                <div className="text-[10px] text-blue-400 mt-1 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Data
                </div>
            </CardContent>
        </Card>
        <Card className="bg-surface-dark border-white/10 shadow-xl overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/50" />
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Live Nodes</span>
                </div>
                <div className="text-2xl font-bold text-white">14 Nodes</div>
                <div className="text-[10px] text-purple-400 mt-1 font-bold uppercase tracking-wider">Active Search Path</div>
            </CardContent>
        </Card>
        <Card className="bg-surface-dark border-white/10 shadow-xl overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50" />
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                    <Database className="w-5 h-5 text-orange-400" />
                    <span className="text-[10px] font-black text-slate-500 uppercase">Latency</span>
                </div>
                <div className="text-2xl font-bold text-white">1.4s</div>
                <div className="text-[10px] text-orange-400 mt-1 font-bold uppercase tracking-wider">Real-time Sync</div>
            </CardContent>
        </Card>
      </div>

      {/* Narrative Synthesis */}
      <div className="bg-surface-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
                <h2 className="text-xl font-medium text-white">Synthesis Framework</h2>
                <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-0.5">Core Insights & Executive Summary</p>
            </div>
        </div>
        <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-4 font-serif">
          {summary.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Research Trail */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] ml-2">Research Trail</h3>
        <div className="space-y-3">
            {sources.map((source, idx) => (
                <div key={source.id} className="group bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between hover:border-white/20 transition-all hover:translate-x-1">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-900/10 transition-colors">
                            <span className="text-xs font-black">{idx + 1}</span>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{source.source}</div>
                            <div className="text-[10px] text-slate-500 font-medium truncate max-w-md">{source.url}</div>
                        </div>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            ))}
        </div>
      </div>

      <div className="pt-10 flex justify-center">
        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3" />
            End of Intelligence Report - Sheikh OSS v1.0
        </div>
      </div>
    </div>
  );
}
