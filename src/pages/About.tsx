import { motion } from "framer-motion";

export const About = ({ isDark }: { isDark: boolean }) => {
  const skills = [
    {
      category: "AI & GenAI",
      items: ["RAG Pipelines", "LangChain", "LLMs (Gemini, Groq)", "ChromaDB Vector DB", "Prompt Engineering"],
    },
    {
      category: "Backend & Systems",
      items: ["Java", "Python", "Spring Boot", "RESTful APIs", "JWT Auth", "MySQL"],
    },
    {
      category: "Tools & Methodologies",
      items: [
        "Git & GitHub",
        "Docker",
        "Postman",
        "Agile Methodologies",
        "Linux",
      ],
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
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-lg ${
            isDark ? "bg-gray-800 bg-opacity-60 backdrop-blur-md text-gray-200" : "bg-gray-100"
          } mb-12`}
        >
          <p className="text-lg mb-4">
            I'm a Software Developer and AI Engineer equipped with a solid foundation in computer science, backend systems engineering, and AI pipeline development.
          </p>
          <p className="text-lg">
            Experienced in building high-concurrency Spring Boot backend architectures, secure JWT authentication mechanisms, and full-stack contextual RAG pipelines integrated with ChromaDB vector databases and multi-foundation LLM orchestration.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold mb-6"
        >
          Skills & Expertise
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className={`p-6 rounded-lg ${
                isDark
                  ? "bg-gray-800 bg-opacity-30 backdrop-blur-md text-gray-200"
                  : "bg-gray-100 bg-opacity-50 backdrop-blur-md text-gray-800"
              }`}
            >
              <h4 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
};
