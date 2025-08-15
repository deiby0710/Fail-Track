import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Cuando cierres la app con Ctrl+C en consola
process.on('SIGINT', async () => {
  await prisma.$disconnect(); // cerrar conexión DB
  process.exit(0);            // salir del proceso
});

// Cuando el servidor reciba una señal de cierre (ej. en despliegues)
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});