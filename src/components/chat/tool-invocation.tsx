"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToolInvocation } from "ai";
import { Loader2, CheckCircle2, Search, Code, ListTodo, ClipboardCheck, Info, ArrowRight, CloudSun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlanOutput } from "./generative/plan";
import { CodeOutput } from "./generative/code";
import { ResearchOutput } from "./generative/research";
import { VerifyOutput } from "./generative/verify";
import { WeatherOutput } from "./generative/weather";

interface ToolInvocationProps {
  toolInvocation: ToolInvocation;
}

export function ToolInvocationCard({ toolInvocation }: ToolInvocationProps) {
  const { toolName, state } = toolInvocation;

  const name = toolName || (toolInvocation.type?.startsWith('tool-') ? toolInvocation.type.replace('tool-', '') : 'agent');

  const getIcon = () => {
    switch (name) {
      case "research": return <Search className="w-5 h-5 text-blue-500" />;
      case "code": return <Code className="w-5 h-5 text-purple-500" />;
      case "plan": return <ListTodo className="w-5 h-5 text-orange-500" />;
      case "verify": return <ClipboardCheck className="w-5 h-5 text-green-500" />;
      case "weather": return <CloudSun className="w-5 h-5 text-yellow-500" />;
      default: return <Info className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getTitle = () => {
    switch (name) {
      case "research": return "তথ্য অনুসন্ধান (Researcher Agent)";
      case "code": return "কোড জেনারেশন (Coder Agent)";
      case "plan": return "পরিকল্পনা তৈরি (Planner Agent)";
      case "verify": return "ফলাফল যাচাই (Verifier Agent)";
      case "weather": return "আবহাওয়া আপডেট (Weather Agent)";
      default: return name.charAt(0).toUpperCase() + name.slice(1) + " Agent";
    }
  };

  const getPurpose = () => {
    switch (name) {
        case "research": return "নির্দিষ্ট টপিকের ওপর গভীর অনুসন্ধান চালানো হচ্ছে";
        case "code": return "আপনার প্রয়োজন অনুযায়ী কোড তৈরি বা সংশোধন করা হচ্ছে";
        case "plan": return "জটিল কাজটি সম্পন্ন করার জন্য একটি ধাপভিত্তিক পরিকল্পনা তৈরি করা হচ্ছে";
        case "verify": return "চূড়ান্ত ফলাফল আপনার চাহিদার সাথে মিলছে কি না তা যাচাই করা হচ্ছে";
        case "weather": return "কাঙ্ক্ষিত শহরের বর্তমান আবহাওয়া সম্পর্কে তথ্য সংগ্রহ করা হচ্ছে";
        default: return "ধাপটি সম্পন্ন করা হচ্ছে";
    }
  };

  const getNextStep = () => {
    switch (name) {
        case "plan": return "পরিকল্পনা অনুযায়ী কাজ শুরু হবে";
        case "research": return "তথ্য বিশ্লেষণ করে পরবর্তী ধাপে যাওয়া হবে";
        case "code": return "কোডটির সঠিকতা যাচাই করা হবে";
        case "verify": return "ফলাফল সন্তোষজনক হলে কাজ শেষ হবে";
        case "weather": return "আবহাওয়া অনুযায়ী পরবর্তী পরামর্শ প্রদান করা হবে";
        default: return "পরবর্তী ধাপে অগ্রসরের প্রস্তুতি";
    }
  };

  const isDone = state === "result" || !!toolInvocation.result;
  const result = toolInvocation.result;

  return (
    <Card className="my-6 border-none bg-muted/30 shadow-sm overflow-hidden ring-1 ring-border animate-in fade-in zoom-in-95 duration-300">
      <CardHeader className="py-3 px-5 flex flex-row items-center gap-3 bg-muted/50 border-b">
        <div className="p-2 rounded-full bg-background shadow-sm border">
          {getIcon()}
        </div>
        <div className="flex flex-col">
          <CardTitle className="text-sm font-bold tracking-tight">{getTitle()}</CardTitle>
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            {getPurpose()}
          </div>
        </div>
        <div className="ml-auto">
          {isDone ? (
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 gap-1 px-2 py-0">
              <CheckCircle2 className="w-3 h-3" />
              সম্পন্ন
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-100 gap-1 px-2 py-0 animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              চলমান
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="py-4 px-5 text-sm">
        {!isDone ? (
          <div className="space-y-3">
            <div className="text-muted-foreground italic flex items-center gap-2">
              কাজ চলছে...
            </div>
            {toolInvocation.args && (
              <div className="p-3 rounded-lg bg-background/50 border border-dashed text-xs text-muted-foreground">
                <span className="font-semibold mr-2 uppercase">Input:</span>
                {JSON.stringify(toolInvocation.args)}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 text-center">
                 কাজের সারসংক্ষেপ (Summary)
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="rounded-xl bg-background border p-4 shadow-inner">
              {name === "plan" && result.plan ? (
                <PlanOutput plan={result.plan} />
              ) : name === "code" && result.code ? (
                <CodeOutput code={result.code} />
              ) : name === "research" ? (
                <ResearchOutput result={result.result} sources={result.sources} />
              ) : name === "verify" ? (
                <VerifyOutput verified={result.verified} feedback={result.feedback} />
              ) : name === "weather" ? (
                <WeatherOutput {...result} />
              ) : (
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {/* Fallback for unknown tools or result formats */}
                  {typeof result === 'string' ? result : result.result || JSON.stringify(result, null, 2)}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 text-[10px] font-bold text-primary/60 uppercase tracking-widest">
                <span>পরবর্তী পদক্ষেপ: {getNextStep()}</span>
                <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
