import { ArrowDown } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/contact";

const HERO_IMG =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=85";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden text-cream"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Resort tropical com piscina e coqueiros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-24 lg:pb-32 min-h-screen flex flex-col justify-between">
        <div className="stagger max-w-4xl">
          <img
            src={`${process.env.PUBLIC_URL || ""}/logo-tropicale.jpg`}
            alt="Tropicalê Viagens e Turismo"
            className="h-32 lg:h-44 w-auto object-contain mb-8 shadow-2xl shadow-navy/40"
            draggable="false"
            data-testid="hero-brand-logo"
          />
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-14 bg-cream/70" />
            <span className="overline text-cream/85">Agência boutique brasileira</span>
          </div>

          <h1
            data-testid="hero-title"
            className="hero-title text-[3.4rem] sm:text-7xl lg:text-[7.5rem]"
          >
            O mundo <br />
            <span className="italic-display text-sun">contado</span> em<br />
            paisagens.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-10 max-w-xl text-base lg:text-lg font-light leading-relaxed text-cream/85"
          >
            Roteiros desenhados à mão para brasileiros que viajam com propósito —
            do sertão às Maldivas, do samba ao geisha. Cada detalhe pensado,
            cada destino curado por quem já esteve lá.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-button"
              className="btn-primary"
            >
              Solicitar Orçamento
              <span aria-hidden>→</span>
            </a>
            <a
              href="#servicos"
              data-testid="hero-cta-secondary"
              className="btn-outline"
            >
              Explorar destinos
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-end justify-between mt-16">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-cream/40 flex items-center justify-center animate-bounce">
              <ArrowDown size={18} />
            </div>
            <div>
              <div className="overline text-cream/70">Role para descobrir</div>
              <div className="font-display text-xl italic-display">
                dezesseis destinos, uma alma tropical.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-cream/90">
            <Stat number="12+" label="anos de estrada" />
            <Stat number="60+" label="países vividos" />
            <Stat number="98%" label="viajantes felizes" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div>
    <div className="font-display text-4xl italic-display leading-none">{number}</div>
    <div className="overline mt-2 opacity-70">{label}</div>
  </div>
);
