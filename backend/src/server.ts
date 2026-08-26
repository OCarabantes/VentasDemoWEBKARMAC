import "dotenv/config";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import { z } from "zod";

const prisma = new PrismaClient();
const app = Fastify({
  logger: true,
  trustProxy: true,
});

const origin = process.env.FRONTEND_ORIGIN ?? "http://localhost:5173";

await app.register(helmet, {
  contentSecurityPolicy: false,
});
await app.register(cors, {
  origin,
  credentials: true,
});
await app.register(rateLimit, {
  max: 120,
  timeWindow: "1 minute",
});

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(1200),
});

app.get("/api/health", async () => ({
  ok: true,
  service: "karmac-api",
}));

app.get("/api/products", async () => {
  if (!process.env.DATABASE_URL) {
    app.log.warn("DATABASE_URL no configurada; /api/products respondera sin productos");
    return [];
  }

  const products = await prisma.product.findMany({
    where: { active: true },
    include: { category: true },
    orderBy: [{ featured: "desc" }, { sortOrder: "asc" }, { name: "asc" }],
  });

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category.name,
    usage: product.usage,
    description: product.description,
    imageUrl: product.imageUrl,
    featured: product.featured,
  }));
});

app.get("/api/recipes", async () => {
  if (!process.env.DATABASE_URL) {
    app.log.warn("DATABASE_URL no configurada; /api/recipes respondera sin recetas");
    return [];
  }

  return prisma.recipe.findMany({
    where: { active: true },
    orderBy: { title: "asc" },
  });
});

app.post("/api/contact", async (request, reply) => {
  const parsed = contactSchema.safeParse(request.body);
  if (!parsed.success) {
    return reply.code(400).send({ error: "Datos invalidos" });
  }

  return reply.code(202).send({
    ok: true,
    message: "Solicitud recibida",
  });
});

const port = Number(process.env.API_PORT ?? 4000);

try {
  await app.listen({ port, host: "0.0.0.0" });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  await app.close();
});
