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
          <stop offset="0" stopColor="#2dd4a8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#73ffb8" stopOpacity="0.05" />
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

// Floating hex composition for hero visuals
export function HexCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 grid-lines opacity-40 rounded-3xl" />
      <div className="absolute -top-6 -right-6 animate-floaty">
        <Hex size={120} stroke="#2dd4a8" strokeWidth={1.5} />
      </div>
      <div className="absolute top-16 left-6 animate-spin-slow">
        <Hex size={220} stroke="#1b4332" strokeWidth={1} />
      </div>
      <div className="absolute bottom-4 right-10 animate-floaty" style={{ animationDelay: "1.2s" }}>
        <Hex size={80} fill="#0f2620" stroke="#73ffb8" strokeWidth={1.5} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <Hex size={280} stroke="#2dd4a8" strokeWidth={1.25} className="animate-pulse-glow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-mono text-xs text-primary-glow tracking-widest">// K.SOFT</div>
              <div className="font-display text-3xl text-gradient mt-1">01001011</div>
              <div className="font-mono text-[10px] text-muted mt-1">runtime.online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
