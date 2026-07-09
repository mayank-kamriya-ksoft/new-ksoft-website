import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  macOS-style window chrome                                         */
/* ------------------------------------------------------------------ */
function WindowChrome({
  title,
  right,
  children,
  className = "",
}: {
  title?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(14,26,23,0.25)] overflow-hidden backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 px-4 h-9 border-b border-border/70 bg-surface-2/70">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-3 font-mono text-[11px] text-muted truncate">
            {title}
          </span>
        )}
        <div className="ml-auto flex items-center gap-2">{right}</div>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code editor window                                                */
/* ------------------------------------------------------------------ */
export function CodeWindow({ className = "" }: { className?: string }) {
  const lines: Array<Array<{ t: string; c?: string }>> = [
    [{ t: "// ksoft/ship.ts", c: "cmt" }],
    [
      { t: "import", c: "kw" },
      { t: " { deploy } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"@ksoft/core"', c: "str" },
      { t: ";" },
    ],
    [],
    [
      { t: "export", c: "kw" },
      { t: " " },
      { t: "async", c: "kw" },
      { t: " " },
      { t: "function", c: "kw" },
      { t: " " },
      { t: "ship", c: "fn" },
      { t: "(product: " },
      { t: "Product", c: "typ" },
      { t: ") {" },
    ],
    [
      { t: "  " },
      { t: "const", c: "kw" },
      { t: " result " },
      { t: "=", c: "op" },
      { t: " " },
      { t: "await", c: "kw" },
      { t: " " },
      { t: "deploy", c: "fn" },
      { t: "({" },
    ],
    [
      { t: "    edge: " },
      { t: "true", c: "num" },
      { t: ", region: " },
      { t: '"bom1"', c: "str" },
      { t: "," },
    ],
    [
      { t: "    revenue: " },
      { t: '"first"', c: "str" },
      { t: ", slides: " },
      { t: "false", c: "num" },
      { t: "," },
    ],
    [{ t: "  });" }],
    [
      { t: "  " },
      { t: "return", c: "kw" },
      { t: " result." },
      { t: "url", c: "prop" },
      { t: ";" },
    ],
    [{ t: "}" }],
  ];

  const color = (c?: string) =>
    c === "kw"
      ? "text-[#a05fff]"
      : c === "str"
      ? "text-[#0a7cff]"
      : c === "num"
      ? "text-[#c2410c]"
      : c === "fn"
      ? "text-[#0369a1]"
      : c === "typ"
      ? "text-[#b45309]"
      : c === "prop"
      ? "text-[#0369a1]"
      : c === "cmt"
      ? "text-muted italic"
      : c === "op"
      ? "text-forest"
      : "text-foreground";

  return (
    <WindowChrome
      className={className}
      title="ship.ts — ksoft"
      right={
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-forest">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          live
        </span>
      }
    >
      <div className="flex font-mono text-[12.5px] leading-6">
        <div className="px-3 py-4 select-none text-right text-muted/70 bg-surface-2/40 border-r border-border/60">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="px-4 py-4 overflow-hidden w-full">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line.length === 0 ? (
                <>&nbsp;</>
              ) : (
                line.map((tok, j) => (
                  <span key={j} className={color(tok.c)}>
                    {tok.t}
                  </span>
                ))
              )}
            </div>
          ))}
        </pre>
      </div>
    </WindowChrome>
  );
}

/* ------------------------------------------------------------------ */
/*  Deploy / status card                                              */
/* ------------------------------------------------------------------ */
export function DeployCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface/95 backdrop-blur p-4 w-[260px] shadow-[0_20px_60px_-20px_rgba(14,26,23,0.25)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-forest">
            Production
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted">2s ago</span>
      </div>
      <div className="mt-3 font-display text-base text-foreground">
        Deployment ready
      </div>
      <div className="font-mono text-[11px] text-muted mt-0.5 truncate">
        main · a1f9c2e · edge/bom1
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["TTFB", "84ms"],
          ["Build", "12s"],
          ["Uptime", "99.99%"],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-display text-sm text-foreground">{v}</div>
            <div className="font-mono text-[9px] text-muted uppercase tracking-widest">
              {k}
            </div>
          </div>
        ))}
      </div>
      {/* sparkline */}
      <svg viewBox="0 0 240 40" className="mt-3 w-full h-8">
        <defs>
          <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0a7cff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#0a7cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 L30 22 L60 26 L90 14 L120 18 L150 8 L180 12 L210 5 L240 10 L240 40 L0 40 Z"
          fill="url(#spark)"
        />
        <path
          d="M0 30 L30 22 L60 26 L90 14 L120 18 L150 8 L180 12 L210 5 L240 10"
          fill="none"
          stroke="#0a7cff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Terminal card                                                     */
/* ------------------------------------------------------------------ */
export function TerminalCard({ className = "" }: { className?: string }) {
  return (
    <WindowChrome className={className} title="~/ksoft › zsh">
      <div className="p-4 font-mono text-[11.5px] leading-5 bg-[#0e1a17] text-[#c6e7d8]">
        <div>
          <span className="text-[#3b95ff]">➜</span>{" "}
          <span className="text-[#7fd6b5]">ksoft</span> npm run ship
        </div>
        <div className="text-[#8aa89b]">▲ building routes … 24/24</div>
        <div className="text-[#8aa89b]">✓ optimized · 118kb gz</div>
        <div className="text-[#8aa89b]">☁ edge deploy · bom1 iad1</div>
        <div className="text-[#7fd6b5]">✔ live in 12.4s</div>
        <div>
          <span className="text-[#3b95ff]">➜</span>{" "}
          <span className="text-[#7fd6b5]">ksoft</span>{" "}
          <span className="inline-block w-1.5 h-3 align-[-2px] bg-[#3b95ff] animate-pulse-glow" />
        </div>
      </div>
    </WindowChrome>
  );
}

/* ------------------------------------------------------------------ */
/*  Composed hero visual                                              */
/* ------------------------------------------------------------------ */
export function HeroStack({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* ambient wash */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_65%)]" />

      {/* Main code editor, tilted slightly for depth */}
      <div className="relative rotate-[-2deg] animate-fade-up">
        <CodeWindow />
      </div>

      {/* Terminal peeking bottom-left */}
      <div
        className="absolute -left-6 bottom-4 w-[280px] rotate-[3deg] hidden sm:block animate-fade-up"
        style={{ animationDelay: "0.15s" }}
      >
        <TerminalCard />
      </div>

      {/* Deploy card floating top-right */}
      <div
        className="absolute -right-4 -top-6 rotate-[4deg] hidden sm:block animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <DeployCard />
      </div>

      {/* Shipping badge */}
      <div
        className="absolute -bottom-4 right-6 rounded-full border border-border bg-surface shadow-lg px-3 py-1.5 flex items-center gap-2 animate-fade-up"
        style={{ animationDelay: "0.45s" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-forest">
          shipped · 120+ products
        </span>
      </div>
    </div>
  );
}
