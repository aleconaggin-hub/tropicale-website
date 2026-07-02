import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const links = [
  { href: "#sobre", label: "Sobre", testId: "nav-link-sobre" },
  { href: "#servicos", label: "Serviços", testId: "nav-link-servicos" },
  { href: "#contato", label: "Contato", testId: "nav-link-contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-navy" : "text-cream";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        scrolled ? "nav-scrolled" : "nav-transparent"
      }`}
    >
      <nav className={`max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4 ${textColor}`}>
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
          <img
            src={`${process.env.PUBLIC_URL || ""}/logo-tropicale.jpg`}
            alt="Tropicalê Viagens e Turismo"
            className="h-10 lg:h-12 w-auto object-contain select-none"
            draggable="false"
          />
          <span className="sr-only">Tropicalê Viagens e Turismo</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={l.testId}
                className="nav-link overline text-[0.72rem]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          data-testid="nav-cta-whatsapp"
          className={`hidden md:inline-flex items-center gap-2 overline text-[0.72rem] border px-4 py-2 transition-all ${
            scrolled
              ? "border-navy text-navy hover:bg-navy hover:text-cream"
              : "border-cream/60 text-cream hover:bg-cream hover:text-navy"
          }`}
        >
          Solicitar Orçamento
        </a>

        <button
          data-testid="mobile-nav-toggle"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div data-testid="mobile-nav-panel" className="md:hidden bg-cream border-t border-gold/40 text-navy">
          <ul className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl"
                  data-testid={`${l.testId}-mobile`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2"
                data-testid="nav-cta-whatsapp-mobile"
              >
                Solicitar Orçamento
              </a>
            </li>
            <li className="overline opacity-60 pt-4">{CONTACT.email}</li>
          </ul>
        </div>
      )}
    </header>
  );
};
