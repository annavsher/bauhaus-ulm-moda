import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { BauhausRule } from "@/components/BauhausRule";
import jaqueta from "@/assets/ulm-mondrian-system.jpeg";
import jaquetaSketch from "@/assets/jaqueta-sketch.jpeg.asset.json";
import heroBauhaus from "@/assets/hero-bauhaus.jpg";
import schlemmer1 from "@/assets/schlemmer-1.jpg";
import schlemmer2 from "@/assets/schlemmer-2.jpg";
import schlemmerFig from "@/assets/schlemmer-fig.jpg";
import yslMondrian from "@/assets/ysl-mondrian.jpg";
import yslArchive from "@/assets/ysl-archive.jpg";
import cardin1 from "@/assets/cardin-1.jpg";
import cardin2 from "@/assets/cardin-2.jpg";
import cardin3 from "@/assets/cardin-3.jpg";
import cardinVinyl from "@/assets/cardin-vinyl.jpg";
import klee from "@/assets/klee.jpg";
import itten from "@/assets/itten.jpg";
import breuer from "@/assets/breuer.jpg";
import typography from "@/assets/typography.jpg";
import dessau from "@/assets/dessau.jpg";
import yslMondrian2 from "@/assets/ysl-mondrian-2.jpg";
import yslMondrian3 from "@/assets/ysl-mondrian-3.jpg";
import yslMondrian4 from "@/assets/ysl-mondrian-4.jpg";
import feiningerCathedral from "@/assets/feininger-cathedral.jpg.asset.json";
import modernChurchTower from "@/assets/modern-church-tower.jpg.asset.json";
import bauhausDessauPhoto from "@/assets/bauhaus-dessau-photo.jpg.asset.json";
import feiningerPortrait from "@/assets/feininger-portrait.jpg.asset.json";
import produtoFinal1 from "@/assets/produto-final-novo-1.jpeg.asset.json";
import produtoFinal2 from "@/assets/produto-final-novo-2.jpeg.asset.json";
import produtoFinal3 from "@/assets/produto-final-novo-3.jpeg.asset.json";
import produtoFinal4 from "@/assets/produto-final-novo-4.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bauhaus & Moda — Da Escola de Design às Passarelas" },
      {
        name: "description",
        content:
          "Como a Bauhaus moldou a moda do século XX: de Oskar Schlemmer a Yves Saint Laurent e Pierre Cardin.",
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

function Index() {
  const sections = [
    { id: "escola", label: "Escola" },
    { id: "ulm", label: "Ulm" },
    { id: "gestalt", label: "Gestalt" },
    { id: "schlemmer", label: "Schlemmer" },
    { id: "ysl", label: "YSL" },
    { id: "cardin", label: "Cardin" },

  ];
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const visibility = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visibility.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        });
        let topId: string | null = null;
        let topRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });
        setActive(topId ?? "");
      },
      { rootMargin: "-15% 0px -80% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground grid-bauhaus">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-bauhaus-black bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto max-w-6xl px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex">
              <div className="h-5 w-5" style={{ backgroundColor: "var(--bauhaus-red)" }} />
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
              <div
                className="h-5 w-5"
                style={{ background: "linear-gradient(135deg, var(--bauhaus-yellow) 50%, transparent 50%)" }}
              />
            </div>
            <span className="font-display text-xs uppercase tracking-[0.25em]">Bauhaus / Moda</span>
          </div>
          <nav className="flex items-center gap-4 md:gap-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`hidden md:inline-flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{ backgroundColor: "var(--bauhaus-red)" }}
                  />
                  <span className={isActive ? "border-b border-bauhaus-red pb-0.5" : ""}>
                    {s.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* PROTÓTIPO — HERO com título sobre a imagem */}
      <section className="border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full min-h-[100svh] md:min-h-[90vh] bg-bauhaus-paper">
            <img
              src={jaqueta}
              alt="Protótipo ULM Mondrian System — esboço da jaqueta autoral com blocos vermelho, azul e amarelo"
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="absolute inset-0 h-full w-full object-contain p-2 sm:p-4 md:p-6"
            />
            {/* overlay para legibilidade do título */}
            <div className="absolute inset-0 bg-gradient-to-b from-bauhaus-black/85 via-bauhaus-black/40 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-start">
              <div className="mx-auto max-w-6xl w-full px-6 md:px-12 pt-10 md:pt-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-4 md:mb-6 text-bauhaus-paper/80">
                  Protótipo autoral · 2026
                </p>
                <h1 className="font-display uppercase leading-[0.85] tracking-tight text-[clamp(3.5rem,12vw,9rem)] text-bauhaus-paper drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  <span className="block">
ULM</span>
                  <span className="block" style={{ color: "var(--bauhaus-red)" }}>Mondrian</span>
                  <span className="block">System</span>
                </h1>
                <p className="mt-6 md:mt-8 max-w-md text-base md:text-lg leading-relaxed text-bauhaus-paper/90 text-black bg-transparent">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTÓTIPO — PRINCÍPIOS + CORES */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
              Princípios
            </p>
            <h2 className="mt-6 text-3xl md:text-4xl uppercase leading-[0.95]">
              Cinco regras de projeto.
            </h2>
            {/* PROXIMIDADE: itens colados num único bloco; SEMELHANÇA: mesma forma+tamanho em todos */}
            <ul className="mt-10 border border-bauhaus-black divide-y divide-bauhaus-black/20">
              {[
                { c: "var(--bauhaus-red)", t: "função antes da forma" },
                { c: "var(--bauhaus-blue)", t: "composição racional" },
                { c: "var(--bauhaus-black)", t: "modularidade" },
                { c: "var(--bauhaus-paper)", t: "clareza visual", border: true },
                { c: "var(--bauhaus-red)", t: "redução essencial" },
              ].map((p) => (
                <li key={p.t} className="flex items-center gap-4 px-4 py-3 bg-background">
                  <span
                    className="h-4 w-4 shrink-0"
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
            {/* PROXIMIDADE: paleta como uma única banda contínua de amostras coladas */}
            <ul className="mt-10 grid grid-cols-5 border border-bauhaus-black">
              {[
                { c: "#0A0A0A", n: "preto" },
                { c: "#FFFFFF", n: "branco" },
                { c: "#D72638", n: "vermelho" },
                { c: "#1E4D9B", n: "azul" },
                { c: "#F4C82D", n: "amarelo" },
              ].map((c, i) => (
                <li key={c.n} className={`flex flex-col ${i < 4 ? "border-r border-bauhaus-black" : ""}`}>
                  <span
                    className="block aspect-square w-full"
                    style={{ backgroundColor: c.c }}
                  />
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center py-2 border-t border-bauhaus-black bg-background">
                    {c.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROTÓTIPO — DA ESCOLA PARA O CORPO */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                O projeto
              </p>
              <h2 className="mt-6 text-3xl md:text-5xl uppercase leading-[0.95]">
                Da escola para o corpo.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-6 md:space-y-7 text-base md:text-lg leading-[1.75] md:leading-[1.8] text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">ULM Mondrian System</span>{" "}
              parte de uma pergunta simples: o que aconteceria se a grade de
              Mondrian, o rigor sistêmico da Escola de Ulm e as cores primárias
              e ângulos exatos de Bauhaus fossem aplicados a uma peça
              utilitária, vestida todos os dias?
            </p>
            <p>
              A jaqueta é construída como uma{" "}
              <span className="text-foreground font-medium">grade modular</span> de
              painéis brancos cortados por linhas pretas ortogonais. Utilizando
              blocos de cor primária — vermelho, azul, amarelo, característica das obras de Piet Mondrian.&nbsp;{"\n\n\n"}

              Segue a ideia de funcionalidade, simplicidade e pouca decoração, defendida por Mondrian.{"\n\n\n"}

              Já com a aproximação ao aprendizado da Ulm, a organização em grade, com ordem visual e a funcionalidade estética e estrutural da jaqueta foi essencial para realização do protótipo.
            </p>
            <p>
              Adicionadas no meio do processo, as legendas em alemão herdam a tipografia Universal de Herbert Bayer.
            </p>
            <p className="border-l-2 border-bauhaus-red pl-4 md:pl-6 space-y-2">
              <span className="block italic text-foreground">"Form folgt Funktion, Kunst trifft Nutzen."</span>
              <span className="block text-sm md:text-base">(A forma segue a função, a arte encontra a utilidade).</span>
              <span className="block italic text-foreground mt-2">"Architektur für den Körper, Ordnung für den Alltag."</span>
              <span className="block text-sm md:text-base">(Arquitetura para o corpo, ordem para o cotidiano).</span>
              <span className="block italic text-foreground mt-2">"Die Reinheit der Geometrie, die dem Leben dient."</span>
              <span className="block text-sm md:text-base">(A pureza da geometria que serve à vida).</span>
            </p>
            <p>
              Com isso, apesar da inspiração visual pertencer às composições geométricas de Piet Mondrian, a ligação com Bauhaus e Ulm é clara: com o uso de cores primárias e organização visual foi possível unir arte, funcionalidade e design em uma única peça.
            </p>
            <p>
              Por tanto faz referência à obra artística de Mondrian, transforma os conceitos em uma peça de uso cotidiano, promovendo a ideia de que a forma segue a função.
            </p>
          </div>
        </div>
      </section>

      {/* PROTÓTIPO — SKETCH TÉCNICO */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
                Processo criativo
              </p>
              <h2 className="mt-6 text-3xl md:text-5xl uppercase leading-[0.95]">
                Da ideia à prática.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                Tradução do estudo em desenho técnico — base para o corte e a
                montagem da peça, com a distribuição final dos blocos primários
                e ortogonais.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative w-full aspect-[16/10] bg-bauhaus-paper border border-bauhaus-black/10 flex items-center justify-center overflow-hidden">
              <img
                src={jaquetaSketch.url}
                alt="Sketch técnico da jaqueta ULM Mondrian System — vistas frente e costas com a distribuição final dos blocos primários e ortogonais"
                className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTO FINAL */}
      <section id="produto-final" className="border-b border-bauhaus-black bg-background scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-10 md:mb-14">
            <div className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                Resultado
              </p>
              <h2 className="mt-4 md:mt-6 text-3xl md:text-5xl uppercase leading-[0.95]">
                O produto final.
              </h2>
            </div>
            <div className="md:col-span-7 max-w-prose text-base md:text-lg leading-[1.7] text-muted-foreground">
              <p>
                Do desenho técnico à peça vestida: a jaqueta ULM Mondrian System
                construída e fotografada.
              </p>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="relative w-full aspect-[16/10] overflow-hidden border border-bauhaus-black bg-muted">
              <img
                src={produtoFinal1.url}
                alt="Jaqueta ULM Mondrian System — produto final 1"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[produtoFinal2, produtoFinal3, produtoFinal4].map((p, i) => (
              <div
                key={`grid-${i}`}
                className="relative w-full aspect-[3/4] overflow-hidden border border-bauhaus-black bg-muted"
              >
                <img
                  src={p.url}
                  alt={`Jaqueta ULM Mondrian System — produto final ${i + 2}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-14 flex justify-center">
            <Link
              to="/produto-final-galeria"
              className="inline-flex items-center gap-3 border border-bauhaus-black px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground hover:bg-bauhaus-black hover:text-bauhaus-paper transition-colors"
            >
              Galeria produto final <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* PROTÓTIPO — A JAQUETA PELAS OITO LEIS DA GESTALT */}
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
                Cada lei abaixo isola um princípio aplicado à construção da peça —
                vermelho, azul, amarelo e preto sobre branco funcionam como vocabulário
                comum, costurando Bauhaus e Gestalt no mesmo gesto.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bauhaus-black border border-bauhaus-black">
            {[
              {
                n: "01",
                t: "Proximidade",
                d: "Blocos amarelos e azul agrupados.",
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
                n: "02",
                t: "Semelhança",
                d: "Retângulos, vermelho e azul repetem-se.",
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
                n: "03",
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
                n: "04",
                t: "Fechamento",
                d: "Produz contornos que não estão explicitamente desenhados.",
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
                n: "05",
                t: "SEGREGAÇÃO",
                d: "Blocos coloridos destacam-se sobre a base branca da peça.",
                svg: (
                  <g>
                    <rect x={0} y={0} width={100} height={60} fill="var(--bauhaus-paper)" stroke="var(--bauhaus-black)" strokeWidth={0.5} />
                    <rect x={20} y={15} width={25} height={30} fill="var(--bauhaus-red)" />
                    <circle cx={70} cy={30} r={18} fill="var(--bauhaus-blue)" />
                  </g>
                ),
              },
              {
                n: "06",
                t: "UNIDADE",
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
                n: "07",
                t: "Pregnância",
                d: "A silhueta reduz-se à geometria simples.",
                svg: (
                  <g>
                    <rect x={15} y={15} width={30} height={30} fill="var(--bauhaus-red)" />
                    <circle cx={70} cy={30} r={15} fill="var(--bauhaus-blue)" />
                  </g>
                ),
              },
              {
                n: "08",
                t: "UNIFICAÇÃO",
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
              <li key={item.t} className="bg-background p-5 md:p-6 flex flex-col gap-4">
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

      {/* PONTE — do protótipo de volta ao ensaio */}
      <section className="bg-bauhaus-black text-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-32 md:py-44 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.4em] opacity-70 mb-10 md:mb-14 whitespace-pre-line md:text-lg">
            ↓ MAS DE ONDE VEM ESSA IDEIA?
          </p>
          <p className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.05]">
            
          </p>
          <p className="mt-14 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed opacity-80">
            
          </p>
        </div>
        <div className="mx-auto max-w-4xl border-b border-bauhaus-paper/20" />
      </section>

      {/* HERO */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-0">
          <div className="md:col-span-7 px-6 md:px-12 py-20 md:py-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-8 text-muted-foreground">
              Weimar · Dessau · Berlim — 1919 / 1933
            </p>
            <h2 className="font-display uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
              <span className="block">Bauhaus</span>
              <span
                className="block italic font-normal text-[0.9em] -mt-1"
                style={{ fontFamily: "'Instrument Serif', serif", color: "var(--bauhaus-red)" }}
              >
                veste
              </span>
              <span className="block leading-[1.05]">
                o{" "}
                <span className="whitespace-nowrap">
                  <span
                    className="relative inline-block px-[0.18em] pt-[0.18em] pb-[0.04em] align-baseline"
                    style={{
                      backgroundColor: "var(--bauhaus-blue)",
                      color: "var(--bauhaus-paper)",
                      boxShadow: "0.18em 0.18em 0 var(--bauhaus-yellow)",
                    }}
                  >
                    século
                  </span>
                  <span style={{ color: "var(--bauhaus-red)" }}>.</span>
                </span>
              </span>
            </h2>
            <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
              ​
            </p>
          </div>
          <div className="md:col-span-5 relative bg-bauhaus-paper border-t md:border-t-0 md:border-l border-bauhaus-black flex items-center justify-center p-6 md:p-8">
            <img
              src={heroBauhaus}
              alt="Composição geométrica Bauhaus — círculo, quadrado e triângulo"
              width={1024}
              height={1024}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        </div>
      </section>

      <BauhausRule n="​" label="Escola" tone="paper" />

      {/* ESCOLA */}
      <section id="escola" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  A Escola
                </p>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95]">
                  A escola que unificou as artes.
                </h2>
                <p className="mt-4 text-lg md:text-xl italic font-normal" style={{ fontFamily: "'Instrument Serif', serif", color: "var(--bauhaus-blue)" }}>
                  ​
                </p>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Considerada a primeira escola de design do mundo, Bauhaus, fundada por <span className="text-foreground font-medium">Walter Gropius</span>, deu início na cidade de Weimar, Alemanha. Apesar de uma duração curta de 14 anos (1919-1933), continua sendo reconhecida como uma das escolas mais importantes de arquitetura, design e arte, com o diferencial de que Bauhaus não era somente um estilo e sim um movimento. Foi resultado da fusão entre Academia de Belas Artes e a Escola de Artes aplicadas de Weimar.
              </p>
              <p>
                A instituição surgiu após a Primeira Guerra Mundial (1914-1918), tinha como base a reintegração das artes e artesanatos durante um período de depressão mundial.
              </p>
              <p>
                Com influência direta a arte e estética moderna, é considerada uma escola de artes aplicadas. Um dos objetivos de Bauhaus era reunir as arte, que antes foram divididas pelos acadêmicos.
              </p>
              <p>
                O segundo diretor de Bauhaus foi <span className="text-foreground font-medium">Hannes Meyer</span> (a partir de 1928) o terceiro e último diretor foi <span className="text-foreground font-medium">Ludwig Mies</span> (de 1930 a diante).
              </p>
              <p>
                Após a abertura em Weimar estabeleceu sede em Dessau e Berlin, devido à perseguição do partido nazistas à instituição.
              </p>
              <p>
                As mudanças da escola foram apenas um prenúncio do fechamento. Após se estabelecer em uma fábrica de telefones em Berlim, em 1933 foi forçada a fechar suas portas diante da acusação dos nazistas de propagar uma arte degenerada e anti-germânica.
              </p>
              <p>
                Seus mestres levaram a pedagogia até Chicago, Tel Aviv, Ulm e São Paulo. Em apenas quatorze anos, reescreveu a gramática visual do século.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-bauhaus-black/20 flex flex-col">
            {[
              { n: "1919", t: "Fundação em Weimar" },
              { n: "1925", t: "Mudança para Dessau" },
              { n: "1933", t: "Fechada pelo regime" },
            ].map((i) => (
              <div
                key={i.n}
                className="flex items-baseline gap-6 md:gap-10 py-6 md:py-8 border-b border-bauhaus-black/15 last:border-b-0"
              >
                <div className="font-display text-2xl md:text-3xl text-muted-foreground tabular-nums">
                  {i.n}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {i.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <BauhausRule n="​" label="Ulm" tone="black" />

      {/* ULM — HERDEIRA DA BAUHAUS */}
      <section id="ulm" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-background">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  Hochschule für Gestaltung
                </p>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95]">
                  Ulm: a Bauhaus do pós-guerra.
                </h2>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-bauhaus-blue">
                  Ulm · 1953 — 1968
                </p>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-6 text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p>
                Em 1953, quando a Bauhaus já era memória, nasceu em Ulm, Alemanha, a{" "}
                <span className="text-foreground font-medium">Hochschule für Gestaltung</span>{" "}
                (Escola Superior de Design). Fundada por{" "}
                <span className="text-foreground font-medium">Inge Aicher-Scholl</span>,{" "}
                <span className="text-foreground font-medium">Otl Aicher</span> e{" "}
                <span className="text-foreground font-medium">Max Bill</span> — este último ex-aluno da Bauhaus —,
                a escola herdou a pedagogia de Weimar e Dessau, mas a levou adiante.
              </p>
              <p>
                Onde a Bauhaus pregava a unificação das artes, Ulm propunha algo mais radical:
                o design como <span className="text-foreground font-medium">ciência</span>.
                A forma não deveria ser ditada pelo gosto do designer, mas pelo sistema —
                análise, método, rigor. O rigor matemático e o pensamento sistêmico
                substituíram o gesto expressionista.
              </p>
              <p>
                A pedagogia de Ulm foi decisiva para o que viria a ser o{" "}
                <span className="text-foreground font-medium">design industrial</span>{" "}
                e o <span className="text-foreground font-medium">design gráfico</span> modernos.
                Cores primárias, grade modular, tipografia sem serifa, fundamento científico:
                tudo ecoa Bauhaus, mas recalibrado para uma era de máquinas e comunicação de massa.
              </p>
              <p>
                A escola fechou em 1968, como sua antecessora, vítima de pressões políticas.
                Mas seu legado vive em cada interface limpa, em cada identidade visual racional,
                em cada peça de roupa pensada como sistema — como a{" "}
                <span className="text-foreground font-medium">ULM Mondrian System</span>{" "}
                apresentada neste ensaio.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-bauhaus-black/20 flex flex-col">
            {[
              { n: "1953", t: "Fundação em Ulm" },
              { n: "1955", t: "Max Bill assume a direção" },
              { n: "1968", t: "Fechamento da escola" },
            ].map((i) => (
              <div
                key={i.n}
                className="flex items-baseline gap-6 md:gap-10 py-6 md:py-8 border-b border-bauhaus-black/15 last:border-b-0"
              >
                <div className="font-display text-2xl md:text-3xl text-muted-foreground tabular-nums">
                  {i.n}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {i.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <BauhausRule n="​" label="Gestalt" tone="paper" />

      {/* GESTALT — 8 leis aplicadas com paleta Bauhaus */}
      <section id="gestalt" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-background">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  Fundamentos
                </p>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95]">
                  As oito leis da Gestalt.
                </h2>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-bauhaus-blue">
                  Berlim · 1910 — 1930
                </p>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-5 text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p>
                A escola de <span className="text-foreground font-medium">psicologia da Gestalt</span> —
                contemporânea da Bauhaus — descreveu como o olho organiza o
                caos visual em <span className="text-foreground font-medium">unidades coerentes</span>.
              </p>
              <p>
                Cada bloco abaixo é uma demonstração da lei correspondente,
                desenhada apenas com vermelho, azul, amarelo, preto e branco,
                a paleta restrita da Bauhaus operando como instrumento.
              </p>
            </div>
          </div>

          {/* 8 demonstrações */}
          <ul className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-bauhaus-black border border-bauhaus-black">
            {/* 1. PROXIMIDADE */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <g fill="var(--bauhaus-black)">
                    <circle cx="20" cy="25" r="5" /><circle cx="32" cy="25" r="5" /><circle cx="44" cy="25" r="5" />
                    <circle cx="68" cy="25" r="5" /><circle cx="80" cy="25" r="5" />
                    <circle cx="20" cy="55" r="5" /><circle cx="32" cy="55" r="5" /><circle cx="44" cy="55" r="5" />
                    <circle cx="68" cy="55" r="5" /><circle cx="80" cy="55" r="5" />
                    <circle cx="20" cy="80" r="5" /><circle cx="32" cy="80" r="5" /><circle cx="44" cy="80" r="5" />
                    <circle cx="68" cy="80" r="5" /><circle cx="80" cy="80" r="5" />
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">Proximidade</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  O QUE ESTÁ PERTO, LÊ-SE COMO PARTE DO MESMO GRUPO.
                </p>
              </div>
            </li>

            {/* 2. SEMELHANÇA */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  {[15, 35, 55, 75].map((y, r) =>
                    [15, 35, 55, 75].map((x, c) => {
                      const isRed = c === 1;
                      return isRed ? (
                        <rect key={`${r}-${c}`} x={x - 5} y={y - 5} width="10" height="10" fill="var(--bauhaus-red)" />
                      ) : (
                        <circle key={`${r}-${c}`} cx={x} cy={y} r="5" fill="var(--bauhaus-black)" />
                      );
                    }),
                  )}
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">Semelhança</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  FORMAS PARECIDAS SE UNEM NATURALMENTE.
                </p>
              </div>
            </li>

            {/* 3. CONTINUIDADE */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <path d="M5,80 Q50,5 95,80" fill="none" stroke="var(--bauhaus-blue)" strokeWidth="3" />
                  <path d="M5,20 L95,80" fill="none" stroke="var(--bauhaus-red)" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">Continuidade</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  o olho segue a linha contínua.
                </p>
              </div>
            </li>

            {/* 4. FECHAMENTO */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <g fill="none" stroke="var(--bauhaus-black)" strokeWidth="4">
                    <path d="M20,20 L50,20" /><path d="M65,20 L80,20 L80,40" />
                    <path d="M80,55 L80,80 L55,80" /><path d="M40,80 L20,80 L20,55" />
                    <path d="M20,40 L20,30" />
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">Fechamento</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  produz contornos que não estão explicitamente desenhados.
                </p>
              </div>
            </li>

            {/* 5. FIGURA / FUNDO */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-black flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <rect width="100" height="100" fill="var(--bauhaus-black)" />
                  <circle cx="50" cy="50" r="32" fill="var(--bauhaus-yellow)" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">SEGREGAÇÃO</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  o objeto se destaca do espaço.
                </p>
              </div>
            </li>

            {/* 6. DESTINO COMUM */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <g stroke="var(--bauhaus-black)" strokeWidth="1.5" markerEnd="url(#a)">
                    <defs>
                      <marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 z" fill="var(--bauhaus-red)" />
                      </marker>
                    </defs>
                    <line x1="15" y1="20" x2="85" y2="20" />
                    <line x1="15" y1="40" x2="85" y2="40" />
                    <line x1="15" y1="60" x2="85" y2="60" />
                    <line x1="15" y1="80" x2="85" y2="80" />
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">UNIDADE</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  ELEMENTOS VISTOS COMO UM TODO COERENTE.
                </p>
              </div>
            </li>

            {/* 7. PREGNÂNCIA / BOA FORMA */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <rect x="10" y="10" width="35" height="35" fill="var(--bauhaus-red)" />
                  <circle cx="72" cy="28" r="18" fill="var(--bauhaus-blue)" />
                  <polygon points="10,90 45,55 45,90" fill="var(--bauhaus-yellow)" />
                  <rect x="55" y="55" width="35" height="35" fill="var(--bauhaus-black)" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">Pregnância</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  a forma simples vence o ruído.
                </p>
              </div>
            </li>

            {/* 8. REGIÃO COMUM */}
            <li className="bg-background p-5 md:p-7 flex flex-col gap-4">
              <div className="aspect-square bg-bauhaus-paper flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" aria-hidden>
                  <rect x="8" y="20" width="38" height="60" fill="none" stroke="var(--bauhaus-blue)" strokeWidth="2" />
                  <rect x="54" y="20" width="38" height="60" fill="none" stroke="var(--bauhaus-red)" strokeWidth="2" />
                  <circle cx="18" cy="40" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="36" cy="40" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="18" cy="60" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="36" cy="60" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="64" cy="40" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="82" cy="40" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="64" cy="60" r="4" fill="var(--bauhaus-black)" />
                  <circle cx="82" cy="60" r="4" fill="var(--bauhaus-black)" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bauhaus-red">​</p>
                <h3 className="mt-2 font-display text-base md:text-lg uppercase">UNIFICAÇÃO</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  ELEMENTOS JUNTOS CRIAM UMA ESTRUTURA ÚNICA
                </p>
              </div>
            </li>
          </ul>

          <p className="mt-12 md:mt-16 max-w-2xl font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground leading-relaxed">
            ↓ A SEGUIR, AS LEIS APLICACADAS AO CORPO: SCHLEMMER, YSL E CARDIN.
          </p>
        </div>
      </section>

      <BauhausRule n="​" label="Bauhaus & Moda" tone="paper" />

      {/* BAUHAUS & MODA — ponte */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
                  Bauhaus & Moda
                </p>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95]">
                  ​Da escola para a moda.
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
              <p>
                ​
              </p>
              <p>
                Três princípios apresentados na escola são: a redução geométrica (círculo, triângulo e quadrado como vocabulário); aplicação de cores primárias puras e o uso coerente de linhas nítidas.
              </p>
              <p>
                Nas próximas seções, três exemplos que representam essa herança serão apresentados: Oskar Schleimmer, Yves Saint Laurent e Pierre Cardin
              </p>
            </div>
          </div>
        </div>
      </section>

      <BauhausRule n="​" label="Schlemmer" tone="black" />

      {/* SCHLEMMER */}
      <section id="schlemmer" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--bauhaus-yellow)" }}>
              Oskar Schlemmer
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl uppercase">
              O corpo como{" "}
              <span style={{ color: "var(--bauhaus-yellow)" }}>geometria</span>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed opacity-80 max-w-xl">
              Em <em>Das Triadische Ballett</em> (1922), Schlemmer transformou
              dançarinos em esferas, cones e espirais. Foi o primeiro a tratar
              a roupa como arquitetura habitada — uma ideia que fertilizou toda
              a moda conceitual que viria depois.
            </p>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-6">
            <PhotoFrame id="schlemmer-ballet" src={schlemmer1} alt="Figurino do Ballet Triádico" caption="Ballet Triádico · 1922" width={768} height={1024} />
            <PhotoFrame id="schlemmer-esfera" src={schlemmer2} alt="Esfera amarela de Schlemmer" caption="Esfera amarela" width={768} height={1024} />
          </div>
        </div>
      </section>

      <BauhausRule n="​" label="YSL" tone="paper" />

      {/* YSL */}
      <section id="ysl" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="md:sticky md:top-24">
              <PhotoFrame
                id="ysl-mondrian"
                src={yslMondrian}
                alt="Vestido Mondrian de YSL"
                caption="Coleção Outono · 1965"
                width={768}
                height={1024}
              />
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
              Yves Saint Laurent
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl uppercase">
              A coleção{" "}
              <span style={{ color: "var(--bauhaus-blue)" }}>Mondrian</span>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Em 1965, Yves Saint Laurent (YSL) apresentou seis vestidos de jersey de lã que
              traduziam as composições de Piet Mondrian em silhuetas tubulares.
              A ligação com a Bauhaus é direta: cor pura, linha ortogonal, plano
              contra plano. O vestido tornou-se ícone — costura como pintura
              habitável.
            </p>
            <div className="mt-10 grid grid-cols-4 gap-px bg-bauhaus-black">
              {[
                { c: "#D72638", n: "Vermelho" },
                { c: "#F4C82D", n: "Amarelo" },
                { c: "#1E4D9B", n: "Azul" },
                { c: "#0A0A0A", n: "Preto" },
              ].map((c) => (
                <div key={c.c} className="bg-background">
                  <div className="aspect-square" style={{ backgroundColor: c.c }} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] p-2 text-center text-muted-foreground">
                    {c.n}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Outras variações da coleção
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <PhotoFrame id="ysl-mondrian-2" src={yslMondrian2} alt="Vestido YSL Mondrian de 1965 com grade preta e bloco vermelho no quadril" caption="Variação 01 · 1965" ratio="portrait" width={768} height={1024} />
                <PhotoFrame id="ysl-mondrian-3" src={yslMondrian3} alt="Vestido YSL Mondrian de 1965 com blocos amarelo e azul sobre fundo branco" caption="Variação 02 · 1965" ratio="portrait" width={768} height={1024} />
                <PhotoFrame id="ysl-mondrian-4" src={yslMondrian4} alt="Vestido YSL Mondrian de 1965 com um único retângulo azul centralizado no torso" caption="Variação 03 · 1965" ratio="portrait" width={768} height={1024} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BauhausRule n="​" label="Cardin" tone="yellow" />

      {/* CARDIN */}
      <section id="cardin" className="scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-yellow">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em]">
              Pierre Cardin
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl uppercase">
              Futurismo geométrico.
            </h2>
            <p className="mt-8 text-lg leading-relaxed">
              Cardin levou o vocabulário Bauhaus à era espacial. Suas{" "}
              <em>Cosmocorps Collections</em> (1964–69) usavam vinil, círculos
              recortados e plissados rígidos — vestidos projetados como objetos
              arquitetônicos para o corpo.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <PhotoFrame
              id="cardin-editorial"
              src={cardin3}
              alt="Editorial Pierre Cardin"
              caption="Editorial Cardin · 1968"
              ratio="landscape"
              width={1200}
              height={800}
              priority
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <PhotoFrame id="cardin-cosmocorps" src={cardin1} alt="Vestido Cosmocorps" caption="Cosmocorps · 1967" ratio="square" width={600} height={600} />
            <PhotoFrame id="cardin-vinil" src={cardin2} alt="Vestido vinil vermelho Cardin" caption="Vinil · 1968" ratio="square" width={600} height={600} />
          </div>
        </div>
      </section>





      <BauhausRule n="​" label="Manifesto" tone="black" />

      {/* MANIFESTO */}
      <section className="border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] mb-10 opacity-70">
            Manifesto
          </p>
          <p className="font-display text-3xl md:text-5xl uppercase leading-[1.05]">
            “A forma final de toda atividade criativa é a <span style={{ color: "var(--bauhaus-red)" }}>construção</span>.”
          </p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] opacity-70">
            Walter Gropius · 1919
          </p>
          <p className="mt-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-80">
            É essa construção — função, geometria e cor primária — que reaparece no protótipo da jaqueta{" "}
            <span style={{ color: "var(--bauhaus-yellow)" }}>ULM Mondrian System</span> apresentada anteriormente.
          </p>
        </div>
      </section>

      {/* VOLTAR AO INÍCIO */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          <button
            type="button"
            onClick={() => {
              const reduce =
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }}
            className="inline-flex items-center gap-3 border border-bauhaus-black px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground hover:bg-bauhaus-black hover:text-bauhaus-paper transition-colors"
          >
            <span aria-hidden="true">↑</span> Voltar ao início
          </button>
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
            Projeto editorial · 1919 — 2026
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] md:text-right text-muted-foreground">
            {"\n"}
          </p>
        </div>
      </footer>
    </div>
  );
}
