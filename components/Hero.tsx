import Image from "next/image";
import { heroStats, profile } from "@/lib/data";
import SpotlightCard from "./SpotlightCard";
import AgentSwarmVisualizer from "./AgentSwarmVisualizer";

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left: Editorial Bio & Headline */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/60 border border-primary/25 w-fit badge-radiance shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-xs text-primary tracking-wider uppercase font-medium">
              AI/ML ENGINEER • MULTI-AGENT ARCHITECT • GENAI &amp; RAG SPECIALIST
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ffddb8] to-tertiary">
                Autonomous Agent Swarms
              </span>{" "}
              &amp; Sub-Second GenAI Systems.
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed max-w-2xl pt-1">
              Transforming enterprise workflows and voice interfaces through state-of-the-art
              multi-agent orchestration (LangGraph, CrewAI), low-latency RAG architectures, and
              fine-tuned LLMs scaled across AWS.
            </p>
          </div>

          {/* Editorial Author Card / Portrait */}
          <SpotlightCard className="flex items-center gap-4 p-3.5 rounded-2xl bg-surface-container-low/70 border titanium-border w-fit backdrop-blur-md hover:border-primary/40">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center p-1.5 shrink-0 transition-transform group-hover:scale-105">
              <Image
                alt={`${profile.name} Avatar`}
                width={56}
                height={56}
                className="w-full h-full object-contain"
                src={profile.avatar}
              />
            </div>
            <div className="pr-2 space-y-0.5">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>{profile.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container-high text-primary border border-primary/20 flex items-center gap-1.5 amber-beacon-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>{" "}
                  Active
                </span>
              </div>
              <div className="font-mono text-xs text-outline">
                {profile.location} • {profile.companies}
              </div>
              <div className="text-xs text-tertiary font-mono">{profile.specialty}</div>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-mono text-white/70">
                <a
                  className="hover:text-primary transition-colors flex items-center gap-1 hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[13px]">code</span>{" "}
                  {profile.githubLabel}
                </a>
                <span className="text-white/20">|</span>
                <a
                  className="hover:text-primary transition-colors flex items-center gap-1 hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  <span className="material-symbols-outlined text-[13px]">mail</span>{" "}
                  {profile.email}
                </a>
                <span className="text-white/20">|</span>
                <a
                  className="hover:text-primary transition-colors flex items-center gap-1 hover:underline"
                  href={profile.phoneHref}
                >
                  <span className="material-symbols-outlined text-[13px]">call</span>{" "}
                  {profile.phone}
                </a>
              </div>
            </div>
          </SpotlightCard>

          {/* High-Impact Key Ticker */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 max-w-2xl">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="p-2.5 rounded-xl hover:bg-surface-container-high/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`font-sans text-3xl sm:text-4xl font-extrabold ${stat.color} tracking-tight transition-transform hover:scale-105`}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-outline mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Agentic Swarm 3D Visualizer */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square max-w-[490px] mx-auto rounded-3xl bg-surface-container-lowest/80 border titanium-border p-2 shadow-2xl backdrop-blur-xl group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,193,116,0.18)]">
            <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between font-mono text-[11px] text-outline backdrop-blur-md bg-surface-container-lowest/70 px-3 py-1.5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-white/80 font-medium">
                  AGENTIC_SWARM_ORCHESTRATOR // MULTI-NODE GRAPH
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-surface-container-high border border-white/10 text-tertiary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>{" "}
                WebGL 60 FPS
              </span>
            </div>

            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#020b14] relative">
              <AgentSwarmVisualizer />
              <div className="absolute bottom-4 left-4 right-4 z-20 px-3.5 py-2.5 rounded-xl bg-surface-container-low/85 border titanium-border backdrop-blur-md flex items-center justify-between transition-all hover:bg-surface-container-low">
                <div className="flex items-center gap-2 font-mono text-[11px] text-white/90">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>LangGraph State Machine // Active</span>
                </div>
                <span className="font-mono text-[10px] text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/30 animate-badge-pulse font-medium shadow-sm">
                  Sub-Second Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
