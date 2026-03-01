import { useState } from "react";
import { ExternalLink, Play, Music2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { albums } from "../data/music";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Album } from "../data/types";

/* ─── Track row ─── */
function TrackRow({
  track,
  index,
  accentColor,
}: {
  track: { num: number; title: string; featuring?: string; duration?: string; youtubeId?: string; note?: string };
  index: number;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group"
    >
      {track.youtubeId ? (
        <a
          href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
        >
          <TrackInner track={track} accentColor={accentColor} />
        </a>
      ) : (
        <div className="flex items-center gap-4 py-3 px-3 rounded-lg opacity-50">
          <TrackInner track={track} accentColor={accentColor} showLink={false} />
        </div>
      )}
    </motion.div>
  );
}

function TrackInner({
  track,
  accentColor,
  showLink = true,
}: {
  track: { num: number; title: string; featuring?: string; duration?: string; youtubeId?: string; note?: string };
  accentColor: string;
  showLink?: boolean;
}) {
  return (
    <>
      {/* Play icon / number */}
      <div className="w-6 text-center flex-shrink-0">
        <span className="text-xs text-white/30 group-hover:hidden" style={{ display: showLink ? undefined : "block" }}>
          {String(track.num).padStart(2, "0")}
        </span>
        {showLink && (
          <Play
            className="w-3.5 h-3.5 hidden group-hover:block fill-current"
            style={{ color: accentColor }}
          />
        )}
      </div>

      {/* Title + meta */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-white/90 group-hover:text-white transition-colors truncate text-sm">
            {track.title}
          </span>
          {track.featuring && (
            <span className="text-white/40 text-xs flex-shrink-0">ft. {track.featuring}</span>
          )}
        </div>
        {track.note && (
          <p className="text-xs text-white/30 mt-0.5 truncate">{track.note}</p>
        )}
      </div>

      {/* Duration + link icon */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {track.duration && (
          <span className="text-xs text-white/30">{track.duration}</span>
        )}
        {showLink && track.youtubeId && (
          <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-purple-400 transition-colors" />
        )}
      </div>
    </>
  );
}

/* ─── Album card ─── */
function AlbumCard({ album, index }: { album: Album; index: number }) {
  const [storyOpen, setStoryOpen] = useState(true);

  const accentColor = "#a855f7"; // purple

  return (
    <motion.article
      className="border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm hover:border-purple-500/30 transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      {/* ── Album header ── */}
      <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6">
        {/* Cover art */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-36 md:w-44 aspect-square rounded-xl overflow-hidden border border-white/10"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <ImageWithFallback
            src={album.coverImage}
            alt={`${album.title} cover`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Album info */}
        <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
          {/* Type badge */}
          <div className="flex items-center gap-2 mb-1">
            <Music2 className="w-3.5 h-3.5 text-purple-400/60" />
            <span className="text-xs text-purple-400/60 tracking-widest uppercase">{album.type}</span>
          </div>

          {/* Title */}
          <h2
            className="tracking-wide leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            {album.title}
          </h2>

          {/* Meta */}
          <div className="flex flex-wrap gap-2 text-sm text-white/50 mt-1">
            <span>{album.year}</span>
            <span>·</span>
            <span>{album.genre}</span>
          </div>

          {/* Story toggle */}
          <motion.button
            onClick={() => setStoryOpen((v) => !v)}
            className="mt-4 inline-flex items-center gap-2 text-xs text-purple-400/60 hover:text-purple-400 transition-colors tracking-wide self-start"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            {storyOpen ? "Hide liner notes" : "Read liner notes"}
            {storyOpen ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ── Liner notes (collapsible) ── */}
      <AnimatePresence initial={false}>
        {storyOpen && (
          <motion.div
            key="story"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6">
              <div className="border-l-2 border-purple-500/30 pl-5">
                <p className="text-white/60 leading-[1.85] text-sm italic">{album.story}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div className="mx-6 md:mx-8 h-px bg-white/8" />

      {/* ── Track list ── */}
      <div className="px-6 md:px-8 py-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-white/30 tracking-widest uppercase">Track List</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="space-y-0.5">
          {album.tracks.map((track, i) => (
            <TrackRow key={i} track={track} index={i} accentColor={accentColor} />
          ))}
        </div>
      </div>

      {/* ── Featured video embed ── */}
      {album.featuredVideoId && (
        <>
          <div className="mx-6 md:mx-8 h-px bg-white/8" />
          <div className="px-6 md:px-8 py-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-purple-400 fill-purple-400" />
              </div>
              <span className="text-xs text-purple-400/70 tracking-widest uppercase">
                {album.featuredVideoLabel ?? "Featured Video"}
              </span>
              <div className="flex-1 h-px bg-white/8 ml-1" />
              <a
                href={`https://www.youtube.com/watch?v=${album.featuredVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-white/30 hover:text-purple-400 transition-colors"
              >
                YouTube
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${album.featuredVideoId}`}
                  title={album.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.article>
  );
}

/* ─── Page ─── */
export function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-teal-950/10 relative overflow-hidden">
      {/* Ambient orbs */}
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
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-3xl mx-auto">

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
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mt-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Albums */}
          <div className="space-y-10">
            {albums.map((album, index) => (
              <AlbumCard key={album.id} album={album} index={index} />
            ))}
          </div>

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
              More releases coming soon...
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
