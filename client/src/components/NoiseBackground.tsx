import { memo } from "react";

const NoiseBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Subtle cinematic gradient wash */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255, 107, 53, 0.04) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255, 61, 0, 0.03) 0%, transparent 50%), radial-gradient(ellipse 50% 30% at 50% 50%, rgba(0, 255, 148, 0.02) 0%, transparent 50%)",
        }}
      />

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.045] mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Secondary finer grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />
    </div>
  );
});

NoiseBackground.displayName = "NoiseBackground";

export default NoiseBackground;
