import { Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800 py-10">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-dark-400 text-sm">
          <span className="text-accent-400 font-mono">{'<'}</span>
          <span className="text-dark-200">JO</span>
          <span className="text-accent-400 font-mono">{' />'}</span>
          <span className="ml-4">&copy; {year} Juan Jose Ochoa Ortiz</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:ochoaortizj@gmail.com"
            className="text-dark-400 hover:text-accent-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+573165484013"
            className="text-dark-400 hover:text-accent-400 transition-colors"
            aria-label="Teléfono"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-accent-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
