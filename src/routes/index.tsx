import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { BauhausRule } from "@/components/BauhausRule";
import { BauhausComposition, SectionMarker } from "@/components/BauhausComposition";
import jaqueta from "@/assets/ulm-mondrian-system.png";
import jaquetaSketch from "@/assets/jaqueta-sketch.jpeg.asset.json";
import processoCriativo from "@/assets/processo-criativo.png.asset.json";
import bauhausSchool from "@/assets/bauhaus-school.png.asset.json";
import ulmSchool from "@/assets/ulm-school.png.asset.json";
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
import mondrian1 from "@/assets/mondrian-1.png.asset.json";
import mondrian2 from "@/assets/mondrian-2.png.asset.json";
import mondrian3 from "@/assets/mondrian-3.png.asset.json";
import mondrianPortrait from "@/assets/mondrian-portrait.png.asset.json";

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
    { id: "escola", label: "Bauhaus" },
    { id: "ulm", label: "Ulm" },
    { id: "mondrian", label: "Mondrian" },
    { id: "gestalt", label: "Gestalt" },
    { id: "schlemmer", label: "Schlemmer" },
    { id: "ysl", label: "YSL" },
    { id: "cardin", label: "Cardin" },
    { id: "jaqueta", label: "Jaqueta" },

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


      <section className="relative overflow-hidden border-b border-bauhaus-black">
        {/* Composition backdrops — figure/ground tension */}
        <BauhausComposition variant="a" pos="tr" opacity={18} className="hidden md:block" />
        <BauhausComposition variant="e" pos="bl" opacity={22} />

        {/* Subtle left-side Bauhaus/Ulm decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden md:block w-10 lg:w-16 xl:w-24 z-0"
        >
          <div className="absolute top-10 bottom-10 left-4 lg:left-6 w-px bg-bauhaus-black/25" />
          <svg
            className="absolute top-16 left-2 lg:left-3 opacity-30 text-bauhaus-black"
            width="36"
            height="48"
            viewBox="0 0 36 48"
            fill="none"
          >
            {[0, 12, 24, 36, 48].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="36" y2={y} stroke="currentColor" strokeWidth="0.5" />
            ))}
            {[0, 12, 24, 36].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="48" stroke="currentColor" strokeWidth="0.5" />
            ))}
          </svg>
          <div
            className="absolute top-1/3 left-5 lg:left-7 h-2 w-2"
            style={{ backgroundColor: "var(--bauhaus-red)" }}
          />
          <div
            className="absolute top-1/2 left-3 lg:left-4 h-5 w-5 rounded-full border"
            style={{ borderColor: "var(--bauhaus-blue)", opacity: 0.55 }}
          />
          <div
            className="absolute bottom-24 left-5 lg:left-7 h-10 w-[3px]"
            style={{ backgroundColor: "var(--bauhaus-yellow)", opacity: 0.75 }}
          />
          <div className="absolute bottom-8 left-2 lg:left-3 font-mono text-[9px] tracking-[0.3em] text-bauhaus-black/45 [writing-mode:vertical-rl] rotate-180">
            BAUHAUS · 1919
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl grid md:grid-cols-12 gap-0">
          {/* Side rail with oversized marker — vertical Bayer-style label */}
          <aside className="hidden lg:flex md:col-span-1 border-r border-bauhaus-black/30 items-start justify-center pt-10">
            <SectionMarker n="" label="Abertura" />
          </aside>
          <div className="md:col-span-7 lg:col-span-6 px-6 md:px-12 py-20 md:py-28 relative">
            {/* Block of red behind kicker */}
            <div className="absolute -left-2 md:left-6 top-16 h-12 w-12 md:h-16 md:w-16" style={{ backgroundColor: "var(--bauhaus-red)" }} aria-hidden />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.3em] mb-8 text-foreground pl-16 md:pl-20">
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
          </div>
          <div className="md:col-span-5 relative bg-bauhaus-paper border-t md:border-t-0 md:border-l border-bauhaus-black flex items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 md:h-32 md:w-32" style={{ backgroundColor: "var(--bauhaus-yellow)" }} aria-hidden />
            <div className="absolute bottom-0 left-0 h-20 w-20 md:h-28 md:w-28 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} aria-hidden />
          </div>
        </div>
      </section>

      <BauhausRule n="​" label="Escola" tone="paper" />

      {/* ESCOLA */}
      <section id="escola" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-paper">
        <BauhausComposition variant="b" pos="tr" opacity={14} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <SectionMarker n="01" label="A Escola" tone="red" />
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  A Escola
                </p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
                  A escola que unificou as artes.
                </h2>
                <figure className="mt-6 w-40 md:w-48 border border-bauhaus-black bg-bauhaus-paper">
                  <img
                    src={bauhausSchool.url}
                    alt="Edifício da Bauhaus em Dessau projetado por Walter Gropius"
                    className="block w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground px-2 py-2 border-t border-bauhaus-black">
                    Bauhaus · Dessau
                  </figcaption>
                </figure>
                <div className="mt-6 h-2 w-24" style={{ backgroundColor: "var(--bauhaus-blue)" }} aria-hidden />
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
              <p>
                A Bauhaus institucionalizou o design ao unificar arte e indústria sob uma lógica racional. <span className="text-foreground font-medium">Dieter Rams</span> tornou-se o maior herdeiro desse legado na Braun, provando que o design deve ser discreto, lógico e útil.
              </p>
              <p>
                Sua máxima, <span className="text-foreground font-medium">"Menos, porém melhor"</span>, evolui o "menos é mais" da Bauhaus ao propor que a forma desapareça em favor da função. Assim, Rams conectou o rigor acadêmico ao minimalismo industrial contemporâneo.
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
      <section id="ulm" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-background">
        <BauhausComposition variant="d" pos="bl" opacity={12} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <SectionMarker n="02" label="Ulm" tone="blue" />
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  Hochschule für Gestaltung
                </p>
                <h2 className="mt-4 mb-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.05] tracking-tight">
                  A Escola de Ulm: onde o design encontrou método.
                </h2>
                <figure className="mt-2 w-40 md:w-48 border border-bauhaus-black bg-bauhaus-paper">
                  <img
                    src={ulmSchool.url}
                    alt="Edifício da Hochschule für Gestaltung em Ulm"
                    className="block w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground px-2 py-2 border-t border-bauhaus-black">
                    HfG · Ulm
                  </figcaption>
                </figure>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--bauhaus-red)" }} />
                  <span className="h-3 w-3" style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
                  <span className="block h-px w-16 bg-bauhaus-black" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bauhaus-blue">
                    Ulm · 1953 — 1968
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-6 text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p>
                A Escola de Ulm é lembrada como herdeira da Bauhaus. No pós-guerra, a Ulm retomou o projeto interrompido quando os nazistas fecharam a Bauhaus, em 1933. O que era essa escola? Imagine um lugar onde arquitetos, designers, cineastas, cientistas e músicos dividem o mesmo corredor, reunidos pela ideia de que projetar objetos para o mundo industrial também era uma forma de reconstruir a sociedade.
              </p>
              <p>
                Foi assim que nasceu, na Alemanha de 1953, a{" "}
                <span className="text-foreground font-medium">Hochschule für Gestaltung</span>{" "}
                — a Escola Superior da Forma, na cidade de Ulm.
              </p>
              <p>
                Idealizada por{" "}
                <span className="text-foreground font-medium">Inge Aicher-Scholl</span>,{" "}
                <span className="text-foreground font-medium">Otl Aicher</span> e{" "}
                <span className="text-foreground font-medium">Max Bill</span>{" "}
                (ex-aluno da Bauhaus), a escola surgiu carregada de propósito: ajudar a construir uma sociedade mais democrática. Fundada por antifascistas, a escola foi sustentada nos primeiros anos por uma fundação criada em memória de Hans e Sophie Scholl, jovens executados pelo regime nazista.
              </p>
              <p>
                No início, a escola flertava com o espírito artístico da Bauhaus, mas logo criou sua própria identidade, pautada na ideia de que o designer é um membro de uma equipe, ao lado de engenheiros, cientistas e técnicos. Nascia ali o "modelo ulmiano", resumido no lema "da colher à cidade": pensar com o mesmo rigor o objeto mais simples e o desenho de uma cidade inteira. Dessa filosofia saíram trabalhos estudados até hoje, dos produtos da Braun ao logotipo da Lufthansa.
              </p>
              <p>
                A escola durou apenas quinze anos, fechando em 1968. Por suas salas passaram pouco mais de seiscentos estudantes, mas a Ulm deixou um legado: criou um jeito novo de pensar o design. Um design mais metódico, crítico e consciente; uma visão que ganhou o mundo. No Brasil, seus ecos aparecem na criação da Esdi, no Rio de Janeiro, e em nomes como{" "}
                <span className="text-foreground font-medium">Alexandre Wollner</span> e{" "}
                <span className="text-foreground font-medium">Geraldo de Barros</span>, que estudaram lá.
              </p>
              <p>
                A Ulm inaugurou a visão de que projetar bem é também um ato de responsabilidade com as pessoas e com o mundo.
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


      <BauhausRule n="​" label="Mondrian" tone="black" />

      {/* MONDRIAN */}
      <section
        id="mondrian"
        className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-paper"
      >
        {/* Mondrian / De Stijl backdrop — full-section neoplasticist composition */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] md:opacity-25"
        >
          {/* Color planes */}
          <rect x="0" y="0" width="22" height="34" fill="var(--bauhaus-red)" />
          <rect x="78" y="0" width="22" height="14" fill="var(--bauhaus-yellow)" />
          <rect x="78" y="66" width="22" height="34" fill="var(--bauhaus-blue)" />
          <rect x="0" y="86" width="14" height="14" fill="var(--bauhaus-yellow)" />
          <rect x="60" y="86" width="18" height="14" fill="var(--bauhaus-red)" />
          {/* Black orthogonal grid lines */}
          <line x1="22" y1="0" x2="22" y2="100" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <line x1="60" y1="0" x2="60" y2="100" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <line x1="78" y1="0" x2="78" y2="100" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="34" x2="100" y2="34" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="66" x2="100" y2="66" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="86" x2="100" y2="86" stroke="var(--bauhaus-black)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Paper veil to keep text readable over the composition */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--bauhaus-paper) 78%, transparent), color-mix(in oklab, var(--bauhaus-paper) 88%, transparent))" }}
          aria-hidden
        />
        {/* Accent edge strips */}
        <div className="absolute top-0 right-0 h-2 w-2/3" style={{ backgroundColor: "var(--bauhaus-black)" }} aria-hidden />
        <div className="absolute bottom-0 left-0 h-2 w-1/2" style={{ backgroundColor: "var(--bauhaus-black)" }} aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <SectionMarker n="03" label="Mondrian" tone="red" />
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  De Stijl · Neoplasticismo
                </p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
                  Piet{" "}
                  <span style={{ color: "var(--bauhaus-blue)" }}>Mondrian</span>.
                </h2>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-bauhaus-blue">
                  Amersfoort · 1872 — 1944
                </p>

                {/* Portrait — small editorial visual beneath the title */}
                <figure className="mt-8 max-w-[12rem] md:max-w-[14rem]">
                  <div className="relative border-2 border-bauhaus-black bg-bauhaus-paper">
                    <div
                      className="pointer-events-none absolute -top-2 -left-2 h-3 w-3"
                      style={{ backgroundColor: "var(--bauhaus-red)" }}
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -bottom-2 -right-2 h-3 w-6"
                      style={{ backgroundColor: "var(--bauhaus-yellow)" }}
                      aria-hidden
                    />
                    <img
                      src={mondrianPortrait.url}
                      alt="Retrato em preto e branco de Piet Mondrian"
                      width={448}
                      height={560}
                      loading="lazy"
                      className="block w-full h-auto grayscale"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Piet Mondrian · retrato
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 max-w-prose space-y-5 text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Piet Mondrian</span> (1872–1944) foi um pintor holandês e uma das principais referências da arte moderna. Suas obras são marcadas pelo uso de linhas pretas, formas geométricas e cores primárias, criando composições equilibradas e organizadas.
              </p>
              <p>
                Embora não tenha integrado a Bauhaus, suas ideias influenciaram diretamente o movimento ao defender a <span className="text-foreground font-medium">simplicidade</span>, a <span className="text-foreground font-medium">clareza visual</span> e a redução dos elementos ao essencial. Esses mesmos princípios também dialogam com a Escola de Ulm, que mais tarde aplicaria a lógica da organização e da racionalidade ao design de produtos e sistemas.
              </p>
              <p>
                O legado de Mondrian ultrapassou a pintura, tornando-se uma importante referência para a arquitetura, o design e a comunicação visual contemporânea.
              </p>
            </div>
          </div>

          {/* Photo gallery — smaller, balanced editorial scale */}
          <div className="mt-16 md:mt-24 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            <PhotoFrame
              src={mondrian1.url}
              alt="Composição de Piet Mondrian com blocos de cores primárias e linhas pretas ortogonais"
              caption="Composição · Mondrian"
              ratio="portrait"
            />
            <PhotoFrame
              src={mondrian2.url}
              alt="Obra neoplasticista de Mondrian com grade preta e retângulos vermelho, amarelo e azul"
              caption="Neoplasticismo · De Stijl"
              ratio="portrait"
            />
            <PhotoFrame
              src={mondrian3.url}
              alt="Pintura de Mondrian estruturada por linhas retas e planos de cor primária"
              caption="Forma e cor primária"
              ratio="portrait"
            />
          </div>
        </div>
      </section>


      <BauhausRule n="​" label="Gestalt" tone="paper" />


      {/* GESTALT — 8 leis aplicadas com paleta Bauhaus */}
      <section id="gestalt" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-background">
        <BauhausComposition variant="e" pos="tr" opacity={18} />
        <BauhausComposition variant="c" pos="bl" opacity={10} className="hidden md:block" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="md:sticky md:top-24">
                <SectionMarker n="03" label="Gestalt" tone="black" />
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-red">
                  Fundamentos
                </p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
                  As oito leis da <span style={{ color: "var(--bauhaus-red)" }}>Gestalt</span>.
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
              <div className="md:sticky md:top-24">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
                  Bauhaus & Moda
                </p>
                <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight">
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
      <section id="schlemmer" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-black text-bauhaus-paper">
        <BauhausComposition variant="e" pos="tr" opacity={22} />
        <div className="absolute top-0 left-0 h-20 w-1/3 md:w-1/4" style={{ backgroundColor: "var(--bauhaus-yellow)" }} aria-hidden />
        <div className="absolute bottom-0 right-0 h-3 w-1/2" style={{ backgroundColor: "var(--bauhaus-red)" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-6">
            <div className="mb-6"><SectionMarker n="04" label="Schlemmer" tone="yellow" /></div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--bauhaus-yellow)" }}>
              Oskar Schlemmer
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
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
      <section id="ysl" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-paper">
        {/* Mondrian-grid backdrop block */}
        <div className="absolute inset-y-0 right-0 w-1/3 hidden md:grid grid-rows-3 grid-cols-2 opacity-[0.10]" aria-hidden>
          <div style={{ backgroundColor: "var(--bauhaus-red)" }} />
          <div style={{ backgroundColor: "var(--bauhaus-paper)" }} />
          <div className="row-span-2" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
          <div style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
          <div style={{ backgroundColor: "var(--bauhaus-black)" }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="md:sticky md:top-24 relative">
              {/* Color frame behind image */}
              <div className="absolute -inset-3 md:-inset-5" style={{ backgroundColor: "var(--bauhaus-blue)" }} aria-hidden />
              <div className="relative">
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
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <SectionMarker n="05" label="YSL" tone="blue" />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bauhaus-blue">
              Yves Saint Laurent
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tight">
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
      <section id="cardin" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24 border-b border-bauhaus-black bg-bauhaus-yellow">
        <BauhausComposition variant="c" pos="bl" opacity={18} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <SectionMarker n="06" label="Cardin" tone="black" />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em]">
              Pierre Cardin
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.85] tracking-tight">
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
            <span style={{ color: "var(--bauhaus-yellow)" }}>Street Haus</span> apresentada anteriormente.
          </p>
        </div>
      </section>

      {/* PROTÓTIPO — texto à esquerda, imagem à direita */}
      <section id="jaqueta" className="border-b border-bauhaus-black bg-black text-bauhaus-paper scroll-mt-20 md:scroll-mt-24">
        <div className="mx-auto max-w-[90rem] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[100svh] py-12 md:py-0">
          {/* Texto */}
          <div className="flex flex-col justify-center order-1">
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 text-bauhaus-paper/80">
              Protótipo autoral · 2026
            </p>
            <h1 className="font-display uppercase leading-[0.82] tracking-[-0.04em] text-[clamp(3.5rem,11vw,11rem)] text-bauhaus-paper">
              <span className="block">STREET</span>
              <span className="block" style={{ color: "var(--bauhaus-red)" }}>HAUS</span>
            </h1>
          </div>

          {/* Imagem */}
          <div className="flex items-center justify-center order-2 md:-mr-12 lg:-mr-20">
            <img
              src={jaqueta}
              alt="Protótipo Street Haus — esboço da jaqueta autoral com blocos vermelho, azul e amarelo"
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[85vh] md:max-h-[92vh] object-contain"
            />
          </div>
        </div>
      </section>

      {/* PROTÓTIPO — PRINCÍPIOS + CORES */}
      <section className="border-b border-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-bauhaus-red">
              Princípios
            </p>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight">
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
                <li key={p.t} className="flex items-center gap-4 px-4 py-4 bg-background">
                  <span
                    className="h-5 w-5 shrink-0"
                    style={{
                      backgroundColor: p.c,
                      boxShadow: p.border ? "inset 0 0 0 1px var(--bauhaus-black)" : undefined,
                    }}
                  />
                  <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em]">
                    {p.t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6">
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-bauhaus-blue">
              Cores
            </p>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight">
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
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-center py-3 border-t border-bauhaus-black bg-background">
                    {c.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* PROTÓTIPO — SKETCH TÉCNICO */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-bauhaus-blue">
                Processo criativo
              </p>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight">
                Da ideia à prática.
              </h2>
              <p className="mt-6 max-w-sm text-lg md:text-xl leading-[1.7] text-muted-foreground">
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
                alt="Sketch técnico da jaqueta Street Haus — vistas frente e costas com a distribuição final dos blocos primários e ortogonais"
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
              <h2 className="mt-4 md:mt-6 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight">
                O produto final.
              </h2>
            </div>
            <div className="md:col-span-7 max-w-prose text-base md:text-lg leading-[1.7] text-muted-foreground">
              <p>
                Do desenho técnico à peça vestida: a jaqueta Street Haus
                construída e fotografada.
              </p>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="relative w-full aspect-[16/10] overflow-hidden border border-bauhaus-black bg-muted">
              <img
                src={produtoFinal1.url}
                alt="Jaqueta Street Haus — produto final 1"
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
                  alt={`Jaqueta Street Haus — produto final ${i + 2}`}
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

      {/* MANIFESTO — frases em destaque sobre fundo vermelho */}
      <section className="relative overflow-hidden border-b border-bauhaus-black bg-bauhaus-red">
        {/* Detalhes decorativos Bauhaus */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* círculo amarelo grande, topo-direita */}
          <span className="absolute -top-20 -right-20 h-72 w-72 md:h-96 md:w-96 rounded-full bg-bauhaus-yellow opacity-90" />
          {/* quadrado azul, inferior-esquerda */}
          <span className="absolute -bottom-16 -left-16 h-56 w-56 md:h-72 md:w-72 bg-bauhaus-blue opacity-95" />
          {/* triângulo preto, meio-direita */}
          <svg
            className="absolute right-8 md:right-24 bottom-10 md:bottom-16 w-28 md:w-40 h-28 md:h-40"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polygon points="0,100 100,100 50,0" fill="var(--bauhaus-black)" />
          </svg>
          {/* pequeno quadrado amarelo, topo-esquerda */}
          <span className="absolute top-10 left-10 h-10 w-10 md:h-14 md:w-14 bg-bauhaus-yellow" />
          {/* pequeno círculo preto */}
          <span className="absolute top-1/2 left-1/3 h-6 w-6 md:h-8 md:w-8 rounded-full bg-bauhaus-black" />
          {/* linhas pretas horizontais finas */}
          <span className="absolute top-1/4 left-0 right-0 h-px bg-bauhaus-black opacity-40" />
          <span className="absolute bottom-1/3 left-0 right-0 h-px bg-bauhaus-black opacity-30" />
          {/* linha preta vertical */}
          <span className="absolute top-0 bottom-0 left-1/4 w-px bg-bauhaus-black opacity-30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">

          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="h-3 w-3 bg-bauhaus-paper" aria-hidden="true" />
            <p className="font-mono text-[11px] md:text-sm uppercase tracking-[0.3em] text-bauhaus-paper">
              Manifesto · Frases-chave
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight text-bauhaus-paper mb-12 md:mb-16 max-w-3xl">
            A forma, o corpo e a geometria a serviço da vida.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-bauhaus-paper border border-bauhaus-paper">
            {[
              {
                accent: "bg-bauhaus-red",
                de: "Form folgt Funktion, Kunst trifft Nutzen.",
                pt: "A forma segue a função, a arte encontra a utilidade.",
              },
              {
                accent: "bg-bauhaus-blue",
                de: "Architektur für den Körper, Ordnung für den Alltag.",
                pt: "Arquitetura para o corpo, ordem para o cotidiano.",
              },
              {
                accent: "bg-bauhaus-yellow",
                de: "Die Reinheit der Geometrie, die dem Leben dient.",
                pt: "A pureza da geometria que serve à vida.",
              },
            ].map((q, i) => (
              <figure
                key={i}
                className="bg-bauhaus-paper p-8 md:p-10 flex flex-col justify-between gap-8"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 ${q.accent}`} aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    0{i + 1} / 03
                  </span>
                </div>
                <blockquote className="font-display text-xl md:text-2xl leading-[1.15] tracking-tight text-foreground">
                  “{q.de}”
                </blockquote>
                <figcaption className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground border-t border-bauhaus-black pt-4">
                  {q.pt}
                </figcaption>
              </figure>
            ))}
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
              <h2 className="mt-4 md:mt-6 font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] tracking-tight">
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

      {/* PROCESSO CRIATIVO — texto + nova imagem */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-bauhaus-red">
                Conceito
              </p>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight">
                Processo<br />criativo.
              </h2>
              <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 bg-bauhaus-red" />
                <span className="h-3 w-3 rounded-full bg-bauhaus-blue" />
                <span className="h-3 w-3 bg-bauhaus-yellow" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-base md:text-lg leading-[1.8] text-muted-foreground max-w-prose">
            <p>
              A evolução do design moderno no século XX conecta arte e funcionalidade em uma trajetória que passa por <span className="text-foreground font-medium">Piet Mondrian</span>, pela <span className="text-foreground font-medium">Bauhaus</span> e pela <span className="text-foreground font-medium">Escola de Ulm</span>. A jaqueta <span className="text-foreground font-medium">Street Haus</span> materializa essa herança, transformando conceitos históricos em uma peça utilitária e contemporânea.
            </p>
            <p>
              Projetada como um sistema modular de painéis brancos delimitados por eixos ortogonais pretos, a peça incorpora blocos de cores primárias que remetem diretamente ao purismo visual de Mondrian. A simplicidade formal e a ausência de ornamentos seguem os princípios funcionais defendidos pela Bauhaus.
            </p>
            <p>
              A influência da Escola de Ulm aparece na organização rigorosa da grade, onde a geometria deixa de ser apenas um elemento visual e passa a estruturar a própria construção da peça. Como camada final, legendas técnicas em alemão, inspiradas na tipografia Universal de <span className="text-foreground font-medium">Herbert Bayer</span>, reforçam a racionalidade e a clareza visual do projeto.
            </p>
            <p>
              A Street Haus reúne, assim, os principais pilares do design moderno: geometria, funcionalidade e organização racional.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-12 pb-16 md:pb-24">
          <figure className="relative w-full aspect-[16/10] overflow-hidden border border-bauhaus-black bg-bauhaus-paper">
            <img
              src={processoCriativo.url}
              alt="Estudo do processo criativo da jaqueta Street Haus — referências Bauhaus, Ulm e Mondrian aplicadas à construção da peça"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Street Haus · Bauhaus + Ulm + Mondrian
          </figcaption>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="border-b border-bauhaus-black bg-bauhaus-paper text-bauhaus-black">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          {/* Cabeçalho com elementos geométricos */}
          <header className="grid grid-cols-12 gap-4 items-end mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3" style={{ backgroundColor: "var(--bauhaus-red)" }} />
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
                <div className="h-3 w-3 rotate-45" style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  §
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95]">
                Referências
              </h2>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Fontes · ABNT NBR 6023
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square border border-bauhaus-black" />
                <div className="aspect-square" style={{ backgroundColor: "var(--bauhaus-red)" }} />
                <div className="aspect-square border border-bauhaus-black" />
                <div className="aspect-square" style={{ backgroundColor: "var(--bauhaus-black)" }} />
                <div className="aspect-square" style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
                <div className="aspect-square border border-bauhaus-black" />
                <div className="aspect-square" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
                <div className="aspect-square border border-bauhaus-black" />
              </div>
            </div>
          </header>

          {/* Linha divisória dupla */}
          <div className="border-t-2 border-bauhaus-black" />
          <div className="border-t border-bauhaus-black mt-1" />

          {/* Painel de referências */}
          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-6 gap-y-8">
            {[
              {
                tag: "01",
                tema: "Bauhaus",
                url: "https://www.todamateria.com.br/escola-de-bauhaus/",
              },
              {
                tag: "02",
                tema: "Bauhaus",
                url: "https://conhecimentocientifico.r7.com/movimento-bauhaus/",
              },
              {
                tag: "03",
                tema: "Escola de Ulm",
                url: "https://enciclopedia.itaucultural.org.br/instituicoes/75180-hochschule-fur-gestaltung-ulm-hfg",
              },
              {
                tag: "04",
                tema: "Piet Mondrian",
                url: "https://www.todamateria.com.br/piet-mondrian-obras-biografia/",
              },
              {
                tag: "05",
                tema: "Piet Mondrian",
                url: "https://artsandculture.google.com/entity/piet-mondrian/m0crnb5?hl=pt-BR",
              },
              {
                tag: "06",
                tema: "Piet Mondrian",
                url: "https://arteeartistas.com.br/piet-mondrian-biografia-obras-analise-obras-primas",
              },
              {
                tag: "07",
                tema: "Dieter Rams",
                url: "https://abra.com.br/artigos/dieter-rams-o-homem-que-criou-os-principios-do-bom-design",
              },
              {
                tag: "08",
                tema: "Gestalt",
                url: "https://maestrovirtuale.com/teoria-da-gestalt-leis-e-principios-fundamentais/",
              },
              {
                tag: "09",
                tema: "Gestalt",
                url: "https://www.psicanaliseclinica.com/leis-da-gestalt/",
              },
              {
                tag: "10",
                tema: "Pierre Cardin",
                url: "https://www.theatlantic.com/entertainment/archive/2019/07/pierre-cardin-future-fashion-brooklyn-museum/594577/",
              },
              {
                tag: "11",
                tema: "The Triadic Ballet",
                url: "https://www.theatlantic.com/entertainment/archive/2019/07/pierre-cardin-future-fashion-brooklyn-museum/594577/",
              },
              {
                tag: "12",
                tema: "YSL",
                url: "https://kelseyyrose.substack.com/p/mondrian-ysl",
              },
            ].map((ref) => (
              <article
                key={ref.tag}
                className="col-span-12 md:col-span-6 grid grid-cols-[auto_1fr] gap-4 border-t border-bauhaus-black pt-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground pt-1">
                  {ref.tag}
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {ref.tema}
                  </p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] md:text-[13px] leading-relaxed text-bauhaus-black break-words underline decoration-bauhaus-black/30 hover:decoration-bauhaus-black transition-colors"
                  >
                    {ref.url}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Rodapé da seção */}
          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-8 border-t border-bauhaus-black pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Compilação editorial · Bauhaus + Ulm · 2026
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end gap-2">
              <div className="h-4 w-12" style={{ backgroundColor: "var(--bauhaus-red)" }} />
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: "var(--bauhaus-blue)" }} />
              <div className="h-4 w-4" style={{ backgroundColor: "var(--bauhaus-yellow)" }} />
            </div>
          </div>
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
