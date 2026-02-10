import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Maestría en Ingeniería de Software',
    institution: 'Universidad de los Andes',
    period: '2022 - 2024',
    icon: GraduationCap,
  },
  {
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad San Buenaventura',
    period: '2016 - 2021',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'Expositor certificado',
    description:
      'Certificado como expositor de la Universidad San Buenaventura en "LA SEMANA DEL SABER CIENTÍFICO MILITAR", realizado los días 25 y 26 de abril del año 2019.',
  },
  {
    title: 'Artículo académico',
    description:
      'Artículo para el Congreso Internacional de Electrónica, Control y Telecomunicaciones aprobado para ser presentado en la modalidad de comunicación.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="educacion" className="relative py-32 sm:py-40">
      <div className="absolute inset-0 bg-dark-900/50" />

      <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-20">
            <p className="text-accent-400 font-mono text-sm mb-3">{'// 04'}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Educación</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-emerald-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Education cards */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-8">
                <GraduationCap size={24} className="text-accent-400" />
                Formación académica
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-accent-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                        <edu.icon size={26} className="text-accent-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">{edu.degree}</h4>
                        <p className="text-accent-300 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-dark-400 text-sm font-mono mt-2">{edu.period}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-8">
                <Award size={24} className="text-emerald-400" />
                Logros profesionales
              </h3>
              <div className="space-y-6">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                        <Award size={26} className="text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3">{ach.title}</h4>
                        <p className="text-dark-300 text-base leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
