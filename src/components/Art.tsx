import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { artProjects } from "../data/art";
import { ImageWithFallback } from "./ImageWithFallback";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

export function Art() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-orange-950/10 to-yellow-950/10 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-10 right-20 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-60 h-60 bg-yellow-700/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], y: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-6xl mb-4 tracking-wide"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, letterSpacing: "0.05em" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Art
            </motion.h1>
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Visual projects, series, and experiments
            </motion.p>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mt-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Canvas — Project Cards */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {artProjects.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Link to={`/art/${project.id}`} className="block group">
                  <motion.article
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.995 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-orange-500/40 transition-colors duration-500"
                    style={{ minHeight: "420px" }}
                  >
                    {/* Cover Image */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    >
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                    {/* Hover tint */}
                    <div className="absolute inset-0 bg-orange-950/0 group-hover:bg-orange-950/20 transition-colors duration-500 pointer-events-none" />

                    {/* Content overlay */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12" style={{ minHeight: "420px" }}>
                      {/* Index */}
                      <motion.div
                        className="mb-4 text-xs text-orange-400/60 font-mono tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.15 }}
                      >
                        [{String(index + 1).padStart(2, "0")}] · {project.category}
                      </motion.div>

                      {/* Title */}
                      <h2
                        className="mb-3 tracking-wide group-hover:text-orange-300 transition-colors duration-300"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                      >
                        {project.title}
                      </h2>

                      {/* Tagline */}
                      <p className="text-white/60 mb-4 max-w-xl leading-relaxed text-sm md:text-base">
                        {project.tagline}
                      </p>

                      {/* Meta + CTA row */}
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4 text-xs text-white/50 tracking-wide">
                          <span>{project.year}</span>
                          <span>·</span>
                          <span>{project.medium}</span>
                        </div>

                        <motion.div
                          className="flex items-center gap-2 text-sm text-orange-400/70 group-hover:text-orange-400 transition-colors"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Enter project
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Bottom hover line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/80 via-yellow-400/60 to-transparent origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-white/30 text-sm tracking-wider"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              More projects ongoing
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
