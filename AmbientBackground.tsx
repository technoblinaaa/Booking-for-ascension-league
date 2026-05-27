import { useEffect } from 'react';
import ParticleField from './components/ParticleField';
import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import GlowOrb from './components/GlowOrb';

export default function App() {
  // Smooth scroll polyfill / setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: 'var(--deep-black, #04000a)', color: '#e8e0f0' }}
    >
      {/* Cinematic preloader */}
      <Preloader />
      {/* Global particle field (fixed background) */}
      <ParticleField />

      {/* Ambient bg effects */}
      <AmbientBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Global ambient orbs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <GlowOrb
          color="rgba(60,10,90,"
          size={1200}
          x="20%"
          y="15%"
          blur={200}
          opacity={0.06}
          animate={false}
        />
        <GlowOrb
          color="rgba(100,30,140,"
          size={800}
          x="75%"
          y="55%"
          blur={160}
          opacity={0.05}
          animate={true}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
