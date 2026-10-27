import { motion } from "framer-motion";

export const Projects = ({ isDark }: { isDark: boolean }) => {
  const projects = [
    {
      name: "NewsLens-AI",
      description:
        "Multimodal Document Intelligence & Agentic RAG Platform with IBM Docling neural layout parsing, Qdrant vector retrieval, Qwen-VL chart extraction (<3s latency), LangGraph CRAG planner, and cross-encoder reranking.",
      tech: ["Python", "LangGraph", "Qdrant", "Docling", "Qwen-VL", "FastAPI", "MySQL", "React", "MinIO"],
      github: "https://github.com/piyushgoel2808/NewsLens-AI",
      live: "https://newslens-frontend-679327043786.asia-south1.run.app",
      type: "GenAI & RAG",
    },
    {
      name: "Cluely Studio",
      description:
        "Ultra-low-latency multimodal stealth AI meeting teleprompter & real-time interview copilot for macOS Apple Silicon with sub-200ms dual-channel Sherpa-ONNX speech recognition.",
      tech: ["Electron 32", "TypeScript", "React 18", "Ollama", "Sherpa-ONNX", "Tailwind", "WebSockets"],
      github: "https://github.com/piyushgoel2808/CluelyStudio",
      type: "GenAI & Systems",
    },
    {
      name: "DocuMind RAG / AI Knowledge Assistant",
      description:
        "Multi-Model Contextual Generative AI Application with dense ChromaDB embeddings, PyMuPDF tokenization, and dynamic LLM routing across Gemini, Groq, and Ollama.",
      tech: ["Python", "FastAPI", "ChromaDB", "Gemini", "Groq", "Ollama", "PyMuPDF"],
      github: "https://github.com/piyushgoel2808/AI-Knowledge-Assistant",
      type: "GenAI & ML",
    },
    {
      name: "Campus Connect",
      description:
        "High-concurrency backend infrastructure supporting production-ready REST APIs, real-time data workflows, and stateless JWT authentication for 250+ active users.",
      tech: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "JWT", "WebSockets", "Docker"],
      github: "https://github.com/piyushgoel2808/campus-connect",
      live: "https://campus-connect-live.onrender.com",
      type: "Backend Systems",
    },
    {
      name: "OpenPM RL Environment",
      description:
        "Deterministic reinforcement learning sprint simulator submitted to Meta / Hugging Face OpenEnv Hackathon.",
      tech: ["Python", "Reinforcement Learning", "Docker", "Hugging Face", "FastAPI"],
      live: "https://huggingface.co/spaces/piyushgoel2808/openpm-finale",
      github: "https://github.com/openepm/openpm",
      type: "AI & ML",
    },
    {
      name: "Gym Management System",
      description:
        "Scalable web application implementing secure authentication and role-based access control across admin and member portals.",
      tech: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "RBAC"],
      github: "https://github.com/piyushgoel2808/GymManagementSystem",
      type: "Backend",
    },
    {
      name: "Fixed Deposit Predictive Model",
      description:
        "Predictive machine learning models forecasting user engagement and banking behavior in relation to Fixed Deposits.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/piyushgoel2808/INTERNSHIP_PROJECT",
      type: "Data Science",
    },
    {
      name: "Automated Password Generator",
      description:
        "Automated password generator and entropy scoring system built in Java. NPTEL / Swayam certified.",
      tech: ["Java", "Algorithms", "Cryptography"],
      github: "https://github.com/piyushgoel2808/Password-Generator",
      type: "Security & Algorithms",
    },
    {
      name: "Status Factory",
      description:
        "FastAPI, Playwright, and Tailwind automated WhatsApp status and social asset generator with headless rendering.",
      tech: ["FastAPI", "Python", "Playwright", "Tailwind CSS"],
      github: "https://github.com/piyushgoel2808/Status-Factory",
      type: "Automation",
    },
    {
      name: "IBM Data Science Suite",
      description:
        "Exploratory data analysis, demographic SQL querying, and dynamic Python dashboard reporting across 10 IBM courses.",
      tech: ["Python", "SQL", "Pandas", "Matplotlib"],
      github: "https://github.com/piyushgoel2808/Data-Science-Professional-IBM-",
      type: "Data Science",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24"
    >
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${
                isDark
                  ? "bg-gray-800 bg-opacity-30 backdrop-blur-md text-gray-200"
                  : "bg-gray-100 bg-opacity-70 backdrop-blur-md"
              } rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    project.type === "Professional"
                      ? "bg-purple-500 bg-opacity-20 text-purple-300"
                      : "bg-blue-500 bg-opacity-20 text-blue-300"
                  }`}
                >
                  {project.type}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-500 bg-opacity-20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};
