import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 5,
    title: "Sociax",
    description:
      "A live career web app for fresh graduates and early-career professionals, co-built with a friend and growing steadily. I contribute as a core collaborator across product flow, frontend implementation, and feature polish.",
    tech: ["React", "Supabase", "Contabo", "Instatus", "Railway"],
    category: "Career Platform",
    date: "2026",
    visual: "sociax",
    hot: true,
    github: "https://github.com/anilkumarnimma/sociax",
    githubSecondary: "",
    live: "https://www.sociax.tech/",
  },
  {
    id: 1,
    title: "RecipeX",
    description:
      "An AI-powered recipe platform that generates custom culinary creations based on available ingredients and dietary restrictions. Features comprehensive user accounts and saved collections.",
    tech: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    category: "AI",
    date: "Mar 2026",
    visual: "recipe",
    github: "https://github.com/KarthikReddy1999/Recipex",
    githubSecondary: "",
    live: "https://recipex-ai.vercel.app/",
  },
  {
    id: 2,
    title: "Fake Image Detection Platform",
    description:
      "A full-stack project with separate frontend and backend repositories for detecting manipulated images through an API-driven workflow. It uses AI-powered analysis to identify likely fake or synthetic image content.",
    tech: ["Frontend", "Backend API", "Image Processing", "ML"],
    category: "Full Stack",
    date: "Feb 2026",
    visual: "detection",
    github: "https://github.com/KarthikReddy1999/Fake_Image_frontend",
    githubSecondary: "https://github.com/KarthikReddy1999/Fake_Image_backend",
    live: "",
  },
  {
    id: 4,
    title: "String Art Maker",
    description:
      "A string art generation tool that converts visual input into structured patterns for creative and computational art workflows.",
    tech: ["JavaScript", "Pattern Generation", "Visualization"],
    category: "Creative Coding",
    date: "Jan 2026",
    visual: "string",
    github: "https://github.com/KarthikReddy1999/String-Art-Maker",
    githubSecondary: "",
    live: "",
  },
  {
    id: 3,
    title: "Heart Attack Prediction Model",
    description:
      "Machine learning model trained on medical datasets to predict cardiovascular risk factors with 89% accuracy. Includes a dashboard for data visualization.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
    category: "AI",
    date: "2024",
    visual: "health",
    github: "#",
    githubSecondary: "",
    live: "#",
  },
];

