import { useParams, Link } from "react-router";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "motion/react";
import { artProjects } from "../data/art";
import type { ArtContentBlock, ImageLayout, ArtImage } from "../data/types";
import { ImageWithFallback } from "./ImageWithFallback";

/* ─── Image layout renderer ─── */
function ArtImages({
  layout,
  images,
}: {
  layout: ImageLayout;
  images: ArtImage[];
}) {
  if (layout === "full") {
    const img = images[0];
    return (
      <motion.figure
        className="my-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
      >
        <motion.div
          className="overflow-hidden rounded-xl border border-white/10"
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <ImageWithFallback
            src={img.src}
            alt={img.alt}
            className="w-full object-cover max-h-[75vh]"
          />
        </motion.div>
        {img.caption && (
          <figcaption className="mt-3 text-center text-xs text-white/40 tracking-wide italic">
            {img.caption}
          </figcaption>
        )}
      </motion.figure>
    );
  }

  if (layout === "duo") {
    return (
      <motion.div
        className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        {images.slice(0, 2).map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </motion.div>
            {img.caption && (
              <figcaption className="mt-2 text-xs text-white/40 tracking-wide italic">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </motion.div>
    );
  }

  if (layout === "trio") {
    return (
      <motion.div
        className="my-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        {images.slice(0, 3).map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.03, borderColor: "rgba(251,146,60,0.4)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </motion.div>
            {img.caption && (
              <figcaption className="mt-2 text-xs text-white/40 tracking-wide italic text-center">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </motion.div>
    );
  }

  if (layout === "asymmetric-left") {
    return (
      <motion.div
        className="my-12 grid grid-cols-1 sm:grid-cols-5 gap-4 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        {images[0] && (
          <motion.figure
            className="sm:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
            >
              <ImageWithFallback
                src={images[0].src}
                alt={images[0].alt}
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </motion.div>
            {images[0].caption && (
              <figcaption className="mt-2 text-xs text-white/40 italic">{images[0].caption}</figcaption>
            )}
          </motion.figure>
        )}
        {images[1] && (
          <motion.figure
            className="sm:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <ImageWithFallback
                src={images[1].src}
                alt={images[1].alt}
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </motion.div>
            {images[1].caption && (
              <figcaption className="mt-2 text-xs text-white/40 italic">{images[1].caption}</figcaption>
            )}
          </motion.figure>
        )}
      </motion.div>
    );
  }

  if (layout === "asymmetric-right") {
    return (
      <motion.div
        className="my-12 grid grid-cols-1 sm:grid-cols-5 gap-4 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        {images[0] && (
          <motion.figure
            className="sm:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <ImageWithFallback
                src={images[0].src}
                alt={images[0].alt}
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </motion.div>
            {images[0].caption && (
              <figcaption className="mt-2 text-xs text-white/40 italic">{images[0].caption}</figcaption>
            )}
          </motion.figure>
        )}
        {images[1] && (
          <motion.figure
            className="sm:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl border border-white/10"
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
            >
              <ImageWithFallback
                src={images[1].src}
                alt={images[1].alt}
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </motion.div>
            {images[1].caption && (
              <figcaption className="mt-2 text-xs text-white/40 italic">{images[1].caption}</figcaption>
            )}
          </motion.figure>
        )}
      </motion.div>
    );
  }

  return null;
}

/* ─── Video embed block ─── */
function VideoBlock({
  block,
}: {
  block: Extract<ArtContentBlock, { type: "video" }>;
}) {
  return (
    <motion.div
      className="my-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65 }}
    >
      {/* Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Play className="w-3 h-3 text-orange-400 fill-orange-400" />
        </div>
        <span className="text-xs text-orange-400/70 tracking-widest uppercase">Video</span>
        <div className="flex-1 h-px bg-white/8 ml-2" />
      </div>

      {/* Embed */}
      <motion.div
        className="rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${block.youtubeId}`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {block.caption && (
        <p className="mt-3 text-center text-xs text-white/40 tracking-wide italic">
          {block.caption}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Text section block ─── */
function TextBlock({
  block,
}: {
  block: Extract<ArtContentBlock, { type: "text" }>;
}) {
  return (
    <motion.div
      className="my-10 max-w-2xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
    >
      {block.heading && (
        <h3 className="text-orange-400/80 tracking-widest uppercase text-xs mb-3">
          {block.heading}
        </h3>
      )}
      <p className="text-white/70 leading-[1.9] text-[0.97rem]">{block.body}</p>
    </motion.div>
  );
}

/* ─── Render any block ─── */
function RenderBlock({ block }: { block: ArtContentBlock }) {
  if (block.type === "text") return <TextBlock block={block} />;
  if (block.type === "images") return <ArtImages layout={block.layout} images={block.images} />;
  if (block.type === "video") return <VideoBlock block={block} />;
  return null;
}

/* ─── Main Component ─── */
export function ArtDetail() {
  const { id } = useParams();
  const project = artProjects.find((p) => p.id === id) ?? artProjects[0];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Hero ── */}
      <div className="relative h-[65vh] min-h-[380px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient over hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Back button (inside hero) */}
        <motion.div
          className="absolute top-8 left-6 md:left-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/art"
              className="inline-flex items-center gap-2 text-white/60 hover:text-orange-400 transition-colors text-sm backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <div className="text-xs text-orange-400/70 tracking-widest uppercase mb-3">
            {project.category} · {project.medium}
          </div>
          <h1
            className="tracking-tight leading-none mb-3"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {project.title}
          </h1>
          <p className="text-white/50 text-lg max-w-xl">{project.tagline}</p>
          <div className="mt-4 text-xs text-white/30">{project.year}</div>
        </motion.div>
      </div>

      {/* ── Story Body ── */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-3xl mx-auto">
          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-orange-500/40 via-white/10 to-transparent mb-16"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />

          {/* Content blocks */}
          {project.sections.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}

          {/* Footer */}
          <motion.div
            className="mt-16 pt-10 border-t border-white/8 flex items-center justify-between flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-white/30">
              {project.title} · {project.year}
            </div>
            <Link
              to="/art"
              className="inline-flex items-center gap-2 text-sm text-orange-400/60 hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
