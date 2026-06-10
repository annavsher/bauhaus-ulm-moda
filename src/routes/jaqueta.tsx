import { createFileRoute, Link } from "@tanstack/react-router";
import jaqueta from "@/assets/ulm-mondrian-system.jpeg";
import jaquetaSketch from "@/assets/jaqueta-sketch.jpeg.asset.json";
import { useReveal } from "@/hooks/use-reveal";


export const Route = createFileRoute("/jaqueta")({
  component: JaquetaPage,
  head: () => ({
    meta: [
      { title: "ULM Mondrian System — Jaqueta protótipo · Bauhaus & Moda" },
      {
        name: "description",
        content:
          "Protótipo autoral de jaqueta inspirado na HfG Ulm e em Piet Mondrian: função, composição racional e redução essencial.",
      },
      { property: "og:title", content: "ULM Mondrian System — Jaqueta protótipo" },
      {
        property: "og:description",
        content:
          "Protótipo autoral: jaqueta com blocos primários, modularidade e clareza visual herdadas da Bauhaus e da Escola de Ulm.",
      },
      { property: "og:image", content: jaqueta },
    ],
  }),
});

const principios = [
  { c: "var(--bauhaus-red)", t: "função antes da forma" },
  { c: "var(--bauhaus-blue)", t: "composição racional" },
  { c: "var(--bauhaus-black)", t: "modularidade" },
  { c: "var(--bauhaus-paper)", t: "clareza visual", border: true },
  { c: "var(--bauhaus-red)", t: "redução essencial" },
];

const cores = [
  { c: "#0A0A0A", n: "preto" },
  { c: "#FFFFFF", n: "branco", border: true },
  { c: "#D72638", n: "vermelho" },
  { c: "#1E4D9B", n: "azul ulm" },
  { c: "#F4C82D", n: "amarelo" },
];

