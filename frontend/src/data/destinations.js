// Static destinations catalog — used directly by the frontend so the site
// can be deployed as a pure static build (GitHub Pages, Netlify, Vercel, etc.).

export const FILTERS = {
  categories: ["Todos", "Praia", "Aventura", "Cultural", "Romântico", "Luxo"],
  continents: ["Todos", "América", "Europa", "Ásia", "África", "Oceania"],
};

export const DESTINATIONS = [
  {
    id: "rio-de-janeiro",
    slug: "rio-de-janeiro",
    title: "Rio de Janeiro",
    country: "Brasil",
    continent: "América",
    category: "Cultural",
    price_from: 2500,
    duration: "5 dias / 4 noites",
    image_url:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80",
    tagline: "A cidade maravilhosa",
    description:
      "Do Cristo Redentor às areias de Ipanema — uma imersão na alma carioca com samba, sabor e paisagens de tirar o fôlego.",
    highlights: ["Cristo Redentor", "Pão de Açúcar", "Copacabana & Ipanema", "Roteiro gastronômico"],
    featured: true,
  },
  {
    id: "fernando-de-noronha",
    slug: "fernando-de-noronha",
    title: "Fernando de Noronha",
    country: "Brasil",
    continent: "América",
    category: "Praia",
    price_from: 5800,
    duration: "6 dias / 5 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Fernando_De_Noronha_Strand_Baia_Do_Sancho_%28125363049%29.jpeg/1920px-Fernando_De_Noronha_Strand_Baia_Do_Sancho_%28125363049%29.jpeg",
    tagline: "Santuário do Atlântico",
    description:
      "Piscinas naturais, golfinhos e o mais puro azul turquesa em um dos arquipélagos mais preservados do planeta.",
    highlights: ["Baía do Sancho", "Mergulho com tartarugas", "Trilhas ecológicas", "Pôr do sol no Boldró"],
    featured: true,
  },
  {
    id: "salvador",
    slug: "salvador",
    title: "Salvador",
    country: "Brasil",
    continent: "América",
    category: "Cultural",
    price_from: 2200,
    duration: "5 dias / 4 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Largo_do_Pelourinho_Salvador_2019-9754_%28cropped%29.jpg/1920px-Largo_do_Pelourinho_Salvador_2019-9754_%28cropped%29.jpg",
    tagline: "Berço da cultura brasileira",
    description:
      "Pelourinho, tambores, dendê e o calor da Bahia num roteiro que mistura história e alma popular.",
    highlights: ["Pelourinho", "Elevador Lacerda", "Praia do Porto da Barra", "Culinária baiana"],
    featured: false,
  },
  {
    id: "foz-do-iguacu",
    slug: "foz-do-iguacu",
    title: "Foz do Iguaçu",
    country: "Brasil",
    continent: "América",
    category: "Aventura",
    price_from: 2800,
    duration: "4 dias / 3 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cataratas_do_Igua%C3%A7u_-_Vista_de_cima_alt.jpg/1920px-Cataratas_do_Igua%C3%A7u_-_Vista_de_cima_alt.jpg",
    tagline: "A força da natureza",
    description:
      "As Cataratas em toda sua imponência, com passeios de bote, trilhas e a vista da Garganta do Diabo.",
    highlights: ["Cataratas do Iguaçu", "Macuco Safari", "Parque das Aves", "Usina de Itaipu"],
    featured: false,
  },
  {
    id: "paris",
    slug: "paris",
    title: "Paris",
    country: "França",
    continent: "Europa",
    category: "Romântico",
    price_from: 12000,
    duration: "7 dias / 6 noites",
    image_url:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    tagline: "A cidade luz",
    description:
      "Café da manhã à beira do Sena, jantar com vista para a Torre Eiffel e passeios de bicicleta pelo Marais.",
    highlights: ["Torre Eiffel", "Louvre & Orsay", "Montmartre", "Cruzeiro no Sena"],
    featured: true,
  },
  {
    id: "santorini",
    slug: "santorini",
    title: "Santorini",
    country: "Grécia",
    continent: "Europa",
    category: "Romântico",
    price_from: 18000,
    duration: "8 dias / 7 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Village_Oia%2C_Santorini%2C_Gr%C3%A8ce%2C_2017.jpg/1920px-Village_Oia%2C_Santorini%2C_Gr%C3%A8ce%2C_2017.jpg",
    tagline: "O azul infinito do Egeu",
    description:
      "Casas brancas debruçadas sobre o mar, vinhos vulcânicos e um pôr do sol em Oia que fica para sempre.",
    highlights: ["Oia sunset", "Praias vulcânicas", "Degustação de vinhos", "Passeio de veleiro"],
    featured: true,
  },
  {
    id: "roma",
    slug: "roma",
    title: "Roma",
    country: "Itália",
    continent: "Europa",
    category: "Cultural",
    price_from: 11500,
    duration: "7 dias / 6 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/1920px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg",
    tagline: "A cidade eterna",
    description:
      "Do Coliseu à Fontana di Trevi, uma jornada por mais de dois mil anos de história — com muita pasta e gelato pelo caminho.",
    highlights: ["Coliseu", "Vaticano", "Fontana di Trevi", "Bairro Trastevere"],
    featured: false,
  },
  {
    id: "machu-picchu",
    slug: "machu-picchu",
    title: "Machu Picchu",
    country: "Peru",
    continent: "América",
    category: "Aventura",
    price_from: 6200,
    duration: "7 dias / 6 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG/1920px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_47.JPG",
    tagline: "A cidade perdida dos Incas",
    description:
      "Cusco, Vale Sagrado e o encontro místico com Machu Picchu ao amanhecer — uma das grandes viagens de uma vida.",
    highlights: ["Machu Picchu ao amanhecer", "Vale Sagrado", "Trem panorâmico", "Cusco colonial"],
    featured: true,
  },
  {
    id: "cancun",
    slug: "cancun",
    title: "Cancún & Riviera Maya",
    country: "México",
    continent: "América",
    category: "Praia",
    price_from: 7500,
    duration: "7 dias / 6 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cancun_Beach.jpg/1920px-Cancun_Beach.jpg",
    tagline: "Caribe mexicano em modo all inclusive",
    description:
      "Resorts pé na areia, cenotes cristalinos e as ruínas maias de Tulum — para relaxar e explorar sem pressa.",
    highlights: ["Resort all inclusive", "Cenotes", "Tulum & Chichén Itzá", "Isla Mujeres"],
    featured: false,
  },
  {
    id: "nova-york",
    slug: "nova-york",
    title: "Nova York",
    country: "Estados Unidos",
    continent: "América",
    category: "Cultural",
    price_from: 9800,
    duration: "7 dias / 6 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Manhattan_from_Weehawken%2C_NJ.jpg/1920px-Manhattan_from_Weehawken%2C_NJ.jpg",
    tagline: "A cidade que nunca dorme",
    description:
      "Broadway, Central Park, MoMA e brunches no West Village — Nova York em ritmo intenso e inesquecível.",
    highlights: ["Broadway", "Central Park", "Estátua da Liberdade", "Compras na 5ª Avenida"],
    featured: false,
  },
  {
    id: "bali",
    slug: "bali",
    title: "Bali",
    country: "Indonésia",
    continent: "Ásia",
    category: "Cultural",
    price_from: 14500,
    duration: "10 dias / 9 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rice_terraces%2C_Bali.jpg/1920px-Rice_terraces%2C_Bali.jpg",
    tagline: "A ilha dos deuses",
    description:
      "Templos milenares, arrozais em terraço, praias secretas e retiros de bem-estar entre Ubud, Uluwatu e Nusa Penida.",
    highlights: ["Ubud & arrozais", "Templo Tanah Lot", "Ilha Nusa Penida", "Aulas de yoga"],
    featured: true,
  },
  {
    id: "maldivas",
    slug: "maldivas",
    title: "Maldivas",
    country: "Maldivas",
    continent: "Ásia",
    category: "Romântico",
    price_from: 25000,
    duration: "8 dias / 7 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/MaldivesBungalows.jpg/1920px-MaldivesBungalows.jpg",
    tagline: "Bangalôs sobre o mar",
    description:
      "Ilhas privadas, jantares na areia e o snorkel mais claro do mundo — a viagem definitiva a dois.",
    highlights: ["Bangalô overwater", "Jantar privativo", "Mergulho com arraias", "Spa balinês"],
    featured: true,
  },
  {
    id: "toquio",
    slug: "toquio",
    title: "Tóquio & Kyoto",
    country: "Japão",
    continent: "Ásia",
    category: "Cultural",
    price_from: 16000,
    duration: "10 dias / 9 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mt_Fuji_Sunset_from_Okamoto%2C_Setagaya%2C_Tokyo.jpg/1920px-Mt_Fuji_Sunset_from_Okamoto%2C_Setagaya%2C_Tokyo.jpg",
    tagline: "Tradição e futuro no mesmo prato",
    description:
      "Do neon de Shibuya aos templos de Kyoto, passando pela cerimônia do chá e por um jantar num sushi bar escondido.",
    highlights: ["Shibuya & Shinjuku", "Templos de Kyoto", "Monte Fuji", "Sushi omakase"],
    featured: false,
  },
  {
    id: "dubai",
    slug: "dubai",
    title: "Dubai",
    country: "Emirados Árabes",
    continent: "Ásia",
    category: "Luxo",
    price_from: 13000,
    duration: "6 dias / 5 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Burj_dubai_3.11.08.jpg/1920px-Burj_dubai_3.11.08.jpg",
    tagline: "Ouro, deserto e arranha-céus",
    description:
      "Burj Khalifa, safári no deserto, jantar em restaurante estrelado e o sabor do Golfo em cada esquina.",
    highlights: ["Burj Khalifa", "Safári no deserto", "Palm Jumeirah", "Souk de ouro"],
    featured: false,
  },
  {
    id: "cidade-do-cabo",
    slug: "cidade-do-cabo",
    title: "Cidade do Cabo",
    country: "África do Sul",
    continent: "África",
    category: "Aventura",
    price_from: 15500,
    duration: "9 dias / 8 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cape_Town_%28ZA%29%2C_Table_Mountain_--_2024_--_2825.jpg/1920px-Cape_Town_%28ZA%29%2C_Table_Mountain_--_2024_--_2825.jpg",
    tagline: "Onde dois oceanos se encontram",
    description:
      "Table Mountain, vinícolas em Stellenbosch e um safári exclusivo em Kruger — natureza selvagem em alto padrão.",
    highlights: ["Table Mountain", "Cabo da Boa Esperança", "Safári em Kruger", "Vinícolas"],
    featured: true,
  },
  {
    id: "sydney",
    slug: "sydney",
    title: "Sydney",
    country: "Austrália",
    continent: "Oceania",
    category: "Aventura",
    price_from: 22000,
    duration: "11 dias / 10 noites",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1920px-Sydney_Opera_House_-_Dec_2008.jpg",
    tagline: "Do outro lado do mundo",
    description:
      "A Ópera de Sydney, praias famosas, mergulho na Grande Barreira e o interior selvagem — tudo em um só roteiro.",
    highlights: ["Ópera de Sydney", "Bondi Beach", "Great Barrier Reef", "Blue Mountains"],
    featured: false,
  },
];

// Fallback image (Wikimedia — never 404s) used if any URL fails to load.
export const FALLBACK_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cancun_Beach.jpg/1920px-Cancun_Beach.jpg";
