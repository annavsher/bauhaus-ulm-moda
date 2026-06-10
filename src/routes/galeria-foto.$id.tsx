import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { photos } from "./produto-final-galeria";

export const Route = createFileRoute("/galeria-foto/$id")({
  component: GaleriaFotoPage,
  loader: ({ params }) => {
    const idx = Number(params.id);
    if (!Number.isInteger(idx) || idx < 0 || idx >= photos.length) throw notFound();
    return { idx };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl font-display uppercase">Foto não encontrada</h1>
      <Link
        to="/produto-final-galeria"
        className="font-mono text-[11px] uppercase tracking-[0.3em] underline"
      >
        Voltar à galeria
      </Link>
    </div>
  ),
  head: () => ({
    meta: [{ title: "Produto final — Foto · Street Haus" }],
  }),
});

function GaleriaFotoPage() {
  const { idx } = Route.useLoaderData();
  const photo = photos[idx];

  return (
    <div className="min-h-screen bg-bauhaus-black flex flex-col">
      <div className="p-4 md:p-6">
        <Link
          to="/produto-final-galeria"
          className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-paper/80 hover:text-bauhaus-paper transition-colors"
        >
          <span aria-hidden="true">←</span> Voltar
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <img
          src={photo.url}
          alt=""
          className="max-h-[85vh] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}
