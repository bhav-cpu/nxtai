import React from "react";
import { Users, Workflow, Sparkles, Brain, type LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Users,
    title: "Multi-Agent Systems",
    description:
      "Designing autonomous AI agents that collaborate, reason, and execute tasks together — replacing entire departments with intelligent systems.",
  },
  {
    icon: Workflow,
    title: "End-to-End Pipeline",
    description:
      "Complete automation from lead generation to cold calls, messaging, follow-ups, and closing. Your sales engine, fully automated.",
  },
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description:
      "High-scale, high-quality content creation powered by AI. Social media, blogs, emails, and ads — all on autopilot.",
  },
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "Intermediate to advanced AI implementation roadmaps. We help you identify where AI creates the most revenue impact.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            What We Build
          </h2>
          <p className="text-lg text-zinc-400">
            End-to-end AI solutions that transform how businesses operate
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="perspective grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-3d glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-5 text-blue-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
