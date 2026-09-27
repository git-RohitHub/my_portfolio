import { trajectory } from "@/lib/data";
import SpotlightCard from "./SpotlightCard";

export default function Trajectory() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full" id="trajectory">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 05. Professional
            Trajectory
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mt-1">
            High-Velocity Engineering Journey
          </h2>
        </div>
        <p className="text-sm text-on-surface-variant max-w-sm font-normal">
          From full-stack data science foundations to enterprise AI architecting at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trajectory.map((item) => (
          <SpotlightCard
            key={item.title + item.date}
            className={`p-8 rounded-3xl bg-surface-container-low/70 border titanium-border space-y-4 transition-all duration-300 ${item.border}`}
          >
            <div
              className={`font-mono text-2xl font-bold flex items-center justify-between ${item.dateColor}`}
            >
              <span>{item.date}</span>
              {item.dotColor && (
                <span className={`w-2 h-2 rounded-full ${item.dotColor} ${item.dotAnim}`}></span>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-sans text-lg font-bold text-white">{item.title}</h3>
              <div className={`text-xs font-mono ${item.companyColor}`}>{item.company}</div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-surface-container font-mono text-[10px] text-outline tag-hover"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
