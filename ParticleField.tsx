interface OrbProps {
  color?: string;
  size?: number;
  x?: string;
  y?: string;
  blur?: number;
  opacity?: number;
  animate?: boolean;
}

export default function GlowOrb({
  color = 'rgba(110, 46, 128,',
  size = 600,
  x = '50%',
  y = '50%',
  blur = 120,
  opacity = 0.18,
  animate = true,
}: OrbProps) {
  return (
    <div
      className={animate ? 'pulse-glow' : ''}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}${opacity}) 0%, ${color}0) 70%)`,
        filter: `blur(${blur}px)`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
