"use client";

export interface PlanStep {
  step: number;
  description: string;
}

export function PlanOutput({ plan }: { plan: PlanStep[] }) {
  return (
    <div className="space-y-3 animate-in fade-in duration-500">
      <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
         ডেভেলপমেন্ট ওয়ার্কফ্লো ম্যাপ করা হয়েছে:
      </div>
      {plan.map((step) => (
        <div key={step.step} className="flex gap-3 group">
          <div className="flex-none w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {step.step}
          </div>
          <div className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
            {step.description}
          </div>
        </div>
      ))}
    </div>
  );
}
