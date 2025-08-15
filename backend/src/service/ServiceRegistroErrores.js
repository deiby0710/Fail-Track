import { prisma } from "../config/prisma.js"

// Enviar el registro de error a la base de datos
export async function createError(data) {
    return await prisma.RegistroErrores.create({
        data
    })
}