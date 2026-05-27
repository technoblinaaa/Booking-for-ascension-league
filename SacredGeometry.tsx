import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sigil } from './SacredGeometry';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeText, setFadeText] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeText(true), 600);
    const t2 = setTimeout(() => setVisible(false), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            background: '#04000a',
            zIndex: 99999,
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(110,46,128,0.4) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Sigil */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Sigil size={120} opacity={0.7} />
          </motion.div>

          {/* Text */}
          <AnimatePresence>
            {fadeText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-8 text-center"
                style={{ position: 'relative', zIndex: 1 }}
              >
                <p
                  className="font-cinzel tracking-widest uppercase gradient-orchid"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.4em' }}
                >
                  The Ascension League
                </p>
                <motion.div
                  className="mt-3 mx-auto"
                  style={{
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(176,79,200,0.6), transparent)',
                  }}
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
