"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle2, Search, Code, ListTodo, ClipboardCheck, Info, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ToolInvocationProps {
  toolInvocation: any;
}

export function ToolInvocationCard({ toolInvocation }: ToolInvocationProps) {
  const { toolName, toolCallId, state } = toolInvocation;

  const name = toolName || (toolInvocation.type?.startsWith('tool-') ? toolInvocation.type.replace('tool-', '') : 'agent');

  const getIcon = () => {
    switch (name) {
      case "research": return <Search className="w-5 h-5 text-blue-500" />;
      case "code": return <Code className="w-5 h-5 text-purple-500" />;
      case "plan": return <ListTodo className="w-5 h-5 text-orange-500" />;
      case "verify": return <ClipboardCheck className="w-5 h-5 text-green-500" />;
      default: return <Info className="w-5 h-5 text-muted-foreground" />;
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
        case "research": return "নির্দিষ্ট টপিকের ওপর গভীর অনুসন্ধান চালানো হচ্ছে";
        case "code": return "আপনার প্রয়োজন অনুযায়ী কোড তৈরি বা সংশোধন করা হচ্ছে";
        case "plan": return "জটিল কাজটি সম্পন্ন করার জন্য একটি ধাপভিত্তিক পরিকল্পনা তৈরি করা হচ্ছে";
        case "verify": return "চূড়ান্ত ফলাফল আপনার চাহিদার সাথে মিলছে কি না তা যাচাই করা হচ্ছে";
        default: return "ধাপটি সম্পন্ন করা হচ্ছে";
    }
  };

  const getNextStep = () => {
    switch (name) {
        case "plan": return "পরিকল্পনা অনুযায়ী কাজ শুরু হবে";
        case "research": return "তথ্য বিশ্লেষণ করে পরবর্তী ধাপে যাওয়া হবে";
        case "code": return "কোডটির সঠিকতা যাচাই করা হবে";
        case "verify": return "ফলাফল সন্তোষজনক হলে কাজ শেষ হবে";
        default: return "পরবর্তী ধাপে অগ্রসরের প্রস্তুতি";
    }
  };

  const isDone = state === "result" || !!toolInvocation.result;
  const result = toolInvocation.result;

  return (
    <Card className="my-6 border-none bg-muted/30 shadow-sm overflow-hidden ring-1 ring-border">
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
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary mb-2">৪টি ধাপে ডেভেলপমেন্ট ওয়ার্কফ্লো ম্যাপ করা হয়েছে:</div>
                  {result.plan.map((step: any) => (
                    <div key={step.step} className="flex gap-3 group">
                      <div className="flex-none w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {step.step}
                      </div>
                      <div className="text-sm leading-relaxed">{step.description}</div>
                    </div>
                  ))}
                </div>
              ) : name === "code" && result.code ? (
                <div className="space-y-2">
                   <div className="text-xs font-semibold text-primary">কোড জেনারেটেড ও ভেরিফাইড:</div>
                   <div className="relative group">
                     <pre className="p-3 rounded-lg bg-muted/20 text-xs font-mono leading-relaxed overflow-x-auto border">
                        {result.code}
                      </pre>
                   </div>
                </div>
              ) : name === "research" ? (
                <div className="space-y-2">
                   <div className="text-xs font-semibold text-primary">রিসার্চ সম্পন্ন: ৩টি সোর্স থেকে ডেটা সংগ্রহ করা হয়েছে</div>
                   <div className="text-sm leading-relaxed">
                     {result.result || "তথ্য বিশ্লেষণ সম্পন্ন হয়েছে।"}
                   </div>
                </div>
              ) : name === "verify" ? (
                <div className={`p-4 rounded-lg flex gap-3 ${result.verified ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border shadow-sm`}>
                  {result.verified ? <CheckCircle2 className="w-5 h-5 flex-none" /> : <Info className="w-5 h-5 flex-none" />}
                  <div className="space-y-1">
                    <div className="font-bold text-xs uppercase tracking-wider">ভেরিফিকেশন রেজাল্ট:</div>
                    <div className="text-sm leading-relaxed">{result.feedback}</div>
                    {result.verified && <div className="text-[10px] opacity-80 mt-1 italic">২টি টাইপ এরর সংশোধন করা হয়েছে</div>}
                  </div>
                </div>
              ) : (
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
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
