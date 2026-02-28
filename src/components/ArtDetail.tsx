import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";
import { artItemsById } from "../data/art";

const detailVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function ArtDetail() {
  const { id } = useParams();
  const artwork = artItemsById[id || "1"] || artItemsById[Object.keys(artItemsById)[0]];

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/60">Artwork not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-orange-950/10 to-yellow-950/10 relative overflow-hidden">
      {/* Background orb */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-700/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Link
                to="/art"
                className="inline-flex items-center gap-2 text-white/60 hover:text-orange-400 transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              className="rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.94, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01 }}
            >
              <ImageWithFallback
                src={artwork.src}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              className="space-y-8"
              variants={detailVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl mb-4 tracking-wide">
                  {artwork.title}
                </h1>
                <div className="flex gap-6 text-sm text-white/60">
                  {artwork.year && <span>{artwork.year}</span>}
                  {artwork.year && artwork.medium && <span>•</span>}
                  {artwork.medium && <span>{artwork.medium}</span>}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {artwork.longDescription && (
                  <div>
                    <motion.h3
                      className="text-lg mb-3 text-orange-400 tracking-wide"
                      whileHover={{ letterSpacing: "0.08em" }}
                      transition={{ duration: 0.2 }}
                    >
                      About
                    </motion.h3>
                    <p className="text-white/80 leading-relaxed">{artwork.longDescription}</p>
                  </div>
                )}

                {artwork.process && (
                  <motion.div variants={itemVariants}>
                    <motion.h3
                      className="text-lg mb-3 text-yellow-400 tracking-wide"
                      whileHover={{ letterSpacing: "0.08em" }}
                      transition={{ duration: 0.2 }}
                    >
                      Process
                    </motion.h3>
                    <p className="text-white/80 leading-relaxed">{artwork.process}</p>
                  </motion.div>
                )}

                {artwork.dimensions && (
                  <motion.div variants={itemVariants}>
                    <motion.h3
                      className="text-lg mb-3 text-white/60 tracking-wide"
                      whileHover={{ letterSpacing: "0.08em" }}
                      transition={{ duration: 0.2 }}
                    >
                      Details
                    </motion.h3>
                    <p className="text-white/80">{artwork.dimensions}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
