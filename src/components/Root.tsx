import { Outlet, Link, NavLink, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  {
    to: "/music",
    label: "Music",
    activeColor: "text-purple-400",
    hoverColor: "hover:text-purple-400",
    underlineColor: "bg-purple-400",
  },
  {
    to: "/art",
    label: "Art",
    activeColor: "text-orange-400",
    hoverColor: "hover:text-orange-400",
    underlineColor: "bg-orange-400",
  },
  {
    to: "/programming",
    label: "Programming",
    activeColor: "text-teal-400",
    hoverColor: "hover:text-teal-400",
    underlineColor: "bg-teal-400",
  },
];

export function Root() {
  const location = useLocation();

  /* Scroll to top on every route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img src="/logo.svg" alt="kpnn" className="h-8" />
              </Link>
            </motion.div>

            <div className="flex gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative text-sm tracking-wide transition-colors ${
                        isActive
                          ? link.activeColor
                          : `text-white/70 ${link.hoverColor}`
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <motion.span
                          className={`absolute -bottom-1 left-0 h-px ${link.underlineColor}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActive ? 1 : 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{ originX: 0, width: "100%", display: "block" }}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content with page transitions */}
      {/* Only exit animation here — each page handles its own entrance animations */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
