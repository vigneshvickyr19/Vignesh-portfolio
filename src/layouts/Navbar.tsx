import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/context";
import { NAV_LINKS } from "@/constants";

// Main navigation with smooth scrolling and sticky behavior
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  // Monitor scroll progress to add extra glassiness when moving
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation with an offset to account for the fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold font-mono tracking-tighter text-gradient group"
        >
          <span className="inline-block transition-transform group-hover:rotate-12 group-hover:scale-110">{"<VR />"}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="text-xs uppercase tracking-widest font-mono text-muted-foreground hover:text-primary transition-all relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all cursor-pointer shadow-sm flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={18} className="text-foreground transition-transform hover:-rotate-12" />
            ) : (
              <Sun size={18} className="text-primary transition-transform hover:rotate-45" />
            )}
          </motion.button>
        </div>

        {/* Mobile action bar */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} className="text-primary" />}
          </motion.button>

          <button
            onClick={() => setOpen(!open)}
            className="text-foreground text-3xl focus:outline-none p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            {open ? <HiX className="text-primary" /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden overflow-hidden glass border-t border-border/40"
          >
            <ul className="flex flex-col gap-5 px-8 py-10">
              {NAV_LINKS.map((l, i) => (
                <motion.li 
                  key={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-all flex items-center gap-4"
                  >
                    <span className="text-primary/40 text-xs font-mono">0{i + 1}.</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
