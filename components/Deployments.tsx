import SpotlightCard from "./SpotlightCard";

export default function Deployments() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full" id="deployments">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 01. Production
            Deployments
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mt-1">
            Multi-Agent Systems &amp; Autonomous Frameworks
          </h2>
        </div>
        <p className="text-sm text-on-surface-variant max-w-md font-normal">
          Field-tested agentic swarms, real-time voice orchestration, and enterprise retrieval
          engines architected for production reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Large Showcase: Varitva */}
        <SpotlightCard className="lg:col-span-8 p-8 rounded-3xl bg-surface-container-low/70 border titanium-border flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-medium animate-badge-pulse">
                  Flagship Voice Platform
                </span>
                <span className="font-mono text-xs text-outline">Sub-1.5s Voice Relay</span>
              </div>
              <span className="font-mono text-xs text-tertiary">
                LangChain • LangGraph • Twilio • ElevenLabs • AWS Lambda
              </span>
            </div>
            <h3 className="font-sans text-2xl font-bold text-white mb-2">
              Varitva: Voice-First Autonomous Agentic Platform
            </h3>
            <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed mb-6">
              Empowers non-technical operators to build full-duplex voice AI agents purely from a
              Postman API collection and schema description. Integrates live multi-document RAG
              with low-latency telephony relays.
            </p>

            <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border titanium-border mb-6">
              <div className="font-mono text-[10px] text-outline uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>STATEFUL AGENT PIPELINE &amp; DUPLEX AUDIO RELAY</span>
                <span className="text-tertiary">Interactive Node Flow</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-surface-container border border-white/5 flex flex-col items-center hover:border-tertiary/40 hover:-translate-y-1 transition-all duration-200 cursor-default">
                  <span className="font-mono text-xs text-white font-semibold">
                    Postman API Spec
                  </span>
                  <span className="text-[10px] font-mono text-tertiary mt-1">Schema Parser</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container border border-primary/20 flex flex-col items-center hover:border-primary hover:-translate-y-1 transition-all duration-200 cursor-default">
                  <span className="font-mono text-xs text-primary font-semibold">
                    Graph Router
                  </span>
                  <span className="text-[10px] font-mono text-on-surface-variant mt-1">
                    Stateful Cyclic
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container border border-secondary/20 flex flex-col items-center hover:border-secondary hover:-translate-y-1 transition-all duration-200 cursor-default">
                  <span className="font-mono text-xs text-secondary font-semibold">
                    Agent Swarm
                  </span>
                  <span className="text-[10px] font-mono text-on-surface-variant mt-1">
                    LangGraph Tool Use
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container border border-tertiary/20 flex flex-col items-center hover:border-tertiary hover:-translate-y-1 transition-all duration-200 cursor-default">
                  <span className="font-mono text-xs text-tertiary font-semibold">
                    ElevenLabs Audio
                  </span>
                  <span className="text-[10px] font-mono text-on-surface-variant mt-1">
                    Twilio Duplex Relay
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <span className="font-mono text-[10px] text-outline uppercase block">
                  Voice Response Latency
                </span>
                <span className="font-sans text-xl font-bold text-primary">
                  1.5s{" "}
                  <span className="text-xs font-mono text-outline font-normal">
                    (cut from 6.0s)
                  </span>
                </span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="font-mono text-[10px] text-outline uppercase block">
                  Infrastructure Mode
                </span>
                <span className="font-sans text-xl font-bold text-white">
                  Serverless AWS Lambda
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary beacon-pulse"></span>
              <span>Production Ready</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Numee */}
        <SpotlightCard className="lg:col-span-4 p-8 rounded-3xl bg-surface-container-low/70 border titanium-border flex flex-col justify-between hover:border-tertiary/40 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/30 text-tertiary font-mono text-xs font-medium">
                Multi-Agent Discovery
              </span>
              <span className="font-mono text-xs text-outline">Qdrant Vector DB</span>
            </div>
            <h3 className="font-sans text-xl font-bold text-white mb-2">
              Numee: Career Discovery Swarm
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Multi-agent conversational architecture mapping latent candidate competency,
              personal aspirations, and career trajectories with real-time semantic vector
              matching.
            </p>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest border titanium-border space-y-3 mb-4 group/bar hover:border-tertiary/40 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>{" "}
                  Competency Agent
                </span>
                <span className="text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>{" "}
                  Motivation Agent
                </span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden flex">
                <div className="h-full bg-primary w-1/2 group-hover/bar:w-[58%] transition-all duration-500"></div>
                <div className="h-full bg-tertiary w-1/2 group-hover/bar:w-[42%] transition-all duration-500"></div>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-outline">
                <span>Qdrant High-Dim Vectors</span>
                <span className="text-secondary font-semibold">Dynamic Scoring</span>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono text-xs text-outline">Led 2 AI Engineers</span>
            <span className="font-mono text-xs text-white font-semibold">
              Selenium + AWS Auto-Sync
            </span>
          </div>
        </SpotlightCard>

        {/* SIFRA */}
        <SpotlightCard className="lg:col-span-6 p-8 rounded-3xl bg-surface-container-low/70 border titanium-border flex flex-col justify-between hover:border-secondary/40 transition-all duration-300">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs font-medium">
                Enterprise RAG Fabric
              </span>
              <span className="font-mono text-xs text-outline">FastAPI • Gemma &amp; Llama</span>
            </div>
            <h3 className="font-sans text-2xl font-bold text-white">
              SIFRA: Privacy-Preserving Enterprise Chatbot
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Domain-specific fine-tuned engine built over 10,000+ preprocessed enterprise
              records. Incorporates Multi-Query and Parent-Document retrievers to eliminate
              hallucination in dense policy search.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-container-lowest border titanium-border hover:border-secondary/30 transition-colors">
                <span className="font-mono text-[10px] text-outline block">
                  FINE-TUNED ACCURACY
                </span>
                <span className="font-sans text-xl font-bold text-white">+15% vs Base LLM</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border titanium-border hover:border-secondary/30 transition-colors">
                <span className="font-mono text-[10px] text-outline block">
                  CORPUS PREPROCESSED
                </span>
                <span className="font-sans text-xl font-bold text-secondary">
                  10,000+ Records
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
            <span className="font-mono text-xs text-outline">Zero Data Egress Policy</span>
            <span className="font-mono text-xs text-tertiary">AWS VPC Isolated</span>
          </div>
        </SpotlightCard>

        {/* Deck Crews */}
        <SpotlightCard className="lg:col-span-6 p-8 rounded-3xl bg-surface-container-low/70 border titanium-border flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-primary font-mono text-xs font-medium">
                Agentic Document Synthesis
              </span>
              <span className="font-mono text-xs text-outline">CrewAI • python-pptx</span>
            </div>
            <h3 className="font-sans text-2xl font-bold text-white">
              Autonomous Presentation &amp; Deck Crews
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Specialized multi-agent crews that extract themes, fonts, color palettes, and
              structural layouts from corporate reference decks to autonomously generate on-brand
              enterprise slide decks with OOXML fidelity.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-container-lowest border titanium-border hover:border-primary/30 transition-colors">
                <span className="font-mono text-[10px] text-outline block">
                  VISION MULTI-MODAL
                </span>
                <span className="font-sans text-xl font-bold text-white">Layout Extraction</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border titanium-border hover:border-primary/30 transition-colors">
                <span className="font-mono text-[10px] text-outline block">
                  COMPLIANCE FORMATTING
                </span>
                <span className="font-sans text-xl font-bold text-primary">
                  100% Brand Precision
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
            <span className="font-mono text-xs text-outline">PptxGenJS + python-pptx</span>
            <span className="font-mono text-xs text-secondary">Genpact Automation POC</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
