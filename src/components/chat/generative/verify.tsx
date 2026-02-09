"use client";

import { CheckCircle2, Info } from "lucide-react";

interface VerifyProps {
  verified: boolean;
  feedback: string;
}

export function VerifyOutput({ verified, feedback }: VerifyProps) {
  return (
    <div className={`p-4 rounded-lg flex gap-3 ${verified ? 'bg-green-50 text-green-800 border-green-100' : 'bg-red-50 text-red-800 border-red-100'} border shadow-sm`}>
      {verified ? <CheckCircle2 className="w-5 h-5 flex-none" /> : <Info className="w-5 h-5 flex-none" />}
      <div className="space-y-1">
        <div className="font-bold text-xs uppercase tracking-wider">ভেরিফিকেশন রেজাল্ট:</div>
        <div className="text-sm leading-relaxed">{feedback}</div>
        {verified && <div className="text-[10px] opacity-80 mt-1 italic">সফলভাবে যাচাই করা হয়েছে</div>}
      </div>
    </div>
  );
}
