interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

interface Project {
  category: string;
  featured: boolean;
  isPublic: boolean;
  qualityTags: string[];
  name: string;
  tech: string[];
  description: string;
  impact: string;
  links: ProjectLink[];
  period: string;
}

const projects: Project[] = [
  {
    category: "AGENTIC AI · FEATURED",
    featured: true,
    isPublic: false,
    qualityTags: ["PRODUCTION-GRADE", "MULTI-AGENT", "SCALABLE"],
    name: "Multi-Agent RAG System with LangGraph",
    tech: [
      "PYTHON",
      "LANGGRAPH",
      "PINECONE",
      "GPT-4O",
      "FASTAPI",
      "REDIS",
      "DOCKER",
      "GITHUB ACTIONS",
    ],
    description:
      "Architected a production-grade multi-agent system using LangGraph with a supervisor agent orchestrating specialized sub-agents: a retrieval agent (Pinecone hybrid search), a reasoning agent (GPT-4o), and a validation/grounding agent.",
    impact:
      "Implemented tool-calling interfaces with schema validation, retries, and fallback logic for safe and predictable agent behavior. Integrated LangSmith tracing for full observability; deployed behind FastAPI with Redis-based session memory enabling persistent multi-turn conversations. Containerized with Docker Compose and integrated GitHub Actions CI/CD pipeline.",
    links: [{ label: "GitHub", href: "#", primary: true }],
    period: "Apr 2025 – Jun 2025",
  },
  {
    category: "RAG SYSTEMS · FEATURED",
    featured: true,
    isPublic: false,
    qualityTags: ["MEASURABLE", "PRODUCTION-GRADE", "OUTCOME-DRIVEN"],
    name: "RAG-Powered Document Intelligence Chatbot",
    tech: [
      "PYTHON",
      "LANGCHAIN",
      "CHROMADB",
      "GPT-4O",
      "FASTAPI",
      "REDIS",
      "DOCKER",
    ],
    description:
      "Built a production-grade RAG chatbot using LangChain and ChromaDB for semantic Q&A over enterprise document repositories with GPT-4o as the reasoning backbone and custom prompt templates.",
    impact:
      "Achieved <2s average response time on a 10K-document corpus; deployed as a Dockerized FastAPI service with Redis caching layer reducing redundant LLM API calls by 40%. Implemented structured output parsing and conversation memory for a seamless, context-aware chat experience.",
    links: [{ label: "GitHub", href: "#", primary: true }],
    period: "Mar 2025 – May 2025",
  },
  {
    category: "FULL-STACK AI · FEATURED",
    featured: true,
    isPublic: false,
    qualityTags: ["SCALABLE", "MEASURABLE", "TEST-COVERED"],
    name: "AI-Powered Lead Management System",
    tech: [
      "REACT NATIVE",
      "FASTAPI",
      "MONGODB",
      "JWT",
      "WEBSOCKET",
      "OPENAPI",
    ],
    description:
      "Built a full-stack application using React Native, FastAPI, and MongoDB with JWT authentication, role-based access control, and real-time WebSocket sync.",
    impact:
      "Designed RESTful APIs following OpenAPI spec; achieved 80% unit and integration test coverage.",
    links: [{ label: "GitHub", href: "#", primary: true }],
    period: "Jan 2025 – Jun 2025",
  },
  {
    category: "LANGCHAIN · ONGOING",
    featured: false,
    isPublic: false,
    qualityTags: ["COMPREHENSIVE", "PRODUCTION-READY"],
    name: "LangChain — Conversational AI & GenAI Development",
    tech: [
      "PYTHON",
      "LANGCHAIN",
      "PYDANTIC",
      "CHROMADB",
      "FAISS",
      "PINECONE",
      "LCEL",
    ],
    description:
      "Built comprehensive LangChain expertise covering LCEL chain architecture, prompt templates, structured output (Pydantic), output parsers (JSON, CSV), and custom formatters for reliable downstream integration.",
    impact:
      "Implemented document loaders, text splitters, embedding pipelines, and vector store integrations. Built functional conversational AI chatbots with ConversationBufferWindowMemory and tool-calling agents via LangChain AgentExecutor with custom tool definitions.",
    links: [],
    period: "Ongoing 2025",
  },
  {
    category: "ML SYSTEMS · MICROSERVICES",
    featured: false,
    isPublic: false,
    qualityTags: ["SCALABLE", "PERFORMANCE-OPTIMIZED"],
    name: "Scalable ML Inference Service",
    tech: [
      "FASTAPI",
      "REDIS",
      "DOCKER",
      "KUBERNETES",
      "PROMETHEUS",
      "A/B TESTING",
    ],
    description:
      "Designed a modular AI inference service using FastAPI, Redis (task queue), and Docker with hot-swappable model versions and A/B testing.",
    impact:
      "Reduced average response time by 35% via async batching on a Kubernetes cluster with Prometheus monitoring.",
    links: [],
    period: "Jun 2024 – Aug 2024",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
          SELECTED WORK
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          Projects that connect AI systems to real business value
        </h2>

        {/* Featured Projects */}
        <div className="space-y-6 mb-12">
          {featured.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Additional Work */}
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-6">
          ADDITIONAL WORK
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additional.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
      {/* Category row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-wider uppercase">
          {project.category}
        </p>
        {project.isPublic ? (
          <span className="px-2.5 py-0.5 bg-[#0f2a1a] border border-[#1a4a2a] text-green-400 text-xs rounded-full font-medium">
            PUBLIC
          </span>
        ) : null}
        {project.qualityTags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 border border-[#333] text-gray-500 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>

      {/* Tech stack */}
      <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
        {project.tech.join(", ")}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Impact */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        <span className="text-[#c9a04c] font-semibold">Impact: </span>
        {project.impact}
      </p>

      {/* Period */}
      <p className="text-gray-600 text-xs mb-5">{project.period}</p>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                link.primary
                  ? "bg-[#c9a04c] text-black hover:bg-[#d4b06a]"
                  : "border border-[#3a3a3a] text-gray-300 hover:border-gray-500 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {!project.links.length && (
        <p className="text-gray-600 text-xs italic">Repository not public</p>
      )}
    </div>
  );
}
