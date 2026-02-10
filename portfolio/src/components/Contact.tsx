import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ochoaortizj@gmail.com',
    href: 'mailto:ochoaortizj@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '(316) 548-4013',
    href: 'tel:+573165484013',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/juaochoa',
    href: 'https://github.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Colombia',
    href: '#',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-20 text-center">
            <p className="text-accent-400 font-mono text-sm mb-3">{'// 05'}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Contacto</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-emerald-500 rounded-full mx-auto mb-8" />
            <p className="text-dark-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas
              oportunidades y colaboraciones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-accent-500/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-500/20 transition-colors">
                  <link.icon size={24} className="text-accent-400" />
                </div>
                <p className="text-dark-400 text-sm mb-2">{link.label}</p>
                <p className="text-white font-medium text-sm break-all leading-relaxed">{link.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="mailto:ochoaortizj@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 text-base"
            >
              <Send size={20} />
              Envíame un mensaje
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
