import schlemmer1 from "@/assets/schlemmer-1.jpg";
import schlemmer2 from "@/assets/schlemmer-2.jpg";
import schlemmerFig from "@/assets/schlemmer-fig.jpg";
import yslMondrian from "@/assets/ysl-mondrian.jpg";
import yslMondrian2 from "@/assets/ysl-mondrian-2.jpg";
import yslMondrian3 from "@/assets/ysl-mondrian-3.jpg";
import yslMondrian4 from "@/assets/ysl-mondrian-4.jpg";
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
import feiningerCathedral from "@/assets/feininger-cathedral.jpg.asset.json";
import modernChurchTower from "@/assets/modern-church-tower.jpg.asset.json";
import bauhausDessauPhoto from "@/assets/bauhaus-dessau-photo.jpg.asset.json";
import feiningerPortrait from "@/assets/feininger-portrait.jpg.asset.json";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  title: string;
  year?: string;
  description: string;
};

export const photos: Record<string, Photo> = {
  "schlemmer-ballet": {
    id: "schlemmer-ballet",
    src: schlemmer1,
    alt: "Figurino do Ballet Triádico de Oskar Schlemmer",
    caption: "Ballet Triádico · 1922",
    title: "Ballet Triádico",
    year: "1922",
    description:
      "Apresentado em Stuttgart em 1922, Das Triadische Ballett de Oskar Schlemmer reduziu o corpo do bailarino a sólidos primários — esferas, cones, cilindros. Os figurinos não vestiam o corpo, eles o reconstruíam como arquitetura cinética, antecipando em décadas a moda conceitual de Cardin e Issey Miyake.",
  },
  "schlemmer-esfera": {
    id: "schlemmer-esfera",
    src: schlemmer2,
    alt: "Figura amarela esférica de Schlemmer",
    caption: "Esfera amarela",
    title: "A esfera amarela",
    description:
      "Uma das doze figuras do Ballet Triádico. A cor primária e a geometria absoluta dialogam diretamente com as pesquisas de Klee e Kandinsky na escola Bauhaus.",
  },
  "schlemmer-fig": {
    id: "schlemmer-fig",
    src: schlemmerFig,
    alt: "Figura espiral de Schlemmer",
    caption: "Schlemmer · Figura espiral",
    title: "Figura espiral",
    description:
      "Estudo de Schlemmer para o corpo humano em rotação. A espiral organiza o volume; o figurino vira um eixo arquitetônico que ocupa o espaço.",
  },
  "ysl-mondrian": {
    id: "ysl-mondrian",
    src: yslMondrian,
    alt: "Vestido Mondrian de Yves Saint Laurent",
    caption: "Coleção Outono · 1965",
    title: "Vestido Mondrian",
    year: "1965",
    description:
      "Apresentado no desfile de outono de 1965, o vestido tubular de jersey de lã traduzia as composições de Piet Mondrian em alta-costura. Linha ortogonal, cor primária pura, plano contra plano — a herança Bauhaus aplicada ao corpo.",
  },
  "ysl-mondrian-2": {
    id: "ysl-mondrian-2",
    src: yslMondrian2,
    alt: "Vestido tubular Yves Saint Laurent da coleção Mondrian (1965), em jersey de lã branco com grade preta ortogonal e um bloco vermelho deslocado para o quadril",
    caption: "Variação 01 · 1965",
    title: "Mondrian — Variação 01",
    year: "1965",
    description:
      "Variação da coleção Mondrian com um único bloco vermelho deslocado para o quadril. A grade preta organiza a silhueta; o vermelho rompe a simetria.",
  },
  "ysl-mondrian-3": {
    id: "ysl-mondrian-3",
    src: yslMondrian3,
    alt: "Vestido Yves Saint Laurent da coleção Mondrian (1965), com blocos chapados de amarelo e azul separados por linhas pretas sobre fundo branco",
    caption: "Variação 02 · 1965",
    title: "Mondrian — Variação 02",
    year: "1965",
    description:
      "Composição com blocos de amarelo e azul, mantendo o vocabulário cromático estrito de De Stijl e da Bauhaus: vermelho, amarelo, azul, preto e branco.",
  },
  "ysl-mondrian-4": {
    id: "ysl-mondrian-4",
    src: yslMondrian4,
    alt: "Vestido Yves Saint Laurent da coleção Mondrian (1965), branco com um único retângulo azul centralizado no torso e contorno preto",
    caption: "Variação 03 · 1965",
    title: "Mondrian — Variação 03",
    year: "1965",
    description:
      "Um único retângulo azul centralizado no torso. A peça radicaliza a economia visual — o gesto mínimo que define toda a peça.",
  },
  "ysl-archive": {
    id: "ysl-archive",
    src: yslArchive,
    alt: "Vestido YSL Mondrian no arquivo",
    caption: "YSL · 1965",
    title: "YSL — Arquivo",
    description:
      "Registro de arquivo do vestido Mondrian, hoje conservado em museus de moda em Paris e Nova York. Tornou-se ícone do encontro entre alta-costura e arte abstrata.",
  },
  "cardin-editorial": {
    id: "cardin-editorial",
    src: cardin3,
    alt: "Editorial Pierre Cardin",
    caption: "Editorial Cardin · 1968",
    title: "Editorial Cardin",
    year: "1968",
    description:
      "Editorial das Cosmocorps Collections de Pierre Cardin. As silhuetas projetadas como objetos arquitetônicos para o corpo encarnam a moda da era espacial — utilitária, futurista, geométrica.",
  },
  "cardin-cosmocorps": {
    id: "cardin-cosmocorps",
    src: cardin1,
    alt: "Vestido Cosmocorps de Cardin",
    caption: "Cosmocorps · 1967",
    title: "Cosmocorps",
    year: "1967",
    description:
      "Parte das Cosmocorps Collections (1964–69). Cardin trabalhou plissados rígidos, recortes circulares e vinil — vestindo o corpo como se fosse um módulo industrial.",
  },
  "cardin-vinil": {
    id: "cardin-vinil",
    src: cardin2,
    alt: "Vestido vinil vermelho Cardin",
    caption: "Vinil · 1968",
    title: "Vinil vermelho",
    year: "1968",
    description:
      "O vinil vermelho fechado em geometria pura. Cardin tratava o tecido sintético como uma matéria-prima legítima de alta-costura, ecoando a defesa Bauhaus do material industrial.",
  },
  "cardin-vinyl-detail": {
    id: "cardin-vinyl-detail",
    src: cardinVinyl,
    alt: "Detalhe vinil Cardin",
    caption: "Cardin · Vinil",
    title: "Detalhe — Vinil",
    description:
      "Detalhe construtivo de uma peça em vinil de Cardin. A costura aparente reforça a leitura da roupa como objeto montado, não drapeado.",
  },
  "dessau": {
    id: "dessau",
    src: dessau,
    alt: "Edifício Bauhaus em Dessau",
    caption: "Dessau · 1926",
    title: "Edifício Bauhaus, Dessau",
    year: "1926",
    description:
      "Sede projetada por Walter Gropius após a mudança da escola de Weimar para Dessau em 1925. O edifício em vidro, aço e concreto é um manifesto construído da pedagogia da escola.",
  },
  "klee": {
    id: "klee",
    src: klee,
    alt: "Estudo de cor de Paul Klee",
    caption: "Klee · Teoria da forma",
    title: "Paul Klee — Teoria da forma",
    description:
      "Klee foi mestre da Bauhaus entre 1921 e 1931. Seus cadernos sobre forma e cor sistematizaram, lado a lado com Kandinsky, a base teórica da escola.",
  },
  "itten": {
    id: "itten",
    src: itten,
    alt: "Roda de cores de Johannes Itten",
    caption: "Itten · Vorkurs",
    title: "Johannes Itten — Vorkurs",
    description:
      "Itten conduziu o lendário Vorkurs, o curso preliminar em que os alunos eram despidos de vícios acadêmicos para reaprender cor, forma, textura e material a partir do zero.",
  },
  "typography": {
    id: "typography",
    src: typography,
    alt: "Tipografia Universal de Herbert Bayer",
    caption: "Bayer · Universal",
    title: "Herbert Bayer — Universal",
    description:
      "Tipografia Universal desenhada por Herbert Bayer em Dessau (1925). Apenas minúsculas, formas geométricas reduzidas — uma proposta de alfabeto racional para a indústria.",
  },
  "breuer": {
    id: "breuer",
    src: breuer,
    alt: "Cadeira Wassily B3 de Marcel Breuer",
    caption: "Breuer · Cadeira B3",
    title: "Marcel Breuer — Cadeira B3",
    description:
      "A cadeira B3, depois apelidada de Wassily, foi a primeira a usar tubos de aço curvado. Breuer transformou um material industrial em mobiliário doméstico — princípio que migraria para a moda.",
  },
  "feininger-cathedral": {
    id: "feininger-cathedral",
    src: feiningerCathedral.url,
    alt: "Xilogravura A Catedral, de Lyonel Feininger",
    caption: "Feininger · A Catedral · 1919",
    title: "A Catedral",
    year: "1919",
    description:
      "Xilogravura de Lyonel Feininger que ilustrou a capa do Manifesto Bauhaus em 1919. A catedral gótica, coroada por três estrelas, encarnava o ideal de Gropius: a obra de arte total, em que arquitetura, pintura e escultura se reúnem como uma única construção do futuro.",
  },
  "modern-church-tower": {
    id: "modern-church-tower",
    src: modernChurchTower.url,
    alt: "Torre de igreja modernista em concreto e pedra",
    caption: "Torre modernista",
    title: "Torre modernista",
    description:
      "Campanário de linhas retas e volumes puros, herdeiro direto da racionalidade construtiva da Bauhaus. A geometria sóbria e a repetição modular das aberturas traduzem em arquitetura sacra o princípio de que a forma segue a função.",
  },
  "bauhaus-dessau-photo": {
    id: "bauhaus-dessau-photo",
    src: bauhausDessauPhoto.url,
    alt: "Edifício da Bauhaus em Dessau com a tipografia vertical na fachada",
    caption: "Bauhaus · Dessau",
    title: "Bauhaus, Dessau",
    description:
      "A icônica fachada do edifício de Dessau, com o letreiro vertical desenhado por Herbert Bayer. Projetado por Walter Gropius em 1925-26, o prédio em vidro, aço e concreto é o manifesto construído da escola.",
  },
  "feininger-portrait": {
    id: "feininger-portrait",
    src: feiningerPortrait.url,
    alt: "Retrato fotográfico de Lyonel Feininger em seu ateliê",
    caption: "Lyonel Feininger",
    title: "Lyonel Feininger",
    description:
      "Pintor e gravador alemão-americano, foi o primeiro mestre nomeado por Gropius na Bauhaus. Autor da xilogravura da Catedral, dirigiu a oficina de artes gráficas e permaneceu ligado à escola até seu fechamento.",
  },
};

export const photoIds = Object.keys(photos);
