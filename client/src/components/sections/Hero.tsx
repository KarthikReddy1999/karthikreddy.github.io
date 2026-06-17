import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = {
  github: "https://github.com/KarthikReddy1999",
  linkedin: "https://www.linkedin.com/in/karthikreddyereddy/",
  twitter: "https://x.com/Karthi_926",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-28 pb-16 overflow-hidden"
    >
      {/* Cinematic gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] hero-glow-orange rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] hero-glow-red rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/60 border border-glow-orange/20 w-fit backdrop-blur-sm md:hidden">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-xs uppercase tracking-wider">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">
            Building <br />
            <span className="gradient-text-cinematic text-glow">Production-Grade</span>
            <br />
            Systems.
          </h1>

          <div className="h-8 md:h-10 text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">{">"} </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "SDE",
                2000,
                "Backend Engineer",
                2000,
                "AI Automations Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Karthik Reddy, a developer with 3 years of experience engineering
            scalable web applications, migrating legacy systems, and integrating AI
            solutions that drive real business impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="btn-primary" data-cursor="hover">
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary glow-hover" data-cursor="hover">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
              data-cursor="hover"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
              data-cursor="hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
              data-cursor="hover"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-glow-orange/20 via-transparent to-glow-red/20 blur-2xl pointer-events-none" />

          <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0D0D0D]/85 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/karthik-portrait.png"
                alt="Karthik Reddy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-glow-orange/25 bg-black/35 px-4 py-2 font-mono text-xs uppercase tracking-wider text-glow-orange backdrop-blur-md">
                  Currently Hyderabad
                </span>
                <span className="h-3 w-3 rounded-full bg-glow-orange shadow-[0_0_18px_rgba(255,107,53,0.8)]" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/[0.08] bg-black/70 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-glow-orange" />
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  profile.json
                </span>
              </div>
              <div className="font-mono text-xs leading-relaxed text-muted-foreground">
                <div>
                  <span className="text-primary">name:</span>{" "}
                  <span className="text-foreground">Karthik Reddy</span>
                </div>
                <div>
                  <span className="text-primary">focus:</span>{" "}
                  <span className="text-foreground">Full Stack + AI Systems</span>
                </div>
                <div>
                  <span className="text-primary">stack:</span>{" "}
                  <span>React, Node, Python, AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 hidden h-24 w-24 rounded-full border border-glow-orange/20 md:block animate-float" />
          <div className="absolute -top-5 -right-5 hidden h-32 w-32 rounded-full border border-glow-red/10 md:block" />
        </motion.div>
      </div>
    </section>
  );
}
