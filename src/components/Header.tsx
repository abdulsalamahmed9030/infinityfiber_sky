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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#2EC5FF] z-[60] origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
      />

      <header
  className={`fixed top-0 inset-x-0 z-50 bg-[#62d1f6] transition-all duration-300
  ${isScrolled ? "shadow-md" : ""}`}
>
  <div className="w-full max-w-full px-3 sm:px-4 lg:max-w-7xl lg:mx-auto lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20 min-w-0">
      
      {/* LOGO */}
      <a
        href="/"
        className="flex items-center min-w-0"
      >
        <img
          src="/infinity-fiber-logo.png"
          alt="Infinity Fiber – Precision Fiber Optics"
          className={`
            h-12 md:h-14 lg:h-16
            max-w-[180px] sm:max-w-[220px] lg:max-w-none
            w-auto object-contain
            transition-all duration-300
            ${isScrolled ? "brightness-100" : "brightness-90"}
          `}
        />
      </a>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-black hover:text-white"
                : "text-navy/80 hover:text-navy"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* DESKTOP ACTIONS */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg text-navy/60 hover:bg-navy/10"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <a href="#contact" className="btn-primary-cta">
          Request a Quote
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-navy flex-shrink-0"
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

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="lg:hidden w-full"
      >
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-gray-700 hover:bg-black/5"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex items-center justify-between border-t pt-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <a href="#contact" className="btn-primary-cta text-center mt-3">
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
