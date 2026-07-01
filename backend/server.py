from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Tropicalê Viagens e Turismo API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class Destination(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: str
    country: str
    continent: str  # América, Europa, Ásia, África, Oceania
    category: str   # Praia, Aventura, Cultural, Romântico, Luxo
    price_from: int  # BRL
    duration: str    # "7 dias / 6 noites"
    image_url: str
    tagline: str
    description: str
    highlights: List[str] = Field(default_factory=list)
    featured: bool = False


DESTINATIONS_SEED: List[dict] = [
    {
        "slug": "rio-de-janeiro",
        "title": "Rio de Janeiro",
        "country": "Brasil",
        "continent": "América",
        "category": "Cultural",
        "price_from": 2500,
        "duration": "5 dias / 4 noites",
        "image_url": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A cidade maravilhosa",
        "description": "Do Cristo Redentor às areias de Ipanema — uma imersão na alma carioca com samba, sabor e paisagens de tirar o fôlego.",
        "highlights": ["Cristo Redentor", "Pão de Açúcar", "Copacabana & Ipanema", "Roteiro gastronômico"],
        "featured": True,
    },
    {
        "slug": "fernando-de-noronha",
        "title": "Fernando de Noronha",
        "country": "Brasil",
        "continent": "América",
        "category": "Praia",
        "price_from": 5800,
        "duration": "6 dias / 5 noites",
        "image_url": "https://images.unsplash.com/photo-1583074881224-abcbf6f77e13?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Santuário do Atlântico",
        "description": "Piscinas naturais, golfinhos e o mais puro azul turquesa em um dos arquipélagos mais preservados do planeta.",
        "highlights": ["Baía do Sancho", "Mergulho com tartarugas", "Trilhas ecológicas", "Pôr do sol no Boldró"],
        "featured": True,
    },
    {
        "slug": "salvador",
        "title": "Salvador",
        "country": "Brasil",
        "continent": "América",
        "category": "Cultural",
        "price_from": 2200,
        "duration": "5 dias / 4 noites",
        "image_url": "https://images.unsplash.com/photo-1662460330353-c1c67dc26d13?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Berço da cultura brasileira",
        "description": "Pelourinho, tambores, dendê e o calor da Bahia num roteiro que mistura história e alma popular.",
        "highlights": ["Pelourinho", "Elevador Lacerda", "Praia do Porto da Barra", "Culinária baiana"],
        "featured": False,
    },
    {
        "slug": "foz-do-iguacu",
        "title": "Foz do Iguaçu",
        "country": "Brasil",
        "continent": "América",
        "category": "Aventura",
        "price_from": 2800,
        "duration": "4 dias / 3 noites",
        "image_url": "https://images.unsplash.com/photo-1629829586953-16c85c7f28d5?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A força da natureza",
        "description": "As Cataratas em toda sua imponência, com passeios de bote, trilhas e a vista da Garganta do Diabo.",
        "highlights": ["Cataratas do Iguaçu", "Macuco Safari", "Parque das Aves", "Usina de Itaipu"],
        "featured": False,
    },
    {
        "slug": "paris",
        "title": "Paris",
        "country": "França",
        "continent": "Europa",
        "category": "Romântico",
        "price_from": 12000,
        "duration": "7 dias / 6 noites",
        "image_url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A cidade luz",
        "description": "Café da manhã à beira do Sena, jantar com vista para a Torre Eiffel e passeios de bicicleta pelo Marais.",
        "highlights": ["Torre Eiffel", "Louvre & Orsay", "Montmartre", "Cruzeiro no Sena"],
        "featured": True,
    },
    {
        "slug": "santorini",
        "title": "Santorini",
        "country": "Grécia",
        "continent": "Europa",
        "category": "Romântico",
        "price_from": 18000,
        "duration": "8 dias / 7 noites",
        "image_url": "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1600&q=80",
        "tagline": "O azul infinito do Egeu",
        "description": "Casas brancas debruçadas sobre o mar, vinhos vulcânicos e um pôr do sol em Oia que fica para sempre.",
        "highlights": ["Oia sunset", "Praias vulcânicas", "Degustação de vinhos", "Passeio de veleiro"],
        "featured": True,
    },
    {
        "slug": "roma",
        "title": "Roma",
        "country": "Itália",
        "continent": "Europa",
        "category": "Cultural",
        "price_from": 11500,
        "duration": "7 dias / 6 noites",
        "image_url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A cidade eterna",
        "description": "Do Coliseu à Fontana di Trevi, uma jornada por mais de dois mil anos de história — com muita pasta e gelato pelo caminho.",
        "highlights": ["Coliseu", "Vaticano", "Fontana di Trevi", "Bairro Trastevere"],
        "featured": False,
    },
    {
        "slug": "machu-picchu",
        "title": "Machu Picchu",
        "country": "Peru",
        "continent": "América",
        "category": "Aventura",
        "price_from": 6200,
        "duration": "7 dias / 6 noites",
        "image_url": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A cidade perdida dos Incas",
        "description": "Cusco, Vale Sagrado e o encontro místico com Machu Picchu ao amanhecer — uma das grandes viagens de uma vida.",
        "highlights": ["Machu Picchu ao amanhecer", "Vale Sagrado", "Trem panorâmico", "Cusco colonial"],
        "featured": True,
    },
    {
        "slug": "cancun",
        "title": "Cancún & Riviera Maya",
        "country": "México",
        "continent": "América",
        "category": "Praia",
        "price_from": 7500,
        "duration": "7 dias / 6 noites",
        "image_url": "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Caribe mexicano em modo all inclusive",
        "description": "Resorts pé na areia, cenotes cristalinos e as ruínas maias de Tulum — para relaxar e explorar sem pressa.",
        "highlights": ["Resort all inclusive", "Cenotes", "Tulum & Chichén Itzá", "Isla Mujeres"],
        "featured": False,
    },
    {
        "slug": "nova-york",
        "title": "Nova York",
        "country": "Estados Unidos",
        "continent": "América",
        "category": "Cultural",
        "price_from": 9800,
        "duration": "7 dias / 6 noites",
        "image_url": "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A cidade que nunca dorme",
        "description": "Broadway, Central Park, MoMA e brunches no West Village — Nova York em ritmo intenso e inesquecível.",
        "highlights": ["Broadway", "Central Park", "Estátua da Liberdade", "Compras na 5ª Avenida"],
        "featured": False,
    },
    {
        "slug": "bali",
        "title": "Bali",
        "country": "Indonésia",
        "continent": "Ásia",
        "category": "Cultural",
        "price_from": 14500,
        "duration": "10 dias / 9 noites",
        "image_url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
        "tagline": "A ilha dos deuses",
        "description": "Templos milenares, arrozais em terraço, praias secretas e retiros de bem-estar entre Ubud, Uluwatu e Nusa Penida.",
        "highlights": ["Ubud & arrozais", "Templo Tanah Lot", "Ilha Nusa Penida", "Aulas de yoga"],
        "featured": True,
    },
    {
        "slug": "maldivas",
        "title": "Maldivas",
        "country": "Maldivas",
        "continent": "Ásia",
        "category": "Romântico",
        "price_from": 25000,
        "duration": "8 dias / 7 noites",
        "image_url": "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Bangalôs sobre o mar",
        "description": "Ilhas privadas, jantares na areia e o snorkel mais claro do mundo — a viagem definitiva a dois.",
        "highlights": ["Bangalô overwater", "Jantar privativo", "Mergulho com arraias", "Spa balinês"],
        "featured": True,
    },
    {
        "slug": "toquio",
        "title": "Tóquio & Kyoto",
        "country": "Japão",
        "continent": "Ásia",
        "category": "Cultural",
        "price_from": 16000,
        "duration": "10 dias / 9 noites",
        "image_url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Tradição e futuro no mesmo prato",
        "description": "Do neon de Shibuya aos templos de Kyoto, passando pela cerimônia do chá e por um jantar num sushi bar escondido.",
        "highlights": ["Shibuya & Shinjuku", "Templos de Kyoto", "Monte Fuji", "Sushi omakase"],
        "featured": False,
    },
    {
        "slug": "dubai",
        "title": "Dubai",
        "country": "Emirados Árabes",
        "continent": "Ásia",
        "category": "Luxo",
        "price_from": 13000,
        "duration": "6 dias / 5 noites",
        "image_url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Ouro, deserto e arranha-céus",
        "description": "Burj Khalifa, safári no deserto, jantar em restaurante estrelado e o sabor do Golfo em cada esquina.",
        "highlights": ["Burj Khalifa", "Safári no deserto", "Palm Jumeirah", "Souk de ouro"],
        "featured": False,
    },
    {
        "slug": "cidade-do-cabo",
        "title": "Cidade do Cabo",
        "country": "África do Sul",
        "continent": "África",
        "category": "Aventura",
        "price_from": 15500,
        "duration": "9 dias / 8 noites",
        "image_url": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Onde dois oceanos se encontram",
        "description": "Table Mountain, vinícolas em Stellenbosch e um safári exclusivo em Kruger — natureza selvagem em alto padrão.",
        "highlights": ["Table Mountain", "Cabo da Boa Esperança", "Safári em Kruger", "Vinícolas"],
        "featured": True,
    },
    {
        "slug": "sydney",
        "title": "Sydney",
        "country": "Austrália",
        "continent": "Oceania",
        "category": "Aventura",
        "price_from": 22000,
        "duration": "11 dias / 10 noites",
        "image_url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
        "tagline": "Do outro lado do mundo",
        "description": "A Ópera de Sydney, praias famosas, mergulho na Grande Barreira e o interior selvagem — tudo em um só roteiro.",
        "highlights": ["Ópera de Sydney", "Bondi Beach", "Great Barrier Reef", "Blue Mountains"],
        "featured": False,
    },
]


@app.on_event("startup")
async def seed_destinations():
    """Upsert seed destinations by slug so image/copy updates propagate."""
    for d in DESTINATIONS_SEED:
        obj = Destination(**d).model_dump()
        await db.destinations.update_one(
            {"slug": d["slug"]},
            {"$set": {k: v for k, v in obj.items() if k != "id"},
             "$setOnInsert": {"id": obj["id"]}},
            upsert=True,
        )
    logger.info(f"Seeded/updated {len(DESTINATIONS_SEED)} destinations")


@api_router.get("/")
async def root():
    return {"message": "Tropicalê Viagens e Turismo API"}


@api_router.get("/destinations", response_model=List[Destination])
async def list_destinations(
    category: Optional[str] = Query(None),
    continent: Optional[str] = Query(None),
    max_price: Optional[int] = Query(None),
    search: Optional[str] = Query(None),
):
    query: dict = {}
    if category and category.lower() != "todos":
        query["category"] = category
    if continent and continent.lower() != "todos":
        query["continent"] = continent
    if max_price:
        query["price_from"] = {"$lte": max_price}
    if search:
        query["$or"] = [
            {"title": {"$regex": search, "$options": "i"}},
            {"country": {"$regex": search, "$options": "i"}},
            {"tagline": {"$regex": search, "$options": "i"}},
        ]
    docs = await db.destinations.find(query, {"_id": 0}).to_list(200)
    return docs


@api_router.get("/destinations/filters")
async def get_filters():
    return {
        "categories": ["Todos", "Praia", "Aventura", "Cultural", "Romântico", "Luxo"],
        "continents": ["Todos", "América", "Europa", "Ásia", "África", "Oceania"],
    }


@api_router.get("/destinations/{slug}", response_model=Destination)
async def get_destination(slug: str):
    doc = await db.destinations.find_one({"slug": slug}, {"_id": 0})
    return doc


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
