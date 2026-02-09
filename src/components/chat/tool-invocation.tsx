"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle2, Search, Code, ListTodo, ClipboardCheck, Info, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { UIToolInvocation } from "ai";

interface ToolInvocationProps {
  toolInvocation: UIToolInvocation<any>;
}

export function ToolInvocationCard({ toolInvocation }: ToolInvocationProps) {
  const { toolName, state } = toolInvocation as any;

  const name = toolName || 'agent';

  const getIcon = () => {
    switch (name) {
      case "research": return <Search className="w-5 h-5 text-blue-400" />;
      case "code": return <Code className="w-5 h-5 text-purple-400" />;
      case "plan": return <ListTodo className="w-5 h-5 text-orange-400" />;
      case "verify": return <ClipboardCheck className="w-5 h-5 text-green-400" />;
      default: return <Info className="w-5 h-5 text-slate-400" />;
    }
  };

  const getTitle = () => {
    switch (name) {
      case "research": return "তথ্য অনুসন্ধান (Researcher Agent)";
      case "code": return "কোড জেনারেশন (Coder Agent)";
      case "plan": return "পরিকল্পনা তৈরি (Planner Agent)";
      case "verify": return "ফলাফল যাচাই (Verifier Agent)";
      default: return name.charAt(0).toUpperCase() + name.slice(1) + " Agent";
    }
  };

  const getPurpose = () => {
    switch (name) {
        case "research": return "গভীর অনুসন্ধান ও তথ্য বিশ্লেষণ";
        case "code": return "প্রোডাকশন-রেডি লজিক ইমপ্লিমেন্টেশন";
        case "plan": return "কৌশলগত ধাপভিত্তিক কর্মপরিকল্পনা";
        case "verify": return "মান নিয়ন্ত্রণ ও সঠিকতা যাচাই";
        default: return "বিশেষায়িত কাজ সম্পন্ন করা হচ্ছে";
    }
  };

  const getNextStep = () => {
    switch (name) {
        case "plan": return "পরিকল্পনা অনুযায়ী বাস্তবায়ন শুরু";
        case "research": return "প্রাপ্ত তথ্য বিশ্লেষণ ও প্রয়োগ";
        case "code": return "কোড ভেরিফিকেশন ও টেস্টিং";
        case "verify": return "ফাইনাল ডেলিভারি প্রস্তুতি";
        default: return "পরবর্তী ধাপে অগ্রসরের প্রস্তুতি";
    }
  };

  const isDone = state === "result";
  const result = isDone ? (toolInvocation as any).result : null;

  return (
    <Card className="my-6 border border-white/10 bg-surface-dark shadow-2xl overflow-hidden rounded-2xl">
      <CardHeader className="py-4 px-6 flex flex-row items-center gap-4 bg-white/5 border-b border-white/10">
        <div className="p-2.5 rounded-xl bg-black/40 shadow-inner border border-white/10">
          {getIcon()}
        </div>
        <div className="flex flex-col">
          <CardTitle className="text-sm font-bold tracking-tight text-white">{getTitle()}</CardTitle>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
            {getPurpose()}
          </div>
        </div>
        <div className="ml-auto">
          {isDone ? (
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 gap-1.5 px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3" />
              সম্পন্ন
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 gap-1.5 px-3 py-1 font-bold text-[10px] uppercase tracking-wider animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              চলমান
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="py-6 px-6 text-sm">
        {!isDone ? (
          <div className="space-y-4">
            <div className="text-slate-400 italic flex items-center gap-2 text-xs">
              Sheikh Agent কাজ করছে...
            </div>
             {(toolInvocation as any).input && (
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-500 overflow-x-auto">
                <span className="font-bold mr-2 text-slate-400">INPUT:</span>
                 {JSON.stringify((toolInvocation as any).input, null, 2)}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-500">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-2 text-center">
                 কাজের আউটপুট বিশ্লেষণ
              </div>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="rounded-2xl bg-black/20 border border-white/5 p-5 shadow-inner">
              {name === "plan" && result?.plan ? (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-white mb-2 uppercase tracking-wide">মাস্টার প্ল্যান (Strategic Roadmap):</div>
                  {result.plan.map((step: any) => (
                    <div key={step.step} className="flex gap-4 group">
                      <div className="flex-none w-7 h-7 rounded-lg bg-white/5 text-white flex items-center justify-center text-xs font-bold border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                        {step.step}
                      </div>
                      <div className="text-slate-300 leading-relaxed py-0.5">{step.description}</div>
                    </div>
                  ))}
                </div>
              ) : name === "code" && result?.code ? (
                <div className="space-y-3">
                   <div className="text-xs font-bold text-white uppercase tracking-wide">জেনারেটেড সোর্স কোড:</div>
                   <div className="relative group">
                     <pre className="p-4 rounded-xl bg-black/60 text-xs font-mono leading-relaxed overflow-x-auto border border-white/10 text-purple-300">
                        {result.code}
                      </pre>
                   </div>
                </div>
              ) : name === "research" ? (
                <div className="space-y-3">
                   <div className="text-xs font-bold text-white uppercase tracking-wide">অনুসন্ধানের ফলাফল:</div>
                   <div className="text-slate-300 leading-relaxed text-base">
                     {result?.result || "তথ্য বিশ্লেষণ সম্পন্ন হয়েছে।"}
                   </div>
                </div>
              ) : name === "verify" ? (
                <div className={`p-5 rounded-2xl flex gap-4 ${result?.verified ? 'bg-green-500/5 text-green-400 border-green-500/20' : 'bg-red-500/5 text-red-400 border-red-500/20'} border shadow-2xl`}>
                  {result?.verified ? <CheckCircle2 className="w-6 h-6 flex-none" /> : <Info className="w-6 h-6 flex-none" />}
                  <div className="space-y-2">
                    <div className="font-black text-xs uppercase tracking-[0.15em]">ভেরিফিকেশন স্ট্যাটাস: {result?.verified ? 'সফল' : 'ব্যর্থ'}</div>
                    <div className="text-slate-300 leading-relaxed">{result?.feedback}</div>
                  </div>
                </div>
              ) : (
                <div className="text-slate-300 leading-relaxed whitespace-pre-wrap text-base">
                  {typeof result === 'string' ? result : result?.result || JSON.stringify(result, null, 2)}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] pt-2">
                <span>NEXT: {getNextStep()}</span>
                <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