const categories = ["All", ...Array.from(new Set(projectsData.map((proj) => proj.category)))];
type Project = (typeof projectsData)[number];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (proj) => filter === "All" || proj.category === filter
  );

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-[#080808]/60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] hero-glow-red rounded-full blur-[150px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <span className="section-number">02.</span>
            Featured Work
            <div className="hidden md:block section-divider min-w-[100px] ml-4" />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-pill ${
                  filter === cat ? "filter-pill-active" : "filter-pill-inactive"
                }`}
                data-cursor="hover"
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="folder-stack">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectFolder
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectFolder({ project, index }: { project: Project; index: number }) {
  const folderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: folderRef,
    offset: ["start 72%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    mass: 0.45,
  });

  const height = useTransform(progress, [0, 0.36, 0.72, 1], [540, 540, 210, 108]);
  const cardY = useTransform(progress, [0, 0.34, 1], [34, 0, -10]);
  const cardX = useTransform(progress, [0, 0.54, 1], [0, 0, 42]);
  const cardScale = useTransform(progress, [0, 0.72, 1], [1, 1, 0.965]);
  const rotate = useTransform(progress, [0.55, 1], [0, 0.45]);
  const contentOpacity = useTransform(progress, [0, 0.42, 0.66], [1, 1, 0]);
  const contentX = useTransform(progress, [0.46, 1], [0, 150]);
  const contentScale = useTransform(progress, [0.5, 1], [1, 0.92]);
  const visualOpacity = useTransform(progress, [0.52, 1], [1, 0.22]);
  const visualScale = useTransform(progress, [0.48, 1], [1, 0.86]);
  const collapsedOpacity = useTransform(progress, [0.5, 0.72], [0, 1]);
  const tabWidth = useTransform(progress, [0.28, 1], ["44%", "24%"]);
  const tabX = useTransform(progress, [0.28, 1], [0, 56]);
  const tabGlow = useTransform(progress, [0, 1], [0.22, 0.48]);

  return (
    <motion.div
      ref={folderRef}
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="folder-scroll-step"
      style={{ zIndex: 40 - index }}
    >
      <motion.article
        className="folder-card group"
        style={{
          height,
          y: cardY,
          x: cardX,
          scale: cardScale,
          rotateZ: rotate,
          top: `calc(84px + ${Math.min(index, 4) * 12}px)`,
        }}
      >
        <motion.div
          className="folder-tab"
          style={{
            width: tabWidth,
            x: tabX,
            opacity: tabGlow,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ opacity: visualOpacity, scale: visualScale }}
        >
          <ProjectVisual variant={project.visual} />
        </motion.div>

        <div className="folder-spine">
          <span className="font-mono text-xs text-primary">0{index + 1}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-glow-orange shadow-[0_0_16px_rgba(255,107,53,0.65)]" />
          <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
          {project.hot && (
            <span className="rounded-full bg-glow-orange px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
              Hot
            </span>
          )}
        </div>

        <motion.div
          className="folder-content"
          style={{
            opacity: contentOpacity,
            x: contentX,
            scale: contentScale,
          }}
        >
          <div className="folder-content-panel">
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                  {project.category}
                </p>
                {project.hot && (
                  <span className="rounded-full border border-glow-orange/40 bg-glow-orange/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-glow-orange">
                    Hot Build
                  </span>
                )}
              </div>
              <h3
                className={`text-3xl font-display font-bold md:text-5xl ${
                  project.hot ? "text-foreground text-glow" : "text-glow-orange"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-foreground/75"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 items-center gap-3 md:flex-col">
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-sm text-foreground/75">
                {project.date}
              </span>
              <div className="flex items-center gap-3">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    className="project-action"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    data-cursor="hover"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    className="project-action project-action-primary"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live project`}
                    data-cursor="hover"
                  >
                    <ArrowUpRight className="h-8 w-8" />
                  </a>
                )}
                {project.githubSecondary && (
                  <a
                    href={project.githubSecondary}
                    className="project-action"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} backend repository`}
                    data-cursor="hover"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="folder-collapsed-row" style={{ opacity: collapsedOpacity }}>
          <span className="font-mono text-xs text-primary">0{index + 1}</span>
          <span className="truncate font-display text-xl font-bold text-foreground">
            {project.title}
          </span>
          {project.hot && (
            <span className="rounded-full bg-glow-orange px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-black">
              Hot
            </span>
          )}
          <span className="ml-auto hidden rounded-full bg-white/[0.06] px-3 py-1 font-mono text-xs text-muted-foreground sm:inline-flex">
            {project.date}
          </span>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

function ProjectVisual({ variant }: { variant: string }) {
  const visualClass = {
    sociax: "from-[#ffb347] via-[#ff6b35] to-[#ff3d00]",
    recipe: "from-[#ff6b35] via-[#ff3d00] to-[#ffb347]",
    detection: "from-[#ff3d00] via-[#322bff] to-[#ffb347]",
    string: "from-[#ffb347] via-[#ff6b35] to-[#ff3d00]",
    health: "from-[#ff3d00] via-[#ffb347] to-[#111111]",
  }[variant] ?? "from-[#ff6b35] via-[#ff3d00] to-[#ffb347]";

  return (
    <div className="absolute inset-0">
      <div className={`absolute inset-0 bg-gradient-to-br ${visualClass} opacity-25`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_80%_16%,rgba(255,107,53,0.22),transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.25),rgba(0,0,0,0.9))]" />
      <div className="absolute left-[8%] top-[13%] h-[56%] w-[76%] rotate-[-5deg] rounded-[28px] border border-white/[0.1] bg-[#061014]/85 shadow-[0_34px_110px_rgba(0,0,0,0.65)]">
        <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
          <span className="ml-auto font-mono text-[10px] text-white/35">project.preview</span>
        </div>
        <div className="relative h-[calc(100%-2.5rem)] overflow-hidden rounded-b-[28px]">
          <div className="absolute inset-8 rounded-[24px] border border-white/[0.06] bg-black/30" />
          <div className="absolute left-[12%] top-[18%] h-[46%] w-[42%] rounded-full bg-gradient-to-br from-white via-glow-orange to-primary opacity-80 blur-xl" />
          <div className="absolute left-[16%] top-[22%] h-[42%] w-[38%] rounded-full border border-white/15 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1.8px)] bg-[length:10px_10px] opacity-70" />
          <div className="absolute right-[10%] top-[18%] grid w-[30%] gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="h-3 rounded-full bg-white/10"
                style={{ width: `${90 - index * 12}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-[10%] top-[20%] h-24 w-24 rounded-full border border-glow-orange/30 bg-glow-orange/10 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
    </div>
  );
}
