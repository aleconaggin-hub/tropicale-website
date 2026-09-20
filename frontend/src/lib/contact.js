// Central brand contact info (placeholders — replace later with real data).
export const CONTACT = {
  brand: "Tropicalê",
  brandSuffix: "Viagens e Turismo",
  email: "contato@tropicaleviagens.com.br",
  phoneDisplay: "+55 (19) 99343-6004 ",
  whatsappNumber: "551993436004", // digits only for wa.me
  instagramHandle: "@tropicaleviagenseturismo",
  instagramUrl: "https://instagram.com/tropicaleviagenseturismo",
  facebookHandle: "/tropicaleviagens",
  facebookUrl: "https://facebook.com/tropicaleviagenseturismo",
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
    `Olá, Tropicalê! Tenho interesse no roteiro *${dest.title}, ${dest.country}*. Podem me passar mais informações?`
  );
