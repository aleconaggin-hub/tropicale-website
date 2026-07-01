export const Marquee = () => {
  const words = [
    "Rio de Janeiro",
    "Fernando de Noronha",
    "Paris",
    "Santorini",
    "Bali",
    "Machu Picchu",
    "Maldivas",
    "Tóquio",
    "Cidade do Cabo",
    "Cancún",
    "Dubai",
    "Sydney",
  ];
  const line = [...words, ...words];
  return (
    <section
      data-testid="marquee-section"
      aria-hidden="true"
      className="relative py-16 lg:py-24 border-y border-gold/40 bg-cream overflow-hidden"
    >
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee">
          {line.map((w, i) => (
            <span key={i} className="marquee-item">
              {w}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
