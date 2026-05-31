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
                href="https://github.com/cpratik1307"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#c9a04c] text-black text-sm font-semibold rounded-full hover:bg-[#d4b06a] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-chavan-910764211/"
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

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-88 lg:w-96 lg:h-[28rem] bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Pratik Chavan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
