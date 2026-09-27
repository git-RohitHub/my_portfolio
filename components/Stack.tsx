import { skillCategories } from "@/lib/data";
import SpotlightCard from "./SpotlightCard";

const colorMap: Record<string, string> = {
  primary: "text-primary hover:border-primary/40",
  tertiary: "text-tertiary hover:border-tertiary/40",
  secondary: "text-secondary hover:border-secondary/40",
};

export default function Stack() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full" id="stack">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 04. Technical Matrix
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mt-1">
            Production Skills &amp; Stack
          </h2>
        </div>
        <p className="text-sm text-on-surface-variant max-w-sm font-normal">
          Disciplines, frameworks, and cloud primitives utilized in production AI and agentic
          deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const [textColor, borderHover] = colorMap[cat.color].split(" ");
          return (
            <SpotlightCard
              key={cat.title}
              className={`p-6 rounded-2xl bg-surface-container-low/70 border titanium-border space-y-3 transition-all duration-300 ${borderHover} ${cat.span}`}
            >
              <div className={`flex items-center gap-2 font-mono text-xs ${textColor}`}>
                <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                <span className="uppercase tracking-wider font-semibold">{cat.title}</span>
              </div>
              <p className="text-xs text-on-surface-variant">{cat.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-hover px-2.5 py-1 rounded-lg bg-surface-container border border-white/5 font-mono text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
