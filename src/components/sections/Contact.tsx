import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown, MapPin } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "piyushgoel811@gmail.com",
    href: "mailto:piyushgoel811@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/piyush-goel-2808",
    href: "https://www.linkedin.com/in/piyush-goel-2808",
    color: "#7c3aed",
  },
  {
    icon: Github,
    label: "github.com/piyushgoel2808",
    href: "https://github.com/piyushgoel2808",
    color: "#ec4899",
  },
  {
    icon: MapPin,
    label: "Delhi, India",
    href: "#",
    color: "#00ffa3",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Get In Touch</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
          Let's build something
          <br />
          <span className="gradient-text">extraordinary.</span>
        </h2>
        <p
          className="text-lg max-w-xl mb-16 leading-relaxed"
          style={{ color: "var(--text-1)" }}
        >
          Open to full-time engineering opportunities, AI/RAG system collaborations, and technical discussions about backend architectures and machine learning pipelines.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact links */}
          <div className="space-y-5">
            {LINKS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                  style={{ color: "var(--text-1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}25`,
                      color: item.color,
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <span className="font-mono text-sm transition-colors duration-200 group-hover:text-white">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Resume CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col items-start"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Download my Resume
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-1)" }}
            >
              Full details of my professional experience, projects, education,
              and technical skills.
            </p>
            <a
              href="./resume.pdf"
              download="Piyush_Goel_Resume.pdf"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                boxShadow: "0 0 40px rgba(0,212,255,0.2)",
              }}
            >
              <FileDown size={17} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="mt-28 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm font-mono"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            color: "var(--text-2)",
          }}
        >
          <span>
            © 2026 Piyush Goel. Built with React + TypeScript + Framer Motion.
          </span>
          <span>Delhi, India</span>
        </div>
      </div>
    </section>
  );
};
