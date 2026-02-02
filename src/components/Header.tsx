import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: 0,
          transformOrigin: "0%",
        }}
        animate={{
          scaleX: typeof window !== "undefined" ? 0 : 0,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    bg-[#62d1f6]
    ${isScrolled ? "shadow-md" : ""}
  `}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-lg animate-pulse-glow opacity-50"
                  style={{ background: "hsl(195 100% 59% / 0.3)" }}
                />
              </div>
              <div className="flex items-center">
  <img
    src="/infinity-fiber-logo.png"
    alt="Infinity Fiber – Precision Fiber Optics"
    className={`h-12 sm:h-10 md:h-14 lg:h-16 w-auto transition-all duration-300 ${
      isScrolled ? "brightness-100" : "brightness-90"
    }`}
  />
</div>

            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isScrolled ? "text-black hover:text-white" : "text-navy/80 hover:text-navy dark:text-black dark:hover:text-white"}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-navy/60 hover:text-navy hover:bg-navy/10 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <a href="#contact" className="btn-primary-cta">
                Request a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-navy hover:bg-navy/10 dark:text-white dark:hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-header border-t border-white/10"
            >
              <div className="section-container py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-white/10">
                    <button
                      onClick={() => setIsDark(!isDark)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white"
                    >
                      {isDark ? (
                        <Sun className="w-5 h-5" />
                      ) : (
                        <Moon className="w-5 h-5" />
                      )}
                      <span className="text-sm">
                        {isDark ? "Light Mode" : "Dark Mode"}
                      </span>
                    </button>
                  </div>
                  <a
                    href="#contact"
                    className="btn-primary-cta text-center mt-2"
                  >
                    Request a Quote
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
