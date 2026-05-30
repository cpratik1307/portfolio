interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer, AI/ML",
    company: "Simulytics Services Pvt Ltd",
    type: "Full-time (Former ML Intern: Jan – Jun 2025)",
    location: "Pune",
    period: "Jan 2025 – Present",
    tags: [
      "CONVERSATIONAL AI",
      "LANGCHAIN",
      "FASTAPI",
      "DOCKER",
      "RAG",
      "COMPUTER VISION",
    ],
    bullets: [
      "[Conversational AI] Designed and integrated an AI-powered chatbot into a commercial SaaS Warehouse Management Platform, enabling end-users to interact with warehouse data, order queries, and operational workflows through natural language.",
      "Implemented conversational flows using LangChain with conversation memory, prompt templates, and structured output parsers — ensuring reliable, typed responses for downstream business process consumption.",
      "Applied prompt engineering best practices: few-shot prompting, chain-of-thought, output formatting constraints, and fallback handling to reduce hallucination rates in production.",
      "Built and deployed RESTful AI inference APIs using FastAPI; integrated authentication (JWT), rate limiting, and error-handling patterns to meet production-grade SaaS quality standards.",
      "Containerized AI services with Docker for consistent staging-to-production deployments; managed end-to-end service delivery including testing, validation, and go-live support.",
      "Led on-site client engagements across multiple customer environments: gathered technical requirements, conducted solution demonstrations, diagnosed integration issues, and ensured smooth go-live.",
      "Developed and maintained integrations using REST APIs and modern web technologies (JavaScript, React); collaborated cross-functionally with product, engineering, and domain experts.",
      "Implemented computer vision features (carton counting, PPE detection, barcode scanning) as microservices; optimized models using ONNX/TFLite for on-device Android inference via Retrofit API.",
      "Actively involved in SaaS WMS product planning and frontend implementation using React; gained working knowledge of commercial SaaS product architecture, billing structures, and iterative feature delivery.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Skill Encoder",
    type: "Internship",
    location: "Remote",
    period: "Jan 2025 – Jun 2025",
    tags: ["REACT NATIVE", "MONGODB", "REST API", "AGILE", "WEBSOCKET"],
    bullets: [
      "Developed a React Native lead management application with MongoDB backend; worked in agile cross-functional sprints delivering real-time sync and cross-platform compatibility.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
          EXPERIENCE
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          Building decision-ready AI systems for production
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-white text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 italic">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5">{exp.type}</p>
                  <p className="text-[#c9a04c] text-xs font-semibold tracking-wider mt-3">
                    {exp.tags.join(" · ")}
                  </p>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-[#c9a04c] mt-1.5 text-xs shrink-0">
                      •
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
