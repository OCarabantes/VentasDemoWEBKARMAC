import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Lomo vetado premium",
    slug: "lomo-vetado-premium",
    category: "Vacuno",
    usage: "Parrilla",
    description: "Corte jugoso con marmoleo marcado, listo para sellar fuerte y servir al punto.",
    imageUrl: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sortOrder: 1,
  },
  {
    name: "Asado de tira",
    slug: "asado-de-tira",
    category: "Vacuno",
    usage: "Ahumado",
    description: "Formato clasico para coccion lenta, brasas suaves y salsa intensa.",
    imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sortOrder: 2,
  },
  {
    name: "Costillar de cerdo",
    slug: "costillar-de-cerdo",
    category: "Cerdo",
    usage: "Horno",
    description: "Costillas carnosas para glasear, marinar o llevar directo a la parrilla.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sortOrder: 3,
  },
  {
    name: "Pulled pork estilo Swift",
    slug: "pulled-pork-estilo-swift",
    category: "Preparados",
    usage: "Sandwich",
    description: "Producto base por defecto para sanguches, tacos y bowls. Reemplazable por SKU Karmac.",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
    featured: false,
    sortOrder: 4,
  },
  {
    name: "Brochetas de filete",
    slug: "brochetas-de-filete",
    category: "Preparados",
    usage: "Rapido",
    description: "Porciones listas para una parrilla express con verduras, sal gruesa y fuego vivo.",
    imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=85",
    featured: false,
    sortOrder: 5,
  },
  {
    name: "Chuleta bourbon maple",
    slug: "chuleta-bourbon-maple",
    category: "Cerdo",
    usage: "Sarten",
    description: "Placeholder dulce y ahumado inspirado en la referencia, ideal para campanas de temporada.",
    imageUrl: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=85",
    featured: false,
    sortOrder: 6,
  },
];

async function main() {
  for (const name of ["Vacuno", "Cerdo", "Preparados"]) {
    await prisma.category.upsert({
      where: { slug: name.toLowerCase() },
      update: {},
      create: {
        name,
        slug: name.toLowerCase(),
      },
    });
  }

  for (const product of products) {
    const { category: categoryName, ...productData } = product;
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: categoryName.toLowerCase() },
    });

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        ...productData,
        categoryId: category.id,
      },
      create: {
        ...productData,
        categoryId: category.id,
      },
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
