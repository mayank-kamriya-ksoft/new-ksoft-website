import type { SVGProps } from "react";

// A single hexagon SVG shape (flat-top or pointy-top)
export function Hex({
  size = 64,
  stroke = "currentColor",
  fill = "none",
  strokeWidth = 1.25,
  pointy = false,
  className,
  ...rest
}: {
  size?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  pointy?: boolean;
  className?: string;
} & SVGProps<SVGSVGElement>) {
  // Pointy-top hexagon path (unit)
  const pointyPath = "M50 2 L95 27 L95 77 L50 98 L5 77 L5 27 Z";
  const flatPath = "M27 5 L77 5 L98 50 L77 95 L27 95 L2 50 Z";
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <path
        d={pointy ? pointyPath : flatPath}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Decorative hex grid backdrop
export function HexGrid({
  className = "",
  cols = 6,
  rows = 4,
}: {
  className?: string;
  cols?: number;
  rows?: number;
}) {
  const w = 60;
  const h = 52;
  const cells: { x: number; y: number; o: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * (w * 0.75);
      const y = r * h + (c % 2 ? h / 2 : 0);
      cells.push({ x, y, o: 0.15 + Math.random() * 0.5 });
    }
  }
  const totalW = cols * (w * 0.75) + w / 4;
  const totalH = rows * h + h / 2;
  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hexg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0f7a5f" stopOpacity="0.35" />
          <stop offset="1" stopColor="#16a37c" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {cells.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <path
            d={`M15 0 L45 0 L60 26 L45 52 L15 52 L0 26 Z`}
            fill="none"
            stroke="url(#hexg)"
            strokeWidth={0.8}
            opacity={c.o}
          />
        </g>
      ))}
    </svg>
  );
}

// Rich mixed-geometry hero composition: hex + circle + triangle + arcs + grid dots
export function HexCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* soft ambient glow */}
      <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_60%_40%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_65%)]" />

      {/* dotted iso grid backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.1" fill="#0f7a5f" opacity="0.28" />
          </pattern>
          <linearGradient id="arcg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0f7a5f" />
            <stop offset="1" stopColor="#16a37c" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#dots)" />
      </svg>

      {/* dashed rotating ring */}
      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="170" fill="none" stroke="#0f7a5f" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#16a37c" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="1 6" />
      </svg>

      {/* concentric solid arc */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <path d="M 60 200 A 140 140 0 0 1 340 200" fill="none" stroke="url(#arcg)" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
        <path d="M 340 200 A 140 140 0 0 1 200 340" fill="none" stroke="#063f30" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      </svg>

      {/* floating triangle top-left */}
      <div className="absolute top-6 left-4 animate-floaty" style={{ animationDelay: "0.6s" }}>
        <svg width="86" height="86" viewBox="0 0 100 100">
          <polygon points="50,10 90,85 10,85" fill="none" stroke="#0f7a5f" strokeWidth="1.4" strokeLinejoin="round" />
          <polygon points="50,28 74,74 26,74" fill="#ffffff" stroke="#16a37c" strokeWidth="1" />
        </svg>
      </div>

      {/* small hexagon top-right */}
      <div className="absolute -top-6 -right-6 animate-floaty">
        <Hex size={110} stroke="#0f7a5f" strokeWidth={1.4} />
      </div>

      {/* square rotated bottom-left */}
      <div className="absolute bottom-8 left-2 animate-floaty" style={{ animationDelay: "1.8s" }}>
        <div className="w-16 h-16 rotate-45 border border-forest/60 bg-surface/70 backdrop-blur-sm rounded-md" />
      </div>

      {/* filled circle bottom-right */}
      <div className="absolute bottom-6 right-8 animate-floaty" style={{ animationDelay: "1.2s" }}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="32" fill="none" stroke="#0f7a5f" strokeWidth="1.4" />
          <circle cx="36" cy="36" r="18" fill="#16a37c" opacity="0.18" />
          <circle cx="36" cy="36" r="6" fill="#0f7a5f" />
        </svg>
      </div>

      {/* plus mark, mid-left */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-70">
        <svg width="22" height="22" viewBox="0 0 22 22">
          <path d="M11 2v18M2 11h18" stroke="#0f7a5f" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      {/* orbit dot */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "22s" }}>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_18px_2px_rgba(15,122,95,0.6)]" />
      </div>

      {/* central emblem: hex + rings + label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full bg-[conic-gradient(from_180deg,transparent,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)] blur-2xl animate-pulse-glow" />
          <Hex size={230} stroke="#0f7a5f" strokeWidth={1.4} className="relative" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[10px] text-forest/70 tracking-[0.35em]">// K.SOFT</div>
              <div className="font-display text-3xl text-gradient mt-1">01001011</div>
              <div className="font-mono text-[10px] text-muted mt-1">runtime.online</div>
              <div className="mt-3 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

