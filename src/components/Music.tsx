import { motion } from "motion/react";
import { musicItems } from "../data/music";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-teal-950/10 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-teal-700/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
              Music
            </motion.h1>
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Original compositions and productions
            </motion.p>
            {/* Animated underline */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mt-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Video Grid - driven by data files */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {musicItems.map((video, index) => (
              <motion.div
                key={video.id}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.005 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300 group"
                style={{ boxShadow: "0 0 0 0 rgba(168,85,247,0)" }}
                whileInView={{
                  boxShadow: "none",
                }}
              >
                {/* Video number badge */}
                <div className="relative">
                  <motion.div
                    className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-400 tracking-wider"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl mb-2 tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <motion.a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-teal-400 transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      Watch on YouTube
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
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
              More tracks coming soon...
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
