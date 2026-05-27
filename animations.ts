import { motion } from 'framer-motion';
import { FloatingSigil } from '../components/SacredGeometry';
import GlowOrb from '../components/GlowOrb';
import { fadeUpVariants, fadeInVariants, staggerContainer } from '../utils/animations';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const { ref } = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(60,10,90,0.55) 0%, rgba(4,0,10,0) 70%)',
        }}
      />
      <GlowOrb color="rgba(110,46,128," size={900} x="50%" y="38%" blur={160} opacity={0.22} />
      <GlowOrb color="rgba(201,168,76," size={500} x="70%" y="70%" blur={120} opacity={0.08} animate={false} />
      <GlowOrb color="rgba(176,79,200," size={400} x="20%" y="75%" blur={100} opacity={0.06} animate={false} />

      {/* Top rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        className="divider absolute top-0 left-0 right-0"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-24 pb-16">
        {/* Left — Text */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-label */}
          <motion.div variants={fadeUpVariants} custom={0.3} className="mb-6">
            <span
              className="inline-flex items-center gap-2 font-jost text-xs tracking-[0.35em] uppercase"
              style={{ color: 'rgba(201,168,76,0.75)' }}
            >
              <span style={{ display: 'inline-block', width: 30, height: 1, background: 'rgba(201,168,76,0.5)' }} />
              Sacred Energetic Technology
              <span style={{ display: 'inline-block', width: 30, height: 1, background: 'rgba(201,168,76,0.5)' }} />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUpVariants}
            custom={0.45}
            className="font-cinzel mb-3"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.08 }}
          >
            <span className="gradient-orchid text-glow-orchid block">THE</span>
            <span className="gradient-orchid text-glow-orchid block">ASCENSION</span>
            <span className="gradient-gold text-glow-gold block">LEAGUE</span>
          </motion.h1>

          {/* Subtitle bar */}
          <motion.div variants={fadeUpVariants} custom={0.6} className="mb-8 flex items-center gap-3">
            <div style={{ width: 40, height: 1, background: 'rgba(176,79,200,0.5)' }} />
            <p
              className="font-jost font-light tracking-[0.22em] uppercase text-xs"
              style={{ color: 'rgba(212,127,230,0.8)' }}
            >
              Spiritual Clearing &amp; Energy Work
            </p>
            <div style={{ width: 40, height: 1, background: 'rgba(176,79,200,0.5)' }} />
          </motion.div>

          {/* Body copy */}
          <motion.p
            variants={fadeUpVariants}
            custom={0.75}
            className="font-playfair mb-10 leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(232,224,240,0.75)',
              maxWidth: 540,
              fontStyle: 'italic',
            }}
          >
            A structured system of deep energetic clearing.<br />
            Remove what binds you. Align with what you truly are.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUpVariants} custom={0.9} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://ko-fi.com/blina123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-orchid"
              style={{ cursor: 'none' }}
            >
              Book a Service
            </a>
            <a href="#services" className="btn-primary btn-ghost" style={{ cursor: 'none' }}>
              Enter Session
            </a>
            <a href="#about" className="btn-primary btn-outline" style={{ cursor: 'none' }}>
              Learn More
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeInVariants}
            custom={1.5}
            className="mt-16 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="font-jost text-xs tracking-widest uppercase" style={{ color: 'rgba(176,79,200,0.5)' }}>
              Descend
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(176,79,200,0.6), transparent)' }}
            />
          </motion.div>
        </motion.div>

        {/* Right — Sigil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: 'easeOut' }}
          className="relative flex items-center justify-center flex-shrink-0"
        >
          {/* Ambient ring */}
          <div
            className="absolute rounded-full pulse-glow"
            style={{
              width: 380,
              height: 380,
              background: 'radial-gradient(circle, rgba(110,46,128,0.25) 0%, rgba(110,46,128,0) 70%)',
              filter: 'blur(30px)',
            }}
          />
          <FloatingSigil />
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
