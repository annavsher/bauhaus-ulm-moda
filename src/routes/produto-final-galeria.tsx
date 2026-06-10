import { createFileRoute, Link } from "@tanstack/react-router";
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
import galeria22 from "@/assets/galeria-pf-22.png.asset.json";
import galeria23 from "@/assets/galeria-pf-23.png.asset.json";
import galeria24 from "@/assets/galeria-pf-24.png.asset.json";
import galeria25 from "@/assets/galeria-pf-25.png.asset.json";
import galeria26 from "@/assets/galeria-pf-26.png.asset.json";
import galeria27 from "@/assets/galeria-pf-27.png.asset.json";
import galeria28 from "@/assets/galeria-pf-28.png.asset.json";
import galeria29 from "@/assets/galeria-pf-29.png.asset.json";
import galeria30 from "@/assets/galeria-pf-30.png.asset.json";

export const Route = createFileRoute("/produto-final-galeria")({
  component: ProdutoFinalGaleria,
  head: () => ({
    meta: [
      { title: "Produto Final — Galeria · ULM Mondrian System" },
      {
        name: "description",
        content:
          "Galeria completa do produto final: a jaqueta ULM Mondrian System fotografada em detalhe e em movimento.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

// Ordem embaralhada (determinística) — compartilhada com /galeria-foto/$id
export const photos = [
  galeria17, galeria3, galeria25, galeria8, galeria14, galeria28, galeria1,
  galeria22, galeria11, galeria6, galeria19, galeria30, galeria4, galeria26,
  galeria13, galeria9, galeria21, galeria16, galeria2, galeria27, galeria12,
  galeria5, galeria23, galeria18, galeria10, galeria29, galeria7, galeria20,
  galeria15, galeria24,
];

function ProdutoFinalGaleria() {
  return (
    <div className="min-h-screen bg-background text-foreground grid-bauhaus">
      {/* HERO */}
      <header className="border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">
          <Link
            to="/"
            hash="produto-final"
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-paper/80 hover:text-bauhaus-paper transition-colors"
          >
            <span aria-hidden="true">←</span> Voltar
          </Link>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-paper/80">
            Galeria
          </p>
          <h1 className="mt-4 font-display uppercase leading-[0.9] tracking-tight text-[clamp(2.5rem,8vw,6rem)]">
            Produto final
          </h1>
        </div>
      </header>

      {/* GRID */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {photos.map((p, i) => (
              <Link
                key={i}
                to="/galeria-foto/$id"
                params={{ id: String(i) }}
                aria-label={`Abrir foto ${i + 1} do produto final`}
                className="relative w-full aspect-[3/4] overflow-hidden border border-bauhaus-black bg-muted group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bauhaus-blue"
              >
                <img
                  src={p.url}
                  alt={`ULM Mondrian System — galeria do produto final ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
