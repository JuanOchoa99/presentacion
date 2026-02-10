import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Desarrollo de aplicaciones web completas con React, Python y Go.',
  },
  {
    icon: Database,
    title: 'Bases de datos',
    description: 'Análisis, diseño y optimización de bases de datos relacionales y NoSQL.',
  },
  {
    icon: Cloud,
    title: 'Microservicios',
    description: 'Creación y mantenimiento de arquitecturas distribuidas en la nube.',
  },
  {
    icon: Users,
    title: 'Trabajo en equipo',
    description: 'Enfoque colaborativo con responsabilidad y rápida capacidad de aprendizaje.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre-mi" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-20">
            <p className="text-accent-400 font-mono text-sm mb-3">{'// 01'}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Sobre mí</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-emerald-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Text */}
            <div className="space-y-7">
              <p className="text-dark-200 text-lg leading-[1.9]">
                Soy un ingeniero de sistemas con más de 6 años de experiencia, especializado
                en el desarrollo de aplicaciones web y en el análisis y diseño de bases de datos.
              </p>
              <p className="text-dark-200 text-lg leading-[1.9]">
                He trabajado en el desarrollo de software para instituciones bancarias, así como
                en la creación de microservicios. Además de mis habilidades técnicas, he realizado
                estudios básicos en el idioma inglés.
              </p>
              <p className="text-dark-200 text-lg leading-[1.9]">
                Mi enfoque se basa en la <span className="text-white font-medium">responsabilidad</span>,
                la <span className="text-white font-medium">rápida capacidad de aprendizaje</span> y
                un <span className="text-white font-medium">excepcional desempeño en trabajos en equipo</span>.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-7 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-accent-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                    <item.icon size={22} className="text-accent-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
