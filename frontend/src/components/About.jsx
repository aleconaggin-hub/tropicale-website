const IMG_1 =
  "https://images.unsplash.com/photo-1543797414-a0c3ad076f7c?auto=format&fit=crop&w=1400&q=85";
const IMG_2 =
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85";

const values = [
  {
    n: "01",
    title: "Curadoria de verdade",
    body:
      "Cada roteiro nasce depois de pisar no destino. Nada de catálogo: recomendamos só o que amaríamos viver de novo.",
  },
  {
    n: "02",
    title: "Feito à mão",
    body:
      "Do café da manhã ao pôr do sol reservado, ajustamos cada dia à sua história — família, casal, aventura ou pausa.",
  },
  {
    n: "03",
    title: "Suporte 24/7",
    body:
      "Um número, um WhatsApp, alguém do outro lado — em qualquer fuso, em qualquer imprevisto. Simples assim.",
  },
];

export const About = () => {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="relative bg-cream py-24 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-10 bg-navy/60" />
            <span className="overline text-navy/70">Sobre a Tropicalê</span>
          </div>

          <h2
            data-testid="about-title"
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-navy font-light"
          >
            Viajar é uma <br />
            <span className="italic-display text-orange-brand">forma de escutar</span> <br />
            o mundo.
          </h2>

          <p className="mt-10 text-base lg:text-lg text-navy/75 max-w-xl leading-relaxed">
            A Tropicalê nasceu em São Paulo com uma ideia simples: viagens têm que
            parecer com quem viaja. Somos uma agência boutique brasileira que desenha
            roteiros sob medida, sem letras miúdas — do samba ao sushi, do sertão
            à Sardenha.
          </p>

          <p className="mt-6 text-base lg:text-lg text-navy/75 max-w-xl leading-relaxed">
            Trabalhamos com uma rede de parceiros locais em mais de 60 países.
            Isso significa hospedagens escondidas, chefs que abrem a cozinha, guias
            que contam histórias — o tipo de acesso que só chega para quem tem gente
            de confiança do outro lado.
          </p>

          <div className="mt-12 grid gap-8">
            {values.map((v) => (
              <div key={v.n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-gold/40 pt-6">
                <div className="font-display italic-display text-2xl text-orange-brand">{v.n}</div>
                <div>
                  <div className="font-display text-2xl text-navy">{v.title}</div>
                  <p className="mt-2 text-navy/70 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-6 gap-4 relative">
            <div className="col-span-5 col-start-2 overflow-hidden">
              <img
                src={IMG_1}
                alt="Vista da janela do avião"
                className="w-full h-[420px] lg:h-[560px] object-cover"
              />
            </div>
            <div className="col-span-4 -mt-24 lg:-mt-32 overflow-hidden border-8 border-cream">
              <img
                src={IMG_2}
                alt="Piscina de resort e coqueiros"
                className="w-full h-[240px] lg:h-[320px] object-cover"
              />
            </div>
          </div>
          <div className="mt-12 lg:mt-16 pl-4 border-l-2 border-gold/60">
            <p className="font-display italic-display text-2xl lg:text-3xl text-navy leading-snug max-w-md">
              “Uma viagem bem feita muda pouca coisa no mundo — e tudo dentro
              de quem volta.”
            </p>
            <div className="overline mt-4 text-navy/60">— manifesto Tropicalê</div>
          </div>
        </div>
      </div>
    </section>
  );
};
