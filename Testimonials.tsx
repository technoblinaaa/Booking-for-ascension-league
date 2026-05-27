import { motion } from 'framer-motion';
import { MiniSigil } from '../components/SacredGeometry';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(4,0,10,0), rgba(4,0,10,1) 30%)',
        zIndex: 1,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(80,20,110,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-4"
          >
            <MiniSigil size={36} opacity={0.75} />
            <div>
              <div className="font-cinzel gradient-orchid text-glow-orchid tracking-widest" style={{ fontSize: '0.8rem', letterSpacing: '0.25em', lineHeight: 1.2 }}>
                THE ASCENSION
              </div>
              <div className="font-cinzel gradient-gold tracking-widest" style={{ fontSize: '0.8rem', letterSpacing: '0.3em', lineHeight: 1.2 }}>
                LEAGUE
              </div>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link" style={{ cursor: 'none' }}>
                {l.label}
              </a>
            ))}
          </motion.div>

          {/* Book CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            <a
              href="https://ko-fi.com/blina123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-orchid text-xs"
              style={{ cursor: 'none' }}
            >
              Book a Service
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider mb-10" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center"
        >
          {/* Tagline */}
          <p
            className="font-playfair italic"
            style={{ color: 'rgba(176,79,200,0.55)', fontSize: '0.9rem' }}
          >
            "Remove what binds you."
          </p>

          {/* Center decoration */}
          <div className="flex items-center gap-3">
            <div style={{ width: 30, height: 1, background: 'rgba(176,79,200,0.3)' }} />
            <MiniSigil size={18} opacity={0.4} />
            <div style={{ width: 30, height: 1, background: 'rgba(201,168,76,0.3)' }} />
          </div>

          {/* Legal */}
          <p
            className="font-jost font-light text-xs tracking-widest"
            style={{ color: 'rgba(232,224,240,0.2)' }}
          >
            © 2026 The Ascension League. All rights reserved.
          </p>
        </motion.div>

        {/* Discord / Ko-fi small refs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
          className="flex justify-center gap-8 mt-8"
        >
          <a
            href="https://ko-fi.com/blina123"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-xs tracking-widest uppercase"
            style={{ color: 'rgba(176,79,200,0.4)', transition: 'color 0.3s', cursor: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(176,79,200,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(176,79,200,0.4)')}
          >
            Ko-fi ↗
          </a>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>
          <span className="font-jost text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.4)' }}>
            Discord: _technoblina
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
