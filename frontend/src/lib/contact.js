// Central brand contact info (placeholders — replace later with real data).
export const CONTACT = {
  brand: "Tropicalê",
  brandSuffix: "Viagens e Turismo",
  email: "contato@tropicaleviagens.com.br",
  phoneDisplay: "+55 (11) 99999-9999",
  whatsappNumber: "5511999999999", // digits only for wa.me
  instagramHandle: "@tropicaleviagens",
  instagramUrl: "https://instagram.com/tropicaleviagens",
  facebookHandle: "/tropicaleviagens",
  facebookUrl: "https://facebook.com/tropicaleviagens",
  addressCity: "São Paulo, Brasil",
};

export const buildWhatsAppLink = (message) => {
  const text = encodeURIComponent(
    message || "Olá! Gostaria de solicitar um orçamento de viagem com a Tropicalê."
  );
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
};

export const buildDestinationWhatsapp = (dest) =>
  buildWhatsAppLink(
    `Olá, Tropicalê! Tenho interesse no roteiro *${dest.title}, ${dest.country}* (a partir de R$ ${dest.price_from.toLocaleString("pt-BR")}). Podem me passar mais informações?`
  );
