import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

type Category = "All" | "GenAI & RAG" | "Backend Systems" | "Data Science & ML";

interface Project {
  name: string;
  description: string;
  tech: string[];
  categories: Category[];
  github?: string;
  live?: string;
  badge?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "NewsLens-AI – Multimodal Document Intelligence & Agentic RAG",
    description:
      "Architected a multimodal document intelligence pipeline using Docling and RapidOCR to parse, segment, and index high-density broadsheets into Qdrant while preserving 2D reading orders. Built a high-throughput visual pipeline with Qwen-VL to extract trapped financial charts into structured Markdown (cutting inference from 48s to <3s). Designed a Corrective RAG (CRAG) LangGraph agent featuring cross-encoder reranking and a 12-domain probabilistic classifier for hallucination-free retrieval.",
    tech: [
      "Python",
      "LangGraph",
      "Qdrant",
      "Docling",
      "Qwen-VL",
      "FastAPI",
      "MySQL",
      "React",
      "MinIO",
      "BGE-M3",
    ],
    categories: ["GenAI & RAG", "Data Science & ML"],
    github: "https://github.com/piyushgoel2808/NewsLens-AI",
    live: "https://newslens-frontend-679327043786.asia-south1.run.app",
    badge: "Flagship Agentic RAG · 2026",
    featured: true,
  },
  {
    name: "Cluely Studio – Real-Time Stealth AI Meeting Copilot & Teleprompter",
    description:
      "Ultra-low-latency multimodal stealth AI meeting teleprompter and real-time interview copilot for macOS Apple Silicon. Delivers instant teleprompting (<150ms TTFT via Ollama) and sub-200ms dual-channel speech recognition using native Sherpa-ONNX (NVIDIA Parakeet-TDT). Built with Electron 32, React 18, TypeScript, Tailwind, WebSocket stealth companion app, and 100% screen-share invisibility.",
    tech: [
      "Electron 32",
      "TypeScript",
      "React 18",
      "Ollama",
      "Sherpa-ONNX",
      "Tailwind",
      "WebSockets",
      "macOS",
    ],
    categories: ["GenAI & RAG", "Backend Systems"],
    github: "https://github.com/piyushgoel2808/CluelyStudio",
    badge: "Stealth AI Copilot",
    featured: true,
  },
  {
    name: "DocuMind RAG / AI Knowledge Assistant",
    description:
      "Architected an end-to-end local-first RAG pipeline to perform grounded, citation-backed querying over unstructured enterprise documents (.pdf, .docx, .txt), optimizing semantic chunking for low latency. Engineered modular data ingestion and tokenization workflows (PyMuPDF, python-docx) with dense ChromaDB vector embeddings. Built a fault-tolerant LLM orchestration layer dynamically routing inference across Gemini, Groq, and local Ollama models.",
    tech: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Gemini",
      "Groq",
      "Ollama",
      "PyMuPDF",
      "python-docx",
    ],
    categories: ["GenAI & RAG", "Data Science & ML"],
    github: "https://github.com/piyushgoel2808/AI-Knowledge-Assistant",
    badge: "Featured GenAI · 2026",
    featured: true,
  },
  {
    name: "Campus Connect – Scalable Production Backend",
    description:
      "Engineered a high-concurrency backend infrastructure supporting production-ready REST APIs, real-time data workflows, and stateless JWT authentication for 250+ active users. Built with Spring Boot 3.2.5, Spring Security, Spring Data JPA, and STOMP WebSockets for real-time messaging, content moderation, and event management. Optimized database query execution plans and relational indexing.",
    tech: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "JWT", "WebSockets", "Docker"],
    categories: ["Backend Systems"],
    github: "https://github.com/piyushgoel2808/campus-connect",
    live: "https://campus-connect-live.onrender.com",
    badge: "Live Production · 250+ Users",
    featured: true,
  },
  {
    name: "OpenPM — RL Sprint Environment",
    description:
      "Deterministic reinforcement learning environment simulating software sprint management submitted to Meta / Hugging Face OpenEnv Hackathon. Dependency-aware task graphs, zero-sum resource economics, and seeded stochastic blockers that test genuine operational competence.",
    tech: [
      "Python",
      "Reinforcement Learning",
      "Docker",
      "Hugging Face",
      "FastAPI",
    ],
    categories: ["GenAI & RAG", "Data Science & ML"],
    live: "https://huggingface.co/spaces/piyushgoel2808/openpm-finale",
    github: "https://github.com/openepm/openpm",
    badge: "HF Hackathon",
    featured: true,
  },
  {
    name: "Gym Management System – Scalable Web Application",
    description:
      "Contributed to a group-developed Gym Management System by implementing secure authentication, multi-tier database schemas, and role-based access control (RBAC) across administrative and member portals.",
    tech: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "RBAC"],
    categories: ["Backend Systems"],
    github: "https://github.com/piyushgoel2808/GymManagementSystem",
    badge: "Full-Stack System",
    featured: true,
  },
  {
    name: "Fixed Deposit User Engagement Predictive Analysis",
    description:
      "Designed and implemented predictive machine learning models utilizing data science tools to forecast user engagement and banking behavior in relation to Fixed Deposits, contributing to data-driven decision making.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Data Science"],
    categories: ["Data Science & ML"],
    github: "https://github.com/piyushgoel2808/INTERNSHIP_PROJECT",
    badge: "ML Predictive Model",
  },
  {
    name: "Automated Password Generator & Strength Analyzer",
    description:
      "Engineered a Java application calculating entropy algorithms and generating cryptographically sound passwords alongside real-time security strength scoring. Certified under Swayam / NPTEL.",
    tech: ["Java", "Algorithms", "Cryptography", "Security"],
    categories: ["Backend Systems"],
    github: "https://github.com/piyushgoel2808/Password-Generator",
    badge: "NPTEL Certified",
  },
  {
    name: "Status Factory – Dynamic Social Asset Engine",
    description:
      "Mobile-first automated WhatsApp status and social asset generator built with FastAPI, Jinja2, Playwright, and Tailwind CSS. Generates high-resolution 1080x1920 status visuals with headless browser rendering and dynamic Unsplash integration.",
    tech: ["FastAPI", "Python", "Playwright", "Jinja2", "Tailwind CSS"],
    categories: ["Backend Systems"],
    github: "https://github.com/piyushgoel2808/Status-Factory",
    badge: "FastAPI Automation",
  },
  {
    name: "IBM Data Science & Analytics Suite",
    description:
      "Comprehensive data science suite containing exploratory data analysis, SQL database queries across crime and demographic datasets, and dynamic dashboard reporting for transportation reliability.",
    tech: ["Python", "SQL", "Pandas", "Data Analytics", "Dashboards"],
    categories: ["Data Science & ML"],
    github: "https://github.com/piyushgoel2808/Data-Science-Professional-IBM-",
    badge: "IBM Data Science",
  },
];

const CATEGORIES: Category[] = ["All", "GenAI & RAG", "Backend Systems", "Data Science & ML"];

const ACCENT: Record<Category, string> = {
  All: "#00d4ff",
  "GenAI & RAG": "#7c3aed",
  "Backend Systems": "#ec4899",
  "Data Science & ML": "#00ffa3",
};

export const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = PROJECTS.filter(
    (p) => active === "All" || p.categories.includes(active),
  );

  return (
    <section id="projects" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Portfolio</span>

        {/* Title + Filters row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mt-3 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Projects
          </h2>

          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider border transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: ACCENT[cat],
                        color: "#060610",
                        borderColor: "transparent",
                      }
                    : {
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "var(--text-1)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-7 flex flex-col"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{
                        color: ACCENT[cat],
                        borderColor: `${ACCENT[cat]}30`,
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                  {project.badge && (
                    <span
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {project.name}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "var(--text-1)" }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded font-mono border"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: "var(--text-1)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-1)")
                      }
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: "var(--accent-cyan)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--accent-cyan)")
                      }
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
