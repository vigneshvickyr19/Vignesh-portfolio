import { EXPERIENCE, AWARDS } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award as AwardIcon } from "lucide-react";

const ExperienceView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gradient-timeline pl-8 ml-4 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Custom Timeline Ring Bullet */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              <div className="glass rounded-xl p-6 md:p-8 border border-border/60 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-card/40">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground font-mono mt-2 md:mt-0 px-3 py-1 bg-secondary rounded-full border border-border/40">
                    {exp.period} · {exp.location}
                  </span>
                </div>

                <ul className="space-y-3.5 text-muted-foreground">
                  {exp.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3.5 text-sm leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-border/50">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium font-mono bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <AwardIcon size={22} className="text-primary" />
            Awards & Recognitions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass rounded-xl p-6 border border-border/60 hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-card/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground text-base">{award.title}</h4>
                  <span className="text-xs font-semibold font-mono text-muted-foreground px-2 py-0.5 bg-secondary rounded">{award.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">{award.desc}</p>
                <p className="text-xs text-primary font-semibold font-mono mt-3 uppercase tracking-wider">{award.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceView;
