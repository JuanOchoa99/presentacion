import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: 'MercadoLibre',
    role: 'Desarrollador Full Stack',
    period: '2023 - Actual',
    current: true,
    description: [
      'Desarrollo full stack utilizando tecnologías como Python, React JS, GitHub y Fury.',
      'Análisis y diseño de proyectos en los que resaltan APIs de autenticación.',
      'Proyectos de datos con herramientas como BigQuery y Datamesh.',
    ],
    technologies: ['Python', 'React JS', 'GitHub', 'Fury', 'BigQuery', 'Datamesh'],
  },
  {
    company: 'Colnex SI',
    role: 'Desarrollador Backend',
    period: '2017 - 2023',
    current: false,
    description: [
      'Creación de microservicios en Golang y diseño de APIs para fortalecer la interacción entre chatbots y el sitio web del cliente.',
      'Implementación de la configuración de recursos en la nube a través de Azure, aprovechando AppService.',
      'Desarrollo de software para instituciones bancarias.',
    ],
    technologies: ['Golang', 'Azure', 'Docker', 'Kubernetes', 'Transact-SQL', 'APIs REST'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiencia" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-20">
            <p className="text-accent-400 font-mono text-sm mb-3">{'// 03'}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Experiencia laboral
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-emerald-500 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-dark-700" />

            <div className="space-y-16">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  className="relative pl-16 sm:pl-24"
                >
                  {/* Dot on timeline */}
                  <div
                    className={`absolute left-3.5 sm:left-6.5 top-2 w-3.5 h-3.5 rounded-full border-2 ${
                      job.current
                        ? 'bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50'
                        : 'bg-dark-700 border-dark-500'
                    }`}
                  />

                  <div className="p-8 sm:p-10 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-dark-600 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase size={20} className="text-accent-400" />
                          <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                          {job.current && (
                            <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="text-accent-300 font-medium text-lg">{job.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-dark-300 text-sm">
                        <Calendar size={15} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {job.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3 text-dark-200 leading-relaxed">
                          <span className="text-accent-500 mt-1.5 text-sm flex-shrink-0">{'▸'}</span>
                          <span className="text-base">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 text-xs font-mono bg-dark-700/50 text-dark-200 rounded-lg border border-dark-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
