import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Edunet Foundation (Microsoft & SAP)",
    location: "Remote",
    role: "AI & Data Intern",
    team: "TechSaksham Program",
    period: "Jan 2025 – Mar 2025",
    color: "#00d4ff",
    bullets: [
      "Contributed to AI: Transformative Learning with TechSaksham, a joint CSR initiative by Microsoft & SAP.",
      "Engineered AI-driven educational applications and analyzed machine learning models for transformative learning solutions.",
      "Collaborated on project implementations combining cloud intelligence with real-world accessibility requirements.",
    ],
  },
  {
    company: "Vodafone Idea Foundation",
    location: "Remote",
    role: "Data Analytics Intern",
    team: "Data & Computational Pipelines",
    period: "Jun 2024 – Aug 2024",
    color: "#7c3aed",
    bullets: [
      "Executed end-to-end data preprocessing, cleaning, and structural transformation on large-scale raw datasets to prepare inputs for downstream computational and predictive pipelines.",
      "Extracted business insights, handled missing/noisy data, and optimized data structures for predictive modeling.",
      "Developed automated data validation routines and analytics reporting dashboards.",
    ],
  },
  {
    company: "Infosys",
    location: "Delhi, India",
    role: "Java Technology Stack Intern",
    team: "Enterprise Software Engineering",
    period: "May 2024 – July 2024",
    color: "#ec4899",
    bullets: [
      "Developed and integrated scalable backend modules using Java, Spring Boot, and SQL within an enterprise application architecture, streamlining data processing workflows across cross-functional sprints.",
      "Executed query optimizations, unit testing, and peer code reviews within Agile workflows to ensure production-grade reliability and adherence to software engineering standards.",
    ],
  },
  {
    company: "Oasis Infobyte",
    location: "Remote",
    role: "Data Science Intern",
    team: "Machine Learning & Analytics",
    period: "Oct 2023 – Dec 2023",
    color: "#00ffa3",
    bullets: [
      "Developed exploratory data analysis routines and predictive statistical models using Python, Scikit-learn, and Pandas.",
      "Implemented regression and classification workflows for pattern recognition across diverse industry datasets.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Professional Experience</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-16">
          Work History
        </h2>

        <div className="relative max-w-4xl">
          {/* Timeline vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #00d4ff 0%, #7c3aed 40%, #ec4899 70%, #00ffa3 100%)",
              opacity: 0.25,
            }}
          />

          <div className="space-y-10 pl-16">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-7 rounded-full"
                  style={{
                    left: "-3rem",
                    width: "10px",
                    height: "10px",
                    background: exp.color,
                    boxShadow: `0 0 10px ${exp.color}`,
                    transform: "translateX(-50%)",
                    marginLeft: "1px",
                  }}
                />

                <div className="glass-card p-7 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <span
                        className="inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2"
                        style={{
                          color: exp.color,
                          borderColor: `${exp.color}35`,
                        }}
                      >
                        {exp.team}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--text-1)" }}
                      >
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span
                      className="font-mono text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{
                        color: "var(--text-2)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-1)" }}
                      >
                        <span
                          className="mt-[5px] shrink-0 text-[8px]"
                          style={{ color: exp.color }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
