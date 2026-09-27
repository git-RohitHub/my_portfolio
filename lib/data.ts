export const profile = {
  name: "Rohit Kumar",
  role: "AI/ML & Agentic Systems Engineer",
  location: "Meerut, Uttar Pradesh, India",
  companies: "Ex-Frisson Devhub & Genpact",
  specialty: "Specializing in Agentic Workflows, LangGraph, RAG & LLM Fine-Tuning",
  github: "https://github.com/git-RohitHub",
  githubLabel: "github.com/git-RohitHub",
  email: "rohit2852001@gmail.com",
  phone: "+91 9759279921",
  phoneHref: "tel:+919759279921",
  avatar:
    "https://lh3.googleusercontent.com/aida/AEtjO1U56juy0fBGj8mtJgPvMXqTM_tqT3nIYQuHACU2L2hDbdUhBuypAExkQ_umoqgLGeP8TfGvrb5Tf0YWCAfTdyzoifWHBncd2TU4jXR_pFycUX0xI537yqufowdSSnmo0rq1oYYErTghvrgfr6tk2TyYn5nDIpDN972QuGcjOWw2Yzp4QPXhce7Qvox2v42VIG0H77gwOZy4uLCw_6EZq8AJcqgVwO2kkEdmkZXiTFQlXicVSHYKUkxrtIy3",
};

export const navLinks = [
  { href: "#deployments", label: "01. SYSTEMS" },
  { href: "#profiler", label: "02. SANDBOX" },
  { href: "#flagship", label: "03. FLAGSHIP PROJECTS" },
  { href: "#stack", label: "04. STACK" },
  { href: "#trajectory", label: "05. TRAJECTORY" },
];

export const heroStats = [
  { value: "1.5s", label: "Voice TTFT (vs 6s)", color: "text-primary" },
  { value: "94%", label: "Llama 3.1 Accuracy", color: "text-white" },
  { value: "+20%", label: "RAG Retrieval Lift", color: "text-secondary" },
  { value: "10k+", label: "Vectors Indexed", color: "text-tertiary" },
];

export const skillCategories = [
  {
    icon: "hub",
    color: "primary",
    title: "Agentic Frameworks",
    description: "Cyclic state graphs, agent role swarms, self-reflection tool loops.",
    tags: ["LangGraph", "LangChain", "CrewAI", "PhiData", "AutoGen"],
    span: "",
  },
  {
    icon: "memory",
    color: "tertiary",
    title: "LLMs & Fine-Tuning",
    description: "Open-weight optimization, parameter-efficient LoRA, quantization.",
    tags: ["Llama 3.1", "Gemma", "Hugging Face", "PyTorch", "LoRA / QLoRA", "OpenAI API"],
    span: "",
  },
  {
    icon: "database",
    color: "secondary",
    title: "Vector & High-Dim Storage",
    description: "Embedding indexing, parent-doc mapping, and hybrid keyword-vector search.",
    tags: ["Qdrant", "Chroma", "Vector DBs", "MongoDB", "SQL / PostgreSQL"],
    span: "",
  },
  {
    icon: "cloud",
    color: "primary",
    title: "Serving & Cloud Primitives",
    description: "Low-latency API gateways, serverless runtimes, and real-time audio links.",
    tags: ["FastAPI", "AWS (Lambda, SageMaker)", "Docker", "Flask", "Twilio Relay"],
    span: "",
  },
  {
    icon: "account_tree",
    color: "tertiary",
    title: "Enterprise Automation & Agile Integration",
    description: "Connecting custom Python AI swarms into enterprise business process fabrics.",
    tags: [
      "Microsoft Power Automate",
      "Workato",
      "JIRA",
      "CI/CD Pipelines",
      "python-pptx",
      "Agile Scrum Delivery",
    ],
    span: "lg:col-span-2",
  },
];

export const trajectory = [
  {
    date: "July 2026 — PRESENT",
    dateColor: "text-primary",
    dotColor: "bg-primary",
    dotAnim: "animate-ping",
    title: "AI/ML Engineer",
    company: "Genpact • Noida, India",
    companyColor: "text-tertiary",
    description:
      "Architecting enterprise document automation crews (PPTX, DOCX, RAG pipelines). Integrating custom AI microservices with Power Automate and Workato to accelerate R&D POC turnarounds.",
    tags: ["CrewAI", "Power Automate", "Enterprise RAG"],
    border: "hover:border-primary/40",
  },
  {
    date: "Nov 2023 — July 2026",
    dateColor: "text-tertiary",
    dotColor: "bg-tertiary",
    dotAnim: "animate-pulse",
    title: "AI/ML Engineer",
    company: "Frisson Devhub • Noida, India",
    companyColor: "text-white/70",
    description:
      "Constructed production GenAI architectures with LangGraph and LangChain. Boosted RAG retrieval performance by 20% through parent-chunk algorithms, cut API latency by 25% with FastAPI, and fine-tuned open models.",
    tags: ["LangGraph", "FastAPI", "Fine-Tuning"],
    border: "hover:border-tertiary/40",
  },
  {
    date: "EDUCATION & CERTS",
    dateColor: "text-white/50",
    dotColor: "",
    dotAnim: "",
    title: "B.Tech in Computer Science",
    company: "Dewan V.S Institute of Tech • CGPA: 7.3",
    companyColor: "text-secondary",
    description:
      "Specialized in Full Stack Data Science (Physics Wallah), Data Analytics (ICT Academy), and Big Data Analytics (CDAC NASSCOM). Deep grounding in distributed compute and algorithms.",
    tags: ["B.Tech CS", "PW Data Science", "CDAC Big Data"],
    border: "hover:border-white/20",
  },
];

export const research = [
  {
    badge: "Fine-Tuning Study",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    meta: "PyTorch • AWS SageMaker",
    metric: "94% Train / 89% Test Acc",
    title: "Llama 3.1 8B AI/Human Hybrid Text Detection Architecture",
    hoverColor: "group-hover:text-primary",
    description:
      "Curated a high-entropy dataset distinguishing authentic human writing from GPT-4o, Claude 3.5, and Copilot generated copy. Fine-tuned an 8-billion parameter Llama 3.1 checkpoint using LoRA and 4-bit quantization, releasing weights to Hugging Face Model Hub.",
    cta: "View Model Code",
    ctaColor: "hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
    href: "https://github.com/git-RohitHub",
  },
  {
    badge: "Autonomous Agent",
    badgeColor: "bg-tertiary/10 text-tertiary border-tertiary/20",
    meta: "Groq LPU • ChromaDB",
    metric: "450 tok/s Dispatch",
    title: "Intelligent Real-Time Application Dispatcher",
    hoverColor: "group-hover:text-tertiary",
    description:
      "Autonomous crawler and resume-alignment engine parsing incoming technical job descriptions in real-time. Matches candidate vector profiles in ChromaDB and formulates tailored executive pitch artifacts powered by Llama 3.1 70B via Groq.",
    cta: "GitHub Repository",
    ctaColor: "hover:border-tertiary/50 hover:bg-tertiary/10 hover:text-tertiary",
    href: "https://github.com/git-RohitHub",
  },
];
