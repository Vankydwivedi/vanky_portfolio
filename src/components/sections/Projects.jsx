import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* LangGraph Agentic AI News Generator */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold mb-2">🧠 LangGraph Agentic AI News Generator</h3>
              <p className="text-gray-400 mb-2">
                Agentic AI system built with LangGraph and Groq LLMs that autonomously researches and generates structured
                news articles. Includes Streamlit UI and Hugging Face deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {["LangGraph", "Groq", "Streamlit", "Agentic AI", "Hugging Face"].map((tech, key) => (
                  <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://mikasanami-ainewsagent.hf.space/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  Live Demo →
                </a>
                <a href="https://github.com/Vankydwivedi/langgraph-agentic-rag"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-xs text-gray-400 hover:text-gray-300">
                  GitHub
                </a>
              </div>
            </div>

            {/* Network Security — Phishing Detection */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition">
              <h3 className="text-xl font-bold mb-2">🛡️ Network Security — Phishing Detection</h3>
              <p className="text-gray-400 mb-2">
                Phishing detection system deployed on AWS EC2 & S3 using Flask backend and ML classification.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {["Python", "Flask", "Docker", "MLflow", "AWS EC2", "S3"].map((tech, key) => (
                  <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <a href="https://github.com/Vankydwivedi/ETLArmor"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  GitHub →
                </a>
                <span className="text-xs text-gray-500">
                  ⚠️ Cloud services are paused due to AWS costs.
                </span>
              </div>
            </div>

            {/* Agentic Blog Generation System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold mb-2">🧠 Agentic Blog Generation System</h3>
              <p className="text-gray-400 mb-2">
                Multi-agent blog creation system using LangGraph, FastAPI and Groq LLMs.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {["LangGraph", "FastAPI", "Groq", "RAG", "Streamlit"].map((tech, key) => (
                  <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://agentic-blog-generation.streamlit.app/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  Live Demo →
                </a>
                <a href="#"
                   className="text-xs text-gray-400 hover:text-gray-300">
                  GitHub
                </a>
              </div>
            </div>

            {/* AI Cheating Detection System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold mb-2">🧠 AI Cheating Detection System</h3>
              <p className="text-gray-400 mb-2">
                Detects AI-generated content using ensemble ML models and NLP features.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {["LightGBM", "XGBoost", "CatBoost", "NLP", "Streamlit"].map((tech, key) => (
                  <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://huggingface.co/spaces/mikasanami/ai_text_detection"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  Live Demo →
                </a>
                <a href="#"
                   className="text-xs text-gray-400 hover:text-gray-300">
                  GitHub
                </a>
              </div>
            </div>

            {/* Student Performance Indicator (Centered) */}
            <div className="md:col-span-2 flex justify-center">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-2">🎓 Student Performance Indicator</h3>
                <p className="text-gray-400 mb-2">
                  End-to-end ML pipeline with Docker and CI/CD on AWS.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {["Python", "sklearn", "AWS", "Docker", "CI/CD"].map((tech, key) => (
                    <span key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <a href="https://github.com/Vankydwivedi/-End-to-End-Machine-Learning-with-AWS-Azure-Deployment"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300">
                    GitHub →
                  </a>
                  <span className="text-xs text-gray-500">
                    ⚠️ Cloud services are paused due to AWS/Azure costs.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
