import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Python",
    "C++",
    "SQL",
    "Pandas",
    "NumPy",
    "scikit-learn",
  ];

  const backendSkills = [
    "LangChain & LangGraph",
    "RAG & Vector Search",
    "PostgreSQL / MongoDB",
    "Docker & Kubernetes",
    "AWS / GCP / Azure",
    "GitHub Actions (CI/CD)",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m an engineering student passionate about data science and building practical AI systems.  
              I enjoy turning ideas into working solutions and improving my skills through projects and problem-solving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Development Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Development Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Systems (Compact Grid) */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend & Systems</h3>
                <div className="grid grid-cols-2 gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Education Section */}
          <div className="flex justify-center mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Electronics and Communication Engineering</strong> – IIIT Bhopal (2022–2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Data Science, Cloud Computing ...
                </li>
              </ul>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
