interface SkillCategory {
  emoji: string;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    emoji: "🤖",
    title: "Conversational AI & LLM Engineering",
    skills: [
      "LangChain (LCEL, Chains, Agents, Memory, Tools)",
      "LangGraph",
      "Multi-Agent Orchestration",
      "Tool Calling",
      "Function Calling",
      "MCP-style Interfaces",
      "RAG Pipelines (Naive / Agentic / Hybrid)",
      "Prompt Engineering",
      "Structured Output",
      "LangSmith Observability",
    ],
  },
  {
    emoji: "🧠",
    title: "LLM APIs & Platforms",
    skills: [
      "OpenAI API (GPT-4o, Embeddings, Function Calling)",
      "Anthropic API",
      "Hugging Face Hub",
      "Ollama",
      "vLLM",
      "LlamaIndex",
    ],
  },
  {
    emoji: "🔬",
    title: "Fine-Tuning & Evaluation",
    skills: [
      "LoRA",
      "QLoRA",
      "PEFT",
      "Instruction Tuning",
      "GGUF/GPTQ",
      "deepeval",
      "ROUGE",
      "BERTScore",
      "LLM-as-Judge",
    ],
  },
  {
    emoji: "🗄️",
    title: "Vector Databases & Embeddings",
    skills: [
      "Pinecone",
      "ChromaDB",
      "Qdrant",
      "FAISS",
      "Sentence Transformers",
      "OpenAI Embeddings",
      "Hybrid Search (BM25 + Dense)",
    ],
  },
  {
    emoji: "⚙️",
    title: "Software Engineering & APIs",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JSON",
      "JWT",
      "OpenAPI/Swagger",
      "Git",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    emoji: "🚀",
    title: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Redis",
      "MLflow",
      "Weights & Biases",
      "Prometheus",
      "Streamlit",
      "Bash",
    ],
  },
  {
    emoji: "💻",
    title: "Full-Stack & Mobile",
    skills: [
      "React (SaaS product development)",
      "React Native",
      "Android (Retrofit, REST API)",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    emoji: "🗃️",
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    emoji: "🤝",
    title: "Soft Skills",
    skills: [
      "Client-Facing Technical Delivery",
      "Requirements Gathering",
      "Solution Validation",
      "Cross-Functional Collaboration",
      "Agile/Scrum",
      "Rapid Iteration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
          TECHNICAL TOOLKIT
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          AI systems, APIs, and production infrastructure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold text-sm mb-4">
                {category.emoji}{" "}
                <span className="ml-1">{category.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#111111] border border-[#333333] text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
