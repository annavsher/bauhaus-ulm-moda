type Props = {
  /** Section number to display (figure/ground marker). */
  n?: string;
  /** Section short label, e.g. "Escola". */
  label?: string;
  /** Color theme for the rule's accent strip. */
  tone?: "paper" | "black" | "yellow";
};

/**
 * Bauhaus + Gestalt divider:
 * - circle / square / triangle in primaries (semelhança + pregnância)
 * - continuous black rule across the full width (continuidade)
 * - numbered label sits inside a black region (figura/fundo + região comum)
 *
 * Drop between sections to make the whole site read as one composition.
 */
export function BauhausRule({ n, label, tone = "paper" }: Props) {
  const bg =
    tone === "black"
      ? "bg-bauhaus-black text-bauhaus-paper border-bauhaus-paper/30"
      : tone === "yellow"
      ? "bg-bauhaus-yellow text-bauhaus-black border-bauhaus-black"
      : "bg-bauhaus-paper text-bauhaus-black border-bauhaus-black";

  return (
    <div className={`relative border-y ${bg}`} aria-hidden={!label}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-stretch justify-between gap-0">
          {/* Numbered region — figura/fundo */}
          <div className="flex items-center">
            {n ? (
              <span
                className="inline-flex h-10 md:h-12 items-center px-3 md:px-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] bg-bauhaus-black text-bauhaus-paper"
              >
                {n}
              </span>
            ) : null}
            {label ? (
              <span className="inline-flex h-10 md:h-12 items-center px-3 md:px-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                {label}
              </span>
            ) : null}
          </div>

          {/* Continuous rule — continuidade */}
          <div className="flex-1 flex items-center px-3 md:px-6">
            <span className="block h-px w-full bg-current opacity-40" />
          </div>

          {/* The three primaries — semelhança + pregnância */}
          <div className="flex items-center gap-0">
            <span
              className="block h-10 md:h-12 w-10 md:w-12"
              style={{ backgroundColor: "var(--bauhaus-red)" }}
            />
            <span
              className="block h-10 md:h-12 w-10 md:w-12 rounded-full"
              style={{ backgroundColor: "var(--bauhaus-blue)" }}
            />
            <svg
              viewBox="0 0 48 48"
              className="block h-10 md:h-12 w-10 md:w-12"
              aria-hidden
            >
              <polygon points="0,48 48,48 24,0" fill="var(--bauhaus-yellow)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
