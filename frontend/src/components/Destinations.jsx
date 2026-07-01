import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { buildDestinationWhatsapp } from "@/lib/contact";
import { DESTINATIONS, FILTERS, FALLBACK_IMAGE } from "@/data/destinations";

const priceBands = [
  { label: "Todos", value: null },
  { label: "Até R$ 5.000", value: 5000 },
  { label: "Até R$ 10.000", value: 10000 },
  { label: "Até R$ 20.000", value: 20000 },
];

export const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeContinent, setActiveContinent] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(null);
  const [search, setSearch] = useState("");

  const visible = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      if (activeCategory !== "Todos" && d.category !== activeCategory) return false;
      if (activeContinent !== "Todos" && d.continent !== activeContinent) return false;
      if (maxPrice && d.price_from > maxPrice) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !d.title.toLowerCase().includes(q) &&
          !d.country.toLowerCase().includes(q) &&
          !d.tagline.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [activeCategory, activeContinent, maxPrice, search]);

  return (
    <section id="servicos" data-testid="destinations-section" className="relative bg-cream py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-10 bg-navy/60" />
              <span className="overline text-navy/70">Serviços · Destinos</span>
            </div>
            <h2
              data-testid="destinations-title"
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-navy font-light"
            >
              Escolha para <br />
              <span className="italic-display text-orange-brand">onde</span> sonhar próximo.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <p className="text-navy/75 max-w-sm leading-relaxed">
              Roteiros do Brasil ao Pacífico Sul — todos personalizáveis. Filtre por estilo, continente e faixa de investimento.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div data-testid="filters-bar" className="mb-12 border-y border-gold/40 py-6 flex flex-col gap-6">
          <FilterRow label="Estilo" icon={<SlidersHorizontal size={14} className="text-navy/70" />}>
            {FILTERS.categories.map((c) => (
              <button
                key={c}
                data-testid={`filter-chip-category-${c.toLowerCase()}`}
                onClick={() => setActiveCategory(c)}
                className={`chip ${activeCategory === c ? "active" : ""}`}
              >
                {c}
              </button>
            ))}
          </FilterRow>

          <FilterRow label="Continente">
            {FILTERS.continents.map((c) => (
              <button
                key={c}
                data-testid={`filter-chip-continent-${c.toLowerCase()}`}
                onClick={() => setActiveContinent(c)}
                className={`chip ${activeContinent === c ? "active" : ""}`}
              >
                {c}
              </button>
            ))}
          </FilterRow>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 pr-4 border-r border-gold/40">
              <span className="overline text-navy/70">Investimento</span>
            </div>
            {priceBands.map((p) => (
              <button
                key={p.label}
                data-testid={`filter-chip-price-${p.value ?? "all"}`}
                onClick={() => setMaxPrice(p.value)}
                className={`chip ${maxPrice === p.value ? "active" : ""}`}
              >
                {p.label}
              </button>
            ))}

            <div className="ml-auto flex items-center gap-2 border border-gold/60 px-3 py-2 min-w-[240px]">
              <Search size={14} className="text-navy/60" />
              <input
                data-testid="destinations-search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar destino, país…"
                className="bg-transparent outline-none w-full text-sm text-navy placeholder:text-navy/50"
              />
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div data-testid="destinations-count" className="overline text-navy/60 mb-6">
          {`${visible.length} destino${visible.length !== 1 ? "s" : ""} encontrado${visible.length !== 1 ? "s" : ""}`}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 stagger"
          data-testid="destinations-grid"
          key={`${activeCategory}-${activeContinent}-${maxPrice}-${search}`}
        >
          {visible.map((d) => (
            <DestinationCard key={d.id} d={d} />
          ))}
        </div>

        {visible.length === 0 && (
          <div data-testid="destinations-empty" className="text-center py-24 border-t border-gold/40">
            <div className="font-display italic-display text-3xl text-navy mb-3">Nada por aqui — ainda.</div>
            <p className="text-navy/70">Ajuste os filtros ou fale com a gente para desenhar um roteiro sob medida.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const FilterRow = ({ label, icon, children }) => (
  <div className="flex flex-wrap items-center gap-3">
    <div className="flex items-center gap-2 pr-4 border-r border-gold/40">
      {icon}
      <span className="overline text-navy/70">{label}</span>
    </div>
    {children}
  </div>
);

const DestinationCard = ({ d }) => (
  <article data-testid={`destination-card-${d.slug}`} className="dest-card group">
    <div className="relative overflow-hidden aspect-[4/5] mb-5 bg-navy/10">
      <img
        src={d.image_url}
        alt={`${d.title}, ${d.country}`}
        className="dest-image w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
      <div className="absolute top-4 left-4 overline bg-cream/90 text-navy px-3 py-1.5">{d.category}</div>
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-navy text-cream dest-arrow">
        <ArrowUpRight size={16} />
      </div>
    </div>

    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="overline text-navy/60">
          {d.country} · {d.continent}
        </div>
        <h3 className="font-display text-3xl text-navy mt-1 leading-tight">{d.title}</h3>
        <p className="italic-display text-navy/70 mt-1">{d.tagline}</p>
      </div>
      <div className="text-right shrink-0">
        <div className="overline text-navy/60">a partir de</div>
        <div className="font-display text-xl text-navy">R$ {d.price_from.toLocaleString("pt-BR")}</div>
      </div>
    </div>

    <p className="text-sm text-navy/70 mt-4 leading-relaxed">{d.description}</p>

    <div className="flex flex-wrap gap-2 mt-4">
      {d.highlights.slice(0, 3).map((h) => (
        <span key={h} className="text-xs text-navy/70 border border-gold/50 px-2.5 py-1">
          {h}
        </span>
      ))}
    </div>

    <div className="mt-6 flex items-center justify-between">
      <span className="overline text-navy/60">{d.duration}</span>
      <a
        href={buildDestinationWhatsapp(d)}
        target="_blank"
        rel="noreferrer"
        data-testid={`destination-book-button-${d.slug}`}
        className="btn-dark"
      >
        Solicitar Orçamento
      </a>
    </div>
  </article>
);
