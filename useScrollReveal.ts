import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
  duration?: number;
  threshold?: number;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.85,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const initial: Record<string, number | string> = { opacity: 0 };
  if (direction === 'up')    { initial.y = 35; }
  if (direction === 'down')  { initial.y = -35; }
  if (direction === 'left')  { initial.x = -40; }
  if (direction === 'right') { initial.x = 40; }

  const animate: Record<string, number | string> = { opacity: isInView ? 1 : 0 };
  if (direction === 'up' || direction === 'down') { animate.y = isInView ? 0 : initial.y as number; }
  if (direction === 'left' || direction === 'right') { animate.x = isInView ? 0 : initial.x as number; }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
