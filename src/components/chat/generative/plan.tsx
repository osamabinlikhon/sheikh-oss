"use client";

interface PlanProps {
  plan: Array<{ step: number; description: string }>;
}

export function PlanOutput({ plan }: PlanProps) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold text-primary mb-2">
        ${plan.length}টি ধাপে ডেভেলপমেন্ট ওয়ার্কফ্লো ম্যাপ করা হয়েছে:
      </div>
      {plan.map((step) => (
        <div key={step.step} className="flex gap-3 group">
          <div className="flex-none w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {step.step}
          </div>
          <div className="text-sm leading-relaxed">{step.description}</div>
        </div>
      ))}
    </div>
  );
}
