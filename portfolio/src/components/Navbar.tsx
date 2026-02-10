import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-5 flex items-center justify-between">
        <a href="#inicio" className="text-xl font-bold tracking-tight">
          <span className="text-accent-400">{'<'}</span>
          <span className="text-white">JO</span>
          <span className="text-accent-400">{' />'}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dark-200 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50 overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-dark-200 hover:text-white transition-colors py-2 text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
