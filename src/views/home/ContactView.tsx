import { SOCIAL_LINKS } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto text-base">
            {"I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {SOCIAL_LINKS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-5 p-5 glass rounded-xl group cursor-pointer border border-border/60 hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-card/40"
            >
              <div className="p-3.5 rounded-lg bg-secondary/80 text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <s.icon size={22} className="transition-transform group-hover:scale-110" />
              </div>
              <div className="flex-grow">
                <span className="text-foreground group-hover:text-primary transition-colors font-bold text-sm block mb-0.5">
                  {s.label}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{s.subtitle}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactView;
