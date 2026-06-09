export function BauhausShapes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <rect x="0" y="0" width="200" height="200" fill="var(--bauhaus-red)" />
      <circle cx="300" cy="100" r="100" fill="var(--bauhaus-blue)" />
      <polygon points="0,400 200,200 200,400" fill="var(--bauhaus-yellow)" />
      <rect x="200" y="200" width="200" height="200" fill="var(--bauhaus-black)" />
      <circle cx="300" cy="300" r="60" fill="var(--bauhaus-paper)" />
    </svg>
  );
}
