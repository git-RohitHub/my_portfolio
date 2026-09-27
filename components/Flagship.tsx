import { research } from "@/lib/data";

export default function Flagship() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full" id="flagship">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 03. Research &amp;
            Fine-Tuning
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mt-1">
            Open-Source Experiments &amp; LLM Research
          </h2>
        </div>
        <p className="text-sm text-on-surface-variant max-w-sm font-normal">
          Fine-tuned model architectures published to Hugging Face and intelligent edge
          dispatchers.
        </p>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {research.map((item) => (
          <div
            key={item.title}
            className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-all duration-300"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-outline">{item.meta}</span>
                <span className="font-mono text-xs text-secondary">• {item.metric}</span>
              </div>
              <h3
                className={`font-sans text-xl font-bold text-white transition-colors flex items-center gap-2 ${item.hoverColor}`}
              >
                {item.title}
                <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  trending_flat
                </span>
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                className={`px-4 py-2 rounded-xl bg-surface-container border border-white/10 text-xs font-mono text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm shimmer-btn ${item.ctaColor}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.cta}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
