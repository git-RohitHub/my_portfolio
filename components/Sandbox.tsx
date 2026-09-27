"use client";

import { useEffect, useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

type Framework = "langgraph" | "crewai";
type Retriever = "multiquery" | "parentdoc" | "naive";
type Model = "llama8b" | "llama70b";

function useAnimatedNumber(target: number, decimals = 1, duration = 350) {
  const [value, setValue] = useState(target);
  const [updating, setUpdating] = useState(false);
  const frame = useRef<number>();
  const prev = useRef(target);

  useEffect(() => {
    const start = prev.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();
    setUpdating(true);

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = start + (end - start) * eased;
      setValue(current);
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
        setUpdating(false);
        prev.current = end;
      }
    }
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return { display: value.toFixed(decimals), updating };
}

function computeTelemetry(framework: Framework, retriever: Retriever, model: Model) {
  let latency = 1.5;
  let accuracy = 98.4;
  let tools = "4 Sub-Tasks / Step";
  let mode = "Cyclic State Graph Active";
  let latDesc = "Near Real-Time Telephony";
  let accDesc = "Zero Hallucination Guard";

  if (framework === "crewai") {
    latency += 0.8;
    tools = "6 Sequential Swarm Tasks";
    mode = "Role-Based Swarm Active";
  }

  if (retriever === "parentdoc") {
    latency += 0.3;
    accuracy = 97.9;
    accDesc = "Full Parent Context Anchor";
  } else if (retriever === "naive") {
    latency -= 0.4;
    accuracy = 86.2;
    accDesc = "Cosine Fallback Baseline";
  }

  if (model === "llama70b") {
    latency = latency * 0.72;
    accuracy = Math.min(99.6, accuracy + 0.9);
    latDesc = "Groq LPU High Throughput (450 t/s)";
  }

  return { latency, accuracy, tools, mode, latDesc, accDesc };
}

const optionBtn = (active: boolean) =>
  `px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-surface-container border transition-all duration-200 text-left flex flex-col hover:scale-[1.02] active:scale-95 shadow-sm ${
    active
      ? "border-primary text-primary"
      : "border-white/10 text-outline hover:text-white hover:border-white/30"
  }`;

const pillBtn = (active: boolean) =>
  `px-3 py-2 rounded-xl font-mono text-xs font-semibold bg-surface-container border transition-all duration-200 text-center hover:scale-[1.03] active:scale-95 ${
    active
      ? "border-primary text-primary shadow-sm"
      : "border-white/10 text-outline hover:text-white hover:border-white/30"
  }`;

export default function Sandbox() {
  const [framework, setFramework] = useState<Framework>("langgraph");
  const [retriever, setRetriever] = useState<Retriever>("multiquery");
  const [model, setModel] = useState<Model>("llama8b");

  const { latency, accuracy, tools, mode, latDesc, accDesc } = computeTelemetry(
    framework,
    retriever,
    model
  );

  const latencyAnim = useAnimatedNumber(latency, 1);
  const accuracyAnim = useAnimatedNumber(accuracy, 1);

  const latencyBarWidth = Math.min(100, (latency / 3.5) * 100);
  const accuracyBarWidth = Math.min(100, accuracy);

  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full" id="profiler">
      <SpotlightCard className="p-8 sm:p-12 rounded-3xl bg-surface-container-low/90 border titanium-border relative overflow-hidden transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> 02.
              Simulation Sandbox
            </span>
            <h2 className="font-sans text-3xl font-bold text-white mt-1">
              Agentic Runtime &amp; RAG Profiler
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-sm font-normal">
            Toggle agent graph frameworks, multi-vector retriever strategies, and execution
            backends to profile latency, consistency, and tool calls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-outline block">
                AGENT ORCHESTRATION TOPOLOGY
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={optionBtn(framework === "langgraph")}
                  onClick={() => setFramework("langgraph")}
                >
                  <span>LangGraph</span>
                  <span className="text-[10px] text-outline font-normal">
                    Stateful Cyclic Machine
                  </span>
                </button>
                <button
                  type="button"
                  className={optionBtn(framework === "crewai")}
                  onClick={() => setFramework("crewai")}
                >
                  <span>CrewAI</span>
                  <span className="text-[10px] text-outline font-normal">
                    Autonomous Role Swarms
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-outline block">
                RETRIEVAL ENHANCEMENT STRATEGY
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className={pillBtn(retriever === "multiquery")}
                  onClick={() => setRetriever("multiquery")}
                >
                  Multi-Query
                </button>
                <button
                  type="button"
                  className={pillBtn(retriever === "parentdoc")}
                  onClick={() => setRetriever("parentdoc")}
                >
                  Parent-Doc
                </button>
                <button
                  type="button"
                  className={pillBtn(retriever === "naive")}
                  onClick={() => setRetriever("naive")}
                >
                  Naïve Cosine
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-outline block">
                INFERENCE EXECUTION BACKEND
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={optionBtn(model === "llama8b")}
                  onClick={() => setModel("llama8b")}
                >
                  <span>Llama 3.1 8B</span>
                  <span className="text-[10px] text-outline font-normal">
                    Fine-Tuned Domain Weights
                  </span>
                </button>
                <button
                  type="button"
                  className={optionBtn(model === "llama70b")}
                  onClick={() => setModel("llama70b")}
                >
                  <span>Llama 3.1 70B</span>
                  <span className="text-[10px] text-outline font-normal">
                    Groq Ultra-Fast LPU
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Telemetry */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-surface-container-lowest/90 border titanium-border flex flex-col items-center text-center hover:border-secondary/40 transition-all duration-300">
              <span className="font-mono text-xs text-outline uppercase mb-2">
                Response Latency
              </span>
              <div
                className={`font-sans text-4xl font-extrabold text-white my-1 counter-value ${
                  latencyAnim.updating ? "updating" : ""
                }`}
              >
                {latencyAnim.display}s
              </div>
              <span className="font-mono text-[11px] text-secondary">{latDesc}</span>
              <div className="w-full mt-4 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-500 ease-out"
                  style={{ width: `${latencyBarWidth}%` }}
                ></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest/90 border titanium-border flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300">
              <span className="font-mono text-xs text-outline uppercase mb-2">
                Factual Consistency
              </span>
              <div
                className={`font-sans text-4xl font-extrabold text-primary my-1 counter-value ${
                  accuracyAnim.updating ? "updating" : ""
                }`}
              >
                {accuracyAnim.display}%
              </div>
              <span className="font-mono text-[11px] text-primary">{accDesc}</span>
              <div className="w-full mt-4 h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${accuracyBarWidth}%` }}
                ></div>
              </div>
            </div>

            <div className="col-span-2 p-5 rounded-2xl bg-surface-container-lowest/90 border titanium-border flex items-center justify-between hover:border-tertiary/40 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-outline uppercase block">
                  Agent Tool Invocations
                </span>
                <span className="font-mono text-lg font-bold text-white mt-0.5 block counter-value">
                  {tools}
                </span>
              </div>
              <div className="font-mono text-xs text-tertiary bg-tertiary/10 px-3 py-1.5 rounded-lg border border-tertiary/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span>{mode}</span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
