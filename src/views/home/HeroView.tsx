import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { CODE_LINES, HERO_CONTENT } from "@/constants";
import { CodeHighlight } from "@/components/shared";

// Hero showing landing content and a terminal-style code card
const HeroView = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden bg-background">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Background Gradients */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[20rem] h-[20rem] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider uppercase font-semibold"
          >
            {HERO_CONTENT.greeting}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight">
            {HERO_CONTENT.name} <span className="text-gradient">{HERO_CONTENT.nameHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-lg">
            {HERO_CONTENT.titlePrefix}{" "}
            <span className="text-foreground font-semibold">{HERO_CONTENT.titleTech1}</span> &{" "}
            <span className="text-foreground font-semibold">{HERO_CONTENT.titleTech2}</span> Developer
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-lg leading-relaxed font-normal">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm glow-box hover:brightness-110 transition-all"
            >
              View More
              <ArrowDown size={16} />
            </motion.a>

            <motion.a
              href={HERO_CONTENT.resumePath}
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/10 transition-all bg-card/20 backdrop-blur-sm"
            >
              Resume
              <Download size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Code UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 lg:mt-0 w-full"
        >
          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 font-mono text-sm relative shadow-2xl overflow-hidden group">
            {/* Ambient terminal light glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none opacity-50" />
            
            <div className="flex gap-2 mb-4 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-zinc-500 text-xs">{HERO_CONTENT.codeFileName}</span>
            </div>

            {CODE_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex relative z-10"
              >
                <span className="text-zinc-700 w-6 text-right mr-4 select-none text-xs leading-7">
                  {i + 1}
                </span>
                <span
                  className="leading-7 text-zinc-300"
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <CodeHighlight text={line.text} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroView;
