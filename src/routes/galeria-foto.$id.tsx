import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import galeria1 from "@/assets/galeria-pf-1.jpeg.asset.json";
import galeria2 from "@/assets/galeria-pf-2.jpeg.asset.json";
import galeria3 from "@/assets/galeria-pf-3.jpeg.asset.json";
import galeria4 from "@/assets/galeria-pf-4.jpeg.asset.json";
import galeria5 from "@/assets/galeria-pf-5.jpeg.asset.json";
import galeria6 from "@/assets/galeria-pf-6.jpeg.asset.json";
import galeria7 from "@/assets/galeria-pf-7.jpeg.asset.json";
import galeria8 from "@/assets/galeria-pf-8.jpeg.asset.json";
import galeria9 from "@/assets/galeria-pf-9.jpeg.asset.json";
import galeria10 from "@/assets/galeria-pf-10.jpeg.asset.json";
import galeria11 from "@/assets/galeria-pf-11.jpeg.asset.json";
import galeria12 from "@/assets/galeria-pf-12.jpeg.asset.json";
import galeria13 from "@/assets/galeria-pf-13.jpeg.asset.json";
import galeria14 from "@/assets/galeria-pf-14.jpeg.asset.json";
import galeria15 from "@/assets/galeria-pf-15.jpeg.asset.json";
import galeria16 from "@/assets/galeria-pf-16.jpeg.asset.json";
import galeria17 from "@/assets/galeria-pf-17.jpeg.asset.json";
import galeria18 from "@/assets/galeria-pf-18.jpeg.asset.json";
import galeria19 from "@/assets/galeria-pf-19.jpeg.asset.json";
import galeria20 from "@/assets/galeria-pf-20.jpeg.asset.json";
import galeria21 from "@/assets/galeria-pf-21.jpeg.asset.json";


const photos = [
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  galeria5,
  galeria6,
  galeria7,
  galeria8,
  galeria9,
  galeria10,
  galeria11,
  galeria12,
  galeria13,
  galeria14,
  galeria15,
  galeria16,
  galeria17,
  galeria18,
  galeria19,
  galeria20,
  galeria21,
  galeria22,
  galeria23,
  galeria24,
];

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
    meta: [{ title: "Produto final — Foto · ULM Mondrian System" }],
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
