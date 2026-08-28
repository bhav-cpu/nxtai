import React from 'react';
import { Search, GitBranch, Rocket, TrendingUp, LucideIcon } from 'lucide-react';

interface StepItem {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    step: 1,
    icon: Search,
    title: 'Discovery',
    description:
      'We audit your current pipeline and identify the highest-impact automation opportunities in your business.',
  },
  {
    step: 2,
    icon: GitBranch,
    title: 'Architecture',
    description:
      'Design multi-agent AI workflows custom-tailored to your lead generation, outreach, and closing processes.',
  },
  {
    step: 3,
    icon: Rocket,
    title: 'Build & Deploy',
    description:
      'Implement and deploy AI agents across your entire pipeline. From cold outreach to deal closing — automated.',
  },
  {
    step: 4,
    icon: TrendingUp,
    title: 'Scale & Optimize',
    description:
      'Monitor performance, iterate on agent behavior, and scale with real-time data-driven insights.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-zinc-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl font-bold text-zinc-100 tracking-tight">
            How We Transform Your Business
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A proven 4-step process from manual chaos to AI-automated efficiency
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="perspective flex flex-col lg:grid lg:grid-cols-4 items-center lg:items-start justify-center gap-0 lg:gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={item.step}>
                <div className="relative flex flex-col items-center w-full max-w-xs group">
                  {/* Desktop Connecting Line (Horizontal) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-zinc-700 -z-0"
                    />
                  )}

                  {/* Numbered Circle Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25 ring-4 ring-zinc-950 transition-transform duration-300 group-hover:scale-110">
                    {item.step}
                  </div>

                  {/* Step Card */}
                  <div className="card-3d glass-card bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700/80 backdrop-blur-md rounded-2xl p-6 max-w-xs w-full mt-6 text-center flex flex-col items-center shadow-xl shadow-black/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-1 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 mt-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Connecting Line (Vertical) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden w-0.5 h-8 bg-zinc-700 my-2"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
