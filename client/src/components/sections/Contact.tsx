import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";

export default function Contact() {
  const { mutate, isPending, isSuccess } = useCreateContactMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <section id="contact" className="py-28 relative border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-[#080808] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/92 via-transparent to-[#080808]/88 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] hero-glow-orange rounded-full blur-[140px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8"
          >
            <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/[0.08] px-6 py-7 md:px-8">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-28 pointer-events-none"
                style={{ backgroundImage: "url('/User%20attachment.png')" }}
              />
              <div className="absolute inset-0 bg-[#080808]/72 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/84 via-[#080808]/78 to-[#080808]/92 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/84 via-[#080808]/56 to-[#080808]/88 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="section-number">04.</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">What's Next?</h2>
                </div>
                <h3 className="text-5xl md:text-6xl font-display font-bold gradient-text-cinematic mb-6 text-glow">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  I'm currently looking for any new opportunities, my inbox is always open.
                  Whether you have a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-5 pt-1 pl-1">
              <a
                href="https://github.com/KarthikReddy1999"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
                data-cursor="hover"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karthikreddyereddy/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
                data-cursor="hover"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Karthi_926"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-glow-orange hover:border-glow-orange/40 transition-all duration-300 glow-hover"
                data-cursor="hover"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-3xl relative overflow-hidden"
          >
            {/* Terminal header */}
            <div className="h-11 bg-[#1A1A1A]/90 border-b border-white/[0.06] flex items-center px-5 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <div className="mx-auto text-xs text-muted-foreground font-mono">
                send_message.sh
              </div>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 px-8 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-6 glow-accent" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Email Draft Ready
                </h3>
                <p className="text-muted-foreground font-mono">
                  Your mail app should have opened.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-8 px-6 py-2.5 border border-white/[0.08] rounded-xl text-sm hover:text-primary hover:border-primary transition-colors font-mono"
                >
                  Return
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-mono text-primary/80 ml-1">name</label>
                    <input
                      {...register("name")}
                      className={`w-full bg-[#0A0A0A]/80 border ${
                        errors.name ? "border-destructive" : "border-white/[0.08]"
                      } rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-glow-orange/50 transition-colors font-mono backdrop-blur-sm`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-mono text-primary/80 ml-1">email</label>
                    <input
                      {...register("email")}
                      className={`w-full bg-[#0A0A0A]/80 border ${
                        errors.email ? "border-destructive" : "border-white/[0.08]"
                      } rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-glow-orange/50 transition-colors font-mono backdrop-blur-sm`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-mono text-primary/80 ml-1">subject</label>
                  <input
                    {...register("subject")}
                    className={`w-full bg-[#0A0A0A]/80 border ${
                      errors.subject ? "border-destructive" : "border-white/[0.08]"
                    } rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-glow-orange/50 transition-colors font-mono backdrop-blur-sm`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-mono text-primary/80 ml-1">message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full bg-[#0A0A0A]/80 border ${
                      errors.message ? "border-destructive" : "border-white/[0.08]"
                    } rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-glow-orange/50 transition-colors font-mono resize-none backdrop-blur-sm`}
                    placeholder="Hello Karthik, I'd like to talk about..."
                  />
                  {errors.message && (
                    <span className="absolute -bottom-5 left-1 text-[10px] text-destructive font-mono">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-4 w-full bg-primary hover:bg-primary/90 text-background font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group glow-accent"
                  data-cursor="hover"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="font-mono">Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-mono">Execute ./send</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-28 pb-8 text-center text-muted-foreground/50 font-mono text-sm relative">
        <p>Built with React & Tailwind CSS.</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Karthik Reddy. All rights reserved.
        </p>
      </div>
    </section>
  );
}
