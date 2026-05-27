import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MiniSigil } from '../components/SacredGeometry';
import GlowOrb from '../components/GlowOrb';
import { fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainer } from '../utils/animations';

export default function Contact() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <GlowOrb color="rgba(176,79,200," size={700} x="50%" y="50%" blur={150} opacity={0.12} />
      <GlowOrb color="rgba(201,168,76," size={400} x="15%" y="30%" blur={100} opacity={0.07} animate={false} />
      <GlowOrb color="rgba(110,46,128," size={500} x="85%" y="70%" blur={110} opacity={0.08} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="font-jost text-xs tracking-[0.35em] uppercase mb-4" style={{ color: 'rgba(201,168,76,0.7)' }}>
            ◈ &nbsp; Initiate Contact &nbsp; ◈
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.1} className="font-cinzel mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
            <span className="gradient-gold">Open the</span>{' '}
            <span className="gradient-orchid">Gate</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.2} className="font-playfair italic max-w-xl mx-auto" style={{ color: 'rgba(232,224,240,0.6)', fontSize: '1rem' }}>
            All sessions are booked directly through Ko-fi. For inquiries and direct communication, reach through Discord.
          </motion.p>
          <motion.div variants={fadeUpVariants} custom={0.25} className="divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ko-fi card */}
          <motion.div
            variants={slideLeftVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <a
              href="https://ko-fi.com/blina123"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              style={{ cursor: 'none' }}
            >
              <div
                className="glass p-8 md:p-10 h-full glow-orchid group-hover:glow-orchid border-pulse"
                style={{
                  border: '1px solid rgba(176,79,200,0.25)',
                  transition: 'box-shadow 0.4s, transform 0.4s',
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'radial-gradient(circle, rgba(176,79,200,0.3) 0%, rgba(110,46,128,0.08) 70%)',
                      border: '1px solid rgba(176,79,200,0.4)',
                      fontSize: '1.5rem',
                    }}
                  >
                    ☕
                  </div>
                  <div>
                    <p className="font-jost text-xs tracking-widest uppercase mb-0.5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                      Book a Session
                    </p>
                    <h3 className="font-cinzel text-base tracking-wide" style={{ color: '#e8e0f0' }}>
                      Ko-fi Booking
                    </h3>
                  </div>
                </div>

                <div className="divider mb-6" />

                <div className="mb-6">
                  <p
                    className="font-jost font-light leading-relaxed mb-4"
                    style={{ color: 'rgba(232,224,240,0.65)', fontSize: '0.9rem' }}
                  >
                    All services are booked and paid through Ko-fi. Select your session, complete payment, and you will be contacted within 24 hours to initiate the clearing.
                  </p>
                  <p
                    className="font-playfair italic"
                    style={{ color: 'rgba(176,79,200,0.75)', fontSize: '0.92rem' }}
                  >
                    ko-fi.com/blina123
                  </p>
                </div>

                <div
                  className="btn-primary btn-orchid text-xs inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #8b2da8, #6e2e80)',
                    border: '1px solid rgba(176,79,200,0.5)',
                  }}
                >
                  Open Ko-fi →
                </div>
              </div>
            </a>
          </motion.div>

          {/* Discord card */}
          <motion.div
            variants={slideRightVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div
              className="glass p-8 md:p-10 h-full glow-gold"
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, rgba(140,100,20,0.06) 70%)',
                    border: '1px solid rgba(201,168,76,0.35)',
                    fontSize: '1.4rem',
                  }}
                >
                  ◈
                </div>
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase mb-0.5" style={{ color: 'rgba(176,79,200,0.6)' }}>
                    Direct Contact
                  </p>
                  <h3 className="font-cinzel text-base tracking-wide" style={{ color: '#e8e0f0' }}>
                    Discord
                  </h3>
                </div>
              </div>

              <div className="divider mb-6" />

              <div className="mb-6">
                <p
                  className="font-jost font-light leading-relaxed mb-4"
                  style={{ color: 'rgba(232,224,240,0.65)', fontSize: '0.9rem' }}
                >
                  For questions, preliminary inquiries, or to discuss which session is right for your situation, reach out directly via Discord.
                </p>
                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg"
                  style={{
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <span className="gradient-gold text-lg">◈</span>
                  <span
                    className="font-cinzel tracking-widest gradient-gold"
                    style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}
                  >
                    _technoblina
                  </span>
                </div>
              </div>

              <p
                className="font-jost font-light text-xs leading-relaxed"
                style={{ color: 'rgba(232,224,240,0.4)' }}
              >
                Response time is typically within 24 hours. Messages are reviewed personally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom call to action */}
        <motion.div
          variants={fadeUpVariants}
          custom={0.4}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative glass text-center p-12 md:p-16"
          style={{
            border: '1px solid rgba(176,79,200,0.2)',
            background: 'rgba(15,3,28,0.6)',
          }}
        >
          {/* Corner sigils */}
          <div className="absolute top-6 left-6 opacity-30">
            <MiniSigil size={24} opacity={1} />
          </div>
          <div className="absolute bottom-6 right-6 opacity-30">
            <MiniSigil size={24} opacity={1} />
          </div>

          <p className="font-jost text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>
            Begin the Work
          </p>
          <h3 className="font-cinzel mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            <span className="gradient-orchid">Remove What Binds You.</span>
          </h3>
          <p
            className="font-playfair italic mb-8 max-w-lg mx-auto"
            style={{ color: 'rgba(232,224,240,0.6)', fontSize: '1rem' }}
          >
            You do not need to understand everything before beginning. The field will show what is ready to be cleared.
          </p>
          <a
            href="https://ko-fi.com/blina123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-orchid"
            style={{ cursor: 'none' }}
          >
            Book a Service
          </a>
        </motion.div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
