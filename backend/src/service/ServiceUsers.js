import { prisma } from "../config/prisma.js";

export async function getUsersNameSede(data) {
    return await prisma.usuarios.findMany({
        select: {
            nombrecompleto: true,
            sede: true
        }
    })
}