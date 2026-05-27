import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowOrb from '../components/GlowOrb';
import { fadeUpVariants, staggerContainer } from '../utils/animations';

const steps = [
  {
    number: '01',
    title: 'Diagnosis',
    subtitle: 'Field Assessment',
    description:
      'Initial energetic assessment of the field. We identify the nature, location, and depth of distortions present — whether karmic, parasitic, or structural — before any clearing begins.',
    icon: '◈',
    glow: 'rgba(176,79,200,',
  },
  {
    number: '02',
    title: 'Energetic Identification',
    subtitle: 'Structural Mapping',
    description:
      'Each distortion is precisely catalogued. Its origin, mechanism, and relationship to other field elements is mapped. This precision is what distinguishes our work from generic energy clearing.',
    icon: '⬡',
    glow: 'rgba(140,60,180,',
  },
  {
    number: '03',
    title: 'Clearing',
    subtitle: 'Deep Removal',
    description:
      'The actual work of dissolution and severance. Karmic generators are dismantled. Parasitic structures are severed. Blocks are dissolved. The field is depressurized and returned to its natural state.',
    icon: '✦',
    glow: 'rgba(201,168,76,',
  },
  {
    number: '04',
    title: 'Realignment',
    subtitle: 'Sovereign Restoration',
    description:
      'The cleared field is realigned to its original frequency — your authentic energetic signature, free from interference. Integration guidance is provided to anchor the new state.',
    icon: '◎',
    glow: 'rgba(176,79,200,',
  },
];

export default function Process() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <GlowOrb color="rgba(80,20,110," size={700} x="50%" y="50%" blur={140} opacity={0.1} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-24"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="font-jost text-xs tracking-[0.35em] uppercase mb-4" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ◈ &nbsp; The Method &nbsp; ◈
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.1} className="font-cinzel mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
            <span className="gradient-orchid">The Clearing</span>{' '}
            <span className="gradient-gold">Process</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.2} className="font-playfair italic max-w-lg mx-auto" style={{ color: 'rgba(232,224,240,0.6)', fontSize: '1rem' }}>
            Four precise stages. No guesswork. No ambiguity. Only systematic, deep energetic work.
          </motion.p>
          <motion.div variants={fadeUpVariants} custom={0.25} className="divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 hidden md:block"
            style={{
              width: 1,
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, transparent, rgba(176,79,200,0.4), rgba(201,168,76,0.3), transparent)',
            }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUpVariants}
                  custom={i * 0.15}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isRight ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <div
                      className="glass p-7 md:p-8 group hover:glow-orchid"
                      style={{
                        border: `1px solid ${step.glow}0.2)`,
                        transition: 'box-shadow 0.4s, border-color 0.4s',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step number */}
                        <div
                          className="flex-shrink-0 font-cinzel text-3xl font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${step.glow}0.9), rgba(201,168,76,0.8))`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: 1,
                          }}
                        >
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <p className="font-jost text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(201,168,76,0.6)' }}>
                            {step.subtitle}
                          </p>
                          <h3 className="font-cinzel mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#e8e0f0', letterSpacing: '0.06em' }}>
                            {step.title}
                          </h3>
                          <p className="font-jost font-light leading-relaxed" style={{ color: 'rgba(232,224,240,0.65)', fontSize: '0.92rem' }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center icon — visible on md+ */}
                  <div className="flex-shrink-0 relative hidden md:flex items-center justify-center z-10">
                    <div
                      className="w-16 h-16 rounded-full glass flex items-center justify-center"
                      style={{
                        border: `1px solid ${step.glow}0.5)`,
                        boxShadow: `0 0 30px ${step.glow}0.25), 0 0 60px ${step.glow}0.1)`,
                      }}
                    >
                      <span className="text-2xl gradient-orchid">{step.icon}</span>
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute rounded-full pulse-glow"
                      style={{
                        inset: -10,
                        border: `1px solid ${step.glow}0.2)`,
                        borderRadius: '50%',
                      }}
                    />
                  </div>

                  {/* Spacer (other side) */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
