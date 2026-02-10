import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        </div>

        <Experience />

        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        </div>

        <Education />

        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
