import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full pb-16" id="contact">
      <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest border border-primary/20 relative overflow-hidden amber-glow group hover:border-primary/40 transition-all duration-500">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>Available for GenAI &amp; Agentic Architect Roles</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to architect enterprise agentic workflows and production GenAI?
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            Whether building real-time voice-first agents, fine-tuning domain Llama models, or
            orchestrating multi-node LangGraph swarms across AWS — let&apos;s connect.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              className="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-[#ffcd8a] transition-all amber-glow inline-flex items-center gap-2 hover:scale-105 active:scale-95 shimmer-btn shadow-lg"
              href={`mailto:${profile.email}`}
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Initiate Direct Contact</span>
            </a>
            <a
              className="px-6 py-3.5 rounded-xl bg-surface-container border titanium-border font-mono text-xs font-semibold text-white hover:border-primary/40 hover:bg-white/5 transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95 shimmer-btn"
              href={profile.phoneHref}
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Call {profile.phone}</span>
            </a>
            <a
              className="px-6 py-3.5 rounded-xl bg-surface-container border titanium-border font-mono text-xs font-semibold text-tertiary hover:border-tertiary/40 hover:bg-tertiary/10 transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95 shimmer-btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
