import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 11.9-5.4 11.9-12 0-3.2-1.2-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 21.9 12c0 5.4-4.5 9.8-9.9 9.8zm5.4-7.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.6 4.2.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
  </svg>
);

export const Contact = () => {
  return (
    <section
      id="contato"
      data-testid="contact-section"
      className="relative bg-navy text-cream py-24 lg:py-40 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-orange-brand/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-teal-brand/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-10 bg-cream/50" />
            <span className="overline text-cream/70">Contato</span>
          </div>

          <h2
            data-testid="contact-title"
            className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight font-light"
          >
            Conta pra <br />
            <span className="italic-display text-sun">gente</span> onde <br />
            você quer ir.
          </h2>

          <p className="mt-10 text-lg text-cream/80 max-w-xl leading-relaxed">
            Respondemos em até 2 horas úteis. Sem robô do outro lado —
            gente que viaja atendendo gente que viaja.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-link"
              className="btn-primary"
            >
              <WhatsAppIcon size={16} /> Chamar no WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              data-testid="contact-email-link"
              className="btn-outline"
            >
              <Mail size={16} /> Enviar e-mail
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 lg:pt-14">
          <ContactRow
            icon={<Mail size={18} />}
            label="E-mail"
            testId="contact-info-email"
          >
            <a href={`mailto:${CONTACT.email}`} className="hover:text-sun transition-colors">
              {CONTACT.email}
            </a>
          </ContactRow>

          <ContactRow
            icon={<Phone size={18} />}
            label="Telefone / WhatsApp"
            testId="contact-info-phone"
          >
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sun transition-colors"
            >
              {CONTACT.phoneDisplay}
            </a>
          </ContactRow>

          <ContactRow
            icon={<Instagram size={18} />}
            label="Instagram"
            testId="contact-info-instagram"
          >
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sun transition-colors"
            >
              {CONTACT.instagramHandle}
            </a>
          </ContactRow>

          <ContactRow
            icon={<Facebook size={18} />}
            label="Facebook"
            testId="contact-info-facebook"
          >
            <a
              href={CONTACT.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sun transition-colors"
            >
              {CONTACT.facebookHandle}
            </a>
          </ContactRow>

          <ContactRow
            icon={<MapPin size={18} />}
            label="Onde estamos"
            testId="contact-info-address"
          >
            <span>{CONTACT.addressCity}</span>
          </ContactRow>

          <div className="pt-6 border-t border-cream/20">
            <div className="overline text-cream/60 mb-3">Horário de atendimento</div>
            <div className="font-display text-xl">Seg–Sex · 9h às 19h</div>
            <div className="text-cream/70 text-sm">Sáb · 10h às 14h</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({ icon, label, testId, children }) => (
  <div data-testid={testId} className="grid grid-cols-[auto_1fr] gap-5 items-start border-b border-cream/15 pb-6">
    <div className="w-10 h-10 flex items-center justify-center border border-cream/30 text-cream/90">{icon}</div>
    <div>
      <div className="overline text-cream/55 mb-1">{label}</div>
      <div className="font-display text-2xl lg:text-3xl">{children}</div>
    </div>
  </div>
);
