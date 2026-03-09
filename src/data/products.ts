import type { Product } from "../types/Product";
import whey from "../assets/images/whey.jpg";
import creatina from "..//assets/images/creatina.jpg";
import preworkout from "..//assets/images/preworkout.jpg";
import bcaa from "..//assets/images/bcaa.jpg";
import shaker from "..//assets/images/shaker.jpg";
import chocomax from "..//assets/images/chocomax.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Proteína Whey Gold 2 lb",
    price: 34990,
    image: whey,
    description: "Proteína de suero ideal para apoyar la recuperación y el crecimiento muscular.",
    category: "proteina",
  },
  {
    id: 2,
    name: "Creatina Monohidratada 300 g",
    price: 19990,
    image: creatina,
    description: "Creatina pura para mejorar fuerza, rendimiento y recuperación.",
    category: "creatina",
  },
  {
    id: 3,
    name: "Pre Entreno Explosion 250 g",
    price: 22990,
    image: preworkout,
    description: "Fórmula energizante para entrenamientos intensos y mayor enfoque.",
    category: "pre-entreno",
  },
  {
    id: 4,
    name: "BCAA Recovery 400 g",
    price: 18990,
    image: bcaa,
    description: "Aminoácidos esenciales para apoyar la recuperación muscular.",
    category: "proteina",
  },
  {
    id: 5,
    name: "Shaker Pro 700 ml",
    price: 7990,
    image: shaker,
    description: "Shaker resistente y práctico para mezclar tus suplementos.",
    category: "accesorio",
  },
  {
    id: 6,
    name: "Barra Proteica Choco Max",
    price: 2490,
    image: chocomax,
    description: "Snack alto en proteína ideal para después del entrenamiento o colación.",
    category: "proteina",
  },
];