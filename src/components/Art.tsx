import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";
import { artItems } from "../data/art";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
        <div className="max-w-6xl mx-auto">
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
              Art
            </motion.h1>
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Visual creations and digital artwork
            </motion.p>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mt-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Art Grid - driven by data files */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {artItems.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Link
                  to={`/art/${artwork.id}`}
                  className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors duration-300 bg-black/40 backdrop-blur-sm block"
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <ImageWithFallback
                        src={artwork.src}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2 tracking-wide group-hover:text-orange-400 transition-colors duration-300">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-white/60">{artwork.description}</p>
                    <motion.span
                      className="inline-block mt-3 text-xs text-orange-400/60 group-hover:text-orange-400 transition-colors"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      View details →
                    </motion.span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
