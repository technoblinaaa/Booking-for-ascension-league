import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sigil, MiniSigil } from '../components/SacredGeometry';
import GlowOrb from '../components/GlowOrb';
import { fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainer } from '../utils/animations';

const pillars = [
  {
    symbol: '◈',
    title: 'Energetic Diagnosis',
    text: 'Every distortion has a root. Before anything is cleared, it is located — precisely identified within the energetic field and its underlying structure mapped.',
  },
  {
    symbol: '⬡',
    title: 'Structural Clearing',
    text: 'We do not work with surface-level symptoms. We engage the deep energetic architecture — the karmic layers, parasitic formations, and subconscious generators of suffering.',
  },
  {
    symbol: '✦',
    title: 'Sovereign Realignment',
    text: 'Once cleared, the field is restored to its natural frequency. You return to yourself — your original energetic signature, uncorrupted and fully expressed.',
  },
];

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <GlowOrb color="rgba(176,79,200," size={700} x="90%" y="30%" blur={130} opacity={0.1} />
      <GlowOrb color="rgba(201,168,76," size={500} x="5%" y="70%" blur={100} opacity={0.07} animate={false} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-24"
        >
          <motion.p
            variants={fadeUpVariants}
            custom={0}
            className="font-jost text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: 'rgba(201,168,76,0.7)' }}
          >
            ◈ &nbsp; The Order &nbsp; ◈
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            custom={0.1}
            className="font-cinzel mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
          >
            <span className="gradient-orchid">What Is The</span>{' '}
            <span className="gradient-gold">Ascension League</span>
          </motion.h2>
          <motion.div variants={fadeUpVariants} custom={0.2} className="divider max-w-xs mx-auto mb-8" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left — sigil visual */}
          <motion.div
            variants={slideLeftVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center items-center relative"
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 340,
                height: 340,
                background: 'radial-gradient(circle, rgba(80,20,110,0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            >
              <Sigil size={300} opacity={0.45} />
            </motion.div>
            {/* Center glow */}
            <div
              className="absolute pulse-glow"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(176,79,200,0.7) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
          </motion.div>

          {/* Right — copy */}
          <motion.div
            variants={slideRightVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="glass p-8 md:p-10 glow-orchid">
              <MiniSigil size={28} opacity={0.7} />
              <h3
                className="font-playfair mt-4 mb-6"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: '#e8e0f0' }}
              >
                A Structured System of Deep Energetic Work
              </h3>
              <div className="space-y-5 font-jost font-light leading-relaxed" style={{ color: 'rgba(232,224,240,0.72)', fontSize: '1rem' }}>
                <p>
                  The Ascension League is not a philosophy. It is not a belief system or a spiritual
                  doctrine. It is a <em style={{ color: 'rgba(212,127,230,0.85)', fontStyle: 'italic' }}>structured
                  operational framework</em> for the identification and removal of energetic distortions
                  that govern human experience beneath the threshold of conscious awareness.
                </p>
                <p>
                  Most suffering — the kind that persists regardless of therapy, willpower, or
                  circumstances — is not psychological. It is energetic. It is the result of karmic
                  structures, parasitic formations, and deep limiting architectures embedded within
                  the energetic field itself.
                </p>
                <p>
                  We locate these structures. We remove them. We restore the field to its sovereign
                  frequency. What remains is you — without the interference.
                </p>
              </div>
              <div className="divider mt-8 mb-6" />
              <p
                className="font-playfair italic"
                style={{ color: 'rgba(201,168,76,0.8)', fontSize: '0.95rem' }}
              >
                "This is not transformation by belief. It is restoration by precision."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUpVariants}
              custom={i * 0.15}
              className="glass p-7 border-pulse group hover:glow-orchid"
              style={{ transition: 'box-shadow 0.4s' }}
            >
              <div
                className="text-3xl mb-4 gradient-orchid font-cinzel"
                style={{ lineHeight: 1 }}
              >
                {pillar.symbol}
              </div>
              <h4
                className="font-cinzel text-sm tracking-widest mb-3 gradient-gold"
                style={{ letterSpacing: '0.12em' }}
              >
                {pillar.title}
              </h4>
              <p
                className="font-jost font-light leading-relaxed"
                style={{ color: 'rgba(232,224,240,0.65)', fontSize: '0.9rem' }}
              >
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
