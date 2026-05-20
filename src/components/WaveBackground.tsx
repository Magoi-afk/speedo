export default function WaveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[var(--color-bg)]">
      {/* Overall Water Drift Effect - Moves everything subtly */}
      <div className="absolute inset-[-15%] opacity-60 select-none" style={{ animation: 'water-drift 25s ease-in-out infinite' }}>
        
        {/* God Rays - Volumetric light effects */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute top-[-30%] h-[180%] w-[12vw] bg-gradient-to-b from-[var(--color-primary)]/15 via-[var(--color-primary)]/5 to-transparent blur-[80px]"
              style={{
                left: `${5 + i * 15}%`,
                transform: 'rotate(-20deg)',
                animation: `float-ray ${8 + i * 2.5}s ease-in-out infinite alternate`,
                animationDelay: `${-i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Caustic Network - Replicating light refraction on the floor/depth */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
            filter: 'blur(30px)',
            animation: 'caustic-shimmer 20s linear infinite'
          }}
        />

        {/* Large Organic Ripples - Moving mass of water */}
        <div className="absolute inset-0 mix-blend-screen overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={`ripple-${i}`}
              className="absolute rounded-full bg-[var(--color-primary)]/10 blur-[100px]"
              style={{
                width: `${300 + Math.random() * 500}px`,
                height: `${300 + Math.random() * 500}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `ripple ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${-Math.random() * 15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Surface Sparkle / Disturbance */}
      <div className="absolute top-0 left-0 w-full h-[40vh] opacity-30 pointer-events-none z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={`surface-${i}`}
            className="absolute w-[300%] h-full border-t-[2px] border-[var(--color-primary)]/40 rounded-[100%]"
            style={{
              top: `${i * 25}px`,
              left: '-100%',
              filter: `blur(${15 + i * 5}px)`,
              animation: `surface-flow ${20 + i * 4}s ease-in-out infinite alternate`,
              animationDelay: `${-i * 3}s`
            }}
          />
        ))}
      </div>

      {/* Underwater Particles & Bubbles - Varied sizes and speeds */}
      <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
        {/* Bubbles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute bottom-[-10%] w-[3px] h-[3px] rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `bubble-rise ${10 + Math.random() * 15}s linear infinite`,
              animationDelay: `${-Math.random() * 20}s`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          />
        ))}
        {/* Micro-sediment / Dust */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute top-0 left-0 w-[1px] h-[1px] rounded-full bg-[var(--color-secondary)]/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: 'ripple 20s ease-in-out infinite alternate',
              animationDelay: `${-Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Depth Fades & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black/95 z-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 z-40" />
    </div>
  );
}
