import { TECH_STACK } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useThemeContext } from "@/context";

// Section showing technologies with unique entrance animations per icon
const TechStackView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useThemeContext();

  const getEntranceAnimation = (i: number) => {
    switch (i % 3) {
      case 0:
        return { opacity: 0, x: -20, y: 10 };
      case 1:
        return { opacity: 0, scale: 0.5, y: 30 };
      case 2:
        return { opacity: 0, x: 20, rotate: -5 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  // Adjust specific tech brand colors depending on active theme to prevent invisibility
  const getDisplayColor = (color: string) => {
    const lower = color.toLowerCase();
    if (theme === "light") {
      if (lower === "#ffffff" || lower === "#fff") return "#0f172a"; // dark slate for next.js
    } else {
      if (lower === "#000000" || lower === "#000") return "#f8fafc"; // light gray for express/jwt
    }
    return color;
  };

  return (
    <section id="tech" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {TECH_STACK.map((tech, i) => {
            const displayColor = getDisplayColor(tech.color);
            return (
              <motion.div
                key={tech.name}
                initial={getEntranceAnimation(i)}
                animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{ 
                  scale: 1.12, 
                  y: -6,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer group relative overflow-hidden border border-border/50 hover:border-primary/20 bg-card/40"
              >
                {/* Animated background glow on hover */}
                <motion.div 
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />

                <tech.icon
                  className="text-3xl transition-all duration-500 group-hover:rotate-[360deg]"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = displayColor;
                    (e.currentTarget as HTMLElement).style.filter = `drop-shadow(0 0 8px ${displayColor}44)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                    (e.currentTarget as HTMLElement).style.filter = "none";
                  }}
                />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono font-semibold">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackView;
