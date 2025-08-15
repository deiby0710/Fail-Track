import { prisma } from "../config/prisma.js";

export const RegistroDevolucionesS = (data) => {
    return prisma.devoluciones.create({
        data
    })
}