const contactItems = [
  {
    label: "EMAIL",
    value: "cpratik055@gmail.com",
    href: "mailto:cpratik055@gmail.com",
  },
  {
    label: "PHONE",
    value: "+91 8329389682",
    href: "tel:+918329389682",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/pratikchavan",
    href: "https://linkedin.com/in/pratikchavan",
  },
  {
    label: "GITHUB",
    value: "NA — will update soon",
    href: "#",
  },
  {
    label: "LOCATION",
    value: "Pune (412105), Maharashtra, India",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12">
          <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
            CONTACT
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Open to AI/ML Engineer and Conversational AI opportunities
          </h2>
          <p className="text-gray-400 text-base mb-10 max-w-2xl leading-relaxed">
            I am especially interested in roles where LLM engineering, agentic
            AI, and production deployment come together to shape intelligent
            product experiences and real business outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#c9a04c] transition-colors group cursor-pointer"
              >
                <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors break-all">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
