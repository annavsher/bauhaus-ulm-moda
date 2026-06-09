import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { photos, photoIds } from "@/lib/photos";

export const Route = createFileRoute("/foto/$id")({
  component: PhotoPage,
  loader: ({ params }) => {
    const photo = photos[params.id];
    if (!photo) throw notFound();
    return { photo };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-display uppercase">Foto não encontrada</h1>
      <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.3em] underline">
        Voltar ao arquivo
      </Link>
    </div>
  ),
  head: ({ loaderData }) => {
    const p = loaderData?.photo;
    return {
      meta: [
        { title: p ? `${p.title} — Bauhaus & Moda` : "Foto — Bauhaus & Moda" },
        { name: "description", content: p?.description ?? "Arquivo visual Bauhaus & Moda." },
        { property: "og:title", content: p?.title ?? "Bauhaus & Moda" },
        { property: "og:description", content: p?.description ?? "" },
        ...(p ? [{ property: "og:image", content: p.src }] : []),
      ],
    };
  },
});

function PhotoPage() {
  const { photo } = Route.useLoaderData();
  const router = useRouter();
  const idx = photoIds.indexOf(photo.id);
  const prev = photoIds[(idx - 1 + photoIds.length) % photoIds.length];
  const next = photoIds[(idx + 1) % photoIds.length];

  const goBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") {
      router.navigate({ to: "/" });
      return;
    }

    let origin: { path?: string; scrollY?: number } | null = null;
    try {
      const raw = sessionStorage.getItem("photo-origin");
      if (raw) origin = JSON.parse(raw);
    } catch {
      /* ignore */
    }

    const targetPath = origin?.path ?? "/";
    const scrollY = typeof origin?.scrollY === "number" ? origin.scrollY : 0;

    const restoreScroll = () => {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    };

    router.navigate({ to: targetPath }).then(() => {
      // wait two frames so the page has laid out before restoring scroll
      requestAnimationFrame(() => requestAnimationFrame(restoreScroll));
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <a href="/" onClick={goBack} className="flex items-center gap-3">
            <div className="flex">
              <div className="h-5 w-5" style={{ backgroundColor: "var(--bauhaus-red)" }} />
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
              <div
                className="h-5 w-5"
                style={{ background: "linear-gradient(135deg, var(--bauhaus-yellow) 50%, transparent 50%)" }}
              />
            </div>
            <span className="font-display text-xs uppercase tracking-[0.25em]">Bauhaus / Moda</span>
          </a>
          <a
            href="/"
            onClick={goBack}
            className="font-mono text-[11px] uppercase tracking-[0.2em] hover:text-accent"
          >
            ← Voltar
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-12 gap-12">
        <figure className="md:col-span-8">
          <div className="border border-bauhaus-black bg-muted overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
          <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
            {photo.caption}
          </figcaption>
        </figure>

        <aside className="md:col-span-4 space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
              Arquivo {String(idx + 1).padStart(2, "0")} / {photoIds.length}
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-display uppercase leading-[0.95]">
              {photo.title}
            </h1>
            {photo.year && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground">
                {photo.year}
              </p>
            )}
          </div>

          <p className="text-base leading-relaxed text-foreground/80">
            {photo.description}
          </p>

          <div className="border-t border-bauhaus-black pt-6 flex justify-between gap-4">
            <Link
              to="/foto/$id"
              params={{ id: prev }}
              aria-label="Foto anterior do arquivo"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bauhaus-blue"
            >
              ← Anterior
            </Link>
            <Link
              to="/foto/$id"
              params={{ id: next }}
              aria-label="Próxima foto do arquivo"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bauhaus-blue"
            >
              Próxima →
            </Link>
          </div>
        </aside>
      </main>

      <footer className="bg-bauhaus-paper text-bauhaus-black border-t border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 py-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground text-center">
          Bauhaus / Moda · Arquivo visual
        </div>
      </footer>
    </div>
  );
}
