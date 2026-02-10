import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Phone } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-600)_0%,_transparent_50%)] opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-emerald-500)_0%,_transparent_50%)] opacity-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-dark-800/80 border border-dark-600/50 text-sm text-dark-200 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevos proyectos
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="text-white block mb-2">Juan Jose</span>
            <span className="bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent block">
              Ochoa Ortiz
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-dark-300 mb-6 font-mono">
            {'> '}
            <span className="text-accent-300">Software Engineer</span>
          </p>

          <p className="text-dark-200 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Ingeniero de sistemas con +6 años de experiencia en desarrollo full stack,
            microservicios y diseño de APIs. Actualmente en{' '}
            <span className="text-accent-400 font-semibold">MercadoLibre</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-10">
            <a
              href="#contacto"
              className="px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 text-base"
            >
              Contáctame
            </a>
            <a
              href="#experiencia"
              className="px-8 py-3.5 border border-dark-500 hover:border-dark-400 text-white font-medium rounded-xl transition-all duration-300 hover:bg-dark-800 text-base"
            >
              Ver experiencia
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8">
            <a href="mailto:ochoaortizj@gmail.com" className="text-dark-400 hover:text-accent-400 transition-colors duration-200" aria-label="Email">
              <Mail size={22} />
            </a>
            <a href="tel:+573165484013" className="text-dark-400 hover:text-accent-400 transition-colors duration-200" aria-label="Teléfono">
              <Phone size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-accent-400 transition-colors duration-200" aria-label="GitHub">
              <Github size={22} />
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/20 to-emerald-500/20 rounded-full blur-3xl" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-2 border-dark-600/50 shadow-2xl">
              <img
                src={profileImg}
                alt="Juan Jose Ochoa Ortiz"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 px-5 py-2.5 bg-dark-800 border border-dark-600/50 rounded-xl shadow-xl"
            >
              <span className="text-sm font-mono text-emerald-400">+6 años exp.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#sobre-mi" className="text-dark-400 hover:text-white transition-colors">
          <ChevronDown size={30} />
        </a>
      </motion.div>
    </section>
  );
}
