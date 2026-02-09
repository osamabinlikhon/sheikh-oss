"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";

export function VerifyOutput({ verified, feedback }: { verified: boolean; feedback: string }) {
  return (
    <div className={`p-4 rounded-xl flex gap-3 ${verified ? 'bg-green-50 text-green-800 border-green-100' : 'bg-red-50 text-red-800 border-red-100'} border shadow-sm animate-in zoom-in-95 duration-500`}>
      {verified ? <CheckCircle2 className="w-5 h-5 flex-none" /> : <AlertCircle className="w-5 h-5 flex-none" />}
      <div className="space-y-1">
        <div className="font-bold text-[10px] uppercase tracking-wider opacity-80">ভেরিফিকেশন রেজাল্ট:</div>
        <div className="text-sm leading-relaxed font-medium">{feedback}</div>
        {verified && (
          <div className="flex items-center gap-1.5 mt-2 text-[10px] bg-green-200/50 w-fit px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
            Production Ready
          </div>
        )}
      </div>
    </div>
  );
}
