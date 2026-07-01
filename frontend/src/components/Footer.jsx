import { CONTACT } from "@/lib/contact";

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-cream text-navy pt-16 pb-10 border-t border-gold/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="font-display text-4xl italic-display leading-none">
          Tropical<span className="not-italic">ê</span>
        </div>
        <div className="overline text-navy/60 mt-2">Viagens &amp; Turismo</div>
        <p className="mt-6 max-w-md text-navy/75 leading-relaxed">
          Agência boutique brasileira de roteiros feitos à mão. CNPJ em breve · CADASTUR em breve.
        </p>
      </div>

      <div>
        <div className="overline text-navy/60 mb-4">Navegue</div>
        <ul className="space-y-2">
          <li><a href="#sobre" className="hover:text-orange-brand">Sobre</a></li>
          <li><a href="#servicos" className="hover:text-orange-brand">Serviços</a></li>
          <li><a href="#contato" className="hover:text-orange-brand">Contato</a></li>
        </ul>
      </div>

      <div>
        <div className="overline text-navy/60 mb-4">Fale com a gente</div>
        <ul className="space-y-2">
          <li><a href={`mailto:${CONTACT.email}`} className="hover:text-orange-brand">{CONTACT.email}</a></li>
          <li><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-orange-brand">Instagram {CONTACT.instagramHandle}</a></li>
          <li><a href={CONTACT.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-orange-brand">Facebook {CONTACT.facebookHandle}</a></li>
        </ul>
      </div>
    </div>

    <div className="hairline my-10" />

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy/60">
      <div>© {new Date().getFullYear()} Tropicalê Viagens e Turismo. Todos os direitos reservados.</div>
      <div className="overline">feito com o Atlântico entre os olhos</div>
    </div>
  </footer>
);
