type Variant = "a" | "b" | "c" | "d" | "e" | "f";

type Props = {
  variant?: Variant;
  className?: string;
  /** Position preset; default "br" (bottom-right). */
  pos?: "tl" | "tr" | "bl" | "br" | "full";
  /** Opacity 0-100 (default 100). */
  opacity?: number;
};

/**
 * Large decorative Bauhaus composition rendered as an SVG.
 * Used as an absolute-positioned backdrop inside `position: relative` sections.
 * Variants intentionally vary scale, shapes and rhythm so the page never
 * repeats the same geometric block twice in a row.
 */
export function BauhausComposition({
  variant = "a",
  className = "",
  pos = "br",
  opacity = 100,
}: Props) {
  const posClass =
    pos === "tl"
      ? "top-0 left-0 -translate-x-1/4 -translate-y-1/4"
      : pos === "tr"
      ? "top-0 right-0 translate-x-1/4 -translate-y-1/4"
      : pos === "bl"
      ? "bottom-0 left-0 -translate-x-1/4 translate-y-1/4"
      : pos === "full"
      ? "inset-0"
      : "bottom-0 right-0 translate-x-1/4 translate-y-1/4";

  const sizeClass = pos === "full" ? "w-full h-full" : "w-[36rem] md:w-[48rem]";

  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid meet"
      className={`pointer-events-none absolute ${posClass} ${sizeClass} ${className}`}
      style={{ opacity: opacity / 100 }}
      aria-hidden
    >
      {variant === "a" && (
        <g>
          <circle cx="120" cy="180" r="160" fill="var(--bauhaus-blue)" />
          <rect x="180" y="20" width="200" height="200" fill="var(--bauhaus-red)" />
          <polygon points="40,400 240,200 240,400" fill="var(--bauhaus-yellow)" />
          <rect x="0" y="0" width="400" height="6" fill="var(--bauhaus-black)" />
        </g>
      )}
      {variant === "b" && (
        <g>
          <rect x="0" y="0" width="400" height="400" fill="none" stroke="var(--bauhaus-black)" strokeWidth="2" />
          <circle cx="320" cy="80" r="120" fill="var(--bauhaus-yellow)" />
          <rect x="40" y="240" width="180" height="120" fill="var(--bauhaus-black)" />
          <rect x="220" y="280" width="120" height="80" fill="var(--bauhaus-red)" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={0} y1={i * 14 + 60} x2={400} y2={i * 14 + 60} stroke="var(--bauhaus-black)" strokeWidth="0.5" opacity="0.4" />
          ))}
        </g>
      )}
      {variant === "c" && (
        <g>
          <polygon points="200,20 380,380 20,380" fill="var(--bauhaus-red)" />
          <circle cx="200" cy="260" r="100" fill="var(--bauhaus-paper)" stroke="var(--bauhaus-black)" strokeWidth="2" />
          <rect x="160" y="220" width="80" height="80" fill="var(--bauhaus-blue)" />
        </g>
      )}
      {variant === "d" && (
        <g>
          <rect x="0" y="0" width="200" height="200" fill="var(--bauhaus-yellow)" />
          <rect x="200" y="200" width="200" height="200" fill="var(--bauhaus-black)" />
          <circle cx="200" cy="200" r="140" fill="var(--bauhaus-red)" opacity="0.92" />
          <circle cx="200" cy="200" r="60" fill="var(--bauhaus-paper)" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="var(--bauhaus-black)" strokeWidth="3" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="var(--bauhaus-black)" strokeWidth="3" />
        </g>
      )}
      {variant === "e" && (
        <g>
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx="200"
              cy="200"
              r={20 + i * 14}
              fill="none"
              stroke={i % 3 === 0 ? "var(--bauhaus-red)" : i % 3 === 1 ? "var(--bauhaus-blue)" : "var(--bauhaus-black)"}
              strokeWidth="1.5"
            />
          ))}
        </g>
      )}
      {variant === "f" && (
        <g>
          <rect x="0" y="0" width="400" height="120" fill="var(--bauhaus-blue)" />
          <rect x="0" y="120" width="280" height="160" fill="var(--bauhaus-paper)" stroke="var(--bauhaus-black)" strokeWidth="2" />
          <rect x="280" y="120" width="120" height="280" fill="var(--bauhaus-yellow)" />
          <rect x="0" y="280" width="280" height="120" fill="var(--bauhaus-red)" />
          <circle cx="140" cy="200" r="60" fill="var(--bauhaus-black)" />
        </g>
      )}
    </svg>
  );
}

type MarkerProps = {
  n: string;
  label: string;
  /** Text color token name. Defaults to current. */
  tone?: "black" | "paper" | "red" | "blue" | "yellow";
};

/**
 * Oversized rotated section marker — vertical typographic element à la Bayer.
 * Place inside a sticky sidebar or absolutely in a section corner.
 */
export function SectionMarker({ n, label, tone = "black" }: MarkerProps) {
  const color =
    tone === "paper"
      ? "var(--bauhaus-paper)"
      : tone === "red"
      ? "var(--bauhaus-red)"
      : tone === "blue"
      ? "var(--bauhaus-blue)"
      : tone === "yellow"
      ? "var(--bauhaus-yellow)"
      : "var(--bauhaus-black)";

  return (
    <div className="flex items-start gap-4 md:gap-6 select-none" aria-hidden>
      <div
        className="font-display leading-none text-[5rem] md:text-[7rem] tabular-nums"
        style={{ color }}
      >
        {n}
      </div>
      <div
        className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 pt-1"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}
