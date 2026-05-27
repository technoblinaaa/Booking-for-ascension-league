import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MiniSigil } from './SacredGeometry';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Process',    href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
        style={{
          background: scrolled
            ? 'rgba(4, 0, 10, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(176,79,200,0.12)' : 'none',
          transition: 'background 0.5s, backdrop-filter 0.5s, border-bottom 0.5s',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" style={{ cursor: 'none' }}>
          <MiniSigil size={32} opacity={0.85} />
          <div>
            <div
              className="font-cinzel text-xs tracking-widest gradient-orchid"
              style={{ letterSpacing: '0.22em', lineHeight: 1.1 }}
            >
              THE ASCENSION
            </div>
            <div
              className="font-cinzel text-xs tracking-widest gradient-gold"
              style={{ letterSpacing: '0.28em', lineHeight: 1.1 }}
            >
              LEAGUE
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" style={{ cursor: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://ko-fi.com/blina123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-orchid text-xs"
            style={{ cursor: 'none' }}
          >
            Book a Service
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          style={{ cursor: 'none', background: 'none', border: 'none' }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block h-px w-6"
              style={{ background: 'rgba(212,127,230,0.8)' }}
              animate={
                menuOpen
                  ? i === 0 ? { rotate: 45, y: 8 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-[72px] left-0 right-0 z-40 glass px-8 py-8 flex flex-col gap-6"
            style={{ borderTop: '1px solid rgba(176,79,200,0.2)', borderRadius: 0 }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMenuOpen(false)}
                style={{ cursor: 'none' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://ko-fi.com/blina123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-orchid text-xs text-center mt-2"
              onClick={() => setMenuOpen(false)}
              style={{ cursor: 'none' }}
            >
              Book a Service
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
