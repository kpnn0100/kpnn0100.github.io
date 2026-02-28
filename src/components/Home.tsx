import { Link } from "react-router";
import { Music, Palette, Code } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cards = [
  {
    to: "/music",
    icon: Music,
    title: "Music",
    desc: "Original compositions and productions",
    borderHover: "hover:border-purple-500/50",
    gradient: "from-purple-900/20 to-teal-900/20",
    gradientHover: "group-hover:from-purple-900/40 group-hover:to-teal-900/40",
    iconColor: "text-purple-400",
    iconHover: "group-hover:text-teal-400",
    overlay: "from-purple-500/20",
    orb: "bg-purple-600/20",
  },
  {
    to: "/art",
    icon: Palette,
    title: "Art",
    desc: "Visual creations and digital artwork",
    borderHover: "hover:border-orange-500/50",
    gradient: "from-orange-900/20 to-yellow-900/20",
    gradientHover: "group-hover:from-orange-900/40 group-hover:to-yellow-900/40",
    iconColor: "text-orange-400",
    iconHover: "group-hover:text-yellow-400",
    overlay: "from-orange-500/20",
    orb: "bg-orange-600/20",
  },
  {
    to: "/programming",
    icon: Code,
    title: "Programming",
    desc: "Software engineering and technical projects",
    borderHover: "hover:border-teal-500/50",
    gradient: "from-black to-teal-900/20",
    gradientHover: "group-hover:to-teal-900/40",
    iconColor: "text-teal-400",
    iconHover: "group-hover:text-teal-300",
    overlay: "from-teal-500/20",
    orb: "bg-teal-600/20",
  },
];

// Animated floating orb
function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient background orbs */}
      <FloatingOrb className="w-96 h-96 bg-purple-800/10 top-10 -left-20" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-teal-800/10 top-32 right-10" delay={2.5} />
      <FloatingOrb className="w-64 h-64 bg-orange-800/8 bottom-40 left-1/4" delay={4} />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[65vh] relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-6xl md:text-8xl mb-8 tracking-wider relative"
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              kpnn
            </motion.span>
            {/* Glow effect */}
            <motion.span
              className="absolute inset-0 text-white blur-xl opacity-20 select-none"
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              kpnn
            </motion.span>
          </motion.h1>

          {/* Name */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl mb-3 tracking-wide"
          >
            Nam Doan
          </motion.h2>

          {/* Title */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-white/60 text-center"
          >
            Music Producer&nbsp;/&nbsp;Artist&nbsp;/&nbsp;Embedded Software Engineer
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-12"
          >
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto"
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Cards */}
      <section className="container mx-auto px-6 py-20 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map(({ to, icon: Icon, title, desc, borderHover, gradient, gradientHover, iconColor, iconHover, overlay }) => (
            <motion.div key={to} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Link
                  to={to}
                  className={`group relative overflow-hidden rounded-lg border border-white/10 ${borderHover} transition-all duration-300 bg-gradient-to-br ${gradient} ${gradientHover} block`}
                >
                  <div className="p-8 aspect-square flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className={`w-16 h-16 mb-6 ${iconColor} ${iconHover} transition-colors`} />
                    </motion.div>
                    <h3 className="text-2xl mb-3 tracking-wide">{title}</h3>
                    <p className="text-sm text-white/60 text-center">{desc}</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
