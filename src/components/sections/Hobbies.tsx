import { motion } from "framer-motion";
import { Activity, Globe, Award, Languages as LanguagesIcon } from "lucide-react";

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <span className="section-label">// Beyond the Code</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-16">
          Hobbies & Interests
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Badminton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden group flex flex-col"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(236,72,153,0.08) 0%, transparent 65%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                background: "rgba(236,72,153,0.1)",
                border: "1px solid rgba(236,72,153,0.2)",
                color: "#ec4899",
              }}
            >
              <Activity size={24} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Badminton</h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--text-1)" }}
            >
              Active competitive and recreational badminton player. The sport demands quick reflexes, high endurance, strategic court placement, and tactical agility under pressure.
            </p>

            <div
              className="flex items-center gap-2 text-xs font-mono mt-auto"
              style={{ color: "#ec4899" }}
            >
              <Award size={13} />
              <span>Athleticism & Precision</span>
            </div>
          </motion.div>

          {/* Geopolitics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="glass-card p-8 relative overflow-hidden group flex flex-col"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 65%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.18)",
                color: "#00d4ff",
              }}
            >
              <Globe size={24} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Geopolitics & Strategy</h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--text-1)" }}
            >
              Keen enthusiast of international diplomacy, macroeconomic trends, defense strategies, and global policy dynamics, examining how technology and geopolitics intersect.
            </p>

            <div
              className="flex items-center gap-2 text-xs font-mono mt-auto"
              style={{ color: "#00d4ff" }}
            >
              <Award size={13} />
              <span>Global Affairs & Trends</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="glass-card p-8 relative overflow-hidden group flex flex-col"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0,255,163,0.07) 0%, transparent 65%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{
                background: "rgba(0,255,163,0.08)",
                border: "1px solid rgba(0,255,163,0.18)",
                color: "#00ffa3",
              }}
            >
              <LanguagesIcon size={24} />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Languages</h3>
            <div className="space-y-4 mb-6 flex-1 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white font-medium">English</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-300">
                  Professional Proficiency
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white font-medium">Hindi</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-300">
                  Native Proficiency
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-2 text-xs font-mono mt-auto"
              style={{ color: "#00ffa3" }}
            >
              <Award size={13} />
              <span>Bilingual Communication</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
