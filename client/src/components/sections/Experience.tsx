import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 5,
    role: "Freelance AI Full Stack Engineer",
    company: "AI.HYR, Hyderabad, India",
    period: "March 2026 – Present",
    description:
      "Architecting AI agent pipelines using Gemini and Azure OpenAI to automate recruitment intelligence, from skill ontology generation to semantic resume matching. Developed a specialized Critic Agent for automated content auditing with global deduplication and intelligent retry logic.",
    tech: ["Python", "Node.js", "MongoDB", "Gemini", "Azure OpenAI", "AI Agents"],
  },
  {
    id: 1,
    role: "Full Stack Engineer & Automation",
    company: "Hub Group Inc, Chicago, United States",
    period: "2024 - 2025",
    description:
      "Led the migration of legacy LTL billing systems to modern microservices architecture. Improved data processing efficiency by 40% and established CI/CD pipelines reducing deployment times.",
    tech: ["Python", "SQL", "Docker", "AWS"],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "KET Systems, Cumming, United States",
    period: "(May – December)2023",
    description:
      "Architected and deployed scalable web applications for enterprise clients. Integrated third-party APIs and built responsive, accessible user interfaces.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 3,
    role: "Software Analyst",
    company: "Illinois Institute of Technology, Chicago, United States",
    period: "(Jan - May)2023",
    description:
      "Collaborated on machine learning models for predictive analytics. Processed large datasets and visualized findings for academic publications.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Data Viz"],
  },
  {
    id: 4,
    role: "Software Developer Intern",
    company: "Casa Central, Chicago, United States",
    period: "(Jan - March)2023",
    description:
      "Built internal reporting and web tools at Casa Central by integrating MySQL-backed dashboards and Microsoft 365/SharePoint workflows, optimizing SQL queries, and supporting zero-loss data migration that led to production adoption.",
    tech: ["Javascript", "SQL", "MySql", "SharePoint", "Microsoft365", "Data Migration"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-1/2 w-[82%] -translate-x-1/2 bg-cover bg-center opacity-90 pointer-events-none"
        style={{ backgroundImage: "url('/User%20attachment-1.png')" }}
      />
      <div className="absolute inset-y-0 left-[9%] hidden w-px bg-white/[0.08] md:block pointer-events-none" />
      <div className="absolute inset-y-0 right-[9%] hidden w-px bg-white/[0.08] md:block pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/92 via-[#0A0A0A]/12 to-[#0A0A0A]/92 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/72 via-transparent to-[#0A0A0A]/72 pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 hidden w-[82%] -translate-x-1/2 border-x border-white/[0.08] shadow-[inset_0_0_28px_rgba(0,0,0,0.24)] md:block pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] hero-glow-orange rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading justify-center"
          >
            <span className="section-number">03.</span>
            Where I've Worked
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline background */}
          <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] bg-white/[0.06] -translate-x-1/2" />

          {/* Animated orange glow timeline */}
          <motion.div
            className="absolute left-[20px] md:left-[50%] top-0 w-[2px] -translate-x-1/2 origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #FF6B35, #FF3D00, #FFB347)",
              boxShadow: "0 0 16px rgba(255, 107, 53, 0.5), 0 0 32px rgba(255, 61, 0, 0.2)",
            }}
          />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative flex items-center md:justify-between w-full pl-16 md:pl-0 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[20px] md:left-[50%] w-10 h-10 rounded-full bg-[#111111] border-2 -translate-x-1/2 flex items-center justify-center z-10"
                    style={{
                      borderColor: "#FF6B35",
                      boxShadow: "0 0 16px rgba(255, 107, 53, 0.4)",
                    }}
                  >
                    <Briefcase className="w-4 h-4 text-glow-orange" />
                  </div>

                  <div className={`w-full md:w-[45%] ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl cinematic-card group">
                      <div className="flex flex-col md:hidden mb-2">
                        <span className="text-glow-orange font-mono text-sm">{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground group-hover:gradient-text-cinematic transition-all duration-300">
                        {exp.role}
                      </h3>

                      <div
                        className={`flex items-center gap-3 mt-1 mb-4 text-muted-foreground ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="font-semibold text-foreground/80">{exp.company}</span>
                        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="hidden md:inline-block text-glow-orange/80 font-mono text-sm">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>

                      <ul
                        className={`flex flex-wrap gap-2 mt-6 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        {exp.tech.map((t, i) => (
                          <li
                            key={i}
                            className="px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 rounded-lg text-xs font-mono"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
