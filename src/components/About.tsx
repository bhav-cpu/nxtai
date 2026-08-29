import React from "react";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const whatsappUrl =
    "https://chat.whatsapp.com/Dd0DMHLlOANLVBAXtA5aji?s=cl&p=i&mlu=4";

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column — About */}
          <ScrollReveal>
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                About nxtai
              </h2>
              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We are not another AI hype company. At nxtai, we specialize in
                  the intermediate-level implementation of AI that actually drives
                  revenue.
                </p>
                <p>
                  Our focus is on building multi-agent systems that automate the
                  entire business pipeline — from generating leads, to nurturing
                  them through AI-powered outreach, to closing deals. No fluff, no
                  vaporware. Just systems that work.
                </p>
                <p>
                  Whether you are a startup looking to scale or an established
                  business ready to modernize, we build the AI infrastructure that
                  becomes your unfair advantage.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join our AI Community</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column — Contact */}
          <ScrollReveal delay={200}>
            <div id="contact" className="perspective flex flex-col">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                Get In Touch
              </h2>
              <div className="card-3d glass-card bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Ready to automate your pipeline? Reach out and let&apos;s talk
                  about how AI can transform your business.
                </p>

                <div className="flex flex-col divide-y divide-zinc-800">
                  {/* Phone Contact */}
                  <div className="flex flex-row items-center gap-4 py-4 border-b border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase font-medium tracking-wider text-zinc-500">
                        Call Us
                      </p>
                      <a
                        href="tel:9520344932"
                        className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors inline-block mt-0.5"
                      >
                        9520344932
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Contact */}
                  <div className="flex flex-row items-center gap-4 py-4 border-b border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase font-medium tracking-wider text-zinc-500">
                        Community
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 mt-0.5 group"
                      >
                        <span>Join WhatsApp Community</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
