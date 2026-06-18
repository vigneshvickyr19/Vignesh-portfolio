import { PROJECTS, Project } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Plus, Eye, Globe } from "lucide-react";
import { ProjectModal } from "@/components/shared";

// Project card with parallax hover and staggered entrance
const ProjectCard = ({ 
  project, 
  i, 
  inView,
  onOpenModal 
}: { 
  project: Project; 
  i: number; 
  inView: boolean;
  onOpenModal: (project: Project) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-2xl overflow-hidden group relative h-full flex flex-col border border-border/60 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 bg-card/40"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-x-0 -bottom-10 h-32 bg-primary/20 blur-[80px] pointer-events-none"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
      />

      {/* Image Header with Parallax Zoom */}
      <div className="h-60 w-full overflow-hidden relative">
        <motion.div
          animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700" 
          />
        </motion.div>
        
        {/* Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-multiply opacity-30 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

        {/* Floating Icons Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-xl glow-box border border-white/20"
            title="View Live Site"
          >
            <Globe size={22} />
          </motion.a>
          
          <motion.button
            onClick={() => onOpenModal(project)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl border border-white/20"
            title="View Details"
          >
            <Eye size={22} />
          </motion.button>
        </div>
      </div>

      <div className="p-6 relative flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight size={18} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-3 font-normal">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-border/80 flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.techs.slice(0, 4).map((tech) => (
               <div 
                 key={tech} 
                 className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[9px] font-extrabold text-primary shadow-sm hover:scale-110 hover:z-20 transition-all cursor-default" 
                 title={tech}
               >
                 {tech.substring(0, 2).toUpperCase()}
               </div>
            ))}
            {project.techs.length > 4 && (
               <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[9px] font-extrabold text-primary shadow-sm">
                 +{project.techs.length - 4}
               </div>
            )}
          </div>
          
          <button 
            onClick={() => onOpenModal(project)}
            className="text-[10px] uppercase font-mono tracking-widest font-bold text-primary hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            See Details <Plus size={12} strokeWidth={3} />
          </button>
        </div>

        {/* Bottom Line Finish */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-primary group-hover:shadow-[0_0_10px_var(--primary)]"
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.6, ease: "circIn" }}
        />
      </div>
    </motion.div>
  );
};

const ProjectsView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono mb-2 uppercase tracking-widest">Portfolio Showcase</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Selected <span className="text-gradient">Innovations</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              i={i} 
              inView={inView} 
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Global Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsView;
