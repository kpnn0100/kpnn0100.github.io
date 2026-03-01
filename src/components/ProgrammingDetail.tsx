import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Tag, Calendar, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { programmingItems } from "../data/programming";
import type { ContentBlock } from "../data/types";
import { ImageWithFallback } from "./ImageWithFallback";

/* ─── Section-level animation variants ─── */
const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

/* ─── Code Block ─── */
function CodeBlock({ block }: { block: Extract<ContentBlock, { type: "code" }> }) {
  const lines = block.code.split("\n");
  return (
    <motion.div
      className="my-8"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
    >
      {block.caption && (
        <p className="text-xs text-teal-400/70 tracking-wide mb-2 font-mono">{block.caption}</p>
      )}
      <div className="rounded-lg overflow-hidden border border-teal-500/20 bg-[#050e0e]">
        {/* Language bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-teal-950/40 border-b border-teal-500/20">
          <span className="text-xs font-mono text-teal-400/70 tracking-widest uppercase">
            {block.language}
          </span>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500/40" />
          </div>
        </div>
        {/* Code lines */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} className="hover:bg-teal-500/5 transition-colors">
                  <td className="select-none pl-4 pr-4 py-0 text-right text-white/20 w-8 text-xs align-top pt-0.5">
                    {i + 1}
                  </td>
                  <td className="pl-2 pr-6 py-0 text-white/85 whitespace-pre leading-6">
                    {line || " "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Figure Block ─── */
function FigureBlock({ block }: { block: Extract<ContentBlock, { type: "figure" }> }) {
  return (
    <motion.figure
      className="my-10 mx-auto max-w-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="rounded-lg overflow-hidden border border-white/10"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        <ImageWithFallback
          src={block.src}
          alt={block.alt}
          className="w-full object-cover max-h-80"
        />
      </motion.div>
      <figcaption className="mt-3 text-center text-sm text-white/50 leading-relaxed italic">
        {block.caption}
      </figcaption>
    </motion.figure>
  );
}

/* ─── List Block ─── */
function ListBlock({ block }: { block: Extract<ContentBlock, { type: "list" }> }) {
  return (
    <motion.ul
      className="my-5 space-y-2 pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {block.items.map((item, i) => (
        <motion.li
          key={i}
          className="flex gap-3 items-start text-white/75 leading-relaxed"
          variants={{
            hidden: { opacity: 0, x: -12 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
          }}
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

/* ─── Render a single content block ─── */
function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === "paragraph") {
    return (
      <motion.p
        className="text-white/75 leading-[1.85] my-5 text-[0.97rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.45 }}
      >
        {block.text}
      </motion.p>
    );
  }
  if (block.type === "figure") return <FigureBlock block={block} />;
  if (block.type === "code") return <CodeBlock block={block} />;
  if (block.type === "list") return <ListBlock block={block} />;
  return null;
}

/* ─── Main Component ─── */
export function ProgrammingDetail() {
  const { id } = useParams();
  const post = programmingItems.find((p) => p.id === id) ?? programmingItems[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-teal-950/10 to-black relative overflow-hidden">
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-teal-700/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 py-20 relative">
        {/* ── Back button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <motion.div
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-block"
          >
            <Link
              to="/programming"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-400 transition-colors text-sm tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════
            PAPER CONTAINER
        ══════════════════════════════════ */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          {/* ── Paper header ── */}
          <header className="mb-10">
            {/* Venue pill */}
            <motion.div
              className="flex items-center gap-2 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs text-teal-400 tracking-widest uppercase">
                {post.conference}
              </span>
              <span className="text-white/20 text-xs mx-1">·</span>
              <Calendar className="w-3.5 h-3.5 text-white/40" />
              <span className="text-xs text-white/40">{post.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-5 leading-tight tracking-wide text-white"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              {post.title}
            </motion.h1>

            {/* Authors */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {post.authors.map((author) => (
                <span key={author} className="text-sm text-teal-300/80 tracking-wide">
                  {author}
                </span>
              ))}
            </motion.div>

            {/* Keywords / Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.07 }}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-400"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Decorative rule */}
            <motion.div
              className="h-px bg-gradient-to-r from-teal-500/50 via-white/10 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            />
          </header>

          {/* ── Abstract box ── */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <div className="border border-teal-500/20 rounded-lg p-6 bg-teal-950/10 backdrop-blur-sm relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none rounded-tl-lg" />
              <h2 className="text-xs uppercase tracking-widest text-teal-400 mb-3">Abstract</h2>
              <p className="text-white/70 leading-[1.9] text-[0.95rem] italic">
                {post.abstract}
              </p>
            </div>
          </motion.section>

          {/* ── Sections ── */}
          {post.sections && (
            <div className="space-y-0">
              {post.sections.map((section, idx) => (
                <motion.section
                  key={section.num}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="mb-12"
                >
                  {/* Section heading */}
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-teal-400/60 font-mono text-sm min-w-[1.5rem]">
                      {section.num}.
                    </span>
                    <h2
                      className="tracking-wide border-b border-white/8 pb-2 flex-1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {section.heading}
                    </h2>
                  </div>

                  {/* Content blocks */}
                  <div className="pl-8">
                    {section.content.map((block, bi) => (
                      <RenderBlock key={bi} block={block} />
                    ))}
                  </div>

                  {/* Separator (not after last section) */}
                  {idx < (post.sections?.length ?? 0) - 1 && (
                    <motion.div
                      className="mt-10 h-px bg-white/5"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.section>
              ))}
            </div>
          )}

          {/* ── Footer ── */}
          <motion.footer
            className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-white/40">
              {post.authors.join(", ")} · {post.year} · {post.conference}
            </div>
            {post.link && post.link !== "#" && (
              <motion.a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Repository
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}
