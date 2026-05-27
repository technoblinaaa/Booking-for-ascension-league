export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Subtle noise texture via SVG filter */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" result="noiseBlend" />
          </filter>
        </defs>
      </svg>

      {/* Noise overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          filter: 'url(#noise)',
          opacity: 0.025,
          background: 'white',
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Top ambient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40vh',
          background: 'linear-gradient(to bottom, rgba(30,5,50,0.3), transparent)',
        }}
      />

      {/* Bottom ambient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30vh',
          background: 'linear-gradient(to top, rgba(4,0,10,0.8), transparent)',
        }}
      />
    </div>
  );
}