function JaquetaPage() {
  const stickyTitle = useReveal<HTMLDivElement>();
  const p1 = useReveal<HTMLParagraphElement>();
  const p2 = useReveal<HTMLParagraphElement>();
  const p3 = useReveal<HTMLParagraphElement>();
  const p4 = useReveal<HTMLParagraphElement>();

  const revealBase =
    "transition-all duration-700 ease-out motion-reduce:transition-none";
  const hidden = "opacity-0 translate-y-4";
  const shown = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-bauhaus-black bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex">
              <div className="h-5 w-5" style={{ backgroundColor: "var(--bauhaus-red)" }} />
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
              <div
                className="h-5 w-5"
                style={{ background: "linear-gradient(135deg, var(--bauhaus-yellow) 50%, transparent 50%)" }}
              />
            </div>
            <span className="font-display text-xs uppercase tracking-[0.25em]">Bauhaus / Moda</span>
          </Link>
          <nav className="flex items-center gap-5 md:gap-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-bauhaus-black px-3 py-2 hover:bg-bauhaus-black hover:text-bauhaus-paper transition-colors"
              aria-label="Voltar ao início"
            >
              <span aria-hidden="true">←</span> Voltar ao início
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-0">
          <div className="md:col-span-6 px-6 md:px-12 py-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-8 text-muted-foreground">
              Protótipo autoral · 2026
            </p>
            <h1 className="font-display uppercase leading-[0.85] tracking-tight text-[clamp(2.25rem,6vw,5rem)]">
              <span className="block">ULM</span>
              <span className="block" style={{ color: "var(--bauhaus-red)" }}>Mondrian</span>
              <span className="block">System</span>
            </h1>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
              inspiração: HfG Ulm + Piet Mondrian
            </p>
            <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
              Um protótipo de jaqueta que materializa, no corpo, os princípios
              herdados da Bauhaus e radicalizados pela <span className="text-foreground font-medium">Escola
              Superior de Design de Ulm</span>: sistema, função e composição visual.
              Cada bloco de cor é uma decisão construtiva — nada decorativo.
            </p>
          </div>
          <div className="md:col-span-6 relative bg-bauhaus-paper border-t md:border-t-0 md:border-l border-bauhaus-black flex flex-col p-6 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red mb-6">
              Processo criativo
            </p>
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-bauhaus-paper border border-bauhaus-black/10 flex items-center justify-center overflow-hidden">
              <img
                src={jaqueta}
                alt="Processo criativo do protótipo ULM Mondrian System — esboços da jaqueta com blocos vermelho, azul e amarelo, vistas frente e costas"
                className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
              />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue mt-8 mb-6">
              Sketch técnico · da ideia à prática
            </p>
            <div className="relative w-full aspect-[16/9] bg-bauhaus-paper border border-bauhaus-black/10 flex items-center justify-center overflow-hidden">
              <img
                src={jaquetaSketch.url}
                alt="Sketch técnico da jaqueta ULM Mondrian System — vistas frente e costas com a distribuição final dos blocos primários e ortogonais"
                className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
              />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Tradução do estudo anterior em desenho técnico — base para o corte e a montagem da peça.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS + CORES */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
              Princípios
            </p>
            <h2 className="mt-6 text-3xl md:text-4xl uppercase leading-[0.95]">
              Cinco regras de projeto.
            </h2>
            <ul className="mt-10 space-y-5">
              {principios.map((p) => (
                <li key={p.t} className="flex items-center gap-5">
                  <span
                    className="h-5 w-5 shrink-0"
                    style={{
                      backgroundColor: p.c,
                      boxShadow: p.border ? "inset 0 0 0 1px var(--bauhaus-black)" : undefined,
                    }}
                  />
                  <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em]">
                    {p.t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
              Cores
            </p>
            <h2 className="mt-6 text-3xl md:text-4xl uppercase leading-[0.95]">
              Paleta restrita.
            </h2>
            <ul className="mt-10 space-y-5">
              {cores.map((c) => (
                <li key={c.n} className="flex items-center gap-5">
                  <span
                    className="h-5 w-5 shrink-0"
                    style={{
                      backgroundColor: c.c,
                      boxShadow: c.border ? "inset 0 0 0 1px var(--bauhaus-black)" : undefined,
                    }}
                  />
                  <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em]">
                    {c.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJETO */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper scroll-smooth">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div
              ref={stickyTitle.ref}
              className={`sticky top-16 md:top-24 z-10 -mx-6 md:mx-0 px-6 md:px-0 py-4 md:py-0 bg-bauhaus-paper/95 backdrop-blur supports-[backdrop-filter]:bg-bauhaus-paper/80 border-b md:border-0 border-bauhaus-black/10 ${revealBase} ${stickyTitle.visible ? shown : hidden}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                O projeto
              </p>
              <h2 className="mt-3 md:mt-6 text-2xl sm:text-3xl md:text-5xl uppercase leading-[0.95]">
                Da escola para o corpo.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-6 md:space-y-7 text-base md:text-lg leading-[1.75] md:leading-[1.8] text-muted-foreground">
            <p ref={p1.ref} className={`${revealBase} ${p1.visible ? shown : hidden}`}>
              <span className="text-foreground font-medium">ULM Mondrian System</span>{" "}
              parte de uma pergunta simples: o que aconteceria se a grade de
              Mondrian, o rigor sistêmico da Escola de Ulm e as cores primárias
              e ângulos exatos de Bauhaus fossem aplicados a uma peça
              utilitária, vestida todos os dias?
            </p>
            <p ref={p2.ref} className={`${revealBase} delay-75 ${p2.visible ? shown : hidden}`}>
              A jaqueta é construída como uma <span className="text-foreground font-medium">grade modular</span> de
              painéis brancos cortados por linhas pretas ortogonais. Os blocos
              de cor primária — vermelho, azul, amarelo — funcionam como
              marcadores funcionais: indicam zíperes, bolsos cargo e pontos de
              ajuste. Nada é ornamento.
            </p>
            <p ref={p3.ref} className={`${revealBase} delay-100 ${p3.visible ? shown : hidden}`}>
              As legendas em alemão (<em>funktion · klarheit · ordnung</em>)
              herdam a tipografia Universal de Herbert Bayer e o uso apenas
              de minúsculas, em diálogo direto com as <em>variações</em> que
              YSL propôs em 1965.
            </p>
            <p ref={p4.ref} className={`${revealBase} delay-150 ${p4.visible ? shown : hidden}`}>
              É, em síntese, o ensaio anterior aplicado ao próprio guarda-roupa:
              a continuação prática do que <Link to="/" className="underline">esta
              pesquisa</Link> apresenta sobre Schlemmer, Saint Laurent e Cardin.
            </p>
          </div>
        </div>
      </section>

      {/* GESTALT — a jaqueta lida pelas oito leis */}
      <section className="border-b border-bauhaus-black bg-background">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-10 md:mb-14">
            <div className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                Leitura visual
              </p>
              <h2 className="mt-4 md:mt-6 text-3xl md:text-5xl uppercase leading-[0.95]">
                A jaqueta pelas <span style={{ color: "var(--bauhaus-blue)" }}>oito leis</span> da Gestalt.
              </h2>
            </div>
            <div className="md:col-span-7 max-w-prose text-base md:text-lg leading-[1.7] text-muted-foreground">
              <p>
                Cada bloco abaixo isola um princípio aplicado à construção da peça —
                vermelho, azul, amarelo e preto sobre papel funcionam como vocabulário
                comum, costurando Bauhaus e Gestalt no mesmo gesto.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bauhaus-black border border-bauhaus-black">
            {[
              {
                n: "​",
                t: "Proximidade",
                d: "Bolsos próximos formam um conjunto visual coeso na composição.",
                svg: (
                  <g>
                    {[12, 24, 36].map((cx) => (
                      <circle key={`a${cx}`} cx={cx} cy={30} r={4} fill="var(--bauhaus-black)" />
                    ))}
                    {[64, 76, 88].map((cx) => (
                      <circle key={`b${cx}`} cx={cx} cy={30} r={4} fill="var(--bauhaus-black)" />
                    ))}
                  </g>
                ),
              },
              {
                n: "​",
                t: "Semelhança",
                d: "Mesmos quadrados primários repetem-se nas zonas funcionais.",
                svg: (
                  <g>
                    {[10, 30, 50, 70, 90].map((x, i) => (
                      <rect
                        key={x}
                        x={x - 5}
                        y={25}
                        width={10}
                        height={10}
                        fill={i % 2 === 0 ? "var(--bauhaus-red)" : "var(--bauhaus-blue)"}
                      />
                    ))}
                  </g>
                ),
              },
              {
                n: "​",
                t: "Continuidade",
                d: "A curva da gola conduz o olhar pela silhueta até a barra.",
                svg: (
                  <g>
                    <path d="M5 50 Q 50 5 95 50" stroke="var(--bauhaus-blue)" strokeWidth={2} fill="none" />
                    <line x1={5} y1={50} x2={95} y2={50} stroke="var(--bauhaus-red)" strokeWidth={2} />
                  </g>
                ),
              },
              {
                n: "​",
                t: "Fechamento",
                d: "Bolsos sugeridos por cantos: o olho completa o retângulo.",
                svg: (
                  <g stroke="var(--bauhaus-black)" strokeWidth={2} fill="none">
                    <path d="M15 18 L15 10 L35 10" />
                    <path d="M65 10 L85 10 L85 18" />
                    <path d="M15 42 L15 50 L35 50" />
                    <path d="M65 50 L85 50 L85 42" />
                  </g>
                ),
              },
              {
                n: "​",
                t: "Figura/Fundo",
                d: "Bloco amarelo destaca-se sobre a base preta da peça.",
                svg: (
                  <g>
                    <rect x={0} y={0} width={100} height={60} fill="var(--bauhaus-black)" />
                    <circle cx={50} cy={30} r={18} fill="var(--bauhaus-yellow)" />
                  </g>
                ),
              },
              {
                n: "​",
                t: "Destino comum",
                d: "Costuras paralelas indicam a mesma direção de movimento.",
                svg: (
                  <g stroke="var(--bauhaus-red)" strokeWidth={2}>
                    <line x1={10} y1={15} x2={85} y2={15} />
                    <line x1={10} y1={30} x2={85} y2={30} />
                    <line x1={10} y1={45} x2={85} y2={45} />
                    <polygon points="85,12 92,30 85,48" fill="var(--bauhaus-red)" stroke="none" />
                  </g>
                ),
              },
              {
                n: "​",
                t: "Pregnância",
                d: "A silhueta reduz-se às formas mais simples possíveis.",
                svg: (
                  <g>
                    <rect x={15} y={15} width={30} height={30} fill="var(--bauhaus-red)" />
                    <circle cx={70} cy={30} r={15} fill="var(--bauhaus-blue)" />
                    <polygon points="55,50 85,50 70,20" fill="var(--bauhaus-yellow)" opacity={0.0} />
                  </g>
                ),
              },
              {
                n: "​",
                t: "Região comum",
                d: "Painéis de cor delimitam áreas como territórios distintos da peça.",
                svg: (
                  <g>
                    <rect x={8} y={10} width={36} height={40} fill="none" stroke="var(--bauhaus-blue)" strokeWidth={2} />
                    <rect x={56} y={10} width={36} height={40} fill="none" stroke="var(--bauhaus-blue)" strokeWidth={2} />
                    <circle cx={26} cy={30} r={3} fill="var(--bauhaus-black)" />
                    <circle cx={74} cy={30} r={3} fill="var(--bauhaus-black)" />
                  </g>
                ),
              },
            ].map((item) => (
              <li key={item.n} className="bg-background p-5 md:p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] bg-bauhaus-black text-bauhaus-paper px-2 py-1">
                    {item.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    lei
                  </span>
                </div>
                <div className="w-full aspect-[5/3] bg-bauhaus-paper border border-bauhaus-black/20 flex items-center justify-center">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {item.svg}
                  </svg>
                </div>
                <div>
                  <h3 className="font-display uppercase text-base md:text-lg tracking-tight">
                    {item.t}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-muted-foreground">
                    {item.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA / VOLTAR */}
      <section className="border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] mb-8 opacity-70">
            Encerramento
          </p>
          <p className="font-display text-2xl md:text-4xl uppercase leading-[1.05]">
            Da Bauhaus ao corpo contemporâneo — uma ideia que continua a{" "}
            <span style={{ color: "var(--bauhaus-yellow)" }}>vestir o século</span>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bauhaus-paper text-bauhaus-black border-t border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="flex">
              <div className="h-5 w-5" style={{ backgroundColor: "var(--bauhaus-red)" }} />
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
              <div className="h-5 w-5" style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
            </div>
            <span className="font-display text-xs uppercase tracking-[0.25em]">Bauhaus / Moda</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-center text-muted-foreground">
            ULM Mondrian System · Protótipo autoral
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] md:text-right text-muted-foreground">
            funktion · klarheit · ordnung
          </p>
        </div>
      </footer>
    </div>
  );
}
