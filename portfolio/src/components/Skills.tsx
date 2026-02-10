import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'JavaScript', category: 'Lenguajes', level: 5 },
  { name: 'Python', category: 'Lenguajes', level: 5 },
  { name: 'Golang', category: 'Lenguajes', level: 5 },
  { name: 'Java', category: 'Lenguajes', level: 4 },
  { name: 'Transact-SQL', category: 'Lenguajes', level: 4 },
  { name: 'React JS', category: 'Frameworks', level: 5 },
  { name: 'GSP', category: 'Frameworks', level: 3 },
  { name: 'Docker', category: 'DevOps', level: 4 },
  { name: 'Kubernetes', category: 'DevOps', level: 4 },
  { name: 'GitHub', category: 'DevOps', level: 5 },
  { name: 'BigQuery', category: 'Data', level: 4 },
  { name: 'Azure', category: 'Cloud', level: 4 },
];

const categories = ['Lenguajes', 'Frameworks', 'DevOps', 'Data', 'Cloud'];

const categoryColors: Record<string, string> = {
  Lenguajes: 'from-accent-500 to-accent-400',
  Frameworks: 'from-emerald-500 to-emerald-400',
  DevOps: 'from-orange-500 to-yellow-400',
  Data: 'from-purple-500 to-pink-400',
  Cloud: 'from-cyan-500 to-blue-400',
};

const categoryBg: Record<string, string> = {
  Lenguajes: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
  Frameworks: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  DevOps: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Data: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Cloud: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="habilidades" className="relative py-32 sm:py-40">
      {/* Subtle background */}
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
            <p className="text-accent-400 font-mono text-sm mb-3">{'// 02'}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Conocimientos y habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-emerald-500 rounded-full" />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium border ${categoryBg[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="group p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-dark-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-base">{skill.name}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${categoryBg[skill.category]}`}
                  >
                    {skill.category}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level * 20}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
