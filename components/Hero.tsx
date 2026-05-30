const skillTags = [
  "Conversational AI",
  "LLM Engineering",
  "RAG Pipelines",
  "Agentic AI",
  "LangChain",
  "FastAPI",
  "Multi-Agent Systems",
];

const stats = [
  { number: "5+", label: "Production AI projects shipped" },
  { number: "40%", label: "LLM API call reduction via caching" },
  { number: "35%", label: "Faster inference via async batching" },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Role Tags */}
            <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-6">
              AI/ML ENGINEER · CONVERSATIONAL AI · LANGCHAIN · FASTAPI
            </p>

            {/* Name */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white block">Pratik</span>
              <span className="text-[#c9a04c] block">Chavan</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-3 leading-relaxed">
              I build production-grade conversational AI systems that turn
              complex LLM capabilities into reliable, business-ready
              applications.
            </p>
            <p className="text-[#c9a04c] italic text-base mb-8">
              Focused on agentic AI workflows, RAG pipelines, and real-time AI
              deployments.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300 text-sm rounded-full hover:border-[#c9a04c] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#c9a04c] text-black text-sm font-semibold rounded-full hover:bg-[#d4b06a] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pratikchavan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[#3a3a3a] text-gray-300 text-sm font-semibold rounded-full hover:border-gray-500 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[#3a3a3a] text-gray-300 text-sm font-semibold rounded-full hover:border-gray-500 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4"
                >
                  <p className="text-white text-2xl font-bold">{stat.number}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-88 lg:w-96 lg:h-[28rem] bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4">
              <svg
                className="w-24 h-24 text-[#3a3a3a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <div className="text-center px-6">
                <p className="text-gray-600 text-sm">Profile photo</p>
                <p className="text-gray-700 text-xs mt-1">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
