const education = [
  {
    institution: "Annasaheb Dange College of Engineering & Technology",
    degree: "B.Tech – CSE (IoT, Cyber Security & Blockchain Technology)",
    location: "ASHTA, MAHARASHTRA, INDIA",
    period: "2022 – 2025",
    grade: "CGPI: 7.09",
  },
  {
    institution: "Dr. Bapuji Salunkhe Institute of Engineering And Technology",
    degree: "Diploma in Computer Engineering",
    location: "KOLHAPUR, MAHARASHTRA, INDIA",
    period: "2019 – 2022",
    grade: "83%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-4">
          EDUCATION
        </p>
        <h2 className="text-4xl font-bold text-white mb-12">
          Academic foundation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8"
            >
              <h3 className="text-white text-xl font-bold mb-2">
                {edu.institution}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{edu.degree}</p>
              <p className="text-[#c9a04c] text-xs font-semibold tracking-widest uppercase mb-2">
                {edu.location}
              </p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
              <p className="text-gray-400 text-sm mt-2 font-medium">
                {edu.grade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
