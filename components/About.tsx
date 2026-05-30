const whatIBuild = [
  "Conversational AI chatbots with persistent memory and structured, typed outputs",
  "Multi-agent systems with LangGraph for complex, orchestrated agentic workflows",
  "RAG pipelines (Naive / Agentic / Hybrid) over enterprise document repositories",
  "Production REST APIs with FastAPI, JWT authentication, and Docker deployments",
  "LLM-integrated SaaS applications with real-time natural language user interaction",
  "Computer vision microservices optimized for on-device mobile inference",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
          ABOUT
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          One profile. One clear story.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bio */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed">
              Software Engineer specializing in Conversational AI and
              intelligent system implementation, with production experience
              delivering{" "}
              <strong className="text-white">
                LLM-powered chatbots, agentic AI workflows, and RAG-based
                solutions
              </strong>
              . Skilled in prompt engineering, API integration, structured
              output design, and end-to-end deployment of AI-driven
              applications.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Experienced in direct client-facing technical roles — gathering
              requirements, validating solutions on-site, and resolving
              production issues. Proficient in{" "}
              <strong className="text-white">
                LangChain, LangGraph, FastAPI
              </strong>
              , and multi-agent orchestration patterns including tool calling,
              MCP-style interfaces, and function-calling agents.
            </p>
          </div>

          {/* What I Build */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-5">
              WHAT I BUILD
            </p>
            <ul className="space-y-3">
              {whatIBuild.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                >
                  <span className="text-[#c9a04c] mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
