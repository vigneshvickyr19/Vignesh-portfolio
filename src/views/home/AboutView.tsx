import { ABOUT_BIO, ABOUT_STATS } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/shared";

const AboutView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="glass rounded-xl p-8 md:p-12">
            {ABOUT_BIO.map((para, i) => (
              <p key={i} className={`text-muted-foreground leading-relaxed text-lg ${i === 0 ? "mb-6" : ""}`}>
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {ABOUT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-xl bg-secondary/40 border border-primary/5 hover:border-primary/20 hover:bg-secondary/60 transition-all text-center flex flex-col justify-center items-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    <CountUp value={stat.value} inView={inView} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutView;
