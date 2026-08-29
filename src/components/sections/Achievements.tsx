import { motion } from "framer-motion";
import { Star, Users, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Users,
    color: "#00d4ff",
    title: "Public Relations Head — IEEE BVICAM",
    description:
      "Led PR, outreach, and technical event coordination at IEEE BVICAM, driving student engagement, communications, and national symposium initiatives.",
    tag: "Leadership",
  },
  {
    icon: Star,
    color: "#7c3aed",
    title: "NPTEL Star Learner (IIT Kanpur)",
    description:
      "Recognized by IIT Kanpur as an NPTEL Star Learner for elite performance and top percentile rankings across national courses in Cloud Computing, Data Analytics (Python), and IoT.",
    tag: "National Recognition",
  },
  {
    icon: Award,
    color: "#00ffa3",
    title: "IBM Data Science Professional",
    description:
      "Earned comprehensive professional certification in Python data engineering, predictive modeling, statistical testing, and advanced SQL database querying from IBM.",
    tag: "Specialization",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Recognition</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-16">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14 }}
                className="glass-card p-8 relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${item.color}10 0%, transparent 60%)`,
                  }}
                />

                {/* Tag */}
                <span
                  className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border mb-6 inline-block"
                  style={{ color: item.color, borderColor: `${item.color}30` }}
                >
                  {item.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}28`,
                    color: item.color,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-1)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
