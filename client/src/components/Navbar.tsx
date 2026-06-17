import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-panel-strong border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group justify-self-start" data-cursor="hover">
          <div className="w-10 h-10 rounded-xl bg-[#111111]/80 border border-white/[0.08] flex items-center justify-center group-hover:border-glow-orange/40 transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(255,107,53,0.15)]">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Karthik<span className="gradient-text-cinematic">.dev</span>
          </span>
        </a>

        {/* Availability badge — center on desktop */}
        <div className="hidden md:flex justify-self-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/60 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary font-mono text-xs uppercase tracking-wider">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 justify-self-end">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-glow-orange ${
                    activeSection === link.href.substring(1)
                      ? "text-glow-orange"
                      : "text-muted-foreground"
                  }`}
                  data-cursor="hover"
                >
                  <span className="text-glow-orange/50 mr-1 font-mono text-xs">
                    0{i + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono text-sm hover:bg-primary/20 hover:border-primary transition-all duration-300 glow-accent"
            data-cursor="hover"
          >
            init_contact()
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 justify-self-end col-start-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile availability badge */}
      <div className="md:hidden flex justify-center mt-2 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111]/60 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-mono text-[10px] uppercase tracking-wider">
            Available for opportunities
          </span>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel-strong border-t border-white/[0.06] p-6 flex flex-col gap-6 shadow-2xl md:hidden mx-4 mt-2 rounded-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg block ${
                      activeSection === link.href.substring(1)
                        ? "text-glow-orange"
                        : "text-foreground"
                    }`}
                  >
                    <span className="text-glow-orange/50 mr-2 font-mono text-sm">
                      0{i + 1}.
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-3 rounded-xl bg-primary text-background font-bold text-center"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
