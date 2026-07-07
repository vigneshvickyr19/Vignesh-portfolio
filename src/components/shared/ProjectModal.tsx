import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Layers, Globe, Zap, X } from "lucide-react";
import { Project } from "@/constants/projects.constants";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl border-none bg-background/95 backdrop-blur-xl p-0 overflow-hidden shadow-2xl rounded-2xl sm:rounded-2xl">
        <ScrollArea className="max-h-[85vh] w-full">
          <div className="relative">
            {/* Header Image */}
            <div className="h-64 md:h-80 w-full overflow-hidden relative">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                >
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-widest font-mono">
                    Project Detail
                  </Badge>
                  <DialogTitle className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
                    {project.title}
                  </DialogTitle>
                </motion.div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left - Details */}
                <div className="lg:col-span-2 space-y-10">
                  <section>
                    <h4 className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                      <Layers size={14} />
                      Project Synopsis
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                      {project.description}
                    </p>
                  </section>

                  {/* Impact or Extra Details section */}
                  <div className="p-8 rounded-2xl bg-secondary/30 border border-primary/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Zap size={60} className="text-primary" />
                    </div>
                    <h4 className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Zap size={14} />
                      Project Value
                    </h4>
                    <p className="text-foreground/90 leading-relaxed italic font-normal text-sm lg:text-base relative z-10">
                      "This project demonstrates a high-performance solution focused on cross-device compatibility, modern architecture, and performance optimization."
                    </p>
                  </div>
                </div>

                {/* Right - Tech Stack & Actions */}
                <div className="space-y-10">
                  <section>
                    <h4 className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.techs.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-secondary/20 hover:bg-primary/10 border-primary/10 transition-colors font-mono text-[10px] uppercase py-1 px-2.5 rounded-md"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {project.liveUrl && (
                    <div className="pt-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 shadow-lg shadow-primary/20 transition-all text-sm group"
                      >
                        <span className="flex items-center gap-2">
                           <Globe size={18} />
                           View Live Website
                        </span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Close Button UI override if desired, but DialogContent has one */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
