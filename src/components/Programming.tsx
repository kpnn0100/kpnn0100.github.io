import { Link } from "react-router";
import { ExternalLink, Calendar, Tag, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { programmingItems } from "../data/programming";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "backOut" as const } },
} as const;

export function Programming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-teal-950/10 to-black relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-teal-700/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-56 h-56 bg-teal-600/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], y: [-15, 15, -15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
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
              Programming
            </motion.h1>
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software engineering and technical projects
            </motion.p>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent mt-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Projects List - driven by data files */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {programmingItems.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Link to={`/programming/${project.id}`} className="block group">
                  <motion.article
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="border border-white/10 rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:border-teal-500/40 hover:bg-teal-950/10 transition-colors duration-300 relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-hover:from-teal-500/3 transition-all duration-500 pointer-events-none rounded-lg" />

                    {/* Index */}
                    <motion.div
                      className="text-xs text-teal-500/50 tracking-widest mb-3 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      [{String(index + 1).padStart(2, "0")}]
                    </motion.div>

                    {/* Title + arrow */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl tracking-wide group-hover:text-teal-300 transition-colors duration-300 leading-snug">
                        {project.title}
                      </h2>
                      <motion.div
                        className="mt-1 flex-shrink-0 text-teal-400/40 group-hover:text-teal-400 transition-colors"
                        initial={{ x: 0, opacity: 0.4 }}
                        whileHover={{ x: 4, opacity: 1 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.year}</span>
                      </div>
                      <span>·</span>
                      <span>{project.conference}</span>
                      <span>·</span>
                      <span>{project.authors.join(", ")}</span>
                    </div>

                    {/* Abstract preview */}
                    <p className="text-white/60 leading-relaxed mb-5 text-sm line-clamp-3">
                      {project.abstract}
                    </p>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                    >
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={tagVariants}
                          whileHover={{ scale: 1.08, backgroundColor: "rgba(20,184,166,0.15)" }}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-400"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Read more CTA */}
                    <motion.div
                      className="inline-flex items-center gap-2 text-sm text-teal-400/60 group-hover:text-teal-400 transition-colors"
                    >
                      Read full post
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.span>
                    </motion.div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.p
              className="text-white/40 text-sm"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              More projects available on request
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
