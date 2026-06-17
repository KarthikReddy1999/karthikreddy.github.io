import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 300) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3"
    >
      <div className="glass-panel px-2 py-4 flex flex-col items-center gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center justify-center"
              data-cursor="hover"
            >
              <motion.span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-gradient-to-br from-glow-orange to-glow-red"
                    : "w-2 h-2 bg-white/20 group-hover:bg-white/40"
                }`}
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                style={
                  isActive
                    ? { boxShadow: "0 0 12px rgba(255, 107, 53, 0.6)" }
                    : undefined
                }
              />
              <span className="absolute right-full mr-3 px-2 py-1 rounded-md bg-[#111111]/90 border border-white/[0.06] text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
