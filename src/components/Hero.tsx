import React from 'react';
import { Bot, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Subtle radial / mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(139,92,246,0.08),rgba(9,9,11,0))]" />

      {/* 3D Perspective Grid Floor */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[60vh] grid-3d pointer-events-none opacity-60"
      />

      {/* Decorative blurred gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-violet-600 rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 translate-x-1/3 w-72 h-72 sm:w-80 sm:h-80 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"
      />

      {/* 3D Floating Cubes — decorative */}
      <div aria-hidden="true" className="absolute top-[15%] left-[10%] perspective pointer-events-none hidden sm:block">
        <div className="cube-3d opacity-40">
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-[25%] right-[8%] perspective pointer-events-none hidden sm:block">
        <div className="cube-3d opacity-30" style={{ animationDelay: '-3s', width: 40, height: 40 }}>
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-[30%] left-[15%] perspective pointer-events-none hidden lg:block">
        <div className="cube-3d opacity-25" style={{ animationDelay: '-5s', width: 45, height: 45 }}>
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-[20%] right-[12%] perspective pointer-events-none hidden lg:block">
        <div className="cube-3d opacity-35" style={{ animationDelay: '-6s', width: 50, height: 50 }}>
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge / Pill — with 3D float */}
        <div className="float-3d inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-xs sm:text-sm font-medium text-zinc-300 shadow-inner mb-8 hover:border-zinc-700 transition-colors">
          <Bot className="w-4 h-4 text-blue-400" />
          <span>AI-Powered Business Automation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-100 max-w-4xl">
          <span className="block">Automate Your Entire Business Pipeline</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
            From Leads to Closing
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl font-normal leading-relaxed">
          We build multi-agent AI systems that handle lead generation, outreach, follow-ups, and closing — so you can focus on scaling.
        </p>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="https://chat.whatsapp.com/Dd0DMHLlOANLVBAXtA5aji?s=cl&p=i&mlu=4"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Join our AI Community</span>
          </a>

          {/* Secondary Link */}
          <a
            href="#services"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1 group"
          >
            <span>Learn what we do ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
