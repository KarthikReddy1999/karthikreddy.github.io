import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 3, label: "Years Experience" },
  { value: 5, suffix: "+", label: "Selected Projects" },
  { value: 4, label: "Professional Roles" },
  { value: 3, label: "Core Domains" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0C]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-panel p-6 md:p-8 text-center cinematic-card group"
            >
              <div className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3 flex items-center justify-center">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                    useEasing
                  />
                ) : (
                  "0"
                )}
                <span className="gradient-text-cinematic">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest group-hover:text-glow-orange/80 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
