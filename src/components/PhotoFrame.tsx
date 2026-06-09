import { Link } from "@tanstack/react-router";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: "portrait" | "square" | "landscape";
  width?: number;
  height?: number;
  priority?: boolean;
  id?: string;
};

const ratioMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "portrait",
  width,
  height,
  priority = false,
  id,
}: Props) {
  const image = (
    <div className={`${ratioMap[ratio]} relative w-full overflow-hidden bg-muted border border-bauhaus-black group`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {id && (
        <span className="absolute bottom-2 right-2 bg-bauhaus-black text-bauhaus-paper font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
          Ver →
        </span>
      )}
    </div>
  );

  const handleOriginCapture = () => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(
        "photo-origin",
        JSON.stringify({
          path: window.location.pathname + window.location.search,
          scrollY: window.scrollY,
        }),
      );
    } catch {
      /* ignore storage failures */
    }
  };

  return (
    <figure>
      {id ? (
        <Link
          to="/foto/$id"
          params={{ id }}
          onClick={handleOriginCapture}
          aria-label={`Abrir foto: ${caption ?? alt}`}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bauhaus-blue"
        >
          {image}
        </Link>
      ) : (
        image
      )}
      {caption && (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-current opacity-90">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
